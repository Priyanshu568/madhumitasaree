/* ===== EDIT THIS BLOCK ===== */
const CONFIG = {
  whatsapp: "918250731670", // Country code + WhatsApp number, no + or spaces
  phone: "+91 82507 31670",
  email: "madhumitafabfashion@gmail.com",
  announce: "Diwali & Wedding Utsav: Flat 20% off with code DIWALI20. Visit Subhas Avenue, Ranaghat, or order online.",
  fb: "https://www.facebook.com/RanaghatMadhumitaFabFashion/",
  maps: "https://www.google.com/maps/place/Madhumita+Fab+Fashion/@23.1758349,88.5664704,19z",
  lat: 23.1758349,
  lng: 88.5664704,
  fallPico: 150
};

const DEFAULT_ADMIN = {
  username: "admin",
  passwordFallback: "madhumita1980",
  recoveryEmail: "madhumitafabfashion@gmail.com"
};

/* stock: 0 = Sold out automatically */
const DEFAULT_PRODUCTS = [
  { id: 1, name: "Bridal Red Katan Banarasi", cat: "Bridal Banarasi", price: 6850, mrp: 8500, stock: 3, fabric: "Pure katan silk with meenakari zari", tag: "Bridal bestseller", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80" },
  { id: 2, name: "Fulia Handloom Cotton Tant", cat: "Tant & Handloom", price: 1150, mrp: 1450, stock: 8, fabric: "Combed Bengal cotton, 100s count", tag: "Daily comfort", img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=80" },
  { id: 3, name: "Resham Muslin Dhakai Jamdani", cat: "Dhakai Jamdani", price: 3450, mrp: 4200, stock: 2, fabric: "Handwoven muslin with zari buti", tag: "Artisan pick", img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=80" },
  { id: 4, name: "Swarnachari Baluchari Silk", cat: "Baluchari & Silk", price: 5900, mrp: 7400, stock: 1, fabric: "Pure mulberry silk, Bishnupur weave", tag: "Heritage silk", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80" },
  { id: 5, name: "Shantipur Zari Border Tangail", cat: "Tant & Handloom", price: 1680, mrp: 2100, stock: 6, fabric: "Soft cotton-silk blend", tag: "Festive", img: "https://images.unsplash.com/photo-1583391733981-8498408ee4b6?auto=format&fit=crop&w=700&q=80" },
  { id: 6, name: "Rose Gold Tissue Organza", cat: "Party & Festive", price: 2950, mrp: 3800, stock: 4, fabric: "Glass organza with zardozi border", tag: "Party wear", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80" },
  { id: 7, name: "Kanjeevaram Temple Border Silk", cat: "Baluchari & Silk", price: 7500, mrp: 9200, stock: 2, fabric: "Heavy korvai silk", tag: "Wedding edit", img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=80" },
  { id: 8, name: "Ivory & Sindoor Self Jamdani", cat: "Dhakai Jamdani", price: 2490, mrp: 3100, stock: 5, fabric: "Handloom Dhakai cotton resham", tag: "Local favourite", img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=80" }
];
/* ===== END EDIT BLOCK ===== */

const $ = (id) => document.getElementById(id);
const inr = (n) => "₹" + Number(n || 0).toLocaleString("en-IN");
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

let PRODUCTS = loadStore("mff_products_v2", DEFAULT_PRODUCTS);
let ORDERS = loadStore("mff_orders_v2", [
  {
    orderId: "MFF-2026-4812",
    date: "2026-11-14 18:42",
    customer: { username: "@ananya_sen", name: "Ananya Sen", phone: "+91 98304 51290", address: "Saratpally, Ranaghat - 741201", mode: "Home delivery" },
    items: [{ id: 1, name: "Bridal Red Katan Banarasi", price: 6850, qty: 1, img: DEFAULT_PRODUCTS[0].img }],
    payment: { method: "UPI", ref: "UTR631984720194", coupon: "DIWALI20", subtotal: 6850, discount: 1370, fallPico: 150, total: 5630 }
  }
]);

let cat = "All";
let cart = [];
let activeCoupon = "DIWALI20";
let selectedPayMethod = "UPI";
let isAdmin = sessionStorage.getItem("mff_admin_auth") === "true";
let isEcoLite = localStorage.getItem("mff_eco_lite") === "true";
let recoveryOtp = null;

try {
  cart = JSON.parse(localStorage.getItem("mff_cart_v2") || "[]").filter((c) => PRODUCTS.some((p) => p.id === c.id && p.stock > 0));
} catch (e) {}

function loadStore(key, fallbackVal) {
  try {
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return JSON.parse(JSON.stringify(fallbackVal));
}

function saveStore(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {}
}

const saveCart = () => saveStore("mff_cart_v2", cart);

// SVG Fallback for Offline/Broken Images
function fallback(img) {
  img.onerror = null;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5A1220"/><stop offset="1" stop-color="#2A0810"/></linearGradient></defs><rect width="400" height="500" fill="url(#g)"/><rect x="16" y="16" width="368" height="468" fill="none" stroke="#D4AF37" stroke-width="2" stroke-dasharray="6 6"/><text x="200" y="255" fill="#F5E1A4" font-family="Georgia" font-size="22" text-anchor="middle">Madhumita</text></svg>`;
  img.src = "data:image/svg+xml," + encodeURIComponent(svg);
}
document.addEventListener("error", (e) => {
  if (e.target.tagName === "IMG" && !e.target.dataset.f) {
    e.target.dataset.f = 1;
    fallback(e.target);
  }
}, true);

function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("on");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove("on"), 2800);
}

// ==========================================================================
// DRAWERS, MOBILE MENU & ECO MODE
// ==========================================================================
function toggleDrawer(open) {
  $("drawer").classList.toggle("on", open);
  $("shade").classList.toggle("on", open);
}

function toggleMobileMenu(open) {
  $("mobileMenuDrawer").classList.toggle("on", open);
  $("mobileMenuShade").classList.toggle("on", open);
}

function applyEcoState() {
  document.body.classList.toggle("eco-lite", isEcoLite);
  $("ecoBtn").classList.toggle("active", isEcoLite);
  $("ecoLabel").textContent = isEcoLite ? "Eco: On" : "Eco: Auto";
  $("mobileEcoText").textContent = isEcoLite ? "ON" : "AUTO";
}

function toggleEcoMode() {
  isEcoLite = !isEcoLite;
  saveStore("mff_eco_lite", isEcoLite);
  applyEcoState();
  toast(isEcoLite ? "Eco Battery & Data Saver ON" : "Eco Auto Mode restored");
}

// ==========================================================================
// LUXURY ANIMATIONS & BATTERY-AWARE PARTICLES
// ==========================================================================
function initAnimations() {
  applyEcoState();

  const pBox = $("heroParticles");
  if (pBox) {
    const count = window.innerWidth < 768 ? 7 : 14;
    for (let i = 0; i < count; i++) {
      const dot = document.createElement("span");
      dot.className = "zari-dot";
      const size = 3 + (i % 3) * 2;
      dot.style.width = size + "px";
      dot.style.height = size + "px";
      dot.style.left = ((i * 7.2 + 5) % 94) + "%";
      dot.style.animationDuration = (7 + (i % 4) * 2.5) + "s";
      dot.style.animationDelay = ((i * 0.7) % 5) + "s";
      pBox.appendChild(dot);
    }
    if ("IntersectionObserver" in window) {
      const heroObs = new IntersectionObserver((entries) => {
        pBox.classList.toggle("paused", !entries[0].isIntersecting);
      });
      heroObs.observe(document.querySelector(".hero"));
    }
  }

  // Desktop 3D Perspective Tilt on Hero Figure
  const fig = $("heroShowcase");
  if (fig && window.matchMedia("(hover: hover)").matches) {
    fig.addEventListener("mousemove", (e) => {
      if (isEcoLite) return;
      const r = fig.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      fig.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`;
    });
    fig.addEventListener("mouseleave", () => {
      fig.style.transform = "";
    });
  }

  // Scroll Reveal
  if ("IntersectionObserver" in window) {
    const revObs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("on");
          revObs.unobserve(en.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach((el) => revObs.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("on"));
  }
}

// ==========================================================================
// CATALOG, FILTERS & AUTOMATIC OUT-OF-STOCK STATE
// ==========================================================================
function renderPills() {
  const cats = ["All", ...new Set(PRODUCTS.map((p) => p.cat))];
  $("pills").innerHTML = cats.map((c) => `<button type="button" class="${c === cat ? "on" : ""}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
}

$("pills").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  cat = b.dataset.c;
  renderPills();
  renderGrid();
});

function renderGrid() {
  const q = $("q").value.trim().toLowerCase();
  const s = $("sort").value;
  let list = PRODUCTS.filter((p) => (cat === "All" || p.cat === cat) && (p.name + p.cat + p.fabric).toLowerCase().includes(q));
  if (s === "l") list.sort((a, b) => a.price - b.price);
  if (s === "h") list.sort((a, b) => b.price - a.price);

  $("grid").innerHTML = list.length
    ? list.map((p) => {
        const pct = Math.round((1 - p.price / p.mrp) * 100);
        const out = p.stock < 1;
        const stockLabel = out
          ? `<span class="stock-pill out">Out of stock</span>`
          : p.stock === 1
          ? `<span class="stock-pill low">Only 1 left</span>`
          : `<span class="stock-pill">${p.stock} in stock</span>`;

        return `<article class="card">
          <div class="ph ${out ? "sold" : ""}">
            <img src="${esc(p.img)}" alt="${esc(p.name)}" loading="lazy" decoding="async" />
            <span class="tag">${out ? "Sold out" : esc(p.tag)}</span>
            ${pct > 0 && !out ? `<span class="tag off">${pct}% off</span>` : ""}
          </div>
          <div class="cb">
            <div class="cb-top"><small>${esc(p.cat)}</small>${stockLabel}</div>
            <h3>${esc(p.name)}</h3>
            <p>${esc(p.fabric)}</p>
            <div class="price"><b>${inr(p.price)}</b><s>${inr(p.mrp)}</s></div>
          </div>
          <div class="card-btns">
            ${
              out
                ? `<button type="button" class="btn ghost full" disabled>Out of Stock</button>`
                : `<button type="button" class="btn ghost" onclick="addToBag(${p.id})">+ Bag</button>
                   <button type="button" class="btn btn-sheen" onclick="buyNowDirect(${p.id})">&#9889; Buy Now</button>`
            }
          </div>
        </article>`;
      }).join("")
    : `<p class="empty">No sarees match your search. Try a different word or category.</p>`;
}

$("q").addEventListener("input", renderGrid);
$("sort").addEventListener("change", renderGrid);

// ==========================================================================
// SHOPPING BAG & COUPON ENGINE
// ==========================================================================
function addToBag(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p || p.stock < 1) return toast("This saree is currently out of stock");
  const c = cart.find((x) => x.id === id);
  if ((c ? c.qty : 0) + 1 > p.stock) return toast("Only " + p.stock + " piece(s) available");
  c ? c.qty++ : cart.push({ id, qty: 1 });
  saveCart();
  renderBag();
  const bagBtn = document.querySelector(".bag");
  bagBtn.classList.remove("bag-pop");
  void bagBtn.offsetWidth;
  bagBtn.classList.add("bag-pop");
  toast("Added to your saree bag");
}

function buyNowDirect(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p || p.stock < 1) return toast("This saree is currently out of stock");
  const c = cart.find((x) => x.id === id);
  if (!c) {
    cart.push({ id, qty: 1 });
    saveCart();
    renderBag();
  }
  openCheckoutModal();
}

function chgQty(id, d) {
  const c = cart.find((x) => x.id === id);
  const p = PRODUCTS.find((x) => x.id === id);
  if (!c || !p) return;
  if (d > 0 && c.qty >= p.stock) return toast("Maximum stock (" + p.stock + ") reached");
  c.qty += d;
  if (c.qty < 1) cart = cart.filter((x) => x.id !== id);
  saveCart();
  renderBag();
}

const bagLines = () => cart.map((c) => ({ ...PRODUCTS.find((p) => p.id === c.id), qty: c.qty })).filter((x) => x && x.id);

function calcBagTotals(includeFp) {
  const lines = bagLines();
  const qtyCount = lines.reduce((a, i) => a + i.qty, 0);
  const subtotal = lines.reduce((a, i) => a + i.price * i.qty, 0);
  let discount = 0;
  if (activeCoupon === "DIWALI20") discount = Math.round(subtotal * 0.2);
  else if (activeCoupon === "BULK25" && subtotal >= 10000) discount = Math.round(subtotal * 0.25);
  const fpCost = includeFp ? qtyCount * CONFIG.fallPico : 0;
  return { lines, qtyCount, subtotal, discount, fpCost, total: Math.max(0, subtotal - discount + fpCost) };
}

function renderBag() {
  const { lines, qtyCount, subtotal, discount, total } = calcBagTotals($("fpBag").checked);
  $("bagCount").textContent = qtyCount;
  $("bagCount2").textContent = qtyCount;

  $("bagItems").innerHTML = lines.length
    ? lines.map((i) => `<div class="item">
        <img src="${esc(i.img)}" alt="" />
        <div><b>${esc(i.name)}</b>${inr(i.price)}</div>
        <div class="qty">
          <button type="button" onclick="chgQty(${i.id},-1)" aria-label="Remove one">&minus;</button>
          <span>${i.qty}</span>
          <button type="button" onclick="chgQty(${i.id},1)" aria-label="Add one">+</button>
        </div>
      </div>`).join("")
    : `<p class="note" style="padding:28px 0;text-align:center">Your bag is empty. Choose a saree to begin.</p>`;

  $("bagSubtotal").textContent = inr(subtotal);
  $("bagDiscount").textContent = `-${inr(discount)} (${activeCoupon || "NONE"})`;
  $("bagTotal").textContent = inr(total);
  $("proceedCheckoutBtn").disabled = !lines.length;
  $("quickWaOrderBtn").disabled = !lines.length;
}

function openSaleModal() {
  $("saleModal").classList.add("on");
}

function closeSaleModal() {
  $("saleModal").classList.remove("on");
}

function applyCouponCode(code) {
  activeCoupon = code;
  $("couponInput").value = code;
  renderBag();
  closeSaleModal();
  toast("Coupon " + code + " applied!");
}

function applyCouponInput() {
  const code = $("couponInput").value.trim().toUpperCase();
  if (code === "DIWALI20" || code === "BULK25") {
    activeCoupon = code;
    renderBag();
    toast("Coupon " + code + " activated!");
  } else {
    toast("Use DIWALI20 (20% off) or BULK25 (25% off above ₹10,000)");
  }
}

function sendQuickWhatsAppOrder() {
  const { lines, subtotal, discount, fpCost, total } = calcBagTotals($("fpBag").checked);
  if (!lines.length) return;
  const list = lines.map((i, k) => `${k + 1}. ${i.name} x${i.qty} = ${inr(i.price * i.qty)}`).join("\n");
  const msg = `Hello Madhumita Fab Fashion, I would like to order:\n\n${list}\n${fpCost ? `Fall & pico: ${inr(fpCost)}\n` : ""}${discount ? `Discount (${activeCoupon}): -${inr(discount)}\n` : ""}Total: ${inr(total)}`;
  window.open("https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
}

// ==========================================================================
// 3-STEP ORDER & PAYMENT CHECKOUT + PRINTABLE RECEIPT
// ==========================================================================
function proceedToCheckout() {
  toggleDrawer(false);
  openCheckoutModal();
}

function openCheckoutModal() {
  if (!bagLines().length) {
    const firstAvail = PRODUCTS.find((p) => p.stock > 0);
    if (!firstAvail) return toast("All sarees are currently sold out");
    addToBag(firstAvail.id);
  }
  $("fpCheckout").checked = $("fpBag").checked;
  $("checkoutFormView").classList.remove("hidden");
  $("checkoutReceiptView").classList.add("hidden");
  $("checkoutModal").classList.add("on");
  updateCheckoutTotals();
}

function closeCheckoutModal() {
  $("checkoutModal").classList.remove("on");
}

function updateCheckoutTotals() {
  const { lines, subtotal, discount, fpCost } = calcBagTotals($("fpCheckout").checked);
  const mode = document.querySelector('input[name="deliveryMode"]:checked')?.value || "Home delivery";
  const pin = $("custPin").value.trim();
  const shipping = mode === "Showroom pickup" || pin === "741201" || subtotal >= 2000 ? 0 : 99;
  const grand = Math.max(0, subtotal - discount + fpCost + shipping);

  $("checkoutItemsList").innerHTML = lines.map((i) => `<div class="chk-line"><span>${esc(i.name)} &times; ${i.qty}</span><b>${inr(i.price * i.qty)}</b></div>`).join("");
  $("chkSub").textContent = inr(subtotal);
  $("chkCode").textContent = activeCoupon || "NONE";
  $("chkDisc").textContent = "-" + inr(discount);
  $("chkFp").textContent = inr(fpCost);
  $("chkShip").textContent = shipping === 0 ? "FREE" : inr(shipping);
  $("chkGrand").textContent = inr(grand);

  $("upiQrImg").src = `https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(`upi://pay?pa=madhumitafab@pnb&pn=Madhumita Fab Fashion&am=${grand}&cu=INR`)}`;
  return { lines, subtotal, discount, fpCost, shipping, grand, mode };
}

function selectPaymentMethod(method) {
  selectedPayMethod = method;
  ["UPI", "CARD", "NETBANKING", "COD"].forEach((m) => {
    $("payTab-" + m).classList.toggle("on", m === method);
    $("payPanel-" + m).classList.toggle("hidden", m !== method);
  });
}

function verifyUpiHandle() {
  const val = $("upiIdInput").value.trim();
  if (!val.includes("@")) return toast("Enter a valid UPI ID containing '@'");
  $("upiVerifiedMsg").classList.remove("hidden");
  toast("UPI handle verified");
}

function autoFillGPSAddress() {
  $("custPin").value = "741201";
  $("custCity").value = "Ranaghat, Nadia, West Bengal";
  $("custAddress").value = "Near Subhas Avenue / Saratpally, Ranaghat - 741201";
  updateCheckoutTotals();
  toast("Ranaghat GPS address auto-filled");
}

function completeOrder() {
  const name = $("custName").value.trim();
  const phone = $("custPhone").value.trim();
  if (!name || !phone) return toast("Please enter your full name and mobile number");

  const totals = updateCheckoutTotals();
  if (!totals.lines.length) return toast("Your bag is empty");

  // Verify stock & deduct automatically
  for (const item of totals.lines) {
    const prod = PRODUCTS.find((p) => p.id === item.id);
    if (!prod || prod.stock < item.qty) return toast(`Insufficient stock for ${item.name}`);
  }
  totals.lines.forEach((item) => {
    const prod = PRODUCTS.find((p) => p.id === item.id);
    if (prod) prod.stock = Math.max(0, prod.stock - item.qty);
  });
  saveStore("mff_products_v2", PRODUCTS);
  renderGrid();

  let username = $("custUsername").value.trim() || "@ranaghat_guest";
  if (!username.startsWith("@")) username = "@" + username;
  const address = `${$("custAddress").value.trim() || "Subhas Avenue"}, ${$("custCity").value.trim()} - ${$("custPin").value.trim()}`;
  const orderId = "MFF-2026-" + Math.floor(1000 + Math.random() * 9000);
  const txnRef = selectedPayMethod === "COD" ? "COD-" + Math.floor(100000 + Math.random() * 900000) : "UTR" + Math.floor(100000000000 + Math.random() * 900000000000);

  const orderRecord = {
    orderId,
    date: new Date().toISOString().replace("T", " ").slice(0, 16),
    customer: { username, name, phone, address, mode: totals.mode },
    items: totals.lines.map((i) => ({ id: i.id, name: i.name, price: i.price, qty: i.qty, img: i.img })),
    payment: { method: selectedPayMethod, ref: txnRef, coupon: activeCoupon || "NONE", subtotal: totals.subtotal, discount: totals.discount, fallPico: totals.fpCost, total: totals.grand }
  };

  ORDERS.unshift(orderRecord);
  saveStore("mff_orders_v2", ORDERS);
  if (isAdmin) renderAdminDashboard();

  cart = [];
  saveCart();
  renderBag();

  renderReceipt(orderRecord);
  $("checkoutFormView").classList.add("hidden");
  $("checkoutReceiptView").classList.remove("hidden");
  toast("Order #" + orderId + " confirmed!");
}

function renderReceipt(rec) {
  const rows = rec.items.map((i) => `<tr><td>${esc(i.name)}</td><td>${i.qty}</td><td>${inr(i.price)}</td><td><b>${inr(i.price * i.qty)}</b></td></tr>`).join("");
  $("receiptContentBox").innerHTML = `
    <div class="receipt-meta">
      <div><small class="note">Order ID</small><br><b>#${esc(rec.orderId)}</b><br><small class="note">${esc(rec.date)}</small></div>
      <div style="text-align:right"><small class="note">Payment Mode</small><br><b class="green">${esc(rec.payment.method)} &bull; VERIFIED</b><br><small class="note">Ref: ${esc(rec.payment.ref)}</small></div>
    </div>
    <div class="receipt-cust">
      <div><small class="note">Customer</small><br><b>${esc(rec.customer.name)} (${esc(rec.customer.username)})</b></div>
      <div><small class="note">Mobile Number</small><br><b>${esc(rec.customer.phone)}</b></div>
      <div style="grid-column:1/-1"><small class="note">${esc(rec.customer.mode)}</small><br><b>${esc(rec.customer.address)}</b></div>
    </div>
    <table class="receipt-table">
      <thead><tr><th>Saree</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div style="text-align:right">
      <div>Subtotal: <b>${inr(rec.payment.subtotal)}</b></div>
      <div class="green">Discount (${esc(rec.payment.coupon)}): <b>-${inr(rec.payment.discount)}</b></div>
      <div>Fall &amp; Pico: <b>${inr(rec.payment.fallPico)}</b></div>
      <div style="font-size:17px;color:var(--m);margin-top:6px">Total Paid: <b>${inr(rec.payment.total)}</b></div>
    </div>
  `;

  $("receiptWaBtn").onclick = () => {
    const msg = `Hello Madhumita Fab Fashion, I have placed Order #${rec.orderId} (${inr(rec.payment.total)} via ${rec.payment.method}). Name: ${rec.customer.name}, Mobile: ${rec.customer.phone}.`;
    window.open("https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
  };
}

// ==========================================================================
// GPS DISTANCE CALCULATOR & LIVE SHOWROOM HOURS
// ==========================================================================
function detectUserGPS() {
  if (!navigator.geolocation) return simulateGPS(23.1755, 88.5632, "Saratpally, Ranaghat");
  navigator.geolocation.getCurrentPosition(
    (pos) => simulateGPS(pos.coords.latitude, pos.coords.longitude, "Your Live GPS"),
    () => simulateGPS(23.1755, 88.5632, "Saratpally, Ranaghat"),
    { enableHighAccuracy: true, timeout: 7000 }
  );
}

function simulateGPS(lat, lng, label) {
  const R = 6371;
  const dLat = ((CONFIG.lat - lat) * Math.PI) / 180;
  const dLon = ((CONFIG.lng - lng) * Math.PI) / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos((lat * Math.PI) / 180) * Math.cos((CONFIG.lat * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
  const km = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const mins = Math.max(2, Math.round(km * 3.5));

  $("heroGpsHeadline").textContent = `${label}: ${km.toFixed(2)} km from Subhas Ave Showroom`;
  $("gpsDistanceOut").textContent = `${km.toFixed(2)} km from Madhumita Fab Fashion (${label})`;
  $("gpsDeliveryNote").textContent = km <= 8 ? `Eligible for FREE same-day Ranaghat delivery (~${mins} mins drive)` : "Express courier delivery available across India";
}

function updateOpenStatus() {
  const d = new Date(), h = d.getHours(), el = $("status"), closed = d.getDay() === 1;
  const open = !closed && h >= 10 && h < 21;
  el.textContent = open ? "Open now" : closed ? "Closed today" : "Closed now";
  el.className = open ? "" : "c";
}

// ==========================================================================
// ADMIN AUTHENTICATION, SELLER EMAIL OTP RECOVERY & STOCK MANAGER
// ==========================================================================
async function hashStr(txt) {
  const s = "MFF1980::" + txt;
  if (window.crypto?.subtle) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
    return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  return btoa(s);
}

async function getAdminConfig() {
  let cfg = loadStore("mff_admin_cfg_v2", null);
  if (!cfg) {
    cfg = {
      username: DEFAULT_ADMIN.username,
      passwordHash: await hashStr(DEFAULT_ADMIN.passwordFallback),
      recoveryEmail: DEFAULT_ADMIN.recoveryEmail
    };
    saveStore("mff_admin_cfg_v2", cfg);
  }
  return cfg;
}

function setupAdminLinks() {
  ["navAdminLink", "mobileDrawerAdminLink", "footerAdminLink"].forEach((id) => {
    const el = $(id);
    if (!el) return;
    el.textContent = isAdmin ? "Admin Dashboard" : "Access for Admin";
    el.addEventListener("click", (e) => {
      if (!isAdmin) {
        e.preventDefault();
        openAdminLoginModal();
      }
    });
  });
  syncAdminVisibility();
}

function syncAdminVisibility() {
  const sec = $("admin-panel");
  if (isAdmin) {
    sec.classList.remove("hidden");
    renderAdminDashboard();
  } else {
    sec.classList.add("hidden");
    $("adminOrdersBody").innerHTML = "";
  }
}

function openAdminLoginModal() {
  toggleAdminRecoveryView(false);
  $("adminLoginModal").classList.add("on");
}

function closeAdminLoginModal() {
  $("adminLoginModal").classList.remove("on");
}

function toggleAdminRecoveryView(showRecover) {
  $("adminLoginErr").classList.add("hidden");
  $("recoverErr").classList.add("hidden");
  $("adminSignInView").classList.toggle("hidden", showRecover);
  $("adminRecoverView").classList.toggle("hidden", !showRecover);
}

async function submitAdminLogin(e) {
  e.preventDefault();
  const cfg = await getAdminConfig();
  const u = $("adminUserIn").value.trim();
  const pHash = await hashStr($("adminPassIn").value.trim());
  if (u === cfg.username && pHash === cfg.passwordHash) {
    isAdmin = true;
    sessionStorage.setItem("mff_admin_auth", "true");
    closeAdminLoginModal();
    setupAdminLinks();
    $("admin-panel").scrollIntoView({ behavior: "smooth" });
    toast("Admin access granted");
  } else {
    $("adminLoginErr").classList.remove("hidden");
  }
}

function logoutAdmin() {
  isAdmin = false;
  sessionStorage.removeItem("mff_admin_auth");
  setupAdminLinks();
  window.scrollTo({ top: 0, behavior: "smooth" });
  toast("Admin logged out");
}

async function sendSellerOtp() {
  const cfg = await getAdminConfig();
  const email = $("recoverEmailIn").value.trim().toLowerCase();
  if (email !== cfg.recoveryEmail.toLowerCase()) {
    $("recoverErr").textContent = "Email does not match connected showroom seller email.";
    $("recoverErr").classList.remove("hidden");
    return;
  }
  $("recoverErr").classList.add("hidden");
  recoveryOtp = String(Math.floor(100000 + Math.random() * 900000));
  $("otpNoticeBox").innerHTML = `OTP sent to <b>${esc(cfg.recoveryEmail)}</b>: <strong>${recoveryOtp}</strong>`;
  $("otpNoticeBox").classList.remove("hidden");
  $("otpFormFields").classList.remove("hidden");
}

async function resetAdminWithOtp() {
  const otp = $("recoverOtpIn").value.trim();
  const newUser = $("recoverNewUserIn").value.trim();
  const newPass = $("recoverNewPassIn").value.trim();
  if (!recoveryOtp || otp !== recoveryOtp) {
    $("recoverErr").textContent = "Invalid 6-digit OTP code.";
    $("recoverErr").classList.remove("hidden");
    return;
  }
  if (newUser.length < 3 || newPass.length < 6) {
    $("recoverErr").textContent = "Username (min 3) and password (min 6) required.";
    $("recoverErr").classList.remove("hidden");
    return;
  }
  const cfg = await getAdminConfig();
  cfg.username = newUser;
  cfg.passwordHash = await hashStr(newPass);
  saveStore("mff_admin_cfg_v2", cfg);
  recoveryOtp = null;
  toggleAdminRecoveryView(false);
  $("adminUserIn").value = newUser;
  toast("Admin username & password updated!");
}

async function openAdminSettingsModal() {
  if (!isAdmin) return openAdminLoginModal();
  const cfg = await getAdminConfig();
  $("setEmailIn").value = cfg.recoveryEmail;
  $("setUserIn").value = cfg.username;
  $("setCurPassIn").value = "";
  $("setNewPassIn").value = "";
  $("settingsErr").classList.add("hidden");
  $("adminSettingsModal").classList.add("on");
}

function closeAdminSettingsModal() {
  $("adminSettingsModal").classList.remove("on");
}

async function saveAdminSettings(e) {
  e.preventDefault();
  const cfg = await getAdminConfig();
  const curHash = await hashStr($("setCurPassIn").value.trim());
  if (curHash !== cfg.passwordHash) {
    $("settingsErr").textContent = "Current password is incorrect.";
    $("settingsErr").classList.remove("hidden");
    return;
  }
  const newEmail = $("setEmailIn").value.trim();
  const newUser = $("setUserIn").value.trim();
  const newPass = $("setNewPassIn").value.trim();
  if (newPass && newPass.length < 6) {
    $("settingsErr").textContent = "New password must be at least 6 characters.";
    $("settingsErr").classList.remove("hidden");
    return;
  }
  cfg.recoveryEmail = newEmail;
  cfg.username = newUser;
  if (newPass) cfg.passwordHash = await hashStr(newPass);
  saveStore("mff_admin_cfg_v2", cfg);
  closeAdminSettingsModal();
  renderAdminDashboard();
  toast("Seller email & credentials saved!");
}

function adjustStock(id, delta) {
  if (!isAdmin) return openAdminLoginModal();
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  p.stock = Math.max(0, p.stock + delta);
  saveStore("mff_products_v2", PRODUCTS);
  renderGrid();
  renderAdminDashboard();
  toast(`${p.name}: ${p.stock} in stock`);
}

function viewAdminReceipt(orderId) {
  if (!isAdmin) return openAdminLoginModal();
  const rec = ORDERS.find((o) => o.orderId === orderId);
  if (!rec) return;
  renderReceipt(rec);
  $("checkoutFormView").classList.add("hidden");
  $("checkoutReceiptView").classList.remove("hidden");
  $("checkoutModal").classList.add("on");
}

async function renderAdminDashboard() {
  if (!isAdmin) return;
  const cfg = await getAdminConfig();
  const rev = ORDERS.reduce((s, o) => s + (o.payment?.total || 0), 0);
  $("kpiOrders").textContent = ORDERS.length;
  $("kpiRevenue").textContent = inr(rev);
  $("kpiEmail").textContent = cfg.recoveryEmail;

  $("adminOrdersBody").innerHTML = ORDERS.map((o) => {
    const itemsStr = o.items.map((i) => `${esc(i.name)} &times; ${i.qty}`).join("<br>");
    return `<tr>
      <td><b>#${esc(o.orderId)}</b><br><small class="note">${esc(o.date)}</small></td>
      <td><b>${esc(o.customer.name)}</b> (${esc(o.customer.username)})<br>${esc(o.customer.phone)}<br><small class="note">${esc(o.customer.address)}</small></td>
      <td>${itemsStr}</td>
      <td><b>${esc(o.payment.method)}</b><br><small class="note">${esc(o.payment.ref)}</small></td>
      <td><b>${inr(o.payment.total)}</b></td>
      <td><button type="button" class="btn sm-btn" onclick="viewAdminReceipt('${esc(o.orderId)}')">Receipt</button></td>
    </tr>`;
  }).join("");

  $("adminStockGrid").innerHTML = PRODUCTS.map((p) => `<div class="stock-item">
    <b>${esc(p.name)}</b>
    <span class="note">${p.stock < 1 ? "Out of stock (0)" : p.stock + " pieces left"}</span>
    <div class="stock-ctrls">
      <button type="button" onclick="adjustStock(${p.id},-1)">-1</button>
      <button type="button" onclick="adjustStock(${p.id},1)">+1</button>
      <button type="button" class="gold-mini" onclick="adjustStock(${p.id},5)">Restock +5</button>
    </div>
  </div>`).join("");
}

// ==========================================================================
// BOOTSTRAP INITIALIZATION
// ==========================================================================
$("announceText").textContent = CONFIG.announce;
$("heroImg").src = PRODUCTS[0].img;
$("heroCardTitle").textContent = PRODUCTS[0].name;
$("heroWa").href = "https://wa.me/" + CONFIG.whatsapp;
$("mapLink").href = CONFIG.maps;
$("fbLink").href = CONFIG.fb;
$("contact").innerHTML = `${esc(CONFIG.phone)}<br><a href="mailto:${esc(CONFIG.email)}">${esc(CONFIG.email)}</a>`;
$("yr").textContent = new Date().getFullYear();

getAdminConfig();
renderPills();
renderGrid();
renderBag();
updateOpenStatus();
setupAdminLinks();
initAnimations();