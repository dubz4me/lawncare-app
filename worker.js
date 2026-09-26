// R-DUB's Lawn Care — Backend Worker
// ------------------------------------------------------------------
// This is the real API server: authentication, sessions, and the
// data endpoints the app will call instead of window.storage.
//
// PERMISSION MODEL (matches what was agreed):
//   - owner: sees everything
//   - crew:  sees everything EXCEPT expenses, inventory, time logs,
//            and the payment_status/paid_at fields on jobs
//
// STATUS: Auth is fully built. Two data endpoints (estimates, expenses)
// are fully built as templates — one "everyone, but strip sensitive
// fields" pattern, one "owner-only" pattern. The remaining tables
// (bookings, appointments, customer_profiles, inventory_items,
// time_logs) follow one of these two exact patterns — see the
// bottom of this file for the mechanical checklist.
// ------------------------------------------------------------------

const SESSION_DURATION_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const OWNER_ONLY_PREFIXES = ["/api/expenses", "/api/inventory-items"];

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}

function errorResponse(message, status = 400) {
  return jsonResponse({ error: message }, status);
}

function corsPreflightResponse() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

// ---- Password hashing (Web Crypto — no Node crypto in Workers) ----

async function hashPassword(password, salt) {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveBits"]);
  const derivedBits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt: enc.encode(salt), iterations: 100000, hash: "SHA-256" },
    keyMaterial,
    256
  );
  return Array.from(new Uint8Array(derivedBits)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function verifyPassword(password, salt, expectedHash) {
  const computed = await hashPassword(password, salt);
  return computed === expectedHash;
}

function generateToken() {
  return crypto.randomUUID() + crypto.randomUUID();
}

function getToken(request) {
  const auth = request.headers.get("Authorization");
  if (auth && auth.startsWith("Bearer ")) return auth.slice(7);
  return null;
}

async function getUserFromToken(db, token) {
  if (!token) return null;
  const session = await db.prepare("SELECT * FROM sessions WHERE token = ? AND expires_at > ?").bind(token, Date.now()).first();
  if (!session) return null;
  const user = await db.prepare("SELECT id, username, role, name, disabled FROM users WHERE id = ?").bind(session.user_id).first();
  if (!user || user.disabled) return null;
  return user;
}






function b64urlBytes(bytes) {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function b64urlText(text) {
  return b64urlBytes(new TextEncoder().encode(text));
}

function b64urlDecodeBytes(value) {
  const s = String(value || "").replace(/-/g, "+").replace(/_/g, "/");
  const padded = s + "=".repeat((4 - (s.length % 4)) % 4);
  const raw = atob(padded);
  return Uint8Array.from(raw, (c) => c.charCodeAt(0));
}

async function ensureWebPushTables(db) {
  await db.prepare(`CREATE TABLE IF NOT EXISTS web_push_keys (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    public_key TEXT NOT NULL,
    private_jwk TEXT NOT NULL,
    created_at INTEGER NOT NULL
  )`).run();
  await db.prepare(`CREATE TABLE IF NOT EXISTS web_push_subscriptions (
    endpoint TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    p256dh TEXT,
    auth TEXT,
    created_at INTEGER NOT NULL,
    last_seen INTEGER NOT NULL
  )`).run();
}

async function getOrCreateVapidKeys(db) {
  await ensureWebPushTables(db);
  let row = await db.prepare("SELECT public_key, private_jwk FROM web_push_keys WHERE id = 1").first();
  if (row) return { publicKey: row.public_key, privateJwk: JSON.parse(row.private_jwk) };
  const pair = await crypto.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, true, ["sign", "verify"]);
  const pub = await crypto.subtle.exportKey("jwk", pair.publicKey);
  const priv = await crypto.subtle.exportKey("jwk", pair.privateKey);
  const x = b64urlDecodeBytes(pub.x);
  const y = b64urlDecodeBytes(pub.y);
  const uncompressed = new Uint8Array(65);
  uncompressed[0] = 4;
  uncompressed.set(x, 1);
  uncompressed.set(y, 33);
  const publicKey = b64urlBytes(uncompressed);
  await db.prepare("INSERT INTO web_push_keys (id, public_key, private_jwk, created_at) VALUES (1, ?, ?, ?)")
    .bind(publicKey, JSON.stringify(priv), Date.now()).run();
  return { publicKey, privateJwk: priv };
}

async function sendEmptyWebPush(endpoint, keys) {
  const endpointUrl = new URL(endpoint);
  const aud = `${endpointUrl.protocol}//${endpointUrl.host}`;
  const now = Math.floor(Date.now() / 1000);
  const header = b64urlText(JSON.stringify({ typ: "JWT", alg: "ES256" }));
  const payload = b64urlText(JSON.stringify({ aud, exp: now + 12 * 60 * 60, sub: "mailto:support@rdubslawncare.com" }));
  const unsigned = `${header}.${payload}`;
  const privateKey = await crypto.subtle.importKey("jwk", keys.privateJwk, { name: "ECDSA", namedCurve: "P-256" }, false, ["sign"]);
  const signature = new Uint8Array(await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, privateKey, new TextEncoder().encode(unsigned)));
  const jwt = `${unsigned}.${b64urlBytes(signature)}`;
  return fetch(endpoint, {
    method: "POST",
    headers: {
      TTL: "120",
      Urgency: "high",
      Authorization: `vapid t=${jwt}, k=${keys.publicKey}`,
    },
  });
}

async function pushUsers(db, userIds) {
  if (!Array.isArray(userIds) || !userIds.length) return;
  try {
    const keys = await getOrCreateVapidKeys(db);
    for (const userId of userIds) {
      const { results } = await db.prepare("SELECT endpoint FROM web_push_subscriptions WHERE user_id = ?").bind(userId).all();
      for (const row of results || []) {
        try {
          const res = await sendEmptyWebPush(row.endpoint, keys);
          if (res.status === 404 || res.status === 410) {
            await db.prepare("DELETE FROM web_push_subscriptions WHERE endpoint = ?").bind(row.endpoint).run();
          }
        } catch (e) {
          console.warn("[WEB PUSH] Send failed:", e.message);
        }
      }
    }
  } catch (e) {
    console.warn("[WEB PUSH] Setup/send failed:", e.message);
  }
}


async function ensureJobRoleTables(db) {
  await db.prepare(`CREATE TABLE IF NOT EXISTS job_role_assignments (
    job_timestamp INTEGER PRIMARY KEY,
    booking_id TEXT,
    date_iso TEXT,
    crew_ids_json TEXT NOT NULL DEFAULT '[]',
    assignments_json TEXT NOT NULL DEFAULT '{}',
    updated_at INTEGER NOT NULL,
    updated_by TEXT
  )`).run();
  await db.prepare(`CREATE TABLE IF NOT EXISTS job_role_assignment_history (
    id TEXT PRIMARY KEY,
    job_timestamp INTEGER NOT NULL,
    booking_id TEXT,
    date_iso TEXT,
    crew_ids_json TEXT NOT NULL,
    assignments_json TEXT NOT NULL,
    changed_at INTEGER NOT NULL,
    changed_by TEXT
  )`).run();
}
function allowedJobRoleKey(key) {
  return ["lead","mowing","trim","cleanup","photos"].includes(String(key||""));
}
async function ensureCrewScheduleBoardTables(db) {
  await db.prepare(`CREATE TABLE IF NOT EXISTS crew_schedule_weeks (
    user_id INTEGER NOT NULL,
    week_start TEXT NOT NULL,
    schedule_json TEXT NOT NULL DEFAULT '{}',
    updated_at INTEGER NOT NULL,
    updated_by TEXT,
    PRIMARY KEY (user_id, week_start)
  )`).run();
  await db.prepare(`CREATE TABLE IF NOT EXISTS crew_schedule_history (
    id TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    week_start TEXT NOT NULL,
    schedule_json TEXT NOT NULL,
    changed_at INTEGER NOT NULL,
    changed_by TEXT
  )`).run();
}

function mondayISOFromDate(input) {
  const d = input ? new Date(`${input}T12:00:00`) : new Date();
  if (Number.isNaN(d.getTime())) return null;
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d.toISOString().slice(0, 10);
}

function addDaysISO(iso, days) {
  const d = new Date(`${iso}T12:00:00`);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}


async function ensureTeamChatTables(db) {
  await db.prepare(`CREATE TABLE IF NOT EXISTS team_chat_messages (
    id TEXT PRIMARY KEY, room_key TEXT NOT NULL, sender_user_id INTEGER NOT NULL, message TEXT NOT NULL, created_at INTEGER NOT NULL
  )`).run();
  await db.prepare(`CREATE TABLE IF NOT EXISTS team_chat_reads (
    user_id INTEGER NOT NULL, room_key TEXT NOT NULL, last_read_at INTEGER NOT NULL, PRIMARY KEY (user_id, room_key)
  )`).run();
}
function directRoomKey(a,b){const x=Math.min(Number(a),Number(b)),y=Math.max(Number(a),Number(b));return `direct:${x}:${y}`;}
function chatRoomKey(user,room,recipientId){
  if(room==="crew")return "crew";
  if(room==="management")return user.role==="owner"||user.role==="manager"?"management":null;
  if(room==="direct"&&recipientId)return directRoomKey(user.id,recipientId);
  return null;
}
async function ensureTeamNoticesTables(db) {
  await db.prepare(`CREATE TABLE IF NOT EXISTS team_notices (
    id TEXT PRIMARY KEY,
    sender_user_id INTEGER NOT NULL,
    sender_name TEXT NOT NULL,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at INTEGER NOT NULL
  )`).run();
  await db.prepare(`CREATE TABLE IF NOT EXISTS team_notice_recipients (
    notice_id TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    read_at INTEGER,
    PRIMARY KEY (notice_id, user_id),
    FOREIGN KEY (notice_id) REFERENCES team_notices(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
  )`).run();
}



const ENV_DELETE_ORDER = [
  "job_photos","job_role_assignment_history","job_role_assignments","crew_schedule_history","crew_schedule_weeks","employee_time_audit","employee_time_entries",
  "appointments","bookings","expenses","time_logs","customer_plans","customer_portal_tokens",
  "deleted_customers_log","photo_shot_lists","estimates","customer_profiles","inventory_items","crew_schedules"
];
const ENV_RESTORE_ORDER = [
  "customer_profiles","estimates","bookings","appointments","expenses","inventory_items","time_logs","crew_schedules",
  "crew_schedule_weeks","crew_schedule_history","employee_time_entries","employee_time_audit",
  "customer_plans","customer_portal_tokens","photo_shot_lists","job_photos","job_role_assignments","job_role_assignment_history","deleted_customers_log"
];

async function ensureAppEnvironmentTables(db) {
  await db.prepare(`CREATE TABLE IF NOT EXISTS app_environment_state (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    current_mode TEXT NOT NULL DEFAULT 'beta',
    live_started_at INTEGER,
    updated_at INTEGER NOT NULL,
    updated_by TEXT
  )`).run();
  await db.prepare(`CREATE TABLE IF NOT EXISTS app_environment_records (
    mode TEXT NOT NULL,
    table_name TEXT NOT NULL,
    seq INTEGER NOT NULL,
    row_json TEXT NOT NULL,
    saved_at INTEGER NOT NULL,
    PRIMARY KEY (mode, table_name, seq)
  )`).run();
  await db.prepare(`INSERT OR IGNORE INTO app_environment_state (id,current_mode,updated_at,updated_by) VALUES (1,'beta',?,?)`)
    .bind(Date.now(),"system").run();
}
async function currentAppMode(db) {
  await ensureAppEnvironmentTables(db);
  const row = await db.prepare("SELECT current_mode,live_started_at,updated_at,updated_by FROM app_environment_state WHERE id=1").first();
  return row || { current_mode:"beta", live_started_at:null, updated_at:Date.now(), updated_by:"system" };
}
async function tableColumns(db, table) {
  try {
    const { results } = await db.prepare(`PRAGMA table_info(${table})`).all();
    return (results || []).map(r => r.name).filter(Boolean);
  } catch (e) { return []; }
}
async function snapshotEnvironment(db, mode) {
  const now = Date.now();
  for (const table of ENV_RESTORE_ORDER) {
    const cols = await tableColumns(db, table);
    if (!cols.length) continue;
    await db.prepare("DELETE FROM app_environment_records WHERE mode=? AND table_name=?").bind(mode,table).run();
    const { results } = await db.prepare(`SELECT * FROM ${table}`).all();
    let seq = 0;
    for (const row of results || []) {
      await db.prepare("INSERT INTO app_environment_records (mode,table_name,seq,row_json,saved_at) VALUES (?,?,?,?,?)")
        .bind(mode,table,seq++,JSON.stringify(row),now).run();
    }
  }
}
async function clearEnvironmentTables(db) {
  for (const table of ENV_DELETE_ORDER) {
    const cols = await tableColumns(db, table);
    if (!cols.length) continue;
    try { await db.prepare(`DELETE FROM ${table}`).run(); } catch (e) {}
  }
}
async function restoreEnvironment(db, mode) {
  for (const table of ENV_RESTORE_ORDER) {
    const cols = await tableColumns(db, table);
    if (!cols.length) continue;
    const { results } = await db.prepare("SELECT row_json FROM app_environment_records WHERE mode=? AND table_name=? ORDER BY seq ASC")
      .bind(mode,table).all();
    for (const rec of results || []) {
      let row = {};
      try { row = JSON.parse(rec.row_json || "{}"); } catch (e) { continue; }
      const use = cols.filter(c => Object.prototype.hasOwnProperty.call(row,c));
      if (!use.length) continue;
      const q = use.map(()=>"?").join(",");
      await db.prepare(`INSERT INTO ${table} (${use.join(",")}) VALUES (${q})`).bind(...use.map(c=>row[c])).run();
    }
  }
}
async function switchAppEnvironment(db, targetMode, actor) {
  await ensureAppEnvironmentTables(db);
  const state = await currentAppMode(db);
  const current = state.current_mode === "live" ? "live" : "beta";
  const target = targetMode === "live" ? "live" : "beta";
  if (target === current) return { changed:false, mode:current, liveStartedAt:state.live_started_at || null };
  await snapshotEnvironment(db,current);
  try {
    await clearEnvironmentTables(db);
    await restoreEnvironment(db,target);
    const liveStartedAt = target === "live" ? (state.live_started_at || Date.now()) : state.live_started_at;
    await db.prepare("UPDATE app_environment_state SET current_mode=?,live_started_at=?,updated_at=?,updated_by=? WHERE id=1")
      .bind(target,liveStartedAt || null,Date.now(),actor || "owner").run();
    return { changed:true, mode:target, liveStartedAt:liveStartedAt || null };
  } catch (e) {
    try {
      await clearEnvironmentTables(db);
      await restoreEnvironment(db,current);
      await db.prepare("UPDATE app_environment_state SET current_mode=?,updated_at=?,updated_by=? WHERE id=1")
        .bind(current,Date.now(),"automatic recovery").run();
    } catch (rollbackError) {}
    throw e;
  }
}

async function ensureCustomerPortalTables(db){
  await db.prepare(`CREATE TABLE IF NOT EXISTS customer_portal_tokens (phone TEXT PRIMARY KEY,token TEXT NOT NULL UNIQUE,created_at INTEGER NOT NULL,updated_at INTEGER NOT NULL)`).run();
}
async function getOrCreateCustomerPortalToken(db,phone){
  await ensureCustomerPortalTables(db);let row=await db.prepare("SELECT token FROM customer_portal_tokens WHERE phone=?").bind(phone).first();if(row)return row.token;
  const token=crypto.randomUUID()+crypto.randomUUID();await db.prepare("INSERT INTO customer_portal_tokens (phone,token,created_at,updated_at) VALUES (?,?,?,?)").bind(phone,token,Date.now(),Date.now()).run();return token;
}
async function ensureCrewProfilesTable(db) {
  await db.prepare(`CREATE TABLE IF NOT EXISTS crew_profiles (
    user_id INTEGER PRIMARY KEY,
    bio TEXT NOT NULL DEFAULT '',
    phone TEXT NOT NULL DEFAULT '',
    email TEXT NOT NULL DEFAULT '',
    address TEXT NOT NULL DEFAULT '',
    emergency_name TEXT NOT NULL DEFAULT '',
    emergency_phone TEXT NOT NULL DEFAULT '',
    photo_updated_at INTEGER,
    profile_completed_at INTEGER,
    profile_icon TEXT NOT NULL DEFAULT 'gunner',
    updated_at INTEGER NOT NULL DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )`).run();
  try { await db.prepare("ALTER TABLE crew_profiles ADD COLUMN profile_completed_at INTEGER").run(); } catch (e) {}
  try { await db.prepare("ALTER TABLE crew_profiles ADD COLUMN profile_icon TEXT NOT NULL DEFAULT 'gunner'").run(); } catch (e) {}
}


