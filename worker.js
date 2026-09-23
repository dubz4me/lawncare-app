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
const OWNER_ONLY_PREFIXES = ["/api/expenses", "/api/inventory-items", "/api/time-logs"];

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
  const user = await db.prepare("SELECT id, username, role, name FROM users WHERE id = ?").bind(session.user_id).first();
  return user;
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

        const { username, password, name } = await request.json();
        if (!username || !password) return errorResponse("Username and password required.");
        if (password.length < 8) return errorResponse("Password must be at least 8 characters.");

        const existing = await db.prepare("SELECT id FROM users WHERE username = ?").bind(username).first();
        if (existing) return errorResponse("That username is taken.");

        const salt = crypto.randomUUID();
        const hash = await hashPassword(password, salt);
        await db.prepare(
          "INSERT INTO users (username, password_hash, role, name, created_at) VALUES (?, ?, 'crew', ?, ?)"
        ).bind(username, `${salt}:${hash}`, name || username, Date.now()).run();

        return jsonResponse({ success: true, username, role: "crew" });
      }

      if (path === "/api/auth/login" && request.method === "POST") {
        const { username, password } = await request.json();
        if (!username || !password) return errorResponse("Username and password required.");

        const user = await db.prepare("SELECT * FROM users WHERE username = ?").bind(username).first();
        if (!user) return errorResponse("Invalid username or password.", 401);

        const [salt, expectedHash] = user.password_hash.split(":");
        const valid = await verifyPassword(password, salt, expectedHash);
        if (!valid) return errorResponse("Invalid username or password.", 401);

        const token = generateToken();
        await db.prepare("INSERT INTO sessions (token, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)")
          .bind(token, user.id, Date.now(), Date.now() + SESSION_DURATION_MS).run();

        return jsonResponse({ token, user: { username: user.username, role: user.role, name: user.name } });
      }

      if (path === "/api/auth/logout" && request.method === "POST") {
        const token = getToken(request);
        if (token) await db.prepare("DELETE FROM sessions WHERE token = ?").bind(token).run();
        return jsonResponse({ success: true });
      }

      if (path === "/api/auth/me" && request.method === "GET") {
        const user = await getUserFromToken(db, getToken(request));
        if (!user) return errorResponse("Not logged in.", 401);
        return jsonResponse({ user });
      }

      // ================= EVERYTHING BELOW REQUIRES LOGIN =================

      const user = await getUserFromToken(db, getToken(request));
      if (!user) return errorResponse("Not logged in.", 401);

      if (OWNER_ONLY_PREFIXES.some((p) => path.startsWith(p)) && user.role !== "owner") {
        return errorResponse("Owner access only.", 403);
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

        await db.prepare(`
          INSERT INTO estimates (timestamp, customer_name, phone, address, is_recurring, total, lines, builder_state, status, payment_status, paid_at, has_photo, has_before_photo)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(timestamp) DO UPDATE SET
            customer_name = excluded.customer_name, phone = excluded.phone, address = excluded.address,
            is_recurring = excluded.is_recurring, total = excluded.total, lines = excluded.lines,
            builder_state = excluded.builder_state, status = excluded.status,
            payment_status = COALESCE(excluded.payment_status, estimates.payment_status),
            paid_at = COALESCE(excluded.paid_at, estimates.paid_at),
            has_photo = excluded.has_photo, has_before_photo = excluded.has_before_photo
        `).bind(
          data.timestamp, data.customerName || "", data.phone || "", data.address || "",
          data.isRecurring ? 1 : 0, data.total || 0, JSON.stringify(data.lines || []),
          JSON.stringify(data.builderState || {}), data.status || "pending",
          paymentStatus ?? null, paidAt ?? null,
          data.hasPhoto ? 1 : 0, data.hasBeforePhoto ? 1 : 0
        ).run();
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
        await db.prepare(`
          INSERT INTO bookings (id, date_iso, slot_id, slot_label, start_ms, phone, customer_name, status, job_timestamp, created_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(id) DO UPDATE SET
            date_iso = excluded.date_iso, slot_id = excluded.slot_id, slot_label = excluded.slot_label,
            start_ms = excluded.start_ms, phone = excluded.phone, customer_name = excluded.customer_name,
            status = excluded.status, job_timestamp = excluded.job_timestamp
        `).bind(
          data.id, data.dateISO, data.slotId, data.slotLabel, data.startMs,
          data.phone || "", data.customerName || "", data.status || "accepted",
          data.jobTimestamp || null, data.createdAt || Date.now()
        ).run();
        return jsonResponse({ success: true });
      }

      if (path.startsWith("/api/bookings/") && request.method === "DELETE") {
        const id = decodeURIComponent(path.split("/api/bookings/")[1]);
        await db.prepare("DELETE FROM bookings WHERE id = ?").bind(id).run();
        return jsonResponse({ success: true });
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
          data.dateISO, data.slotId, data.slotLabel, data.startMs, data.deadline || null, data.deadlineHours || null,
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
        const phone = decodeURIComponent(path.split("/api/customer-profiles/")[1]);
        await db.prepare("DELETE FROM customer_profiles WHERE phone = ?").bind(phone).run();
        return jsonResponse({ success: true });
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
