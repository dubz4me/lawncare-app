const { useState, useEffect } = React;
function makeIcon(paths) {
return function Icon({ size = 24, className, style, ...rest }) {
return (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} {...rest}>
{paths}
</svg>
);
};
}
const Trash2 = makeIcon(<>
<path d="M3 6h18" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
<line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" />
</>);
const ChevronDown = makeIcon(<polyline points="6 9 12 15 18 9" />);
const ChevronUp = makeIcon(<polyline points="18 15 12 9 6 15" />);
const LogOut = makeIcon(<>
<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
</>);
const Pencil = makeIcon(<>
<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
</>);
const Sun = makeIcon(<>
<circle cx="12" cy="12" r="4" />
<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
</>);
const Moon = makeIcon(<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />);
const Tag = makeIcon(<>
<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42Z" />
<circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
</>);
const Users = makeIcon(<>
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
<path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
</>);
const X = makeIcon(<><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>);
const BookOpen = makeIcon(<>
<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2Z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z" />
</>);
const ArrowUp = makeIcon(<><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></>);
const ArrowDown = makeIcon(<><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></>);
const ArrowLeft = makeIcon(<><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></>);
const ArrowRight = makeIcon(<><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></>);
const UserPlus = makeIcon(<>
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
<line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" />
</>);
const ClipboardList = makeIcon(<>
<rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
<line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="15" y2="16" /><line x1="9" y1="9" x2="10" y2="9" />
</>);
const Settings2 = makeIcon(<>
<path d="M20 7h-9M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" />
</>);
const Bug = makeIcon(<>
<rect x="8" y="6" width="8" height="14" rx="4" />
<path d="M19 7l-3 2M5 7l3 2M19 19l-3-2M5 19l3-2M12 6V3M12 20v1M3 13h5M16 13h5M9 13h6" />
</>);
const KeyRound = makeIcon(<>
<path d="M2.5 21.5L11 13" />
<path d="M16.5 3a5.5 5.5 0 1 0 4.5 8.66V16h-2.5v2.5H16V21h-2.5l-2.16-2.16A5.5 5.5 0 0 0 16.5 3z" />
</>);
const Clock3 = makeIcon(<><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 16 14" /></>);
const HomeIcon = makeIcon(<><path d="M3 11.5 12 4l9 7.5" /><path d="M5 10.5V20h14v-9.5" /><path d="M9 20v-6h6v6" /></>);
const Calendar = makeIcon(<>
<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
<line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
</>);
const Globe = makeIcon(<>
<circle cx="12" cy="12" r="10" />
<line x1="2" y1="12" x2="22" y2="12" />
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
</>);
const LockIcon = makeIcon(<>
<rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
</>);
const ACCENT_HEX = "#4B2E70";
const BOTTOM_TAB_HEIGHT = 64;
const API_BASE = "https://api.rdubslawncare.com";
const localStore = {
async get(key) {
try {
const v = localStorage.getItem(key);
return v === null ? null : { value: v };
} catch (e) {
return null;
}
},
async set(key, value) {
try {
localStorage.setItem(key, value);
return true;
} catch (e) {
return false;
}
},
async delete(key) {
try {
localStorage.removeItem(key);
return true;
} catch (e) {
return false;
}
},
};
const LAST_MINUTE_FEE = 15;
const DEFAULT_DEADLINE_HOURS = 24;
const DARK_MODE_CSS = `
:root {
--accent: #4B2E70;
--surface: #FFFFFF;
--surface-alt: #F7F3FA;
--border: #E5E7EB;
--border-strong: #D1D5DB;
--text: #374151;
--text-muted: #6B7280;
--text-faint: #9CA3AF;
--warn: #B45309;
--success: #047857;
}
.dark-mode {
--accent: #C4B5FD;
--surface: #17151F;
--surface-alt: #241E33;
--border: #2E2A3D;
--border-strong: #3E3850;
--text: #D3CCE3;
--text-muted: #A69DBD;
--text-faint: #7D7593;
--warn: #FBBF24;
--success: #34D399;
background-color: #0B0B10;
}
.dark-mode .bg-white { background-color: #17151F !important; }
.dark-mode .bg-gray-50 { background-color: #1C1927 !important; }
.dark-mode .bg-gray-100 { background-color: #262133 !important; }
.dark-mode .text-gray-900 { color: #F5F3FA !important; }
.dark-mode .text-gray-800 { color: #E7E2F2 !important; }
.dark-mode .text-gray-700 { color: #D3CCE3 !important; }
.dark-mode .text-gray-600 { color: #B7AFCC !important; }
.dark-mode .text-gray-500 { color: #9B93B0 !important; }
.dark-mode .text-gray-400 { color: #7D7593 !important; }
.dark-mode .border-gray-100 { border-color: #211E2C !important; }
.dark-mode .border-gray-200 { border-color: #2E2A3D !important; }
.dark-mode .border-gray-300 { border-color: #3E3850 !important; }
.dark-mode .text-emerald-700 { color: #34D399 !important; }
.dark-mode .bg-emerald-50 { background-color: #062821 !important; }
.dark-mode input, .dark-mode textarea, .dark-mode select {
background-color: #17151F; color: #F5F3FA; border-color: #3E3850;
}
.dark-mode input::placeholder, .dark-mode textarea::placeholder { color: #7D7593; }
.dark-mode input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(80%) sepia(35%) saturate(600%) hue-rotate(192deg) brightness(103%); }
.app-splash {
position: fixed; inset: 0; z-index: 60;
background: #0B0B10;
display: flex; flex-direction: column; align-items: center; justify-content: center;
gap: 16px;
animation: splash-out 0.7s ease 2s forwards;
}
.app-splash-badge { opacity: 0; transform: scale(0.85); animation: badge-in 0.9s cubic-bezier(.2,.8,.2,1) 0.15s forwards; }
.app-splash-word {
font-weight: 600; letter-spacing: 0.1em; font-size: 13px; color: #fff;
opacity: 0; animation: word-in 0.6s ease 1.1s forwards;
}
@keyframes badge-in { to { opacity: 1; transform: scale(1); } }
@keyframes word-in { to { opacity: 1; } }
@keyframes splash-out { to { opacity: 0; visibility: hidden; pointer-events: none; } }
@media (prefers-reduced-motion: reduce) {
.app-splash { display: none; }
}
`;
const LOT_TIERS = [
{ id: "small", label: "Small (≤ 1/4 acre)", recurring: [35, 45], oneTime: [50, 60], savings: 15 },
{ id: "medium", label: "Medium (1/4–1/2 acre)", recurring: [45, 65], oneTime: [65, 85], savings: 20 },
{ id: "large", label: "Large (1/2–1 acre)", recurring: [65, 100], oneTime: [90, 125], savings: 25 },
{ id: "custom", label: "Over 1 acre (custom)", recurring: null, oneTime: null, savings: null },
];
const ADDONS = [
{ id: "fall", label: "Fall leaf blow-out / bagging", range: [60, 150], category: "cleanup" },
{ id: "spring", label: "Spring yard cleanup", range: [75, 150], category: "cleanup" },
{ id: "trim", label: "Trimming / edging only (no mow)", range: [30, 45], category: "cleanup" },
{ id: "blow", label: "Blow-off / tidy only", range: [20, 30], category: "cleanup" },
{ id: "mulch", label: "Mulch installation / refresh (per bed)", range: [100, 250], category: "landscaping" },
{ id: "bedEdge", label: "Bed edging & shaping", range: [40, 80], category: "landscaping" },
{ id: "hedge", label: "Shrub / hedge trimming", range: [50, 120], category: "landscaping" },
{ id: "weed", label: "Bed weeding", range: [40, 75], category: "landscaping" },
];
const DAY_KEYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const DAY_LABELS = { sun: "Sun", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat" };
const midpoint = (range) => Math.round((range[0] + range[1]) / 2);
const normalizePhone = (p) => (p || "").replace(/\D/g, "");
function initialAddonState() {
const state = {};
ADDONS.forEach((a) => {
state[a.id] = { enabled: false, price: midpoint(a.range) };
});
return state;
}
function defaultAvailability() {
const t = {};
DAY_KEYS.forEach((d) => {
const isWeekend = d === "sun" || d === "sat";
t[d] = isWeekend ? { enabled: true, start: "08:00", end: "20:00" } : { enabled: true, start: "08:00", end: "14:00" };
});
return t;
}
function timeToMinutes(t) {
if (!t || typeof t !== "string" || t.indexOf(":") === -1) return 8 * 60;
const [h, m] = t.split(":").map(Number);
return (Number.isFinite(h) ? h : 8) * 60 + (Number.isFinite(m) ? m : 0);
}
function minutesToTimeStr(mins) {
const h = Math.floor(mins / 60);
const m = mins % 60;
return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
function formatTime12(mins) {
const h = Math.floor(mins / 60);
const m = mins % 60;
const period = h >= 12 ? "PM" : "AM";
let h12 = h % 12;
if (h12 === 0) h12 = 12;
return m === 0 ? `${h12}${period}` : `${h12}:${String(m).padStart(2, "0")}${period}`;
}
const SLOT_DURATION_MIN = 60;
const SLOT_REST_MIN = 30;
function slotIdFromStart(startMin) {
const h = Math.floor(startMin / 60);
const m = startMin % 60;
return `${String(h).padStart(2, "0")}${String(m).padStart(2, "0")}`;
}
function daySlotDefs(dayConfig) {
if (!dayConfig || dayConfig.enabled === false) return [];
const startMin = timeToMinutes(dayConfig.start);
const endMin = timeToMinutes(dayConfig.end);
const slots = [];
let cursor = startMin;
const cycle = SLOT_DURATION_MIN + SLOT_REST_MIN;
while (cursor + SLOT_DURATION_MIN <= endMin) {
const slotEnd = cursor + SLOT_DURATION_MIN;
slots.push({
id: slotIdFromStart(cursor),
startMin: cursor,
endMin: slotEnd,
label: `${formatTime12(cursor)}–${formatTime12(slotEnd)}`,
short: formatTime12(cursor),
});
cursor += cycle;
}
return slots;
}
function groupSlotsByDate(slots) {
const order = [];
const map = {};
slots.forEach((s) => {
if (!map[s.dateISO]) {
map[s.dateISO] = [];
order.push(s.dateISO);
}
map[s.dateISO].push(s);
});
return order.map((dateISO) => ({ dateISO, slots: map[dateISO] }));
}
function slotStartMsFromMinutes(dateISO, minutes) {
const d = new Date(dateISO + "T00:00:00");
d.setHours(Math.floor(minutes / 60), minutes % 60, 0, 0);
return d.getTime();
}
function generateUpcomingSlots(template, bookedSet, daysAhead) {
const out = [];
const now = new Date();
const tmpl = template || defaultAvailability();
for (let i = 0; i < daysAhead; i++) {
const d = new Date(now);
d.setDate(now.getDate() + i);
d.setHours(0, 0, 0, 0);
const dayKey = DAY_KEYS[d.getDay()];
const dayConfig = tmpl[dayKey];
const dateISO = d.toISOString().slice(0, 10);
daySlotDefs(dayConfig).forEach((slotDef) => {
const startMs = slotStartMsFromMinutes(dateISO, slotDef.startMin);
if (startMs > Date.now()) {
const key = `${dateISO}:${slotDef.id}`;
out.push({
dateISO, slotId: slotDef.id, slotLabel: slotDef.label, slotShort: slotDef.short,
startMs, key, booked: !!(bookedSet && bookedSet[key]),
});
}
});
}
out.sort((a, b) => a.startMs - b.startMs);
return out;
}
const MOTIVATION_LINES = [
"Every job done right is the next referral.",
"Consistency is what keeps the schedule full.",
"A clean edge today is a call back tomorrow.",
"The work speaks before you do.",
"Reliable shows up whether or not it's convenient.",
"Small jobs done well build a big reputation.",
"The best marketing is a lawn that looks cared for.",
"Word of mouth starts with what's under your feet.",
];
function randomMotivationLine() {
return MOTIVATION_LINES[Math.floor(Math.random() * MOTIVATION_LINES.length)];
}
function formatSlotDate(dateISO) {
const d = new Date(dateISO + "T00:00:00");
const today = new Date();
today.setHours(0, 0, 0, 0);
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const dOnly = new Date(d);
dOnly.setHours(0, 0, 0, 0);
if (dOnly.getTime() === today.getTime()) return "Today";
if (dOnly.getTime() === tomorrow.getTime()) return "Tomorrow";
return d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
}
function buildReminderText(info) {
const lines = [];
lines.push(info.customerName ? `Hi ${info.customerName}!` : "Hi!");
lines.push(`You're all set for your next mow with R-DUB's Lawn Care:`);
lines.push(`${formatSlotDate(info.dateISO)} · ${info.slotLabel}`);
lines.push("");
lines.push("Text or call us if you need to change anything — see you then!");
return lines.join("\n");
}
function buildBulkReminderText(customerName, booked) {
const lines = [];
lines.push(customerName ? `Hi ${customerName}!` : "Hi!");
lines.push(`You're all set for your next ${booked.length} mows with R-DUB's Lawn Care:`);
booked.forEach((b) => lines.push(`• ${formatSlotDate(b.dateISO)} · ${b.slotLabel}`));
lines.push("");
lines.push("Text or call us if you need to change anything — see you then!");
return lines.join("\n");
}
async function copyText(text, onDone) {
try {
await navigator.clipboard.writeText(text);
if (onDone) onDone("Copied!");
} catch (e) {
try {
const ta = document.createElement("textarea");
ta.value = text;
ta.style.position = "fixed";
ta.style.opacity = "0";
document.body.appendChild(ta);
ta.focus();
ta.select();
document.execCommand("copy");
document.body.removeChild(ta);
if (onDone) onDone("Copied!");
} catch (e2) {
if (onDone) onDone("Couldn't copy");
}
}
}
let CURRENT_AUTH_TOKEN = null;
function setCurrentAuthToken(token) {
CURRENT_AUTH_TOKEN = token;
}
function snakeToCamel(str) {
const camel = str.replace(/_([a-z0-9])/g, (_, c) => c.toUpperCase());
return camel.replace(/Iso\b/, "ISO");
}
function rowFromApi(row, jsonFields, boolFields) {
const out = {};
for (const key in row) {
const camelKey = snakeToCamel(key);
let val = row[key];
if (jsonFields && jsonFields.indexOf(camelKey) !== -1) {
try { val = val == null ? null : JSON.parse(val); } catch (e) { val = null; }
} else if (boolFields && boolFields.indexOf(camelKey) !== -1) {
val = !!val;
}
out[camelKey] = val;
}
return out;
}
const TABLE_KEYS = {
estimates: {
endpoint: "/api/estimates", arrayKey: "estimates", idField: "timestamp",
jsonFields: ["lines", "builderState"], boolFields: ["isRecurring", "hasPhoto", "hasBeforePhoto"],
},
profiles: {
endpoint: "/api/customer-profiles", arrayKey: "profiles", idField: "phone",
jsonFields: [], boolFields: ["paused"],
},
bookings: {
endpoint: "/api/bookings", arrayKey: "bookings", idField: "id",
jsonFields: [], boolFields: [],
},
appointments: {
endpoint: "/api/appointments", arrayKey: "appointments", idField: "id",
jsonFields: ["addonSelections", "addonPrices", "customItems"], boolFields: ["confirmed", "mowingEnabled", "feeApplied"],
},
expenses: {
endpoint: "/api/expenses", arrayKey: "expenses", idField: "timestamp",
jsonFields: [], boolFields: [],
},
inventoryItems: {
endpoint: "/api/inventory-items", arrayKey: "inventoryItems", idField: "id",
jsonFields: [], boolFields: [],
},
timeLogs: {
endpoint: "/api/time-logs", arrayKey: "timeLogs", idField: "timestamp",
jsonFields: [], boolFields: [],
},
bugReports: {
endpoint: "/api/bug-reports", arrayKey: "bugReports", idField: "id",
jsonFields: [], boolFields: [],
},
crewSchedules: {
endpoint: "/api/crew-schedules", arrayKey: "schedules", idField: "username",
jsonFields: ["schedule"], boolFields: [],
},
};
function authHeaders(extra) {
const headers = { ...(extra || {}) };
if (CURRENT_AUTH_TOKEN) headers.Authorization = `Bearer ${CURRENT_AUTH_TOKEN}`;
return headers;
}
async function loadTable(table) {
try {
const res = await fetch(`${API_BASE}${table.endpoint}`, { headers: authHeaders() });
if (!res.ok) return {};
const data = await res.json();
const rows = data[table.arrayKey] || [];
const out = {};
rows.forEach((row) => {
const converted = rowFromApi(row, table.jsonFields, table.boolFields);
out[converted[snakeToCamel(table.idField)] ?? converted[table.idField]] = converted;
});
return out;
} catch (e) {
return {};
}
}
async function saveTable(table, _shared, tableObj) {
try {
const records = Object.values(tableObj);
for (const record of records) {
await fetch(`${API_BASE}${table.endpoint}`, {
method: "POST",
headers: authHeaders({ "Content-Type": "application/json" }),
body: JSON.stringify(record),
});
}
return true;
} catch (e) {
return false;
}
}
async function setTableRecord(table, _shared, recordId, record) {
try {
const res = await fetch(`${API_BASE}${table.endpoint}`, {
method: "POST",
headers: authHeaders({ "Content-Type": "application/json" }),
body: JSON.stringify(record),
});
return res.ok;
} catch (e) {
return false;
}
}
async function deleteTableRecord(table, _shared, recordId) {
try {
const res = await fetch(`${API_BASE}${table.endpoint}/${encodeURIComponent(recordId)}`, {
method: "DELETE",
headers: authHeaders(),
});
return res.ok;
} catch (e) {
return false;
}
}
function compressImageFile(file, maxDimension, quality) {
return new Promise((resolve, reject) => {
const reader = new FileReader();
reader.onload = () => {
const img = new Image();
img.onload = () => {
let { width, height } = img;
if (width > height && width > maxDimension) {
height = Math.round(height * (maxDimension / width));
width = maxDimension;
} else if (height >= width && height > maxDimension) {
width = Math.round(width * (maxDimension / height));
height = maxDimension;
}
const canvas = document.createElement("canvas");
canvas.width = width;
canvas.height = height;
const ctx = canvas.getContext("2d");
ctx.drawImage(img, 0, 0, width, height);
resolve(canvas.toDataURL("image/jpeg", quality));
};
img.onerror = () => reject(new Error("Couldn't load that image"));
img.src = reader.result;
};
reader.onerror = () => reject(new Error("Couldn't read that file"));
reader.readAsDataURL(file);
});
}
async function updateJobPaymentStatus(item, paid) {
const updated = { ...item, paymentStatus: paid ? "paid" : "unpaid", paidAt: paid ? Date.now() : null };
await setTableRecord(TABLE_KEYS.estimates, false, String(item.timestamp), updated);
return updated;
}
async function fetchAvailability() {
try {
const res = await fetch(`${API_BASE}/api/availability`, { headers: authHeaders() });
if (!res.ok) return defaultAvailability();
const data = await res.json();
return data.template || defaultAvailability();
} catch (e) {
return defaultAvailability();
}
}
async function fetchBookings() {
try {
const table = await loadTable(TABLE_KEYS.bookings, true);
const items = Object.keys(table).map((recordId) => ({ key: recordId, ...table[recordId] }));
items.sort((a, b) => a.startMs - b.startMs);
return items;
} catch (e) {
return [];
}
}
function OverridePriceInput({ value, onCommit }) {
const [draft, setDraft] = useState(String(value));
useEffect(() => {
setDraft(String(value));
}, [value]);
function commit() {
const num = Math.max(0, Math.round(Number(draft) || 0));
if (num !== value) onCommit(num);
else setDraft(String(value));
}
return (
<input
type="number"
step="1"
value={draft}
onChange={(e) => setDraft(e.target.value)}
onBlur={commit}
onKeyDown={(e) => {
if (e.key === "Enter") e.target.blur();
}}
className="w-16 font-medium text-gray-900 text-center border border-gray-300 rounded px-1 py-0.5"
/>
);
}
const LOGO_DATA_URI = "data:image/png;base64,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";
const GUNNER_DATA_URI = "./gunner.png";
function Badge() {
return (
<img src={LOGO_DATA_URI} alt="R-DUB's Lawn Care" style={{ height: 40, width: "auto" }} />
);
}
function emptyBuilderState() {
return {
mowingEnabled: false,
mowingType: "recurring",
lotTierId: "medium",
mowingPrice: midpoint(LOT_TIERS[1].recurring),
firstCutEnabled: false,
firstCutPrice: 30,
addonState: initialAddonState(),
customItems: [],
};
}
function NewCustomerView({ editRequest, onConsumeEditRequest, prefillEstimate, onConsumePrefillEstimate, onSavedExisting, userRole }) {
const [motivationLine] = useState(() => randomMotivationLine());
const [mowingEnabled, setMowingEnabled] = useState(false);
const [mowingType, setMowingType] = useState("recurring");
const [lotTierId, setLotTierId] = useState("medium");
const [mowingPrice, setMowingPrice] = useState(midpoint(LOT_TIERS[1].recurring));
const [firstCutEnabled, setFirstCutEnabled] = useState(false);
const [firstCutPrice, setFirstCutPrice] = useState(30);
const [addonState, setAddonState] = useState(initialAddonState());
const [customerName, setCustomerName] = useState("");
const [customerPhone, setCustomerPhone] = useState("");
const [existingCustomerNotice, setExistingCustomerNotice] = useState(null);
const [checkingPhone, setCheckingPhone] = useState(false);
const [customerAddress, setCustomerAddress] = useState("");
const [customItems, setCustomItems] = useState([]);
const [deadlineHours, setDeadlineHours] = useState(DEFAULT_DEADLINE_HOURS);
const [chosenSlotKey, setChosenSlotKey] = useState(null);
const [appointmentDuplicateWarning, setAppointmentDuplicateWarning] = useState(null);
const [pendingStatusOverride, setPendingStatusOverride] = useState(undefined);
const [editingTimestamp, setEditingTimestamp] = useState(null);
const [savedTimestamp, setSavedTimestamp] = useState(null);
const [status, setStatus] = useState("pending-agreement");
const [editingDate, setEditingDate] = useState(null);
const [saving, setSaving] = useState(false);
const [saveLabel, setSaveLabel] = useState("");
const [completeLabel, setCompleteLabel] = useState("");
const [acceptLabel, setAcceptLabel] = useState("");
const [copyFeedback, setCopyFeedback] = useState("");
const [storageError, setStorageError] = useState("");
const [overridePin, setOverridePin] = useState(null);
const [pinModalOpen, setPinModalOpen] = useState(false);
const [pinModalMode, setPinModalMode] = useState("verify");
const [pinInput, setPinInput] = useState("");
const [pinError, setPinError] = useState("");
const [pendingApply, setPendingApply] = useState(null);
const [availability, setAvailability] = useState(defaultAvailability());
const [availabilityLoading, setAvailabilityLoading] = useState(true);
const [bookings, setBookings] = useState([]);
const [bookingsLoading, setBookingsLoading] = useState(true);
useEffect(() => {
(async () => {
try {
const r = await localStore.get("settings:override-pin", false);
setOverridePin(r && r.value ? r.value : null);
} catch (e) {
setOverridePin(null);
}
})();
(async () => {
setAvailabilityLoading(true);
setAvailability(await fetchAvailability());
setAvailabilityLoading(false);
})();
(async () => {
setBookingsLoading(true);
setBookings(await fetchBookings());
setBookingsLoading(false);
})();
}, []);
useEffect(() => {
if (editRequest) {
startEdit(editRequest);
if (onConsumeEditRequest) onConsumeEditRequest();
}
}, [editRequest]);
useEffect(() => {
if (prefillEstimate) {
resetAll();
setCustomerName(prefillEstimate.name || "");
setCustomerPhone(prefillEstimate.phone || "");
setCustomerAddress(prefillEstimate.address || "");
if (prefillEstimate.mowingEnabled) {
setMowingEnabled(true);
setMowingType(prefillEstimate.mowingType || "recurring");
setLotTierId(prefillEstimate.lotTierId || "medium");
setMowingPrice(prefillEstimate.mowingPrice || 0);
}
const addons = initialAddonState();
Object.keys(prefillEstimate.addonSelections || {}).forEach((id) => {
if (addons[id] && prefillEstimate.addonSelections[id]) {
addons[id] = {
enabled: true,
price: (prefillEstimate.addonPrices && prefillEstimate.addonPrices[id] != null) ? prefillEstimate.addonPrices[id] : addons[id].price,
};
}
});
setAddonState(addons);
if (onConsumePrefillEstimate) onConsumePrefillEstimate();
}
}, [prefillEstimate]);
function requestOverride(min, max, newValue, applyFn) {
if (newValue >= min && newValue <= max) {
applyFn(newValue);
return;
}
setPendingApply(() => () => applyFn(newValue));
setPinModalMode(overridePin ? "verify" : "create");
setPinError("");
setPinInput("");
setPinModalOpen(true);
}
async function submitPinModal() {
if (pinModalMode === "create") {
if (pinInput.trim().length < 4) {
setPinError("Use at least 4 characters");
return;
}
try {
await localStore.set("settings:override-pin", pinInput.trim(), false);
setOverridePin(pinInput.trim());
if (pendingApply) pendingApply();
closePinModal();
} catch (e) {
setPinError("Couldn't save, try again");
}
} else {
if (pinInput === overridePin) {
if (pendingApply) pendingApply();
closePinModal();
} else {
setPinError("Incorrect password");
setPinInput("");
}
}
}
function closePinModal() {
setPinModalOpen(false);
setPendingApply(null);
setPinInput("");
setPinError("");
}
async function resetOverridePin() {
try {
await localStore.delete("settings:override-pin", false);
setOverridePin(null);
} catch (e) {}
}
const currentTier = LOT_TIERS.find((t) => t.id === lotTierId);
const activeRange = currentTier
? mowingType === "recurring"
? currentTier.recurring
: currentTier.oneTime
: null;
function selectTier(id) {
setLotTierId(id);
const tier = LOT_TIERS.find((t) => t.id === id);
if (tier.id !== "custom") {
const range = mowingType === "recurring" ? tier.recurring : tier.oneTime;
setMowingPrice(midpoint(range));
} else {
setMowingPrice(150);
}
}
function selectMowingType(type) {
setMowingEnabled(true);
setMowingType(type);
if (currentTier && currentTier.id !== "custom") {
const range = type === "recurring" ? currentTier.recurring : currentTier.oneTime;
setMowingPrice(midpoint(range));
}
}
function deselectMowing() {
setMowingEnabled(false);
}
function toggleAddon(id) {
setAddonState((prev) => ({ ...prev, [id]: { ...prev[id], enabled: !prev[id].enabled } }));
}
function setAddonPrice(id, price) {
setAddonState((prev) => ({ ...prev, [id]: { ...prev[id], price } }));
}
async function checkExistingCustomer(phone) {
const phoneKey = normalizePhone(phone);
if (phoneKey.length < 7) {
setExistingCustomerNotice(null);
return;
}
setCheckingPhone(true);
try {
const table = await loadTable(TABLE_KEYS.estimates, false);
const matches = Object.values(table).filter((e) => e.phone === phoneKey);
if (matches.length > 0) {
let latest = null;
matches.forEach((d) => {
if (!latest || d.timestamp > latest.timestamp) latest = d;
});
setExistingCustomerNotice({
name: latest ? latest.customerName : "",
address: latest ? latest.address : "",
count: matches.length,
});
} else {
setExistingCustomerNotice(null);
}
} catch (e) {
setExistingCustomerNotice(null);
} finally {
setCheckingPhone(false);
}
}
function addCustomItem() {
setCustomItems((prev) => [...prev, { id: `custom-${Date.now()}`, label: "", price: 0 }]);
}
function updateCustomItem(id, field, value) {
setCustomItems((prev) => prev.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
}
function removeCustomItem(id) {
setCustomItems((prev) => prev.filter((c) => c.id !== id));
}
function resetAll() {
const bs = emptyBuilderState();
setMowingEnabled(bs.mowingEnabled);
setMowingType(bs.mowingType);
setLotTierId(bs.lotTierId);
setMowingPrice(bs.mowingPrice);
setFirstCutEnabled(bs.firstCutEnabled);
setFirstCutPrice(bs.firstCutPrice);
setAddonState(bs.addonState);
setCustomItems(bs.customItems ?? []);
setCustomerName("");
setCustomerPhone("");
setCustomerAddress("");
setExistingCustomerNotice(null);
setDeadlineHours(DEFAULT_DEADLINE_HOURS);
setChosenSlotKey(null);
setAppointmentDuplicateWarning(null);
setCopyFeedback("");
setSaveLabel("");
setCompleteLabel("");
setAcceptLabel("");
setEditingTimestamp(null);
setEditingDate(null);
setSavedTimestamp(null);
setStatus("pending-agreement");
}
function startEdit(item) {
const bs = item.builderState || emptyBuilderState();
setMowingEnabled(bs.mowingEnabled ?? true);
setMowingType(bs.mowingType ?? "recurring");
setLotTierId(bs.lotTierId ?? "medium");
setMowingPrice(bs.mowingPrice ?? midpoint(LOT_TIERS[1].recurring));
setFirstCutEnabled(bs.firstCutEnabled ?? false);
setFirstCutPrice(bs.firstCutPrice ?? 30);
setAddonState(bs.addonState ?? initialAddonState());
setCustomItems(bs.customItems ?? []);
setCustomerName(item.customerName || "");
setCustomerPhone(item.phone || "");
setCustomerAddress(item.address || "");
setExistingCustomerNotice(null);
setDeadlineHours(DEFAULT_DEADLINE_HOURS);
setChosenSlotKey(null);
setEditingTimestamp(item.timestamp);
setEditingDate(new Date(item.timestamp).toLocaleDateString());
setSavedTimestamp(item.timestamp);
setStatus(item.status || "pending-agreement");
setSaveLabel("");
}
const lineItems = [];
if (mowingEnabled) {
const label =
currentTier.id === "custom"
? `${mowingType === "recurring" ? "Recurring" : "One-time"} mowing (custom, over 1 acre)`
: `${mowingType === "recurring" ? "Recurring" : "One-time"} mowing — ${currentTier.label}`;
lineItems.push({ label, price: mowingPrice });
if (firstCutEnabled) {
lineItems.push({ label: "First cut / overgrown premium", price: firstCutPrice });
}
}
ADDONS.forEach((a) => {
if (addonState[a.id].enabled) {
lineItems.push({ label: a.label, price: addonState[a.id].price });
}
});
customItems.forEach((c) => {
const price = Number(c.price) || 0;
if (price > 0) {
lineItems.push({ label: c.label.trim() || "Custom item", price });
}
});
const total = lineItems.reduce((sum, li) => sum + li.price, 0);
const isRecurring = mowingEnabled && mowingType === "recurring";
const showSavings = isRecurring && currentTier && currentTier.id !== "custom";
const bookedSet = {};
bookings.forEach((b) => {
bookedSet[`${b.dateISO}:${b.slotId}`] = true;
});
const pickerSlots = generateUpcomingSlots(availability, bookedSet, 14).filter((s) => !s.booked);
const pickerSlotsByDay = groupSlotsByDate(pickerSlots);
function buildEstimateText() {
const lines = [];
lines.push("R-DUB's Lawn Care — Estimate");
if (customerName.trim()) lines.push(`For: ${customerName.trim()}`);
if (customerAddress.trim()) lines.push(`Address: ${customerAddress.trim()}`);
lines.push("");
lineItems.forEach((li) => lines.push(`${li.label}: $${li.price}`));
lines.push("");
lines.push(`Total: $${total}`);
if (showSavings) lines.push(`(Recurring service saves about $${currentTier.savings}/visit)`);
lines.push("");
lines.push("Thank you! — R-DUB's Lawn Care");
return lines.join("\n");
}
async function copyEstimate() {
const text = buildEstimateText();
try {
await navigator.clipboard.writeText(text);
setCopyFeedback("Copied!");
} catch (e) {
try {
const ta = document.createElement("textarea");
ta.value = text;
ta.style.position = "fixed";
ta.style.opacity = "0";
document.body.appendChild(ta);
ta.focus();
ta.select();
document.execCommand("copy");
document.body.removeChild(ta);
setCopyFeedback("Copied!");
} catch (e2) {
setCopyFeedback("Couldn't copy");
}
}
setTimeout(() => setCopyFeedback(""), 2000);
}
async function handleSave(statusOverride, force) {
setStorageError("");
if (!customerName.trim() || normalizePhone(customerPhone).length < 7 || !customerAddress.trim()) {
setStorageError("Customer name, phone number, and address are required.");
return;
}
const phoneKeyCheck = normalizePhone(customerPhone);
if (phoneKeyCheck && chosenSlotKey && !force) {
const slotForCheck = pickerSlots.find((s) => s.key === chosenSlotKey);
if (slotForCheck) {
const existingSameDay = bookings.find((b) => b.phone === phoneKeyCheck && b.dateISO === slotForCheck.dateISO);
if (existingSameDay) {
setAppointmentDuplicateWarning({ existing: existingSameDay });
setPendingStatusOverride(statusOverride);
return;
}
}
}
setSaving(true);
const wasEditing = !!editingTimestamp || !!savedTimestamp;
const timestamp = editingTimestamp || savedTimestamp || Date.now();
const phoneKey = normalizePhone(customerPhone);
const finalStatus = statusOverride || status;
const builderState = {
mowingEnabled, mowingType, lotTierId, mowingPrice, firstCutEnabled, firstCutPrice, addonState, customItems,
};
const data = {
timestamp,
customerName: customerName.trim(),
phone: phoneKey,
address: customerAddress.trim(),
isRecurring,
total,
lines: lineItems,
builderState,
status: finalStatus,
};
try {
const result = await setTableRecord(TABLE_KEYS.estimates, false, String(timestamp), data);
if (!result) throw new Error("save failed");
if (phoneKey) {
try {
const profilesTable = await loadTable(TABLE_KEYS.profiles, true);
const existingProfile = profilesTable[phoneKey] || {};
const updatedProfile = {
...existingProfile,
phone: phoneKey,
name: customerName.trim() || existingProfile.name || "",
address: customerAddress.trim() || existingProfile.address || "",
};
await setTableRecord(TABLE_KEYS.profiles, true, phoneKey, updatedProfile);
} catch (e) {}
}
if (phoneKey && chosenSlotKey) {
const slot = pickerSlots.find((s) => s.key === chosenSlotKey);
if (slot) {
await setTableRecord(TABLE_KEYS.bookings, true, `${slot.dateISO}:${slot.slotId}`, {
dateISO: slot.dateISO, slotId: slot.slotId, slotLabel: slot.slotLabel, startMs: slot.startMs,
phone: phoneKey, customerName: customerName.trim(), status: "accepted", jobTimestamp: timestamp, createdAt: Date.now(),
});
const nv = {
phone: phoneKey, customerName: customerName.trim(),
confirmed: true, dateISO: slot.dateISO, slotId: slot.slotId, slotLabel: slot.slotLabel,
startMs: slot.startMs, deadline: slot.startMs - deadlineHours * 3600 * 1000, deadlineHours,
addonSelections: {}, notes: "", feeApplied: false, feeAmount: 0, updatedAt: Date.now(),
};
await setTableRecord(TABLE_KEYS.appointments, true, `${phoneKey}:${slot.startMs}`, nv);
setBookings(await fetchBookings());
}
}
if (editingTimestamp && phoneKey && onSavedExisting) onSavedExisting(phoneKey);
setEditingTimestamp(null);
setEditingDate(null);
setSavedTimestamp(timestamp);
setChosenSlotKey(null);
setAppointmentDuplicateWarning(null);
if (statusOverride === "completed") {
setStatus(statusOverride);
setCompleteLabel("Completed!");
setTimeout(() => setCompleteLabel(""), 2000);
} else if (statusOverride === "confirmed") {
setStatus(statusOverride);
setAcceptLabel("Accepted!");
setTimeout(() => setAcceptLabel(""), 2000);
} else {
setSaveLabel(wasEditing ? "Updated!" : "Saved!");
setTimeout(() => setSaveLabel(""), 2000);
}
} catch (e) {
setStorageError("Couldn't save — try again");
} finally {
setSaving(false);
}
}
async function handleMarkCompleted() {
await handleSave("completed");
}
async function handleAcceptJob() {
await handleSave("confirmed");
}
return (
<div style={{ paddingBottom: 112 + BOTTOM_TAB_HEIGHT }}>
<div className="px-4 pt-5 pb-4 border-b border-gray-200 flex items-center gap-3">
<Badge />
<div>
<p className="text-base font-medium text-gray-900">R-DUB's Lawn Care</p>
<p className="text-sm" style={{ color: "var(--accent)" }}>New estimate & booking</p>
</div>
<button onClick={resetAll} className="ml-auto text-xs text-gray-500 border border-gray-300 rounded-full px-3 py-1.5">
New
</button>
</div>
<div className="px-4 py-4 space-y-6">
{editingTimestamp && (
<div className="flex items-center justify-between bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-800">
<span>Editing estimate from {editingDate} — Save will update this record.</span>
<button onClick={resetAll} className="underline shrink-0 ml-2">Cancel</button>
</div>
)}
{editingTimestamp && userRole === "crew" && (status === "confirmed" || status === "completed") && (
<div className="border rounded-lg px-3 py-2 text-xs" style={{ borderColor: "var(--accent)", backgroundColor: "var(--surface-alt)", color: "var(--text-muted)" }}>
Pricing is locked on this job — it's already {status}. Notes, photos, and other details can still be updated; price changes need the owner or a manager.
</div>
)}
<section className="space-y-3">
<h2 className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--accent)" }}>Customer info</h2>
<div>
<label className="block text-xs text-gray-500 mb-1">Customer name <span style={{ color: "var(--warn)" }}>*</span></label>
<input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)}
placeholder="e.g. Sarah Thompson" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
</div>
<div>
<label className="block text-xs text-gray-500 mb-1">Customer phone <span style={{ color: "var(--warn)" }}>*</span></label>
<input type="tel" value={customerPhone}
onChange={(e) => { setCustomerPhone(e.target.value); setExistingCustomerNotice(null); }}
onBlur={(e) => checkExistingCustomer(e.target.value)}
placeholder="e.g. (269) 555-0134" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
{checkingPhone && <p className="text-xs text-gray-400 mt-1">Checking for an existing customer…</p>}
{!checkingPhone && existingCustomerNotice && (
<div className="text-xs mt-1 rounded-md px-2.5 py-2" style={{ backgroundColor: "var(--surface-alt)", color: "var(--accent)" }}>
<p className="font-medium">
Matches an existing customer{existingCustomerNotice.name ? `: ${existingCustomerNotice.name}` : ""} — {existingCustomerNotice.count} prior visit{existingCustomerNotice.count === 1 ? "" : "s"} on file.
</p>
{(existingCustomerNotice.name || existingCustomerNotice.address) && (
<button type="button" className="underline mt-1"
onClick={() => {
if (existingCustomerNotice.name && !customerName.trim()) setCustomerName(existingCustomerNotice.name);
if (existingCustomerNotice.address && !customerAddress.trim()) setCustomerAddress(existingCustomerNotice.address);
}}>
Use their saved name/address
</button>
)}
</div>
)}
</div>
<div>
<label className="block text-xs text-gray-500 mb-1">Service address <span style={{ color: "var(--warn)" }}>*</span></label>
<input type="text" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)}
placeholder="e.g. 412 Maple St, Battle Creek, MI" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
</div>
<p className="flex items-center gap-2 text-xs text-gray-500 border border-gray-200 rounded-lg px-3 py-2">
Status:
<span className="font-medium"
style={{ color: status === "completed" ? "var(--success)" : status === "confirmed" ? "var(--accent)" : "var(--text-faint)" }}>
{status === "completed" ? "Completed" : status === "confirmed" ? "Confirmed" : "Pending agreement"}
</span>
</p>
<div className="border border-gray-200 rounded-lg p-3 space-y-2">
<p className="text-xs font-medium text-gray-700">Next Appointment (optional — you can also schedule this after the visit is done)</p>
<div>
{(availabilityLoading || bookingsLoading) ? (
<p className="text-xs text-gray-400">Loading availability…</p>
) : pickerSlots.length === 0 ? (
<p className="text-xs text-gray-400">No open slots in the next two weeks — check your availability in the Business tab.</p>
) : (
<div className="max-h-72 overflow-y-auto pr-1 divide-y divide-gray-100">
{pickerSlotsByDay.map((day) => {
const isNearTerm = day.dateISO === pickerSlotsByDay[0].dateISO;
return (
<div key={day.dateISO} className="py-2 first:pt-0">
<p className="text-xs font-semibold mb-1" style={{ color: isNearTerm ? "var(--accent)" : "var(--text-muted)" }}>{formatSlotDate(day.dateISO)}</p>
<div className="flex flex-wrap gap-1.5">
{day.slots.map((s) => (
<button key={s.key} type="button" onClick={() => setChosenSlotKey((k) => (k === s.key ? null : s.key))} className="text-xs border rounded-full px-2.5 py-1"
style={chosenSlotKey === s.key ? { borderColor: "var(--accent)", backgroundColor: ACCENT_HEX, color: "white" } : { borderColor: "var(--border-strong)", color: "var(--text)" }}>
{s.slotShort}
</button>
))}
</div>
</div>
);
})}
</div>
)}
</div>
<div>
<label className="block text-xs text-gray-500 mb-1">Free-change window (hours before visit)</label>
<input type="number" min="1" value={deadlineHours}
onChange={(e) => setDeadlineHours(Math.max(1, Math.round(Number(e.target.value) || 1)))}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
<p className="text-xs text-gray-400 mt-1">
Customers can always change what they want for this visit. Inside this window before the visit, a ${LAST_MINUTE_FEE} fee applies automatically.
</p>
</div>
{appointmentDuplicateWarning && (
<div className="border rounded-lg p-2.5 text-xs" style={{ borderColor: "var(--warn)", backgroundColor: "#FEF3C7" }}>
<p className="font-medium mb-2" style={{ color: "var(--warn)" }}>
{customerName.trim() || "This customer"} already has an appointment that day — {formatSlotDate(appointmentDuplicateWarning.existing.dateISO)} · {appointmentDuplicateWarning.existing.slotLabel}.
</p>
<div className="flex gap-2">
<button onClick={() => setAppointmentDuplicateWarning(null)} className="flex-1 border border-gray-300 rounded-lg py-1.5 text-xs text-gray-700 bg-white">
Pick a different time
</button>
<button onClick={() => handleSave(pendingStatusOverride, true)} className="flex-1 rounded-lg py-1.5 text-xs text-white" style={{ backgroundColor: "var(--warn)" }}>
Save anyway
</button>
</div>
</div>
)}
</div>
</section>
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>Mowing</h2>
<div className="flex rounded-lg border border-gray-300 overflow-hidden text-sm mb-3">
<button onClick={() => selectMowingType("recurring")} className="flex-1 py-2"
style={mowingEnabled && mowingType === "recurring" ? { backgroundColor: ACCENT_HEX, color: "white" } : { backgroundColor: "var(--surface)", color: "var(--text)" }}>
Recurring
</button>
<button onClick={() => selectMowingType("oneTime")} className="flex-1 py-2"
style={mowingEnabled && mowingType === "oneTime" ? { backgroundColor: ACCENT_HEX, color: "white" } : { backgroundColor: "var(--surface)", color: "var(--text)" }}>
One-time
</button>
<button onClick={deselectMowing} className="flex-1 py-2"
style={!mowingEnabled ? { backgroundColor: "var(--text-faint)", color: "white" } : { backgroundColor: "var(--surface)", color: "var(--text)" }}>
No mowing
</button>
</div>
{mowingEnabled && (
<div className="space-y-3 border border-gray-200 rounded-lg p-3">
<div className="grid grid-cols-2 gap-2">
{LOT_TIERS.map((tier) => (
<button key={tier.id} onClick={() => selectTier(tier.id)} className="border rounded-lg py-2 px-2 text-xs text-left"
style={lotTierId === tier.id ? { borderColor: "var(--accent)", backgroundColor: "var(--surface-alt)", color: "var(--accent)" } : { borderColor: "var(--border-strong)", color: "var(--text)" }}>
{tier.label}
</button>
))}
</div>
{lotTierId === "custom" ? (
<div>
<label className="text-xs text-gray-500">Custom price</label>
<input type="number" min="0" step="1" value={mowingPrice}
onChange={(e) => setMowingPrice(Math.max(0, Math.round(Number(e.target.value) || 0)))}
className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm mt-1" />
</div>
) : (
<div>
<div className="flex items-center justify-between text-xs text-gray-500 mb-1">
<span>${activeRange[0]}</span>
<span className="flex items-center gap-1">
<span className="text-gray-400">$</span>
<OverridePriceInput value={mowingPrice} onCommit={(v) => requestOverride(activeRange[0], activeRange[1], v, setMowingPrice)} />
</span>
<span>${activeRange[1]}</span>
</div>
{(mowingPrice < activeRange[0] || mowingPrice > activeRange[1]) && (
<p className="text-xs text-gray-500 italic mb-1">Custom price — outside the standard range</p>
)}
<input type="range" min={activeRange[0]} max={activeRange[1]} step="1" value={mowingPrice}
onChange={(e) => setMowingPrice(Number(e.target.value))} className="w-full" style={{ accentColor: "var(--accent)", touchAction: "pan-y" }} />
</div>
)}
{showSavings && (
<p className="text-xs text-emerald-700 bg-emerald-50 rounded-md px-2 py-1.5">
Recurring saves about ${currentTier.savings}/visit vs a one-time cut this size.
</p>
)}
<label className="flex items-center gap-2 text-xs text-gray-600 pt-2 border-t border-gray-200">
<input type="checkbox" checked={firstCutEnabled} onChange={() => setFirstCutEnabled((v) => !v)} style={{ accentColor: "var(--accent)", touchAction: "pan-y" }} />
First cut / overgrown lawn premium
</label>
{firstCutEnabled && (
<div>
<div className="flex items-center justify-between text-xs text-gray-500 mb-1">
<span>$20</span>
<span className="flex items-center gap-1">
<span className="text-gray-400">$</span>
<OverridePriceInput value={firstCutPrice} onCommit={(v) => requestOverride(20, 40, v, setFirstCutPrice)} />
</span>
<span>$40</span>
</div>
{(firstCutPrice < 20 || firstCutPrice > 40) && (
<p className="text-xs text-gray-500 italic mb-1">Custom price — outside the standard range</p>
)}
<input type="range" min="20" max="40" step="1" value={firstCutPrice}
onChange={(e) => setFirstCutPrice(Number(e.target.value))} className="w-full" style={{ accentColor: "var(--accent)", touchAction: "pan-y" }} />
</div>
)}
</div>
)}
</section>
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>
Cleanup, landscaping & extras
</h2>
<div className="space-y-2">
{ADDONS.map((a) => (
<div key={a.id} className="border rounded-lg p-3"
style={addonState[a.id].enabled ? { borderColor: "var(--accent)", backgroundColor: "var(--surface-alt)" } : { borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
<label className="flex items-center gap-2 text-sm text-gray-800">
<input type="checkbox" checked={addonState[a.id].enabled} onChange={() => toggleAddon(a.id)} style={{ accentColor: "var(--accent)", touchAction: "pan-y" }} />
{a.label}
</label>
{addonState[a.id].enabled && (
<div className="mt-2">
<div className="flex items-center justify-between text-xs text-gray-500 mb-1">
<span>${a.range[0]}</span>
<span className="flex items-center gap-1">
<span className="text-gray-400">$</span>
<OverridePriceInput value={addonState[a.id].price} onCommit={(v) => requestOverride(a.range[0], a.range[1], v, (nv) => setAddonPrice(a.id, nv))} />
</span>
<span>${a.range[1]}</span>
</div>
{(addonState[a.id].price < a.range[0] || addonState[a.id].price > a.range[1]) && (
<p className="text-xs text-gray-500 italic mb-1">Custom price — outside the standard range</p>
)}
<input type="range" min={a.range[0]} max={a.range[1]} step="1" value={addonState[a.id].price}
onChange={(e) => setAddonPrice(a.id, Number(e.target.value))} className="w-full" style={{ accentColor: "var(--accent)", touchAction: "pan-y" }} />
</div>
)}
</div>
))}
</div>
</section>
<section>
<div className="flex items-center justify-between mb-2">
<h2 className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--accent)" }}>Custom / extra</h2>
<button type="button" onClick={addCustomItem} className="text-xs border rounded-full px-2.5 py-1" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
+ Add item
</button>
</div>
{customItems.length === 0 ? (
<p className="text-xs text-gray-400">Add a one-off service not covered above.</p>
) : (
<div className="space-y-2">
{customItems.map((c) => (
<div key={c.id} className="flex items-center gap-2">
<input type="text" value={c.label} onChange={(e) => updateCustomItem(c.id, "label", e.target.value)}
placeholder="Service name" className="flex-1 min-w-0 border border-gray-300 rounded-md px-2 py-1.5 text-sm" />
<span className="text-gray-400 text-sm">$</span>
<input type="number" min="0" step="1" value={c.price}
onChange={(e) => updateCustomItem(c.id, "price", Math.max(0, Math.round(Number(e.target.value) || 0)))}
className="w-20 border border-gray-300 rounded-md px-2 py-1.5 text-sm" />
<button type="button" onClick={() => removeCustomItem(c.id)} className="text-gray-400 shrink-0" aria-label="Remove custom item">
<Trash2 size={15} />
</button>
</div>
))}
</div>
)}
</section>
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>Estimate summary</h2>
<div className="border border-gray-200 rounded-lg p-4 font-mono bg-white">
<div className="text-center border-b border-dashed border-gray-300 pb-2 mb-2">
<p className="font-semibold tracking-wide text-gray-900">R-DUB'S LAWN CARE</p>
<p className="text-xs text-gray-500">Battle Creek, MI</p>
<p className="text-xs text-gray-400 mt-1">{new Date().toLocaleDateString()}</p>
{customerName.trim() && <p className="text-xs text-gray-600 mt-1">Customer: {customerName.trim()}</p>}
{customerAddress.trim() && <p className="text-xs text-gray-600">{customerAddress.trim()}</p>}
</div>
{lineItems.length === 0 && <p className="text-sm text-gray-400 text-center py-3">No services selected yet.</p>}
{lineItems.map((li, idx) => (
<div key={idx} className="flex items-start justify-between gap-3 text-sm py-1">
<span className="text-gray-700">{li.label}</span>
<span className="text-gray-900 whitespace-nowrap">${li.price}</span>
</div>
))}
{lineItems.length > 0 && (
<div className="border-t border-dashed border-gray-300 mt-2 pt-2 flex items-center justify-between">
<span className="font-semibold text-gray-900">TOTAL</span>
<span className="font-semibold text-base" style={{ color: "var(--accent)" }}>${total}</span>
</div>
)}
{showSavings && lineItems.length > 0 && (
<p className="text-xs text-emerald-700 text-center mt-2">Recurring savings: ~${currentTier.savings}/visit</p>
)}
{lineItems.length > 0 && <p className="text-xs text-gray-400 text-center mt-3">Thank you for choosing R-DUB's!</p>}
</div>
</section>
<section>
<button onClick={resetOverridePin} className="text-xs text-gray-400 underline">
{overridePin ? "Reset override password" : "No override password set yet"}
</button>
</section>
<p className="text-center text-xs pt-2" style={{ color: "var(--text-faint)" }}>{motivationLine}</p>
</div>
<div className="fixed left-0 right-0 bg-white border-t border-gray-200" style={{ bottom: BOTTOM_TAB_HEIGHT }}>
<div className="max-w-md mx-auto px-4 py-3">
<div className="flex items-center gap-2 mb-2">
<div className="flex-1 min-w-0">
<p className="text-xs text-gray-500">Total estimate</p>
<p className="text-2xl font-medium" style={{ color: "var(--accent)" }}>${total}</p>
{storageError && <p className="text-xs text-red-600">{storageError}</p>}
</div>
<button onClick={copyEstimate} className="border border-gray-300 rounded-lg px-2.5 py-2 text-xs text-gray-700 shrink-0">
{copyFeedback || "Copy Estimate"}
</button>
<button onClick={handleMarkCompleted} disabled={saving} className="rounded-lg px-2.5 py-2 text-xs text-white shrink-0"
style={{ backgroundColor: "var(--success)", opacity: saving ? 0.7 : 1 }}>
{completeLabel || "One & Done"}
</button>
</div>
<div className="flex items-center gap-2">
<button onClick={() => handleSave()} disabled={saving} className="flex-1 rounded-lg py-2 text-sm border"
style={{ borderColor: "var(--border-strong)", color: "var(--text)", opacity: saving ? 0.7 : 1 }}>
{saving ? "Saving…" : saveLabel ? saveLabel : (editingTimestamp || savedTimestamp) ? "Update" : "Save (not sure yet)"}
</button>
<button onClick={handleAcceptJob} disabled={saving} className="flex-1 rounded-lg py-2 text-sm text-white"
style={{ backgroundColor: ACCENT_HEX, opacity: saving ? 0.7 : 1 }}>
{saving ? "Saving…" : acceptLabel || "Accept job"}
</button>
</div>
</div>
</div>
{pinModalOpen && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
<div className="bg-white rounded-lg p-4 w-full max-w-xs shadow-lg">
<p className="text-sm font-medium text-gray-900 mb-1">
{pinModalMode === "create" ? "Set an override password" : "Enter override password"}
</p>
<p className="text-xs text-gray-500 mb-3">
{pinModalMode === "create"
? "This price is outside the standard range. Set a password to authorize overrides going forward."
: "This price is outside the standard range. Enter the override password to authorize it."}
</p>
<input type="password" value={pinInput}
onChange={(e) => { setPinInput(e.target.value); setPinError(""); }}
onKeyDown={(e) => { if (e.key === "Enter") submitPinModal(); }}
autoFocus className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-1"
placeholder={pinModalMode === "create" ? "Create password" : "Password"} />
{pinError && <p className="text-xs text-red-600 mb-2">{pinError}</p>}
<div className="flex gap-2 mt-3">
<button onClick={closePinModal} className="flex-1 border border-gray-300 rounded-lg py-2 text-sm text-gray-700">Cancel</button>
<button onClick={submitPinModal} className="flex-1 rounded-lg py-2 text-sm text-white" style={{ backgroundColor: ACCENT_HEX }}>
{pinModalMode === "create" ? "Set & apply" : "Authorize"}
</button>
</div>
</div>
</div>
)}
</div>
);
}
function BusinessView({ onEditRequest, onPrefillEstimate, userRole }) {
const [motivationLine] = useState(() => randomMotivationLine());
const [history, setHistory] = useState([]);
const [historyLoading, setHistoryLoading] = useState(true);
const [showHistory, setShowHistory] = useState(false);
const [expandedId, setExpandedId] = useState(null);
const [nextVisitRequests, setNextVisitRequests] = useState([]);
const [nextVisitRequestsLoading, setNextVisitRequestsLoading] = useState(true);
const [nextVisitsByPhone, setNextVisitsByPhone] = useState({});
const [availability, setAvailability] = useState(defaultAvailability());
const [availabilityLoading, setAvailabilityLoading] = useState(true);
const [showAvailabilityEditor, setShowAvailabilityEditor] = useState(false);
const [availabilitySaving, setAvailabilitySaving] = useState(false);
const [availabilitySavedFeedback, setAvailabilitySavedFeedback] = useState(false);
const [crewRoster, setCrewRoster] = useState([]);
const [bookings, setBookings] = useState([]);
const [bookingsLoading, setBookingsLoading] = useState(true);
const [showSchedule, setShowSchedule] = useState(false);
const [activeTimer, setActiveTimer] = useState(null);
const [completionToast, setCompletionToast] = useState("");
const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
const [scheduleJob, setScheduleJob] = useState(null);
const [scheduleChosenSlotKey, setScheduleChosenSlotKey] = useState(null);
const [scheduleAddonSelections, setScheduleAddonSelections] = useState({});
const [scheduleAddonPrices, setScheduleAddonPrices] = useState({});
const [scheduleDeadlineHours, setScheduleDeadlineHours] = useState(DEFAULT_DEADLINE_HOURS);
const [scheduleSaving, setScheduleSaving] = useState(false);
const [scheduleConfirmedInfo, setScheduleConfirmedInfo] = useState(null);
const [reminderCopyFeedback, setReminderCopyFeedback] = useState("");
const [reminderCopied, setReminderCopied] = useState(false);
const [bookingDetailOpen, setBookingDetailOpen] = useState(false);
const [bookingDetailLoading, setBookingDetailLoading] = useState(false);
const [bookingDetail, setBookingDetail] = useState(null);
const [confirmClearBooking, setConfirmClearBooking] = useState(null);
const [rescheduleDayOpen, setRescheduleDayOpen] = useState(false);
const [rescheduleNewDate, setRescheduleNewDate] = useState("");
const [rescheduling, setRescheduling] = useState(false);
const [rescheduleResult, setRescheduleResult] = useState(null);
const [rescheduleCopyFeedback, setRescheduleCopyFeedback] = useState({});
const [scheduleDuplicateWarning, setScheduleDuplicateWarning] = useState(null);
const [todayOrder, setTodayOrder] = useState([]);
const [todayOrderLoaded, setTodayOrderLoaded] = useState(false);
const [pendingDetailOpen, setPendingDetailOpen] = useState(false);
const [pendingDetailItem, setPendingDetailItem] = useState(null);
const [photoUploading, setPhotoUploading] = useState(null);
const [completingPaidChecked, setCompletingPaidChecked] = useState(true);
const [photoError, setPhotoError] = useState("");
const [photoFlow, setPhotoFlow] = useState(null);
const [viewingPhotoTimestamp, setViewingPhotoTimestamp] = useState(null);
const [viewingPhotoKind, setViewingPhotoKind] = useState(null);
const [viewingPhotoDataUri, setViewingPhotoDataUri] = useState(null);
const [nowTick, setNowTick] = useState(Date.now());
const [timeLogs, setTimeLogs] = useState([]);
const [timeLogsLoading, setTimeLogsLoading] = useState(true);
const [showTimeLog, setShowTimeLog] = useState(false);
const [showDeclined, setShowDeclined] = useState(false);
useEffect(() => {
loadHistory();
loadNextVisitRequests();
refreshAvailability();
refreshBookings();
loadActiveTimer();
if (userRole === "owner") {
loadTimeLogs();
} else {
setTimeLogs([]);
setTimeLogsLoading(false);
}
loadTodayOrder();
loadCrewRoster();
}, []);
async function loadCrewRoster() {
const table = await loadTable(TABLE_KEYS.crewSchedules, false);
setCrewRoster(Object.values(table));
}
async function assignJob(booking, username) {
const updated = { ...booking, assignedTo: username || null };
setBookings((prev) => prev.map((b) => (b.key === booking.key ? updated : b)));
await setTableRecord(TABLE_KEYS.bookings, true, booking.key, updated);
}
async function loadTodayOrder() {
const todayKeyISO = new Date().toISOString().slice(0, 10);
try {
const r = await localStore.get(`today-order:${todayKeyISO}`, false);
if (r && r.value) setTodayOrder(JSON.parse(r.value));
} catch (e) {
} finally {
setTodayOrderLoaded(true);
}
}
async function saveTodayOrder(newOrder) {
const todayKeyISO = new Date().toISOString().slice(0, 10);
setTodayOrder(newOrder);
try {
await localStore.set(`today-order:${todayKeyISO}`, JSON.stringify(newOrder), false);
} catch (e) {}
}
function moveTodayItem(orderedList, key, direction) {
const keys = orderedList.map((t) => t.key);
const idx = keys.indexOf(key);
const swapWith = idx + direction;
if (idx < 0 || swapWith < 0 || swapWith >= keys.length) return;
const next = keys.slice();
[next[idx], next[swapWith]] = [next[swapWith], next[idx]];
saveTodayOrder(next);
}
useEffect(() => {
if (!activeTimer) return;
const id = setInterval(() => setNowTick(Date.now()), 1000);
return () => clearInterval(id);
}, [activeTimer]);
async function loadActiveTimer() {
try {
const r = await localStore.get("active-timer", false);
if (r && r.value) setActiveTimer(JSON.parse(r.value));
} catch (e) {}
}
async function startTimer(job) {
if (!job.hasBeforePhoto) {
setCompletionToast("Before photo required — document the property before starting work.");
setTimeout(() => setCompletionToast(""), 5000);
return false;
}
const t = {
jobTimestamp: job.timestamp, customerName: job.customerName || "",
address: job.address || "", startedAt: Date.now(),
};
try {
await localStore.set("active-timer", JSON.stringify(t), false);
setActiveTimer(t);
setNowTick(Date.now());
return true;
} catch (e) {
setCompletionToast("Couldn't start the job timer — try again.");
setTimeout(() => setCompletionToast(""), 4000);
return false;
}
}
async function loadTimeLogs() {
setTimeLogsLoading(true);
try {
const table = await loadTable(TABLE_KEYS.timeLogs, false);
const items = Object.values(table);
items.sort((a, b) => b.timestamp - a.timestamp);
setTimeLogs(items.slice(0, 50));
} catch (e) {
setTimeLogs([]);
} finally {
setTimeLogsLoading(false);
}
}
async function deleteTimeLog(entry) {
try {
await deleteTableRecord(TABLE_KEYS.timeLogs, false, String(entry.timestamp));
setTimeLogs((prev) => prev.filter((t) => t.timestamp !== entry.timestamp));
} catch (e) {}
}
function formatDuration(ms) {
const totalSec = Math.max(0, Math.floor(ms / 1000));
const h = Math.floor(totalSec / 3600);
const m = Math.floor((totalSec % 3600) / 60);
const s = totalSec % 60;
return h > 0 ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}` : `${m}:${String(s).padStart(2, "0")}`;
}
async function loadHistory() {
setHistoryLoading(true);
try {
const table = await loadTable(TABLE_KEYS.estimates, false);
const items = Object.values(table);
items.sort((a, b) => b.timestamp - a.timestamp);
setHistory(items.slice(0, 30));
} catch (e) {
setHistory([]);
} finally {
setHistoryLoading(false);
}
}
async function cancelLinkedBooking(jobTimestamp) {
const bk = bookings.find((b) => b.jobTimestamp === jobTimestamp);
if (bk) {
try {
await deleteTableRecord(TABLE_KEYS.bookings, true, bk.key);
setBookings((prev) => prev.filter((b) => b.key !== bk.key));
} catch (e) {}
if (bk.phone) {
try {
await deleteTableRecord(TABLE_KEYS.appointments, true, `${bk.phone}:${bk.startMs}`);
} catch (e) {}
}
}
}
async function deleteEstimateItem(item) {
try {
await deleteTableRecord(TABLE_KEYS.estimates, false, String(item.timestamp));
setHistory((prev) => prev.filter((h) => h.timestamp !== item.timestamp));
await cancelLinkedBooking(item.timestamp);
} catch (e) {}
}
function openPendingDetail(item) {
setPendingDetailItem(item);
setPendingDetailOpen(true);
setPhotoError("");
setCompletingPaidChecked(true);
}
function closePendingDetail() {
setPendingDetailOpen(false);
setPendingDetailItem(null);
setPhotoError("");
}
async function handlePhotoUpload(item, file, kind) {
if (!file) return;
const flagField = kind === "before" ? "hasBeforePhoto" : "hasPhoto";
setPhotoError("");
setPhotoUploading(`${kind}:${item.timestamp}`);
try {
const dataUri = await compressImageFile(file, 1200, 0.75);
if (dataUri.length > 4.5 * 1024 * 1024) {
setPhotoError("That photo is too large even compressed — try a different one.");
return;
}
// Photos live in cloud storage now (visible from every device). The server marks
// the job as "photo taken" only after the photo is actually stored, so a failed
// upload can never count as a completed before-photo.
const res = await fetch(`${API_BASE}/api/photos/${item.timestamp}/${kind}`, {
method: "POST",
headers: authHeaders({ "Content-Type": "application/json" }),
body: JSON.stringify({ dataUri }),
});
if (!res.ok) {
const err = await res.json().catch(() => ({}));
setPhotoError(err.error || "Couldn't save that photo — check your signal and try again.");
return;
}
const updated = { ...item, [flagField]: true };
setHistory((prev) => prev.map((h) => (h.timestamp === item.timestamp ? updated : h)));
setPendingDetailItem((prev) => (prev && prev.timestamp === item.timestamp ? updated : prev));
} catch (e) {
setPhotoError("Couldn't save that photo — check your signal and try again.");
} finally {
setPhotoUploading(null);
}
}
async function viewPhoto(item, kind) {
const legacyKey = kind === "before" ? `photo-before:${item.timestamp}` : `photo:${item.timestamp}`;
setViewingPhotoTimestamp(item.timestamp);
setViewingPhotoKind(kind);
setViewingPhotoDataUri(null);
try {
const res = await fetch(`${API_BASE}/api/photos/${item.timestamp}/${kind}`, { headers: authHeaders() });
if (res.ok) {
setViewingPhotoDataUri(URL.createObjectURL(await res.blob()));
return;
}
// Not in the cloud — may be an older photo saved only on this phone. Show it,
// then move it to cloud storage so every device can see it from now on.
const r = await localStore.get(legacyKey, false);
if (r && r.value) {
setViewingPhotoDataUri(r.value);
const up = await fetch(`${API_BASE}/api/photos/${item.timestamp}/${kind}`, {
method: "POST",
headers: authHeaders({ "Content-Type": "application/json" }),
body: JSON.stringify({ dataUri: r.value }),
});
if (up.ok) await localStore.delete(legacyKey, false);
}
} catch (e) {}
}
async function deletePhoto(item, kind) {
if (kind === "before" && userRole !== "owner") {
setPhotoError("Before-service photos are required accountability records and can't be deleted from the visit. Ask the owner if this one needs to be replaced.");
return;
}
const legacyKey = kind === "before" ? `photo-before:${item.timestamp}` : `photo:${item.timestamp}`;
const flagField = kind === "before" ? "hasBeforePhoto" : "hasPhoto";
try {
const res = await fetch(`${API_BASE}/api/photos/${item.timestamp}/${kind}`, { method: "DELETE", headers: authHeaders() });
if (!res.ok) {
const err = await res.json().catch(() => ({}));
setPhotoError(err.error || "Couldn't remove that photo — try again.");
return;
}
await localStore.delete(legacyKey, false);
const updated = { ...item, [flagField]: false };
setHistory((prev) => prev.map((h) => (h.timestamp === item.timestamp ? updated : h)));
setPendingDetailItem((prev) => (prev && prev.timestamp === item.timestamp ? updated : prev));
} catch (e) {
setPhotoError("Couldn't remove that photo — try again.");
return;
}
setViewingPhotoTimestamp(null);
setViewingPhotoKind(null);
setViewingPhotoDataUri(null);
}
async function setPaymentStatus(item, paid) {
try {
const updated = await updateJobPaymentStatus(item, paid);
setHistory((prev) => prev.map((h) => (h.timestamp === item.timestamp ? updated : h)));
setPendingDetailItem((prev) => (prev && prev.timestamp === item.timestamp ? updated : prev));
} catch (e) {}
}
async function markComplete(item, paidNow) {
if (!item.hasBeforePhoto) {
setCompletionToast("Can't complete this job — the required before-service photo is missing.");
setTimeout(() => setCompletionToast(""), 5000);
return;
}
const timerRunningHere = activeTimer && activeTimer.jobTimestamp === item.timestamp;
let loggedMinutes = null;
if (timerRunningHere) {
const endedAt = Date.now();
const durationMin = Math.max(1, Math.round((endedAt - activeTimer.startedAt) / 60000));
const logTimestamp = Date.now();
const entry = {
timestamp: logTimestamp, jobTimestamp: activeTimer.jobTimestamp,
customerName: activeTimer.customerName, address: activeTimer.address,
startedAt: activeTimer.startedAt, endedAt, durationMin,
};
try {
await setTableRecord(TABLE_KEYS.timeLogs, false, String(logTimestamp), entry);
await localStore.delete("active-timer", false);
setActiveTimer(null);
setTimeLogs((prev) => [entry, ...prev]);
loggedMinutes = durationMin;
} catch (e) {}
}
const updated = { ...item, status: "completed", paymentStatus: paidNow ? "paid" : "unpaid", paidAt: paidNow ? Date.now() : null };
try {
await setTableRecord(TABLE_KEYS.estimates, false, String(item.timestamp), updated);
setHistory((prev) => prev.map((h) => (h.timestamp === item.timestamp ? updated : h)));
await cancelLinkedBooking(item.timestamp);
} catch (e) {}
setCompletionToast(loggedMinutes != null ? `Job completed — ${loggedMinutes} min logged` : "Job marked complete");
setTimeout(() => setCompletionToast(""), 4000);
if (updated.phone) {
let alreadyHasUpcoming = false;
try {
const apptTable = await loadTable(TABLE_KEYS.appointments, true);
alreadyHasUpcoming = Object.values(apptTable).some(
(data) => data.phone === updated.phone && data.confirmed && data.startMs > Date.now()
);
} catch (e) {}
if (!alreadyHasUpcoming) {
setScheduleJob(updated);
setScheduleChosenSlotKey(null);
setScheduleDeadlineHours(DEFAULT_DEADLINE_HOURS);
setScheduleAddonSelections({});
setScheduleAddonPrices({});
setScheduleConfirmedInfo(null);
setScheduleDuplicateWarning(null);
setReminderCopyFeedback("");
setReminderCopied(false);
setScheduleModalOpen(true);
} else {
setCompletionToast("Job marked complete — already has an appointment on the books");
setTimeout(() => setCompletionToast(""), 4000);
}
}
}
async function markAgreed(item) {
const updated = { ...item, status: "confirmed" };
try {
await setTableRecord(TABLE_KEYS.estimates, false, String(item.timestamp), updated);
setHistory((prev) => prev.map((h) => (h.timestamp === item.timestamp ? updated : h)));
} catch (e) {}
}
async function declineJob(item) {
const updated = { ...item, status: "declined" };
try {
await setTableRecord(TABLE_KEYS.estimates, false, String(item.timestamp), updated);
setHistory((prev) => prev.map((h) => (h.timestamp === item.timestamp ? updated : h)));
await cancelLinkedBooking(item.timestamp);
} catch (e) {}
}
async function loadNextVisitRequests() {
setNextVisitRequestsLoading(true);
try {
const apptTable = await loadTable(TABLE_KEYS.appointments, true);
const items = [];
const byKey = {};
Object.keys(apptTable).forEach((recordId) => {
const data = apptTable[recordId];
if (data.phone && data.startMs) byKey[`${data.phone}:${data.startMs}`] = data;
const hasAddons = data.addonSelections && Object.values(data.addonSelections).some(Boolean);
const hasNotes = !!(data.notes && data.notes.trim());
if (data.confirmed && data.startMs > Date.now() && (hasAddons || hasNotes)) {
items.push({ key: recordId, ...data });
}
});
items.sort((a, b) => a.startMs - b.startMs);
setNextVisitRequests(items);
setNextVisitsByPhone(byKey);
} catch (e) {
setNextVisitRequests([]);
} finally {
setNextVisitRequestsLoading(false);
}
}
async function refreshAvailability() {
setAvailabilityLoading(true);
setAvailability(await fetchAvailability());
setAvailabilityLoading(false);
}
async function saveAvailability() {
setAvailabilitySaving(true);
try {
await fetch(`${API_BASE}/api/availability`, {
method: "POST",
headers: authHeaders({ "Content-Type": "application/json" }),
body: JSON.stringify({ template: availability }),
});
setAvailabilitySavedFeedback(true);
setTimeout(() => setAvailabilitySavedFeedback(false), 2000);
} catch (e) {
} finally {
setAvailabilitySaving(false);
}
}
function toggleDayEnabled(day) {
setAvailability((prev) => ({
...prev,
[day]: { ...prev[day], enabled: !(prev[day] && prev[day].enabled !== false) },
}));
}
function setDayTime(day, field, value) {
setAvailability((prev) => ({ ...prev, [day]: { ...prev[day], [field]: value } }));
}
function applyDayToRange(sourceDay, targetDays) {
setAvailability((prev) => {
const src = prev[sourceDay] || { enabled: true, start: "08:00", end: "14:00" };
const next = { ...prev };
targetDays.forEach((d) => {
next[d] = { ...src };
});
return next;
});
}
async function refreshBookings() {
setBookingsLoading(true);
setBookings(await fetchBookings());
setBookingsLoading(false);
}
async function deleteBooking(key) {
const bk = bookings.find((b) => b.key === key);
try {
await deleteTableRecord(TABLE_KEYS.bookings, true, key);
setBookings((prev) => prev.filter((b) => b.key !== key));
} catch (e) {}
if (bk && bk.phone) {
try {
await deleteTableRecord(TABLE_KEYS.appointments, true, `${bk.phone}:${bk.startMs}`);
} catch (e) {}
}
}
async function confirmScheduleNext(force) {
if (!scheduleJob || !scheduleChosenSlotKey) return;
const phoneKey = scheduleJob.phone;
const slot = modalPickerSlots.find((s) => s.key === scheduleChosenSlotKey);
if (!slot) return;
if (!force) {
const existingSameDay = bookings.find((b) => b.phone === phoneKey && b.dateISO === slot.dateISO);
if (existingSameDay) {
setScheduleDuplicateWarning({ existing: existingSameDay });
return;
}
}
setScheduleSaving(true);
try {
{
await setTableRecord(TABLE_KEYS.bookings, true, `${slot.dateISO}:${slot.slotId}`, {
dateISO: slot.dateISO, slotId: slot.slotId, slotLabel: slot.slotLabel, startMs: slot.startMs,
phone: phoneKey, customerName: scheduleJob.customerName || "", status: "accepted",
jobTimestamp: scheduleJob.timestamp, createdAt: Date.now(),
});
const nv = {
phone: phoneKey, customerName: scheduleJob.customerName || "",
confirmed: true, dateISO: slot.dateISO, slotId: slot.slotId, slotLabel: slot.slotLabel,
startMs: slot.startMs, deadline: slot.startMs - scheduleDeadlineHours * 3600 * 1000, deadlineHours: scheduleDeadlineHours,
addonSelections: scheduleAddonSelections, addonPrices: scheduleAddonPrices, notes: "", feeApplied: false, feeAmount: 0, updatedAt: Date.now(),
};
await setTableRecord(TABLE_KEYS.appointments, true, `${phoneKey}:${slot.startMs}`, nv);
await refreshBookings();
setScheduleDuplicateWarning(null);
let contactPreference = null;
try {
const profilesTable = await loadTable(TABLE_KEYS.profiles, true);
if (profilesTable[phoneKey]) contactPreference = profilesTable[phoneKey].contactPreference || null;
} catch (e) {}
setScheduleConfirmedInfo({
customerName: scheduleJob.customerName || "",
phone: phoneKey,
address: scheduleJob.address || "",
dateISO: slot.dateISO,
slotLabel: slot.slotLabel,
contactPreference,
});
setReminderCopied(false);
}
} catch (e) {
} finally {
setScheduleSaving(false);
}
}
function buildRescheduleText(name, dateISO, slotLabel) {
const lines = [];
lines.push(name ? `Hi ${name}!` : "Hi!");
lines.push(`Quick heads up — we had to move your lawn visit because of the weather.`);
lines.push(`Your new appointment: ${formatSlotDate(dateISO)} · ${slotLabel}`);
lines.push("");
lines.push("Sorry for the shuffle — text or call if that new time doesn't work.");
return lines.join("\n");
}
async function copyReminder() {
if (!scheduleConfirmedInfo) return;
const text = buildReminderText(scheduleConfirmedInfo);
try {
await navigator.clipboard.writeText(text);
setReminderCopyFeedback("Copied!");
setReminderCopied(true);
} catch (e) {
try {
const ta = document.createElement("textarea");
ta.value = text;
ta.style.position = "fixed";
ta.style.opacity = "0";
document.body.appendChild(ta);
ta.focus();
ta.select();
document.execCommand("copy");
document.body.removeChild(ta);
setReminderCopyFeedback("Copied!");
setReminderCopied(true);
} catch (e2) {
setReminderCopyFeedback("Couldn't copy");
}
}
setTimeout(() => setReminderCopyFeedback(""), 2000);
}
function closeScheduleModal() {
setScheduleModalOpen(false);
setScheduleJob(null);
setScheduleConfirmedInfo(null);
setReminderCopyFeedback("");
setReminderCopied(false);
}
function skipScheduleNext() {
closeScheduleModal();
}
async function acceptBooking(booking) {
const updated = { ...booking, status: "accepted" };
try {
await setTableRecord(TABLE_KEYS.bookings, true, booking.key, updated);
setBookings((prev) => prev.map((b) => (b.key === booking.key ? updated : b)));
setBookingDetail((prev) => (prev && prev.booking.key === booking.key ? { ...prev, booking: updated } : prev));
} catch (e) {}
}
async function handleTodayClick(t) {
if (t.job) {
openPendingDetail(t.job);
return;
}
if (!onPrefillEstimate) return;
let address = "";
try {
const profilesTable = await loadTable(TABLE_KEYS.profiles, true);
if (profilesTable[t.phone]) address = profilesTable[t.phone].address || "";
} catch (e) {}
const appt = t.appointment || {};
onPrefillEstimate({
name: t.customerName === "Unnamed" ? "" : t.customerName,
phone: t.phone,
address,
mowingEnabled: !!appt.mowingEnabled,
mowingType: appt.mowingType || "recurring",
lotTierId: appt.lotTierId || "medium",
mowingPrice: appt.mowingPrice || 0,
addonSelections: appt.addonSelections || {},
addonPrices: appt.addonPrices || {},
});
}
async function openBookingDetail(booking) {
setBookingDetailOpen(true);
setBookingDetailLoading(true);
setBookingDetail({ booking, nextVisit: null, baseMowingLine: null });
let nv = null;
try {
const apptTable = await loadTable(TABLE_KEYS.appointments, true);
nv = apptTable[`${booking.phone}:${booking.startMs}`] || null;
} catch (e) {}
let baseMowingLine = null;
try {
const estimatesTable = await loadTable(TABLE_KEYS.estimates, false);
const items = Object.values(estimatesTable).filter((d) => d.phone === booking.phone && d.status === "completed");
items.sort((a, b) => b.timestamp - a.timestamp);
if (items[0] && items[0].lines) {
baseMowingLine = items[0].lines.find((li) => /mowing/i.test(li.label)) || null;
}
} catch (e) {}
setBookingDetail({ booking, nextVisit: nv, baseMowingLine });
setBookingDetailLoading(false);
}
function closeBookingDetail() {
setBookingDetailOpen(false);
setBookingDetail(null);
}
const bookedSet = {};
bookings.forEach((b) => {
bookedSet[`${b.dateISO}:${b.slotId}`] = true;
});
const scheduleSlots = generateUpcomingSlots(availability, bookedSet, 14);
const scheduleSlotsByDay = groupSlotsByDate(scheduleSlots);
const modalPickerSlots = generateUpcomingSlots(availability, bookedSet, 14).filter((s) => !s.booked);
const modalPickerSlotsByDay = groupSlotsByDate(modalPickerSlots);
const upcomingBookings = bookings.filter((b) => b.startMs > Date.now());
const standaloneBookings = upcomingBookings.filter((b) => !b.jobTimestamp);
function linkedJob(booking) {
return booking.jobTimestamp ? history.find((h) => h.timestamp === booking.jobTimestamp) : null;
}
function bookingForJob(jobTimestamp) {
return upcomingBookings.find((b) => b.jobTimestamp === jobTimestamp) || null;
}
const needsAttentionCount = nextVisitRequests.length;
const pendingAgreementJobs = history
.filter((h) => h.status !== "completed" && h.status !== "confirmed" && h.status !== "declined")
.slice()
.sort((a, b) => a.timestamp - b.timestamp);
const confirmedJobs = history.filter((h) => h.status === "confirmed");
const completedJobs = history.filter((h) => h.status === "completed");
const declinedJobs = history.filter((h) => h.status === "declined");
const todayStart = new Date();
todayStart.setHours(0, 0, 0, 0);
const todayISO = todayStart.toISOString().slice(0, 10);
const todaysJobsByTime = bookings
.filter((b) => b.dateISO === todayISO)
.sort((a, b) => a.startMs - b.startMs)
.map((b) => {
const job = linkedJob(b);
const appointment = !job && b.phone ? nextVisitsByPhone[`${b.phone}:${b.startMs}`] : null;
return {
key: b.key,
booking: b,
job,
appointment,
customerName: (job && job.customerName) || b.customerName || "Unnamed",
phone: (job && job.phone) || b.phone || "",
address: job ? job.address : "",
};
});
const todaysJobs = todayOrderLoaded && todayOrder.length > 0
? todaysJobsByTime.slice().sort((a, b) => {
const ia = todayOrder.indexOf(a.key);
const ib = todayOrder.indexOf(b.key);
if (ia === -1 && ib === -1) return 0;
if (ia === -1) return 1;
if (ib === -1) return -1;
return ia - ib;
})
: todaysJobsByTime;
async function rescheduleToday(newDateISO) {
setRescheduling(true);
setRescheduleResult(null);
try {
const avail = await fetchAvailability();
const freshBookings = await fetchBookings();
const allSlots = generateUpcomingSlots(avail, {}, 90);
const bookedSet = new Set(freshBookings.map((b) => `${b.dateISO}:${b.slotId}`));
function findBestSlot(oldSlotId) {
let candidate = allSlots.find((s) => s.dateISO === newDateISO && s.slotId === oldSlotId && !bookedSet.has(s.key));
if (candidate) return candidate;
candidate = allSlots.find((s) => s.dateISO === newDateISO && !bookedSet.has(s.key));
if (candidate) return candidate;
const base = new Date(newDateISO + "T00:00:00");
for (let i = 1; i <= 7; i++) {
const d = new Date(base);
d.setDate(d.getDate() + i);
const dISO = d.toISOString().slice(0, 10);
candidate = allSlots.find((s) => s.dateISO === dISO && !bookedSet.has(s.key));
if (candidate) return candidate;
}
return null;
}
const moved = [];
const skipped = [];
const moves = [];
for (const t of todaysJobs) {
const oldSlotId = t.booking.slotId;
const newSlot = findBestSlot(oldSlotId);
if (!newSlot) {
skipped.push({ name: t.customerName, reason: "no open slot within a week of the new date — check your availability" });
continue;
}
const isExactMatch = newSlot.dateISO === newDateISO && newSlot.slotId === oldSlotId;
const newBookingData = { ...t.booking, id: `${newSlot.dateISO}:${newSlot.slotId}`, dateISO: newSlot.dateISO, slotId: newSlot.slotId, slotLabel: newSlot.slotLabel, startMs: newSlot.startMs };
delete newBookingData.key;
const move = { oldBookingKey: t.booking.key, newBooking: newBookingData };
if (t.appointment) {
move.oldApptId = `${t.phone}:${t.booking.startMs}`;
move.newAppt = { ...t.appointment, id: `${t.phone}:${newSlot.startMs}`, dateISO: newSlot.dateISO, slotId: newSlot.slotId, slotLabel: newSlot.slotLabel, startMs: newSlot.startMs, updatedAt: Date.now() };
}
moves.push(move);
bookedSet.add(newSlot.key);
moved.push({ name: t.customerName, phone: t.phone, dateISO: newSlot.dateISO, slotLabel: newSlot.slotLabel, isExactMatch });
}
if (moves.length > 0) {
const res = await fetch(`${API_BASE}/api/bookings/bulk-reschedule`, {
method: "POST",
headers: authHeaders({ "Content-Type": "application/json" }),
body: JSON.stringify({ moves }),
});
if (!res.ok) {
const data = await res.json().catch(() => ({}));
throw new Error(data.error || "Couldn't reschedule the day.");
}
}
setBookings(await fetchBookings());
await loadNextVisitRequests();
setRescheduleResult({ moved, skipped, newDateISO });
} catch (e) {
setRescheduleResult({ moved: [], skipped: todaysJobs.map((t) => ({ name: t.customerName, reason: "couldn't load availability" })), newDateISO });
} finally {
setRescheduling(false);
}
}
const timeLogAverages = {};
timeLogs.forEach((t) => {
const key = t.customerName || "Unnamed";
if (!timeLogAverages[key]) timeLogAverages[key] = { total: 0, count: 0 };
timeLogAverages[key].total += t.durationMin;
timeLogAverages[key].count += 1;
});
const timeLogAverageList = Object.keys(timeLogAverages)
.filter((k) => timeLogAverages[k].count >= 2)
.map((k) => ({ name: k, avg: Math.round(timeLogAverages[k].total / timeLogAverages[k].count), count: timeLogAverages[k].count }));
return (
<div style={{ paddingBottom: 32 + BOTTOM_TAB_HEIGHT }}>
<div className="px-4 pt-5 pb-4 border-b border-gray-200 flex items-center gap-3">
<Badge />
<div>
<p className="text-base font-medium text-gray-900">R-DUB's Lawn Care</p>
<p className="text-sm" style={{ color: "var(--accent)" }}>Jobs</p>
</div>
</div>
<div className="px-4 py-4 space-y-6">
{completionToast && (
<div className="rounded-lg px-3 py-2 text-sm text-white text-center" style={{ backgroundColor: "var(--success)" }}>
{completionToast}
</div>
)}
<section>
<div className="flex items-center justify-between mb-2">
<h2 className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
Today{todaysJobs.length > 0 ? ` (${todaysJobs.length})` : ""}
</h2>
{todaysJobs.length > 0 && (userRole === "owner" || userRole === "manager") && (
<button onClick={() => { setRescheduleNewDate(""); setRescheduleResult(null); setRescheduleCopyFeedback({}); setRescheduleDayOpen(true); }}
className="text-xs rounded-full px-3 py-1 border" style={{ borderColor: "var(--warn)", color: "var(--warn)" }}>
⛈ Reschedule today
</button>
)}
</div>
{todaysJobs.length === 0 ? (
<p className="text-xs text-gray-400">No jobs scheduled today.</p>
) : (
<div className="space-y-2">
{todaysJobs.length > 1 && (
<p className="text-xs text-gray-400">Use the arrows to put these in your driving order.</p>
)}
{todaysJobs.map((t, idx) => (
<div key={t.key} onClick={() => handleTodayClick(t)}
className="border rounded-lg p-3 text-sm cursor-pointer flex gap-2" style={{ borderColor: "var(--accent)" }}>
{todaysJobs.length > 1 && (
<div className="flex flex-col gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
<button onClick={() => moveTodayItem(todaysJobs, t.key, -1)} disabled={idx === 0}
aria-label="Move up" className="text-gray-400" style={{ opacity: idx === 0 ? 0.3 : 1 }}>
<ArrowUp size={14} />
</button>
<button onClick={() => moveTodayItem(todaysJobs, t.key, 1)} disabled={idx === todaysJobs.length - 1}
aria-label="Move down" className="text-gray-400" style={{ opacity: idx === todaysJobs.length - 1 ? 0.3 : 1 }}>
<ArrowDown size={14} />
</button>
</div>
)}
<div className="flex-1">
<div className="flex items-start justify-between gap-2">
<div>
<p className="text-gray-900 font-medium">{t.customerName}</p>
{t.address && <p className="text-xs text-gray-500">{t.address}</p>}
{!t.job && <p className="text-xs mt-0.5" style={{ color: "var(--accent)" }}>Not yet a job — tap to create it</p>}
</div>
<span className="text-xs font-medium shrink-0" style={{ color: "var(--accent)" }}>{t.booking.slotLabel}</span>
</div>
<div className="flex items-center gap-3 mt-2" onClick={(e) => e.stopPropagation()}>
{t.phone && (
<>
<a href={`tel:${t.phone}`} className="text-xs underline" style={{ color: "var(--accent)" }}>Call</a>
<a href={`sms:${t.phone}`} className="text-xs underline" style={{ color: "var(--accent)" }}>Text</a>
</>
)}
{t.address && (
<a href={`https://maps.google.com/?q=${encodeURIComponent(t.address)}`} target="_blank" rel="noopener noreferrer"
className="text-xs underline" style={{ color: "var(--accent)" }}>
Directions
</a>
)}
</div>
<div className="mt-1.5" onClick={(e) => e.stopPropagation()}>
{userRole === "owner" ? (
<select value={t.booking.assignedTo || ""} onChange={(e) => assignJob(t.booking, e.target.value)}
className="text-xs border border-gray-300 rounded-full px-2 py-0.5 text-gray-600">
<option value="">Unassigned</option>
{crewRoster.map((p) => (
<option key={p.username} value={p.username}>{p.name || p.username}</option>
))}
</select>
) : (
t.booking.assignedTo && (
<span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--surface-alt)", color: "var(--text-muted)" }}>
Assigned: {(crewRoster.find((p) => p.username === t.booking.assignedTo) || {}).name || t.booking.assignedTo}
</span>
)
)}
</div>
</div>
</div>
))}
</div>
)}
</section>
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>
Current / Upcoming Jobs
</h2>
{needsAttentionCount > 0 && (
<div className="mb-3">
<p className="text-xs font-medium text-gray-500 mb-1.5">Requested changes for upcoming appointments ({needsAttentionCount})</p>
<div className="space-y-2">
{nextVisitRequests.map((r) => {
const chosen = ADDONS.filter((a) => r.addonSelections && r.addonSelections[a.id]);
return (
<div key={r.key} className="border rounded-lg p-3 text-sm" style={{ borderColor: "var(--accent)", backgroundColor: "var(--surface-alt)" }}>
<p className="text-gray-900 font-medium">{r.customerName || r.phone}</p>
<p className="text-xs text-gray-500 mb-2">
Visit: {r.dateISO ? `${formatSlotDate(r.dateISO)} · ${r.slotLabel || (r.slotId === "am" ? "Morning" : "Afternoon")}` : "—"}
</p>
{chosen.length > 0 && (
<ul className="text-xs text-gray-700 list-disc list-inside">
{chosen.map((a) => <li key={a.id}>{a.label}</li>)}
</ul>
)}
{r.notes && <p className="text-xs text-gray-600 italic mt-1">"{r.notes}"</p>}
{r.feeApplied && (
<p className="text-xs font-medium mt-1" style={{ color: "var(--warn)" }}>
Requested within {r.deadlineHours}h — ${r.feeAmount} late change fee applies
</p>
)}
</div>
);
})}
</div>
</div>
)}
<p className="text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>
Pending agreement ({pendingAgreementJobs.length})
{pendingAgreementJobs.filter((j) => Math.floor((Date.now() - j.timestamp) / 86400000) >= 3).length > 0 && (
<span style={{ color: "var(--warn)" }}> — {pendingAgreementJobs.filter((j) => Math.floor((Date.now() - j.timestamp) / 86400000) >= 3).length} need follow-up</span>
)}
</p>
{historyLoading && <p className="text-xs text-gray-400">Loading…</p>}
{!historyLoading && pendingAgreementJobs.length === 0 && (
<p className="text-sm text-gray-400 border border-gray-200 rounded-lg p-3 mb-3">Nothing waiting on agreement right now.</p>
)}
{!historyLoading && pendingAgreementJobs.length > 0 && (
<div className="space-y-1.5 mb-3">
{pendingAgreementJobs.map((item) => {
const scheduled = bookingForJob(item.timestamp);
const daysWaiting = Math.floor((Date.now() - item.timestamp) / 86400000);
const isStale = daysWaiting >= 3;
return (
<div key={item.timestamp} onClick={() => openPendingDetail(item)}
className="border rounded-lg p-3 text-sm cursor-pointer" style={isStale ? { borderColor: "var(--warn)" } : { borderColor: "var(--border-strong)" }}>
<div className="flex items-start justify-between gap-2">
<div>
<p className="text-gray-900">
{item.customerName || "Unnamed"}
{item.isRecurring && <span className="ml-2 text-xs font-medium text-emerald-700">Recurring</span>}
</p>
{item.address && <p className="text-xs text-gray-500">{item.address}</p>}
{item.description && <p className="text-xs text-gray-500 italic">{item.description}</p>}
<p className="text-xs" style={isStale ? { color: "var(--warn)", fontWeight: 500 } : { color: "var(--text-faint)" }}>
{daysWaiting === 0 ? "Sent today" : daysWaiting === 1 ? "Waiting 1 day" : `Waiting ${daysWaiting} days`}
{isStale ? " — follow up?" : ""}
</p>
{scheduled && (
<p className="text-xs font-medium mt-0.5" style={{ color: "var(--accent)" }}>
Scheduled: {formatSlotDate(scheduled.dateISO)} · {scheduled.slotLabel}
</p>
)}
</div>
<span className="font-medium text-gray-900">${item.total}</span>
</div>
<div className="flex items-center gap-2 mt-2">
{item.phone && (
<>
<a href={`tel:${item.phone}`} onClick={(e) => e.stopPropagation()} className="text-xs underline" style={{ color: "var(--accent)" }}>Call</a>
<a href={`sms:${item.phone}`} onClick={(e) => e.stopPropagation()} className="text-xs underline" style={{ color: "var(--accent)" }}>Text</a>
</>
)}
{item.address && (
<a href={`https://maps.google.com/?q=${encodeURIComponent(item.address)}`} target="_blank" rel="noopener noreferrer"
onClick={(e) => e.stopPropagation()} className="text-xs underline" style={{ color: "var(--accent)" }}>
Directions
</a>
)}
</div>
<div className="flex items-center gap-2 mt-2">
<button onClick={(e) => { e.stopPropagation(); markAgreed(item); }} className="text-xs rounded-full px-3 py-1 text-white" style={{ backgroundColor: ACCENT_HEX }}>
Mark agreed
</button>
<button onClick={(e) => { e.stopPropagation(); declineJob(item); }} className="text-xs rounded-full px-3 py-1 border border-gray-300 text-gray-600">
Decline
</button>
<button onClick={(e) => { e.stopPropagation(); onEditRequest(item); }} className="text-xs text-gray-600 border border-gray-300 rounded-full px-3 py-1">
Edit
</button>
{(userRole === "owner" || userRole === "manager") && (
<button onClick={(e) => { e.stopPropagation(); deleteEstimateItem(item); }} className="text-gray-400 ml-auto" aria-label="Delete estimate">
<Trash2 size={15} />
</button>
)}
</div>
</div>
);
})}
</div>
)}
<p className="text-xs font-medium text-gray-500 mb-1.5">Upcoming ({confirmedJobs.length})</p>
{!historyLoading && confirmedJobs.length === 0 && (
<p className="text-sm text-gray-400 border border-gray-200 rounded-lg p-3 mb-3">No accepted jobs waiting to be done.</p>
)}
{!historyLoading && confirmedJobs.length > 0 && (
<div className="space-y-1.5 mb-3">
{confirmedJobs.map((item) => {
const timerRunningHere = activeTimer && activeTimer.jobTimestamp === item.timestamp;
const timerRunningElsewhere = activeTimer && activeTimer.jobTimestamp !== item.timestamp;
const scheduled = bookingForJob(item.timestamp);
return (
<div key={item.timestamp} onClick={() => openPendingDetail(item)}
className="border rounded-lg p-3 text-sm cursor-pointer" style={{ borderColor: "var(--accent)" }}>
<div className="flex items-start justify-between gap-2">
<div>
<p className="text-gray-900">
{item.customerName || "Unnamed"}
{item.isRecurring && <span className="ml-2 text-xs font-medium text-emerald-700">Recurring</span>}
</p>
{item.address && <p className="text-xs text-gray-500">{item.address}</p>}
{item.description && <p className="text-xs text-gray-500 italic">{item.description}</p>}
<p className="text-xs text-gray-400">{new Date(item.timestamp).toLocaleDateString()}</p>
{scheduled && (
<p className="text-xs font-medium mt-0.5" style={{ color: "var(--accent)" }}>
Scheduled: {formatSlotDate(scheduled.dateISO)} · {scheduled.slotLabel}
</p>
)}
</div>
<span className="font-medium text-gray-900">${item.total}</span>
</div>
{timerRunningHere && (
<p className="text-sm font-semibold mt-2" style={{ color: "var(--success)" }}>
Elapsed: {formatDuration(nowTick - activeTimer.startedAt)}
</p>
)}
<div className="flex items-center gap-2 mt-2">
{item.phone && (
<>
<a href={`tel:${item.phone}`} onClick={(e) => e.stopPropagation()} className="text-xs underline" style={{ color: "var(--accent)" }}>Call</a>
<a href={`sms:${item.phone}`} onClick={(e) => e.stopPropagation()} className="text-xs underline" style={{ color: "var(--accent)" }}>Text</a>
</>
)}
{item.address && (
<a href={`https://maps.google.com/?q=${encodeURIComponent(item.address)}`} target="_blank" rel="noopener noreferrer"
onClick={(e) => e.stopPropagation()} className="text-xs underline" style={{ color: "var(--accent)" }}>
Directions
</a>
)}
</div>
<div className="flex items-center gap-2 mt-2 flex-wrap">
{!timerRunningHere && (
<button onClick={(e) => { e.stopPropagation(); startTimer(item); }} disabled={!!timerRunningElsewhere || !item.hasBeforePhoto}
className="text-xs rounded-full px-3 py-1 border" style={{ borderColor: item.hasBeforePhoto ? "var(--accent)" : "var(--warn)", color: item.hasBeforePhoto ? "var(--accent)" : "var(--warn)", opacity: timerRunningElsewhere ? 0.4 : 1 }}>
{item.hasBeforePhoto ? "Start timer" : "Before photo required"}
</button>
)}
<button onClick={(e) => { e.stopPropagation(); markComplete(item); }} disabled={!timerRunningHere}
className="text-xs rounded-full px-3 py-1 text-white"
style={{ backgroundColor: timerRunningHere ? "var(--success)" : ACCENT_HEX, opacity: timerRunningHere ? 1 : 0.4 }}>
Job Completed
</button>
<button onClick={(e) => { e.stopPropagation(); onEditRequest(item); }} className="text-xs text-gray-600 border border-gray-300 rounded-full px-3 py-1">
Edit
</button>
{(userRole === "owner" || userRole === "manager") && (
<button onClick={(e) => { e.stopPropagation(); deleteEstimateItem(item); }} className="text-gray-400 ml-auto" aria-label="Delete estimate">
<Trash2 size={15} />
</button>
)}
</div>
{!timerRunningHere && !timerRunningElsewhere && (
<p className="text-xs mt-1" style={{ color: item.hasBeforePhoto ? "var(--text-faint)" : "var(--warn)" }}>
{item.hasBeforePhoto ? "Start the timer before marking this job complete." : "Required: open this job and take a before-service photo. Work cannot begin until the property condition is documented."}
</p>
)}
</div>
);
})}
</div>
)}
<p className="text-xs font-medium text-gray-500 mb-1.5">Scheduled next appointments ({standaloneBookings.length})</p>
<p className="text-xs text-gray-400 mb-1.5">Recurring customers' upcoming visits not tied to a specific job below.</p>
{bookingsLoading && <p className="text-xs text-gray-400">Loading…</p>}
{!bookingsLoading && standaloneBookings.length === 0 && (
<p className="text-sm text-gray-400 border border-gray-200 rounded-lg p-3">Nothing scheduled beyond the jobs above.</p>
)}
<div className="space-y-1.5">
{standaloneBookings.map((b) => {
const needsAccept = b.status === "pending";
const job = linkedJob(b);
const jobPendingAgreement = job && job.status !== "confirmed" && job.status !== "completed";
const needsAttentionHere = needsAccept || jobPendingAgreement;
return (
<div key={b.key} onClick={() => openBookingDetail(b)}
className="border rounded-lg px-3 py-2 text-sm cursor-pointer"
style={needsAttentionHere ? { borderColor: "var(--warn)", backgroundColor: "var(--surface-alt)" } : { borderColor: "#E5E7EB" }}>
<div className="flex items-center justify-between">
<div>
<p className="text-gray-900">{formatSlotDate(b.dateISO)} · {b.slotLabel || (b.slotId === "am" ? "Morning" : "Afternoon")}</p>
<p className="text-xs text-gray-500">{b.customerName || "Unnamed"} • {b.phone}</p>
{needsAccept && (
<p className="text-xs font-medium mt-0.5" style={{ color: "var(--warn)" }}>Customer-picked — needs acceptance</p>
)}
{jobPendingAgreement && (
<p className="text-xs font-medium mt-0.5" style={{ color: "var(--warn)" }}>Job not yet agreed — customer hasn't confirmed</p>
)}
</div>
<button onClick={(e) => { e.stopPropagation(); setConfirmClearBooking(b); }} className="text-gray-400" aria-label="Cancel booking">
<Trash2 size={15} />
</button>
</div>
<div className="flex items-center gap-2 mt-2">
{needsAccept && (
<button onClick={(e) => { e.stopPropagation(); acceptBooking(b); }}
className="text-xs rounded-full px-3 py-1 text-white" style={{ backgroundColor: "var(--warn)" }}>
Accept
</button>
)}
{jobPendingAgreement && (
<button onClick={(e) => { e.stopPropagation(); markAgreed(job); }}
className="text-xs rounded-full px-3 py-1 text-white" style={{ backgroundColor: "var(--warn)" }}>
Mark agreed
</button>
)}
</div>
</div>
);
})}
</div>
</section>
<section>
<button onClick={() => setShowAvailabilityEditor((s) => !s)} className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
{showAvailabilityEditor ? <ChevronUp size={14} /> : <ChevronDown size={14} />} Manage availability
</button>
{showAvailabilityEditor && (
<div className="mt-2 border border-gray-200 rounded-lg p-3">
<p className="text-xs text-gray-500 mb-2">
Set the hours you work each day — each day automatically splits into an AM and PM slot based on whatever you enter.
</p>
<div className="space-y-2">
{DAY_KEYS.map((d) => {
const dayEnabled = !(availability[d] && availability[d].enabled === false);
return (
<div key={d} className="flex items-center gap-2 text-xs">
<label className="flex items-center gap-1.5 w-16 shrink-0">
<input type="checkbox" checked={dayEnabled} onChange={() => toggleDayEnabled(d)} style={{ accentColor: "var(--accent)", touchAction: "pan-y" }} />
{DAY_LABELS[d]}
</label>
{dayEnabled ? (
<>
<input type="time" value={(availability[d] && availability[d].start) || "08:00"}
onChange={(e) => setDayTime(d, "start", e.target.value)}
className="border border-gray-300 rounded px-1.5 py-1 text-xs flex-1" />
<span className="text-gray-400">to</span>
<input type="time" value={(availability[d] && availability[d].end) || "16:00"}
onChange={(e) => setDayTime(d, "end", e.target.value)}
className="border border-gray-300 rounded px-1.5 py-1 text-xs flex-1" />
</>
) : (
<span className="text-gray-400">Day off</span>
)}
</div>
);
})}
</div>
<div className="flex flex-wrap gap-2 mt-3">
<button onClick={() => applyDayToRange("mon", ["tue", "wed", "thu", "fri"])}
className="text-xs border border-gray-300 rounded-full px-3 py-1 text-gray-600">
Copy Mon hours to Tue–Fri
</button>
<button onClick={() => applyDayToRange("sat", ["sun"])}
className="text-xs border border-gray-300 rounded-full px-3 py-1 text-gray-600">
Copy Sat hours to Sun
</button>
</div>
<button onClick={saveAvailability} disabled={availabilitySaving} className="w-full mt-3 rounded-lg py-2 text-sm text-white"
style={{ backgroundColor: ACCENT_HEX, opacity: availabilitySaving ? 0.7 : 1 }}>
{availabilitySaving ? "Saving…" : availabilitySavedFeedback ? "Saved!" : "Save availability"}
</button>
</div>
)}
</section>
<section>
<button onClick={() => setShowSchedule((s) => !s)} className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
{showSchedule ? <ChevronUp size={14} /> : <ChevronDown size={14} />} Full schedule (next 2 weeks)
</button>
{showSchedule && (
<div className="mt-2 space-y-3 max-h-80 overflow-y-auto pr-1">
{(availabilityLoading || bookingsLoading) && <p className="text-xs text-gray-400">Loading…</p>}
{!availabilityLoading && !bookingsLoading && scheduleSlots.length === 0 && (
<p className="text-xs text-gray-400">No slots offered in the next two weeks — check your availability.</p>
)}
{!availabilityLoading && !bookingsLoading && scheduleSlotsByDay.map((day) => (
<div key={day.dateISO}>
<p className="text-xs font-medium text-gray-500 mb-1">{formatSlotDate(day.dateISO)}</p>
<div className="space-y-1">
{day.slots.map((s) => {
const bk = bookings.find((b) => b.dateISO === s.dateISO && b.slotId === s.slotId);
return (
<div key={s.key} onClick={() => bk && openBookingDetail(bk)}
className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-1.5 text-xs"
style={bk ? { cursor: "pointer" } : undefined}>
<span className="text-gray-700">{s.slotLabel}</span>
{bk ? (
<div className="flex items-center gap-2">
<span className="font-medium" style={{ color: "var(--accent)" }}>Booked — {bk.customerName || bk.phone}</span>
<button onClick={(e) => { e.stopPropagation(); setConfirmClearBooking(bk); }} className="text-gray-400" aria-label="Clear this time slot">
<Trash2 size={13} />
</button>
</div>
) : (
<span className="text-emerald-700 font-medium">Available</span>
)}
</div>
);
})}
</div>
</div>
))}
</div>
)}
</section>
<section>
<button onClick={() => setShowHistory((s) => !s)} className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
{showHistory ? <ChevronUp size={14} /> : <ChevronDown size={14} />} Completed jobs
{!historyLoading && ` (${completedJobs.length})`}
</button>
{showHistory && (
<div className="mt-2 space-y-2">
{historyLoading && <p className="text-xs text-gray-400">Loading…</p>}
{!historyLoading && completedJobs.length === 0 && <p className="text-xs text-gray-400">No completed jobs yet.</p>}
{!historyLoading &&
completedJobs.map((item) => (
<div key={item.timestamp} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
<div
onClick={() => setExpandedId(expandedId === item.timestamp ? null : item.timestamp)}
className="flex items-center justify-between px-3 py-2 text-sm cursor-pointer"
>
<div>
<p className="text-gray-900">
{item.customerName || "Unnamed"}
{item.isRecurring && <span className="ml-2 text-xs font-medium text-emerald-700">Recurring</span>}
</p>
<p className="text-xs text-gray-400">{new Date(item.timestamp).toLocaleDateString()}</p>
</div>
<div className="flex items-center gap-3">
<span className="font-medium text-gray-900">${item.total}</span>
<button onClick={(e) => { e.stopPropagation(); onEditRequest(item); }} className="text-gray-400" aria-label="Edit estimate">
<Pencil size={16} />
</button>
{(userRole === "owner" || userRole === "manager") && (
<button onClick={(e) => { e.stopPropagation(); deleteEstimateItem(item); }} className="text-gray-400" aria-label="Delete estimate">
<Trash2 size={16} />
</button>
)}
{expandedId === item.timestamp ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
</div>
</div>
{expandedId === item.timestamp && (
<div className="px-3 pb-3 pt-2 border-t border-gray-100 bg-gray-50">
{item.description && <p className="text-xs text-gray-600 italic mb-2">"{item.description}"</p>}
{(item.lines || []).map((li, idx) => (
<div key={idx} className="flex justify-between text-xs text-gray-700 py-0.5">
<span>{li.label}</span>
<span>${li.price}</span>
</div>
))}
{item.phone && <p className="text-xs text-gray-400 mt-2">Phone: {item.phone}</p>}
<button onClick={() => onEditRequest(item)} className="mt-2 text-xs underline" style={{ color: "var(--accent)" }}>
Edit this estimate
</button>
</div>
)}
</div>
))}
</div>
)}
</section>
<section>
<button onClick={() => setShowDeclined((s) => !s)} className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
{showDeclined ? <ChevronUp size={14} /> : <ChevronDown size={14} />} Declined
{!historyLoading && ` (${declinedJobs.length})`}
</button>
{showDeclined && (
<div className="mt-2 space-y-2">
{!historyLoading && declinedJobs.length === 0 && <p className="text-xs text-gray-400">No declined quotes.</p>}
{!historyLoading && declinedJobs.map((item) => (
<div key={item.timestamp} className="border border-gray-200 rounded-lg p-3 text-sm">
<div className="flex items-start justify-between gap-2">
<div>
<p className="text-gray-900">{item.customerName || "Unnamed"}</p>
<p className="text-xs text-gray-400">{new Date(item.timestamp).toLocaleDateString()}</p>
</div>
<span className="font-medium text-gray-900">${item.total}</span>
</div>
<div className="flex items-center gap-2 mt-2">
<button onClick={() => markAgreed(item)} className="text-xs rounded-full px-3 py-1 border border-gray-300 text-gray-600">
Changed mind — mark agreed
</button>
{(userRole === "owner" || userRole === "manager") && (
<button onClick={() => deleteEstimateItem(item)} className="text-gray-400 ml-auto" aria-label="Delete estimate">
<Trash2 size={15} />
</button>
)}
</div>
</div>
))}
</div>
)}
</section>
<section>
<button onClick={() => setShowTimeLog((s) => !s)} className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
{showTimeLog ? <ChevronUp size={14} /> : <ChevronDown size={14} />} Time log
{!timeLogsLoading && ` (${timeLogs.length})`}
</button>
{showTimeLog && (
<div className="mt-2">
{timeLogsLoading && <p className="text-xs text-gray-400">Loading…</p>}
{!timeLogsLoading && timeLogs.length === 0 && (
<p className="text-xs text-gray-400">No time logs yet — start a timer on a confirmed job to begin tracking.</p>
)}
{timeLogAverageList.length > 0 && (
<div className="border border-gray-200 rounded-lg p-3 mb-2">
<p className="text-xs font-medium text-gray-700 mb-1.5">Averages by customer</p>
<div className="space-y-1">
{timeLogAverageList.map((a) => (
<div key={a.name} className="flex justify-between text-xs text-gray-600">
<span>{a.name}</span>
<span>{a.avg} min avg ({a.count} visits)</span>
</div>
))}
</div>
</div>
)}
{timeLogs.length > 0 && (
<div className="space-y-1.5">
{timeLogs.map((t) => (
<div key={t.timestamp} className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2 text-xs">
<div>
<p className="text-gray-900">{t.customerName || "Unnamed"}</p>
{t.address && <p className="text-gray-500">{t.address}</p>}
<p className="text-gray-400">{new Date(t.startedAt).toLocaleString()}</p>
</div>
<div className="flex items-center gap-2">
<span className="font-medium text-gray-900">{t.durationMin} min</span>
<button onClick={() => deleteTimeLog(t)} className="text-gray-400" aria-label="Delete time log">
<Trash2 size={13} />
</button>
</div>
</div>
))}
</div>
)}
</div>
)}
</section>
</div>
<p className="text-center text-xs px-4 pb-4" style={{ color: "var(--text-faint)" }}>{motivationLine}</p>
{pendingDetailOpen && pendingDetailItem && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={closePendingDetail}>
<div className="bg-white rounded-lg p-4 w-full max-w-sm shadow-lg overflow-y-auto" style={{ maxHeight: "85vh" }} onClick={(e) => e.stopPropagation()}>
<div className="flex items-start justify-between gap-2 mb-1">
<p className="text-sm font-semibold text-gray-900">
{pendingDetailItem.customerName || "Unnamed"}
{pendingDetailItem.isRecurring && <span className="ml-2 text-xs font-medium text-emerald-700">Recurring</span>}
</p>
<span className="text-xs font-medium shrink-0" style={{ color: pendingDetailItem.status === "confirmed" ? "var(--accent)" : "var(--warn)" }}>
{pendingDetailItem.status === "confirmed" ? "Confirmed" : "Pending agreement"}
</span>
</div>
{pendingDetailItem.phone && (
<div className="flex items-center gap-2 text-xs mb-1">
<a href={`tel:${pendingDetailItem.phone}`} className="underline" style={{ color: "var(--accent)" }}>{pendingDetailItem.phone}</a>
<a href={`sms:${pendingDetailItem.phone}`} className="underline" style={{ color: "var(--accent)" }}>Text</a>
</div>
)}
{pendingDetailItem.address && <p className="text-xs text-gray-500 mb-1">{pendingDetailItem.address}</p>}
{pendingDetailItem.description && <p className="text-xs text-gray-500 italic mb-1">"{pendingDetailItem.description}"</p>}
<p className="text-xs text-gray-400 mb-3">Requested {new Date(pendingDetailItem.timestamp).toLocaleDateString()}</p>
{(() => {
const scheduled = bookingForJob(pendingDetailItem.timestamp);
return scheduled ? (
<div className="border rounded-lg p-2.5 mb-3 text-xs" style={{ borderColor: "var(--accent)", backgroundColor: "var(--surface-alt)" }}>
<p className="font-medium" style={{ color: "var(--accent)" }}>
Scheduled: {formatSlotDate(scheduled.dateISO)} · {scheduled.slotLabel}
</p>
</div>
) : null;
})()}
<div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-3">
<p className="text-xs font-medium text-gray-700 mb-1.5">Services requested</p>
{(pendingDetailItem.lines || []).map((li, idx) => (
<div key={idx} className="flex justify-between text-xs text-gray-700 py-0.5">
<span>{li.label}</span>
<span>${li.price}</span>
</div>
))}
<div className="flex justify-between text-sm font-semibold text-gray-900 border-t border-dashed border-gray-300 mt-1.5 pt-1.5">
<span>Total</span>
<span>${pendingDetailItem.total}</span>
</div>
</div>
{pendingDetailItem.status === "completed" && pendingDetailItem.completedBy && (
<p className="text-xs text-gray-400 mb-3">Completed by {pendingDetailItem.completedBy}</p>
)}
{pendingDetailItem.status === "completed" && userRole === "owner" && (
<div className="border rounded-lg p-2.5 mb-3 text-xs flex items-center justify-between"
style={pendingDetailItem.paymentStatus === "paid"
? { borderColor: "var(--success)", backgroundColor: "#ECFDF5" }
: { borderColor: "var(--warn)", backgroundColor: "#FEF3C7" }}>
<span className="font-medium" style={{ color: pendingDetailItem.paymentStatus === "paid" ? "var(--success)" : "var(--warn)" }}>
{pendingDetailItem.paymentStatus === "paid" ? "✓ Paid" : "Unpaid"}
</span>
<button onClick={() => setPaymentStatus(pendingDetailItem, pendingDetailItem.paymentStatus !== "paid")}
className="underline" style={{ color: pendingDetailItem.paymentStatus === "paid" ? "var(--success)" : "var(--warn)" }}>
{pendingDetailItem.paymentStatus === "paid" ? "Mark unpaid" : "Mark paid"}
</button>
</div>
)}
{(pendingDetailItem.status === "confirmed" || pendingDetailItem.status === "completed") && (
<div className="border border-gray-200 rounded-lg p-3 mb-3 space-y-2.5">
<div>
<div className="mb-2">
<p className="text-xs font-semibold text-gray-900">Before photos <span style={{ color: "var(--warn)" }}>• REQUIRED</span></p>
<p className="text-xs text-gray-500 mt-1">The app walks you through each shot in order. Work can't start until the required shots are done.</p>
</div>
<div className="flex items-center gap-2 flex-wrap">
<button onClick={() => setPhotoFlow({ item: pendingDetailItem, phase: "before" })}
className="text-xs rounded-full px-3 py-1.5 border" style={pendingDetailItem.hasBeforePhoto ? { borderColor: "var(--success)", color: "var(--success)" } : { borderColor: "var(--accent)", color: "var(--accent)" }}>
{pendingDetailItem.hasBeforePhoto ? "✓ Before photos done — view" : "📷 Start before photos"}
</button>
<button onClick={() => setPhotoFlow({ item: pendingDetailItem, phase: "issue" })}
className="text-xs rounded-full px-3 py-1.5 border" style={{ borderColor: "var(--warn)", color: "var(--warn)" }}>
⚠ Flag an issue
</button>
</div>
</div>
{pendingDetailItem.status === "completed" && (
<div className="pt-2.5 border-t border-gray-100">
<p className="text-xs font-medium text-gray-700 mb-1.5">After photos</p>
<button onClick={() => setPhotoFlow({ item: pendingDetailItem, phase: "after" })}
className="text-xs rounded-full px-3 py-1.5 border" style={pendingDetailItem.hasPhoto ? { borderColor: "var(--success)", color: "var(--success)" } : { borderColor: "var(--accent)", color: "var(--accent)" }}>
{pendingDetailItem.hasPhoto ? "✓ After photos — view / add" : "📷 Take after photos"}
</button>
</div>
)}
{photoError && <p className="text-xs" style={{ color: "var(--warn)" }}>{photoError}</p>}
{photoFlow && (
<PhotoChecklistModal item={photoFlow.item} phase={photoFlow.phase} userRole={userRole}
onClose={() => setPhotoFlow(null)}
onViewLegacy={(ph) => { const it = photoFlow.item; setPhotoFlow(null); viewPhoto(it, ph); }}
onFlagsChanged={(flags) => {
const ts = photoFlow.item.timestamp;
setHistory((prev) => prev.map((h) => (h.timestamp === ts ? { ...h, ...flags } : h)));
setPendingDetailItem((prev) => (prev && prev.timestamp === ts ? { ...prev, ...flags } : prev));
}} />
)}
</div>
)}
{pendingDetailItem.status === "confirmed" && (() => {
const timerRunningHere = activeTimer && activeTimer.jobTimestamp === pendingDetailItem.timestamp;
const timerRunningElsewhere = activeTimer && activeTimer.jobTimestamp !== pendingDetailItem.timestamp;
return timerRunningHere ? (
<p className="text-sm font-semibold mb-3" style={{ color: "var(--success)" }}>
Elapsed: {formatDuration(nowTick - activeTimer.startedAt)}
</p>
) : null;
})()}
<div className="flex items-center gap-2 flex-wrap mb-3">
{pendingDetailItem.status === "confirmed" ? (
(() => {
const timerRunningHere = activeTimer && activeTimer.jobTimestamp === pendingDetailItem.timestamp;
const timerRunningElsewhere = activeTimer && activeTimer.jobTimestamp !== pendingDetailItem.timestamp;
return (
<>
{!timerRunningHere && (
<button onClick={() => startTimer(pendingDetailItem)} disabled={!!timerRunningElsewhere || !pendingDetailItem.hasBeforePhoto}
className="text-xs rounded-full px-3 py-1.5 border" style={{ borderColor: pendingDetailItem.hasBeforePhoto ? "var(--accent)" : "var(--warn)", color: pendingDetailItem.hasBeforePhoto ? "var(--accent)" : "var(--warn)", opacity: timerRunningElsewhere ? 0.4 : 1 }}>
{pendingDetailItem.hasBeforePhoto ? "Start timer" : "Before photo required"}
</button>
)}
{timerRunningHere && userRole === "owner" && (
<label className="flex items-center gap-1.5 text-xs text-gray-600">
<input type="checkbox" checked={completingPaidChecked} onChange={(e) => setCompletingPaidChecked(e.target.checked)}
style={{ accentColor: "var(--accent)", touchAction: "pan-y" }} />
Paid
</label>
)}
<button onClick={() => { markComplete(pendingDetailItem, userRole === "owner" ? completingPaidChecked : false); closePendingDetail(); }} disabled={!timerRunningHere}
className="text-xs rounded-full px-3 py-1.5 text-white"
style={{ backgroundColor: timerRunningHere ? "var(--success)" : ACCENT_HEX, opacity: timerRunningHere ? 1 : 0.4 }}>
Job Completed
</button>
</>
);
})()
) : (
<>
<button onClick={() => { markAgreed(pendingDetailItem); closePendingDetail(); }}
className="text-xs rounded-full px-3 py-1.5 text-white" style={{ backgroundColor: ACCENT_HEX }}>
Mark agreed
</button>
<button onClick={() => { declineJob(pendingDetailItem); closePendingDetail(); }}
className="text-xs rounded-full px-3 py-1.5 border border-gray-300 text-gray-600">
Decline
</button>
</>
)}
<button onClick={() => { closePendingDetail(); onEditRequest(pendingDetailItem); }}
className="text-xs rounded-full px-3 py-1.5 border border-gray-300 text-gray-600">
Edit
</button>
{(userRole === "owner" || userRole === "manager") && (
<button onClick={() => { deleteEstimateItem(pendingDetailItem); closePendingDetail(); }}
className="text-gray-400 ml-auto" aria-label="Delete estimate">
<Trash2 size={15} />
</button>
)}
</div>
<button onClick={closePendingDetail} className="w-full border border-gray-300 rounded-lg py-2 text-sm text-gray-700">
Close
</button>
</div>
</div>
)}
{viewingPhotoTimestamp && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
onClick={() => { setViewingPhotoTimestamp(null); setViewingPhotoKind(null); setViewingPhotoDataUri(null); }}>
<div className="w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
<p className="text-white text-xs text-center mb-2 uppercase tracking-wide opacity-70">{viewingPhotoKind} photo</p>
{viewingPhotoDataUri ? (
<img src={viewingPhotoDataUri} alt={`${viewingPhotoKind} job photo`} className="w-full rounded-lg" />
) : (
<p className="text-white text-sm text-center">Loading…</p>
)}
<div className="flex gap-2 mt-3">
<button onClick={() => { setViewingPhotoTimestamp(null); setViewingPhotoKind(null); setViewingPhotoDataUri(null); }}
className="flex-1 rounded-lg py-2 text-sm text-white border border-white/30">
Close
</button>
{pendingDetailItem && pendingDetailItem.timestamp === viewingPhotoTimestamp && (
<button onClick={() => deletePhoto(pendingDetailItem, viewingPhotoKind)}
className="flex-1 rounded-lg py-2 text-sm text-white" style={{ backgroundColor: "var(--warn)" }}>
Delete photo
</button>
)}
</div>
</div>
</div>
)}
{scheduleModalOpen && scheduleJob && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
<div className="bg-white rounded-lg p-4 w-full max-w-sm shadow-lg">
{scheduleConfirmedInfo ? (
<>
<p className="text-sm font-semibold mb-1" style={{ color: "var(--success)" }}>Next appointment scheduled!</p>
<p className="text-xs text-gray-500 mb-3">
{formatSlotDate(scheduleConfirmedInfo.dateISO)} · {scheduleConfirmedInfo.slotLabel} — send this to {scheduleConfirmedInfo.customerName || "the customer"} as a reminder.
</p>
<div className="border border-gray-200 rounded-lg p-3 font-mono text-xs whitespace-pre-wrap mb-3" style={{ backgroundColor: "var(--surface-alt)", color: "var(--text)" }}>
{buildReminderText(scheduleConfirmedInfo)}
</div>
{scheduleConfirmedInfo.phone && (
<p className="text-xs text-gray-400 mb-3">Phone: {scheduleConfirmedInfo.phone}</p>
)}
{scheduleConfirmedInfo.contactPreference === "call" && (
<p className="text-xs font-medium mb-3" style={{ color: "var(--warn)" }}>
This customer prefers phone calls — consider calling instead of texting.
</p>
)}
<div className="flex gap-2">
{scheduleConfirmedInfo.contactPreference === "call" && scheduleConfirmedInfo.phone && (
<a href={`tel:${scheduleConfirmedInfo.phone}`} onClick={() => setReminderCopied(true)}
className="flex-1 border border-gray-300 rounded-lg py-2 text-sm text-gray-700 text-center">
Call
</a>
)}
<button onClick={copyReminder} className="flex-1 border border-gray-300 rounded-lg py-2 text-sm text-gray-700">
{reminderCopyFeedback || "Copy reminder"}
</button>
{reminderCopied && (
<button onClick={closeScheduleModal} className="flex-1 rounded-lg py-2 text-sm text-white" style={{ backgroundColor: ACCENT_HEX }}>
Done
</button>
)}
</div>
{!reminderCopied && (
<button onClick={closeScheduleModal} className="w-full text-center text-xs text-gray-400 underline mt-2">
Skip — I'll notify them another way
</button>
)}
</>
) : (
<>
<p className="text-sm font-semibold text-gray-900 mb-1">Schedule next appointment?</p>
<p className="text-xs text-gray-500 mb-3">
Want to line up {scheduleJob.customerName || "this customer"}'s next appointment now?
</p>
<div className="mb-3">
<p className="text-xs text-gray-500 mb-1">Pick a time block:</p>
{modalPickerSlots.length === 0 ? (
<p className="text-xs text-gray-400">No open slots in the next two weeks — check your availability.</p>
) : (
<div className="max-h-64 overflow-y-auto pr-1 divide-y divide-gray-100">
{modalPickerSlotsByDay.map((day) => {
const isNearTerm = day.dateISO === modalPickerSlotsByDay[0].dateISO;
return (
<div key={day.dateISO} className="py-2 first:pt-0">
<p className="text-xs font-semibold mb-1" style={{ color: isNearTerm ? "var(--accent)" : "var(--text-muted)" }}>{formatSlotDate(day.dateISO)}</p>
<div className="flex flex-wrap gap-1.5">
{day.slots.map((s) => (
<button key={s.key} type="button" onClick={() => setScheduleChosenSlotKey((k) => (k === s.key ? null : s.key))}
className="text-xs border rounded-full px-2.5 py-1"
style={scheduleChosenSlotKey === s.key ? { borderColor: "var(--accent)", backgroundColor: ACCENT_HEX, color: "white" } : { borderColor: "var(--border-strong)", color: "var(--text)" }}>
{s.slotShort}
</button>
))}
</div>
</div>
);
})}
</div>
)}
</div>
<div className="mb-3">
<p className="text-xs font-medium text-gray-700 mb-1">Services for this visit</p>
<div className="space-y-2">
{ADDONS.map((a) => {
const enabled = !!scheduleAddonSelections[a.id];
const price = (scheduleAddonPrices[a.id] != null) ? scheduleAddonPrices[a.id] : midpoint(a.range);
return (
<div key={a.id}>
<label className="flex items-center justify-between gap-2 text-xs text-gray-700">
<span className="flex items-center gap-2">
<input type="checkbox" checked={enabled}
onChange={() => setScheduleAddonSelections((prev) => ({ ...prev, [a.id]: !prev[a.id] }))}
style={{ accentColor: "var(--accent)", touchAction: "pan-y" }} />
{a.label}
</span>
{enabled && <span className="font-medium text-gray-900">${price}</span>}
</label>
{enabled && (
<input type="range" min={a.range[0]} max={a.range[1]} step="1" value={price}
onChange={(e) => setScheduleAddonPrices((prev) => ({ ...prev, [a.id]: Number(e.target.value) }))}
className="w-full mt-1" style={{ accentColor: "var(--accent)", touchAction: "pan-y" }} />
)}
</div>
);
})}
</div>
</div>
<div className="mb-3">
<label className="block text-xs text-gray-500 mb-1">Free-change window (hours before visit)</label>
<input type="number" min="1" value={scheduleDeadlineHours}
onChange={(e) => setScheduleDeadlineHours(Math.max(1, Math.round(Number(e.target.value) || 1)))}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
</div>
{scheduleDuplicateWarning && (
<div className="border rounded-lg p-2.5 text-xs mb-3" style={{ borderColor: "var(--warn)", backgroundColor: "#FEF3C7" }}>
<p className="font-medium" style={{ color: "var(--warn)" }}>
{scheduleJob.customerName || "This customer"} already has an appointment that day — {formatSlotDate(scheduleDuplicateWarning.existing.dateISO)} · {scheduleDuplicateWarning.existing.slotLabel}.
</p>
</div>
)}
<div className="flex gap-2">
<button onClick={skipScheduleNext} className="flex-1 border border-gray-300 rounded-lg py-2 text-sm text-gray-700">
Not now
</button>
<button onClick={() => confirmScheduleNext(!!scheduleDuplicateWarning)} disabled={scheduleSaving || !scheduleChosenSlotKey}
className="flex-1 rounded-lg py-2 text-sm text-white" style={{ backgroundColor: scheduleDuplicateWarning ? "var(--warn)" : ACCENT_HEX, opacity: scheduleSaving ? 0.7 : 1 }}>
{scheduleSaving ? "Saving…" : scheduleDuplicateWarning ? "Schedule anyway" : "Confirm"}
</button>
</div>
</>
)}
</div>
</div>
)}
{bookingDetailOpen && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={closeBookingDetail}>
<div className="bg-white rounded-lg p-4 w-full max-w-xs shadow-lg" onClick={(e) => e.stopPropagation()}>
{bookingDetailLoading || !bookingDetail ? (
<p className="text-xs text-gray-400">Loading…</p>
) : (
<>
<p className="text-sm font-semibold text-gray-900">{bookingDetail.booking.customerName || "Unnamed"}</p>
<p className="text-xs text-gray-500 mb-2">{bookingDetail.booking.phone}</p>
<p className="text-sm text-gray-800 mb-3">
{formatSlotDate(bookingDetail.booking.dateISO)} · {bookingDetail.booking.slotLabel || (bookingDetail.booking.slotId === "am" ? "Morning" : "Afternoon")}
</p>
<p className="text-xs font-medium text-gray-700 mb-1">Services requested</p>
<div className="border border-gray-200 rounded-md p-2.5 text-xs mb-2">
{bookingDetail.nextVisit && bookingDetail.nextVisit.mowingEnabled ? (
<div className="flex justify-between text-gray-700 py-0.5">
<span>{bookingDetail.nextVisit.mowingType === "oneTime" ? "One-time mow" : "Recurring mow"}</span>
<span>${bookingDetail.nextVisit.mowingPrice || 0}</span>
</div>
) : bookingDetail.baseMowingLine ? (
<div className="flex justify-between text-gray-700 py-0.5">
<span>{bookingDetail.baseMowingLine.label}</span>
<span>${bookingDetail.baseMowingLine.price}</span>
</div>
) : (
<p className="text-gray-400">No recurring service on file yet.</p>
)}
{bookingDetail.nextVisit && ADDONS.filter((a) => bookingDetail.nextVisit.addonSelections && bookingDetail.nextVisit.addonSelections[a.id]).map((a) => (
<div key={a.id} className="flex justify-between text-gray-700 py-0.5">
<span>{a.label}</span>
<span>${(bookingDetail.nextVisit.addonPrices && bookingDetail.nextVisit.addonPrices[a.id] != null) ? bookingDetail.nextVisit.addonPrices[a.id] : midpoint(a.range)}</span>
</div>
))}
</div>
{bookingDetail.nextVisit && bookingDetail.nextVisit.notes && bookingDetail.nextVisit.notes.trim() && (
<>
<p className="text-xs font-medium text-gray-700 mb-1">Customer notes</p>
<p className="text-xs text-gray-600 italic border border-gray-200 rounded-md p-2.5 mb-2">"{bookingDetail.nextVisit.notes}"</p>
</>
)}
{bookingDetail.nextVisit && bookingDetail.nextVisit.feeApplied && (
<p className="text-xs font-medium mb-2" style={{ color: "var(--warn)" }}>
Late change fee applies: ${bookingDetail.nextVisit.feeAmount}
</p>
)}
{bookingDetail.booking.status === "pending" && (
<div className="border rounded-md p-2.5 mb-2" style={{ borderColor: "var(--warn)", backgroundColor: "var(--surface-alt)" }}>
<p className="text-xs font-medium mb-2" style={{ color: "var(--warn)" }}>Customer-picked — needs your acceptance</p>
<button onClick={() => acceptBooking(bookingDetail.booking)} className="w-full rounded-lg py-2 text-sm text-white"
style={{ backgroundColor: "var(--warn)" }}>
Accept booking
</button>
</div>
)}
{(() => {
const job = linkedJob(bookingDetail.booking);
const jobPendingAgreement = job && job.status !== "confirmed" && job.status !== "completed";
return jobPendingAgreement ? (
<div className="border rounded-md p-2.5 mb-2" style={{ borderColor: "var(--warn)", backgroundColor: "var(--surface-alt)" }}>
<p className="text-xs font-medium mb-2" style={{ color: "var(--warn)" }}>Job not yet agreed — customer hasn't confirmed</p>
<button onClick={() => markAgreed(job)} className="w-full rounded-lg py-2 text-sm text-white"
style={{ backgroundColor: "var(--warn)" }}>
Mark agreed
</button>
</div>
) : null;
})()}
<div className="flex gap-2 mt-1">
<button onClick={() => { setConfirmClearBooking(bookingDetail.booking); closeBookingDetail(); }}
className="flex-1 rounded-lg py-2 text-sm border border-red-200 text-red-600">
Clear time slot
</button>
<button onClick={closeBookingDetail} className="flex-1 rounded-lg py-2 text-sm text-white" style={{ backgroundColor: ACCENT_HEX }}>
Close
</button>
</div>
</>
)}
</div>
</div>
)}
{confirmClearBooking && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={() => setConfirmClearBooking(null)}>
<div className="bg-white rounded-lg p-4 w-full max-w-xs shadow-lg" onClick={(e) => e.stopPropagation()}>
<p className="text-sm font-semibold text-gray-900 mb-1">Clear this time slot?</p>
<p className="text-xs text-gray-500 mb-3">
{formatSlotDate(confirmClearBooking.dateISO)} · {confirmClearBooking.slotLabel || (confirmClearBooking.slotId === "am" ? "Morning" : "Afternoon")}
{confirmClearBooking.customerName ? ` — ${confirmClearBooking.customerName}` : ""}
</p>
<p className="text-xs text-red-600 mb-4">This removes the booking and frees up the slot. It can't be undone.</p>
<div className="flex gap-2">
<button onClick={() => setConfirmClearBooking(null)} className="flex-1 border border-gray-300 rounded-lg py-2 text-sm text-gray-700">
Cancel
</button>
<button onClick={() => { deleteBooking(confirmClearBooking.key); setConfirmClearBooking(null); }}
className="flex-1 rounded-lg py-2 text-sm text-white bg-red-600">
Clear slot
</button>
</div>
</div>
</div>
)}
{rescheduleDayOpen && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={() => { if (!rescheduling) setRescheduleDayOpen(false); }}>
<div className="bg-white rounded-lg p-4 w-full max-w-sm shadow-lg" onClick={(e) => e.stopPropagation()}>
{!rescheduleResult ? (
<>
<p className="text-sm font-semibold text-gray-900 mb-1">Reschedule today's {todaysJobs.length} job{todaysJobs.length === 1 ? "" : "s"}</p>
<p className="text-xs text-gray-500 mb-3">
Everyone booked today moves to the new date, keeping their same time block where possible. If that's taken, it finds the next open block that day, or the nearest open day within a week after. Only flags something for you to handle by hand if nothing opens up in that window.
</p>
<label className="block text-xs text-gray-500 mb-1">New date</label>
<input type="date" value={rescheduleNewDate} min={new Date(Date.now() + 86400000).toISOString().slice(0, 10)}
onChange={(e) => setRescheduleNewDate(e.target.value)}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-4" />
<div className="flex gap-2">
<button onClick={() => setRescheduleDayOpen(false)} disabled={rescheduling} className="flex-1 border border-gray-300 rounded-lg py-2 text-sm text-gray-700">
Cancel
</button>
<button onClick={() => rescheduleToday(rescheduleNewDate)} disabled={rescheduling || !rescheduleNewDate}
className="flex-1 rounded-lg py-2 text-sm text-white" style={{ backgroundColor: ACCENT_HEX, opacity: rescheduling ? 0.7 : 1 }}>
{rescheduling ? "Moving…" : "Reschedule all"}
</button>
</div>
</>
) : (
<>
<p className="text-sm font-semibold text-gray-900 mb-1">
{rescheduleResult.moved.length > 0
? `Moved ${rescheduleResult.moved.length} job${rescheduleResult.moved.length === 1 ? "" : "s"} to ${formatSlotDate(rescheduleResult.newDateISO)}`
: "Nothing could be moved"}
</p>
{rescheduleResult.moved.length > 0 && (
<div className="border border-gray-200 rounded-lg divide-y divide-gray-100 mb-3">
{rescheduleResult.moved.map((m, i) => (
<div key={i} className="px-2.5 py-2.5">
<div className="flex items-center justify-between gap-2">
<span className="text-xs text-gray-700">{m.name}</span>
{m.phone ? (
<button
onClick={() => copyText(buildRescheduleText(m.name, m.dateISO, m.slotLabel), (msg) => {
setRescheduleCopyFeedback((prev) => ({ ...prev, [i]: msg }));
setTimeout(() => setRescheduleCopyFeedback((prev) => ({ ...prev, [i]: "" })), 2000);
})}
className="text-xs rounded-full px-3 py-1.5 text-white shrink-0" style={{ backgroundColor: ACCENT_HEX }}>
{rescheduleCopyFeedback[i] || "Copy message to send"}
</button>
) : (
<span className="text-xs text-gray-400 shrink-0">No phone on file</span>
)}
</div>
{!m.isExactMatch && (
<p className="text-xs mt-0.5" style={{ color: "var(--warn)" }}>
Their usual slot was taken — moved to {formatSlotDate(m.dateISO)} · {m.slotLabel} instead
</p>
)}
</div>
))}
</div>
)}
{rescheduleResult.skipped.length > 0 && (
<div className="border rounded-lg p-2.5 text-xs mb-3" style={{ borderColor: "var(--warn)", backgroundColor: "#FEF3C7" }}>
<p className="font-medium mb-1" style={{ color: "var(--warn)" }}>
{rescheduleResult.skipped.length} couldn't move — handle these by hand:
</p>
{rescheduleResult.skipped.map((s, i) => (
<p key={i} className="text-gray-700">{s.name} — {s.reason}</p>
))}
</div>
)}
<button onClick={() => setRescheduleDayOpen(false)} className="w-full rounded-lg py-2 text-sm text-white" style={{ backgroundColor: ACCENT_HEX }}>
Done
</button>
</>
)}
</div>
</div>
)}
</div>
);
}
function CustomerDirectoryView({ onEditVisit, initialExpandedPhone, onConsumeInitialExpandedPhone, userRole }) {
const [shotListFor, setShotListFor] = useState(null);
const [motivationLine] = useState(() => randomMotivationLine());
const [history, setHistory] = useState([]);
const [search, setSearch] = useState("");
const [expandedPhone, setExpandedPhone] = useState(null);
const [expandedAppointment, setExpandedAppointment] = useState(null);
const [nextVisits, setNextVisits] = useState({});
const [profiles, setProfiles] = useState({});
const [editingProfilePhone, setEditingProfilePhone] = useState(null);
const [pauseTarget, setPauseTarget] = useState(null);
const [pauseUntilInput, setPauseUntilInput] = useState("");
const [editName, setEditName] = useState("");
const [editPhone, setEditPhone] = useState("");
const [editAddress, setEditAddress] = useState("");
const [editNotes, setEditNotes] = useState("");
const [profileSaving, setProfileSaving] = useState(false);
const [phoneChangeError, setPhoneChangeError] = useState("");
const [deleteConfirmCustomer, setDeleteConfirmCustomer] = useState(null);
const [confirmClearNextVisit, setConfirmClearNextVisit] = useState(null);
const [deletingCustomer, setDeletingCustomer] = useState(false);
const [allDataLoaded, setAllDataLoaded] = useState(false);
const [scheduleTarget, setScheduleTarget] = useState(null);
const [modalAvailability, setModalAvailability] = useState(null);
const [modalBookings, setModalBookings] = useState([]);
const [modalAvailLoading, setModalAvailLoading] = useState(false);
const [modalChosenSlotKey, setModalChosenSlotKey] = useState(null);
const [modalDeadlineHours, setModalDeadlineHours] = useState(DEFAULT_DEADLINE_HOURS);
const [modalMowingEnabled, setModalMowingEnabled] = useState(false);
const [modalMowingType, setModalMowingType] = useState("recurring");
const [modalLotTierId, setModalLotTierId] = useState("medium");
const [modalMowingPrice, setModalMowingPrice] = useState(midpoint(LOT_TIERS[1].recurring));
const [duplicateWarning, setDuplicateWarning] = useState(null);
const [modalCustomItems, setModalCustomItems] = useState([]);
const [repeatEnabled, setRepeatEnabled] = useState(false);
const [repeatFrequencyWeeks, setRepeatFrequencyWeeks] = useState(1);
const [repeatCount, setRepeatCount] = useState(4);
const [bulkScheduleResult, setBulkScheduleResult] = useState(null);
const [bulkScheduling, setBulkScheduling] = useState(false);
const [scheduleConfirmedInfo, setScheduleConfirmedInfo] = useState(null);
const [directoryReminderCopyFeedback, setDirectoryReminderCopyFeedback] = useState("");
const [reminderCopied, setReminderCopied] = useState(false);
const [modalSaving, setModalSaving] = useState(false);
const [modalAddonSelections, setModalAddonSelections] = useState({});
const [modalAddonPrices, setModalAddonPrices] = useState({});
useEffect(() => {
(async () => {
try {
const [items, loadedProfiles] = await Promise.all([loadAll(), loadAllProfiles(), loadAllNextVisits()]);
await backfillMissingProfiles(items, loadedProfiles);
} catch (e) {
} finally {
setAllDataLoaded(true);
}
})();
}, []);
useEffect(() => {
if (allDataLoaded && initialExpandedPhone) {
setExpandedPhone(initialExpandedPhone);
if (!nextVisits[initialExpandedPhone]) loadNextVisitFor(initialExpandedPhone);
if (onConsumeInitialExpandedPhone) onConsumeInitialExpandedPhone();
}
}, [allDataLoaded, initialExpandedPhone]);
async function loadAllNextVisits() {
try {
const apptTable = await loadTable(TABLE_KEYS.appointments, true);
const loaded = {};
Object.values(apptTable).forEach((d) => {
if (d.phone) {
if (!loaded[d.phone]) loaded[d.phone] = [];
loaded[d.phone].push(d);
}
});
Object.keys(loaded).forEach((phone) => loaded[phone].sort((a, b) => a.startMs - b.startMs));
setNextVisits((prev) => ({ ...prev, ...loaded }));
} catch (e) {}
}
async function loadAll() {
let items = [];
try {
const table = await loadTable(TABLE_KEYS.estimates, false);
items = Object.values(table);
setHistory(items);
} catch (e) {
setHistory([]);
}
return items;
}
async function loadAllProfiles() {
let loaded = {};
try {
loaded = await loadTable(TABLE_KEYS.profiles, true);
setProfiles((prev) => ({ ...prev, ...loaded }));
} catch (e) {}
return loaded;
}
async function backfillMissingProfiles(items, loadedProfiles) {
const byPhoneLocal = {};
items.forEach((item) => {
if (!item.phone) return;
if (!byPhoneLocal[item.phone]) byPhoneLocal[item.phone] = [];
byPhoneLocal[item.phone].push(item);
});
const missing = Object.keys(byPhoneLocal).filter((phone) => !loadedProfiles[phone]);
if (missing.length === 0) return;
const newlyCreated = {};
for (const phone of missing) {
const records = byPhoneLocal[phone].slice().sort((a, b) => b.timestamp - a.timestamp);
const latest = records[0];
const profile = { phone, name: latest.customerName || "", address: latest.address || "" };
newlyCreated[phone] = profile;
}
try {
await saveTable(TABLE_KEYS.profiles, true, newlyCreated);
if (Object.keys(newlyCreated).length > 0) {
setProfiles((prev) => ({ ...prev, ...newlyCreated }));
}
} catch (e) {}
}
async function loadNextVisitFor(phone) {
try {
const apptTable = await loadTable(TABLE_KEYS.appointments, true);
const items = Object.keys(apptTable)
.filter((recordId) => apptTable[recordId].phone === phone)
.map((recordId) => apptTable[recordId]);
items.sort((a, b) => a.startMs - b.startMs);
setNextVisits((prev) => ({ ...prev, [phone]: items }));
} catch (e) {}
}
async function updateNextVisit(phone, startMs, updates) {
const list = nextVisits[phone] || [];
const current = list.find((v) => v.startMs === startMs);
if (!current) return;
const updated = { ...current, ...updates };
setNextVisits((prev) => ({ ...prev, [phone]: (prev[phone] || []).map((v) => (v.startMs === startMs ? updated : v)) }));
try {
await setTableRecord(TABLE_KEYS.appointments, true, `${phone}:${startMs}`, updated);
} catch (e) {}
}
function toggleNextVisitAddon(phone, startMs, addonId) {
const current = (nextVisits[phone] || []).find((v) => v.startMs === startMs);
if (!current) return;
updateNextVisit(phone, startMs, { addonSelections: { ...current.addonSelections, [addonId]: !current.addonSelections[addonId] } });
}
function setNextVisitAddonPrice(phone, startMs, addonId, price) {
const current = (nextVisits[phone] || []).find((v) => v.startMs === startMs);
if (!current) return;
updateNextVisit(phone, startMs, { addonPrices: { ...current.addonPrices, [addonId]: price } });
}
function updateNextVisitNotesLocal(phone, startMs, notes) {
setNextVisits((prev) => ({ ...prev, [phone]: (prev[phone] || []).map((v) => (v.startMs === startMs ? { ...v, notes } : v)) }));
}
function persistNextVisitNotes(phone, startMs) {
const current = (nextVisits[phone] || []).find((v) => v.startMs === startMs);
if (!current) return;
setTableRecord(TABLE_KEYS.appointments, true, `${phone}:${startMs}`, current).catch(() => {});
}
async function clearNextVisit(phone, startMs) {
const nv = (nextVisits[phone] || []).find((v) => v.startMs === startMs);
try {
await deleteTableRecord(TABLE_KEYS.appointments, true, `${phone}:${startMs}`);
} catch (e) {}
if (nv && nv.dateISO && nv.slotId) {
try {
await deleteTableRecord(TABLE_KEYS.bookings, true, `${nv.dateISO}:${nv.slotId}`);
} catch (e) {}
}
setNextVisits((prev) => ({ ...prev, [phone]: (prev[phone] || []).filter((v) => v.startMs !== startMs) }));
}
function selectModalTier(id) {
setModalLotTierId(id);
const tier = LOT_TIERS.find((t) => t.id === id);
if (tier.id !== "custom") {
const range = modalMowingType === "recurring" ? tier.recurring : tier.oneTime;
setModalMowingPrice(midpoint(range));
} else {
setModalMowingPrice(150);
}
}
function selectModalMowingType(type) {
setModalMowingEnabled(true);
setModalMowingType(type);
const tier = LOT_TIERS.find((t) => t.id === modalLotTierId);
if (tier && tier.id !== "custom") {
const range = type === "recurring" ? tier.recurring : tier.oneTime;
setModalMowingPrice(midpoint(range));
}
}
function deselectModalMowing() {
setModalMowingEnabled(false);
}
function addModalCustomItem() {
setModalCustomItems((prev) => [...prev, { id: `custom-${Date.now()}`, label: "", price: 0 }]);
}
function updateModalCustomItem(id, field, value) {
setModalCustomItems((prev) => prev.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
}
function removeModalCustomItem(id) {
setModalCustomItems((prev) => prev.filter((c) => c.id !== id));
}
async function openScheduleModal(c) {
setScheduleTarget(c);
setModalChosenSlotKey(null);
setModalDeadlineHours(DEFAULT_DEADLINE_HOURS);
setModalAddonSelections({});
setModalAddonPrices({});
setModalMowingEnabled(false);
setModalMowingType("recurring");
setModalLotTierId("medium");
setModalMowingPrice(midpoint(LOT_TIERS[1].recurring));
setModalCustomItems([]);
setRepeatEnabled(false);
setRepeatFrequencyWeeks(c.isRecurring ? 1 : 1);
setRepeatCount(4);
setBulkScheduleResult(null);
setDuplicateWarning(null);
setScheduleConfirmedInfo(null);
setDirectoryReminderCopyFeedback("");
setReminderCopied(false);
setModalAvailLoading(true);
try {
const avail = await fetchAvailability();
setModalAvailability(avail);
const items = await fetchBookings();
setModalBookings(items);
} catch (e) {
setModalAvailability(defaultAvailability());
setModalBookings([]);
} finally {
setModalAvailLoading(false);
}
}
function closeScheduleModal() {
setScheduleTarget(null);
setModalChosenSlotKey(null);
setDuplicateWarning(null);
setScheduleConfirmedInfo(null);
setBulkScheduleResult(null);
setRepeatEnabled(false);
setReminderCopied(false);
}
async function confirmScheduleFromDirectory(force) {
if (!scheduleTarget || !modalChosenSlotKey) return;
const phone = scheduleTarget.phone;
const bookedSet = {};
modalBookings.forEach((b) => {
bookedSet[`${b.dateISO}:${b.slotId}`] = true;
});
const allSlots = generateUpcomingSlots(modalAvailability, bookedSet, 14).filter((s) => !s.booked);
const slot = allSlots.find((s) => s.key === modalChosenSlotKey);
if (!slot) return;
if (!force) {
const existingSameDay = modalBookings.find((b) => b.phone === phone && b.dateISO === slot.dateISO);
if (existingSameDay) {
setDuplicateWarning({ slot, existing: existingSameDay });
return;
}
}
setModalSaving(true);
try {
{
await setTableRecord(TABLE_KEYS.bookings, true, `${slot.dateISO}:${slot.slotId}`, {
dateISO: slot.dateISO, slotId: slot.slotId, slotLabel: slot.slotLabel, startMs: slot.startMs,
phone, customerName: scheduleTarget.name || "", status: "accepted", createdAt: Date.now(),
});
const nv = {
phone, customerName: scheduleTarget.name || "",
confirmed: true, dateISO: slot.dateISO, slotId: slot.slotId, slotLabel: slot.slotLabel,
startMs: slot.startMs, deadline: slot.startMs - modalDeadlineHours * 3600 * 1000, deadlineHours: modalDeadlineHours,
addonSelections: modalAddonSelections, addonPrices: modalAddonPrices,
mowingEnabled: modalMowingEnabled, mowingType: modalMowingType, lotTierId: modalLotTierId, mowingPrice: modalMowingEnabled ? modalMowingPrice : 0,
customItems: modalCustomItems.filter((c) => c.label.trim()),
notes: "", feeApplied: false, feeAmount: 0, updatedAt: Date.now(),
};
await setTableRecord(TABLE_KEYS.appointments, true, `${phone}:${slot.startMs}`, nv);
setNextVisits((prev) => ({ ...prev, [phone]: [...(prev[phone] || []), nv].sort((a, b) => a.startMs - b.startMs) }));
setDuplicateWarning(null);
setScheduleConfirmedInfo({
customerName: scheduleTarget.name || "",
phone,
dateISO: slot.dateISO,
slotLabel: slot.slotLabel,
contactPreference: (profiles[phone] && profiles[phone].contactPreference) || null,
});
setReminderCopied(false);
}
} catch (e) {
} finally {
setModalSaving(false);
}
}
async function confirmBulkSchedule() {
if (!scheduleTarget || !modalChosenSlotKey) return;
const phone = scheduleTarget.phone;
const bookedSet = {};
modalBookings.forEach((b) => {
bookedSet[`${b.dateISO}:${b.slotId}`] = true;
});
const allSlots = generateUpcomingSlots(modalAvailability, bookedSet, 14).filter((s) => !s.booked);
const firstSlot = allSlots.find((s) => s.key === modalChosenSlotKey);
if (!firstSlot) return;
setBulkScheduling(true);
try {
const bookingsTable = await loadTable(TABLE_KEYS.bookings, true);
const apptTable = await loadTable(TABLE_KEYS.appointments, true);
const newBookings = {};
const newAppts = {};
const booked = [];
const skipped = [];
const stepDays = repeatFrequencyWeeks * 7;
const totalVisits = repeatCount + 1;
const firstDate = new Date(firstSlot.startMs);
const hours = firstDate.getHours();
const minutes = firstDate.getMinutes();
for (let i = 0; i < totalVisits; i++) {
const visitDate = new Date(firstDate);
visitDate.setDate(firstDate.getDate() + i * stepDays);
visitDate.setHours(hours, minutes, 0, 0);
const dateISO = visitDate.toISOString().slice(0, 10);
const recordKey = `${dateISO}:${firstSlot.slotId}`;
const startMs = visitDate.getTime();
if (bookingsTable[recordKey]) {
skipped.push({ dateISO });
continue;
}
const newBooking = {
dateISO, slotId: firstSlot.slotId, slotLabel: firstSlot.slotLabel, startMs,
phone, customerName: scheduleTarget.name || "", status: "accepted", createdAt: Date.now(),
};
bookingsTable[recordKey] = newBooking;
newBookings[recordKey] = newBooking;
const nv = {
phone, customerName: scheduleTarget.name || "",
confirmed: true, dateISO, slotId: firstSlot.slotId, slotLabel: firstSlot.slotLabel,
startMs, deadline: startMs - modalDeadlineHours * 3600 * 1000, deadlineHours: modalDeadlineHours,
addonSelections: modalAddonSelections, addonPrices: modalAddonPrices,
mowingEnabled: modalMowingEnabled, mowingType: modalMowingType, lotTierId: modalLotTierId, mowingPrice: modalMowingEnabled ? modalMowingPrice : 0,
customItems: modalCustomItems.filter((c) => c.label.trim()),
notes: "", feeApplied: false, feeAmount: 0, updatedAt: Date.now(),
};
const apptKey = `${phone}:${startMs}`;
apptTable[apptKey] = nv;
newAppts[apptKey] = nv;
booked.push({ dateISO, slotLabel: firstSlot.slotLabel, nv });
}
await saveTable(TABLE_KEYS.bookings, true, newBookings);
await saveTable(TABLE_KEYS.appointments, true, newAppts);
const newNvs = booked.map((b) => b.nv);
setNextVisits((prev) => ({ ...prev, [phone]: [...(prev[phone] || []), ...newNvs].sort((a, b) => a.startMs - b.startMs) }));
setBulkScheduleResult({
booked, skipped,
customerName: scheduleTarget.name || "",
phone,
contactPreference: (profiles[phone] && profiles[phone].contactPreference) || null,
});
setReminderCopied(false);
} catch (e) {
} finally {
setBulkScheduling(false);
}
}
async function setContactPreference(phone, pref) {
const current = profiles[phone] || {};
const next = current.contactPreference === pref ? null : pref;
const updated = { ...current, phone, contactPreference: next };
setProfiles((prev) => ({ ...prev, [phone]: updated }));
try {
await setTableRecord(TABLE_KEYS.profiles, true, phone, updated);
} catch (e) {}
}
async function pauseCustomer(phone, pausedUntil) {
const current = profiles[phone] || {};
const updated = { ...current, phone, paused: true, pausedUntil: pausedUntil || null };
setProfiles((prev) => ({ ...prev, [phone]: updated }));
try {
await setTableRecord(TABLE_KEYS.profiles, true, phone, updated);
} catch (e) {}
setPauseTarget(null);
}
async function resumeCustomer(phone) {
const current = profiles[phone] || {};
const updated = { ...current, phone, paused: false, pausedUntil: null };
setProfiles((prev) => ({ ...prev, [phone]: updated }));
try {
await setTableRecord(TABLE_KEYS.profiles, true, phone, updated);
} catch (e) {}
}
function startEditProfile(c) {
setEditingProfilePhone(c.phone);
setEditName(c.name === "Unnamed" ? "" : c.name);
setEditPhone(c.phone);
setEditAddress(c.address);
setEditNotes(c.notes || "");
setPhoneChangeError("");
}
function requestDeleteCustomer(c) {
setDeleteConfirmCustomer(c);
}
function cancelDeleteCustomer() {
setDeleteConfirmCustomer(null);
}
async function confirmDeleteCustomer() {
if (!deleteConfirmCustomer) return;
setDeletingCustomer(true);
const phone = deleteConfirmCustomer.phone;
try {
const res = await fetch(`${API_BASE}/api/customer-profiles/${encodeURIComponent(phone)}`, {
method: "DELETE",
headers: authHeaders(),
});
if (!res.ok) {
setDeletingCustomer(false);
return;
}
setHistory((prev) => prev.filter((h) => h.phone !== phone));
setProfiles((prev) => {
const next = { ...prev };
delete next[phone];
return next;
});
setNextVisits((prev) => {
const next = { ...prev };
delete next[phone];
return next;
});
if (expandedPhone === phone) setExpandedPhone(null);
setDeleteConfirmCustomer(null);
} catch (e) {
} finally {
setDeletingCustomer(false);
}
}
function cancelEditProfile() {
setEditingProfilePhone(null);
setPhoneChangeError("");
}
async function migrateCustomerPhone(oldPhone, newPhone, newProfileData) {
const res = await fetch(`${API_BASE}/api/customers/${encodeURIComponent(oldPhone)}/change-phone`, {
method: "POST",
headers: authHeaders({ "Content-Type": "application/json" }),
body: JSON.stringify({ newPhone, ...newProfileData }),
});
if (!res.ok) {
const data = await res.json().catch(() => ({}));
throw new Error(data.error || "Couldn't change the phone number.");
}
const migratedNv = (nextVisits[oldPhone] || []).map((nv) => ({ ...nv, phone: newPhone }));
setProfiles((prev) => {
const next = { ...prev };
delete next[oldPhone];
next[newPhone] = newProfileData;
return next;
});
setNextVisits((prev) => {
const next = { ...prev };
if (next[oldPhone]) {
next[newPhone] = migratedNv.slice().sort((a, b) => a.startMs - b.startMs);
delete next[oldPhone];
}
return next;
});
setHistory((prev) => prev.map((h) => (h.phone === oldPhone ? { ...h, phone: newPhone } : h)));
}
async function saveProfileEdit(oldPhone) {
if (!editName.trim() || !editAddress.trim() || !editPhone.trim()) return;
const normalizedPhone = normalizePhone(editPhone);
if (normalizedPhone.length < 7) {
setPhoneChangeError("Enter a valid phone number.");
return;
}
const phoneChanged = normalizedPhone !== oldPhone;
if (phoneChanged && (profiles[normalizedPhone] || history.some((h) => h.phone === normalizedPhone))) {
setPhoneChangeError("That number already belongs to another customer.");
return;
}
setProfileSaving(true);
setPhoneChangeError("");
const oldProfile = profiles[oldPhone] || {};
const newProfile = {
phone: normalizedPhone,
name: editName.trim(),
address: editAddress.trim(),
notes: editNotes.trim(),
contactPreference: oldProfile.contactPreference || null,
paused: !!oldProfile.paused,
pausedUntil: oldProfile.pausedUntil || null,
};
try {
if (phoneChanged) {
await migrateCustomerPhone(oldPhone, normalizedPhone, newProfile);
if (expandedPhone === oldPhone) setExpandedPhone(normalizedPhone);
} else {
await setTableRecord(TABLE_KEYS.profiles, true, oldPhone, newProfile);
setProfiles((prev) => ({ ...prev, [oldPhone]: newProfile }));
}
setEditingProfilePhone(null);
} catch (e) {
setPhoneChangeError(e.message || "Something went wrong saving — try again.");
} finally {
setProfileSaving(false);
}
}
function toggleExpand(phone) {
if (expandedPhone === phone) {
setExpandedPhone(null);
} else {
setExpandedPhone(phone);
if (!nextVisits[phone]) loadNextVisitFor(phone);
}
}
const byPhone = {};
history.forEach((item) => {
if (!item.phone) return;
if (!byPhone[item.phone]) byPhone[item.phone] = [];
byPhone[item.phone].push(item);
});
const allPhones = Array.from(new Set([...Object.keys(byPhone), ...Object.keys(profiles)]));
const customers = allPhones
.map((phone) => {
const records = (byPhone[phone] || []).slice().sort((a, b) => b.timestamp - a.timestamp);
const latest = records[0];
const completed = records.filter((r) => r.status === "completed");
const totalSpent = completed.reduce((sum, r) => sum + (r.total || 0), 0);
const profile = profiles[phone];
return {
phone,
name: (profile && profile.name) || (latest && latest.customerName) || "Unnamed",
address: (profile && profile.address) || (latest && latest.address) || "",
isRecurring: !!(latest && latest.isRecurring),
paused: !!(profile && profile.paused),
pausedUntil: (profile && profile.pausedUntil) || null,
notes: (profile && profile.notes) || "",
visitCount: completed.length,
totalSpent,
lastActivity: latest ? latest.timestamp : 0,
records,
};
})
.sort((a, b) => b.lastActivity - a.lastActivity);
const q = search.trim().toLowerCase();
const filtered = !q
? customers
: customers.filter((c) => c.name.toLowerCase().includes(q) || c.phone.includes(normalizePhone(q)));
const modalBookedSet = {};
modalBookings.forEach((b) => {
modalBookedSet[`${b.dateISO}:${b.slotId}`] = true;
});
const modalSlots = modalAvailability ? generateUpcomingSlots(modalAvailability, modalBookedSet, 14).filter((s) => !s.booked) : [];
const modalSlotsByDay = groupSlotsByDate(modalSlots);
const STATUS_COLOR = {
completed: "var(--success)",
confirmed: "var(--accent)",
declined: "var(--text-faint)",
};
function statusLabel(status) {
if (status === "completed") return "Completed";
if (status === "confirmed") return "Confirmed";
if (status === "declined") return "Declined";
return "Pending agreement";
}
return (
<div className="pb-8">
<div className="px-4 pt-5 pb-4 border-b border-gray-200 flex items-center gap-3">
<Badge />
<div>
<p className="text-base font-medium text-gray-900">R-DUB's Lawn Care</p>
<p className="text-sm" style={{ color: "var(--accent)" }}>Customer directory</p>
</div>
</div>
<div className="px-4 py-4">
<input
type="text"
value={search}
onChange={(e) => setSearch(e.target.value)}
placeholder="Search by name or phone"
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-4"
/>
{!allDataLoaded && <p className="text-xs text-gray-400">Loading…</p>}
{allDataLoaded && customers.length === 0 && (
<p className="text-sm text-gray-400 border border-gray-200 rounded-lg p-3">
No customers yet — they'll show up here once you save an estimate with a phone number attached.
</p>
)}
{allDataLoaded && customers.length > 0 && filtered.length === 0 && (
<p className="text-sm text-gray-400">No matches for "{search}".</p>
)}
{allDataLoaded && (
<div className="space-y-2">
{filtered.map((c) => {
const nvList = nextVisits[c.phone] || [];
const pref = profiles[c.phone] && profiles[c.phone].contactPreference;
const isEditing = editingProfilePhone === c.phone;
return (
<div key={c.phone} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
{isEditing ? (
<div className="px-3 py-2.5 text-sm" onClick={(e) => e.stopPropagation()}>
<label className="block text-xs text-gray-500 mb-1">Name</label>
<input type="text" value={editName} onChange={(e) => setEditName(e.target.value)}
className="w-full border border-gray-300 rounded-md px-2.5 py-1.5 text-sm mb-2" />
<label className="block text-xs text-gray-500 mb-1">Phone{(userRole !== "owner" && userRole !== "manager") ? " (owner/manager only)" : ""}</label>
<input type="tel" value={editPhone} onChange={(e) => setEditPhone(e.target.value)}
readOnly={userRole !== "owner" && userRole !== "manager"}
className="w-full border border-gray-300 rounded-md px-2.5 py-1.5 text-sm mb-2"
style={(userRole !== "owner" && userRole !== "manager") ? { backgroundColor: "var(--surface-alt)", color: "var(--text-muted)" } : undefined} />
<label className="block text-xs text-gray-500 mb-1">Address</label>
<input type="text" value={editAddress} onChange={(e) => setEditAddress(e.target.value)}
className="w-full border border-gray-300 rounded-md px-2.5 py-1.5 text-sm mb-2" />
<label className="block text-xs text-gray-500 mb-1">Notes (gate code, dog, access, preferences…)</label>
<textarea value={editNotes} onChange={(e) => setEditNotes(e.target.value)} rows={2}
className="w-full border border-gray-300 rounded-md px-2.5 py-1.5 text-sm mb-1" />
{phoneChangeError && <p className="text-xs text-red-600 mb-2">{phoneChangeError}</p>}
{!phoneChangeError && <div className="mb-2" />}
<div className="flex gap-2">
<button onClick={cancelEditProfile} className="flex-1 border border-gray-300 rounded-lg py-1.5 text-xs text-gray-700">
Cancel
</button>
<button onClick={() => saveProfileEdit(c.phone)} disabled={profileSaving || !editName.trim() || !editAddress.trim() || !editPhone.trim()}
className="flex-1 rounded-lg py-1.5 text-xs text-white" style={{ backgroundColor: ACCENT_HEX, opacity: profileSaving ? 0.7 : 1 }}>
{profileSaving ? "Saving…" : "Save"}
</button>
</div>
</div>
) : (
<div onClick={() => toggleExpand(c.phone)} className="flex items-center justify-between px-3 py-2.5 text-sm cursor-pointer">
<div>
<div className="flex items-center gap-1.5">
<p className="text-gray-900 font-medium">
{c.name}
{c.isRecurring && <span className="ml-2 text-xs font-medium text-emerald-700">Recurring</span>}
{pref && (
<span className="ml-2 text-xs font-medium" style={{ color: "var(--accent)" }}>
Prefers {pref === "call" ? "calls" : "texts"}
</span>
)}
</p>
<button onClick={(e) => { e.stopPropagation(); startEditProfile(c); }} aria-label="Edit customer" className="text-gray-400 shrink-0">
<Pencil size={12} />
</button>
</div>
<div className="flex items-center gap-2 text-xs">
<a href={`tel:${c.phone}`} onClick={(e) => e.stopPropagation()} className="underline" style={{ color: "var(--accent)" }}>
{c.phone}
</a>
<a href={`sms:${c.phone}`} onClick={(e) => e.stopPropagation()} className="underline" style={{ color: "var(--accent)" }}>
Text
</a>
{c.address && <span className="text-gray-500">• {c.address}</span>}
</div>
{c.notes && (
<p className="text-xs italic mt-0.5" style={{ color: "var(--text-muted)" }}>📝 {c.notes}</p>
)}
<p className="text-xs text-gray-400">
{c.visitCount} completed visit{c.visitCount === 1 ? "" : "s"} • ${c.totalSpent} total
</p>
{c.isRecurring && (
c.paused ? (
(() => {
const overdue = c.pausedUntil && new Date(c.pausedUntil + "T00:00:00").getTime() <= Date.now();
return (
<p className="text-xs font-medium mt-0.5" style={{ color: overdue ? "var(--warn)" : "var(--text-muted)" }}>
{overdue ? `⏸ Paused — ready to resume since ${formatSlotDate(c.pausedUntil)}` : `⏸ Paused${c.pausedUntil ? ` until ${formatSlotDate(c.pausedUntil)}` : ""}`}
</p>
);
})()
) : nvList.length > 0 ? (
<p className="text-xs font-medium mt-0.5" style={{ color: "var(--success)" }}>
✓ {nvList.length} appointment{nvList.length === 1 ? "" : "s"} set
</p>
) : (
<p className="text-xs font-medium mt-0.5" style={{ color: "var(--warn)" }}>⚠ No next appointment scheduled</p>
)
)}
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-gray-400">Prefers:</span>
<button onClick={(e) => { e.stopPropagation(); setContactPreference(c.phone, "call"); }}
className="text-xs rounded-full px-2 py-0.5 border"
style={pref === "call" ? { backgroundColor: ACCENT_HEX, color: "white", borderColor: ACCENT_HEX } : { borderColor: "var(--border-strong)", color: "var(--text)" }}>
Call
</button>
<button onClick={(e) => { e.stopPropagation(); setContactPreference(c.phone, "text"); }}
className="text-xs rounded-full px-2 py-0.5 border"
style={pref === "text" ? { backgroundColor: ACCENT_HEX, color: "white", borderColor: ACCENT_HEX } : { borderColor: "var(--border-strong)", color: "var(--text)" }}>
Text
</button>
</div>
</div>
{expandedPhone === c.phone ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
</div>
)}
{expandedPhone === c.phone && !isEditing && (
<div className="px-3 pb-3 pt-3 border-t border-gray-100 bg-gray-50 space-y-3">
{nvList.map((nv) => {
const nvAddons = nv.addonSelections ? ADDONS.filter((a) => nv.addonSelections[a.id]) : [];
const nvCustomItems = nv.customItems || [];
const nvTotal = (nv.mowingEnabled ? (nv.mowingPrice || 0) : 0)
+ nvAddons.reduce((sum, a) => sum + ((nv.addonPrices && nv.addonPrices[a.id] != null) ? nv.addonPrices[a.id] : midpoint(a.range)), 0)
+ nvCustomItems.reduce((sum, c) => sum + (Number(c.price) || 0), 0);
const isExpanded = expandedAppointment && expandedAppointment.phone === c.phone && expandedAppointment.startMs === nv.startMs;
return (
<div key={nv.startMs} className="border rounded-lg text-xs" style={{ borderColor: "var(--accent)", backgroundColor: "var(--surface-alt)" }} onClick={(e) => e.stopPropagation()}>
<div className="flex items-center justify-between gap-2 p-2.5 cursor-pointer"
onClick={() => setExpandedAppointment(isExpanded ? null : { phone: c.phone, startMs: nv.startMs })}>
<p className="font-medium" style={{ color: "var(--accent)" }}>
{formatSlotDate(nv.dateISO)} · {nv.slotLabel}
</p>
<div className="flex items-center gap-2 shrink-0">
{nvTotal > 0 && <span className="text-gray-700">${nvTotal}</span>}
{isExpanded ? <ChevronUp size={14} className="text-gray-400" /> : <ChevronDown size={14} className="text-gray-400" />}
</div>
</div>
{isExpanded && (
<div className="px-2.5 pb-2.5">
<div className="flex justify-end mb-2">
<button onClick={() => setConfirmClearNextVisit({ ...c, startMs: nv.startMs })} className="text-xs underline text-gray-500 shrink-0">
Clear
</button>
</div>
<p className="text-xs font-medium text-gray-700 mb-1">Mowing</p>
<div className="flex rounded-lg border border-gray-300 overflow-hidden text-xs mb-2">
<button onClick={() => {
const tier = LOT_TIERS.find((t) => t.id === (nv.lotTierId || "medium"));
const price = tier && tier.id !== "custom" ? midpoint(tier.recurring) : (nv.mowingPrice || 0);
updateNextVisit(c.phone, nv.startMs, { mowingEnabled: true, mowingType: "recurring", lotTierId: nv.lotTierId || "medium", mowingPrice: price });
}} className="flex-1 py-1.5"
style={nv.mowingEnabled && nv.mowingType === "recurring" ? { backgroundColor: ACCENT_HEX, color: "white" } : { backgroundColor: "var(--surface)", color: "var(--text)" }}>
Recurring
</button>
<button onClick={() => {
const tier = LOT_TIERS.find((t) => t.id === (nv.lotTierId || "medium"));
const price = tier && tier.id !== "custom" ? midpoint(tier.oneTime) : (nv.mowingPrice || 0);
updateNextVisit(c.phone, nv.startMs, { mowingEnabled: true, mowingType: "oneTime", lotTierId: nv.lotTierId || "medium", mowingPrice: price });
}} className="flex-1 py-1.5"
style={nv.mowingEnabled && nv.mowingType === "oneTime" ? { backgroundColor: ACCENT_HEX, color: "white" } : { backgroundColor: "var(--surface)", color: "var(--text)" }}>
One-time
</button>
<button onClick={() => updateNextVisit(c.phone, nv.startMs, { mowingEnabled: false })} className="flex-1 py-1.5"
style={!nv.mowingEnabled ? { backgroundColor: "var(--text-faint)", color: "white" } : { backgroundColor: "var(--surface)", color: "var(--text)" }}>
No mowing
</button>
</div>
{nv.mowingEnabled && (
<div className="space-y-2 border border-gray-200 rounded-lg p-2.5 mb-2">
<div className="grid grid-cols-2 gap-1.5">
{LOT_TIERS.map((tier) => (
<button key={tier.id} onClick={() => {
const range = nv.mowingType === "oneTime" ? tier.oneTime : tier.recurring;
const price = tier.id !== "custom" ? midpoint(range) : 150;
updateNextVisit(c.phone, nv.startMs, { lotTierId: tier.id, mowingPrice: price });
}} className="border rounded-lg py-1.5 px-2 text-xs text-left"
style={nv.lotTierId === tier.id ? { borderColor: "var(--accent)", backgroundColor: "var(--surface-alt)", color: "var(--accent)" } : { borderColor: "var(--border-strong)", color: "var(--text)" }}>
{tier.label}
</button>
))}
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-gray-500">Price</span>
<input type="number" min="0" step="1" value={nv.mowingPrice || 0}
onChange={(e) => updateNextVisit(c.phone, nv.startMs, { mowingPrice: Math.max(0, Math.round(Number(e.target.value) || 0)) })}
className="w-20 border border-gray-300 rounded-md px-2 py-1 text-right bg-white" />
</div>
{(() => {
const tier = LOT_TIERS.find((t) => t.id === (nv.lotTierId || "medium"));
const range = tier && tier.id !== "custom" ? (nv.mowingType === "oneTime" ? tier.oneTime : tier.recurring) : [0, 300];
return (
<div>
<div className="flex items-center justify-between text-xs text-gray-500 mb-1">
<span>${range[0]}</span>
<span>${range[1]}</span>
</div>
<input type="range" min={range[0]} max={range[1]} step="1" value={nv.mowingPrice || 0}
onChange={(e) => updateNextVisit(c.phone, nv.startMs, { mowingPrice: Number(e.target.value) })}
className="w-full" style={{ accentColor: "var(--accent)", touchAction: "pan-y" }} />
</div>
);
})()}
</div>
)}
<p className="text-xs font-medium text-gray-700 mb-1">Services requested</p>
<div className="space-y-2 mb-2">
{ADDONS.map((a) => {
const enabled = !!(nv.addonSelections && nv.addonSelections[a.id]);
const price = (nv.addonPrices && nv.addonPrices[a.id] != null) ? nv.addonPrices[a.id] : midpoint(a.range);
return (
<div key={a.id}>
<label className="flex items-center justify-between gap-2 text-xs text-gray-700">
<span className="flex items-center gap-2">
<input type="checkbox" checked={enabled}
onChange={() => toggleNextVisitAddon(c.phone, nv.startMs, a.id)} style={{ accentColor: "var(--accent)", touchAction: "pan-y" }} />
{a.label}
</span>
{enabled && <span className="font-medium text-gray-900">${price}</span>}
</label>
{enabled && (
<input type="range" min={a.range[0]} max={a.range[1]} step="1" value={price}
onChange={(e) => setNextVisitAddonPrice(c.phone, nv.startMs, a.id, Number(e.target.value))}
className="w-full mt-1" style={{ accentColor: "var(--accent)", touchAction: "pan-y" }} />
)}
</div>
);
})}
</div>
<div className="mb-2">
<div className="flex items-center justify-between mb-1">
<p className="text-xs font-medium text-gray-700">Custom / extra</p>
<button type="button"
onClick={() => updateNextVisit(c.phone, nv.startMs, { customItems: [...nvCustomItems, { id: `custom-${Date.now()}`, label: "", price: 0 }] })}
className="text-xs border rounded-full px-2.5 py-1" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
+ Add item
</button>
</div>
{nvCustomItems.length === 0 ? (
<p className="text-xs text-gray-400">Add a one-off service not covered above.</p>
) : (
<div className="space-y-2">
{nvCustomItems.map((ci) => (
<div key={ci.id} className="flex items-center gap-2">
<input type="text" value={ci.label}
onChange={(e) => updateNextVisit(c.phone, nv.startMs, { customItems: nvCustomItems.map((x) => x.id === ci.id ? { ...x, label: e.target.value } : x) })}
placeholder="Service name" className="flex-1 min-w-0 border border-gray-300 rounded-md px-2 py-1.5 text-xs bg-white" />
<span className="text-gray-400 text-xs">$</span>
<input type="number" min="0" step="1" value={ci.price}
onChange={(e) => updateNextVisit(c.phone, nv.startMs, { customItems: nvCustomItems.map((x) => x.id === ci.id ? { ...x, price: Math.max(0, Math.round(Number(e.target.value) || 0)) } : x) })}
className="w-16 border border-gray-300 rounded-md px-2 py-1.5 text-xs bg-white" />
<button type="button"
onClick={() => updateNextVisit(c.phone, nv.startMs, { customItems: nvCustomItems.filter((x) => x.id !== ci.id) })}
className="text-gray-400 shrink-0" aria-label="Remove custom item">
<Trash2 size={14} />
</button>
</div>
))}
</div>
)}
</div>
{(nvAddons.length > 0 || nv.mowingEnabled || nvCustomItems.length > 0) && (
<p className="text-xs font-semibold text-gray-800 mb-2">
Estimated total: ${nvTotal}
</p>
)}
<textarea value={nv.notes || ""}
onChange={(e) => updateNextVisitNotesLocal(c.phone, nv.startMs, e.target.value)}
onBlur={() => persistNextVisitNotes(c.phone, nv.startMs)}
rows={2} placeholder="Notes for this visit (optional)"
className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-xs bg-white" />
</div>
)}
</div>
);
})}
{c.isRecurring && c.paused && (() => {
const overdue = c.pausedUntil && new Date(c.pausedUntil + "T00:00:00").getTime() <= Date.now();
return (
<div className="border rounded-lg p-2.5 text-xs" style={{ borderColor: overdue ? "var(--warn)" : "var(--border-strong)", backgroundColor: overdue ? "#FEF3C7" : "var(--surface-alt)" }}>
<p className="font-medium mb-1.5" style={{ color: overdue ? "var(--warn)" : "var(--text-muted)" }}>
{overdue ? `⏸ Paused — ready to resume since ${formatSlotDate(c.pausedUntil)}` : `⏸ Paused${c.pausedUntil ? ` until ${formatSlotDate(c.pausedUntil)}` : ""}`}
</p>
<button onClick={(e) => { e.stopPropagation(); resumeCustomer(c.phone); }}
className="text-xs rounded-full px-3 py-1.5 text-white" style={{ backgroundColor: ACCENT_HEX }}>
Resume
</button>
</div>
);
})()}
{c.isRecurring && !c.paused && nvList.length === 0 && (
<div className="border rounded-lg p-2.5 text-xs" style={{ borderColor: "var(--warn)", backgroundColor: "#FEF3C7" }}>
<p className="font-medium mb-1.5" style={{ color: "var(--warn)" }}>⚠ No next appointment scheduled</p>
<button onClick={(e) => { e.stopPropagation(); openScheduleModal(c); }}
className="text-xs rounded-full px-3 py-1.5 text-white" style={{ backgroundColor: ACCENT_HEX }}>
Schedule next appointment
</button>
</div>
)}
{!c.paused && (
<button onClick={(e) => { e.stopPropagation(); openScheduleModal(c); }}
className="w-full text-xs rounded-lg border border-gray-300 text-gray-600 py-1.5">
{nvList.length > 0 ? "+ Book another appointment" : "+ Schedule an appointment"}
</button>
)}
{c.isRecurring && !c.paused && (
<button onClick={(e) => { e.stopPropagation(); setPauseTarget(c); setPauseUntilInput(""); }}
className="w-full text-xs text-gray-500 underline py-1">
Pause this customer
</button>
)}
<div className="bg-white border border-gray-200 rounded-lg p-3">
<p className="text-xs font-medium text-gray-700 mb-1.5">Visit history — tap to edit</p>
{c.records.length === 0 ? (
<p className="text-xs text-gray-400">No jobs on file — their contact info is still saved.</p>
) : (
<div className="space-y-0.5">
{c.records.map((r) => (
<div key={r.timestamp}
onClick={(e) => { e.stopPropagation(); if (onEditVisit) onEditVisit(r); }}
className="flex items-center justify-between text-xs py-1.5 px-1.5 -mx-1.5 rounded border-b border-gray-100 last:border-0 cursor-pointer hover:bg-gray-100">
<div className="flex items-center gap-2">
<span className="text-gray-500">{new Date(r.timestamp).toLocaleDateString()}</span>
<span className="font-medium" style={{ color: STATUS_COLOR[r.status] || "var(--warn)" }}>
{statusLabel(r.status)}
</span>
</div>
<span className="font-medium text-gray-900">${r.total}</span>
</div>
))}
</div>
)}
</div>
{userRole === "owner" && (
<button onClick={(e) => { e.stopPropagation(); setShotListFor(c.phone); }}
className="text-xs underline mr-3" style={{ color: "var(--accent)" }}>
Photo checklist
</button>
)}
{shotListFor === c.phone && (
<ShotListEditor phone={c.phone} customerName={c.name || c.phone} onClose={() => setShotListFor(null)} />
)}
{(userRole === "owner" || userRole === "manager") && (
<button onClick={(e) => { e.stopPropagation(); requestDeleteCustomer(c); }}
className="text-xs text-red-600 underline">
Delete customer
</button>
)}
</div>
)}
</div>
);
})}
</div>
)}
</div>
<p className="text-center text-xs px-4 pb-4" style={{ color: "var(--text-faint)" }}>{motivationLine}</p>
{pauseTarget && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={() => setPauseTarget(null)}>
<div className="bg-white rounded-lg p-4 w-full max-w-sm shadow-lg" onClick={(e) => e.stopPropagation()}>
<p className="text-sm font-semibold text-gray-900 mb-1">Pause {pauseTarget.name}?</p>
<p className="text-xs text-gray-500 mb-3">
They'll stop showing up as missing a next appointment. Any appointments already booked for them stay on the calendar — clear those separately if the pause covers them.
</p>
<label className="block text-xs text-gray-500 mb-1">Resume date (optional)</label>
<input type="date" value={pauseUntilInput} onChange={(e) => setPauseUntilInput(e.target.value)}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-1" />
<p className="text-xs text-gray-400 mb-4">Leave blank to pause with no set return date.</p>
<div className="flex gap-2">
<button onClick={() => setPauseTarget(null)} className="flex-1 border border-gray-300 rounded-lg py-2 text-sm text-gray-700">
Cancel
</button>
<button onClick={() => pauseCustomer(pauseTarget.phone, pauseUntilInput || null)}
className="flex-1 rounded-lg py-2 text-sm text-white" style={{ backgroundColor: ACCENT_HEX }}>
Pause
</button>
</div>
</div>
</div>
)}
{deleteConfirmCustomer && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={cancelDeleteCustomer}>
<div className="bg-white rounded-lg p-4 w-full max-w-sm shadow-lg" onClick={(e) => e.stopPropagation()}>
<p className="text-sm font-semibold text-gray-900 mb-1">Delete {deleteConfirmCustomer.name}?</p>
<p className="text-xs text-gray-500 mb-3">{deleteConfirmCustomer.phone}{deleteConfirmCustomer.address ? ` • ${deleteConfirmCustomer.address}` : ""}</p>
<div className="border border-red-200 bg-red-50 rounded-lg p-3 mb-4">
<p className="text-xs text-red-700">
This permanently deletes their saved profile{deleteConfirmCustomer.records.length > 0 ? ` and all ${deleteConfirmCustomer.records.length} job record${deleteConfirmCustomer.records.length === 1 ? "" : "s"}` : ""}, along with any scheduled next appointment. This can't be undone.
</p>
</div>
<div className="flex gap-2">
<button onClick={cancelDeleteCustomer} className="flex-1 border border-gray-300 rounded-lg py-2 text-sm text-gray-700">
Cancel
</button>
<button onClick={confirmDeleteCustomer} disabled={deletingCustomer}
className="flex-1 rounded-lg py-2 text-sm text-white bg-red-600" style={{ opacity: deletingCustomer ? 0.7 : 1 }}>
{deletingCustomer ? "Deleting…" : "Delete permanently"}
</button>
</div>
</div>
</div>
)}
{confirmClearNextVisit && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={() => setConfirmClearNextVisit(null)}>
<div className="bg-white rounded-lg p-4 w-full max-w-xs shadow-lg" onClick={(e) => e.stopPropagation()}>
<p className="text-sm font-semibold text-gray-900 mb-1">Clear this appointment?</p>
{(() => {
const nv = (nextVisits[confirmClearNextVisit.phone] || []).find((v) => v.startMs === confirmClearNextVisit.startMs);
return nv ? (
<p className="text-xs text-gray-500 mb-3">
{confirmClearNextVisit.name} — {formatSlotDate(nv.dateISO)} · {nv.slotLabel}
</p>
) : null;
})()}
<p className="text-xs text-red-600 mb-4">This removes the scheduled visit and frees up the time slot. It can't be undone.</p>
<div className="flex gap-2">
<button onClick={() => setConfirmClearNextVisit(null)} className="flex-1 border border-gray-300 rounded-lg py-2 text-sm text-gray-700">
Cancel
</button>
<button onClick={() => { clearNextVisit(confirmClearNextVisit.phone, confirmClearNextVisit.startMs); setConfirmClearNextVisit(null); }}
className="flex-1 rounded-lg py-2 text-sm text-white bg-red-600">
Clear visit
</button>
</div>
</div>
</div>
)}
{scheduleTarget && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={closeScheduleModal}>
<div className="bg-white rounded-lg p-4 w-full max-w-sm shadow-lg overflow-y-auto" style={{ maxHeight: "85vh" }} onClick={(e) => e.stopPropagation()}>
{bulkScheduleResult ? (
<>
<p className="text-sm font-semibold mb-1" style={{ color: "var(--success)" }}>
{bulkScheduleResult.booked.length} visit{bulkScheduleResult.booked.length === 1 ? "" : "s"} scheduled!
</p>
<div className="border border-gray-200 rounded-lg divide-y divide-gray-100 mb-3">
{bulkScheduleResult.booked.map((b, i) => (
<div key={i} className="px-2.5 py-1.5 text-xs text-gray-700">
{formatSlotDate(b.dateISO)} · {b.slotLabel}
</div>
))}
</div>
{bulkScheduleResult.skipped.length > 0 && (
<div className="border rounded-lg p-2.5 text-xs mb-3" style={{ borderColor: "var(--warn)", backgroundColor: "#FEF3C7" }}>
<p className="font-medium" style={{ color: "var(--warn)" }}>
{bulkScheduleResult.skipped.length} date{bulkScheduleResult.skipped.length === 1 ? "" : "s"} skipped — already booked:
</p>
{bulkScheduleResult.skipped.map((s, i) => (
<p key={i} style={{ color: "var(--warn)" }}>{formatSlotDate(s.dateISO)}</p>
))}
</div>
)}
{bulkScheduleResult.booked.length > 0 && (
<>
<p className="text-xs text-gray-500 mb-2">Send this to {bulkScheduleResult.customerName || "the customer"} to confirm the whole series.</p>
<div className="border border-gray-200 rounded-lg p-3 font-mono text-xs whitespace-pre-wrap mb-3" style={{ backgroundColor: "var(--surface-alt)", color: "var(--text)" }}>
{buildBulkReminderText(bulkScheduleResult.customerName, bulkScheduleResult.booked)}
</div>
{bulkScheduleResult.contactPreference === "call" && (
<p className="text-xs font-medium mb-3" style={{ color: "var(--warn)" }}>
This customer prefers phone calls — consider calling instead of texting.
</p>
)}
<div className="flex gap-2">
{bulkScheduleResult.contactPreference === "call" && bulkScheduleResult.phone && (
<a href={`tel:${bulkScheduleResult.phone}`} onClick={() => setReminderCopied(true)}
className="flex-1 border border-gray-300 rounded-lg py-2 text-sm text-gray-700 text-center">
Call
</a>
)}
<button
onClick={() => copyText(buildBulkReminderText(bulkScheduleResult.customerName, bulkScheduleResult.booked), (msg) => { setDirectoryReminderCopyFeedback(msg); setReminderCopied(true); })}
className="flex-1 border border-gray-300 rounded-lg py-2 text-sm text-gray-700">
{directoryReminderCopyFeedback || "Copy reminder"}
</button>
{reminderCopied && (
<button onClick={closeScheduleModal} className="flex-1 rounded-lg py-2 text-sm text-white" style={{ backgroundColor: ACCENT_HEX }}>
Done
</button>
)}
</div>
{!reminderCopied && (
<button onClick={closeScheduleModal} className="w-full text-center text-xs text-gray-400 underline mt-2">
Skip — I'll notify them another way
</button>
)}
</>
)}
{bulkScheduleResult.booked.length === 0 && (
<button onClick={closeScheduleModal} className="w-full rounded-lg py-2 text-sm text-white" style={{ backgroundColor: ACCENT_HEX }}>
Done
</button>
)}
</>
) : scheduleConfirmedInfo ? (
<>
<p className="text-sm font-semibold mb-1" style={{ color: "var(--success)" }}>Next appointment scheduled!</p>
<p className="text-xs text-gray-500 mb-3">
{formatSlotDate(scheduleConfirmedInfo.dateISO)} · {scheduleConfirmedInfo.slotLabel} — send this to {scheduleConfirmedInfo.customerName || "the customer"} as a reminder.
</p>
<div className="border border-gray-200 rounded-lg p-3 font-mono text-xs whitespace-pre-wrap mb-3" style={{ backgroundColor: "var(--surface-alt)", color: "var(--text)" }}>
{buildReminderText(scheduleConfirmedInfo)}
</div>
{scheduleConfirmedInfo.phone && (
<p className="text-xs text-gray-400 mb-3">Phone: {scheduleConfirmedInfo.phone}</p>
)}
{scheduleConfirmedInfo.contactPreference === "call" && (
<p className="text-xs font-medium mb-3" style={{ color: "var(--warn)" }}>
This customer prefers phone calls — consider calling instead of texting.
</p>
)}
<div className="flex gap-2">
{scheduleConfirmedInfo.contactPreference === "call" && scheduleConfirmedInfo.phone && (
<a href={`tel:${scheduleConfirmedInfo.phone}`} onClick={() => setReminderCopied(true)}
className="flex-1 border border-gray-300 rounded-lg py-2 text-sm text-gray-700 text-center">
Call
</a>
)}
<button
onClick={() => copyText(buildReminderText(scheduleConfirmedInfo), (msg) => { setDirectoryReminderCopyFeedback(msg); setReminderCopied(true); })}
className="flex-1 border border-gray-300 rounded-lg py-2 text-sm text-gray-700">
{directoryReminderCopyFeedback || "Copy reminder"}
</button>
{reminderCopied && (
<button onClick={closeScheduleModal} className="flex-1 rounded-lg py-2 text-sm text-white" style={{ backgroundColor: ACCENT_HEX }}>
Done
</button>
)}
</div>
{!reminderCopied && (
<button onClick={closeScheduleModal} className="w-full text-center text-xs text-gray-400 underline mt-2">
Skip — I'll notify them another way
</button>
)}
</>
) : (
<>
<p className="text-sm font-semibold text-gray-900 mb-1">Schedule next appointment</p>
<p className="text-xs text-gray-500 mb-3">{scheduleTarget.name || "Unnamed"} • {scheduleTarget.phone}</p>
{modalAvailLoading ? (
<p className="text-xs text-gray-400 mb-3">Loading availability…</p>
) : modalSlots.length === 0 ? (
<p className="text-xs text-gray-400 mb-3">No open slots in the next two weeks — check your availability in Business.</p>
) : (
<div className="max-h-64 overflow-y-auto pr-1 divide-y divide-gray-100 mb-3">
{modalSlotsByDay.map((day) => {
const isNearTerm = day.dateISO === modalSlotsByDay[0].dateISO;
return (
<div key={day.dateISO} className="py-2 first:pt-0">
<p className="text-xs font-semibold mb-1" style={{ color: isNearTerm ? "var(--accent)" : "var(--text-muted)" }}>{formatSlotDate(day.dateISO)}</p>
<div className="flex flex-wrap gap-1.5">
{day.slots.map((s) => (
<button key={s.key} type="button" onClick={() => setModalChosenSlotKey((k) => (k === s.key ? null : s.key))}
className="text-xs border rounded-full px-2.5 py-1"
style={modalChosenSlotKey === s.key ? { borderColor: "var(--accent)", backgroundColor: ACCENT_HEX, color: "white" } : { borderColor: "var(--border-strong)", color: "var(--text)" }}>
{s.slotShort}
</button>
))}
</div>
</div>
);
})}
</div>
)}
<div className="mb-3">
<p className="text-xs font-medium text-gray-700 mb-1">Mowing</p>
<div className="flex rounded-lg border border-gray-300 overflow-hidden text-xs mb-2">
<button onClick={() => selectModalMowingType("recurring")} className="flex-1 py-1.5"
style={modalMowingEnabled && modalMowingType === "recurring" ? { backgroundColor: ACCENT_HEX, color: "white" } : { backgroundColor: "var(--surface)", color: "var(--text)" }}>
Recurring
</button>
<button onClick={() => selectModalMowingType("oneTime")} className="flex-1 py-1.5"
style={modalMowingEnabled && modalMowingType === "oneTime" ? { backgroundColor: ACCENT_HEX, color: "white" } : { backgroundColor: "var(--surface)", color: "var(--text)" }}>
One-time
</button>
<button onClick={deselectModalMowing} className="flex-1 py-1.5"
style={!modalMowingEnabled ? { backgroundColor: "var(--text-faint)", color: "white" } : { backgroundColor: "var(--surface)", color: "var(--text)" }}>
No mowing
</button>
</div>
{modalMowingEnabled && (
<div className="space-y-2 border border-gray-200 rounded-lg p-2.5">
<div className="grid grid-cols-2 gap-1.5">
{LOT_TIERS.map((tier) => (
<button key={tier.id} onClick={() => selectModalTier(tier.id)} className="border rounded-lg py-1.5 px-2 text-xs text-left"
style={modalLotTierId === tier.id ? { borderColor: "var(--accent)", backgroundColor: "var(--surface-alt)", color: "var(--accent)" } : { borderColor: "var(--border-strong)", color: "var(--text)" }}>
{tier.label}
</button>
))}
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-gray-500">Price</span>
<input type="number" min="0" step="1" value={modalMowingPrice}
onChange={(e) => setModalMowingPrice(Math.max(0, Math.round(Number(e.target.value) || 0)))}
className="w-20 border border-gray-300 rounded-md px-2 py-1 text-right" />
</div>
{(() => {
const tier = LOT_TIERS.find((t) => t.id === modalLotTierId);
const range = tier && tier.id !== "custom" ? (modalMowingType === "oneTime" ? tier.oneTime : tier.recurring) : [0, 300];
return (
<div>
<div className="flex items-center justify-between text-xs text-gray-500 mb-1">
<span>${range[0]}</span>
<span>${range[1]}</span>
</div>
<input type="range" min={range[0]} max={range[1]} step="1" value={modalMowingPrice}
onChange={(e) => setModalMowingPrice(Number(e.target.value))}
className="w-full" style={{ accentColor: "var(--accent)", touchAction: "pan-y" }} />
</div>
);
})()}
</div>
)}
</div>
<div className="mb-3">
<p className="text-xs font-medium text-gray-700 mb-1">Services for this visit</p>
<div className="space-y-2">
{ADDONS.map((a) => {
const enabled = !!modalAddonSelections[a.id];
const price = (modalAddonPrices[a.id] != null) ? modalAddonPrices[a.id] : midpoint(a.range);
return (
<div key={a.id}>
<label className="flex items-center justify-between gap-2 text-xs text-gray-700">
<span className="flex items-center gap-2">
<input type="checkbox" checked={enabled}
onChange={() => setModalAddonSelections((prev) => ({ ...prev, [a.id]: !prev[a.id] }))}
style={{ accentColor: "var(--accent)", touchAction: "pan-y" }} />
{a.label}
</span>
{enabled && <span className="font-medium text-gray-900">${price}</span>}
</label>
{enabled && (
<input type="range" min={a.range[0]} max={a.range[1]} step="1" value={price}
onChange={(e) => setModalAddonPrices((prev) => ({ ...prev, [a.id]: Number(e.target.value) }))}
className="w-full mt-1" style={{ accentColor: "var(--accent)", touchAction: "pan-y" }} />
)}
</div>
);
})}
</div>
</div>
<div className="mb-3">
<div className="flex items-center justify-between mb-1">
<p className="text-xs font-medium text-gray-700">Custom / extra</p>
<button type="button" onClick={addModalCustomItem} className="text-xs border rounded-full px-2.5 py-1" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
+ Add item
</button>
</div>
{modalCustomItems.length === 0 ? (
<p className="text-xs text-gray-400">Add a one-off service not covered above.</p>
) : (
<div className="space-y-2">
{modalCustomItems.map((c) => (
<div key={c.id} className="flex items-center gap-2">
<input type="text" value={c.label} onChange={(e) => updateModalCustomItem(c.id, "label", e.target.value)}
placeholder="Service name" className="flex-1 min-w-0 border border-gray-300 rounded-md px-2 py-1.5 text-sm" />
<span className="text-gray-400 text-sm">$</span>
<input type="number" min="0" step="1" value={c.price}
onChange={(e) => updateModalCustomItem(c.id, "price", Math.max(0, Math.round(Number(e.target.value) || 0)))}
className="w-20 border border-gray-300 rounded-md px-2 py-1.5 text-sm" />
<button type="button" onClick={() => removeModalCustomItem(c.id)} className="text-gray-400 shrink-0" aria-label="Remove custom item">
<Trash2 size={15} />
</button>
</div>
))}
</div>
)}
</div>
<div className="mb-3">
<label className="block text-xs text-gray-500 mb-1">Free-change window (hours before visit)</label>
<input type="number" min="1" value={modalDeadlineHours}
onChange={(e) => setModalDeadlineHours(Math.max(1, Math.round(Number(e.target.value) || 1)))}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
</div>
{scheduleTarget.isRecurring && (
<div className="mb-3 border border-gray-200 rounded-lg p-2.5">
<label className="flex items-center gap-2 text-xs text-gray-700">
<input type="checkbox" checked={repeatEnabled} onChange={(e) => setRepeatEnabled(e.target.checked)}
style={{ accentColor: "var(--accent)", touchAction: "pan-y" }} />
Book a series instead of just this one visit
</label>
{repeatEnabled && (
<div className="space-y-2 mt-2">
<div className="flex items-center justify-between text-xs">
<span className="text-gray-500">Frequency</span>
<div className="flex rounded-lg border border-gray-300 overflow-hidden text-xs">
<button type="button" onClick={() => setRepeatFrequencyWeeks(1)} className="px-3 py-1"
style={repeatFrequencyWeeks === 1 ? { backgroundColor: ACCENT_HEX, color: "white" } : { color: "var(--text)" }}>
Weekly
</button>
<button type="button" onClick={() => setRepeatFrequencyWeeks(2)} className="px-3 py-1"
style={repeatFrequencyWeeks === 2 ? { backgroundColor: ACCENT_HEX, color: "white" } : { color: "var(--text)" }}>
Biweekly
</button>
</div>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-gray-500">Visits after this one</span>
<input type="number" min="1" max="26" value={repeatCount}
onChange={(e) => setRepeatCount(Math.max(1, Math.min(26, Math.round(Number(e.target.value) || 1))))}
className="w-16 border border-gray-300 rounded-md px-2 py-1 text-xs text-right" />
</div>
<p className="text-xs text-gray-400">
Books {repeatCount + 1} visits total, {repeatFrequencyWeeks === 1 ? "weekly" : "every other week"}, same time each visit, starting from the slot you picked above.
</p>
</div>
)}
</div>
)}
{duplicateWarning && (
<div className="border rounded-lg p-2.5 text-xs mb-3" style={{ borderColor: "var(--warn)", backgroundColor: "#FEF3C7" }}>
<p className="font-medium" style={{ color: "var(--warn)" }}>
{scheduleTarget.name || "This customer"} already has an appointment that day — {formatSlotDate(duplicateWarning.existing.dateISO)} · {duplicateWarning.existing.slotLabel}.
</p>
</div>
)}
<div className="flex gap-2">
<button onClick={closeScheduleModal} className="flex-1 border border-gray-300 rounded-lg py-2 text-sm text-gray-700">
Cancel
</button>
<button onClick={() => repeatEnabled ? confirmBulkSchedule() : confirmScheduleFromDirectory(!!duplicateWarning)}
disabled={modalSaving || bulkScheduling || !modalChosenSlotKey}
className="flex-1 rounded-lg py-2 text-sm text-white" style={{ backgroundColor: duplicateWarning ? "var(--warn)" : ACCENT_HEX, opacity: (modalSaving || bulkScheduling) ? 0.7 : 1 }}>
{bulkScheduling ? "Booking series…" : modalSaving ? "Saving…" : duplicateWarning ? "Schedule anyway" : repeatEnabled ? `Book ${repeatCount + 1} visits` : "Confirm"}
</button>
</div>
</>
)}
</div>
</div>
)}
</div>
);
}
function PriceTable({ headers, rows }) {
return (
<div className="border border-gray-200 rounded-lg overflow-hidden">
<div className="grid text-xs font-semibold text-white" style={{ backgroundColor: ACCENT_HEX, gridTemplateColumns: `2fr repeat(${headers.length - 1}, 1fr)` }}>
{headers.map((h, i) => (
<div key={i} className={`px-2 py-2 ${i === headers.length - 1 ? "text-right" : ""}`}>{h}</div>
))}
</div>
{rows.map((row, ri) => (
<div key={ri} className="grid text-xs"
style={{ gridTemplateColumns: `2fr repeat(${headers.length - 1}, 1fr)`, backgroundColor: ri % 2 === 0 ? "var(--surface)" : "var(--surface-alt)" }}>
{row.map((cell, ci) => (
<div key={ci} className={`px-2 py-2 ${ci === row.length - 1 ? "text-right font-medium" : "text-gray-700"}`}
style={ci === row.length - 1 ? { color: "var(--accent)" } : undefined}>
{cell}
</div>
))}
</div>
))}
</div>
);
}
function PriceSheetView() {
const [motivationLine] = useState(() => randomMotivationLine());
const mowingRows = LOT_TIERS.map((t) =>
t.id === "custom"
? ["Over 1 acre", "Custom quote", "Custom quote", "—"]
: [t.label, `$${t.recurring[0]}–${t.recurring[1]}`, `$${t.oneTime[0]}–${t.oneTime[1]}`, `Save $${t.savings}`]
);
const cleanupRows = ADDONS.filter((a) => a.category === "cleanup").map((a) => [a.label, `$${a.range[0]} – $${a.range[1]}`]);
const landscapeRows = ADDONS.filter((a) => a.category === "landscaping").map((a) => [a.label, `$${a.range[0]} – $${a.range[1]}`]);
return (
<div className="pb-8">
<div className="px-4 pt-5 pb-4 border-b border-gray-200 flex items-center gap-3">
<Badge />
<div>
<p className="text-base font-medium text-gray-900">R-DUB's Lawn Care</p>
<p className="text-sm" style={{ color: "var(--accent)" }}>Pricing guide</p>
</div>
</div>
<div className="px-4 py-4 space-y-6">
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--accent)" }}>
Mowing — Recurring vs. One-Time
</h2>
<p className="text-xs text-gray-500 mb-2">Recurring visits include mowing, trimming & edging, and blow-off of clippings.</p>
<PriceTable headers={["Lot Size", "Recurring", "One-Time", "You Save"]} rows={mowingRows} />
<p className="text-xs text-gray-400 mt-2">
First cut on an overgrown lawn carries a one-time +$20–$40 premium, even for new recurring customers.
</p>
<div className="mt-2 border rounded-lg p-3 text-xs" style={{ borderColor: "var(--accent)", backgroundColor: "var(--surface-alt)" }}>
<span className="font-semibold" style={{ color: "var(--accent)" }}>Why go recurring? </span>
<span className="text-gray-700">
Weekly/bi-weekly customers save $15–$25 every visit vs. one-time service, and lock in their spot on the schedule.
</span>
</div>
</section>
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>Cleanup & Add-On Services</h2>
<PriceTable headers={["Service", "Price"]} rows={cleanupRows} />
</section>
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>Landscaping & Bed Care</h2>
<p className="text-xs text-gray-500 mb-2">Priced per project after a quick walk-through.</p>
<PriceTable headers={["Service", "Price"]} rows={landscapeRows} />
</section>
<section className="text-xs text-gray-500 space-y-1.5 border-t border-gray-200 pt-3">
<p><span className="font-semibold text-gray-700">Service area: </span>Battle Creek, MI and within a 15-mile radius.</p>
<p><span className="font-semibold text-gray-700">Payment: </span>Due at time of service — cash, check, or payment app. Monthly invoicing available for recurring customers.</p>
<p><span className="font-semibold text-gray-700">Please note: </span>Listed prices are typical ranges. Final pricing may vary based on slopes, obstacles, gate access, debris, or an overgrown lawn.</p>
<p><span className="font-semibold text-gray-700">Cancellations: </span>Please give 24 hours' notice to reschedule or skip a visit.</p>
</section>
</div>
<p className="text-center text-xs px-4 pb-4" style={{ color: "var(--text-faint)" }}>{motivationLine}</p>
</div>
);
}
const EXPENSE_CATEGORIES = ["Materials", "Fuel", "Equipment & Tools", "Insurance & Fees", "Other"];
function ExpensesView() {
const [expenses, setExpenses] = useState([]);
const [expensesLoading, setExpensesLoading] = useState(true);
const [inventoryItems, setInventoryItems] = useState([]);
const [history, setHistory] = useState([]);
const [category, setCategory] = useState("Materials");
const [description, setDescription] = useState("");
const [amount, setAmount] = useState("");
const [vendor, setVendor] = useState("");
const [linkedJobKey, setLinkedJobKey] = useState("");
const [saving, setSaving] = useState(false);
const [saveLabel, setSaveLabel] = useState("");
const [deleteConfirmExpense, setDeleteConfirmExpense] = useState(null);
const [usageItem, setUsageItem] = useState(null);
const [usageQty, setUsageQty] = useState("");
const [usageJobKey, setUsageJobKey] = useState("");
const [usageSaving, setUsageSaving] = useState(false);
const [thresholdEditId, setThresholdEditId] = useState(null);
const [summaryPeriod, setSummaryPeriod] = useState("month");
const [thresholdValue, setThresholdValue] = useState("");
const [restockOpen, setRestockOpen] = useState(false);
const [restockName, setRestockName] = useState("");
const [restockUnit, setRestockUnit] = useState("bags");
const [restockQty, setRestockQty] = useState("");
const [restockCost, setRestockCost] = useState("");
const [restockSaving, setRestockSaving] = useState(false);
const [motivationLine] = useState(() => randomMotivationLine());
const [exportingAll, setExportingAll] = useState(false);
const [exportFeedback, setExportFeedback] = useState("");
const [importPreview, setImportPreview] = useState(null);
const [importParseError, setImportParseError] = useState("");
const [importing, setImporting] = useState(false);
const [importFeedback, setImportFeedback] = useState("");
useEffect(() => {
loadAll();
}, []);
async function markJobPaidFromBooks(item) {
try {
const updated = await updateJobPaymentStatus(item, true);
setHistory((prev) => prev.map((h) => (h.timestamp === item.timestamp ? updated : h)));
} catch (e) {}
}
async function loadAll() {
setExpensesLoading(true);
const [expenseItems, inventoryItemsLoaded, estimateItems] = await Promise.all([
(async () => {
try {
const table = await loadTable(TABLE_KEYS.expenses, false);
const items = Object.values(table);
items.sort((a, b) => b.timestamp - a.timestamp);
return items;
} catch (e) {
return [];
}
})(),
(async () => {
try {
const table = await loadTable(TABLE_KEYS.inventoryItems, false);
const items = Object.values(table);
items.sort((a, b) => a.name.localeCompare(b.name));
return items;
} catch (e) {
return [];
}
})(),
(async () => {
try {
const table = await loadTable(TABLE_KEYS.estimates, false);
const items = Object.values(table);
items.sort((a, b) => b.timestamp - a.timestamp);
return items;
} catch (e) {
return [];
}
})(),
]);
setExpenses(expenseItems);
setInventoryItems(inventoryItemsLoaded);
setHistory(estimateItems);
setExpensesLoading(false);
}
function openRestockModal(item) {
setRestockOpen(true);
setRestockName(item ? item.name : "");
setRestockUnit(item ? item.unit : "bags");
setRestockQty("");
setRestockCost("");
}
function closeRestockModal() {
setRestockOpen(false);
}
async function confirmRestock() {
if (!restockName.trim() || !restockQty || Number(restockQty) <= 0) return;
setRestockSaving(true);
const qtyToAdd = Number(restockQty);
const cost = restockCost ? Number(restockCost) : 0;
const existing = inventoryItems.find((it) => it.name.toLowerCase() === restockName.trim().toLowerCase());
const newCostPerUnit = cost > 0 ? cost / qtyToAdd : (existing ? existing.costPerUnit : 0);
try {
if (existing) {
const updated = { ...existing, currentQty: existing.currentQty + qtyToAdd, costPerUnit: newCostPerUnit, updatedAt: Date.now() };
await setTableRecord(TABLE_KEYS.inventoryItems, false, existing.id, updated);
setInventoryItems((prev) => prev.map((it) => (it.id === existing.id ? updated : it)));
} else {
const id = String(Date.now());
const newItem = { id, name: restockName.trim(), unit: restockUnit, currentQty: qtyToAdd, lowStockThreshold: 0, costPerUnit: newCostPerUnit, updatedAt: Date.now() };
await setTableRecord(TABLE_KEYS.inventoryItems, false, id, newItem);
setInventoryItems((prev) => [...prev, newItem].sort((a, b) => a.name.localeCompare(b.name)));
}
if (cost > 0) {
const timestamp = Date.now();
const data = {
timestamp,
date: new Date(timestamp).toISOString().slice(0, 10),
category: "Materials",
description: `${restockName.trim()} (${qtyToAdd} ${restockUnit})`,
amount: Math.round(cost * 100) / 100,
vendor: "",
jobTimestamp: null,
jobCustomerName: null,
};
await setTableRecord(TABLE_KEYS.expenses, false, String(timestamp), data);
setExpenses((prev) => [data, ...prev]);
}
setRestockOpen(false);
} catch (e) {
} finally {
setRestockSaving(false);
}
}
async function saveExpense() {
if (!description.trim() || !amount || Number(amount) <= 0) return;
setSaving(true);
const timestamp = Date.now();
const linkedJob = linkedJobKey ? history.find((h) => String(h.timestamp) === linkedJobKey) : null;
const data = {
timestamp,
date: new Date(timestamp).toISOString().slice(0, 10),
category,
description: description.trim(),
amount: Math.round(Number(amount) * 100) / 100,
vendor: vendor.trim(),
jobTimestamp: linkedJob ? linkedJob.timestamp : null,
jobCustomerName: linkedJob ? linkedJob.customerName : null,
};
try {
await setTableRecord(TABLE_KEYS.expenses, false, String(timestamp), data);
setExpenses((prev) => [data, ...prev]);
setDescription("");
setAmount("");
setVendor("");
setLinkedJobKey("");
setSaveLabel("Saved!");
setTimeout(() => setSaveLabel(""), 2000);
} catch (e) {
} finally {
setSaving(false);
}
}
async function deleteExpense(exp) {
try {
await deleteTableRecord(TABLE_KEYS.expenses, false, String(exp.timestamp));
setExpenses((prev) => prev.filter((e) => e.timestamp !== exp.timestamp));
} catch (e) {}
setDeleteConfirmExpense(null);
}
function openUsageModal(item) {
setUsageItem(item);
setUsageQty("");
setUsageJobKey("");
}
async function confirmUsage() {
if (!usageItem || !usageQty || Number(usageQty) <= 0) return;
setUsageSaving(true);
const qty = Number(usageQty);
const updated = { ...usageItem, currentQty: Math.max(0, Math.round((usageItem.currentQty - qty) * 100) / 100), updatedAt: Date.now() };
try {
await setTableRecord(TABLE_KEYS.inventoryItems, false, usageItem.id, updated);
setInventoryItems((prev) => prev.map((it) => (it.id === usageItem.id ? updated : it)));
if (usageJobKey) {
const linkedJob = history.find((h) => String(h.timestamp) === usageJobKey);
const timestamp = Date.now();
const cost = qty * (usageItem.costPerUnit || 0);
const data = {
timestamp,
date: new Date(timestamp).toISOString().slice(0, 10),
category: "Materials",
description: `${usageItem.name} used (${qty} ${usageItem.unit})`,
amount: Math.round(cost * 100) / 100,
vendor: "",
jobTimestamp: linkedJob ? linkedJob.timestamp : null,
jobCustomerName: linkedJob ? linkedJob.customerName : null,
};
await setTableRecord(TABLE_KEYS.expenses, false, String(timestamp), data);
setExpenses((prev) => [data, ...prev]);
}
setUsageItem(null);
} catch (e) {
} finally {
setUsageSaving(false);
}
}
async function saveThreshold(item) {
const updated = { ...item, lowStockThreshold: Math.max(0, Number(thresholdValue) || 0) };
try {
await setTableRecord(TABLE_KEYS.inventoryItems, false, item.id, updated);
setInventoryItems((prev) => prev.map((it) => (it.id === item.id ? updated : it)));
} catch (e) {}
setThresholdEditId(null);
}
function downloadBlob(filename, content, mimeType) {
const blob = new Blob([content], { type: mimeType });
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download = filename;
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function toCSV(rows, headers) {
const escape = (v) => {
const s = String(v == null ? "" : v);
if (s.includes(",") || s.includes('"') || s.includes("\n")) {
return '"' + s.replace(/"/g, '""') + '"';
}
return s;
};
const lines = [headers.join(",")];
rows.forEach((row) => lines.push(headers.map((h) => escape(row[h])).join(",")));
return lines.join("\n");
}
function todayStamp() {
return new Date().toISOString().slice(0, 10);
}
function exportJobsCSV() {
const rows = history.map((h) => ({
Date: new Date(h.timestamp).toLocaleDateString(),
Customer: h.customerName || "Unnamed",
Phone: h.phone || "",
Address: h.address || "",
Status: h.status,
Recurring: h.isRecurring ? "Yes" : "No",
Total: h.total,
}));
const csv = toCSV(rows, ["Date", "Customer", "Phone", "Address", "Status", "Recurring", "Total"]);
downloadBlob(`rdubs-jobs-${todayStamp()}.csv`, csv, "text/csv;charset=utf-8;");
}
function exportExpensesCSV() {
const rows = expenses.map((e) => ({
Date: e.date || new Date(e.timestamp).toLocaleDateString(),
Category: e.category,
Description: e.description,
Amount: e.amount,
Vendor: e.vendor || "",
Job: e.jobCustomerName || "",
}));
const csv = toCSV(rows, ["Date", "Category", "Description", "Amount", "Vendor", "Job"]);
downloadBlob(`rdubs-expenses-${todayStamp()}.csv`, csv, "text/csv;charset=utf-8;");
}
async function exportAllDataJSON() {
setExportingAll(true);
setExportFeedback("");
const tables = [
["estimate", TABLE_KEYS.estimates, false],
["customerProfiles", TABLE_KEYS.profiles, true],
["appointments", TABLE_KEYS.appointments, true],
["bookings", TABLE_KEYS.bookings, true],
["timeLogs", TABLE_KEYS.timeLogs, false],
["expenses", TABLE_KEYS.expenses, false],
["inventoryItems", TABLE_KEYS.inventoryItems, false],
["bugReports", TABLE_KEYS.bugReports, false],
["crewSchedules", TABLE_KEYS.crewSchedules, false],
];
const data = {};
try {
for (const [label, tableKey, shared] of tables) {
try {
const table = await loadTable(tableKey, shared);
data[label] = Object.values(table);
} catch (e) {
data[label] = [];
}
}
try {
const res = await fetch(`${API_BASE}/api/availability`, { headers: authHeaders() });
const d = res.ok ? await res.json() : null;
data.availability = d && d.template ? d.template : null;
} catch (e) {
data.availability = null;
}
try {
const res = await fetch(`${API_BASE}/api/site-content`);
const d = res.ok ? await res.json() : null;
data.siteContent = d && d.content ? d.content : null;
} catch (e) {
data.siteContent = null;
}
data.exportedAt = new Date().toISOString();
data.business = "R-DUB's Lawn Care";
downloadBlob(`rdubs-lawn-care-backup-${todayStamp()}.json`, JSON.stringify(data, null, 2), "application/json");
setExportFeedback("Downloaded!");
setTimeout(() => setExportFeedback(""), 2500);
} catch (e) {
setExportFeedback("Something went wrong — try again");
setTimeout(() => setExportFeedback(""), 3000);
} finally {
setExportingAll(false);
}
}
const IMPORT_TABLE_MAP = [
{ label: "estimate", displayName: "Jobs & estimates", tableKey: TABLE_KEYS.estimates, shared: false, recordId: (item) => String(item.timestamp) },
{ label: "customerProfiles", displayName: "Customers", tableKey: TABLE_KEYS.profiles, shared: true, recordId: (item) => item.phone },
{ label: "appointments", displayName: "Appointments", tableKey: TABLE_KEYS.appointments, shared: true, recordId: (item) => `${item.phone}:${item.startMs}` },
{ label: "bookings", displayName: "Booked time slots", tableKey: TABLE_KEYS.bookings, shared: true, recordId: (item) => `${item.dateISO}:${item.slotId}` },
{ label: "timeLogs", displayName: "Time logs", tableKey: TABLE_KEYS.timeLogs, shared: false, recordId: (item) => String(item.timestamp) },
{ label: "expenses", displayName: "Expenses", tableKey: TABLE_KEYS.expenses, shared: false, recordId: (item) => String(item.timestamp) },
{ label: "inventoryItems", displayName: "Inventory items", tableKey: TABLE_KEYS.inventoryItems, shared: false, recordId: (item) => item.id },
{ label: "bugReports", displayName: "Bug reports", tableKey: TABLE_KEYS.bugReports, shared: false, recordId: (item) => item.id },
{ label: "crewSchedules", displayName: "Crew schedules", tableKey: TABLE_KEYS.crewSchedules, shared: false, recordId: (item) => item.username },
];
function handleImportFileSelect(e) {
const file = e.target.files && e.target.files[0];
e.target.value = "";
if (!file) return;
setImportParseError("");
setImportFeedback("");
const reader = new FileReader();
reader.onload = () => {
try {
const parsed = JSON.parse(reader.result);
if (typeof parsed !== "object" || parsed === null) throw new Error("not an object");
const counts = IMPORT_TABLE_MAP.map((t) => ({
displayName: t.displayName,
count: Array.isArray(parsed[t.label]) ? parsed[t.label].length : 0,
}));
const totalRecords = counts.reduce((sum, c) => sum + c.count, 0);
if (totalRecords === 0) {
setImportParseError("That file doesn't look like an R-DUB's backup — no recognizable data found in it.");
return;
}
setImportPreview({ data: parsed, counts, exportedAt: parsed.exportedAt || null });
} catch (err) {
setImportParseError("Couldn't read that file — make sure it's a backup .json downloaded from this app.");
}
};
reader.onerror = () => setImportParseError("Couldn't read that file — try again.");
reader.readAsText(file);
}
async function confirmImport() {
if (!importPreview) return;
setImporting(true);
try {
for (const t of IMPORT_TABLE_MAP) {
const items = Array.isArray(importPreview.data[t.label]) ? importPreview.data[t.label] : [];
if (items.length === 0) continue;
const table = await loadTable(t.tableKey, t.shared);
items.forEach((item) => {
try {
const id = t.recordId(item);
if (id) table[id] = item;
} catch (e) {}
});
await saveTable(t.tableKey, t.shared, table);
}
if (importPreview.data.availability) {
try {
await fetch(`${API_BASE}/api/availability`, {
method: "POST",
headers: authHeaders({ "Content-Type": "application/json" }),
body: JSON.stringify({ template: importPreview.data.availability }),
});
} catch (e) {}
}
if (importPreview.data.siteContent) {
try {
await fetch(`${API_BASE}/api/site-content`, {
method: "POST",
headers: authHeaders({ "Content-Type": "application/json" }),
body: JSON.stringify({ content: importPreview.data.siteContent }),
});
} catch (e) {}
}
setImportPreview(null);
setImportFeedback("Imported! Reloading…");
await loadAll();
setTimeout(() => setImportFeedback(""), 3000);
} catch (e) {
setImportFeedback("Something went wrong during import — try again.");
} finally {
setImporting(false);
}
}
const now = new Date();
const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
const yearStart = new Date(now.getFullYear(), 0, 1).getTime();
const thisMonthExpenses = expenses.filter((e) => e.timestamp >= monthStart).reduce((sum, e) => sum + e.amount, 0);
const ytdExpenses = expenses.filter((e) => e.timestamp >= yearStart).reduce((sum, e) => sum + e.amount, 0);
const completedJobs = history.filter((h) => h.status === "completed");
const thisMonthRevenue = completedJobs.filter((h) => h.timestamp >= monthStart).reduce((sum, h) => sum + h.total, 0);
const ytdRevenue = completedJobs.filter((h) => h.timestamp >= yearStart).reduce((sum, h) => sum + h.total, 0);
const unpaidJobs = completedJobs.filter((h) => h.paymentStatus !== "paid");
const outstandingTotal = unpaidJobs.reduce((sum, h) => sum + h.total, 0);
const thisMonthProfit = thisMonthRevenue - thisMonthExpenses;
const ytdProfit = ytdRevenue - ytdExpenses;
const jobProfitMap = {};
expenses.forEach((e) => {
if (e.jobTimestamp) {
jobProfitMap[e.jobTimestamp] = (jobProfitMap[e.jobTimestamp] || 0) + e.amount;
}
});
return (
<div className="pb-8">
<div className="px-4 pt-5 pb-4 border-b border-gray-200 flex items-center gap-3">
<Badge />
<div>
<p className="text-base font-medium text-gray-900">R-DUB's Lawn Care</p>
<p className="text-sm" style={{ color: "var(--accent)" }}>Books</p>
</div>
</div>
<div className="px-4 py-4 space-y-6">
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>Summary</h2>
<div className="flex rounded-lg border border-gray-300 overflow-hidden text-sm mb-3">
<button onClick={() => setSummaryPeriod("month")} className="flex-1 py-2"
style={summaryPeriod === "month" ? { backgroundColor: ACCENT_HEX, color: "white" } : { backgroundColor: "var(--surface)", color: "var(--text)" }}>
This month
</button>
<button onClick={() => setSummaryPeriod("ytd")} className="flex-1 py-2"
style={summaryPeriod === "ytd" ? { backgroundColor: ACCENT_HEX, color: "white" } : { backgroundColor: "var(--surface)", color: "var(--text)" }}>
Year to date
</button>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="border border-gray-200 rounded-lg p-3">
<p className="text-xs text-gray-500">Revenue</p>
<p className="text-xl font-medium text-gray-900">
${(summaryPeriod === "month" ? thisMonthRevenue : ytdRevenue).toFixed(2)}
</p>
</div>
<div className="border border-gray-200 rounded-lg p-3">
<p className="text-xs text-gray-500">Expenses</p>
<p className="text-xl font-medium text-gray-900">
${(summaryPeriod === "month" ? thisMonthExpenses : ytdExpenses).toFixed(2)}
</p>
</div>
</div>
<div className="border border-gray-200 rounded-lg p-3 mt-3">
<p className="text-xs text-gray-500">Profit</p>
<p className="text-xl font-medium" style={{ color: (summaryPeriod === "month" ? thisMonthProfit : ytdProfit) >= 0 ? "var(--success)" : "var(--warn)" }}>
${(summaryPeriod === "month" ? thisMonthProfit : ytdProfit).toFixed(2)}
</p>
</div>
{outstandingTotal > 0 && (
<div className="border rounded-lg p-3 mt-3" style={{ borderColor: "var(--warn)", backgroundColor: "#FEF3C7" }}>
<p className="text-xs" style={{ color: "var(--warn)" }}>Outstanding — {unpaidJobs.length} job{unpaidJobs.length === 1 ? "" : "s"}, all-time</p>
<p className="text-xl font-medium" style={{ color: "var(--warn)" }}>${outstandingTotal.toFixed(2)}</p>
</div>
)}
</section>
{unpaidJobs.length > 0 && (
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>Outstanding payments</h2>
<div className="border border-gray-200 rounded-lg divide-y divide-gray-100">
{unpaidJobs.slice().sort((a, b) => b.timestamp - a.timestamp).map((job) => (
<div key={job.timestamp} className="px-3 py-2.5">
<div className="flex items-center justify-between gap-2">
<div>
<p className="text-sm text-gray-900 font-medium">{job.customerName || "Unnamed"}</p>
<p className="text-xs text-gray-400">{new Date(job.timestamp).toLocaleDateString()}</p>
</div>
<span className="text-sm font-semibold text-gray-900 shrink-0">${job.total}</span>
</div>
<div className="flex items-center gap-3 mt-1.5">
{job.phone && (
<>
<a href={`tel:${job.phone}`} className="text-xs underline" style={{ color: "var(--accent)" }}>Call</a>
<a href={`sms:${job.phone}`} className="text-xs underline" style={{ color: "var(--accent)" }}>Text</a>
</>
)}
<button onClick={() => markJobPaidFromBooks(job)} className="text-xs underline ml-auto" style={{ color: "var(--success)" }}>
Mark paid
</button>
</div>
</div>
))}
</div>
</section>
)}
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>Add Expense</h2>
<div className="border border-gray-200 rounded-lg p-3 space-y-3">
<div>
<label className="block text-xs text-gray-500 mb-1">Category</label>
<div className="flex flex-wrap gap-1.5">
{EXPENSE_CATEGORIES.map((cat) => (
<button key={cat} onClick={() => setCategory(cat)} className="text-xs rounded-full px-3 py-1 border"
style={category === cat ? { backgroundColor: ACCENT_HEX, borderColor: ACCENT_HEX, color: "white" } : { borderColor: "var(--border-strong)", color: "var(--text)" }}>
{cat}
</button>
))}
</div>
</div>
<div>
<label className="block text-xs text-gray-500 mb-1">Description</label>
<input type="text" value={description} onChange={(e) => setDescription(e.target.value)}
placeholder="e.g. Trimmer line, 3 bags of mulch, oil change"
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
</div>
<div className="grid grid-cols-2 gap-2">
<div>
<label className="block text-xs text-gray-500 mb-1">Amount</label>
<input type="number" min="0" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)}
placeholder="0.00" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
</div>
<div>
<label className="block text-xs text-gray-500 mb-1">Vendor (optional)</label>
<input type="text" value={vendor} onChange={(e) => setVendor(e.target.value)}
placeholder="e.g. Home Depot" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
</div>
</div>
<div>
<label className="block text-xs text-gray-500 mb-1">Tag to a job (optional — for profit tracking)</label>
<select value={linkedJobKey} onChange={(e) => setLinkedJobKey(e.target.value)}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
<option value="">No job — general expense</option>
{history.slice(0, 40).map((h) => (
<option key={h.timestamp} value={String(h.timestamp)}>
{h.customerName || "Unnamed"} — {new Date(h.timestamp).toLocaleDateString()} (${h.total})
</option>
))}
</select>
</div>
<button onClick={saveExpense} disabled={saving} className="w-full rounded-lg py-2 text-sm text-white"
style={{ backgroundColor: ACCENT_HEX, opacity: saving ? 0.7 : 1 }}>
{saving ? "Saving…" : saveLabel || "Add Expense"}
</button>
</div>
</section>
<section>
<div className="flex items-center justify-between mb-2">
<h2 className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--accent)" }}>Inventory on Hand</h2>
<button onClick={() => openRestockModal(null)} className="text-xs rounded-full px-3 py-1 text-white" style={{ backgroundColor: ACCENT_HEX }}>
+ Add Stock
</button>
</div>
{inventoryItems.length === 0 ? (
<p className="text-xs text-gray-400">Nothing tracked yet — tap "+ Add Stock" above to start.</p>
) : (
<div className="space-y-2">
{inventoryItems.map((item) => {
const low = item.lowStockThreshold > 0 && item.currentQty <= item.lowStockThreshold;
return (
<div key={item.id} className="border rounded-lg p-3 text-sm" style={{ borderColor: low ? "var(--warn)" : "var(--border)" }}>
<div className="flex items-center justify-between gap-2">
<div>
<p className="text-gray-900 font-medium">{item.name}</p>
<p className="text-xs" style={{ color: low ? "var(--warn)" : "var(--text-muted)" }}>
{item.currentQty} {item.unit} on hand{low ? " — low stock" : ""}
</p>
</div>
<div className="flex items-center gap-2 shrink-0">
<button onClick={() => openRestockModal(item)} className="text-xs rounded-full px-3 py-1 border" style={{ borderColor: "var(--border-strong)", color: "var(--text)" }}>
Restock
</button>
<button onClick={() => openUsageModal(item)} className="text-xs rounded-full px-3 py-1 border" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
Log usage
</button>
</div>
</div>
{thresholdEditId === item.id ? (
<div className="flex items-center gap-2 mt-2">
<input type="number" min="0" value={thresholdValue} onChange={(e) => setThresholdValue(e.target.value)}
className="w-20 border border-gray-300 rounded-md px-2 py-1 text-xs" placeholder="0" />
<button onClick={() => saveThreshold(item)} className="text-xs underline" style={{ color: "var(--accent)" }}>Save</button>
<button onClick={() => setThresholdEditId(null)} className="text-xs underline text-gray-400">Cancel</button>
</div>
) : (
<button onClick={() => { setThresholdEditId(item.id); setThresholdValue(String(item.lowStockThreshold || "")); }}
className="text-xs underline text-gray-400 mt-1">
{item.lowStockThreshold > 0 ? `Low-stock alert at ${item.lowStockThreshold} ${item.unit}` : "Set low-stock alert"}
</button>
)}
</div>
);
})}
</div>
)}
</section>
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>Recent Expenses</h2>
{expensesLoading ? (
<p className="text-xs text-gray-400">Loading…</p>
) : expenses.length === 0 ? (
<p className="text-xs text-gray-400">No expenses logged yet.</p>
) : (
<div className="space-y-1.5">
{expenses.map((e) => (
<div key={e.timestamp} className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2 text-sm">
<div>
<p className="text-gray-900">{e.description}</p>
<p className="text-xs text-gray-400">
{e.category} · {new Date(e.timestamp).toLocaleDateString()}
{e.jobCustomerName && <> · for {e.jobCustomerName}</>}
{e.vendor && <> · {e.vendor}</>}
</p>
</div>
<div className="flex items-center gap-2 shrink-0">
<span className="font-medium text-gray-900">${e.amount.toFixed(2)}</span>
<button onClick={() => setDeleteConfirmExpense(e)} className="text-gray-400" aria-label="Delete expense">
<Trash2 size={14} />
</button>
</div>
</div>
))}
</div>
)}
</section>
{Object.keys(jobProfitMap).length > 0 && (
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>Profit by Job</h2>
<div className="space-y-1.5">
{Object.keys(jobProfitMap).map((jt) => {
const job = history.find((h) => String(h.timestamp) === jt);
if (!job) return null;
const cost = jobProfitMap[jt];
const profit = job.total - cost;
return (
<div key={jt} className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2 text-sm">
<div>
<p className="text-gray-900">{job.customerName || "Unnamed"}</p>
<p className="text-xs text-gray-400">Revenue ${job.total} − costs ${cost.toFixed(2)}</p>
</div>
<span className="font-medium" style={{ color: profit >= 0 ? "var(--success)" : "var(--warn)" }}>
${profit.toFixed(2)}
</span>
</div>
);
})}
</div>
</section>
)}
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>Backup & Export</h2>
<div className="border border-gray-200 rounded-lg p-3 space-y-3">
<div>
<p className="text-sm text-gray-900 font-medium">Download everything</p>
<p className="text-xs text-gray-500 mb-2">Every customer, job, appointment, expense, and inventory record — one file, yours to keep.</p>
<button onClick={exportAllDataJSON} disabled={exportingAll}
className="text-xs rounded-full px-3 py-1.5 text-white" style={{ backgroundColor: ACCENT_HEX, opacity: exportingAll ? 0.7 : 1 }}>
{exportingAll ? "Preparing…" : exportFeedback || "Download backup (.json)"}
</button>
</div>
<div className="border-t border-gray-200 pt-3">
<p className="text-sm text-gray-900 font-medium">Jobs & revenue</p>
<p className="text-xs text-gray-500 mb-2">Opens straight in Excel or Google Sheets.</p>
<button onClick={exportJobsCSV} className="text-xs rounded-full px-3 py-1.5 border" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
Download jobs (.csv)
</button>
</div>
<div className="border-t border-gray-200 pt-3">
<p className="text-sm text-gray-900 font-medium">Expenses</p>
<p className="text-xs text-gray-500 mb-2">For your accountant, or your own tax prep.</p>
<button onClick={exportExpensesCSV} className="text-xs rounded-full px-3 py-1.5 border" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
Download expenses (.csv)
</button>
</div>
<div className="border-t border-gray-200 pt-3">
<p className="text-sm text-gray-900 font-medium">Import a backup</p>
<p className="text-xs text-gray-500 mb-2">Bring in a backup .json downloaded from this app — adds to what's already here, doesn't erase it.</p>
<label className="inline-block text-xs rounded-full px-3 py-1.5 border cursor-pointer" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
{importFeedback || "Choose backup file…"}
<input type="file" accept="application/json,.json" onChange={handleImportFileSelect} className="hidden" />
</label>
{importParseError && (
<p className="text-xs mt-2" style={{ color: "var(--warn)" }}>{importParseError}</p>
)}
</div>
</div>
</section>
</div>
<p className="text-center text-xs px-4 pb-4" style={{ color: "var(--text-faint)" }}>{motivationLine}</p>
{importPreview && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={() => { if (!importing) setImportPreview(null); }}>
<div className="bg-white rounded-lg p-4 w-full max-w-sm shadow-lg" onClick={(e) => e.stopPropagation()}>
<p className="text-sm font-semibold text-gray-900 mb-1">Import this backup?</p>
<p className="text-xs text-gray-500 mb-3">
{importPreview.exportedAt ? `Backed up ${formatSlotDate(importPreview.exportedAt.slice(0, 10))}. ` : ""}
This adds to what's already in the app — matching records get updated, nothing gets deleted.
</p>
<div className="border border-gray-200 rounded-lg divide-y divide-gray-100 mb-4">
{importPreview.counts.filter((c) => c.count > 0).map((c) => (
<div key={c.displayName} className="flex items-center justify-between px-3 py-1.5 text-xs">
<span className="text-gray-600">{c.displayName}</span>
<span className="font-medium text-gray-900">{c.count}</span>
</div>
))}
</div>
<div className="flex gap-2">
<button onClick={() => setImportPreview(null)} disabled={importing} className="flex-1 border border-gray-300 rounded-lg py-2 text-sm text-gray-700">
Cancel
</button>
<button onClick={confirmImport} disabled={importing}
className="flex-1 rounded-lg py-2 text-sm text-white" style={{ backgroundColor: ACCENT_HEX, opacity: importing ? 0.7 : 1 }}>
{importing ? "Importing…" : "Import"}
</button>
</div>
</div>
</div>
)}
{restockOpen && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={closeRestockModal}>
<div className="bg-white rounded-lg p-4 w-full max-w-sm shadow-lg" onClick={(e) => e.stopPropagation()}>
<p className="text-sm font-semibold text-gray-900 mb-3">Add Stock</p>
<label className="block text-xs text-gray-500 mb-1">Item name</label>
<input type="text" value={restockName} onChange={(e) => setRestockName(e.target.value)}
placeholder="e.g. Mulch" list="inv-item-names-restock" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-3" />
<datalist id="inv-item-names-restock">
{inventoryItems.map((it) => <option key={it.id} value={it.name} />)}
</datalist>
<div className="grid grid-cols-2 gap-2 mb-3">
<div>
<label className="block text-xs text-gray-500 mb-1">Quantity</label>
<input type="number" min="0" step="1" value={restockQty} onChange={(e) => setRestockQty(e.target.value)}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
</div>
<div>
<label className="block text-xs text-gray-500 mb-1">Unit</label>
<select value={restockUnit} onChange={(e) => setRestockUnit(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
{["bags", "lbs", "gallons", "each", "boxes"].map((u) => <option key={u} value={u}>{u}</option>)}
</select>
</div>
</div>
<label className="block text-xs text-gray-500 mb-1">What it cost (optional — also logs it as an expense)</label>
<input type="number" min="0" step="0.01" value={restockCost} onChange={(e) => setRestockCost(e.target.value)}
placeholder="0.00" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-4" />
<div className="flex gap-2">
<button onClick={closeRestockModal} className="flex-1 border border-gray-300 rounded-lg py-2 text-sm text-gray-700">
Cancel
</button>
<button onClick={confirmRestock} disabled={restockSaving || !restockName.trim() || !restockQty}
className="flex-1 rounded-lg py-2 text-sm text-white" style={{ backgroundColor: ACCENT_HEX, opacity: restockSaving ? 0.7 : 1 }}>
{restockSaving ? "Saving…" : "Add Stock"}
</button>
</div>
</div>
</div>
)}
{usageItem && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={() => setUsageItem(null)}>
<div className="bg-white rounded-lg p-4 w-full max-w-sm shadow-lg" onClick={(e) => e.stopPropagation()}>
<p className="text-sm font-semibold text-gray-900 mb-3">Log usage — {usageItem.name}</p>
<label className="block text-xs text-gray-500 mb-1">Quantity used ({usageItem.unit})</label>
<input type="number" min="0" step="1" value={usageQty} onChange={(e) => setUsageQty(e.target.value)}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-3" />
<label className="block text-xs text-gray-500 mb-1">Used on a job? (optional — adds the cost to that job)</label>
<select value={usageJobKey} onChange={(e) => setUsageJobKey(e.target.value)}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white mb-4">
<option value="">Not tied to a job</option>
{history.slice(0, 40).map((h) => (
<option key={h.timestamp} value={String(h.timestamp)}>
{h.customerName || "Unnamed"} — {new Date(h.timestamp).toLocaleDateString()}
</option>
))}
</select>
<div className="flex gap-2">
<button onClick={() => setUsageItem(null)} className="flex-1 border border-gray-300 rounded-lg py-2 text-sm text-gray-700">
Cancel
</button>
<button onClick={confirmUsage} disabled={usageSaving || !usageQty}
className="flex-1 rounded-lg py-2 text-sm text-white" style={{ backgroundColor: ACCENT_HEX, opacity: usageSaving ? 0.7 : 1 }}>
{usageSaving ? "Saving…" : "Log usage"}
</button>
</div>
</div>
</div>
)}
{deleteConfirmExpense && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={() => setDeleteConfirmExpense(null)}>
<div className="bg-white rounded-lg p-4 w-full max-w-xs shadow-lg" onClick={(e) => e.stopPropagation()}>
<p className="text-sm font-semibold text-gray-900 mb-1">Delete this expense?</p>
<p className="text-xs text-gray-500 mb-4">{deleteConfirmExpense.description} — ${deleteConfirmExpense.amount.toFixed(2)}</p>
<div className="flex gap-2">
<button onClick={() => setDeleteConfirmExpense(null)} className="flex-1 border border-gray-300 rounded-lg py-2 text-sm text-gray-700">
Cancel
</button>
<button onClick={() => deleteExpense(deleteConfirmExpense)} className="flex-1 rounded-lg py-2 text-sm text-white bg-red-600">
Delete
</button>
</div>
</div>
</div>
)}
</div>
);
}
function BugReportsView({ userRole, currentUsername }) {
const [description, setDescription] = useState("");
const [context, setContext] = useState("");
const [submitting, setSubmitting] = useState(false);
const [submitFeedback, setSubmitFeedback] = useState("");
const [reports, setReports] = useState([]);
const [reportsLoading, setReportsLoading] = useState(userRole === "owner");
useEffect(() => {
if (userRole !== "owner") return;
(async () => {
const table = await loadTable(TABLE_KEYS.bugReports, false);
setReports(Object.values(table).sort((a, b) => b.createdAt - a.createdAt));
setReportsLoading(false);
})();
}, [userRole]);
async function submitReport() {
if (!description.trim()) return;
setSubmitting(true);
setSubmitFeedback("");
const id = `bug-${Date.now()}`;
const ok = await setTableRecord(TABLE_KEYS.bugReports, false, id, {
id, description: description.trim(), context: context.trim(),
});
setSubmitting(false);
if (ok) {
setDescription("");
setContext("");
setSubmitFeedback("Thanks — sent.");
setTimeout(() => setSubmitFeedback(""), 3000);
if (userRole === "owner") {
setReports((prev) => [
{ id, description: description.trim(), context: context.trim(), reportedBy: currentUsername, reportedByRole: userRole, status: "open", createdAt: Date.now() },
...prev,
]);
}
} else {
setSubmitFeedback("Couldn't send — try again.");
}
}
async function markResolved(report) {
setReports((prev) => prev.map((r) => (r.id === report.id ? { ...r, status: "resolved" } : r)));
try {
await fetch(`${API_BASE}/api/bug-reports/${encodeURIComponent(report.id)}`, {
method: "POST",
headers: authHeaders({ "Content-Type": "application/json" }),
body: JSON.stringify({ status: "resolved" }),
});
} catch (e) {}
}
async function deleteReport(report) {
setReports((prev) => prev.filter((r) => r.id !== report.id));
await deleteTableRecord(TABLE_KEYS.bugReports, false, report.id);
}
const openReports = reports.filter((r) => r.status !== "resolved");
const resolvedReports = reports.filter((r) => r.status === "resolved");
return (
<div className="pb-8">
<div className="px-4 pt-5 pb-4 border-b border-gray-200 flex items-center gap-3">
<Badge />
<div>
<p className="text-base font-medium text-gray-900">R-DUB's Lawn Care</p>
<p className="text-sm" style={{ color: "var(--accent)" }}>Report a Bug</p>
</div>
</div>
<div className="px-4 py-4 space-y-5">
<section>
<label className="block text-xs text-gray-500 mb-1">What went wrong?</label>
<textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4}
placeholder="Describe what happened, and what you expected instead…"
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
<label className="block text-xs text-gray-500 mt-3 mb-1">Where were you? (optional)</label>
<input type="text" value={context} onChange={(e) => setContext(e.target.value)}
placeholder="e.g. Jobs tab, marking a job complete"
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
<button onClick={submitReport} disabled={submitting || !description.trim()}
className="w-full rounded-lg py-2.5 text-sm text-white font-medium mt-3"
style={{ backgroundColor: ACCENT_HEX, opacity: submitting || !description.trim() ? 0.6 : 1 }}>
{submitting ? "Sending…" : "Send Report"}
</button>
{submitFeedback && <p className="text-xs text-center mt-2" style={{ color: "var(--accent)" }}>{submitFeedback}</p>}
</section>
{userRole === "owner" && (
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>
Reports {openReports.length > 0 ? `(${openReports.length} open)` : ""}
</h2>
{reportsLoading ? (
<p className="text-xs text-gray-400">Loading…</p>
) : reports.length === 0 ? (
<p className="text-xs text-gray-400">No reports yet.</p>
) : (
<div className="space-y-2">
{openReports.map((r) => (
<div key={r.id} className="border rounded-lg p-3 text-xs" style={{ borderColor: "var(--warn)", backgroundColor: "#FEF3C7" }}>
<p className="text-gray-800">{r.description}</p>
{r.context && <p className="text-gray-500 mt-1">📍 {r.context}</p>}
<div className="flex items-center justify-between mt-2">
<span className="text-gray-500">{r.reportedBy || "unknown"} · {new Date(r.createdAt).toLocaleDateString()}</span>
<div className="flex gap-2">
<button onClick={() => markResolved(r)} className="font-medium" style={{ color: "var(--success)" }}>Resolve</button>
<button onClick={() => deleteReport(r)} className="text-gray-400"><Trash2 size={13} /></button>
</div>
</div>
</div>
))}
{resolvedReports.map((r) => (
<div key={r.id} className="border border-gray-200 rounded-lg p-3 text-xs opacity-60">
<p className="text-gray-600 line-through">{r.description}</p>
<div className="flex items-center justify-between mt-2">
<span className="text-gray-400">{r.reportedBy || "unknown"} · resolved</span>
<button onClick={() => deleteReport(r)} className="text-gray-400"><Trash2 size={13} /></button>
</div>
</div>
))}
</div>
)}
</section>
)}
</div>
</div>
);
}
const ONBOARD_WORDS = ["river", "maple", "cedar", "birch", "clover", "meadow", "willow", "acorn", "harbor", "ridge", "pine", "hollow"];
function generateOnboardPassword() {
const w1 = ONBOARD_WORDS[Math.floor(Math.random() * ONBOARD_WORDS.length)];
const w2 = ONBOARD_WORDS[Math.floor(Math.random() * ONBOARD_WORDS.length)];
const num = Math.floor(100 + Math.random() * 900);
return `${w1}-${w2}-${num}`;
}
function TeamView({ authToken, currentUsername }) {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [newName, setNewName] = useState("");
const [newUsername, setNewUsername] = useState("");
const [newRole, setNewRole] = useState("crew");
const [newPassword, setNewPassword] = useState(() => generateOnboardPassword());
const [creating, setCreating] = useState(false);
const [createError, setCreateError] = useState("");
const [justCreated, setJustCreated] = useState(null);
const [removeConfirm, setRemoveConfirm] = useState(null);
const [copied, setCopied] = useState(false);
const [pausingUsername, setPausingUsername] = useState(null);
const [resetTarget, setResetTarget] = useState(null);
const [resetPassword, setResetPassword] = useState("");
const [resetting, setResetting] = useState(false);
const [resetDone, setResetDone] = useState(null);
const [deletedCustomers, setDeletedCustomers] = useState([]);
const [deletedLoading, setDeletedLoading] = useState(true);
const [restoringId, setRestoringId] = useState(null);
const [restoredIds, setRestoredIds] = useState({});
const [changingRoleUsername, setChangingRoleUsername] = useState(null);
const [roleChangeError, setRoleChangeError] = useState("");
async function changeTeamRole(username, role) {
setChangingRoleUsername(username);
setRoleChangeError("");
try {
const res = await fetch(`${API_BASE}/api/auth/users/${encodeURIComponent(username)}/role`, {
method: "POST",
headers: authHeaders({ "Content-Type": "application/json" }),
body: JSON.stringify({ role }),
});
const data = await res.json().catch(() => ({}));
if (!res.ok) throw new Error(data.error || "Couldn't change this team member's role.");
await loadUsers();
} catch (e) {
setRoleChangeError(e.message || "Couldn't change this team member's role.");
}
setChangingRoleUsername(null);
}
async function loadUsers() {
setLoading(true);
try {
const res = await fetch(`${API_BASE}/api/auth/users`, { headers: authHeaders() });
if (res.ok) {
const data = await res.json();
setUsers(data.users || []);
}
} catch (e) {}
setLoading(false);
}
useEffect(() => { loadUsers(); loadDeletedCustomers(); }, []);
async function loadDeletedCustomers() {
setDeletedLoading(true);
try {
const res = await fetch(`${API_BASE}/api/deleted-customers`, { headers: authHeaders() });
if (res.ok) {
const data = await res.json();
setDeletedCustomers(data.deletedCustomers || []);
}
} catch (e) {}
setDeletedLoading(false);
}
async function restoreCustomer(entry) {
setRestoringId(entry.id);
try {
const res = await fetch(`${API_BASE}/api/deleted-customers/${encodeURIComponent(entry.id)}/restore`, {
method: "POST",
headers: authHeaders({ "Content-Type": "application/json" }),
});
if (res.ok) setRestoredIds((prev) => ({ ...prev, [entry.id]: true }));
} catch (e) {}
setRestoringId(null);
}
async function togglePause(username, currentlyDisabled) {
setPausingUsername(username);
setUsers((prev) => prev.map((u) => (u.username === username ? { ...u, disabled: currentlyDisabled ? 0 : 1 } : u)));
try {
await fetch(`${API_BASE}/api/auth/users/${encodeURIComponent(username)}/pause`, {
method: "POST",
headers: authHeaders({ "Content-Type": "application/json" }),
body: JSON.stringify({ disabled: !currentlyDisabled }),
});
} catch (e) {}
setPausingUsername(null);
}
function startReset(username) {
setResetTarget(username);
setResetPassword(generateOnboardPassword());
setResetDone(null);
}
async function submitReset() {
setResetting(true);
try {
const res = await fetch(`${API_BASE}/api/auth/users/${encodeURIComponent(resetTarget)}/reset-password`, {
method: "POST",
headers: authHeaders({ "Content-Type": "application/json" }),
body: JSON.stringify({ newPassword: resetPassword }),
});
if (res.ok) {
setResetDone({ username: resetTarget, password: resetPassword });
setResetTarget(null);
}
} catch (e) {}
setResetting(false);
}
async function createUser() {
if (!newUsername.trim()) {
setCreateError("Enter a username.");
return;
}
setCreating(true);
setCreateError("");
try {
const res = await fetch(`${API_BASE}/api/auth/invite`, {
method: "POST",
headers: authHeaders({ "Content-Type": "application/json" }),
body: JSON.stringify({ username: newUsername.trim(), password: newPassword, name: newName.trim(), role: newRole }),
});
const data = await res.json();
if (!res.ok) {
setCreateError(data.error || "Couldn't create the login.");
setCreating(false);
return;
}
setJustCreated({ username: newUsername.trim(), password: newPassword, name: newName.trim(), role: newRole });
setNewName("");
setNewUsername("");
setNewRole("crew");
setNewPassword(generateOnboardPassword());
await loadUsers();
} catch (e) {
setCreateError("Couldn't reach the server — try again.");
}
setCreating(false);
}
async function removeUser(username) {
setRemoveConfirm(null);
setUsers((prev) => prev.filter((u) => u.username !== username));
try {
await fetch(`${API_BASE}/api/auth/users/${encodeURIComponent(username)}`, {
method: "DELETE",
headers: authHeaders(),
});
} catch (e) {}
}
function copyCredentials() {
if (!justCreated) return;
const text = `R-DUB's Lawn Care login\nUsername: ${justCreated.username}\nPassword: ${justCreated.password}`;
copyText(text, () => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
}
return (
<div className="pb-8">
<div className="px-4 pt-5 pb-4 border-b border-gray-200 flex items-center gap-3">
<Badge />
<div>
<p className="text-base font-medium text-gray-900">R-DUB's Lawn Care</p>
<p className="text-sm" style={{ color: "var(--accent)" }}>Team Management</p>
</div>
</div>
<div className="px-4 py-4 space-y-5">
{justCreated && (
<div className="border rounded-lg p-3 text-xs" style={{ borderColor: "var(--success)", backgroundColor: "#ECFDF5" }}>
<p className="font-medium text-gray-800 mb-1">{justCreated.role === "manager" ? "Manager" : "Crew"} login created — share these with {justCreated.name || justCreated.username} now.</p>
<p className="text-gray-600">This password won't be shown again after you leave this screen.</p>
<div className="bg-white border border-gray-200 rounded-md p-2 mt-2 font-mono text-gray-800">
<div>Username: {justCreated.username}</div>
<div>Password: {justCreated.password}</div>
</div>
<button onClick={copyCredentials} className="w-full rounded-lg py-2 text-xs font-medium mt-2 text-white" style={{ backgroundColor: ACCENT_HEX }}>
{copied ? "Copied!" : "Copy to share"}
</button>
<button onClick={() => setJustCreated(null)} className="w-full text-center text-gray-400 mt-2">Done</button>
</div>
)}
{!justCreated && (
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>Add a Team Member</h2>
<label className="block text-xs text-gray-500 mb-1">Name</label>
<input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="e.g. Mike"
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-3" />
<label className="block text-xs text-gray-500 mb-1">Username</label>
<input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} placeholder="e.g. mike"
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-3" autoCapitalize="none" autoCorrect="off" />
<label className="block text-xs text-gray-500 mb-1">Role</label>
<div className="flex gap-2 mb-3">
<button onClick={() => setNewRole("crew")}
className="flex-1 rounded-lg py-2 text-xs font-medium border"
style={newRole === "crew" ? { borderColor: "var(--accent)", backgroundColor: "var(--surface-alt)", color: "var(--accent)" } : { borderColor: "#D1D5DB", color: "#6B7280" }}>
Crew
</button>
<button onClick={() => setNewRole("manager")}
className="flex-1 rounded-lg py-2 text-xs font-medium border"
style={newRole === "manager" ? { borderColor: "var(--accent)", backgroundColor: "var(--surface-alt)", color: "var(--accent)" } : { borderColor: "#D1D5DB", color: "#6B7280" }}>
Manager
</button>
</div>
<label className="block text-xs text-gray-500 mb-1">Password (generated for you)</label>
<div className="flex items-center gap-2">
<input type="text" value={newPassword} readOnly className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm font-mono bg-gray-50" />
<button onClick={() => setNewPassword(generateOnboardPassword())} className="text-xs px-2 py-2 border border-gray-300 rounded-md text-gray-500">New</button>
</div>
{createError && <p className="text-xs mt-2" style={{ color: "var(--warn)" }}>{createError}</p>}
<button onClick={createUser} disabled={creating || !newUsername.trim()}
className="w-full rounded-lg py-2.5 text-sm text-white font-medium mt-3"
style={{ backgroundColor: ACCENT_HEX, opacity: creating || !newUsername.trim() ? 0.6 : 1 }}>
{creating ? "Creating…" : "Create Login"}
</button>
<p className="text-xs text-gray-400 mt-2">
{newRole === "manager"
? "Managers can delete customers, change phone numbers, override prices, and bulk-reschedule — but still won't see Books, payment status, or team/website settings."
: "Crew accounts won't see Books or payment status, and can't delete customers, change phone numbers, or override locked prices."}
</p>
</section>
)}
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>Who Has Access</h2>
{roleChangeError && <div className="mb-2 text-xs font-medium text-red-700 border border-red-200 bg-red-50 rounded-lg p-2">{roleChangeError}</div>}
{loading ? (
<p className="text-xs text-gray-400">Loading…</p>
) : (
<div className="space-y-2">
{users.map((u) => (
<div key={u.username} className="border border-gray-200 rounded-lg p-3 text-xs">
<div className="flex items-center justify-between">
<div>
<p className="font-medium text-gray-800">
{u.name || u.username}
{!!u.disabled && <span className="ml-2 text-xs font-normal px-1.5 py-0.5 rounded" style={{ backgroundColor: "#FEF3C7", color: "#92400E" }}>Paused</span>}
</p>
<p className="text-gray-400">{u.username} · {u.role === "owner" ? "Owner" : u.role === "manager" ? "Manager" : "Crew"}</p>
</div>
{u.username !== currentUsername && u.role !== "owner" && (
removeConfirm === u.username ? (
<div className="flex items-center gap-2">
<button onClick={() => removeUser(u.username)} className="text-white rounded px-2 py-1" style={{ backgroundColor: "#DC2626" }}>Remove</button>
<button onClick={() => setRemoveConfirm(null)} className="text-gray-400">Cancel</button>
</div>
) : (
<button onClick={() => setRemoveConfirm(u.username)} className="text-gray-400"><Trash2 size={14} /></button>
)
)}
</div>
{u.username !== currentUsername && u.role !== "owner" && (
<div className="mt-2 rounded-lg border border-gray-200 bg-gray-50 p-2">
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-xs font-bold text-gray-700">Current role</p>
<p className="text-xs text-gray-500">Changes what this person can access.</p>
</div>
<select value={u.role === "manager" ? "manager" : "crew"}
disabled={changingRoleUsername === u.username}
onChange={(e) => changeTeamRole(u.username, e.target.value)}
className="border border-gray-300 rounded-lg bg-white px-2 py-2 text-xs font-bold text-gray-800">
<option value="crew">Crew</option>
<option value="manager">Manager</option>
</select>
</div>
</div>
)}
{u.username !== currentUsername && u.role !== "owner" && (
<button onClick={() => togglePause(u.username, u.disabled)} disabled={pausingUsername === u.username}
className="w-full mt-2 rounded-md py-1.5 text-xs font-medium border"
style={u.disabled
? { borderColor: "var(--success)", color: "var(--success)" }
: { borderColor: "var(--warn)", color: "#92400E" }}>
{pausingUsername === u.username ? "…" : u.disabled ? "Resume access" : "Pause access instantly"}
</button>
)}
{u.username !== currentUsername && u.role !== "owner" && resetTarget !== u.username && (
<button onClick={() => startReset(u.username)}
className="w-full mt-1.5 rounded-md py-1.5 text-xs font-medium border border-gray-300 text-gray-600">
Reset password
</button>
)}
{resetTarget === u.username && (
<div className="mt-2 border border-gray-200 rounded-lg p-2.5 bg-gray-50">
<p className="text-gray-600 mb-1.5">New password for {u.name || u.username}:</p>
<div className="flex items-center gap-2 mb-2">
<input type="text" value={resetPassword} readOnly className="flex-1 border border-gray-300 rounded-md px-2 py-1.5 text-sm font-mono bg-white" />
<button onClick={() => setResetPassword(generateOnboardPassword())} className="text-xs px-2 py-1.5 border border-gray-300 rounded-md text-gray-500">New</button>
</div>
<div className="flex gap-2">
<button onClick={() => setResetTarget(null)} className="flex-1 border border-gray-300 rounded-lg py-1.5 text-gray-700">Cancel</button>
<button onClick={submitReset} disabled={resetting} className="flex-1 rounded-lg py-1.5 text-white" style={{ backgroundColor: ACCENT_HEX, opacity: resetting ? 0.7 : 1 }}>
{resetting ? "…" : "Confirm Reset"}
</button>
</div>
<p className="text-gray-400 mt-1.5">This signs them out everywhere — share the new password before they try logging in again.</p>
</div>
)}
{resetDone && resetDone.username === u.username && (
<div className="mt-2 border rounded-lg p-2.5" style={{ borderColor: "var(--success)", backgroundColor: "#ECFDF5" }}>
<p className="text-gray-700">Password reset. New password: <span className="font-mono">{resetDone.password}</span></p>
</div>
)}
</div>
))}
</div>
)}
</section>
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>Recently Deleted Customers</h2>
<p className="text-xs text-gray-400 mb-2">If a customer was deleted by mistake — or by someone who shouldn't have — restore them here.</p>
{deletedLoading ? (
<p className="text-xs text-gray-400">Loading…</p>
) : deletedCustomers.length === 0 ? (
<p className="text-xs text-gray-400">Nothing deleted recently.</p>
) : (
<div className="space-y-2">
{deletedCustomers.map((d) => {
const profile = d.profile_snapshot ? JSON.parse(d.profile_snapshot) : null;
const isRestored = d.restored || restoredIds[d.id];
return (
<div key={d.id} className="border border-gray-200 rounded-lg p-3 text-xs flex items-center justify-between">
<div>
<p className="font-medium text-gray-800">{profile ? profile.name || d.phone : d.phone}</p>
<p className="text-gray-400">
Deleted by {d.deleted_by} ({d.deleted_by_role}) · {new Date(d.deleted_at).toLocaleDateString()}
</p>
</div>
{isRestored ? (
<span className="text-gray-400">Restored</span>
) : (
<button onClick={() => restoreCustomer(d)} disabled={restoringId === d.id}
className="rounded-md px-3 py-1.5 text-xs font-medium text-white" style={{ backgroundColor: ACCENT_HEX }}>
{restoringId === d.id ? "Restoring…" : "Restore"}
</button>
)}
</div>
);
})}
</div>
)}
</section>
</div>
</div>
);
}
function GunnerHelper({ title = "Need a hand?", message, actionLabel, onAction, compact = false }) {
return (
<div className={`rounded-2xl border border-purple-200 bg-white shadow-sm overflow-hidden ${compact ? "" : "mt-3"}`}>
<div className="flex items-center gap-3 p-3">
<div className="w-16 h-16 rounded-2xl shrink-0 flex items-center justify-center overflow-hidden"
style={{ background: "linear-gradient(135deg,#F4EEFB,#E9FBE5)" }}>
<img src={GUNNER_DATA_URI} alt="Gunner, R-DUB'S app helper" className="w-16 h-16 object-contain" />
</div>
<div className="min-w-0 flex-1">
<p className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--accent)" }}>Gunner says</p>
<p className="text-base font-bold text-gray-900 mt-0.5">{title}</p>
{message && <p className="text-sm text-gray-600 mt-1 leading-relaxed">{message}</p>}
{actionLabel && onAction && (
<button onClick={onAction} className="mt-2 rounded-lg px-3 py-2 text-xs font-bold text-white"
style={{ backgroundColor: "var(--accent)" }}>{actionLabel}</button>
)}
</div>
</div>
</div>
);
}
const SCHEDULE_DAYS = [
{ key: "mon", label: "Mon" }, { key: "tue", label: "Tue" }, { key: "wed", label: "Wed" },
{ key: "thu", label: "Thu" }, { key: "fri", label: "Fri" }, { key: "sat", label: "Sat" }, { key: "sun", label: "Sun" },
];
function CrewScheduleView({ userRole }) {
const [schedules, setSchedules] = useState([]);
const [loading, setLoading] = useState(true);
const [editingUsername, setEditingUsername] = useState(null);
const [draft, setDraft] = useState({});
const [saving, setSaving] = useState(false);
const [error, setError] = useState("");
async function loadSchedules() {
setLoading(true);
setError("");
try {
const res = await fetch(`${API_BASE}/api/crew-schedules`, { headers: authHeaders() });
const data = await res.json().catch(() => ({}));
if (!res.ok) throw new Error(data.error || "Couldn't load the crew schedule.");
const rows = (data.schedules || []).map((row) => rowFromApi(row, ["schedule"], []));
setSchedules(rows);
} catch (e) {
setSchedules([]);
setError(e.message || "Couldn't load the crew schedule.");
}
setLoading(false);
}
useEffect(() => { loadSchedules(); }, []);
function safeSchedule(person) {
return person && person.schedule && typeof person.schedule === "object" ? person.schedule : {};
}
function startEdit(person) {
setEditingUsername(person.username);
setError("");
const schedule = safeSchedule(person);
const base = {};
SCHEDULE_DAYS.forEach((d) => {
base[d.key] = schedule[d.key] || { working: false, start: "08:00", end: "16:00" };
});
setDraft(base);
}
function toggleDay(dayKey) {
setDraft((prev) => ({ ...prev, [dayKey]: { ...prev[dayKey], working: !prev[dayKey].working } }));
}
function setDayTime(dayKey, field, value) {
setDraft((prev) => ({ ...prev, [dayKey]: { ...prev[dayKey], [field]: value } }));
}
async function saveSchedule() {
setSaving(true);
setError("");
try {
const res = await fetch(`${API_BASE}/api/crew-schedules/${encodeURIComponent(editingUsername)}`, {
method: "POST",
headers: authHeaders({ "Content-Type": "application/json" }),
body: JSON.stringify({ schedule: draft }),
});
const data = await res.json().catch(() => ({}));
if (!res.ok) throw new Error(data.error || "Couldn't save the schedule.");
setEditingUsername(null);
await loadSchedules();
} catch (e) {
setError(e.message || "Couldn't save the schedule.");
}
setSaving(false);
}
function formatShift(day) {
if (!day || !day.working) return "Off";
const fmt = (value) => {
if (!value) return "—";
const [h, m] = value.split(":").map(Number);
if (!Number.isFinite(h)) return value;
const period = h >= 12 ? "PM" : "AM";
const hh = h % 12 || 12;
return `${hh}${m ? `:${String(m).padStart(2, "0")}` : ""}${period}`;
};
return `${fmt(day.start)}–${fmt(day.end)}`;
}
const todayKey = DAY_KEYS[new Date().getDay()];
const workingToday = schedules.filter((person) => {
const today = safeSchedule(person)[todayKey];
return today && today.working;
});
return (
<div className="pb-10" style={{ background: "var(--surface-alt)", minHeight: "100%" }}>
<div className="px-4 pt-5 pb-5 border-b border-gray-200 bg-white">
<div className="flex items-center gap-3">
<Badge />
<div className="min-w-0">
<p className="text-lg font-semibold text-gray-900 leading-tight">Crew Schedule</p>
<p className="text-sm text-gray-600 mt-0.5">See who's working and manage the week.</p>
</div>
</div>
</div>
<div className="px-4 py-4 space-y-4">
{error && (
<div className="text-sm font-medium text-red-700 border border-red-200 bg-red-50 rounded-xl p-3">{error}</div>
)}
{!loading && (
<div className="rounded-2xl p-4 text-white shadow-sm" style={{ background: "linear-gradient(135deg, #4B2E70 0%, #68439A 100%)" }}>
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#DDD2F0" }}>Working Today</p>
<p className="text-2xl font-bold mt-1">{workingToday.length}</p>
<p className="text-sm mt-0.5" style={{ color: "#E9E2F4" }}>{workingToday.length === 1 ? "crew member scheduled" : "crew members scheduled"}</p>
</div>
<div className="rounded-xl px-3 py-2 text-center" style={{ background: "rgba(255,255,255,.12)" }}>
<Calendar size={20} />
<p className="text-xs font-semibold mt-1">{new Date().toLocaleDateString(undefined, { weekday: "short" })}</p>
</div>
</div>
<div className="mt-4 pt-3 flex flex-wrap gap-2" style={{ borderTop: "1px solid rgba(255,255,255,.16)" }}>
{workingToday.length ? workingToday.map((person) => (
<span key={person.username} className="rounded-full px-3 py-1.5 text-sm font-semibold" style={{ background: "rgba(16,185,129,.20)", border: "1px solid rgba(110,231,183,.32)" }}>
{person.name || person.username} · {formatShift(safeSchedule(person)[todayKey])}
</span>
)) : <span className="text-sm" style={{ color: "#E9E2F4" }}>No one is scheduled today.</span>}
</div>
</div>
)}
<div className="flex items-end justify-between gap-3 px-1">
<div>
<p className="text-base font-bold text-gray-900">Weekly Crew</p>
<p className="text-sm text-gray-600">Tap Edit to change availability.</p>
</div>
{!loading && <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-gray-200 text-gray-600">{schedules.length} people</span>}
</div>
{loading ? (
<div className="bg-white border border-gray-200 rounded-2xl p-5">
<p className="text-sm font-medium text-gray-500">Loading crew schedule…</p>
</div>
) : schedules.length === 0 ? (
<div className="bg-white border border-gray-200 rounded-2xl p-5 text-center">
<Users size={28} className="mx-auto text-gray-400" />
<p className="text-base font-semibold text-gray-900 mt-2">No crew accounts yet</p>
<p className="text-sm text-gray-600 mt-1">Add crew members in Team Management and they'll appear here.</p>
</div>
) : schedules.map((person) => {
const schedule = safeSchedule(person);
const today = schedule[todayKey];
const isToday = !!(today && today.working);
const workCount = SCHEDULE_DAYS.filter((d) => schedule[d.key] && schedule[d.key].working).length;
return (
<div key={person.username} className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
{editingUsername === person.username ? (
<div className="p-4">
<div className="flex items-center justify-between gap-3 mb-4">
<div>
<p className="text-lg font-bold text-gray-900">{person.name || person.username}</p>
<p className="text-sm text-gray-600">Set normal weekly hours</p>
</div>
<span className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full" style={{ color: "var(--accent)", background: "var(--surface-alt)" }}>Editing</span>
</div>
<div className="space-y-2">
{SCHEDULE_DAYS.map((d) => {
const day = draft[d.key] || { working: false, start: "08:00", end: "16:00" };
return (
<div key={d.key} className="rounded-xl border border-gray-200 p-3">
<div className="flex items-center justify-between gap-3">
<label className="flex items-center gap-2.5 text-sm font-bold text-gray-900 min-w-0">
<input type="checkbox" checked={!!day.working} onChange={() => toggleDay(d.key)} style={{ accentColor: "var(--accent)", width: 18, height: 18, touchAction: "pan-y" }} />
{d.label}
</label>
<span className={`text-xs font-semibold ${day.working ? "text-emerald-700" : "text-gray-500"}`}>{day.working ? "Working" : "Off"}</span>
</div>
{day.working && (
<div className="grid grid-cols-2 gap-2 mt-3">
<label className="text-xs font-semibold text-gray-600">Start
<input type="time" value={day.start} onChange={(e) => setDayTime(d.key, "start", e.target.value)} className="mt-1 w-full border border-gray-300 rounded-lg px-2.5 py-2.5 text-sm font-semibold text-gray-900" />
</label>
<label className="text-xs font-semibold text-gray-600">End
<input type="time" value={day.end} onChange={(e) => setDayTime(d.key, "end", e.target.value)} className="mt-1 w-full border border-gray-300 rounded-lg px-2.5 py-2.5 text-sm font-semibold text-gray-900" />
</label>
</div>
)}
</div>
);
})}
</div>
<div className="grid grid-cols-2 gap-2 mt-4">
<button onClick={() => { setEditingUsername(null); setError(""); }} className="border border-gray-300 rounded-xl py-3 text-sm font-bold text-gray-700">Cancel</button>
<button onClick={saveSchedule} disabled={saving} className="rounded-xl py-3 text-sm font-bold text-white" style={{ backgroundColor: ACCENT_HEX, opacity: saving ? 0.7 : 1 }}>
{saving ? "Saving…" : "Save Schedule"}
</button>
</div>
</div>
) : (
<>
<div className="p-4 flex items-start justify-between gap-3">
<div className="flex items-center gap-3 min-w-0">
<div className="w-11 h-11 rounded-xl flex items-center justify-center text-base font-bold shrink-0" style={{ color: "var(--accent)", background: "var(--surface-alt)" }}>
{(person.name || person.username || "?").trim().charAt(0).toUpperCase()}
</div>
<div className="min-w-0">
<div className="flex items-center flex-wrap gap-2">
<p className="text-base font-bold text-gray-900 truncate">{person.name || person.username}</p>
<span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isToday ? "text-emerald-700 bg-emerald-50" : "text-gray-500 bg-gray-100"}`}>{isToday ? "On Today" : "Off Today"}</span>
</div>
<p className="text-sm text-gray-600 mt-0.5">{person.role === "owner" ? "Owner" : person.role === "manager" ? "Manager" : "Crew"} · {workCount} {workCount === 1 ? "day" : "days"}/week</p>
</div>
</div>
{userRole === "owner" && (
<button onClick={() => startEdit(person)} className="shrink-0 flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-2 text-sm font-bold text-gray-700 bg-white">
<Pencil size={15} /> Edit
</button>
)}
</div>
<div className="px-3 pb-3 grid grid-cols-7 gap-1.5">
{SCHEDULE_DAYS.map((d) => {
const day = schedule[d.key];
const working = !!(day && day.working);
return (
<div key={d.key} className={`rounded-lg py-2 px-1 text-center border ${working ? "border-emerald-200 bg-emerald-50" : "border-gray-200 bg-gray-50"}`}>
<p className={`text-xs font-bold ${working ? "text-emerald-700" : "text-gray-500"}`}>{d.label.charAt(0)}</p>
<p className={`mt-1 font-bold ${working ? "text-gray-900" : "text-gray-400"}`} style={{ fontSize: 10 }}>{working ? formatShift(day).split("–")[0] : "Off"}</p>
</div>
);
})}
</div>
</>
)}
</div>
);
})}
</div>
</div>
);
}
function WebsiteSettingsView() {
const [content, setContent] = useState(null);
const [loading, setLoading] = useState(true);
const [savingSection, setSavingSection] = useState(null);
const [savedSection, setSavedSection] = useState(null);
const [error, setError] = useState("");
useEffect(() => {
(async () => {
try {
const res = await fetch(`${API_BASE}/api/site-content`);
const data = await res.json();
setContent(data.content || {});
} catch (e) {
setContent({});
}
setLoading(false);
})();
}, []);
function updateField(key, value) {
setContent((prev) => ({ ...prev, [key]: value }));
}
async function saveSection(sectionId, keys) {
setSavingSection(sectionId);
const patch = {};
keys.forEach((k) => { patch[k] = content[k]; });
setError("");
try {
const res = await fetch(`${API_BASE}/api/site-content`, {
method: "POST",
headers: authHeaders({ "Content-Type": "application/json" }),
body: JSON.stringify({ content: patch }),
});
const data = await res.json().catch(() => ({}));
if (!res.ok) throw new Error(data.error || "Couldn't save website settings.");
setSavedSection(sectionId);
setTimeout(() => setSavedSection(null), 2500);
} catch (e) {
setError(e.message || "Couldn't save website settings.");
}
setSavingSection(null);
}
function SaveButton({ sectionId, keys }) {
return (
<button onClick={() => saveSection(sectionId, keys)} disabled={savingSection === sectionId}
className="rounded-lg px-4 py-1.5 text-xs font-medium text-white mt-2"
style={{ backgroundColor: ACCENT_HEX, opacity: savingSection === sectionId ? 0.7 : 1 }}>
{savingSection === sectionId ? "Saving…" : savedSection === sectionId ? "Saved ✓" : "Save"}
</button>
);
}
if (loading || !content) {
return (
<div className="pb-8 px-4 pt-5">
<p className="text-xs text-gray-400">Loading…</p>
</div>
);
}
const PRICE_FIELDS = [
{ key: "priceSmallRecurring", label: "Small lot • recurring" },
{ key: "priceMediumRecurring", label: "Medium lot • recurring" },
{ key: "priceLargeRecurring", label: "Large lot • recurring" },
{ key: "priceLeafBlowout", label: "Fall leaf blow-out" },
{ key: "priceSpringCleanup", label: "Spring cleanup" },
{ key: "priceMulchRefresh", label: "Mulch refresh" },
{ key: "priceBedEdging", label: "Bed edging & shaping" },
{ key: "priceShrubTrim", label: "Shrub / hedge trim" },
];
const FAQ_FIELDS = [
{ key: "faq1Answer", q: "Do I need to be home for service?" },
{ key: "faq2Answer", q: "What happens if it rains?" },
{ key: "faq3Answer", q: "How does recurring mowing work?" },
{ key: "faq4Answer", q: "Can I change or skip a visit?" },
{ key: "faq5Answer", q: "How do I get my customer history?" },
];
return (
<div className="pb-8">
<div className="px-4 pt-5 pb-4 border-b border-gray-200 flex items-center gap-3">
<Badge />
<div>
<p className="text-base font-medium text-gray-900">R-DUB's Lawn Care</p>
<p className="text-sm" style={{ color: "var(--accent)" }}>Website Settings</p>
</div>
</div>
<div className="px-4 py-4 space-y-6">
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>Launch Mode</h2>
<p className="text-xs text-gray-500 mb-2">Preview mode shows the "2027 Launch Preview" badge and interest-list wording. Live mode removes all of that and shows real "Request a Quote" wording site-wide.</p>
<div className="flex gap-2">
<button onClick={() => updateField("launchMode", "preview")}
className="flex-1 rounded-lg py-2 text-xs font-medium border"
style={content.launchMode !== "live" ? { borderColor: "var(--accent)", backgroundColor: "var(--surface-alt)", color: "var(--accent)" } : { borderColor: "#D1D5DB", color: "#6B7280" }}>
Preview
</button>
<button onClick={() => updateField("launchMode", "live")}
className="flex-1 rounded-lg py-2 text-xs font-medium border"
style={content.launchMode === "live" ? { borderColor: "var(--success)", backgroundColor: "#ECFDF5", color: "var(--success)" } : { borderColor: "#D1D5DB", color: "#6B7280" }}>
Live
</button>
</div>
<SaveButton sectionId="launch" keys={["launchMode"]} />
</section>
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>Headline</h2>
<label className="block text-xs text-gray-500 mb-1">Line 1</label>
<input type="text" value={content.heroLine1 || ""} onChange={(e) => updateField("heroLine1", e.target.value)}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-2" />
<label className="block text-xs text-gray-500 mb-1">Line 2 (shown in purple)</label>
<input type="text" value={content.heroLine2 || ""} onChange={(e) => updateField("heroLine2", e.target.value)}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-2" />
<label className="block text-xs text-gray-500 mb-1">Subheading</label>
<textarea value={content.heroLead || ""} onChange={(e) => updateField("heroLead", e.target.value)} rows={2}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
<SaveButton sectionId="headline" keys={["heroLine1", "heroLine2", "heroLead"]} />
</section>
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>Pricing</h2>
<div className="space-y-2">
{PRICE_FIELDS.map((f) => (
<div key={f.key} className="flex items-center gap-2">
<span className="text-xs text-gray-500 flex-1">{f.label}</span>
<input type="text" value={content[f.key] || ""} onChange={(e) => updateField(f.key, e.target.value)}
className="w-28 border border-gray-300 rounded-md px-2 py-1 text-sm text-right" />
</div>
))}
</div>
<SaveButton sectionId="pricing" keys={PRICE_FIELDS.map((f) => f.key)} />
</section>
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>FAQ Answers</h2>
<div className="space-y-3">
{FAQ_FIELDS.map((f) => (
<div key={f.key}>
<label className="block text-xs font-medium text-gray-700 mb-1">{f.q}</label>
<textarea value={content[f.key] || ""} onChange={(e) => updateField(f.key, e.target.value)} rows={2}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
</div>
))}
</div>
<SaveButton sectionId="faq" keys={FAQ_FIELDS.map((f) => f.key)} />
</section>
</div>
</div>
);
}
function TimeClockView({ authUser }) {
const [status, setStatus] = useState(null);
const [entries, setEntries] = useState([]);
const [team, setTeam] = useState([]);
const [loading, setLoading] = useState(true);
const [working, setWorking] = useState(false);
const [error, setError] = useState("");
const [now, setNow] = useState(Date.now());
const isOwner = authUser && authUser.role === "owner";
useEffect(() => {
refresh();
}, []);
useEffect(() => {
if (!status || !status.activeEntry) return;
const id = setInterval(() => setNow(Date.now()), 1000);
return () => clearInterval(id);
}, [status && status.activeEntry && status.activeEntry.id]);
async function api(path, options) {
const res = await fetch(`${API_BASE}${path}`, { ...(options || {}), headers: authHeaders((options && options.headers) || {}) });
const data = await res.json().catch(() => ({}));
if (!res.ok) throw new Error(data.error || "Time clock request failed.");
return data;
}
function normalizeTimeEntry(entry) {
if (!entry) return null;
return {
...entry,
userId: entry.userId ?? entry.user_id,
employeeName: entry.employeeName ?? entry.employee_name,
clockIn: entry.clockIn ?? entry.clock_in,
clockOut: entry.clockOut ?? entry.clock_out,
createdAt: entry.createdAt ?? entry.created_at,
updatedAt: entry.updatedAt ?? entry.updated_at,
editedAt: entry.editedAt ?? entry.edited_at,
editedBy: entry.editedBy ?? entry.edited_by,
editReason: entry.editReason ?? entry.edit_reason,
};
}
function localWeekStartMs() {
const d = new Date();
d.setHours(0, 0, 0, 0);
const daysFromMonday = (d.getDay() + 6) % 7;
d.setDate(d.getDate() - daysFromMonday);
return d.getTime();
}
async function refresh() {
setLoading(true);
setError("");
try {
const [statusData, mineData, teamData] = await Promise.all([
api(`/api/time-clock/status?weekStart=${localWeekStartMs()}`),
api("/api/time-clock/me?limit=50"),
isOwner ? api("/api/time-clock/team?limit=100") : Promise.resolve({ entries: [], active: [] }),
]);
const normalizedStatus = {
...statusData,
activeEntry: normalizeTimeEntry(statusData.activeEntry),
};
setStatus(normalizedStatus);
setEntries((mineData.entries || []).map(normalizeTimeEntry));
setTeam(isOwner ? (teamData.entries || []).map(normalizeTimeEntry) : []);
if (isOwner) setStatus((prev) => ({ ...(prev || normalizedStatus), teamActive: (teamData.active || []).map(normalizeTimeEntry) }));
setNow(Date.now());
} catch (e) {
setError(e.message || "Couldn't load the time clock.");
} finally {
setLoading(false);
}
}
async function punch(kind) {
setWorking(true);
setError("");
try {
await api(`/api/time-clock/${kind}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: "{}" });
await refresh();
} catch (e) {
setError(e.message || "Couldn't update the time clock.");
} finally {
setWorking(false);
}
}
function fmtTime(ms) {
if (!ms) return "—";
return new Date(Number(ms)).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}
function fmtDate(ms) {
if (!ms) return "—";
return new Date(Number(ms)).toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" });
}
function duration(start, end) {
const mins = Math.max(0, Math.floor(((end || now) - start) / 60000));
const h = Math.floor(mins / 60);
const m = mins % 60;
return `${h}h ${String(m).padStart(2, "0")}m`;
}
const active = status && status.activeEntry;
const weekMinutes = status ? Number(status.weekMinutes || 0) : 0;
return (
<div className="pb-8">
<div className="px-4 pt-5 pb-4 border-b border-gray-200 flex items-center gap-3">
<Badge />
<div>
<p className="text-base font-medium text-gray-900">Employee Time Clock</p>
<p className="text-sm" style={{ color: "var(--accent)" }}>{authUser ? (authUser.name || authUser.username) : "R-DUB's Lawn Care"}</p>
</div>
</div>
<div className="px-4 py-4 space-y-5">
{error && <div className="rounded-lg border p-3 text-sm" style={{ borderColor: "var(--warn)", color: "var(--warn)" }}>{error}</div>}
<section className="border border-gray-200 rounded-xl p-4 text-center">
{loading ? <p className="text-sm text-gray-400">Loading time clock…</p> : (
<>
<p className="text-xs uppercase tracking-wide text-gray-400">{active ? "Clocked in" : "Currently clocked out"}</p>
{active && <p className="text-3xl font-semibold text-gray-900 mt-2">{duration(Number(active.clockIn), now)}</p>}
{active && <p className="text-xs text-gray-500 mt-1">Started {fmtTime(active.clockIn)}</p>}
<button onClick={() => punch(active ? "out" : "in")} disabled={working}
className="w-full rounded-xl py-3.5 mt-4 text-white text-base font-semibold"
style={{ backgroundColor: active ? "#B91C1C" : ACCENT_HEX, opacity: working ? 0.65 : 1 }}>
{working ? "Saving…" : active ? "Clock Out" : "Clock In"}
</button>
<p className="text-xs text-gray-400 mt-2">Official punch time is recorded by the server.</p>
</>
)}
</section>
<section className="grid grid-cols-2 gap-2">
<div className="border border-gray-200 rounded-lg p-3">
<p className="text-xs text-gray-400">This week</p>
<p className="text-lg font-semibold text-gray-900">{Math.floor(weekMinutes / 60)}h {String(weekMinutes % 60).padStart(2, "0")}m</p>
</div>
<div className="border border-gray-200 rounded-lg p-3">
<p className="text-xs text-gray-400">Status</p>
<p className="text-lg font-semibold" style={{ color: active ? "var(--success)" : "var(--text)" }}>{active ? "Working" : "Off clock"}</p>
</div>
</section>
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>My recent punches</h2>
{entries.length === 0 ? <p className="text-sm text-gray-400 border border-gray-200 rounded-lg p-3">No workday punches yet.</p> : (
<div className="space-y-2">
{entries.map((e) => (
<div key={e.id} className="border border-gray-200 rounded-lg p-3 text-sm">
<div className="flex justify-between gap-3"><span className="font-medium text-gray-800">{fmtDate(e.clockIn)}</span><span className="text-gray-600">{duration(Number(e.clockIn), e.clockOut ? Number(e.clockOut) : now)}</span></div>
<p className="text-xs text-gray-500 mt-1">{fmtTime(e.clockIn)} → {e.clockOut ? fmtTime(e.clockOut) : "Still clocked in"}</p>
{!!e.editedAt && <p className="text-xs mt-1" style={{ color: "var(--warn)" }}>Corrected by owner</p>}
</div>
))}
</div>
)}
</section>
{isOwner && (
<section>
<h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent)" }}>Crew currently clocked in</h2>
{(!status || !(status.teamActive || []).length) ? <p className="text-sm text-gray-400 border border-gray-200 rounded-lg p-3">Nobody else is clocked in.</p> : (
<div className="space-y-2">{status.teamActive.map((e) => <div key={e.id} className="border border-gray-200 rounded-lg p-3 text-sm flex justify-between"><div><p className="font-medium text-gray-800">{e.employeeName || e.username}</p><p className="text-xs text-gray-500">Since {fmtTime(e.clockIn)}</p></div><span className="font-medium text-gray-700">{duration(Number(e.clockIn), now)}</span></div>)}</div>
)}
<h2 className="text-xs font-semibold uppercase tracking-wide mt-5 mb-2" style={{ color: "var(--accent)" }}>Recent team punches</h2>
<div className="space-y-2">{team.slice(0, 30).map((e) => <div key={e.id} className="border border-gray-200 rounded-lg p-3 text-sm"><div className="flex justify-between gap-3"><span className="font-medium text-gray-800">{e.employeeName || e.username}</span><span className="text-gray-600">{duration(Number(e.clockIn), e.clockOut ? Number(e.clockOut) : now)}</span></div><p className="text-xs text-gray-500 mt-1">{fmtDate(e.clockIn)} · {fmtTime(e.clockIn)} → {e.clockOut ? fmtTime(e.clockOut) : "Open"}</p></div>)}</div>
</section>
)}
</div>
</div>
);
}
function ChangePasswordView() {
const [currentPassword, setCurrentPassword] = useState("");
const [newPassword, setNewPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [saving, setSaving] = useState(false);
const [error, setError] = useState("");
const [success, setSuccess] = useState(false);
async function submit() {
setError("");
if (!currentPassword || !newPassword) {
setError("Fill in both your current and new password.");
return;
}
if (newPassword.length < 8) {
setError("New password must be at least 8 characters.");
return;
}
if (newPassword !== confirmPassword) {
setError("New passwords don't match.");
return;
}
setSaving(true);
try {
const res = await fetch(`${API_BASE}/api/auth/change-password`, {
method: "POST",
headers: authHeaders({ "Content-Type": "application/json" }),
body: JSON.stringify({ currentPassword, newPassword }),
});
const data = await res.json();
if (!res.ok) {
setError(data.error || "Couldn't change your password.");
setSaving(false);
return;
}
setCurrentPassword("");
setNewPassword("");
setConfirmPassword("");
setSuccess(true);
setTimeout(() => setSuccess(false), 3000);
} catch (e) {
setError("Couldn't reach the server — try again.");
}
setSaving(false);
}
return (
<div className="pb-8">
<div className="px-4 pt-5 pb-4 border-b border-gray-200 flex items-center gap-3">
<Badge />
<div>
<p className="text-base font-medium text-gray-900">R-DUB's Lawn Care</p>
<p className="text-sm" style={{ color: "var(--accent)" }}>Change Password</p>
</div>
</div>
<div className="px-4 py-4 space-y-3">
<label className="block text-xs text-gray-500 mb-1">Current password</label>
<input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-3" />
<label className="block text-xs text-gray-500 mb-1">New password</label>
<input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-3" />
<label className="block text-xs text-gray-500 mb-1">Confirm new password</label>
<input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
{error && <p className="text-xs mt-2" style={{ color: "var(--warn)" }}>{error}</p>}
{success && <p className="text-xs mt-2" style={{ color: "var(--success)" }}>Password changed.</p>}
<button onClick={submit} disabled={saving}
className="w-full rounded-lg py-2.5 text-sm text-white font-medium mt-3"
style={{ backgroundColor: ACCENT_HEX, opacity: saving ? 0.7 : 1 }}>
{saving ? "Saving…" : "Change Password"}
</button>
<p className="text-xs text-gray-400 mt-2">Locked out and don't know your current password? Ask the owner to reset it for you from Team Management.</p>
</div>
</div>
);
}
function RoleDashboard({ authUser, onOpenJobs, onOpenCustomers, onOpenSchedule, onOpenClock, onOpenTeam, onStartTour }) {
const role = authUser ? authUser.role : "crew";
const name = authUser && (authUser.name || authUser.username) ? (authUser.name || authUser.username) : "Team Member";
const isOwner = role === "owner";
const isManager = role === "manager";
const title = isOwner ? "Owner Dashboard" : isManager ? "Manager Dashboard" : "Crew Dashboard";
const subtitle = isOwner ? "Your business at a glance." : isManager ? "Keep today's crew and jobs moving." : "Everything you need for today's work.";
const quickActions = isOwner
? [
{ label: "Today's Jobs", hint: "Open the work board", action: onOpenJobs, icon: ClipboardList },
{ label: "Team Management", hint: "Accounts, roles & access", action: onOpenTeam, icon: Users },
{ label: "Crew Schedule", hint: "See who's working", action: onOpenSchedule, icon: Calendar },
{ label: "Time Clock", hint: "Review employee time", action: onOpenClock, icon: Clock3 },
]
: isManager
? [
{ label: "Today's Jobs", hint: "Manage the work board", action: onOpenJobs, icon: ClipboardList },
{ label: "Customers", hint: "Open customer details", action: onOpenCustomers, icon: Users },
{ label: "Crew Schedule", hint: "See the team's week", action: onOpenSchedule, icon: Calendar },
{ label: "Time Clock", hint: "Clock in or out", action: onOpenClock, icon: Clock3 },
]
: [
{ label: "Today's Jobs", hint: "See what needs to be done", action: onOpenJobs, icon: ClipboardList },
{ label: "Time Clock", hint: "Clock in or out", action: onOpenClock, icon: Clock3 },
{ label: "Crew Schedule", hint: "Check your week", action: onOpenSchedule, icon: Calendar },
{ label: "Customers", hint: "View job details", action: onOpenCustomers, icon: Users },
];
return (
<div className="pb-24" style={{ background: "var(--surface-alt)", minHeight: "100%" }}>
<div className="px-4 pt-5 pb-5 bg-white border-b border-gray-200">
<div className="flex items-center gap-3">
<Badge />
<div className="min-w-0">
<p className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--accent)" }}>R-DUB'S Lawn Care</p>
<p className="text-xl font-bold text-gray-900 leading-tight mt-0.5">{title}</p>
<p className="text-sm text-gray-600 mt-0.5">{subtitle}</p>
</div>
</div>
</div>
<div className="px-4 py-4 space-y-4">
<div className="rounded-2xl p-4 text-white shadow-sm" style={{ background: "linear-gradient(135deg,#4B2E70 0%,#68439A 100%)" }}>
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#DDD2F0" }}>Welcome back</p>
<p className="text-2xl font-bold mt-1">{name}</p>
<p className="text-sm mt-1" style={{ color: "#E9E2F4" }}>{isOwner ? "Owner" : isManager ? "Manager" : "Crew"} access</p>
</div>
<div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,255,255,.12)" }}>
<img src={GUNNER_DATA_URI} alt="Gunner" className="w-20 h-20 object-contain" />
</div>
</div>
</div>
<div>
<div className="flex items-end justify-between gap-3 px-1 mb-2">
<div>
<p className="text-base font-bold text-gray-900">Quick Actions</p>
<p className="text-sm text-gray-600">Jump straight into what you need.</p>
</div>
</div>
<div className="grid grid-cols-2 gap-2.5">
{quickActions.map((item) => {
const Icon = item.icon;
return (
<button key={item.label} onClick={item.action} className="text-left bg-white border border-gray-200 rounded-2xl p-3 shadow-sm">
<div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ color: "var(--accent)", background: "var(--surface-alt)" }}>
<Icon size={20} />
</div>
<p className="text-sm font-bold text-gray-900 mt-2">{item.label}</p>
<p className="text-xs text-gray-500 mt-0.5">{item.hint}</p>
</button>
);
})}
</div>
</div>
<GunnerHelper
title={isManager ? "Your manager tools are ready" : isOwner ? "Need a refresher?" : "Need help getting around?"}
message={isManager ? "I can show you the manager dashboard and the tools you'll use to help the crew." : "I can give you a quick tour of the app anytime."}
actionLabel="Take App Tour"
onAction={onStartTour}
compact
/>
{!isOwner && (
<div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
<p className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--accent)" }}>Today</p>
<p className="text-base font-bold text-gray-900 mt-1">{isManager ? "Keep the crew moving" : "Ready for the workday"}</p>
<p className="text-sm text-gray-600 mt-1">
{isManager ? "Start with Today's Jobs, check the crew schedule, and handle anything the team needs." : "Clock in when your day starts, check Today's Jobs, and use the job details for each stop."}
</p>
</div>
)}
</div>
</div>
);
}
function GunnerTour({ role, step, onNext, onBack, onSkip }) {
const tours = {
crew: [
["Welcome to R-DUB'S!", "I'm Gunner. I'll show you where the main crew tools are. This only takes a minute."],
["Your Crew Dashboard", "Home gives you quick access to today's jobs, your time clock, the crew schedule, and customer details."],
["Clock In & Out", "Use Time Clock when your workday starts and ends. Your job timer is separate and tracks time spent on a specific job."],
["Today's Jobs", "Open Jobs to see the work that needs to be completed. Check the customer details and take required before photos."],
["You're Ready!", "You can replay this tour anytime from Gunner on your Home dashboard."],
],
manager: [
["Welcome, Manager!", "I'm Gunner. Your app now has extra tools to help you keep the day running smoothly."],
["Manager Dashboard", "Home puts jobs, customers, the crew schedule, and your time clock in one place."],
["Manage Today's Work", "Use Jobs to follow the work board and Customer Directory when the crew needs customer or property details."],
["Help the Crew", "Crew Schedule shows who's working. Your manager permissions also unlock approved day-to-day controls without exposing owner-only settings."],
["You're Ready!", "If you need a refresher, come back to Home and tap Take App Tour."],
],
owner: [
["Welcome to your dashboard", "I'm Gunner. Home now gives you a cleaner starting point for running R-DUB'S."],
["Owner Controls", "Team Management is where you manage accounts, access, passwords, and Crew ↔ Manager roles."],
["Run the Day", "Use Jobs, Crew Schedule, and Time Clock to keep an eye on daily operations."],
["You're Ready!", "You can replay this tour from Home whenever you want."],
],
};
const list = tours[role] || tours.crew;
const current = list[Math.min(step, list.length - 1)];
return (
<div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0" style={{ background: "rgba(17,12,24,.72)", backdropFilter: "blur(3px)" }}>
<div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-100">
<div className="flex items-center gap-4 p-4" style={{ background: "linear-gradient(135deg,#F6F0FC,#EFFBEA)" }}>
<img src={GUNNER_DATA_URI} alt="Gunner" className="w-24 h-24 object-contain shrink-0" />
<div>
<p className="text-xs font-bold uppercase tracking-wider" style={{ color: "#4B2E70" }}>Gunner · App Helper</p>
<p className="text-xl font-bold text-gray-900 mt-1">{current[0]}</p>
</div>
</div>
<div className="p-5">
<p className="text-sm text-gray-600 leading-relaxed">{current[1]}</p>
<div className="flex items-center gap-1.5 mt-4">
{list.map((_, i) => <span key={i} className="h-1.5 rounded-full" style={{ width: i === step ? 24 : 8, background: i === step ? "#4B2E70" : "#DDD6E7" }} />)}
<span className="ml-auto text-xs font-semibold text-gray-400">{step + 1} of {list.length}</span>
</div>
<div className="grid grid-cols-2 gap-2 mt-5">
{step > 0 ? (
<button onClick={onBack} className="border border-gray-300 rounded-xl py-3 text-sm font-bold text-gray-700">Back</button>
) : (
<button onClick={onSkip} className="border border-gray-300 rounded-xl py-3 text-sm font-bold text-gray-500">Skip Tour</button>
)}
<button onClick={() => onNext(list.length)} className="rounded-xl py-3 text-sm font-bold text-white" style={{ backgroundColor: "#4B2E70" }}>
{step === list.length - 1 ? "Got It" : "Next"}
</button>
</div>
</div>
</div>
</div>
);
}
function PhotoChecklistModal({ item, phase, userRole, onClose, onFlagsChanged, onViewLegacy }) {
  const [data, setData] = useState(null);
  const [loadError, setLoadError] = useState("");
  const [step, setStep] = useState(0);
  const [preview, setPreview] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [shownUrl, setShownUrl] = useState(null);
  const [refUrl, setRefUrl] = useState(null);
  const [note, setNote] = useState("");
  const [issueSlot] = useState(() => `issue-${Date.now()}`);
  const [finished, setFinished] = useState(false);

  async function load() {
    try {
      const res = await fetch(`${API_BASE}/api/jobs/${item.timestamp}/photos`, { headers: authHeaders() });
      if (!res.ok) throw new Error("load");
      const d = await res.json();
      setData(d);
      return d;
    } catch (e) {
      setLoadError("Couldn't load the photo checklist — check your signal and try again.");
      return null;
    }
  }

  const shots = !data ? [] : phase === "issue"
    ? [{ id: issueSlot, label: "Flag an issue", tip: "Get the problem clearly in frame, then add a short note.", required: false }]
    : data.shots;
  const done = new Set(data ? data.photos.filter((p) => p.phase === phase).map((p) => p.slot) : []);
  const current = shots[step];

  function flagsFrom(d) {
    const before = new Set(d.photos.filter((p) => p.phase === "before").map((p) => p.slot));
    const req = d.shots.filter((x) => x.required);
    return {
      hasBeforePhoto: (req.length ? req.every((x) => before.has(x.id)) : before.size > 0) || !!d.legacy.before,
      hasPhoto: d.photos.some((p) => p.phase === "after") || !!d.legacy.after,
    };
  }

  useEffect(() => {
    (async () => {
      const d = await load();
      if (d && phase !== "issue") {
        const doneSet = new Set(d.photos.filter((p) => p.phase === phase).map((p) => p.slot));
        const first = d.shots.findIndex((x) => !doneSet.has(x.id));
        setStep(first === -1 ? 0 : first);
      }
    })();
  }, []);

  // Show the saved photo for this step, and for afters the matching before photo as an angle reference.
  useEffect(() => {
    if (!data || !current || phase === "issue") return;
    let cancelled = false;
    setShownUrl(null);
    setRefUrl(null);
    const fetchUrl = async (ph) => {
      const res = await fetch(`${API_BASE}/api/jobs/${item.timestamp}/photos/${ph}/${current.id}`, { headers: authHeaders() });
      return res.ok ? URL.createObjectURL(await res.blob()) : null;
    };
    (async () => {
      try {
        if (done.has(current.id)) { const u = await fetchUrl(phase); if (!cancelled) setShownUrl(u); }
        if (phase === "after" && data.photos.some((p) => p.phase === "before" && p.slot === current.id)) {
          const r = await fetchUrl("before");
          if (!cancelled) setRefUrl(r);
        }
      } catch (e) {}
    })();
    return () => { cancelled = true; };
  }, [data, step]);

  async function onPick(e) {
    const file = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!file) return;
    setError("");
    try {
      setPreview(await compressImageFile(file, 1200, 0.75));
    } catch (err) {
      setError("Couldn't read that photo — try again.");
    }
  }

  async function usePhoto() {
    setBusy(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/api/jobs/${item.timestamp}/photos/${phase}/${current.id}`, {
        method: "POST",
        headers: authHeaders({ "Content-Type": "application/json" }),
        body: JSON.stringify({ dataUri: preview, label: current.label, note: phase === "issue" ? note : "" }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        setError(err.error || "Couldn't save — check your signal and try again. Your photo is still here.");
        return;
      }
      setPreview(null);
      setNote("");
      const d = await load();
      if (d) {
        if (onFlagsChanged) onFlagsChanged(flagsFrom(d));
        if (phase === "issue") { setFinished(true); return; }
        const doneSet = new Set(d.photos.filter((p) => p.phase === phase).map((p) => p.slot));
        const next = d.shots.findIndex((x) => !doneSet.has(x.id));
        if (next === -1) setFinished(true); else setStep(next);
      }
    } catch (err) {
      setError("Couldn't save — check your signal and try again. Your photo is still here.");
    } finally {
      setBusy(false);
    }
  }

  const canRetake = phase === "after" || userRole === "owner";
  const title = phase === "before" ? "Before photos" : phase === "after" ? "After photos" : "Flag an issue";
  const legacyFlag = phase === "before" ? item.hasBeforePhoto : item.hasPhoto;

  return (
    <div className="fixed inset-0 flex items-end justify-center" style={{ zIndex: 60 }} onClick={(e) => e.stopPropagation()}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white w-full max-w-md rounded-t-2xl p-4 overflow-y-auto" style={{ maxHeight: "90vh" }}>
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-gray-900">{title} · {item.customerName || "Job"}</p>
          <button onClick={onClose} aria-label="Close" className="text-gray-400"><X size={18} /></button>
        </div>
        {loadError && <p className="text-xs" style={{ color: "var(--warn)" }}>{loadError}</p>}
        {!data && !loadError && <p className="text-xs text-gray-400">Loading…</p>}

        {data && finished && (
          <div className="text-center py-6">
            <p className="text-3xl mb-2" style={{ color: "var(--success)" }}>✓</p>
            <p className="text-sm font-medium text-gray-900">{phase === "issue" ? "Issue saved" : `All ${title.toLowerCase()} taken`}</p>
            <button onClick={onClose} className="mt-4 rounded-lg px-6 py-2 text-sm text-white" style={{ backgroundColor: ACCENT_HEX }}>Done</button>
          </div>
        )}

        {data && !finished && current && (
          <div>
            {phase !== "issue" && (
              <div className="flex gap-1.5 flex-wrap mb-3">
                {shots.map((x, i) => (
                  <button key={x.id} onClick={() => { setPreview(null); setError(""); setStep(i); }}
                    className="text-xs rounded-full px-2.5 py-1 border"
                    style={i === step ? { borderColor: "var(--accent)", color: "var(--accent)", fontWeight: 600 }
                      : done.has(x.id) ? { borderColor: "var(--success)", color: "var(--success)" }
                      : { borderColor: "#D1D5DB", color: "#6B7280" }}>
                    {done.has(x.id) ? "✓ " : ""}{x.label}{!x.required ? " (optional)" : ""}
                  </button>
                ))}
              </div>
            )}
            {phase !== "issue" && <p className="text-xs text-gray-400">Shot {step + 1} of {shots.length}</p>}
            <p className="text-base font-semibold text-gray-900">{current.label}</p>
            {current.tip && <p className="text-xs text-gray-500 mb-3">{current.tip}</p>}

            {refUrl && !preview && (
              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-1">Match this angle (the before photo):</p>
                <img src={refUrl} alt="Before reference" className="w-full rounded-lg" style={{ maxHeight: 160, objectFit: "cover", opacity: 0.75 }} />
              </div>
            )}

            {preview ? (
              <div>
                <img src={preview} alt="Preview" className="w-full rounded-lg mb-3" style={{ maxHeight: 280, objectFit: "contain" }} />
                {phase === "issue" && (
                  <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={2}
                    placeholder="What's the issue? e.g. broken sprinkler head by the driveway"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-3" />
                )}
                {phase !== "after" && userRole !== "owner" && (
                  <p className="text-xs text-gray-500 mb-2">Once saved, this photo is locked as a record — make sure it's clear.</p>
                )}
                <div className="flex gap-2">
                  <button onClick={() => setPreview(null)} disabled={busy} className="flex-1 border border-gray-300 rounded-lg py-2.5 text-sm text-gray-700">Retake</button>
                  <button onClick={usePhoto} disabled={busy} className="flex-1 rounded-lg py-2.5 text-sm text-white font-medium"
                    style={{ backgroundColor: ACCENT_HEX, opacity: busy ? 0.7 : 1 }}>{busy ? "Saving…" : "Use this photo"}</button>
                </div>
              </div>
            ) : done.has(current.id) ? (
              <div>
                {shownUrl
                  ? <img src={shownUrl} alt={current.label} className="w-full rounded-lg mb-2" style={{ maxHeight: 280, objectFit: "contain" }} />
                  : <p className="text-xs text-gray-400 mb-2">Loading photo…</p>}
                <p className="text-xs mb-3" style={{ color: "var(--success)" }}>✓ Taken</p>
                <div className="flex gap-2">
                  {canRetake && (
                    <label className="flex-1 text-center border border-gray-300 rounded-lg py-2.5 text-sm text-gray-700 cursor-pointer">
                      Retake
                      <input type="file" accept="image/*" capture="environment" className="hidden" onChange={onPick} />
                    </label>
                  )}
                  {step < shots.length - 1 && (
                    <button onClick={() => setStep(step + 1)} className="flex-1 rounded-lg py-2.5 text-sm text-white" style={{ backgroundColor: ACCENT_HEX }}>Next shot</button>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-center rounded-lg py-4 text-sm text-white font-medium cursor-pointer" style={{ backgroundColor: ACCENT_HEX }}>
                  📷 Take photo
                  <input type="file" accept="image/*" capture="environment" className="hidden" onChange={onPick} />
                </label>
                {!current.required && phase === "before" && step < shots.length - 1 && (
                  <button onClick={() => setStep(step + 1)} className="w-full text-center text-xs text-gray-500 underline mt-2">Skip (optional)</button>
                )}
              </div>
            )}
            {error && <p className="text-xs mt-2" style={{ color: "var(--warn)" }}>{error}</p>}
          </div>
        )}

        {data && onViewLegacy && phase !== "issue" && legacyFlag && !data.photos.some((p) => p.phase === phase) && (
          <button onClick={() => onViewLegacy(phase)} className="text-xs underline mt-3" style={{ color: "var(--accent)" }}>View earlier single photo</button>
        )}

        {data && phase !== "issue" && data.photos.some((p) => p.phase === "issue") && (
          <div className="mt-4 pt-3 border-t border-gray-100">
            <p className="text-xs font-medium text-gray-700 mb-1">Issues flagged on this job</p>
            {data.photos.filter((p) => p.phase === "issue").map((p) => (
              <p key={p.slot} className="text-xs text-gray-500">⚠ {p.note || "No note"} — {p.uploaded_by}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ShotListEditor({ phone, customerName, onClose }) {
  const [mode, setMode] = useState("customer");
  const [shots, setShots] = useState(null);
  const [isCustom, setIsCustom] = useState(false);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const listUrl = (m) => (m === "default" ? `${API_BASE}/api/shot-lists/default` : `${API_BASE}/api/shot-lists/customer/${encodeURIComponent(phone)}`);

  async function load(m) {
    setShots(null);
    try {
      const res = await fetch(listUrl(m), { headers: authHeaders() });
      const d = await res.json();
      setShots(d.shots || []);
      setIsCustom(!!d.isCustom);
      setEditing(m === "default" || !!d.isCustom);
    } catch (e) {
      setMsg("Couldn't load the checklist.");
    }
  }
  useEffect(() => { load(mode); }, [mode]);

  const update = (i, field, value) => setShots((prev) => prev.map((x, j) => (j === i ? { ...x, [field]: value } : x)));
  const move = (i, dir) => setShots((prev) => {
    const n = prev.slice(); const t = i + dir;
    if (t < 0 || t >= n.length) return prev;
    [n[i], n[t]] = [n[t], n[i]];
    return n;
  });

  async function save() {
    setSaving(true);
    setMsg("");
    try {
      const res = await fetch(listUrl(mode), { method: "POST", headers: authHeaders({ "Content-Type": "application/json" }), body: JSON.stringify({ shots }) });
      const d = await res.json();
      if (!res.ok) setMsg(d.error || "Couldn't save.");
      else { setShots(d.shots); if (mode === "customer") setIsCustom(true); setMsg("Saved ✓ — applies to photos taken from now on."); }
    } catch (e) {
      setMsg("Couldn't save — try again.");
    }
    setSaving(false);
  }

  async function resetToDefault() {
    setSaving(true);
    try {
      await fetch(listUrl("customer"), { method: "DELETE", headers: authHeaders() });
      setMsg("Now using the default checklist.");
      await load("customer");
    } catch (e) {}
    setSaving(false);
  }

  return (
    <div className="fixed inset-0 flex items-end justify-center" style={{ zIndex: 60 }} onClick={(e) => e.stopPropagation()}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white w-full max-w-md rounded-t-2xl p-4 overflow-y-auto" style={{ maxHeight: "90vh" }}>
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-semibold text-gray-900">{mode === "default" ? "Default photo checklist (all customers)" : `Photo checklist · ${customerName}`}</p>
          <button onClick={onClose} aria-label="Close" className="text-gray-400"><X size={18} /></button>
        </div>
        {!shots && <p className="text-xs text-gray-400">Loading…</p>}

        {shots && mode === "customer" && !isCustom && !editing && (
          <div>
            <p className="text-xs text-gray-500 mb-2">Using the default checklist:</p>
            {shots.map((x, i) => <p key={x.id} className="text-sm text-gray-800">{i + 1}. {x.label}</p>)}
            <div className="flex gap-2 mt-4">
              <button onClick={() => setEditing(true)} className="flex-1 rounded-lg py-2 text-xs text-white" style={{ backgroundColor: ACCENT_HEX }}>Customize for this customer</button>
              <button onClick={() => { setMsg(""); setMode("default"); }} className="flex-1 rounded-lg py-2 text-xs border border-gray-300 text-gray-700">Edit default for everyone</button>
            </div>
          </div>
        )}

        {shots && editing && (
          <div>
            <p className="text-xs text-gray-500 mb-3">Crew take these in order. Required shots must be done before work can start.</p>
            <div className="space-y-2">
              {shots.map((x, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-gray-400 w-4">{i + 1}.</span>
                    <input value={x.label} onChange={(e) => update(i, "label", e.target.value)} placeholder="Shot name, e.g. Back yard"
                      className="flex-1 border border-gray-300 rounded-md px-2 py-1 text-sm" />
                    <button onClick={() => move(i, -1)} className="text-gray-400 p-1" aria-label="Move up"><ArrowUp size={14} /></button>
                    <button onClick={() => move(i, 1)} className="text-gray-400 p-1" aria-label="Move down"><ArrowDown size={14} /></button>
                    <button onClick={() => setShots((prev) => prev.filter((_, j) => j !== i))} className="text-gray-400 p-1" aria-label="Remove"><Trash2 size={14} /></button>
                  </div>
                  <input value={x.tip || ""} onChange={(e) => update(i, "tip", e.target.value)} placeholder="Tip for crew (optional), e.g. shoot from the patio"
                    className="w-full border border-gray-200 rounded-md px-2 py-1 text-xs mt-1.5" />
                  <label className="flex items-center gap-1.5 text-xs text-gray-600 mt-1.5">
                    <input type="checkbox" checked={x.required !== false} onChange={(e) => update(i, "required", e.target.checked)}
                      style={{ accentColor: "var(--accent)", touchAction: "pan-y" }} />
                    Required before work starts
                  </label>
                </div>
              ))}
            </div>
            {shots.length < 12 && (
              <button onClick={() => setShots((prev) => [...prev, { label: "", tip: "", required: true }])}
                className="w-full mt-2 rounded-lg py-2 text-xs border border-dashed border-gray-300 text-gray-600">+ Add shot</button>
            )}
            <button onClick={save} disabled={saving} className="w-full mt-3 rounded-lg py-2.5 text-sm text-white font-medium"
              style={{ backgroundColor: ACCENT_HEX, opacity: saving ? 0.7 : 1 }}>{saving ? "Saving…" : "Save checklist"}</button>
            {mode === "customer" && isCustom && (
              <button onClick={resetToDefault} disabled={saving} className="w-full text-center text-xs text-gray-500 underline mt-2">Reset this customer to the default</button>
            )}
          </div>
        )}
        {msg && <p className="text-xs mt-2" style={{ color: msg.startsWith("Saved") || msg.startsWith("Now") ? "var(--success)" : "var(--warn)" }}>{msg}</p>}
      </div>
    </div>
  );
}

function App() {
const [mode, setMode] = useState("home");
const [editRequest, setEditRequest] = useState(null);
const [prefillEstimate, setPrefillEstimate] = useState(null);
const [customerDrawerOpen, setCustomerDrawerOpen] = useState(false);
const [booksDrawerOpen, setBooksDrawerOpen] = useState(false);
const [pricesDrawerOpen, setPricesDrawerOpen] = useState(false);
const [bugsDrawerOpen, setBugsDrawerOpen] = useState(false);
const [teamDrawerOpen, setTeamDrawerOpen] = useState(false);
const [scheduleDrawerOpen, setScheduleDrawerOpen] = useState(false);
const [timeClockDrawerOpen, setTimeClockDrawerOpen] = useState(false);
const [websiteDrawerOpen, setWebsiteDrawerOpen] = useState(false);
const [passwordDrawerOpen, setPasswordDrawerOpen] = useState(false);
const [returnToDirectoryPhone, setReturnToDirectoryPhone] = useState(null);
const [directoryReopenPhone, setDirectoryReopenPhone] = useState(null);
const [bottomTabOrder, setBottomTabOrder] = useState(["home", "newcustomer", "business"]);
const [utilityOrder, setUtilityOrder] = useState(["timeclock", "prices", "directory", "books", "bugs", "team", "schedule", "website", "password", "darkmode", "logout"]);
const [layoutEditMode, setLayoutEditMode] = useState(false);
const [authToken, setAuthToken] = useState(null);
const [authUser, setAuthUser] = useState(null);
const [authChecking, setAuthChecking] = useState(true);
const [loginUsername, setLoginUsername] = useState("");
const [loginPassword, setLoginPassword] = useState("");
const [loginError, setLoginError] = useState("");
const [loginSubmitting, setLoginSubmitting] = useState(false);
const [darkMode, setDarkMode] = useState(false);
const [darkModeLoaded, setDarkModeLoaded] = useState(false);
const [showSplash, setShowSplash] = useState(true);
const [roleNotification, setRoleNotification] = useState(null);
const [roleNoticeClosing, setRoleNoticeClosing] = useState(false);
const [tourOpen, setTourOpen] = useState(false);
const [tourStep, setTourStep] = useState(0);
useEffect(() => {
(async () => {
try {
const r = await localStore.get("settings:dark-mode", false);
if (r && r.value === "true") setDarkMode(true);
} catch (e) {}
setDarkModeLoaded(true);
})();
setTimeout(() => setShowSplash(false), 3600);
(async () => {
try {
const r = await localStore.get("settings:nav-layout", false);
if (r && r.value) {
const parsed = JSON.parse(r.value);
if (Array.isArray(parsed.bottomOrder) && parsed.bottomOrder.length === 3) setBottomTabOrder(parsed.bottomOrder);
if (Array.isArray(parsed.utilityOrder) && parsed.utilityOrder.length === 11) setUtilityOrder(parsed.utilityOrder);
}
} catch (e) {}
})();
(async () => {
try {
const r = await localStore.get("settings:auth-token", false);
const token = r && r.value ? r.value : null;
if (!token) { setAuthChecking(false); return; }
const res = await fetch(`${API_BASE}/api/auth/me`, { headers: { Authorization: `Bearer ${token}` } });
if (res.ok) {
const data = await res.json();
setAuthToken(token);
setAuthUser(data.user);
setCurrentAuthToken(token);
setRoleNotification(data.roleNotification || null);
setMode("home");
} else {
await localStore.delete("settings:auth-token", false);
}
} catch (e) {
} finally {
setAuthChecking(false);
}
})();
}, []);
useEffect(() => {
if (!authUser || roleNotification || showSplash) return;
(async () => {
try {
const key = `settings:gunner-tour:${authUser.role}`;
const r = await localStore.get(key, false);
if (!r || r.value !== "done") {
setTourStep(0);
setTourOpen(true);
}
} catch (e) {}
})();
}, [authUser, roleNotification, showSplash]);
function startGunnerTour() {
setTourStep(0);
setTourOpen(true);
}
async function finishGunnerTour() {
setTourOpen(false);
setTourStep(0);
if (authUser) {
try { await localStore.set(`settings:gunner-tour:${authUser.role}`, "done", false); } catch (e) {}
}
}
function nextGunnerTour(length) {
if (tourStep >= length - 1) finishGunnerTour();
else setTourStep((s) => s + 1);
}
async function handleLogin() {
if (!loginUsername.trim() || !loginPassword) {
setLoginError("Enter both a username and password.");
return;
}
setLoginSubmitting(true);
setLoginError("");
try {
const res = await fetch(`${API_BASE}/api/auth/login`, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ username: loginUsername.trim(), password: loginPassword }),
});
const data = await res.json();
if (!res.ok) {
setLoginError(data.error || "Couldn't log in — try again.");
return;
}
await localStore.set("settings:auth-token", data.token, false);
setAuthToken(data.token);
setAuthUser(data.user);
setCurrentAuthToken(data.token);
setRoleNotification(data.roleNotification || null);
setMode("home");
closeAllDrawers();
setLoginPassword("");
} catch (e) {
setLoginError("Couldn't reach the server — check your connection and try again.");
} finally {
setLoginSubmitting(false);
}
}
async function handleLogout() {
try {
if (authToken) {
await fetch(`${API_BASE}/api/auth/logout`, {
method: "POST",
headers: { Authorization: `Bearer ${authToken}` },
});
}
} catch (e) {}
try {
await localStore.delete("settings:auth-token", false);
} catch (e) {}
setAuthToken(null);
setAuthUser(null);
setCurrentAuthToken(null);
setRoleNotification(null);
closeAllDrawers();
setLoginUsername("");
setLoginPassword("");
}
async function dismissRoleNotification() {
if (!roleNotification || roleNoticeClosing) return;
setRoleNoticeClosing(true);
try {
await fetch(`${API_BASE}/api/auth/role-notification/acknowledge`, {
method: "POST",
headers: authHeaders({ "Content-Type": "application/json" }),
body: JSON.stringify({ id: roleNotification.id }),
});
} catch (e) {}
const promotedToManager = roleNotification && roleNotification.new_role === "manager";
setRoleNotification(null);
setRoleNoticeClosing(false);
setMode("home");
closeAllDrawers();
if (promotedToManager) {
setTourStep(0);
setTourOpen(true);
}
}
async function saveNavLayout(bottomOrder, utilOrder) {
try {
await localStore.set("settings:nav-layout", JSON.stringify({ bottomOrder, utilityOrder: utilOrder }), false);
} catch (e) {}
}
function moveBottom(index, direction) {
const target = index + direction;
if (target < 0 || target >= bottomTabOrder.length) return;
const next = bottomTabOrder.slice();
[next[index], next[target]] = [next[target], next[index]];
setBottomTabOrder(next);
saveNavLayout(next, utilityOrder);
}
function moveUtility(index, direction) {
const target = index + direction;
if (target < 0 || target >= utilityOrder.length) return;
const next = utilityOrder.slice();
[next[index], next[target]] = [next[target], next[index]];
setUtilityOrder(next);
saveNavLayout(bottomTabOrder, next);
}
async function toggleDarkMode() {
const next = !darkMode;
setDarkMode(next);
try {
await localStore.set("settings:dark-mode", String(next), false);
} catch (e) {}
}
function closeAllDrawers() {
setCustomerDrawerOpen(false);
setBooksDrawerOpen(false);
setPricesDrawerOpen(false);
setBugsDrawerOpen(false);
setTeamDrawerOpen(false);
setScheduleDrawerOpen(false);
setTimeClockDrawerOpen(false);
setWebsiteDrawerOpen(false);
setPasswordDrawerOpen(false);
}
const BOTTOM_TAB_DEFS = {
home: {
label: "Home", icon: HomeIcon,
onClick: () => { setMode("home"); closeAllDrawers(); },
active: mode === "home",
},
newcustomer: {
label: "New Customer", icon: UserPlus,
onClick: () => { setMode("newcustomer"); closeAllDrawers(); },
active: mode === "newcustomer",
},
business: {
label: "Jobs", icon: ClipboardList,
onClick: () => { setMode("business"); closeAllDrawers(); },
active: mode === "business",
},
};
const UTILITY_DEFS = {
timeclock: {
label: "Time Clock", icon: Clock3,
onClick: () => { closeAllDrawers(); setTimeClockDrawerOpen((v) => !v); },
active: timeClockDrawerOpen,
},
prices: {
label: "Price Sheet", icon: Tag,
onClick: () => { setPricesDrawerOpen((v) => !v); setCustomerDrawerOpen(false); setBooksDrawerOpen(false); setBugsDrawerOpen(false); setTeamDrawerOpen(false); setScheduleDrawerOpen(false); setTimeClockDrawerOpen(false); setWebsiteDrawerOpen(false); setPasswordDrawerOpen(false); },
active: pricesDrawerOpen,
},
directory: {
label: "Customer Directory", icon: Users,
onClick: () => { setCustomerDrawerOpen((v) => !v); setBooksDrawerOpen(false); setPricesDrawerOpen(false); setBugsDrawerOpen(false); setTeamDrawerOpen(false); setScheduleDrawerOpen(false); setTimeClockDrawerOpen(false); setWebsiteDrawerOpen(false); setPasswordDrawerOpen(false); },
active: customerDrawerOpen,
},
books: {
label: "Books", icon: BookOpen,
onClick: () => { setBooksDrawerOpen((v) => !v); setCustomerDrawerOpen(false); setPricesDrawerOpen(false); setBugsDrawerOpen(false); setTeamDrawerOpen(false); setScheduleDrawerOpen(false); setTimeClockDrawerOpen(false); setWebsiteDrawerOpen(false); setPasswordDrawerOpen(false); },
active: booksDrawerOpen,
hidden: authUser && authUser.role !== "owner",
},
bugs: {
label: "Report a Bug", icon: Bug,
onClick: () => { setBugsDrawerOpen((v) => !v); setCustomerDrawerOpen(false); setPricesDrawerOpen(false); setBooksDrawerOpen(false); setTeamDrawerOpen(false); setScheduleDrawerOpen(false); setTimeClockDrawerOpen(false); setWebsiteDrawerOpen(false); setPasswordDrawerOpen(false); },
active: bugsDrawerOpen,
},
team: {
label: "Team Management", icon: KeyRound,
onClick: () => { setTeamDrawerOpen((v) => !v); setCustomerDrawerOpen(false); setPricesDrawerOpen(false); setBooksDrawerOpen(false); setBugsDrawerOpen(false); setScheduleDrawerOpen(false); setTimeClockDrawerOpen(false); setWebsiteDrawerOpen(false); setPasswordDrawerOpen(false); },
active: teamDrawerOpen,
hidden: authUser && authUser.role !== "owner",
},
schedule: {
label: "Crew Schedule", icon: Calendar,
onClick: () => { setScheduleDrawerOpen((v) => !v); setCustomerDrawerOpen(false); setPricesDrawerOpen(false); setBooksDrawerOpen(false); setBugsDrawerOpen(false); setTeamDrawerOpen(false); setWebsiteDrawerOpen(false); setPasswordDrawerOpen(false); },
active: scheduleDrawerOpen,
},
website: {
label: "Website Settings", icon: Globe,
onClick: () => { setWebsiteDrawerOpen((v) => !v); setCustomerDrawerOpen(false); setPricesDrawerOpen(false); setBooksDrawerOpen(false); setBugsDrawerOpen(false); setTeamDrawerOpen(false); setScheduleDrawerOpen(false); setTimeClockDrawerOpen(false); setPasswordDrawerOpen(false); },
active: websiteDrawerOpen,
hidden: authUser && authUser.role !== "owner",
},
password: {
label: "Change Password", icon: LockIcon,
onClick: () => { setPasswordDrawerOpen((v) => !v); setCustomerDrawerOpen(false); setPricesDrawerOpen(false); setBooksDrawerOpen(false); setBugsDrawerOpen(false); setTeamDrawerOpen(false); setScheduleDrawerOpen(false); setTimeClockDrawerOpen(false); setWebsiteDrawerOpen(false); },
active: passwordDrawerOpen,
},
darkmode: {
label: "Toggle dark mode", icon: darkMode ? Sun : Moon,
onClick: toggleDarkMode,
active: false,
},
logout: {
label: `Log out${authUser ? ` (${authUser.name || authUser.username})` : ""}`, icon: LogOut,
onClick: handleLogout,
active: false,
},
};
return (
<div className={darkMode ? "dark-mode" : ""}>
<style>{DARK_MODE_CSS}</style>
{showSplash && (
<div className="app-splash" aria-hidden="true">
<img className="app-splash-badge" src={LOGO_DATA_URI} alt="" style={{ height: 130, width: "auto" }} />
<div className="app-splash-word">R-DUB'S LAWN CARE</div>
</div>
)}
{authToken && roleNotification && !showSplash && (
<div className="fixed inset-0 z-50 flex items-center justify-center px-5" style={{ background: "rgba(17,12,24,.72)", backdropFilter: "blur(3px)" }}>
<div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-100">
<div className="px-5 pt-5 pb-4 text-center" style={{ background: "linear-gradient(135deg,#F6F0FC,#EFFBEA)" }}>
<img src={GUNNER_DATA_URI} alt="Gunner" className="mx-auto object-contain" style={{ width: 150, height: 150 }} />
<div className="inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mt-1"
style={{ color: "#4B2E70", background: "rgba(75,46,112,.10)" }}>A message from Gunner</div>
</div>
<div className="p-5 text-center">
<p className="text-2xl font-bold text-gray-900">
{roleNotification.new_role === "manager" ? "🎉 You've Been Promoted!" : "Your Role Has Been Updated"}
</p>
<p className="text-sm text-gray-600 mt-2 leading-relaxed">
{roleNotification.new_role === "manager"
? "You're now a Manager at R-DUB'S Lawn Care. You have access to additional tools for helping manage the crew, schedules, customers, and day-to-day work."
: "Your R-DUB'S account is now set to Crew. Your dashboard and tools have been updated to match your current role."}
</p>
{roleNotification.new_role === "manager" && (
<p className="text-sm font-semibold mt-3" style={{ color: "#4B2E70" }}>Welcome to the management team.</p>
)}
<button onClick={dismissRoleNotification} disabled={roleNoticeClosing}
className="w-full mt-5 rounded-xl py-3 text-sm font-bold text-white"
style={{ backgroundColor: "#4B2E70", opacity: roleNoticeClosing ? .7 : 1 }}>
{roleNoticeClosing ? "Opening…" : roleNotification.new_role === "manager" ? "Explore My New Dashboard" : "Continue to My Dashboard"}
</button>
</div>
</div>
</div>
)}
{authToken && authUser && tourOpen && !roleNotification && !showSplash && (
<GunnerTour
role={authUser.role}
step={tourStep}
onNext={nextGunnerTour}
onBack={() => setTourStep((s) => Math.max(0, s - 1))}
onSkip={finishGunnerTour}
/>
)}
{!authChecking && !authToken ? (
<div className="max-w-md mx-auto min-h-screen bg-white flex flex-col items-center justify-center px-6">
<img src={LOGO_DATA_URI} alt="R-DUB's Lawn Care" style={{ height: 90, width: "auto" }} className="mb-6" />
<div className="w-full max-w-xs">
<p className="text-sm font-semibold text-gray-900 mb-1 text-center">Log in</p>
<p className="text-xs text-gray-500 mb-4 text-center">R-DUB's Lawn Care team access</p>
<label className="block text-xs text-gray-500 mb-1">Username</label>
<input type="text" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)}
onKeyDown={(e) => e.key === "Enter" && handleLogin()}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-3" autoCapitalize="none" autoCorrect="off" />
<label className="block text-xs text-gray-500 mb-1">Password</label>
<input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}
onKeyDown={(e) => e.key === "Enter" && handleLogin()}
className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-1" />
{loginError && <p className="text-xs mt-1 mb-2" style={{ color: "var(--warn)" }}>{loginError}</p>}
<button onClick={handleLogin} disabled={loginSubmitting}
className="w-full rounded-lg py-2.5 text-sm text-white font-medium mt-3" style={{ backgroundColor: ACCENT_HEX, opacity: loginSubmitting ? 0.7 : 1 }}>
{loginSubmitting ? "Logging in…" : "Log in"}
</button>
<p className="text-xs text-gray-400 text-center mt-3">Forgot your password? Contact R-DUB's directly to have it reset.</p>
</div>
</div>
) : authChecking ? (
<div className="max-w-md mx-auto min-h-screen bg-white flex items-center justify-center">
<img src={LOGO_DATA_URI} alt="" style={{ height: 60, width: "auto", opacity: 0.4 }} />
</div>
) : (
<div className="max-w-md mx-auto min-h-screen bg-white" style={darkModeLoaded ? undefined : { visibility: "hidden" }}>
<div className="flex items-center justify-between border-b border-gray-200 sticky top-0 bg-white z-10 px-1">
<div className="flex items-center">
{utilityOrder.map((id, i) => {
const def = UTILITY_DEFS[id];
if (def.hidden) return null;
const Icon = def.icon;
return (
<div key={id} className="flex items-center">
{layoutEditMode && (
<button onClick={() => moveUtility(i, -1)} disabled={i === 0} aria-label="Move left"
className="text-gray-300" style={{ opacity: i === 0 ? 0.3 : 1 }}>
<ArrowLeft size={13} />
</button>
)}
<button onClick={layoutEditMode ? undefined : def.onClick} aria-label={def.label}
className="shrink-0 px-2.5 py-2.5" style={{ color: def.active ? "var(--accent)" : "var(--text-muted)" }}>
<Icon size={16} />
</button>
{layoutEditMode && (
<button onClick={() => moveUtility(i, 1)} disabled={i === utilityOrder.length - 1} aria-label="Move right"
className="text-gray-300" style={{ opacity: i === utilityOrder.length - 1 ? 0.3 : 1 }}>
<ArrowRight size={13} />
</button>
)}
</div>
);
})}
</div>
<button onClick={() => setLayoutEditMode((v) => !v)} aria-label="Edit layout"
className="shrink-0 px-2.5 py-2.5" style={{ color: layoutEditMode ? "var(--accent)" : "var(--text-faint)" }}>
<Settings2 size={15} />
</button>
</div>
{mode === "home" && (
<RoleDashboard
authUser={authUser}
onOpenJobs={() => { setMode("business"); closeAllDrawers(); }}
onOpenCustomers={() => { closeAllDrawers(); setCustomerDrawerOpen(true); }}
onOpenSchedule={() => { closeAllDrawers(); setScheduleDrawerOpen(true); }}
onOpenClock={() => { closeAllDrawers(); setTimeClockDrawerOpen(true); }}
onOpenTeam={() => { closeAllDrawers(); if (authUser && authUser.role === "owner") setTeamDrawerOpen(true); }}
onStartTour={startGunnerTour}
/>
)}
{mode === "newcustomer" && (
<NewCustomerView editRequest={editRequest} onConsumeEditRequest={() => setEditRequest(null)}
prefillEstimate={prefillEstimate} onConsumePrefillEstimate={() => setPrefillEstimate(null)}
userRole={authUser ? authUser.role : "owner"}
onSavedExisting={(phone) => {
if (returnToDirectoryPhone && returnToDirectoryPhone === phone) {
setReturnToDirectoryPhone(null);
setDirectoryReopenPhone(phone);
setCustomerDrawerOpen(true);
}
}} />
)}
{mode === "business" && (
<BusinessView onEditRequest={(item) => { setEditRequest(item); setMode("newcustomer"); }}
onPrefillEstimate={(data) => { setPrefillEstimate(data); setMode("newcustomer"); }}
userRole={authUser ? authUser.role : "owner"} />
)}
{customerDrawerOpen && (
<div className="fixed inset-0 z-20" style={{ top: "45px", bottom: BOTTOM_TAB_HEIGHT }}>
<div className="absolute inset-0 bg-black/30" onClick={() => setCustomerDrawerOpen(false)} />
<div className="absolute inset-0 bg-white overflow-y-auto max-w-md mx-auto">
<div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 sticky top-0 bg-white z-10">
<p className="text-sm font-medium text-gray-900">Customer Directory</p>
<button onClick={() => setCustomerDrawerOpen(false)} aria-label="Close" className="text-gray-400">
<X size={18} />
</button>
</div>
<CustomerDirectoryView
onEditVisit={(item) => { setEditRequest(item); setMode("newcustomer"); setCustomerDrawerOpen(false); setReturnToDirectoryPhone(item.phone); }}
initialExpandedPhone={directoryReopenPhone}
onConsumeInitialExpandedPhone={() => setDirectoryReopenPhone(null)}
userRole={authUser ? authUser.role : "owner"}
/>
</div>
</div>
)}
{booksDrawerOpen && authUser && authUser.role === "owner" && (
<div className="fixed inset-0 z-20" style={{ top: "45px", bottom: BOTTOM_TAB_HEIGHT }}>
<div className="absolute inset-0 bg-black/30" onClick={() => setBooksDrawerOpen(false)} />
<div className="absolute inset-0 bg-white overflow-y-auto max-w-md mx-auto">
<div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 sticky top-0 bg-white z-10">
<p className="text-sm font-medium text-gray-900">Books</p>
<button onClick={() => setBooksDrawerOpen(false)} aria-label="Close" className="text-gray-400">
<X size={18} />
</button>
</div>
<ExpensesView />
</div>
</div>
)}
{bugsDrawerOpen && (
<div className="fixed inset-0 z-20" style={{ top: "45px", bottom: BOTTOM_TAB_HEIGHT }}>
<div className="absolute inset-0 bg-black/30" onClick={() => setBugsDrawerOpen(false)} />
<div className="absolute inset-0 bg-white overflow-y-auto max-w-md mx-auto">
<div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 sticky top-0 bg-white z-10">
<p className="text-sm font-medium text-gray-900">Report a Bug</p>
<button onClick={() => setBugsDrawerOpen(false)} aria-label="Close" className="text-gray-400">
<X size={18} />
</button>
</div>
<BugReportsView userRole={authUser ? authUser.role : "owner"} currentUsername={authUser ? authUser.username : ""} />
</div>
</div>
)}
{teamDrawerOpen && authUser && authUser.role === "owner" && (
<div className="fixed inset-0 z-20" style={{ top: "45px", bottom: BOTTOM_TAB_HEIGHT }}>
<div className="absolute inset-0 bg-black/30" onClick={() => setTeamDrawerOpen(false)} />
<div className="absolute inset-0 bg-white overflow-y-auto max-w-md mx-auto">
<div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 sticky top-0 bg-white z-10">
<p className="text-sm font-medium text-gray-900">Team Management</p>
<button onClick={() => setTeamDrawerOpen(false)} aria-label="Close" className="text-gray-400">
<X size={18} />
</button>
</div>
<TeamView authToken={authToken} currentUsername={authUser ? authUser.username : ""} />
</div>
</div>
)}
{timeClockDrawerOpen && (
<div className="fixed inset-0 z-20" style={{ top: "45px", bottom: BOTTOM_TAB_HEIGHT }}>
<div className="absolute inset-0 bg-black/30" onClick={() => setTimeClockDrawerOpen(false)} />
<div className="absolute inset-0 bg-white overflow-y-auto max-w-md mx-auto">
<div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 sticky top-0 bg-white z-10">
<p className="text-sm font-medium text-gray-900">Time Clock</p>
<button onClick={() => setTimeClockDrawerOpen(false)} aria-label="Close" className="text-gray-400"><X size={18} /></button>
</div>
<TimeClockView authUser={authUser} />
</div>
</div>
)}
{scheduleDrawerOpen && (
<div className="fixed inset-0 z-20" style={{ top: "45px", bottom: BOTTOM_TAB_HEIGHT }}>
<div className="absolute inset-0 bg-black/30" onClick={() => setScheduleDrawerOpen(false)} />
<div className="absolute inset-0 bg-white overflow-y-auto max-w-md mx-auto">
<div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 sticky top-0 bg-white z-10">
<p className="text-sm font-medium text-gray-900">Crew Schedule</p>
<button onClick={() => setScheduleDrawerOpen(false)} aria-label="Close" className="text-gray-400">
<X size={18} />
</button>
</div>
<CrewScheduleView userRole={authUser ? authUser.role : "owner"} />
</div>
</div>
)}
{websiteDrawerOpen && authUser && authUser.role === "owner" && (
<div className="fixed inset-0 z-20" style={{ top: "45px", bottom: BOTTOM_TAB_HEIGHT }}>
<div className="absolute inset-0 bg-black/30" onClick={() => setWebsiteDrawerOpen(false)} />
<div className="absolute inset-0 bg-white overflow-y-auto max-w-md mx-auto">
<div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 sticky top-0 bg-white z-10">
<p className="text-sm font-medium text-gray-900">Website Settings</p>
<button onClick={() => setWebsiteDrawerOpen(false)} aria-label="Close" className="text-gray-400">
<X size={18} />
</button>
</div>
<WebsiteSettingsView />
</div>
</div>
)}
{passwordDrawerOpen && (
<div className="fixed inset-0 z-20" style={{ top: "45px", bottom: BOTTOM_TAB_HEIGHT }}>
<div className="absolute inset-0 bg-black/30" onClick={() => setPasswordDrawerOpen(false)} />
<div className="absolute inset-0 bg-white overflow-y-auto max-w-md mx-auto">
<div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 sticky top-0 bg-white z-10">
<p className="text-sm font-medium text-gray-900">Change Password</p>
<button onClick={() => setPasswordDrawerOpen(false)} aria-label="Close" className="text-gray-400">
<X size={18} />
</button>
</div>
<ChangePasswordView />
</div>
</div>
)}
{pricesDrawerOpen && (
<div className="fixed inset-0 z-20" style={{ top: "45px", bottom: BOTTOM_TAB_HEIGHT }}>
<div className="absolute inset-0 bg-black/30" onClick={() => setPricesDrawerOpen(false)} />
<div className="absolute inset-0 bg-white overflow-y-auto max-w-md mx-auto">
<div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 sticky top-0 bg-white z-10">
<p className="text-sm font-medium text-gray-900">Price Sheet</p>
<button onClick={() => setPricesDrawerOpen(false)} aria-label="Close" className="text-gray-400">
<X size={18} />
</button>
</div>
<PriceSheetView />
</div>
</div>
)}
<div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 flex z-30" style={{ height: BOTTOM_TAB_HEIGHT }}>
{bottomTabOrder.map((id, i) => {
const def = BOTTOM_TAB_DEFS[id];
const Icon = def.icon;
return (
<div key={id} className="flex-1 flex items-center">
{layoutEditMode && i > 0 && (
<button onClick={() => moveBottom(i, -1)} aria-label="Move left" className="text-gray-300 px-0.5">
<ArrowLeft size={12} />
</button>
)}
<button onClick={layoutEditMode ? undefined : def.onClick}
className="flex-1 h-full flex flex-col items-center justify-center gap-0.5"
style={{ color: def.active ? "var(--accent)" : "var(--text-muted)" }}>
<Icon size={22} />
<span className="text-xs font-medium">{def.label}</span>
</button>
{layoutEditMode && i < bottomTabOrder.length - 1 && (
<button onClick={() => moveBottom(i, 1)} aria-label="Move right" className="text-gray-300 px-0.5">
<ArrowRight size={12} />
</button>
)}
</div>
);
})}
</div>
</div>
)}
</div>
);
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