function resolveProfileTargetParam(param, currentUsername) {
  const raw = decodeURIComponent(param || "");
  if (raw === "__me__") return currentUsername;
  if (raw.startsWith("member:")) return raw.slice(7);
  return raw;
}

function cleanProfileText(value, max) {
  return String(value == null ? "" : value).trim().slice(0, max);
}

async function ensureRoleNotificationsTable(db) {
  await db.prepare(`CREATE TABLE IF NOT EXISTS role_notifications (
    id TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    username TEXT NOT NULL,
    old_role TEXT NOT NULL,
    new_role TEXT NOT NULL,
    changed_at INTEGER NOT NULL,
    changed_by TEXT,
    acknowledged_at INTEGER
  )`).run();
}

async function getPendingRoleNotification(db, userId) {
  try {
    await ensureRoleNotificationsTable(db);
    return await db.prepare(
      "SELECT id, old_role, new_role, changed_at, changed_by FROM role_notifications WHERE user_id = ? AND acknowledged_at IS NULL ORDER BY changed_at DESC LIMIT 1"
    ).bind(userId).first();
  } catch (e) {
    console.warn("[ROLE NOTICE] Could not load notification:", e.message);
    return null;
  }
}

// ---- Photo checklists ----
// A "shot list" is the ordered set of photos crew take at a property. There's one
// default list (just "Front yard" to start) and the owner can give any customer
// their own. Stored in photo_shot_lists with scope "default" or "customer:<phone>".
const DEFAULT_SHOTS = [{ id: "front", label: "Front yard", tip: "Stand at the curb so the whole front lawn is in frame.", required: true }];

async function getShotList(db, phone) {
  if (phone) {
    const c = await db.prepare("SELECT shots_json FROM photo_shot_lists WHERE scope = ?").bind(`customer:${phone}`).first();
    if (c) return { shots: JSON.parse(c.shots_json), isCustom: true };
  }
  const d = await db.prepare("SELECT shots_json FROM photo_shot_lists WHERE scope = 'default'").first();
  return { shots: d ? JSON.parse(d.shots_json) : DEFAULT_SHOTS, isCustom: false };
}

function cleanShots(input) {
  if (!Array.isArray(input) || input.length < 1 || input.length > 12) return null;
  const used = new Set();
  const out = [];
  for (const s of input) {
    const label = String((s && s.label) || "").trim().slice(0, 40);
    if (!label) return null;
    let id = String((s && s.id) || label).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 30) || "shot";
    const base = id;
    let n = 2;
    while (used.has(id)) id = `${base}-${n++}`;
    used.add(id);
    out.push({ id, label, tip: String((s && s.tip) || "").trim().slice(0, 120), required: !(s && s.required === false) });
  }
  return out;
}

// The job's photo flags come ONLY from what's actually stored: "before done" means
// every required shot on that customer's checklist has a saved photo.
async function recomputePhotoFlags(db, photos, ts) {
  const job = await db.prepare("SELECT phone FROM estimates WHERE timestamp = ?").bind(ts).first();
  if (!job) return;
  const { shots } = await getShotList(db, job.phone);
  const { results } = await db.prepare("SELECT phase, slot FROM job_photos WHERE job_ts = ?").bind(ts).all();
  const before = new Set(results.filter((r) => r.phase === "before").map((r) => r.slot));
  const required = shots.filter((s) => s.required);
  let hasBefore = required.length ? required.every((s) => before.has(s.id)) : before.size > 0;
  let hasAfter = results.some((r) => r.phase === "after");
  if (!hasBefore && await photos.head(`jobs/${ts}/before.jpg`)) hasBefore = true; // older single-photo jobs
  if (!hasAfter && await photos.head(`jobs/${ts}/after.jpg`)) hasAfter = true;
  await db.prepare("UPDATE estimates SET has_before_photo = ?, has_photo = ? WHERE timestamp = ?").bind(hasBefore ? 1 : 0, hasAfter ? 1 : 0, ts).run();
}

// ---- Owner/manager PINs + customer plans ----
// PINs approve sensitive actions (like waiving a Plus fee). Each one belongs to one person,
// every use and every failed attempt is logged to them, and 5 wrong tries lock it 15 minutes.
function isWeakPin(pin) {
  if (/^(\d)\1+$/.test(pin)) return true;                                   // 0000, 11111
  return "01234567890".includes(pin) || "09876543210".includes(pin);        // 1234, 98765
}
async function logPin(db, action, actor, pinOwner, target, detail) {
  await db.prepare("INSERT INTO pin_audit (id, created_at, action, actor, pin_owner, target, detail) VALUES (?, ?, ?, ?, ?, ?, ?)")
    .bind(crypto.randomUUID(), Date.now(), action, actor || null, pinOwner || null, target || null, detail || null).run();
}
async function verifyApproverPin(db, approverUsername, pin, actorUsername, target) {
  const a = await db.prepare("SELECT id, username, role, disabled, pin_hash, pin_failed_count, pin_locked_until FROM users WHERE username = ?").bind(String(approverUsername || "")).first();
  if (!a || a.disabled || (a.role !== "owner" && a.role !== "manager")) return { ok: false, error: "Choose an owner or manager to approve this.", status: 400 };
  if (!a.pin_hash) return { ok: false, error: "That person hasn't set a PIN yet.", status: 400 };
  if (a.pin_locked_until && a.pin_locked_until > Date.now()) return { ok: false, error: "Too many wrong PINs. That PIN is locked for 15 minutes.", status: 429 };
  const [salt, hash] = a.pin_hash.split(":");
  if (!(await verifyPassword(String(pin || ""), salt, hash))) {
    const fails = (a.pin_failed_count || 0) + 1;
    const lock = fails >= 5 ? Date.now() + 15 * 60 * 1000 : null;
    await db.prepare("UPDATE users SET pin_failed_count = ?, pin_locked_until = ? WHERE id = ?").bind(lock ? 0 : fails, lock, a.id).run();
    await logPin(db, lock ? "pin_locked" : "pin_failed", actorUsername, a.username, target, lock ? "5 wrong PINs, locked for 15 minutes" : null);
    return { ok: false, error: lock ? "Too many wrong PINs. That PIN is locked for 15 minutes." : "Wrong PIN.", status: lock ? 429 : 403 };
  }
  await db.prepare("UPDATE users SET pin_failed_count = 0, pin_locked_until = NULL WHERE id = ?").bind(a.id).run();
  return { ok: true, approver: a.username };
}
async function needsPinFor(db, user) {
  if (user.role !== "owner" && user.role !== "manager") return false;
  const row = await db.prepare("SELECT pin_hash FROM users WHERE id = ?").bind(user.id).first();
  return !(row && row.pin_hash);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const db = env.DB; // D1 binding — set this name when wiring up the Worker

    if (request.method === "OPTIONS") return corsPreflightResponse();

    try {
      // ================= AUTH ROUTES (no login required) =================

      // Bootstraps the very first account. Only works once — refuses if an
      // owner already exists, so this can't be used to create a second one.
      if (path === "/api/auth/register-owner" && request.method === "POST") {
        const existingOwner = await db.prepare("SELECT id FROM users WHERE role = 'owner' LIMIT 1").first();
        if (existingOwner) return errorResponse("Owner already exists. Ask them for an invite instead.", 403);

        const { username, password, name } = await request.json();
        if (!username || !password) return errorResponse("Username and password required.");
        if (password.length < 8) return errorResponse("Password must be at least 8 characters.");

        const existing = await db.prepare("SELECT id FROM users WHERE username = ?").bind(username).first();
        if (existing) return errorResponse("That username is taken.");

        const salt = crypto.randomUUID();
        const hash = await hashPassword(password, salt);
        const result = await db.prepare(
          "INSERT INTO users (username, password_hash, role, name, created_at) VALUES (?, ?, 'owner', ?, ?)"
        ).bind(username, `${salt}:${hash}`, name || username, Date.now()).run();

        const token = generateToken();
        await db.prepare("INSERT INTO sessions (token, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)")
          .bind(token, result.meta.last_row_id, Date.now(), Date.now() + SESSION_DURATION_MS).run();

        return jsonResponse({ token, user: { username, role: "owner", name: name || username } });
      }

      // Owner invites a crew member by creating their account directly.
      // (Simpler and safer than an email-invite-link flow for a 2-3 person
      // team — the owner sets a temporary password and hands it over.)
      if (path === "/api/auth/invite" && request.method === "POST") {
        const user = await getUserFromToken(db, getToken(request));
        if (!user || user.role !== "owner") return errorResponse("Only the owner can add crew members.", 403);

        const { username, password, name, role } = await request.json();
        if (!username || !password) return errorResponse("Username and password required.");
        if (password.length < 8) return errorResponse("Password must be at least 8 characters.");
        const accountRole = role === "manager" ? "manager" : "crew";

        const existing = await db.prepare("SELECT id FROM users WHERE username = ?").bind(username).first();
        if (existing) return errorResponse("That username is taken.");

        const salt = crypto.randomUUID();
        const hash = await hashPassword(password, salt);
        const created = await db.prepare(
          "INSERT INTO users (username, password_hash, role, name, created_at) VALUES (?, ?, ?, ?, ?)"
        ).bind(username, `${salt}:${hash}`, accountRole, name || username, Date.now()).run();
        await ensureCrewProfilesTable(db);
        const profileIcon = crypto.getRandomValues(new Uint8Array(1))[0] % 2 === 0 ? "gunner" : "leo";
        await db.prepare(
          "INSERT OR IGNORE INTO crew_profiles (user_id, profile_icon, updated_at) VALUES (?, ?, ?)"
        ).bind(created.meta.last_row_id, profileIcon, Date.now()).run();

        return jsonResponse({ success: true, username, role: accountRole, profileIcon });
      }

      if (path === "/api/auth/users" && request.method === "GET") {
        const user = await getUserFromToken(db, getToken(request));
        if (!user || user.role !== "owner") return errorResponse("Owner access only.", 403);
        const { results } = await db.prepare("SELECT id, username, role, name, created_at, disabled FROM users ORDER BY created_at ASC").all();
        return jsonResponse({ users: results });
      }

      if (path.startsWith("/api/auth/users/") && path.endsWith("/pause") && request.method === "POST") {
        const user = await getUserFromToken(db, getToken(request));
        if (!user || user.role !== "owner") return errorResponse("Owner access only.", 403);
        const targetUsername = decodeURIComponent(path.split("/api/auth/users/")[1].replace(/\/pause$/, ""));
        if (targetUsername === user.username) return errorResponse("You can't pause your own account.", 400);
        const target = await db.prepare("SELECT id, role FROM users WHERE username = ?").bind(targetUsername).first();
        if (!target) return errorResponse("No account with that username.", 404);
        if (target.role === "owner") return errorResponse("Can't pause the owner account.", 400);
        const data = await request.json();
        await db.prepare("UPDATE users SET disabled = ? WHERE id = ?").bind(data.disabled ? 1 : 0, target.id).run();
        // Pausing kills any session immediately — the account is checked live on every
        // request (see getUserFromToken), not just at login, so this takes effect on
        // that account's very next action, not just their next login attempt.
        if (data.disabled) await db.prepare("DELETE FROM sessions WHERE user_id = ?").bind(target.id).run();
        return jsonResponse({ success: true });
      }

      if (path.startsWith("/api/auth/users/") && request.method === "DELETE") {
        const user = await getUserFromToken(db, getToken(request));
        if (!user || user.role !== "owner") return errorResponse("Owner access only.", 403);
        const targetUsername = decodeURIComponent(path.split("/api/auth/users/")[1]);
        if (targetUsername === user.username) return errorResponse("You can't remove your own account.", 400);
        const target = await db.prepare("SELECT id, role FROM users WHERE username = ?").bind(targetUsername).first();
        if (!target) return errorResponse("No account with that username.", 404);
        if (target.role === "owner") return errorResponse("Can't remove the owner account.", 400);
        await db.prepare("DELETE FROM sessions WHERE user_id = ?").bind(target.id).run();
        await db.prepare("DELETE FROM users WHERE id = ?").bind(target.id).run();
        return jsonResponse({ success: true });
      }

      // Public website content is readable without a crew login. Owner edits are handled below.
      if (path === "/api/site-content" && request.method === "GET") {
        const { results } = await db.prepare("SELECT key, value FROM site_content ORDER BY key").all();
        const content = {};
        for (const row of results || []) content[row.key] = row.value;
        return jsonResponse({ content });
      }


      // ================= PUBLIC WEBSITE: 2027 INTEREST LIST =================
      // No login required. Sends a lead only to R-DUB's verified destination.
      if (path === "/api/quote" && request.method === "POST") {
        const origin = request.headers.get("Origin") || "";
        const allowedOrigins = new Set([
          "https://rdubslawncare.com",
          "https://www.rdubslawncare.com"
        ]);
        if (origin && !allowedOrigins.has(origin)) return errorResponse("Website origin not allowed.", 403);
        if (!env.EMAIL || typeof env.EMAIL.send !== "function") {
          console.error("[QUOTE EMAIL] EMAIL binding unavailable");
          return errorResponse("Email service is temporarily unavailable. Please try again in a moment.", 503);
        }

        const data = await request.json();
        const clean = (value, max) => String(value ?? "").trim().slice(0, max);
        const name = clean(data.name, 120);
        const phone = clean(data.phone, 50);
        const address = clean(data.address, 240);
        const frequency = clean(data.frequency, 100);
        const lot = clean(data.lot, 100);
        const notes = clean(data.notes, 2000);
        // Honeypot: real visitors never see/fill this field.
        if (clean(data.website, 200)) return jsonResponse({ success: true });
        if (!name || !phone || !address) return errorResponse("Name, phone, and property address are required.");

        const submitted = new Date().toLocaleString("en-US", { timeZone: "America/Detroit", dateStyle: "full", timeStyle: "short" });
        const subject = `2027 INTEREST LEAD — ${name} — ${frequency || "Lawn Care"}`;
        const text = [
          "R-DUB'S LAWN CARE — NEW 2027 INTEREST LEAD",
          "",
          `Customer: ${name}`,
          `Phone: ${phone}`,
          `Property: ${address}`,
          `Interested in: ${frequency || "Not specified"}`,
          `Approx. lot size: ${lot || "Not specified"}`,
          "",
          "PROPERTY NOTES",
          notes || "None provided",
          "",
          `Submitted: ${submitted} ET`,
          "",
          "Interest request only — not a confirmed route reservation or service appointment."
        ].join("\n");
        const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
        const html = `
          <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#17121c">
            <div style="background:#17101e;border-top:6px solid #65ff32;padding:24px;color:#fff">
              <div style="color:#65ff32;font-size:12px;font-weight:800;letter-spacing:1.5px">R-DUB'S LAWN CARE</div>
              <h1 style="margin:8px 0 0;font-size:28px">New 2027 Interest Lead</h1>
            </div>
            <div style="padding:24px;border:1px solid #ddd;border-top:0">
              <h2 style="margin-top:0">${esc(name)}</h2>
              <p><strong>Phone:</strong> ${esc(phone)}<br><strong>Property:</strong> ${esc(address)}</p>
              <p><strong>Interested in:</strong> ${esc(frequency || "Not specified")}<br><strong>Approx. lot size:</strong> ${esc(lot || "Not specified")}</p>
              <div style="background:#f5f2f7;padding:16px;border-radius:10px"><strong>Property notes</strong><br>${esc(notes || "None provided").replace(/\n/g,"<br>")}</div>
              <p style="font-size:12px;color:#666;margin-top:22px">Submitted ${esc(submitted)} ET<br>Interest request only — not a confirmed route reservation or service appointment.</p>
            </div>
          </div>`;

        try {
          const result = await env.EMAIL.send({
            to: "rdubslawncare@gmail.com",
            from: "quote@rdubslawncare.com",
            replyTo: "quote@rdubslawncare.com",
            subject,
            text,
            html
          });
          console.log("[QUOTE EMAIL] 2027 interest lead sent successfully", {
            messageId: result && result.messageId ? result.messageId : null
          });
          return jsonResponse({ success: true, messageId: result && result.messageId ? result.messageId : null });
        } catch (emailError) {
          console.error("[QUOTE EMAIL ERROR] Email Service rejected the message", emailError);
          return errorResponse("We could not send your request right now. Please try again in a moment.", 502);
        }
      }

      // A forgot-password request does not reveal whether a username exists.
      if (path === "/api/auth/forgot-password" && request.method === "POST") {
        const body = await request.json();
        const username = String(body.username || "").trim();
        if (!username) return errorResponse("Enter your username.");
        const target = await db.prepare("SELECT id, username FROM users WHERE username = ? AND disabled = 0").bind(username).first();
        if (target) {
          const existing = await db.prepare("SELECT id FROM password_reset_requests WHERE user_id = ? AND status = 'pending' LIMIT 1").bind(target.id).first();
          if (!existing) {
            await db.prepare("INSERT INTO password_reset_requests (id, user_id, username, requested_at, status) VALUES (?, ?, ?, ?, 'pending')")
              .bind(crypto.randomUUID(), target.id, target.username, Date.now()).run();
          }
        }
        return jsonResponse({ success: true, message: "If that account exists, the owner will see the reset request." });
      }

      if (path === "/api/auth/login" && request.method === "POST") {
        const { username, password } = await request.json();
        if (!username || !password) return errorResponse("Username and password required.");

        const user = await db.prepare("SELECT * FROM users WHERE username = ?").bind(username).first();
        if (!user) return errorResponse("Invalid username or password.", 401);

        const [salt, expectedHash] = user.password_hash.split(":");
        const valid = await verifyPassword(password, salt, expectedHash);
        if (!valid) return errorResponse("Invalid username or password.", 401);
        if (user.disabled) return errorResponse("This account has been paused. Contact the owner.", 403);

        const token = generateToken();
        await db.prepare("INSERT INTO sessions (token, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)")
          .bind(token, user.id, Date.now(), Date.now() + SESSION_DURATION_MS).run();

        const roleNotification = await getPendingRoleNotification(db, user.id);
        return jsonResponse({ token, user: { username: user.username, role: user.role, name: user.name }, roleNotification, needsPin: await needsPinFor(db, user) });
      }

      if (path === "/api/auth/logout" && request.method === "POST") {
        const token = getToken(request);
        if (token) await db.prepare("DELETE FROM sessions WHERE token = ?").bind(token).run();
        return jsonResponse({ success: true });
      }

      if (path === "/api/auth/me" && request.method === "GET") {
        const user = await getUserFromToken(db, getToken(request));
        if (!user) return errorResponse("Not logged in.", 401);
        const roleNotification = await getPendingRoleNotification(db, user.id);
        return jsonResponse({ user, roleNotification, needsPin: await needsPinFor(db, user) });
      }

      // Public quick check of what's actually deployed — bump when routes change.
      if (path === "/api/version" && request.method === "GET") {
        return jsonResponse({
          version: "2026-09-26-pins-plans",
          features: [
            "auth", "estimates", "completed-by", "bookings", "job-assignment", "bookings-bulk-reschedule",
            "appointments", "customer-profiles", "customers-change-phone", "expenses", "inventory-items",
            "time-logs", "availability", "bug-reports", "crew-schedules", "site-content", "deleted-customers",
            "auth-users-pause", "manager-role", "change-password", "reset-password", "forgot-password",
            "role-notifications", "time-clock", "quote", "job-photos-r2", "photo-checklists", "crew-profiles", "schedule-board", "team-notices", "push", "emergency-logout", "role-change", "owner-manager-pins", "customer-plans", "fee-waiver", "pin-audit", "crew-profiles", "emergency-logout", "team-notices", "crew-schedule-board", "web-push",
          ],
        });
      }

      // ================= PUBLIC CUSTOMER PAGE =================
      const customerPortalMatch=path.match(/^\/api\/customer-portal\/([^/]+)$/);
      if(customerPortalMatch&&request.method==="GET"){
        await ensureCustomerPortalTables(db);const token=decodeURIComponent(customerPortalMatch[1]),link=await db.prepare("SELECT phone FROM customer_portal_tokens WHERE token=?").bind(token).first();if(!link)return errorResponse("Customer page link not found.",404);
        const profile=await db.prepare("SELECT phone,name,address FROM customer_profiles WHERE phone=?").bind(link.phone).first();if(!profile)return errorResponse("Customer profile not found.",404);
        const plan=await db.prepare("SELECT plan,fee_waived FROM customer_plans WHERE phone=?").bind(link.phone).first();
        const {results:appointments}=await db.prepare("SELECT date_iso,slot_label,start_ms,confirmed,notes FROM appointments WHERE phone=? AND start_ms>=? ORDER BY start_ms ASC LIMIT 12").bind(link.phone,Date.now()-86400000).all();
        const {results:history}=await db.prepare("SELECT timestamp,total,lines FROM estimates WHERE phone=? AND status='completed' ORDER BY timestamp DESC LIMIT 20").bind(link.phone).all();
        return jsonResponse({customer:{name:profile.name||"Customer",address:profile.address||""},plan:plan?{plan:plan.plan||"basic",feeWaived:!!plan.fee_waived}:{plan:"basic",feeWaived:false},appointments:appointments||[],history:(history||[]).map(h=>({timestamp:h.timestamp,total:h.total||0,lines:(()=>{try{return JSON.parse(h.lines||"[]")}catch(e){return[]}})()}))});
      }

      // ================= EVERYTHING BELOW REQUIRES LOGIN =================

      const user = await getUserFromToken(db, getToken(request));
      if (!user) return errorResponse("Not logged in.", 401);

      if (path === "/api/app-mode" && request.method === "GET") {
        const state = await currentAppMode(db);
        return jsonResponse({ mode: state.current_mode === "live" ? "live" : "beta", liveStartedAt: state.live_started_at || null, updatedAt: state.updated_at || null, updatedBy: state.updated_by || null });
      }
      if (path === "/api/app-mode" && request.method === "POST") {
        if (user.role !== "owner") return errorResponse("Owner access only.",403);
        const body = await request.json().catch(()=>({}));
        const target = body.mode === "live" ? "live" : body.mode === "beta" ? "beta" : null;
        if (!target) return errorResponse("Mode must be beta or live.");
        if (target === "live" && String(body.confirm || "") !== "GO LIVE") return errorResponse("Type GO LIVE to confirm.",400);
        if (target === "beta" && String(body.confirm || "") !== "OPEN BETA") return errorResponse("Type OPEN BETA to confirm.",400);
        try {
          const result = await switchAppEnvironment(db,target,user.name || user.username);
          return jsonResponse({ success:true, ...result });
        } catch (e) {
          console.error("[APP MODE] switch failed", e);
          return errorResponse("The workspace switch failed. The app attempted to restore the previous workspace.",500);
        }
      }

      if (OWNER_ONLY_PREFIXES.some((p) => path.startsWith(p)) && user.role !== "owner") {
        return errorResponse("Owner access only.", 403);
      }

      if (path === "/api/auth/role-notification/acknowledge" && request.method === "POST") {
        const body = await request.json().catch(() => ({}));
        if (!body.id) return errorResponse("Notification id required.", 400);
        try {
          await ensureRoleNotificationsTable(db);
          await db.prepare("UPDATE role_notifications SET acknowledged_at = ? WHERE id = ? AND user_id = ?")
            .bind(Date.now(), body.id, user.id).run();
        } catch (e) {
          console.warn("[ROLE NOTICE] Could not acknowledge notification:", e.message);
        }
        return jsonResponse({ success: true });
      }

      // ================= WEB PUSH =================
      if (path === "/api/push/public-key" && request.method === "GET") {
        const keys = await getOrCreateVapidKeys(db);
        return jsonResponse({ publicKey: keys.publicKey });
      }

      if (path === "/api/push/subscribe" && request.method === "POST") {
        await ensureWebPushTables(db);
        const body = await request.json().catch(() => ({}));
        const endpoint = String(body.endpoint || "").trim();
        if (!endpoint.startsWith("https://")) return errorResponse("A valid push endpoint is required.", 400);
        const p256dh = String(body.keys && body.keys.p256dh || "").slice(0, 300);
        const auth = String(body.keys && body.keys.auth || "").slice(0, 300);
        await db.prepare(`
          INSERT INTO web_push_subscriptions (endpoint, user_id, p256dh, auth, created_at, last_seen)
          VALUES (?, ?, ?, ?, ?, ?)
          ON CONFLICT(endpoint) DO UPDATE SET
            user_id = excluded.user_id, p256dh = excluded.p256dh, auth = excluded.auth, last_seen = excluded.last_seen
        `).bind(endpoint, user.id, p256dh, auth, Date.now(), Date.now()).run();
        return jsonResponse({ success: true });
      }

      if (path === "/api/push/unsubscribe" && request.method === "POST") {
        await ensureWebPushTables(db);
        const body = await request.json().catch(() => ({}));
        const endpoint = String(body.endpoint || "").trim();
        if (endpoint) await db.prepare("DELETE FROM web_push_subscriptions WHERE endpoint = ? AND user_id = ?").bind(endpoint, user.id).run();
        return jsonResponse({ success: true });
      }

      // ================= TEAM CHAT =================
      if (path === "/api/team-chat/people" && request.method === "GET") {
        await ensureCrewProfilesTable(db);
        const {results}=await db.prepare(`SELECT u.id,u.name,u.role,cp.photo_updated_at,COALESCE(cp.profile_icon,'gunner') AS profile_icon FROM users u LEFT JOIN crew_profiles cp ON cp.user_id=u.id WHERE u.disabled=0 ORDER BY CASE u.role WHEN 'owner' THEN 0 WHEN 'manager' THEN 1 ELSE 2 END,u.name,u.id`).all();
        return jsonResponse({people:(results||[]).map(r=>({id:r.id,name:r.name||"Team Member",role:r.role,profileIcon:r.profile_icon||"gunner",photoUpdatedAt:r.photo_updated_at||null,isSelf:r.id===user.id}))});
      }
      const chatAvatarMatch=path.match(/^\/api\/team-chat\/avatar\/(\d+)$/);
      if(chatAvatarMatch&&request.method==="GET"){
        const targetId=Number(chatAvatarMatch[1]),target=await db.prepare("SELECT id FROM users WHERE id=? AND disabled=0").bind(targetId).first();
        if(!target)return errorResponse("Team member not found.",404);
        const photos=(env.PHOTOS||env.JOB_PHOTOS); if(!photos)return errorResponse("Photo storage unavailable.",404);
        const obj=await photos.get(`profiles/${targetId}.jpg`); if(!obj)return errorResponse("Profile photo not found.",404);
        return new Response(obj.body,{headers:{"Content-Type":(obj.httpMetadata&&obj.httpMetadata.contentType)||"image/jpeg","Cache-Control":"private, max-age=3600","Access-Control-Allow-Origin":"*"}});
      }
      if(path==="/api/team-chat/messages"&&request.method==="GET"){
        await ensureTeamChatTables(db);await ensureCrewProfilesTable(db);
        const room=String(url.searchParams.get("room")||"crew"),recipientId=Number(url.searchParams.get("userId")||0),roomKey=chatRoomKey(user,room,recipientId);
        if(!roomKey)return errorResponse("That chat room is not available.",403);
        if(room==="direct"&&!(await db.prepare("SELECT id FROM users WHERE id=? AND disabled=0").bind(recipientId).first()))return errorResponse("Team member not found.",404);
        const {results}=await db.prepare(`SELECT m.id,m.sender_user_id,m.message,m.created_at,u.name,u.role,cp.photo_updated_at,COALESCE(cp.profile_icon,'gunner') AS profile_icon FROM team_chat_messages m JOIN users u ON u.id=m.sender_user_id LEFT JOIN crew_profiles cp ON cp.user_id=u.id WHERE m.room_key=? ORDER BY m.created_at ASC LIMIT 150`).bind(roomKey).all();
        return jsonResponse({messages:(results||[]).map(m=>({id:m.id,senderId:m.sender_user_id,senderName:m.name||"Team Member",senderRole:m.role,profileIcon:m.profile_icon||"gunner",photoUpdatedAt:m.photo_updated_at||null,message:m.message,createdAt:m.created_at,isSelf:m.sender_user_id===user.id}))});
      }
      if(path==="/api/team-chat/messages"&&request.method==="POST"){
        await ensureTeamChatTables(db);const body=await request.json().catch(()=>({})),room=String(body.room||"crew"),recipientId=Number(body.recipientId||0),roomKey=chatRoomKey(user,room,recipientId),message=String(body.message||"").trim().slice(0,1500);
        if(!roomKey)return errorResponse("That chat room is not available.",403);if(!message)return errorResponse("Message is required.");
        let notifyIds=[];
        if(room==="crew"){const {results}=await db.prepare("SELECT id FROM users WHERE disabled=0 AND id<>?").bind(user.id).all();notifyIds=(results||[]).map(r=>r.id);}
        else if(room==="management"){const {results}=await db.prepare("SELECT id FROM users WHERE disabled=0 AND role IN ('owner','manager') AND id<>?").bind(user.id).all();notifyIds=(results||[]).map(r=>r.id);}
        else {const target=await db.prepare("SELECT id FROM users WHERE id=? AND disabled=0").bind(recipientId).first();if(!target)return errorResponse("Team member not found.",404);if(target.id!==user.id)notifyIds=[target.id];}
        const id=crypto.randomUUID();await db.prepare("INSERT INTO team_chat_messages (id,room_key,sender_user_id,message,created_at) VALUES (?,?,?,?,?)").bind(id,roomKey,user.id,message,Date.now()).run();await pushUsers(db,notifyIds);return jsonResponse({success:true,id});
      }
      if(path==="/api/team-chat/read"&&request.method==="POST"){
        await ensureTeamChatTables(db);const body=await request.json().catch(()=>({})),room=String(body.room||"crew"),recipientId=Number(body.recipientId||0),roomKey=chatRoomKey(user,room,recipientId);if(!roomKey)return errorResponse("That chat room is not available.",403);
        await db.prepare(`INSERT INTO team_chat_reads (user_id,room_key,last_read_at) VALUES (?,?,?) ON CONFLICT(user_id,room_key) DO UPDATE SET last_read_at=excluded.last_read_at`).bind(user.id,roomKey,Date.now()).run();return jsonResponse({success:true});
      }

      // ================= TEAM NOTICES =================
      // Signed-in users receive notices addressed to them.
      // Owner and Manager accounts can send notices to selected active team members.
      if (path === "/api/team-notices/recipients" && request.method === "GET") {
        if (user.role !== "owner" && user.role !== "manager") return errorResponse("Manager or owner access only.", 403);
        const { results } = await db.prepare(
          "SELECT id, name, role FROM users WHERE disabled = 0 ORDER BY CASE role WHEN 'owner' THEN 0 WHEN 'manager' THEN 1 ELSE 2 END, name, id"
        ).all();
        return jsonResponse({ recipients: (results || []).map((r) => ({
          id: r.id,
          name: r.name || "Team Member",
          role: r.role,
          isSelf: r.id === user.id,
        })) });
      }

      if (path === "/api/team-notices" && request.method === "GET") {
        await ensureTeamNoticesTables(db);
        const { results } = await db.prepare(`
          SELECT n.id, n.sender_name, n.title, n.message, n.created_at, r.read_at
          FROM team_notice_recipients r
          JOIN team_notices n ON n.id = r.notice_id
          WHERE r.user_id = ?
          ORDER BY n.created_at DESC
          LIMIT 50
        `).bind(user.id).all();
        return jsonResponse({ notices: (results || []).map((n) => ({
          id: n.id,
          senderName: n.sender_name,
          title: n.title,
          message: n.message,
          createdAt: n.created_at,
          readAt: n.read_at || null,
        })) });
      }

      if (path === "/api/team-notices" && request.method === "POST") {
        if (user.role !== "owner" && user.role !== "manager") return errorResponse("Manager or owner access only.", 403);
        await ensureTeamNoticesTables(db);
        const body = await request.json().catch(() => ({}));
        const title = String(body.title || "Team Notice").trim().slice(0, 80) || "Team Notice";
        const message = String(body.message || "").trim().slice(0, 1200);
        if (!message) return errorResponse("A notice message is required.");

        let recipientIds = [];
        if (body.all === true) {
          const { results } = await db.prepare("SELECT id FROM users WHERE disabled = 0 AND id <> ? ORDER BY id").bind(user.id).all();
          recipientIds = (results || []).map((r) => Number(r.id));
        } else if (Array.isArray(body.recipientIds)) {
          recipientIds = [...new Set(body.recipientIds.map(Number).filter((id) => Number.isInteger(id) && id > 0))];
        }
        if (!recipientIds.length) return errorResponse("Select at least one team member.");

        const placeholders = recipientIds.map(() => "?").join(",");
        const { results: validRows } = await db.prepare(`SELECT id FROM users WHERE disabled = 0 AND id IN (${placeholders})`)
          .bind(...recipientIds).all();
        const validIds = (validRows || []).map((r) => Number(r.id));
        if (!validIds.length) return errorResponse("No active recipients were selected.");

        const id = crypto.randomUUID();
        await db.prepare("INSERT INTO team_notices (id, sender_user_id, sender_name, title, message, created_at) VALUES (?, ?, ?, ?, ?, ?)")
          .bind(id, user.id, user.name || "R-DUB'S", title, message, Date.now()).run();
        for (const recipientId of validIds) {
          await db.prepare("INSERT OR IGNORE INTO team_notice_recipients (notice_id, user_id, read_at) VALUES (?, ?, NULL)")
            .bind(id, recipientId).run();
        }
        await pushUsers(db, validIds);
        return jsonResponse({ success: true, id, recipientCount: validIds.length });
      }

      const noticeReadMatch = path.match(/^\/api\/team-notices\/([^/]+)\/read$/);
      if (noticeReadMatch && request.method === "POST") {
        await ensureTeamNoticesTables(db);
        const noticeId = decodeURIComponent(noticeReadMatch[1]);
        const row = await db.prepare("SELECT notice_id FROM team_notice_recipients WHERE notice_id = ? AND user_id = ?")
          .bind(noticeId, user.id).first();
        if (!row) return errorResponse("Notice not found.", 404);
        await db.prepare("UPDATE team_notice_recipients SET read_at = ? WHERE notice_id = ? AND user_id = ?")
          .bind(Date.now(), noticeId, user.id).run();
        return jsonResponse({ success: true });
      }

      // ================= PROFILE ICON PRESETS =================
      if (path === "/api/profile-icons/team" && request.method === "GET") {
        if (user.role !== "owner") return errorResponse("Owner access only.", 403);
        await ensureCrewProfilesTable(db);
        const { results } = await db.prepare(`
          SELECT u.id, u.name, u.role, COALESCE(cp.profile_icon, 'gunner') AS profile_icon
          FROM users u
          LEFT JOIN crew_profiles cp ON cp.user_id = u.id
          WHERE u.disabled = 0
          ORDER BY CASE u.role WHEN 'owner' THEN 0 WHEN 'manager' THEN 1 ELSE 2 END, u.name, u.id
        `).all();
        return jsonResponse({ members: (results || []).map((r) => ({
          id: r.id, name: r.name || "Team Member", role: r.role, profileIcon: r.profile_icon || "gunner"
        })) });
      }

      const profileIconMatch = path.match(/^\/api\/profile-icons\/(\d+)$/);
      if (profileIconMatch && request.method === "POST") {
        if (user.role !== "owner") return errorResponse("Owner access only.", 403);
        await ensureCrewProfilesTable(db);
        const targetId = Number(profileIconMatch[1]);
        const body = await request.json().catch(() => ({}));
        const profileIcon = String(body.profileIcon || "").toLowerCase();
        if (!["gunner", "leo"].includes(profileIcon)) return errorResponse("Choose Gunner or Leo.", 400);
        const target = await db.prepare("SELECT id FROM users WHERE id = ? AND disabled = 0").bind(targetId).first();
        if (!target) return errorResponse("Team member not found.", 404);
        await db.prepare(`
          INSERT INTO crew_profiles (user_id, profile_icon, updated_at) VALUES (?, ?, ?)
          ON CONFLICT(user_id) DO UPDATE SET profile_icon = excluded.profile_icon, updated_at = excluded.updated_at
        `).bind(targetId, profileIcon, Date.now()).run();
        return jsonResponse({ success: true, profileIcon });
      }

      // ================= CREW PROFILES =================
      // Basic work profile details are visible to signed-in team members.
      // Personal contact/address/emergency information is server-protected and only
      // returned to the profile owner, managers, and the owner.
      if (path === "/api/crew-profiles" && request.method === "GET") {
        await ensureCrewProfilesTable(db);
        const { results } = await db.prepare(`
          SELECT u.username, u.name, u.role, u.disabled,
                 COALESCE(cp.bio, '') AS bio,
                 cp.photo_updated_at,
                 COALESCE(cp.profile_icon, 'gunner') AS profile_icon
          FROM users u
          LEFT JOIN crew_profiles cp ON cp.user_id = u.id
          WHERE u.disabled = 0
          ORDER BY CASE u.role WHEN 'owner' THEN 0 WHEN 'manager' THEN 1 ELSE 2 END, u.name, u.username
        `).all();
        const profiles = (results || []).map((r) => ({
          name: r.name || "",
          role: r.role,
          bio: r.bio || "",
          photoUpdatedAt: r.photo_updated_at || null,
          profileIcon: r.profile_icon || "gunner",
          profileKey: r.username === user.username ? "__me__" : `member:${r.username}`,
          isSelf: r.username === user.username,
        }));
        return jsonResponse({ profiles });
      }

      const crewProfilePhotoMatch = path.match(/^\/api\/crew-profiles\/([^/]+)\/photo$/);
      if (crewProfilePhotoMatch) {
        const targetUsername = resolveProfileTargetParam(crewProfilePhotoMatch[1], user.username);
        const target = await db.prepare("SELECT id, username FROM users WHERE username = ? AND disabled = 0").bind(targetUsername).first();
        if (!target) return errorResponse("No active team member with that username.", 404);
        if (!(env.PHOTOS || env.JOB_PHOTOS)) return errorResponse("Profile photo storage isn't connected yet.", 500);
        const key = `profiles/${target.id}.jpg`;

        if (request.method === "GET") {
          const obj = await (env.PHOTOS || env.JOB_PHOTOS).get(key);
          if (!obj) return errorResponse("Profile photo not found.", 404);
          return new Response(obj.body, { headers: {
            "Content-Type": (obj.httpMetadata && obj.httpMetadata.contentType) || "image/jpeg",
            "Cache-Control": "private, max-age=3600",
            "Access-Control-Allow-Origin": "*",
          } });
        }

        if (target.id !== user.id) return errorResponse("You can only change your own profile photo.", 403);

        if (request.method === "POST") {
          const data = await request.json().catch(() => ({}));
          const m = /^data:(image\/(?:jpeg|png|webp));base64,(.+)$/.exec(data.dataUri || "");
          if (!m) return errorResponse("Expected a JPEG, PNG, or WebP image.");
          const bytes = Uint8Array.from(atob(m[2]), (c) => c.charCodeAt(0));
          if (bytes.length > 5 * 1024 * 1024) return errorResponse("Profile photo is too large (5MB max).");
          await (env.PHOTOS || env.JOB_PHOTOS).put(key, bytes, { httpMetadata: { contentType: m[1] }, customMetadata: { uploadedBy: user.username } });
          await ensureCrewProfilesTable(db);
          await db.prepare(`
            INSERT INTO crew_profiles (user_id, photo_updated_at, profile_icon, updated_at) VALUES (?, ?, 'photo', ?)
            ON CONFLICT(user_id) DO UPDATE SET photo_updated_at = excluded.photo_updated_at, profile_icon = 'photo', updated_at = excluded.updated_at
          `).bind(user.id, Date.now(), Date.now()).run();
          return jsonResponse({ success: true });
        }

        if (request.method === "DELETE") {
          await (env.PHOTOS || env.JOB_PHOTOS).delete(key);
          await ensureCrewProfilesTable(db);
          await db.prepare(`
            INSERT INTO crew_profiles (user_id, photo_updated_at, updated_at) VALUES (?, NULL, ?)
            ON CONFLICT(user_id) DO UPDATE SET photo_updated_at = NULL, updated_at = excluded.updated_at
          `).bind(user.id, Date.now()).run();
          return jsonResponse({ success: true });
        }
      }

      const crewProfileMatch = path.match(/^\/api\/crew-profiles\/([^/]+)$/);
      if (crewProfileMatch) {
        const targetUsername = resolveProfileTargetParam(crewProfileMatch[1], user.username);
        await ensureCrewProfilesTable(db);
        const target = await db.prepare(`
          SELECT u.id, u.username, u.name, u.role, u.disabled,
                 COALESCE(cp.bio, '') AS bio,
                 COALESCE(cp.phone, '') AS phone,
                 COALESCE(cp.email, '') AS email,
                 COALESCE(cp.address, '') AS address,
                 COALESCE(cp.emergency_name, '') AS emergency_name,
                 COALESCE(cp.emergency_phone, '') AS emergency_phone,
                 cp.photo_updated_at,
                 cp.profile_completed_at,
                 COALESCE(cp.profile_icon, 'gunner') AS profile_icon
          FROM users u
          LEFT JOIN crew_profiles cp ON cp.user_id = u.id
          WHERE u.username = ? AND u.disabled = 0
        `).bind(targetUsername).first();
        if (!target) return errorResponse("No active team member with that username.", 404);

        if (request.method === "GET") {
          const canSeePrivate = target.id === user.id || user.role === "manager" || user.role === "owner";
          const profile = {
            name: target.name,
            role: target.role,
            bio: target.bio,
            photoUpdatedAt: target.photo_updated_at || null,
            profileComplete: !!target.profile_completed_at,
            profileIcon: target.profile_icon || "gunner",
            canSeePrivate,
            isSelf: target.id === user.id,
          };
          if (canSeePrivate) {
            profile.private = {
              phone: target.phone,
              email: target.email,
              address: target.address,
              emergencyName: target.emergency_name,
              emergencyPhone: target.emergency_phone,
            };
          }
          return jsonResponse({ profile });
        }

        if (request.method === "POST") {
          if (target.id !== user.id) return errorResponse("You can only edit your own profile.", 403);
          const data = await request.json().catch(() => ({}));
          const bio = cleanProfileText(data.bio, 500);
          const phone = cleanProfileText(data.phone, 60);
          const email = cleanProfileText(data.email, 160);
          const address = cleanProfileText(data.address, 260);
          const emergencyName = cleanProfileText(data.emergencyName, 120);
          const emergencyPhone = cleanProfileText(data.emergencyPhone, 60);
          const completeProfile = data.completeProfile === true;
          const requestedIcon = String(data.profileIcon || "").toLowerCase();
          const profileIcon = ["gunner", "leo", "photo"].includes(requestedIcon) ? requestedIcon : null;
          const now = Date.now();
          await db.prepare(`
            INSERT INTO crew_profiles (user_id, bio, phone, email, address, emergency_name, emergency_phone, profile_completed_at, profile_icon, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, COALESCE(?, 'gunner'), ?)
            ON CONFLICT(user_id) DO UPDATE SET
              bio = excluded.bio, phone = excluded.phone, email = excluded.email, address = excluded.address,
              emergency_name = excluded.emergency_name, emergency_phone = excluded.emergency_phone,
              profile_completed_at = CASE WHEN excluded.profile_completed_at IS NOT NULL THEN excluded.profile_completed_at ELSE crew_profiles.profile_completed_at END,
              profile_icon = CASE WHEN ? IS NOT NULL THEN ? ELSE crew_profiles.profile_icon END,
              updated_at = excluded.updated_at
          `).bind(
            user.id, bio, phone, email, address, emergencyName, emergencyPhone,
            completeProfile ? now : null, profileIcon, now, profileIcon, profileIcon
          ).run();
          return jsonResponse({ success: true });
        }
      }

      // Owner emergency/session reset: signs every account out, including the owner.
      // Used for urgent security events or when a clean re-login is needed after an update.
      if (path === "/api/auth/emergency-logout" && request.method === "POST") {
        if (user.role !== "owner") return errorResponse("Owner access only.", 403);
        const body = await request.json().catch(() => ({}));
        const confirmText = String(body.confirm || "");
        if (confirmText !== "LOG OUT EVERYONE") return errorResponse("Confirmation required.", 400);
        await db.prepare("DELETE FROM sessions").run();
        return jsonResponse({ success: true, message: "All active sessions have been signed out." });
      }

      // ================= ACCOUNT / TEAM SETTINGS =================
      if (path === "/api/auth/change-password" && request.method === "POST") {
        const { currentPassword, newPassword } = await request.json();
        if (!currentPassword || !newPassword) return errorResponse("Current and new password are required.");
        if (newPassword.length < 8) return errorResponse("New password must be at least 8 characters.");
        const row = await db.prepare("SELECT password_hash FROM users WHERE id = ?").bind(user.id).first();
        if (!row || !row.password_hash) return errorResponse("Account password could not be verified.", 400);
        const [salt, expectedHash] = row.password_hash.split(":");
        if (!(await verifyPassword(currentPassword, salt, expectedHash))) return errorResponse("Current password is incorrect.", 401);
        const newSalt = crypto.randomUUID();
        const newHash = await hashPassword(newPassword, newSalt);
        await db.prepare("UPDATE users SET password_hash = ? WHERE id = ?").bind(`${newSalt}:${newHash}`, user.id).run();
        // Keep the current session, but invalidate every other logged-in device.
        const currentToken = getToken(request);
        await db.prepare("DELETE FROM sessions WHERE user_id = ? AND token <> ?").bind(user.id, currentToken).run();
        return jsonResponse({ success: true });
      }

      if (path.startsWith("/api/auth/users/") && path.endsWith("/role") && request.method === "POST") {
        if (user.role !== "owner") return errorResponse("Owner access only.", 403);
        const targetUsername = decodeURIComponent(path.split("/api/auth/users/")[1].replace(/\/role$/, ""));
        if (targetUsername === user.username) return errorResponse("The owner role cannot be changed here.", 400);
        const target = await db.prepare("SELECT id, username, role FROM users WHERE username = ?").bind(targetUsername).first();
        if (!target) return errorResponse("No account with that username.", 404);
        if (target.role === "owner") return errorResponse("The owner role cannot be changed.", 400);
        const body = await request.json().catch(() => ({}));
        const newRole = body.role === "manager" ? "manager" : body.role === "crew" ? "crew" : null;
        if (!newRole) return errorResponse("Role must be crew or manager.", 400);
        if (newRole === target.role) return jsonResponse({ success: true, role: newRole, changed: false });
        await db.prepare("UPDATE users SET role = ? WHERE id = ?").bind(newRole, target.id).run();
        // A new role means a fresh PIN: promoted managers must set their own at next login; crew have none.
        await db.prepare("UPDATE users SET pin_hash = NULL, pin_set_at = NULL, pin_disclaimer_at = NULL, pin_failed_count = 0, pin_locked_until = NULL WHERE id = ?").bind(target.id).run();
        await logPin(db, "pin_cleared", user.username, target.username, null, `Role changed ${target.role} to ${newRole}`);
        try {
          await ensureRoleNotificationsTable(db);
          await db.prepare("UPDATE role_notifications SET acknowledged_at = ? WHERE user_id = ? AND acknowledged_at IS NULL")
            .bind(Date.now(), target.id).run();
          await db.prepare("INSERT INTO role_notifications (id, user_id, username, old_role, new_role, changed_at, changed_by, acknowledged_at) VALUES (?, ?, ?, ?, ?, ?, ?, NULL)")
            .bind(crypto.randomUUID(), target.id, target.username, target.role, newRole, Date.now(), user.username).run();
        } catch (e) {
          console.warn("[ROLE NOTICE] Role changed but notification could not be recorded:", e.message);
        }
        await db.prepare("DELETE FROM sessions WHERE user_id = ?").bind(target.id).run();
        return jsonResponse({ success: true, role: newRole, changed: true });
      }

      if (path.startsWith("/api/auth/users/") && path.endsWith("/reset-password") && request.method === "POST") {
        if (user.role !== "owner") return errorResponse("Owner access only.", 403);
        const targetUsername = decodeURIComponent(path.split("/api/auth/users/")[1].replace(/\/reset-password$/, ""));
        if (targetUsername === user.username) return errorResponse("Use Change Password for your own account.", 400);
        const target = await db.prepare("SELECT id, role FROM users WHERE username = ?").bind(targetUsername).first();
        if (!target) return errorResponse("No account with that username.", 404);
        if (target.role === "owner") return errorResponse("The owner password cannot be reset here.", 400);
        const { newPassword } = await request.json();
        if (!newPassword || newPassword.length < 8) return errorResponse("New password must be at least 8 characters.");
        const salt = crypto.randomUUID();
        const hash = await hashPassword(newPassword, salt);
        await db.prepare("UPDATE users SET password_hash = ? WHERE id = ?").bind(`${salt}:${hash}`, target.id).run();
        await db.prepare("DELETE FROM sessions WHERE user_id = ?").bind(target.id).run();
        // Password reset itself is complete at this point. Clearing sessions above
        // forces the crew member to sign in again with the new password.
        //
        // Mark a pending reset request resolved when that tracking table/schema is
        // available, but never turn an otherwise-successful password reset into a 500
        // just because the optional request-history row is missing or from an older schema.
        try {
          await db.prepare("UPDATE password_reset_requests SET status = 'resolved', resolved_at = ?, resolved_by = ? WHERE user_id = ? AND status = 'pending'")
            .bind(Date.now(), user.username, target.id).run();
        } catch (resetTrackingError) {
          console.warn("[PASSWORD RESET] Password changed, but reset-request tracking could not be updated:", resetTrackingError.message);
        }
        return jsonResponse({ success: true });
      }

      if (path === "/api/auth/password-reset-requests" && request.method === "GET") {
        if (user.role !== "owner") return errorResponse("Owner access only.", 403);
        const { results } = await db.prepare("SELECT id, username, requested_at, status FROM password_reset_requests WHERE status = 'pending' ORDER BY requested_at DESC").all();
        return jsonResponse({ requests: results || [] });
      }

      // ================= JOB RESPONSIBILITY ASSIGNMENTS =================
      if (path === "/api/job-roles/people" && request.method === "GET") {
        const dateISO = String(url.searchParams.get("dateISO") || "");
        if (!/^\d{4}-\d{2}-\d{2}$/.test(dateISO)) return errorResponse("dateISO is required.");
        await ensureCrewScheduleBoardTables(db);
        const weekStart = mondayISOFromDate(dateISO);
        const { results } = await db.prepare("SELECT id,name,role FROM users WHERE disabled=0 ORDER BY CASE role WHEN 'owner' THEN 0 WHEN 'manager' THEN 1 ELSE 2 END,name,id").all();
        const people=[];
        for (const p of results || []) {
          let working=null;
          const row=await db.prepare("SELECT schedule_json FROM crew_schedule_weeks WHERE user_id=? AND week_start=?").bind(p.id,weekStart).first();
          if(row){try{const s=JSON.parse(row.schedule_json||"{}");working=!!(s[dateISO]&&s[dateISO].working);}catch(e){}}
          people.push({id:p.id,name:p.name||"Team Member",role:p.role,working});
        }
        return jsonResponse({people});
      }

      if (path === "/api/job-roles" && request.method === "GET") {
        await ensureJobRoleTables(db);
        const jobTimestamp=Number(url.searchParams.get("jobTimestamp")||0);
        if(!jobTimestamp)return errorResponse("jobTimestamp is required.");
        const row=await db.prepare("SELECT * FROM job_role_assignments WHERE job_timestamp=?").bind(jobTimestamp).first();
        let record=null;
        if(row){
          let crewIds=[],assignments={};try{crewIds=JSON.parse(row.crew_ids_json||"[]")}catch(e){}try{assignments=JSON.parse(row.assignments_json||"{}")}catch(e){}
          const people=[];
          for(const id of crewIds){const p=await db.prepare("SELECT id,name,role FROM users WHERE id=?").bind(id).first();if(p)people.push({id:p.id,name:p.name||"Team Member",role:p.role});}
          record={jobTimestamp:row.job_timestamp,bookingId:row.booking_id,dateISO:row.date_iso,crewIds,assignments,people,updatedAt:row.updated_at,updatedBy:row.updated_by};
        }
        const {results:hist}=await db.prepare("SELECT id,changed_at,changed_by FROM job_role_assignment_history WHERE job_timestamp=? ORDER BY changed_at DESC LIMIT 20").bind(jobTimestamp).all();
        return jsonResponse({record,history:(hist||[]).map(h=>({id:h.id,changedAt:h.changed_at,changedBy:h.changed_by}))});
      }

      if (path === "/api/job-roles" && request.method === "POST") {
        if(user.role!=="owner"&&user.role!=="manager")return errorResponse("Owner or manager access only.",403);
        await ensureJobRoleTables(db);
        const body=await request.json().catch(()=>({}));
        const jobTimestamp=Number(body.jobTimestamp||0),bookingId=String(body.bookingId||"").slice(0,160),dateISO=String(body.dateISO||"");
        if(!jobTimestamp)return errorResponse("jobTimestamp is required.");
        const ids=[...new Set((Array.isArray(body.crewIds)?body.crewIds:[]).map(Number).filter(n=>Number.isInteger(n)&&n>0))].slice(0,3);
        if(ids.length<1)return errorResponse("Choose at least one crew member.");
        const valid=[];
        for(const id of ids){const p=await db.prepare("SELECT id FROM users WHERE id=? AND disabled=0").bind(id).first();if(p)valid.push(id);}
        if(valid.length!==ids.length)return errorResponse("One of the selected team members is unavailable.");
        const assignments={};
        for(const [key,raw] of Object.entries(body.assignments||{})){const uid=Number(raw);if(allowedJobRoleKey(key)&&valid.includes(uid))assignments[key]=uid;}
        const existing=await db.prepare("SELECT * FROM job_role_assignments WHERE job_timestamp=?").bind(jobTimestamp).first();
        if(existing){
          await db.prepare("INSERT INTO job_role_assignment_history (id,job_timestamp,booking_id,date_iso,crew_ids_json,assignments_json,changed_at,changed_by) VALUES (?,?,?,?,?,?,?,?)")
            .bind(crypto.randomUUID(),jobTimestamp,existing.booking_id,existing.date_iso,existing.crew_ids_json,existing.assignments_json,Date.now(),user.name||user.username).run();
        }
        await db.prepare(`INSERT INTO job_role_assignments (job_timestamp,booking_id,date_iso,crew_ids_json,assignments_json,updated_at,updated_by)
          VALUES (?,?,?,?,?,?,?) ON CONFLICT(job_timestamp) DO UPDATE SET booking_id=excluded.booking_id,date_iso=excluded.date_iso,crew_ids_json=excluded.crew_ids_json,assignments_json=excluded.assignments_json,updated_at=excluded.updated_at,updated_by=excluded.updated_by`)
          .bind(jobTimestamp,bookingId||null,dateISO||null,JSON.stringify(valid),JSON.stringify(assignments),Date.now(),user.name||user.username).run();
        return jsonResponse({success:true});
      }

      // ================= TWO-WEEK CREW SCHEDULE BOARD =================
      if (path === "/api/crew-schedule-board" && request.method === "GET") {
        await ensureCrewScheduleBoardTables(db);
        const requested = url.searchParams.get("start");
        const week1 = mondayISOFromDate(requested) || mondayISOFromDate();
        const week2 = addDaysISO(week1, 7);
        const pastStarts = [addDaysISO(week1, -7), addDaysISO(week1, -14), addDaysISO(week1, -21), addDaysISO(week1, -28)];
        const { results: peopleRows } = await db.prepare(
          "SELECT id, name, role FROM users WHERE disabled = 0 ORDER BY CASE role WHEN 'owner' THEN 0 WHEN 'manager' THEN 1 ELSE 2 END, name, id"
        ).all();
        const people = [];
        for (const p of peopleRows || []) {
          const { results: rows } = await db.prepare(
            "SELECT week_start, schedule_json, updated_at, updated_by FROM crew_schedule_weeks WHERE user_id = ? AND week_start IN (?, ?, ?, ?, ?, ?) ORDER BY week_start"
          ).bind(p.id, week1, week2, ...pastStarts).all();
          const byWeek = {};
          for (const row of rows || []) {
            let parsed = {};
            try { parsed = JSON.parse(row.schedule_json || "{}"); } catch (e) {}
            byWeek[row.week_start] = { schedule: parsed, updatedAt: row.updated_at, updatedBy: row.updated_by };
          }
          people.push({
            id: p.id,
            name: p.name || "Team Member",
            role: p.role,
            weeks: [
              { weekStart: week1, ...(byWeek[week1] || { schedule: {} }) },
              { weekStart: week2, ...(byWeek[week2] || { schedule: {} }) },
            ],
            pastWeeks: pastStarts.map((weekStart) => ({ weekStart, ...(byWeek[weekStart] || { schedule: {} }) })),
          });
        }
        return jsonResponse({
          weekStarts: [week1, week2],
          people,
          canEdit: user.role === "owner" || user.role === "manager",
          currentUserId: user.id,
        });
      }

      const crewBoardSaveMatch = path.match(/^\/api\/crew-schedule-board\/(\d+)\/(\d{4}-\d{2}-\d{2})$/);
      if (crewBoardSaveMatch && request.method === "POST") {
        if (user.role !== "owner" && user.role !== "manager") return errorResponse("Manager or owner access only.", 403);
        await ensureCrewScheduleBoardTables(db);
        const targetId = Number(crewBoardSaveMatch[1]);
        const weekStart = mondayISOFromDate(crewBoardSaveMatch[2]);
        if (!targetId || !weekStart) return errorResponse("Invalid schedule target.", 400);
        const target = await db.prepare("SELECT id, role FROM users WHERE id = ? AND disabled = 0").bind(targetId).first();
        if (!target) return errorResponse("Team member not found.", 404);
        if (user.role === "manager" && target.role === "owner") return errorResponse("Managers cannot edit the owner's schedule.", 403);
        const body = await request.json().catch(() => ({}));
        if (!body.schedule || typeof body.schedule !== "object" || Array.isArray(body.schedule)) return errorResponse("A schedule is required.");
        const scheduleJson = JSON.stringify(body.schedule);
        if (scheduleJson.length > 12000) return errorResponse("Schedule is too large.", 400);
        const existing = await db.prepare("SELECT schedule_json FROM crew_schedule_weeks WHERE user_id = ? AND week_start = ?")
          .bind(targetId, weekStart).first();
        if (existing && existing.schedule_json !== scheduleJson) {
          await db.prepare("INSERT INTO crew_schedule_history (id, user_id, week_start, schedule_json, changed_at, changed_by) VALUES (?, ?, ?, ?, ?, ?)")
            .bind(crypto.randomUUID(), targetId, weekStart, existing.schedule_json, Date.now(), user.name || "Manager").run();
        }
        await db.prepare(`
          INSERT INTO crew_schedule_weeks (user_id, week_start, schedule_json, updated_at, updated_by)
          VALUES (?, ?, ?, ?, ?)
          ON CONFLICT(user_id, week_start) DO UPDATE SET
            schedule_json = excluded.schedule_json,
            updated_at = excluded.updated_at,
            updated_by = excluded.updated_by
        `).bind(targetId, weekStart, scheduleJson, Date.now(), user.name || user.username).run();
        return jsonResponse({ success: true });
      }

      if (path === "/api/crew-schedule-board/history" && request.method === "GET") {
        if (user.role !== "owner" && user.role !== "manager") return errorResponse("Manager or owner access only.", 403);
        await ensureCrewScheduleBoardTables(db);
        const targetId = Number(url.searchParams.get("userId"));
        const weekStart = mondayISOFromDate(url.searchParams.get("weekStart"));
        if (!targetId || !weekStart) return errorResponse("userId and weekStart are required.", 400);
        const { results } = await db.prepare(
          "SELECT id, schedule_json, changed_at, changed_by FROM crew_schedule_history WHERE user_id = ? AND week_start = ? ORDER BY changed_at DESC LIMIT 25"
        ).bind(targetId, weekStart).all();
        const history = (results || []).map((row) => {
          let schedule = {};
          try { schedule = JSON.parse(row.schedule_json || "{}"); } catch (e) {}
          return { id: row.id, schedule, changedAt: row.changed_at, changedBy: row.changed_by };
        });
        return jsonResponse({ history });
      }

      if (path === "/api/crew-schedules" && request.method === "GET") {
        const { results } = await db.prepare(
          "SELECT u.username, u.name, u.role, cs.schedule_json FROM users u LEFT JOIN crew_schedules cs ON cs.user_id = u.id WHERE u.disabled = 0 ORDER BY CASE u.role WHEN 'owner' THEN 0 WHEN 'manager' THEN 1 ELSE 2 END, u.name, u.username"
        ).all();
        const schedules = (results || []).map((r) => ({ username: r.username, name: r.name, role: r.role, schedule: r.schedule_json || "{}" }));
        return jsonResponse({ schedules });
      }

      if (path.startsWith("/api/crew-schedules/") && request.method === "POST") {
        if (user.role !== "owner") return errorResponse("Owner access only.", 403);
        const targetUsername = decodeURIComponent(path.split("/api/crew-schedules/")[1]);
        const target = await db.prepare("SELECT id FROM users WHERE username = ?").bind(targetUsername).first();
        if (!target) return errorResponse("No account with that username.", 404);
        const { schedule } = await request.json();
        if (!schedule || typeof schedule !== "object") return errorResponse("A schedule is required.");
        const scheduleJson = JSON.stringify(schedule);
        await db.prepare(
          "INSERT INTO crew_schedules (user_id, username, schedule_json, updated_at, updated_by) VALUES (?, ?, ?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET username = excluded.username, schedule_json = excluded.schedule_json, updated_at = excluded.updated_at, updated_by = excluded.updated_by"
        ).bind(target.id, targetUsername, scheduleJson, Date.now(), user.username).run();
        return jsonResponse({ success: true });
      }

      if (path === "/api/site-content" && request.method === "POST") {
        if (user.role !== "owner") return errorResponse("Owner access only.", 403);
        const body = await request.json();
        if (!body.content || typeof body.content !== "object" || Array.isArray(body.content)) return errorResponse("Content is required.");
        const entries = Object.entries(body.content);
        for (const [key, value] of entries) {
          if (!/^[A-Za-z0-9_-]{1,80}$/.test(key)) return errorResponse("Invalid content key.");
          const stored = value == null ? "" : String(value);
          if (stored.length > 10000) return errorResponse(`Content for ${key} is too long.`);
          await db.prepare(
            "INSERT INTO site_content (key, value, updated_at, updated_by) VALUES (?, ?, ?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at, updated_by = excluded.updated_by"
          ).bind(key, stored, Date.now(), user.username).run();
        }
        return jsonResponse({ success: true });
      }

      // ================= EMPLOYEE WORKDAY TIME CLOCK =================
      // Separate from /api/time-logs, which measures individual job duration.
      // Punch timestamps are generated here on the server, never accepted from the client.

      if (path === "/api/time-clock/status" && request.method === "GET") {
        const activeEntry = await db.prepare(
          "SELECT * FROM employee_time_entries WHERE user_id = ? AND clock_out IS NULL ORDER BY clock_in DESC LIMIT 1"
        ).bind(user.id).first();
        const now = Date.now();
        const requestedWeekStart = Number(url.searchParams.get("weekStart"));
        const weekStart = Number.isFinite(requestedWeekStart) && requestedWeekStart > 0 ? requestedWeekStart : now - (7 * 24 * 60 * 60 * 1000);
        const { results: weekEntries } = await db.prepare(
          "SELECT clock_in, clock_out FROM employee_time_entries WHERE user_id = ? AND clock_in >= ? ORDER BY clock_in ASC"
        ).bind(user.id, weekStart).all();
        let weekMinutes = 0;
        for (const e of weekEntries) weekMinutes += Math.max(0, Math.floor(((e.clock_out || now) - e.clock_in) / 60000));
        return jsonResponse({ activeEntry, weekMinutes, weekStart });
      }

      if (path === "/api/time-clock/in" && request.method === "POST") {
        const existing = await db.prepare(
          "SELECT id FROM employee_time_entries WHERE user_id = ? AND clock_out IS NULL LIMIT 1"
        ).bind(user.id).first();
        if (existing) return errorResponse("You're already clocked in.", 409);
        const now = Date.now();
        const id = crypto.randomUUID();
        await db.prepare(`
          INSERT INTO employee_time_entries (id, user_id, username, employee_name, clock_in, clock_out, created_at, updated_at)
          VALUES (?, ?, ?, ?, ?, NULL, ?, ?)
        `).bind(id, user.id, user.username, user.name || user.username, now, now, now).run();
        return jsonResponse({ success: true, id, clockIn: now });
      }

      if (path === "/api/time-clock/out" && request.method === "POST") {
        const active = await db.prepare(
          "SELECT * FROM employee_time_entries WHERE user_id = ? AND clock_out IS NULL ORDER BY clock_in DESC LIMIT 1"
        ).bind(user.id).first();
        if (!active) return errorResponse("You're not currently clocked in.", 409);
        const now = Date.now();
        if (now < active.clock_in) return errorResponse("Clock-out time is invalid.", 409);
        await db.prepare("UPDATE employee_time_entries SET clock_out = ?, updated_at = ? WHERE id = ?")
          .bind(now, now, active.id).run();
        return jsonResponse({ success: true, id: active.id, clockOut: now });
      }

      if (path === "/api/time-clock/me" && request.method === "GET") {
        const limit = Math.min(200, Math.max(1, Number(url.searchParams.get("limit")) || 50));
        const { results } = await db.prepare(
          "SELECT * FROM employee_time_entries WHERE user_id = ? ORDER BY clock_in DESC LIMIT ?"
        ).bind(user.id, limit).all();
        return jsonResponse({ entries: results });
      }

      if (path === "/api/time-clock/team" && request.method === "GET") {
        if (user.role !== "owner") return errorResponse("Owner access only.", 403);
        const limit = Math.min(500, Math.max(1, Number(url.searchParams.get("limit")) || 100));
        const { results } = await db.prepare(
          "SELECT * FROM employee_time_entries ORDER BY clock_in DESC LIMIT ?"
        ).bind(limit).all();
        const { results: active } = await db.prepare(
          "SELECT * FROM employee_time_entries WHERE clock_out IS NULL ORDER BY clock_in ASC"
        ).all();
        return jsonResponse({ entries: results, active });
      }

      if (path === "/api/time-clock/admin/edit" && request.method === "POST") {
        if (user.role !== "owner") return errorResponse("Owner access only.", 403);
        const data = await request.json();
        if (!data.id) return errorResponse("Entry id is required.");
        if (!data.reason || !String(data.reason).trim()) return errorResponse("A correction reason is required.");
        const before = await db.prepare("SELECT * FROM employee_time_entries WHERE id = ?").bind(data.id).first();
        if (!before) return errorResponse("Time entry not found.", 404);
        const clockIn = Number(data.clockIn ?? before.clock_in);
        const clockOut = data.clockOut === null ? null : Number(data.clockOut ?? before.clock_out);
        if (!Number.isFinite(clockIn) || (clockOut !== null && (!Number.isFinite(clockOut) || clockOut < clockIn))) {
          return errorResponse("Corrected punch times are invalid.");
        }
        const now = Date.now();
        await db.prepare(`UPDATE employee_time_entries SET clock_in = ?, clock_out = ?, updated_at = ?, edited_at = ?, edited_by = ?, edit_reason = ? WHERE id = ?`)
          .bind(clockIn, clockOut, now, now, user.username, String(data.reason).trim(), data.id).run();
        const after = await db.prepare("SELECT * FROM employee_time_entries WHERE id = ?").bind(data.id).first();
        await db.prepare(`INSERT INTO employee_time_audit (id, entry_id, action, changed_by, changed_at, before_json, after_json, reason) VALUES (?, ?, 'edit', ?, ?, ?, ?, ?)`)
          .bind(crypto.randomUUID(), data.id, user.username, now, JSON.stringify(before), JSON.stringify(after), String(data.reason).trim()).run();
        return jsonResponse({ success: true, entry: after });
      }

      if (path.startsWith("/api/time-clock/audit/") && request.method === "GET") {
        if (user.role !== "owner") return errorResponse("Owner access only.", 403);
        const entryId = decodeURIComponent(path.split("/api/time-clock/audit/")[1]);
        const { results } = await db.prepare("SELECT * FROM employee_time_audit WHERE entry_id = ? ORDER BY changed_at DESC").bind(entryId).all();
        return jsonResponse({ audit: results });
      }

      // ---- TEMPLATE PATTERN A: shared data, sensitive fields stripped ----
      // estimates/jobs are visible to everyone, but a crew member never
      // sees payment_status or paid_at on the way out.

      if (path === "/api/estimates" && request.method === "GET") {
        const { results } = await db.prepare("SELECT * FROM estimates ORDER BY timestamp DESC").all();
        const filtered = user.role === "owner"
          ? results
          : results.map(({ payment_status, paid_at, ...rest }) => rest);
        return jsonResponse({ estimates: filtered });
      }

      if (path === "/api/estimates" && request.method === "POST") {
        const data = await request.json();
        if (!data.timestamp) return errorResponse("timestamp is required.");
        // A crew member's write can't touch payment fields even if they send them.
        const paymentStatus = user.role === "owner" ? (data.paymentStatus || "unpaid") : undefined;
        const paidAt = user.role === "owner" ? (data.paidAt || null) : undefined;

        // Once a job is agreed or completed, its price is locked for crew — they can
        // still update status, notes, or photos, but the total/pricing details fall
        // back to whatever is already stored, even if the request tried to change them.
        let total = data.total || 0;
        let lines = JSON.stringify(data.lines || []);
        let builderState = JSON.stringify(data.builderState || {});
        const existing = await db.prepare("SELECT status, total, lines, builder_state, completed_by FROM estimates WHERE timestamp = ?").bind(data.timestamp).first();
        if (user.role !== "owner" && user.role !== "manager") {
          if (existing && (existing.status === "confirmed" || existing.status === "completed")) {
            total = existing.total;
            lines = existing.lines;
            builderState = existing.builder_state;
          }
        }

        // "Completed by" = whoever was logged in when the job flipped to completed.
        // Server-side only (never client-supplied), and preserved on later re-saves.
        const newStatus = data.status || "pending";
        let completedBy = existing ? existing.completed_by : null;
        if (newStatus === "completed" && (!existing || existing.status !== "completed")) completedBy = user.username;

        await db.prepare(`
          INSERT INTO estimates (timestamp, customer_name, phone, address, is_recurring, total, lines, builder_state, status, payment_status, paid_at, has_photo, has_before_photo, completed_by)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(timestamp) DO UPDATE SET
            customer_name = excluded.customer_name, phone = excluded.phone, address = excluded.address,
            is_recurring = excluded.is_recurring, total = excluded.total, lines = excluded.lines,
            builder_state = excluded.builder_state, status = excluded.status,
            payment_status = COALESCE(excluded.payment_status, estimates.payment_status),
            paid_at = COALESCE(excluded.paid_at, estimates.paid_at),
            has_photo = estimates.has_photo, has_before_photo = estimates.has_before_photo,
            completed_by = excluded.completed_by
        `).bind(
          data.timestamp, data.customerName || "", data.phone || "", data.address || "",
          data.isRecurring ? 1 : 0, total, lines,
          builderState, newStatus,
          paymentStatus ?? null, paidAt ?? null,
          0, 0, completedBy ?? null
        ).run();
        return jsonResponse({ success: true });
      }

      // ---- Owner/manager PINs ----
      if (path === "/api/auth/pin" && request.method === "POST") {
        if (user.role !== "owner" && user.role !== "manager") return errorResponse("Only the owner and managers have PINs.", 403);
        const data = await request.json();
        if (!data.acceptedDisclaimer) return errorResponse("Please read and accept the PIN notice first.");
        const pin = String(data.pin || "");
        if (!/^\d{4,6}$/.test(pin)) return errorResponse("Your PIN must be 4 to 6 digits.");
        if (isWeakPin(pin)) return errorResponse("That PIN is too easy to guess. Avoid repeats like 1111 and runs like 1234.");
        const me = await db.prepare("SELECT password_hash FROM users WHERE id = ?").bind(user.id).first();
        const [salt, hash] = me.password_hash.split(":");
        if (!(await verifyPassword(String(data.password || ""), salt, hash))) return errorResponse("Your password is incorrect.", 401);
        const pinSalt = crypto.randomUUID();
        await db.prepare("UPDATE users SET pin_hash = ?, pin_set_at = ?, pin_disclaimer_at = ?, pin_failed_count = 0, pin_locked_until = NULL WHERE id = ?")
          .bind(`${pinSalt}:${await hashPassword(pin, pinSalt)}`, Date.now(), Date.now(), user.id).run();
        await logPin(db, "pin_set", user.username, user.username, null, "Accepted the PIN notice");
        return jsonResponse({ success: true });
      }
      if (path.startsWith("/api/auth/users/") && path.endsWith("/clear-pin") && request.method === "POST") {
        if (user.role !== "owner") return errorResponse("Only the owner can clear someone's PIN.", 403);
        const target = await db.prepare("SELECT id, username FROM users WHERE username = ?").bind(decodeURIComponent(path.split("/api/auth/users/")[1].replace(/\/clear-pin$/, ""))).first();
        if (!target) return errorResponse("No account with that username.", 404);
        await db.prepare("UPDATE users SET pin_hash = NULL, pin_set_at = NULL, pin_disclaimer_at = NULL, pin_failed_count = 0, pin_locked_until = NULL WHERE id = ?").bind(target.id).run();
        await logPin(db, "pin_cleared", user.username, target.username, null, "Cleared by the owner; a new PIN is required at next login");
        return jsonResponse({ success: true });
      }
      if (path === "/api/approvers" && request.method === "GET") {
        const { results } = await db.prepare("SELECT username, name, role FROM users WHERE role IN ('owner','manager') AND (disabled IS NULL OR disabled = 0) AND pin_hash IS NOT NULL ORDER BY role DESC, name").all();
        return jsonResponse({ approvers: results });
      }
      if (path === "/api/pin-audit" && request.method === "GET") {
        if (user.role !== "owner") return errorResponse("Owner access only.", 403);
        const { results } = await db.prepare("SELECT * FROM pin_audit ORDER BY created_at DESC LIMIT 200").all();
        return jsonResponse({ entries: results });
      }

      const portalLinkMatch=path.match(/^\/api\/customers\/([^/]+)\/portal-link$/);
      if(portalLinkMatch&&request.method==="POST"){
        if(user.role!=="owner"&&user.role!=="manager")return errorResponse("Owner or manager access only.",403);
        const phone=decodeURIComponent(portalLinkMatch[1]);if(!(await db.prepare("SELECT phone FROM customer_profiles WHERE phone=?").bind(phone).first()))return errorResponse("Customer not found.",404);
        const token=await getOrCreateCustomerPortalToken(db,phone);return jsonResponse({success:true,token});
      }

      // ---- Customer plans (Basic / Plus) and Plus fee waivers ----
      if (path === "/api/customer-plans" && request.method === "GET") {
        const { results } = await db.prepare("SELECT phone, plan, fee_waived, waived_by, waived_at, plus_since FROM customer_plans").all();
        return jsonResponse({ plans: results });
      }
      const planMatch = path.match(/^\/api\/customers\/([^/]+)\/(plan|fee-waiver)$/);
      if (planMatch && request.method === "POST") {
        const phone = decodeURIComponent(planMatch[1]);
        if (!(await db.prepare("SELECT phone FROM customer_profiles WHERE phone = ?").bind(phone).first())) return errorResponse("No customer with that phone number.", 404);
        const current = await db.prepare("SELECT * FROM customer_plans WHERE phone = ?").bind(phone).first();
        const data = await request.json();
        if (planMatch[2] === "plan") {
          if (user.role !== "owner" && user.role !== "manager") return errorResponse("Only the owner or a manager can change a customer's plan.", 403);
          const plan = ["basic","plus","signature"].includes(data.plan) ? data.plan : null;
          if (!plan) return errorResponse("Plan must be basic, plus, or signature.");
          const keepPlus = plan === "plus" && current && current.plan === "plus";
          await db.prepare(`
            INSERT INTO customer_plans (phone, plan, fee_waived, waived_by, waived_at, plus_since, updated_by, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(phone) DO UPDATE SET plan = excluded.plan, fee_waived = excluded.fee_waived, waived_by = excluded.waived_by,
              waived_at = excluded.waived_at, plus_since = excluded.plus_since, updated_by = excluded.updated_by, updated_at = excluded.updated_at
          `).bind(phone, plan, keepPlus ? current.fee_waived : 0, keepPlus ? current.waived_by : null, keepPlus ? current.waived_at : null,
            plan === "plus" ? (keepPlus ? current.plus_since : Date.now()) : null, user.username, Date.now()).run();
          if (!current || current.plan !== plan) await logPin(db, "plan_changed", user.username, null, phone, `${current ? current.plan : "basic"} to ${plan}`);
          return jsonResponse({ success: true, plan });
        }
        // Waiving (or restoring) the $5/month Plus fee always needs an owner or manager PIN.
        if (!current || current.plan !== "plus") return errorResponse("Only Plus customers have the monthly fee.");
        const waive = !!data.waive;
        const check = await verifyApproverPin(db, data.approver, data.pin, user.username, phone);
        if (!check.ok) return errorResponse(check.error, check.status || 403);
        await db.prepare("UPDATE customer_plans SET fee_waived = ?, waived_by = ?, waived_at = ?, updated_by = ?, updated_at = ? WHERE phone = ?")
          .bind(waive ? 1 : 0, waive ? check.approver : null, waive ? Date.now() : null, user.username, Date.now(), phone).run();
        await logPin(db, waive ? "fee_waived" : "fee_restored", user.username, check.approver, phone, data.reason ? String(data.reason).slice(0, 200) : null);
        return jsonResponse({ success: true, feeWaived: waive, approvedBy: check.approver });
      }

      // ---- Photo checklist settings (everyone can read; only the owner edits) ----
      const listMatch = path.match(/^\/api\/shot-lists\/(?:default|customer\/([^/]+))$/);
      if (listMatch) {
        const phone = listMatch[1] ? decodeURIComponent(listMatch[1]) : null;
        const scope = phone ? `customer:${phone}` : "default";
        if (request.method === "GET") return jsonResponse(await getShotList(db, phone));
        if (user.role !== "owner") return errorResponse("Only the owner can change photo checklists.", 403);
        if (request.method === "POST") {
          const data = await request.json();
          const shots = cleanShots(data.shots);
          if (!shots) return errorResponse("A checklist needs 1–12 shots, and each one needs a name.");
          await db.prepare(`
            INSERT INTO photo_shot_lists (scope, shots_json, updated_at, updated_by) VALUES (?, ?, ?, ?)
            ON CONFLICT(scope) DO UPDATE SET shots_json = excluded.shots_json, updated_at = excluded.updated_at, updated_by = excluded.updated_by
          `).bind(scope, JSON.stringify(shots), Date.now(), user.username).run();
          return jsonResponse({ success: true, shots });
        }
        if (request.method === "DELETE" && phone) {
          await db.prepare("DELETE FROM photo_shot_lists WHERE scope = ?").bind(scope).run();
          return jsonResponse({ success: true });
        }
      }

      // Previous recurring visit's matching BEFORE shot, for live camera alignment.
      const previousBeforeMatch = path.match(/^\/api\/jobs\/(\d+)\/previous-before\/([a-z0-9-]{1,40})$/);
      if (previousBeforeMatch && request.method === "GET") {
        if (!(env.PHOTOS || env.JOB_PHOTOS)) return errorResponse("Photo storage isn't connected yet.",500);
        const ts=Number(previousBeforeMatch[1]),slot=previousBeforeMatch[2];
        const current=await db.prepare("SELECT phone FROM estimates WHERE timestamp=?").bind(ts).first();
        if(!current)return errorResponse("No job with that id.",404);
        const prev=await db.prepare(`
          SELECT jp.r2_key,jp.job_ts
          FROM job_photos jp
          JOIN estimates e ON e.timestamp=jp.job_ts
          WHERE e.phone=? AND e.timestamp<? AND jp.phase='before' AND jp.slot=?
          ORDER BY e.timestamp DESC LIMIT 1
        `).bind(current.phone,ts,slot).first();
        if(!prev)return errorResponse("No earlier matching before photo.",404);
        const obj=await (env.PHOTOS || env.JOB_PHOTOS).get(prev.r2_key||`jobs/${prev.job_ts}/before/${slot}.jpg`);
        if(!obj)return errorResponse("Previous photo file not found.",404);
        return new Response(obj.body,{headers:{"Content-Type":(obj.httpMetadata&&obj.httpMetadata.contentType)||"image/jpeg","Cache-Control":"private, max-age=3600","Access-Control-Allow-Origin":"*","X-RDUBS-Previous-Job":String(prev.job_ts)}});
      }

      // ---- Checklist photos for a job: /api/jobs/:ts/photos[/:phase/:slot] ----
      const jobPhotoMatch = path.match(/^\/api\/jobs\/(\d+)\/photos(?:\/(before|after|issue)\/([a-z0-9-]{1,40}))?$/);
      if (jobPhotoMatch) {
        if (!(env.PHOTOS || env.JOB_PHOTOS)) return errorResponse("Photo storage isn't connected yet (missing PHOTOS binding).", 500);
        const [, ts, phase, slot] = jobPhotoMatch;
        const job = await db.prepare("SELECT phone FROM estimates WHERE timestamp = ?").bind(ts).first();
        if (!job) return errorResponse("No job with that id.", 404);

        if (!phase) {
          if (request.method !== "GET") return errorResponse("Not found.", 404);
          const list = await getShotList(db, job.phone);
          const { results } = await db.prepare("SELECT phase, slot, label, note, uploaded_by, uploaded_at FROM job_photos WHERE job_ts = ? ORDER BY uploaded_at").bind(ts).all();
          const legacy = { before: !!(await (env.PHOTOS || env.JOB_PHOTOS).head(`jobs/${ts}/before.jpg`)), after: !!(await (env.PHOTOS || env.JOB_PHOTOS).head(`jobs/${ts}/after.jpg`)) };
          return jsonResponse({ ...list, photos: results, legacy });
        }

        const key = `jobs/${ts}/${phase}/${slot}.jpg`;
        const existing = await db.prepare("SELECT uploaded_by FROM job_photos WHERE job_ts = ? AND phase = ? AND slot = ?").bind(ts, phase, slot).first();

        if (request.method === "GET") {
          const obj = await (env.PHOTOS || env.JOB_PHOTOS).get(key);
          if (!obj) return errorResponse("Photo not found.", 404);
          return new Response(obj.body, { headers: {
            "Content-Type": (obj.httpMetadata && obj.httpMetadata.contentType) || "image/jpeg",
            "Cache-Control": "private, max-age=3600",
            "Access-Control-Allow-Origin": "*",
          } });
        }

        if (request.method === "POST") {
          // Before photos and flagged issues are accountability records: once saved,
          // only the owner can replace them. After photos can be retaken by anyone.
          if (phase !== "after" && existing && user.role !== "owner") {
            return errorResponse(phase === "before" ? "That before photo is already saved. Only the owner can replace it." : "That issue photo is already saved.", 403);
          }
          const data = await request.json();
          const m = /^data:(image\/(?:jpeg|png|webp));base64,(.+)$/.exec(data.dataUri || "");
          if (!m) return errorResponse("Expected a JPEG, PNG, or WebP image.");
          const bytes = Uint8Array.from(atob(m[2]), (c) => c.charCodeAt(0));
          if (bytes.length > 5 * 1024 * 1024) return errorResponse("Photo is too large (5MB max).");
          await (env.PHOTOS || env.JOB_PHOTOS).put(key, bytes, { httpMetadata: { contentType: m[1] }, customMetadata: { uploadedBy: user.username } });
          await db.prepare(`
            INSERT INTO job_photos (job_ts, phase, slot, label, note, r2_key, uploaded_by, uploaded_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(job_ts, phase, slot) DO UPDATE SET label = excluded.label, note = excluded.note, uploaded_by = excluded.uploaded_by, uploaded_at = excluded.uploaded_at
          `).bind(ts, phase, slot, String(data.label || slot).slice(0, 60), String(data.note || "").slice(0, 300), key, user.username, Date.now()).run();
          await recomputePhotoFlags(db, (env.PHOTOS || env.JOB_PHOTOS), ts);
          return jsonResponse({ success: true });
        }

        if (request.method === "DELETE") {
          if (phase !== "after" && user.role !== "owner") return errorResponse("Only the owner can remove before photos or flagged issues.", 403);
          await (env.PHOTOS || env.JOB_PHOTOS).delete(key);
          await db.prepare("DELETE FROM job_photos WHERE job_ts = ? AND phase = ? AND slot = ?").bind(ts, phase, slot).run();
          await recomputePhotoFlags(db, (env.PHOTOS || env.JOB_PHOTOS), ts);
          return jsonResponse({ success: true });
        }
      }

      // ---- Job photos (R2 bucket "rdubs-job-photos", bound as PHOTOS) ----
      // The photo flags on a job are set ONLY here, after the image is actually
      // stored — never by an ordinary job save — so "before photo taken" can't be
      // true unless the photo really exists.
      const photoMatch = path.match(/^\/api\/photos\/(\d+)\/(before|after)$/);
      if (photoMatch) {
        if (!(env.PHOTOS || env.JOB_PHOTOS)) return errorResponse("Photo storage isn't connected yet (missing PHOTOS binding).", 500);
        const [, ts, kind] = photoMatch;
        const key = `jobs/${ts}/${kind}.jpg`;
        const flagCol = kind === "before" ? "has_before_photo" : "has_photo";
        const job = await db.prepare(`SELECT ${flagCol} AS flag FROM estimates WHERE timestamp = ?`).bind(ts).first();
        if (!job) return errorResponse("No job with that id.", 404);

        if (request.method === "GET") {
          const obj = await (env.PHOTOS || env.JOB_PHOTOS).get(key);
          if (!obj) return errorResponse("Photo not found.", 404);
          return new Response(obj.body, { headers: {
            "Content-Type": (obj.httpMetadata && obj.httpMetadata.contentType) || "image/jpeg",
            "Cache-Control": "private, max-age=3600",
            "Access-Control-Allow-Origin": "*",
          } });
        }

        if (request.method === "POST") {
          // Before-photos are accountability records: once one exists, only the owner can replace it.
          if (kind === "before" && user.role !== "owner" && await (env.PHOTOS || env.JOB_PHOTOS).head(key)) {
            return errorResponse("A before-service photo is already on file. Only the owner can replace it.", 403);
          }
          const data = await request.json();
          const m = /^data:(image\/(?:jpeg|png|webp));base64,(.+)$/.exec(data.dataUri || "");
          if (!m) return errorResponse("Expected a JPEG, PNG, or WebP image.");
          const bytes = Uint8Array.from(atob(m[2]), (c) => c.charCodeAt(0));
          if (bytes.length > 5 * 1024 * 1024) return errorResponse("Photo is too large (5MB max).");
          await (env.PHOTOS || env.JOB_PHOTOS).put(key, bytes, { httpMetadata: { contentType: m[1] }, customMetadata: { uploadedBy: user.username, uploadedAt: String(Date.now()) } });
          await db.prepare(`UPDATE estimates SET ${flagCol} = 1 WHERE timestamp = ?`).bind(ts).run();
          return jsonResponse({ success: true });
        }

        if (request.method === "DELETE") {
          if (kind === "before" && user.role !== "owner") return errorResponse("Only the owner can remove a before-service photo.", 403);
          await (env.PHOTOS || env.JOB_PHOTOS).delete(key);
          await db.prepare(`UPDATE estimates SET ${flagCol} = 0 WHERE timestamp = ?`).bind(ts).run();
          return jsonResponse({ success: true });
        }
      }

      // This was genuinely missing — estimate deletion (discarding a pending or
      // declined quote) has had no backend route at all, so it's been silently
      // 404ing since the app moved off window.storage. Fixed here, and owner-only
      // per the anti-grief pass, since there's no legitimate crew need to
      // permanently delete a quote record rather than just declining it.
      if (path.startsWith("/api/estimates/") && request.method === "DELETE") {
        if (user.role !== "owner" && user.role !== "manager") return errorResponse("Only the owner or a manager can delete a quote record.", 403);
        const id = decodeURIComponent(path.split("/api/estimates/")[1]);
        await db.prepare("DELETE FROM estimates WHERE timestamp = ?").bind(id).run();
        return jsonResponse({ success: true });
      }

      // ---- TEMPLATE PATTERN B: owner-only data (gate already enforced above) ----

      if (path === "/api/expenses" && request.method === "GET") {
        const { results } = await db.prepare("SELECT * FROM expenses ORDER BY timestamp DESC").all();
        return jsonResponse({ expenses: results });
      }

      if (path === "/api/expenses" && request.method === "POST") {
        const data = await request.json();
        if (!data.timestamp) return errorResponse("timestamp is required.");
        await db.prepare(`
          INSERT INTO expenses (timestamp, date, category, description, amount, vendor, job_timestamp, job_customer_name)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(timestamp) DO UPDATE SET
            date = excluded.date, category = excluded.category, description = excluded.description,
            amount = excluded.amount, vendor = excluded.vendor,
            job_timestamp = excluded.job_timestamp, job_customer_name = excluded.job_customer_name
        `).bind(
          data.timestamp, data.date, data.category, data.description, data.amount,
          data.vendor || "", data.jobTimestamp || null, data.jobCustomerName || null
        ).run();
        return jsonResponse({ success: true });
      }

      if (path.startsWith("/api/expenses/") && request.method === "DELETE") {
        const timestamp = path.split("/").pop();
        await db.prepare("DELETE FROM expenses WHERE timestamp = ?").bind(timestamp).run();
        return jsonResponse({ success: true });
      }

      // ---- bookings (Pattern A: shared, no sensitive fields) ----

      if (path === "/api/bookings" && request.method === "GET") {
        const { results } = await db.prepare("SELECT * FROM bookings ORDER BY start_ms ASC").all();
        return jsonResponse({ bookings: results });
      }

      if (path === "/api/bookings" && request.method === "POST") {
        const data = await request.json();
        if (!data.id) return errorResponse("id is required.");
        // Only the owner can assign/reassign who's doing a job; anyone else's write
        // leaves the existing assignment untouched even if they send one.
        const assignedTo = user.role === "owner" ? (data.assignedTo || null) : undefined;
        await db.prepare(`
          INSERT INTO bookings (id, date_iso, slot_id, slot_label, start_ms, phone, customer_name, status, job_timestamp, created_at, assigned_to)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(id) DO UPDATE SET
            date_iso = excluded.date_iso, slot_id = excluded.slot_id, slot_label = excluded.slot_label,
            start_ms = excluded.start_ms, phone = excluded.phone, customer_name = excluded.customer_name,
            status = excluded.status, job_timestamp = excluded.job_timestamp,
            assigned_to = CASE WHEN ? = 1 THEN excluded.assigned_to ELSE bookings.assigned_to END
        `).bind(
          data.id, data.dateISO ?? null, data.slotId ?? null, data.slotLabel ?? null, data.startMs ?? null,
          data.phone || "", data.customerName || "", data.status || "accepted",
          data.jobTimestamp || null, data.createdAt || Date.now(), assignedTo ?? null,
          user.role === "owner" ? 1 : 0
        ).run();
        return jsonResponse({ success: true });
      }

      if (path.startsWith("/api/bookings/") && request.method === "DELETE") {
        const id = decodeURIComponent(path.split("/api/bookings/")[1]);
        await db.prepare("DELETE FROM bookings WHERE id = ?").bind(id).run();
        return jsonResponse({ success: true });
      }

      // Bulk day-wide reschedule (rain-day tool) — owner-only. The frontend still does
      // all the slot-finding; this just applies the resulting batch of moves atomically,
      // so the one-click "clear a whole day" action can't be triggered by crew, while
      // their everyday single-booking cancellations (the generic endpoints above) stay
      // untouched.
      if (path === "/api/bookings/bulk-reschedule" && request.method === "POST") {
        if (user.role !== "owner" && user.role !== "manager") return errorResponse("Only the owner or a manager can bulk-reschedule a day.", 403);
        const data = await request.json();
        const moves = Array.isArray(data.moves) ? data.moves : [];
        let applied = 0;
        for (const m of moves) {
          try {
            if (m.oldBookingKey) await db.prepare("DELETE FROM bookings WHERE id = ?").bind(m.oldBookingKey).run();
            if (m.newBooking) {
              const b = m.newBooking;
              await db.prepare(`
                INSERT INTO bookings (id, date_iso, slot_id, slot_label, start_ms, phone, customer_name, status, job_timestamp, created_at, assigned_to)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT(id) DO UPDATE SET date_iso=excluded.date_iso, slot_id=excluded.slot_id, slot_label=excluded.slot_label,
                  start_ms=excluded.start_ms, phone=excluded.phone, customer_name=excluded.customer_name, status=excluded.status, job_timestamp=excluded.job_timestamp, assigned_to=excluded.assigned_to
              `).bind(b.id, b.dateISO ?? null, b.slotId ?? null, b.slotLabel ?? null, b.startMs ?? null, b.phone || "", b.customerName || "", b.status || "accepted", b.jobTimestamp || null, b.createdAt || Date.now(), b.assignedTo ?? null).run();
            }
            if (m.oldApptId) await db.prepare("DELETE FROM appointments WHERE id = ?").bind(m.oldApptId).run();
            if (m.newAppt) {
              const a = m.newAppt;
              await db.prepare(`
                INSERT INTO appointments (id, phone, customer_name, confirmed, date_iso, slot_id, slot_label, start_ms, deadline, deadline_hours, addon_selections, addon_prices, mowing_enabled, mowing_type, lot_tier_id, mowing_price, custom_items, notes, fee_applied, fee_amount, updated_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT(id) DO UPDATE SET phone=excluded.phone, customer_name=excluded.customer_name, confirmed=excluded.confirmed,
                  date_iso=excluded.date_iso, slot_id=excluded.slot_id, slot_label=excluded.slot_label, start_ms=excluded.start_ms,
                  deadline=excluded.deadline, deadline_hours=excluded.deadline_hours, addon_selections=excluded.addon_selections,
                  addon_prices=excluded.addon_prices, mowing_enabled=excluded.mowing_enabled, mowing_type=excluded.mowing_type,
                  lot_tier_id=excluded.lot_tier_id, mowing_price=excluded.mowing_price, custom_items=excluded.custom_items,
                  notes=excluded.notes, fee_applied=excluded.fee_applied, fee_amount=excluded.fee_amount, updated_at=excluded.updated_at
              `).bind(a.id, a.phone || "", a.customerName || "", a.confirmed ? 1 : 0, a.dateISO ?? null, a.slotId ?? null, a.slotLabel ?? null, a.startMs ?? null, a.deadline || null, a.deadlineHours || null, JSON.stringify(a.addonSelections || {}), JSON.stringify(a.addonPrices || {}), a.mowingEnabled ? 1 : 0, a.mowingType || null, a.lotTierId || null, a.mowingPrice || 0, JSON.stringify(a.customItems || []), a.notes || "", a.feeApplied ? 1 : 0, a.feeAmount || 0, a.updatedAt || Date.now()).run();
            }
            applied++;
          } catch (e) {
            // skip this one move, keep going with the rest — matches how the frontend already handles a single failed move within the batch
          }
        }
        return jsonResponse({ success: true, applied, total: moves.length });
      }

      // ---- appointments (Pattern A: shared, no sensitive fields) ----

      if (path === "/api/appointments" && request.method === "GET") {
        const { results } = await db.prepare("SELECT * FROM appointments ORDER BY start_ms ASC").all();
        return jsonResponse({ appointments: results });
      }

      if (path === "/api/appointments" && request.method === "POST") {
        const data = await request.json();
        if (!data.id) return errorResponse("id is required.");
        await db.prepare(`
          INSERT INTO appointments (id, phone, customer_name, confirmed, date_iso, slot_id, slot_label, start_ms, deadline, deadline_hours, addon_selections, addon_prices, mowing_enabled, mowing_type, lot_tier_id, mowing_price, custom_items, notes, fee_applied, fee_amount, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(id) DO UPDATE SET
            phone = excluded.phone, customer_name = excluded.customer_name, confirmed = excluded.confirmed,
            date_iso = excluded.date_iso, slot_id = excluded.slot_id, slot_label = excluded.slot_label,
            start_ms = excluded.start_ms, deadline = excluded.deadline, deadline_hours = excluded.deadline_hours,
            addon_selections = excluded.addon_selections, addon_prices = excluded.addon_prices,
            mowing_enabled = excluded.mowing_enabled, mowing_type = excluded.mowing_type,
            lot_tier_id = excluded.lot_tier_id, mowing_price = excluded.mowing_price,
            custom_items = excluded.custom_items, notes = excluded.notes,
            fee_applied = excluded.fee_applied, fee_amount = excluded.fee_amount, updated_at = excluded.updated_at
        `).bind(
          data.id, data.phone || "", data.customerName || "", data.confirmed ? 1 : 0,
          data.dateISO ?? null, data.slotId ?? null, data.slotLabel ?? null, data.startMs ?? null, data.deadline || null, data.deadlineHours || null,
          JSON.stringify(data.addonSelections || {}), JSON.stringify(data.addonPrices || {}),
          data.mowingEnabled ? 1 : 0, data.mowingType || null, data.lotTierId || null, data.mowingPrice || 0,
          JSON.stringify(data.customItems || []), data.notes || "",
          data.feeApplied ? 1 : 0, data.feeAmount || 0, data.updatedAt || Date.now()
        ).run();
        return jsonResponse({ success: true });
      }

      if (path.startsWith("/api/appointments/") && request.method === "DELETE") {
        const id = decodeURIComponent(path.split("/api/appointments/")[1]);
        await db.prepare("DELETE FROM appointments WHERE id = ?").bind(id).run();
        return jsonResponse({ success: true });
      }

      // ---- customer_profiles (Pattern A: shared, no sensitive fields) ----

      if (path === "/api/customer-profiles" && request.method === "GET") {
        const { results } = await db.prepare("SELECT * FROM customer_profiles").all();
        return jsonResponse({ profiles: results });
      }

      if (path === "/api/customer-profiles" && request.method === "POST") {
        const data = await request.json();
        if (!data.phone) return errorResponse("phone is required.");
        await db.prepare(`
          INSERT INTO customer_profiles (phone, name, address, notes, contact_preference, paused, paused_until)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(phone) DO UPDATE SET
            name = excluded.name, address = excluded.address, notes = excluded.notes,
            contact_preference = excluded.contact_preference, paused = excluded.paused, paused_until = excluded.paused_until
        `).bind(
          data.phone, data.name || "", data.address || "", data.notes || "",
          data.contactPreference || null, data.paused ? 1 : 0, data.pausedUntil || null
        ).run();
        return jsonResponse({ success: true });
      }

      if (path.startsWith("/api/customer-profiles/") && request.method === "DELETE") {
        const user = await getUserFromToken(db, getToken(request));
        if (!user || (user.role !== "owner" && user.role !== "manager")) return errorResponse("Only the owner or a manager can delete a customer.", 403);
        const phone = decodeURIComponent(path.split("/api/customer-profiles/")[1]);

        const profile = await db.prepare("SELECT * FROM customer_profiles WHERE phone = ?").bind(phone).first();
        const { results: estimates } = await db.prepare("SELECT * FROM estimates WHERE phone = ?").bind(phone).all();
        const { results: appointments } = await db.prepare("SELECT * FROM appointments WHERE phone = ?").bind(phone).all();
        const { results: bookings } = await db.prepare("SELECT * FROM bookings WHERE phone = ?").bind(phone).all();

        // Snapshot everything before touching it, so this is reversible.
        await db.prepare(`
          INSERT INTO deleted_customers_log (id, phone, deleted_by, deleted_by_role, deleted_at, profile_snapshot, estimates_snapshot, appointments_snapshot, bookings_snapshot, restored)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 0)
        `).bind(
          `del-${Date.now()}`, phone, user.username, user.role, Date.now(),
          JSON.stringify(profile || null), JSON.stringify(estimates), JSON.stringify(appointments), JSON.stringify(bookings)
        ).run();

        await db.prepare("DELETE FROM estimates WHERE phone = ?").bind(phone).run();
        await db.prepare("DELETE FROM appointments WHERE phone = ?").bind(phone).run();
        await db.prepare("DELETE FROM bookings WHERE phone = ?").bind(phone).run();
        await db.prepare("DELETE FROM customer_profiles WHERE phone = ?").bind(phone).run();

        return jsonResponse({ success: true });
      }

      if (path === "/api/deleted-customers" && request.method === "GET") {
        const user = await getUserFromToken(db, getToken(request));
        if (!user || (user.role !== "owner" && user.role !== "manager")) return errorResponse("Owner or manager access only.", 403);
        const { results } = await db.prepare("SELECT id, phone, deleted_by, deleted_by_role, deleted_at, restored, profile_snapshot FROM deleted_customers_log ORDER BY deleted_at DESC LIMIT 50").all();
        return jsonResponse({ deletedCustomers: results });
      }

      if (path.startsWith("/api/deleted-customers/") && path.endsWith("/restore") && request.method === "POST") {
        const user = await getUserFromToken(db, getToken(request));
        if (!user || (user.role !== "owner" && user.role !== "manager")) return errorResponse("Owner or manager access only.", 403);
        const id = decodeURIComponent(path.split("/api/deleted-customers/")[1].replace(/\/restore$/, ""));
        const log = await db.prepare("SELECT * FROM deleted_customers_log WHERE id = ?").bind(id).first();
        if (!log) return errorResponse("No deletion record with that id.", 404);
        if (log.restored) return errorResponse("This has already been restored.", 400);

        const profile = JSON.parse(log.profile_snapshot);
        if (profile) {
          await db.prepare(`
            INSERT INTO customer_profiles (phone, name, address, notes, contact_preference, paused, paused_until)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(phone) DO UPDATE SET name=excluded.name, address=excluded.address, notes=excluded.notes,
              contact_preference=excluded.contact_preference, paused=excluded.paused, paused_until=excluded.paused_until
          `).bind(profile.phone, profile.name, profile.address, profile.notes, profile.contact_preference, profile.paused, profile.paused_until).run();
        }
        for (const e of JSON.parse(log.estimates_snapshot)) {
          await db.prepare(`
            INSERT INTO estimates (timestamp, customer_name, phone, address, is_recurring, total, lines, builder_state, status, payment_status, paid_at, has_photo, has_before_photo)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(timestamp) DO NOTHING
          `).bind(e.timestamp, e.customer_name, e.phone, e.address, e.is_recurring, e.total, e.lines, e.builder_state, e.status, e.payment_status, e.paid_at, e.has_photo, e.has_before_photo).run();
        }
        for (const a of JSON.parse(log.appointments_snapshot)) {
          await db.prepare(`
            INSERT INTO appointments (id, phone, customer_name, confirmed, date_iso, slot_id, slot_label, start_ms, deadline, deadline_hours, addon_selections, addon_prices, mowing_enabled, mowing_type, lot_tier_id, mowing_price, custom_items, notes, fee_applied, fee_amount, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(id) DO NOTHING
          `).bind(a.id, a.phone, a.customer_name, a.confirmed, a.date_iso, a.slot_id, a.slot_label, a.start_ms, a.deadline, a.deadline_hours, a.addon_selections, a.addon_prices, a.mowing_enabled, a.mowing_type, a.lot_tier_id, a.mowing_price, a.custom_items, a.notes, a.fee_applied, a.fee_amount, a.updated_at).run();
        }
        for (const b of JSON.parse(log.bookings_snapshot)) {
          await db.prepare(`
            INSERT INTO bookings (id, date_iso, slot_id, slot_label, start_ms, phone, customer_name, status, job_timestamp, created_at, assigned_to)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(id) DO NOTHING
          `).bind(b.id, b.date_iso, b.slot_id, b.slot_label, b.start_ms, b.phone, b.customer_name, b.status, b.job_timestamp, b.created_at, b.assigned_to ?? null).run();
        }
        await db.prepare("UPDATE deleted_customers_log SET restored = 1 WHERE id = ?").bind(id).run();
        return jsonResponse({ success: true });
      }

      if (path.startsWith("/api/customers/") && path.endsWith("/change-phone") && request.method === "POST") {
        const user = await getUserFromToken(db, getToken(request));
        if (!user || (user.role !== "owner" && user.role !== "manager")) return errorResponse("Only the owner or a manager can change a customer's phone number.", 403);
        const oldPhone = decodeURIComponent(path.split("/api/customers/")[1].replace(/\/change-phone$/, ""));
        const data = await request.json();
        const newPhone = (data.newPhone || "").trim();
        if (!newPhone || newPhone.length < 7) return errorResponse("Enter a valid phone number.");
        if (newPhone !== oldPhone) {
          const conflict = await db.prepare("SELECT phone FROM customer_profiles WHERE phone = ?").bind(newPhone).first();
          if (conflict) return errorResponse("That number already belongs to another customer.");
        }

        await db.prepare(`
          INSERT INTO customer_profiles (phone, name, address, notes, contact_preference, paused, paused_until)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(phone) DO UPDATE SET name=excluded.name, address=excluded.address, notes=excluded.notes,
            contact_preference=excluded.contact_preference, paused=excluded.paused, paused_until=excluded.paused_until
        `).bind(newPhone, data.name || "", data.address || "", data.notes || "", data.contactPreference || null, data.paused ? 1 : 0, data.pausedUntil || null).run();

        if (newPhone !== oldPhone) {
          await db.prepare("DELETE FROM customer_profiles WHERE phone = ?").bind(oldPhone).run();
          await db.prepare("UPDATE estimates SET phone = ? WHERE phone = ?").bind(newPhone, oldPhone).run();
          await db.prepare("UPDATE bookings SET phone = ? WHERE phone = ?").bind(newPhone, oldPhone).run();
          await db.prepare("UPDATE photo_shot_lists SET scope = ? WHERE scope = ?").bind(`customer:${newPhone}`, `customer:${oldPhone}`).run();
          await db.prepare("UPDATE customer_plans SET phone = ? WHERE phone = ?").bind(newPhone, oldPhone).run();

          const { results: appts } = await db.prepare("SELECT * FROM appointments WHERE phone = ?").bind(oldPhone).all();
          for (const a of appts) {
            const newId = a.id.replace(`${oldPhone}:`, `${newPhone}:`);
            await db.prepare(`
              INSERT INTO appointments (id, phone, customer_name, confirmed, date_iso, slot_id, slot_label, start_ms, deadline, deadline_hours, addon_selections, addon_prices, mowing_enabled, mowing_type, lot_tier_id, mowing_price, custom_items, notes, fee_applied, fee_amount, updated_at)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
              ON CONFLICT(id) DO NOTHING
            `).bind(newId, newPhone, a.customer_name, a.confirmed, a.date_iso, a.slot_id, a.slot_label, a.start_ms, a.deadline, a.deadline_hours, a.addon_selections, a.addon_prices, a.mowing_enabled, a.mowing_type, a.lot_tier_id, a.mowing_price, a.custom_items, a.notes, a.fee_applied, a.fee_amount, a.updated_at).run();
            await db.prepare("DELETE FROM appointments WHERE id = ?").bind(a.id).run();
          }
        }

        return jsonResponse({ success: true, phone: newPhone });
      }

      // ---- inventory_items (Pattern B: owner-only, gate enforced above) ----

      if (path === "/api/inventory-items" && request.method === "GET") {
        const { results } = await db.prepare("SELECT * FROM inventory_items ORDER BY name ASC").all();
        return jsonResponse({ inventoryItems: results });
      }

      if (path === "/api/inventory-items" && request.method === "POST") {
        const data = await request.json();
        if (!data.id) return errorResponse("id is required.");
        await db.prepare(`
          INSERT INTO inventory_items (id, name, unit, current_qty, low_stock_threshold, cost_per_unit, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(id) DO UPDATE SET
            name = excluded.name, unit = excluded.unit, current_qty = excluded.current_qty,
            low_stock_threshold = excluded.low_stock_threshold, cost_per_unit = excluded.cost_per_unit,
            updated_at = excluded.updated_at
        `).bind(
          data.id, data.name || "", data.unit || "", data.currentQty || 0,
          data.lowStockThreshold || 0, data.costPerUnit || 0, data.updatedAt || Date.now()
        ).run();
        return jsonResponse({ success: true });
      }

      if (path.startsWith("/api/inventory-items/") && request.method === "DELETE") {
        const id = decodeURIComponent(path.split("/api/inventory-items/")[1]);
        await db.prepare("DELETE FROM inventory_items WHERE id = ?").bind(id).run();
        return jsonResponse({ success: true });
      }

      // ---- time_logs (Pattern B: owner-only, gate enforced above) ----

      if (path === "/api/time-logs" && request.method === "GET") {
        if (user.role !== "owner") return errorResponse("Owner access only.", 403);
        const { results } = await db.prepare("SELECT * FROM time_logs ORDER BY timestamp DESC").all();
        return jsonResponse({ timeLogs: results });
      }

      if (path === "/api/time-logs" && request.method === "POST") {
        const data = await request.json();
        if (!data.timestamp) return errorResponse("timestamp is required.");
        await db.prepare(`
          INSERT INTO time_logs (timestamp, job_timestamp, customer_name, address, started_at, ended_at, duration_min)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(timestamp) DO UPDATE SET
            job_timestamp = excluded.job_timestamp, customer_name = excluded.customer_name, address = excluded.address,
            started_at = excluded.started_at, ended_at = excluded.ended_at, duration_min = excluded.duration_min
        `).bind(
          data.timestamp, data.jobTimestamp || null, data.customerName || "", data.address || "",
          data.startedAt, data.endedAt, data.durationMin
        ).run();
        return jsonResponse({ success: true });
      }

      if (path.startsWith("/api/time-logs/") && request.method === "DELETE") {
        if (user.role !== "owner") return errorResponse("Owner access only.", 403);
        const timestamp = path.split("/api/time-logs/")[1];
        await db.prepare("DELETE FROM time_logs WHERE timestamp = ?").bind(timestamp).run();
        return jsonResponse({ success: true });
      }

      // ---- availability (single shared row, everyone can read, owner writes) ----

      if (path === "/api/availability" && request.method === "GET") {
        const row = await db.prepare("SELECT template FROM availability WHERE id = 1").first();
        return jsonResponse({ template: row ? JSON.parse(row.template) : null });
      }

      if (path === "/api/availability" && request.method === "POST") {
        if (user.role !== "owner") return errorResponse("Owner access only.", 403);
        const data = await request.json();
        await db.prepare(`
          INSERT INTO availability (id, template) VALUES (1, ?)
          ON CONFLICT(id) DO UPDATE SET template = excluded.template
        `).bind(JSON.stringify(data.template || {})).run();
        return jsonResponse({ success: true });
      }

      // ---- bug reports (anyone logged in can submit; only the owner can view/manage) ----

      if (path === "/api/bug-reports" && request.method === "POST") {
        const data = await request.json();
        if (!data.id || !data.description) return errorResponse("id and description are required.");
        await db.prepare(`
          INSERT INTO bug_reports (id, reported_by, reported_by_role, description, context, status, created_at)
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `).bind(
          data.id, user.username, user.role, data.description, data.context || "",
          "open", Date.now()
        ).run();
        return jsonResponse({ success: true });
      }

      if (path === "/api/bug-reports" && request.method === "GET") {
        if (user.role !== "owner") return errorResponse("Owner access only.", 403);
        const { results } = await db.prepare("SELECT * FROM bug_reports ORDER BY created_at DESC").all();
        return jsonResponse({ bugReports: results });
      }

      if (path.startsWith("/api/bug-reports/") && request.method === "POST") {
        if (user.role !== "owner") return errorResponse("Owner access only.", 403);
        const id = decodeURIComponent(path.split("/api/bug-reports/")[1]);
        const data = await request.json();
        await db.prepare("UPDATE bug_reports SET status = ? WHERE id = ?").bind(data.status || "open", id).run();
        return jsonResponse({ success: true });
      }

      if (path.startsWith("/api/bug-reports/") && request.method === "DELETE") {
        if (user.role !== "owner") return errorResponse("Owner access only.", 403);
        const id = decodeURIComponent(path.split("/api/bug-reports/")[1]);
        await db.prepare("DELETE FROM bug_reports WHERE id = ?").bind(id).run();
        return jsonResponse({ success: true });
      }

      return errorResponse("Not found.", 404);
    } catch (err) {
      return errorResponse("Server error: " + err.message, 500);
    }
  },
};