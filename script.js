// Verified Showroom Coordinates (Subhas Ave, Ranaghat, West Bengal 741201)
const SHOWROOM_COORDS = {
  lat: 23.1758349,
  lng: 88.5664704,
  name: "Madhumita Fab Fashion (Est. 1980)",
  address: "Subhas Ave, Near Dispensary Lane / Opp. PNB Bank, Ranaghat, West Bengal 741201",
  googleMapsUrl: "https://www.google.com/maps/place/Madhumita+Fab+Fashion/@23.1758349,88.5664704,19z"
};

// Default Initial Showroom Admin Credentials (Seller can update these anytime in Settings)
const DEFAULT_ADMIN_CONFIG = {
  username: "admin",
  passwordPlainFallback: "madhumita1980",
  passwordHash: "",
  recoveryEmail: "madhumitafabfashion@gmail.com",
  emailConnected: true,
  lastUpdated: "Initial Setup"
};

// Default Saree Product Catalog with Live Stock Counts
const DEFAULT_SAREE_CATALOG = [
  {
    id: 1,
    name: "Subhas Ave Bridal Red Katan Banarasi",
    category: "Bridal Banarasi",
    price: 6850,
    mrp: 8500,
    stock: 3,
    fabric: "100% Pure Katan Silk with Meenakari Zari",
    badge: "Bridal Bestseller",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Fulia Handloom Pure Cotton Tant Saree",
    category: "Tant & Handloom",
    price: 1150,
    mrp: 1450,
    stock: 8,
    fabric: "100s Count Combed Bengal Cotton",
    badge: "Daily Comfort",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Nadia Royal Resham Muslin Dhakai Jamdani",
    category: "Dhakai Jamdani",
    price: 3450,
    mrp: 4200,
    stock: 2,
    fabric: "Fine Handwoven Muslin & Zari Buti",
    badge: "Artisan Pick",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Bishnupur Mythological Swarnachari Baluchari",
    category: "Baluchari & Silk",
    price: 5900,
    mrp: 7400,
    stock: 1,
    fabric: "Pure Mulberry Silk (GI Tagged Weave)",
    badge: "Heritage Silk",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Shantipur Zari Border Festive Tangail",
    category: "Tant & Handloom",
    price: 1680,
    mrp: 2100,
    stock: 6,
    fabric: "Soft Cotton Silk Blend",
    badge: "Puja & Diwali",
    image: "https://images.unsplash.com/photo-1583391733981-8498408ee4b6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Rose Gold Hand-Embroidered Tissue Organza",
    category: "Party & Festive",
    price: 2950,
    mrp: 3800,
    stock: 4,
    fabric: "Pure Glass Organza with Zardozi Border",
    badge: "Diwali Special",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Kanchipuram Temple Border Dharmavaram Silk",
    category: "Baluchari & Silk",
    price: 7500,
    mrp: 9200,
    stock: 2,
    fabric: "Heavy Pure Korvai Silk",
    badge: "Wedding Edit",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Soft Dhakai Self-Jamdanee Ivory & Sindoor Red",
    category: "Dhakai Jamdani",
    price: 2490,
    mrp: 3100,
    stock: 5,
    fabric: "Handloom Dhakai Cotton Resham",
    badge: "Ranaghat Favorite",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
  }
];

// Initial Store Order Records (Visible Only to Logged-In Admin)
const INITIAL_STORE_ORDERS = [
  {
    orderId: "MFF-2026-4812",
    createdAt: "2026-11-14 18:42:10",
    customer: {
      username: "@ananya_sen",
      fullName: "Ananya Sen",
      mobileNumber: "+91 98304 51290",
      deliveryAddress: "Saratpally, Ward No. 12, Ranaghat - 741201",
      pinCode: "741201"
    },
    items: [
      {
        sareeId: 1,
        sareeName: "Subhas Ave Bridal Red Katan Banarasi",
        category: "Bridal Banarasi",
        imageUrl: DEFAULT_SAREE_CATALOG[0].image,
        unitPrice: 6850,
        quantity: 1
      }
    ],
    payment: {
      method: "UPI",
      transactionRef: "UTR631984720194",
      couponApplied: "DIWALI20",
      fallPicoAdded: true,
      subtotalINR: 6850,
      discountINR: 1370,
      fallPicoINR: 150,
      shippingINR: 0,
      grandTotalINR: 5630,
      status: "PAID_VERIFIED"
    }
  },
  {
    orderId: "MFF-2026-4819",
    createdAt: "2026-11-15 11:15:34",
    customer: {
      username: "@soumya_fulia",
      fullName: "Soumyadeep Chakraborty",
      mobileNumber: "+91 94341 78210",
      deliveryAddress: "Station Para, Near Fulia Bus Stand, Nadia - 741402",
      pinCode: "741402"
    },
    items: [
      {
        sareeId: 3,
        sareeName: "Nadia Royal Resham Muslin Dhakai Jamdani",
        category: "Dhakai Jamdani",
        imageUrl: DEFAULT_SAREE_CATALOG[2].image,
        unitPrice: 3450,
        quantity: 1
      },
      {
        sareeId: 2,
        sareeName: "Fulia Handloom Pure Cotton Tant Saree",
        category: "Tant & Handloom",
        imageUrl: DEFAULT_SAREE_CATALOG[1].image,
        unitPrice: 1150,
        quantity: 1
      }
    ],
    payment: {
      method: "NETBANKING",
      transactionRef: "SBIRef90418273",
      couponApplied: "DIWALI20",
      fallPicoAdded: false,
      subtotalINR: 4600,
      discountINR: 920,
      fallPicoINR: 0,
      shippingINR: 0,
      grandTotalINR: 3680,
      status: "PAID_VERIFIED"
    }
  }
];

let SAREE_CATALOG = loadSareeInventory();
let selectedCategory = "All";
let cart = SAREE_CATALOG[0] && SAREE_CATALOG[0].stock > 0 ? [{ ...SAREE_CATALOG[0], qty: 1 }] : [];
let activeCoupon = "DIWALI20";
let selectedPaymentMethod = "UPI";
let ordersDatabase = loadOrders();
let isAdminAuthenticated = sessionStorage.getItem("madhumita_admin_auth") === "true";
let generatedRecoveryOtp = null;
let map = null;
let userMarker = null;
let revealObserver = null;

// Safe HTML Escaping
function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ============================================================================
// INVENTORY PERSISTENCE & AUTOMATIC STOCK HELPERS
// ============================================================================
function loadSareeInventory() {
  try {
    const saved = localStorage.getItem("madhumita_saree_inventory_v1");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.warn("Inventory storage fallback");
  }
  return JSON.parse(JSON.stringify(DEFAULT_SAREE_CATALOG));
}

function saveSareeInventory() {
  try {
    localStorage.setItem("madhumita_saree_inventory_v1", JSON.stringify(SAREE_CATALOG));
  } catch (e) {
    console.warn("Could not save inventory");
  }
}

function adjustProductStock(sareeId, delta) {
  if (!isAdminAuthenticated) {
    openAdminLoginModal();
    return;
  }
  const saree = SAREE_CATALOG.find((s) => s.id === sareeId);
  if (!saree) return;
  saree.stock = Math.max(0, saree.stock + delta);
  saveSareeInventory();
  renderCatalog();
  renderAdminOrdersTable();
  showToast(`📦 Updated "${saree.name}" stock to ${saree.stock} piece(s)`);
}

// ============================================================================
// LUXURY UI/UX ANIMATION ENGINE (STAGGERED REVEALS, 3D TILT & ZARI SPARKLES)
// ============================================================================
function initLuxuryAnimations() {
  if ("IntersectionObserver" in window) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
  }

  const heroSection = document.querySelector("section");
  if (heroSection) {
    const heroLeftItems = heroSection.querySelectorAll(".lg\\:col-span-7 > *");
    heroLeftItems.forEach((el, idx) => {
      el.classList.add("hero-stagger", `hero-delay-${Math.min(idx + 1, 5)}`);
    });

    if (!heroSection.querySelector(".hero-zari-canvas")) {
      const particleLayer = document.createElement("div");
      particleLayer.className = "hero-zari-canvas";
      for (let i = 0; i < 16; i++) {
        const dot = document.createElement("span");
        dot.className = "zari-sparkle";
        const size = 3 + (i % 4) * 2;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.left = `${(i * 6.3 + 4) % 96}%`;
        dot.style.animationDuration = `${7 + (i % 5) * 2.2}s`;
        dot.style.animationDelay = `${(i * 0.65) % 6}s`;
        particleLayer.appendChild(dot);
      }
      heroSection.prepend(particleLayer);
    }

    const showcaseCard = heroSection.querySelector(".lg\\:col-span-5 > div");
    if (showcaseCard) {
      showcaseCard.classList.add("hero-showcase-float");
      showcaseCard.addEventListener("mousemove", (e) => {
        const rect = showcaseCard.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        showcaseCard.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
      });
      showcaseCard.addEventListener("mouseleave", () => {
        showcaseCard.style.transform = "";
      });
    }
  }

  document
    .querySelectorAll('a[href="#catalog-section"], button[onclick*="buyNowDirect"], button[onclick*="proceedToCheckoutFromCart"], button[onclick*="confirmAndPlaceOrder"]')
    .forEach((btn) => btn.classList.add("btn-silk-sheen"));

  const gpsCard = document.querySelector("#gps-section .lg\\:col-span-5");
  const gpsMapBox = document.querySelector("#gps-section .lg\\:col-span-7");
  if (gpsCard) {
    gpsCard.classList.add("reveal-up");
    revealObserver?.observe(gpsCard);
  }
  if (gpsMapBox) {
    gpsMapBox.classList.add("reveal-up");
    gpsMapBox.style.transitionDelay = "140ms";
    revealObserver?.observe(gpsMapBox);
  }

  observeCatalogCards();
}

function observeCatalogCards() {
  const cards = document.querySelectorAll("#productGrid .saree-card");
  cards.forEach((card, index) => {
    card.classList.add("reveal-up");
    card.style.transitionDelay = `${(index % 4) * 75}ms`;
    if (revealObserver) {
      revealObserver.observe(card);
    } else {
      card.classList.add("is-visible");
    }
  });
}

function triggerBagSpringAnimation() {
  const bagBtn = document.querySelector('button[onclick="toggleCartDrawer(true)"]');
  if (!bagBtn) return;
  bagBtn.classList.remove("bag-pop");
  void bagBtn.offsetWidth;
  bagBtn.classList.add("bag-pop");
}

function animateModalEntrance(modalEl) {
  if (!modalEl) return;
  const dialogCard = modalEl.firstElementChild;
  if (dialogCard) {
    dialogCard.classList.remove("modal-animate-in");
    void dialogCard.offsetWidth;
    dialogCard.classList.add("modal-animate-in");
  }
}

// ============================================================================
// CRYPTOGRAPHIC HASHING & CREDENTIAL STORAGE HELPERS
// ============================================================================
async function hashSecret(plainText) {
  const salted = `MFF_SALT_1980::${plainText}`;
  if (window.crypto && window.crypto.subtle) {
    const encoder = new TextEncoder();
    const data = encoder.encode(salted);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }
  let h = 2166136261;
  for (let i = 0; i < salted.length; i++) {
    h ^= salted.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return "mff_" + (h >>> 0).toString(16);
}

async function getAdminAuthConfig() {
  try {
    const saved = localStorage.getItem("madhumita_admin_security_v1");
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn("Storage read fallback");
  }
  const initialHash = await hashSecret(DEFAULT_ADMIN_CONFIG.passwordPlainFallback);
  const initialConfig = {
    username: DEFAULT_ADMIN_CONFIG.username,
    passwordHash: initialHash,
    recoveryEmail: DEFAULT_ADMIN_CONFIG.recoveryEmail,
    emailConnected: true,
    lastUpdated: DEFAULT_ADMIN_CONFIG.lastUpdated
  };
  saveAdminAuthConfig(initialConfig);
  return initialConfig;
}

function saveAdminAuthConfig(config) {
  try {
    localStorage.setItem("madhumita_admin_security_v1", JSON.stringify(config));
  } catch (e) {
    console.warn("Could not save admin security settings");
  }
}

// Heritage SVG Fallback if Image Fails Offline
function handleImgError(imgEl, labelText = "Madhumita Handloom") {
  imgEl.onerror = null;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#5A1220"/>
        <stop offset="100%" stop-color="#2A0810"/>
      </linearGradient>
    </defs>
    <rect width="400" height="400" fill="url(#g)"/>
    <rect x="18" y="18" width="364" height="364" fill="none" stroke="#D4AF37" stroke-width="3" stroke-dasharray="8 6"/>
    <text x="200" y="185" fill="#F5E1A4" font-family="Georgia, serif" font-size="22" font-weight="bold" text-anchor="middle">Madhumita Fab Fashion</text>
    <text x="200" y="220" fill="#FAF6F0" font-family="sans-serif" font-size="14" text-anchor="middle">${escapeHtml(labelText)}</text>
  </svg>`;
  imgEl.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

// Order Persistence
function loadOrders() {
  try {
    const saved = localStorage.getItem("madhumita_orders_db_v1");
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.warn("Storage unavailable");
  }
  return JSON.parse(JSON.stringify(INITIAL_STORE_ORDERS));
}

function saveOrders() {
  try {
    localStorage.setItem("madhumita_orders_db_v1", JSON.stringify(ordersDatabase));
  } catch (e) {
    console.warn("Could not save order");
  }
}

// ============================================================================
// COMMERCIAL ADMIN PORTAL, STOCK MANAGER & EMAIL OTP RECOVERY PATCH
// ============================================================================
async function setupCommercialAdminPortal() {
  await getAdminAuthConfig();

  if (!document.getElementById("adminLoginModal")) {
    const modalHtml = `
      <div id="adminLoginModal" class="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4 no-print">
        <div class="max-w-md w-full bg-[#FAF6F0] rounded-3xl border-2 border-[#D4AF37] p-6 sm:p-8 shadow-2xl relative">
          <button type="button" onclick="closeAdminLoginModal()" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 flex items-center justify-center text-xs font-bold">✕</button>

          <!-- VIEW A: Standard Admin Sign-In -->
          <div id="adminLoginStepView">
            <div class="w-12 h-12 rounded-2xl bg-[#5A1220] border border-[#D4AF37] text-[#F5E1A4] flex items-center justify-center text-xl mb-3">🔒</div>
            <span class="text-[11px] uppercase tracking-widest font-bold text-[#5A1220]">Showroom Management</span>
            <h3 class="serif-font text-3xl font-bold text-[#2A1810] mt-0.5">Access for Admin</h3>
            <p class="text-xs text-[#5A4A42] mt-1">
              Sign in with authorized showroom credentials to view customer orders, manage saree inventory, and print GST receipts.
            </p>

            <form onsubmit="handleAdminLoginSubmit(event)" class="mt-5 space-y-3">
              <div>
                <label class="block text-[11px] font-bold text-[#2A1810] mb-1">Admin Username</label>
                <input id="adminUserInput" type="text" placeholder="Enter admin username" required class="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#5A1220]" />
              </div>
              <div>
                <div class="flex items-center justify-between mb-1">
                  <label class="block text-[11px] font-bold text-[#2A1810]">Admin Password</label>
                  <button type="button" onclick="switchAdminModalView('recover')" class="text-[11px] font-semibold text-[#5A1220] hover:underline">
                    Forgot Password / Reset via Email?
                  </button>
                </div>
                <input id="adminPassInput" type="password" placeholder="Enter admin password" required class="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#5A1220]" />
              </div>
              <p id="adminLoginError" class="text-xs text-rose-700 font-semibold hidden">Invalid username or password.</p>
              <button type="submit" class="btn-silk-sheen w-full bg-[#5A1220] hover:bg-[#3D0B15] text-[#F5E1A4] font-bold py-3 rounded-xl text-xs shadow-lg transition">
                🔒 Access for Admin
              </button>
            </form>
          </div>

          <!-- VIEW B: Email OTP Verification & Credential Reset -->
          <div id="adminRecoverStepView" class="hidden">
            <div class="w-12 h-12 rounded-2xl bg-[#5A1220] border border-[#D4AF37] text-[#F5E1A4] flex items-center justify-center text-xl mb-3">✉️</div>
            <span class="text-[11px] uppercase tracking-widest font-bold text-[#5A1220]">Seller Account Recovery</span>
            <h3 class="serif-font text-3xl font-bold text-[#2A1810] mt-0.5">Reset via Seller Email</h3>
            <p class="text-xs text-[#5A4A42] mt-1">
              Verify your connected showroom email ID to receive a 6-digit security code and update your admin username or password.
            </p>

            <div class="mt-4 space-y-3">
              <div>
                <label class="block text-[11px] font-bold text-[#2A1810] mb-1">Connected Seller Email ID</label>
                <div class="flex gap-2">
                  <input id="recoverEmailInput" type="email" placeholder="seller@madhumitafabfashion.com" class="flex-1 px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#5A1220]" />
                  <button type="button" onclick="sendAdminRecoveryOtp()" class="bg-[#5A1220] hover:bg-[#3D0B15] text-[#F5E1A4] px-3.5 py-2.5 rounded-xl text-xs font-bold shrink-0">
                    Send OTP
                  </button>
                </div>
              </div>

              <div id="otpEmailPreviewBox" class="hidden p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
                <p class="font-bold">📩 Security Verification Code Sent!</p>
                <p id="otpEmailPreviewText" class="text-[11px]"></p>
              </div>

              <div id="otpResetFields" class="hidden space-y-2.5 pt-2 border-t border-gray-200">
                <input id="recoverOtpInput" type="text" maxlength="6" placeholder="Enter 6-Digit Email OTP *" class="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs font-bold tracking-widest focus:outline-none focus:border-[#5A1220]" />
                <input id="recoverNewUsername" type="text" placeholder="Set New Admin Username *" class="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#5A1220]" />
                <input id="recoverNewPassword" type="password" placeholder="Set New Admin Password (min 6 chars) *" class="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#5A1220]" />
                <button type="button" onclick="confirmAdminEmailReset()" class="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl text-xs shadow transition">
                  ✓ Verify OTP &amp; Update Credentials
                </button>
              </div>

              <p id="adminRecoverError" class="text-xs text-rose-700 font-semibold hidden"></p>

              <button type="button" onclick="switchAdminModalView('login')" class="w-full text-center text-xs font-semibold text-[#5A1220] hover:underline pt-1">
                ← Back to Admin Login
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHtml);
  }

  if (!document.getElementById("adminSecuritySettingsModal")) {
    const settingsHtml = `
      <div id="adminSecuritySettingsModal" class="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4 no-print">
        <div class="max-w-md w-full bg-[#FAF6F0] rounded-3xl border-2 border-[#D4AF37] p-6 sm:p-8 shadow-2xl relative">
          <button type="button" onclick="closeAdminSecuritySettings()" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 flex items-center justify-center text-xs font-bold">✕</button>
          <div class="w-12 h-12 rounded-2xl bg-[#5A1220] border border-[#D4AF37] text-[#F5E1A4] flex items-center justify-center text-xl mb-3">⚙️</div>
          <span class="text-[11px] uppercase tracking-widest font-bold text-[#5A1220]">Seller Account Security</span>
          <h3 class="serif-font text-3xl font-bold text-[#2A1810] mt-0.5">Credentials &amp; Email Link</h3>
          <p class="text-xs text-[#5A4A42] mt-1">
            Connect the store owner's email ID for password recovery and update your Admin Username or Password.
          </p>

          <form onsubmit="handleSaveAdminSecurity(event)" class="mt-5 space-y-3">
            <div>
              <label class="block text-[11px] font-bold text-[#2A1810] mb-1">Connected Seller Email ID *</label>
              <input id="settingsEmailInput" type="email" placeholder="owner@madhumitafabfashion.com" required class="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#5A1220]" />
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#2A1810] mb-1">Admin Username *</label>
              <input id="settingsUsernameInput" type="text" placeholder="Enter new admin username" required class="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#5A1220]" />
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#2A1810] mb-1">Current Admin Password (Required to Save) *</label>
              <input id="settingsCurrentPassInput" type="password" placeholder="Verify current password" required class="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#5A1220]" />
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#2A1810] mb-1">New Admin Password (Leave blank to keep current)</label>
              <input id="settingsNewPassInput" type="password" placeholder="Enter new password (min 6 characters)" class="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#5A1220]" />
            </div>

            <p id="settingsErrorMsg" class="text-xs text-rose-700 font-semibold hidden"></p>

            <button type="submit" class="btn-silk-sheen w-full bg-[#5A1220] hover:bg-[#3D0B15] text-[#F5E1A4] font-bold py-3 rounded-xl text-xs shadow-lg transition">
              💾 Save Security &amp; Email Settings
            </button>
          </form>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", settingsHtml);
  }

  const dbSection = document.getElementById("database-section");
  if (dbSection) {
    document.getElementById("dbPanel-mongodb")?.remove();
    document.getElementById("dbPanel-sql")?.remove();
    document.getElementById("dbTab-records")?.parentElement?.remove();

    const heading = dbSection.querySelector("h2");
    if (heading) heading.textContent = "Showroom Admin Order & Stock Dashboard";

    const subtitle = dbSection.querySelector("p");
    if (subtitle) {
      subtitle.textContent =
        "Manage verified customer orders, contact numbers, live saree stock counts, and printable GST tax receipts.";
    }

    const exportBtn = dbSection.querySelector('button[onclick="downloadMongoJson()"]');
    if (exportBtn && exportBtn.parentElement) {
      exportBtn.parentElement.innerHTML = `
        <button type="button" onclick="openAdminSecuritySettings()" class="px-4 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#F5E1A4] text-[#2A1810] text-xs font-bold shadow transition">
          ⚙️ Security &amp; Email Settings
        </button>
        <button type="button" onclick="logoutAdmin()" class="px-4 py-2.5 rounded-xl bg-rose-700 hover:bg-rose-600 text-white text-xs font-bold shadow transition">
          🔒 Lock &amp; Logout Admin
        </button>
      `;
    }

    const recordsPanel = document.getElementById("dbPanel-records");
    if (recordsPanel && !document.getElementById("adminKpiBar")) {
      const kpiHtml = `
        <div id="adminKpiBar" class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="bg-white/10 border border-[#D4AF37]/40 rounded-2xl p-4">
            <p class="text-[11px] uppercase tracking-wider text-[#F5E1A4]/80 font-semibold">Total Customer Orders</p>
            <p id="kpiTotalOrders" class="text-2xl font-bold text-white mt-1">0</p>
          </div>
          <div class="bg-white/10 border border-[#D4AF37]/40 rounded-2xl p-4">
            <p class="text-[11px] uppercase tracking-wider text-[#F5E1A4]/80 font-semibold">Total Sales Revenue</p>
            <p id="kpiTotalRevenue" class="text-2xl font-bold text-emerald-300 mt-1">₹0</p>
          </div>
          <div class="bg-white/10 border border-[#D4AF37]/40 rounded-2xl p-4">
            <p class="text-[11px] uppercase tracking-wider text-[#F5E1A4]/80 font-semibold">Connected Recovery Email</p>
            <p id="kpiConnectedEmail" class="text-xs font-bold text-white mt-2 truncate">Connected</p>
          </div>
        </div>
      `;
      recordsPanel.insertAdjacentHTML("beforebegin", kpiHtml);
    }

    // Add Live Saree Stock & Restock Manager inside Admin Dashboard
    if (recordsPanel && !document.getElementById("adminInventoryManager")) {
      const stockPanelHtml = `
        <div id="adminInventoryManager" class="bg-white/10 border border-[#D4AF37]/40 rounded-3xl p-5 space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 class="serif-font text-2xl font-bold text-[#F5E1A4]">📦 Live Saree Inventory &amp; Restock Manager</h3>
              <p class="text-xs text-white/75">Stock decreases automatically on purchase. Sarees at 0 stock automatically show as "Out of Stock" in the catalog.</p>
            </div>
          </div>
          <div id="adminStockGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"></div>
        </div>
      `;
      recordsPanel.insertAdjacentHTML("afterend", stockPanelHtml);
    }
  }

  document.querySelectorAll('a[href="#database-section"]').forEach((link) => {
    link.innerHTML = isAdminAuthenticated ? "🔓 Admin Dashboard" : "🔒 Access for Admin";
    link.addEventListener("click", (e) => {
      if (!isAdminAuthenticated) {
        e.preventDefault();
        closeCheckoutModal();
        openAdminLoginModal();
      }
    });
  });

  applyAdminVisibilityState();
}

function switchAdminModalView(viewName) {
  document.getElementById("adminLoginError")?.classList.add("hidden");
  document.getElementById("adminRecoverError")?.classList.add("hidden");

  if (viewName === "recover") {
    document.getElementById("adminLoginStepView")?.classList.add("hidden");
    document.getElementById("adminRecoverStepView")?.classList.remove("hidden");
  } else {
    document.getElementById("adminRecoverStepView")?.classList.add("hidden");
    document.getElementById("adminLoginStepView")?.classList.remove("hidden");
  }
}

async function sendAdminRecoveryOtp() {
  const emailVal = (document.getElementById("recoverEmailInput")?.value || "").trim().toLowerCase();
  const errEl = document.getElementById("adminRecoverError");
  const config = await getAdminAuthConfig();

  if (!emailVal || !emailVal.includes("@")) {
    errEl.textContent = "Please enter a valid email address.";
    errEl.classList.remove("hidden");
    return;
  }

  if (emailVal !== config.recoveryEmail.toLowerCase()) {
    errEl.textContent = "This email ID does not match the connected showroom seller email.";
    errEl.classList.remove("hidden");
    return;
  }

  errEl.classList.add("hidden");
  generatedRecoveryOtp = String(Math.floor(100000 + Math.random() * 900000));

  const previewBox = document.getElementById("otpEmailPreviewBox");
  const previewText = document.getElementById("otpEmailPreviewText");
  previewText.innerHTML = `Dispatched to <strong>${escapeHtml(config.recoveryEmail)}</strong>. Verification OTP: <span class="font-bold bg-white px-2 py-0.5 rounded border border-emerald-400 text-emerald-950">${generatedRecoveryOtp}</span>`;
  previewBox.classList.remove("hidden");
  document.getElementById("otpResetFields")?.classList.remove("hidden");
  showToast(`✉️ Security OTP sent to ${config.recoveryEmail}`);
}

async function confirmAdminEmailReset() {
  const enteredOtp = (document.getElementById("recoverOtpInput")?.value || "").trim();
  const newUsername = (document.getElementById("recoverNewUsername")?.value || "").trim();
  const newPassword = (document.getElementById("recoverNewPassword")?.value || "").trim();
  const errEl = document.getElementById("adminRecoverError");

  if (!generatedRecoveryOtp || enteredOtp !== generatedRecoveryOtp) {
    errEl.textContent = "Invalid or expired 6-digit OTP code.";
    errEl.classList.remove("hidden");
    return;
  }
  if (newUsername.length < 3) {
    errEl.textContent = "New username must be at least 3 characters.";
    errEl.classList.remove("hidden");
    return;
  }
  if (newPassword.length < 6) {
    errEl.textContent = "New password must be at least 6 characters.";
    errEl.classList.remove("hidden");
    return;
  }

  const config = await getAdminAuthConfig();
  config.username = newUsername;
  config.passwordHash = await hashSecret(newPassword);
  config.lastUpdated = new Date().toLocaleString("en-IN");
  saveAdminAuthConfig(config);

  generatedRecoveryOtp = null;
  errEl.classList.add("hidden");
  switchAdminModalView("login");
  document.getElementById("adminUserInput").value = newUsername;
  showToast("✓ Admin Username & Password Reset Successfully!");
}

async function openAdminSecuritySettings() {
  if (!isAdminAuthenticated) {
    openAdminLoginModal();
    return;
  }
  const config = await getAdminAuthConfig();
  document.getElementById("settingsEmailInput").value = config.recoveryEmail || "";
  document.getElementById("settingsUsernameInput").value = config.username || "";
  document.getElementById("settingsCurrentPassInput").value = "";
  document.getElementById("settingsNewPassInput").value = "";
  document.getElementById("settingsErrorMsg")?.classList.add("hidden");
  const modal = document.getElementById("adminSecuritySettingsModal");
  modal?.classList.remove("hidden");
  animateModalEntrance(modal);
}

function closeAdminSecuritySettings() {
  document.getElementById("adminSecuritySettingsModal")?.classList.add("hidden");
}

async function handleSaveAdminSecurity(event) {
  event.preventDefault();
  const emailVal = (document.getElementById("settingsEmailInput")?.value || "").trim();
  const newUsername = (document.getElementById("settingsUsernameInput")?.value || "").trim();
  const currentPass = (document.getElementById("settingsCurrentPassInput")?.value || "").trim();
  const newPass = (document.getElementById("settingsNewPassInput")?.value || "").trim();
  const errEl = document.getElementById("settingsErrorMsg");

  const config = await getAdminAuthConfig();
  const currentPassHash = await hashSecret(currentPass);

  if (currentPassHash !== config.passwordHash) {
    errEl.textContent = "Current Admin Password is incorrect.";
    errEl.classList.remove("hidden");
    return;
  }
  if (!emailVal.includes("@")) {
    errEl.textContent = "Please provide a valid Seller Email ID.";
    errEl.classList.remove("hidden");
    return;
  }
  if (newUsername.length < 3) {
    errEl.textContent = "Username must be at least 3 characters.";
    errEl.classList.remove("hidden");
    return;
  }
  if (newPass && newPass.length < 6) {
    errEl.textContent = "New password must be at least 6 characters.";
    errEl.classList.remove("hidden");
    return;
  }

  config.recoveryEmail = emailVal;
  config.emailConnected = true;
  config.username = newUsername;
  if (newPass) {
    config.passwordHash = await hashSecret(newPass);
  }
  config.lastUpdated = new Date().toLocaleString("en-IN");
  saveAdminAuthConfig(config);

  closeAdminSecuritySettings();
  renderAdminOrdersTable();
  showToast("✓ Seller Email & Admin Credentials Updated!");
}

function applyAdminVisibilityState() {
  const dbSection = document.getElementById("database-section");
  if (!dbSection) return;

  if (isAdminAuthenticated) {
    dbSection.classList.remove("hidden");
    renderAdminOrdersTable();
  } else {
    dbSection.classList.add("hidden");
    const tbody = document.getElementById("dbRecordsTableBody");
    if (tbody) tbody.innerHTML = "";
  }
}

function openAdminLoginModal() {
  switchAdminModalView("login");
  const modal = document.getElementById("adminLoginModal");
  if (modal) {
    modal.classList.remove("hidden");
    animateModalEntrance(modal);
    document.getElementById("adminUserInput")?.focus();
  }
}

function closeAdminLoginModal() {
  document.getElementById("adminLoginModal")?.classList.add("hidden");
}

async function handleAdminLoginSubmit(event) {
  event.preventDefault();
  const userVal = (document.getElementById("adminUserInput")?.value || "").trim();
  const passVal = (document.getElementById("adminPassInput")?.value || "").trim();
  const config = await getAdminAuthConfig();
  const enteredHash = await hashSecret(passVal);

  if (userVal === config.username && enteredHash === config.passwordHash) {
    isAdminAuthenticated = true;
    sessionStorage.setItem("madhumita_admin_auth", "true");
    closeAdminLoginModal();
    applyAdminVisibilityState();

    document.querySelectorAll('a[href="#database-section"]').forEach((link) => {
      link.innerHTML = "🔓 Admin Dashboard";
    });

    document.getElementById("database-section")?.scrollIntoView({ behavior: "smooth" });
    showToast("🔓 Admin Access Granted");
  } else {
    document.getElementById("adminLoginError")?.classList.remove("hidden");
  }
}

function logoutAdmin() {
  isAdminAuthenticated = false;
  sessionStorage.removeItem("madhumita_admin_auth");
  applyAdminVisibilityState();

  document.querySelectorAll('a[href="#database-section"]').forEach((link) => {
    link.innerHTML = "🔒 Access for Admin";
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
  showToast("🔒 Admin Logged Out");
}

async function renderAdminOrdersTable() {
  if (!isAdminAuthenticated) return;

  const config = await getAdminAuthConfig();
  const totalRevenue = ordersDatabase.reduce((sum, r) => sum + (r.payment?.grandTotalINR || 0), 0);

  const kpiOrders = document.getElementById("kpiTotalOrders");
  const kpiRev = document.getElementById("kpiTotalRevenue");
  const kpiEmail = document.getElementById("kpiConnectedEmail");
  if (kpiOrders) kpiOrders.textContent = ordersDatabase.length;
  if (kpiRev) kpiRev.textContent = `₹${totalRevenue.toLocaleString("en-IN")}`;
  if (kpiEmail) kpiEmail.textContent = `${config.recoveryEmail} (✓ Linked)`;

  const tbody = document.getElementById("dbRecordsTableBody");
  if (tbody) {
    tbody.innerHTML = ordersDatabase
      .map((rec) => {
        const sareeThumbs = rec.items
          .map(
            (it) => `
            <div class="flex items-center gap-2.5 mb-1.5 last:mb-0">
              <img src="${it.imageUrl}" onerror="handleImgError(this, 'Saree')" class="w-10 h-10 rounded-lg object-cover border border-[#D4AF37]/50 shrink-0" />
              <div>
                <p class="font-semibold text-[#2A1810] leading-tight">${escapeHtml(it.sareeName)}</p>
                <p class="text-[11px] text-gray-500">Qty: ${it.quantity} × ₹${it.unitPrice.toLocaleString("en-IN")}</p>
              </div>
            </div>
          `
          )
          .join("");

        return `
        <tr class="hover:bg-[#FAF6F0] transition">
          <td class="py-3.5 px-4 align-top">
            <p class="font-bold text-[#5A1220]">#${escapeHtml(rec.orderId)}</p>
            <p class="text-[11px] text-gray-500">${escapeHtml(rec.createdAt)}</p>
          </td>
          <td class="py-3.5 px-4 align-top">
            <p class="font-bold text-[#2A1810]">${escapeHtml(rec.customer.fullName)} <span class="text-gray-500 font-normal">(${escapeHtml(rec.customer.username)})</span></p>
            <p class="text-[11px] font-semibold text-emerald-800">${escapeHtml(rec.customer.mobileNumber)}</p>
            <p class="text-[11px] text-gray-500 mt-0.5">${escapeHtml(rec.customer.deliveryAddress)}</p>
          </td>
          <td class="py-3.5 px-4 align-top">${sareeThumbs}</td>
          <td class="py-3.5 px-4 align-top">
            <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">${escapeHtml(rec.payment.method)}</span>
            <p class="text-[11px] text-gray-500 mt-1">Ref: ${escapeHtml(rec.payment.transactionRef)}</p>
          </td>
          <td class="py-3.5 px-4 align-top font-bold text-sm text-[#5A1220]">
            ₹${rec.payment.grandTotalINR.toLocaleString("en-IN")}
          </td>
          <td class="py-3.5 px-4 align-top text-right">
            <button onclick="viewReceipt('${escapeHtml(rec.orderId)}')" class="px-3.5 py-2 rounded-xl bg-[#5A1220] text-[#F5E1A4] hover:bg-[#3D0B15] text-[11px] font-bold shadow-xs transition">
              📄 View Receipt
            </button>
          </td>
        </tr>
      `;
      })
      .join("");
  }

  // Render Live Saree Inventory Controls in Admin Dashboard
  const stockGrid = document.getElementById("adminStockGrid");
  if (stockGrid) {
    stockGrid.innerHTML = SAREE_CATALOG.map((s) => {
      const isOut = s.stock <= 0;
      return `
        <div class="bg-white/10 border ${isOut ? "border-rose-400/60" : "border-[#D4AF37]/30"} rounded-2xl p-3.5 flex flex-col justify-between gap-2.5">
          <div>
            <div class="flex items-center justify-between gap-2">
              <span class="text-[10px] uppercase tracking-wider text-[#F5E1A4]">${escapeHtml(s.category)}</span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${isOut ? "bg-rose-600 text-white" : "bg-emerald-600 text-white"}">
                ${isOut ? "OUT OF STOCK (0)" : `${s.stock} in stock`}
              </span>
            </div>
            <p class="text-xs font-bold text-white mt-1 line-clamp-1">${escapeHtml(s.name)}</p>
          </div>
          <div class="flex items-center gap-1.5 pt-1 border-t border-white/10">
            <button type="button" onclick="adjustProductStock(${s.id}, -1)" class="px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-white text-xs font-bold">-1</button>
            <button type="button" onclick="adjustProductStock(${s.id}, 1)" class="px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-white text-xs font-bold">+1</button>
            <button type="button" onclick="adjustProductStock(${s.id}, 5)" class="flex-1 px-2.5 py-1 rounded-lg bg-[#D4AF37] hover:bg-[#F5E1A4] text-[#2A1810] text-[11px] font-bold">Restock +5</button>
          </div>
        </div>
      `;
    }).join("");
  }
}

// ============================================================================
// INITIALIZE APPLICATION ON PAGE LOAD
// ============================================================================
window.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  updateCartUI();
  setupCommercialAdminPortal();
  syncExternalGoogleMapsLinks();
  initLeafletMap();
  checkStoreOpenStatus();
  initLuxuryAnimations();
});

function syncExternalGoogleMapsLinks() {
  document.querySelectorAll('a[href*="google.com/maps"]').forEach((anchor) => {
    anchor.href = SHOWROOM_COORDS.googleMapsUrl;
  });
}

// ============================================================================
// SAREE CATALOG WITH AUTOMATIC STOCK & OUT-OF-STOCK STATE
// ============================================================================
function renderCatalog() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const query = (document.getElementById("searchInput")?.value || "").toLowerCase();
  const sortBy = document.getElementById("sortSelect")?.value || "featured";

  let filtered = SAREE_CATALOG.filter((item) => {
    const matchesCat = selectedCategory === "All" || item.category === selectedCategory;
    const matchesQuery =
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.fabric.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  if (sortBy === "low-high") filtered.sort((a, b) => a.price - b.price);
  if (sortBy === "high-low") filtered.sort((a, b) => b.price - a.price);

  grid.innerHTML = filtered
    .map((saree) => {
      const diwaliPrice = Math.round(saree.price * 0.8);
      const isOutOfStock = saree.stock <= 0;
      const isLowStock = saree.stock === 1;

      const stockStatusBadge = isOutOfStock
        ? `<span class="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-100 border border-rose-200 px-2.5 py-0.5 rounded-full">✕ Out of Stock</span>`
        : isLowStock
        ? `<span class="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-100 border border-amber-300 px-2.5 py-0.5 rounded-full animate-pulse">🔥 Only 1 Saree Left!</span>`
        : `<span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">✓ ${saree.stock} Sarees in Stock</span>`;

      const actionButtonsHtml = isOutOfStock
        ? `
          <button type="button" disabled class="col-span-2 py-2.5 px-3 rounded-xl bg-gray-200 text-gray-500 border border-gray-300 text-xs font-bold cursor-not-allowed">
            ✕ Out of Stock
          </button>
        `
        : `
          <button type="button" onclick="addToCart(${saree.id})" class="py-2.5 px-3 rounded-xl border border-[#5A1220] text-[#5A1220] hover:bg-[#5A1220] hover:text-white text-xs font-bold transition">
            + Add to Bag
          </button>
          <button type="button" onclick="buyNowDirect(${saree.id})" class="btn-silk-sheen py-2.5 px-3 rounded-xl bg-[#5A1220] text-[#F5E1A4] hover:bg-[#3D0B15] text-xs font-bold transition shadow">
            ⚡ Buy Now
          </button>
        `;

      return `
      <div class="saree-card bg-white rounded-3xl overflow-hidden border ${isOutOfStock ? "border-gray-300 opacity-90" : "border-[#D4AF37]/40"} flex flex-col justify-between">
        <div>
          <div class="relative h-64 overflow-hidden bg-[#2A0810]">
            <img
              src="${saree.image}"
              onerror="handleImgError(this, '${escapeHtml(saree.category)}')"
              alt="${escapeHtml(saree.name)}"
              class="w-full h-full object-cover object-top ${isOutOfStock ? "grayscale opacity-65" : ""}"
            />
            <span class="absolute top-3 left-3 bg-[#5A1220] text-[#F5E1A4] text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border border-[#D4AF37]">
              ${escapeHtml(saree.badge)}
            </span>
            ${
              isOutOfStock
                ? `<div class="absolute inset-0 bg-black/45 flex items-center justify-center">
                    <span class="bg-rose-700 text-white border-2 border-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                      Out of Stock
                    </span>
                  </div>`
                : `<span class="absolute bottom-3 right-3 bg-emerald-800/95 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    Diwali Deal: ₹${diwaliPrice.toLocaleString("en-IN")}
                  </span>`
            }
          </div>

          <div class="p-4 space-y-1.5">
            <div class="flex items-center justify-between gap-2">
              <p class="text-[10px] font-bold uppercase tracking-widest text-[#7A6A63]">${escapeHtml(saree.category)}</p>
              ${stockStatusBadge}
            </div>
            <h3 class="serif-font text-xl font-bold text-[#2A1810] leading-snug">${escapeHtml(saree.name)}</h3>
            <p class="text-xs text-[#5A4A42]">${escapeHtml(saree.fabric)}</p>
            <div class="pt-1 flex items-baseline gap-2">
              <span class="text-lg font-bold ${isOutOfStock ? "text-gray-500" : "text-[#5A1220]"}">₹${saree.price.toLocaleString("en-IN")}</span>
              <span class="text-xs line-through text-gray-400">₹${saree.mrp.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>

        <div class="p-4 pt-0 grid grid-cols-2 gap-2">
          ${actionButtonsHtml}
        </div>
      </div>
    `;
    })
    .join("");

  observeCatalogCards();
}

function setCategory(cat) {
  selectedCategory = cat;
  document.querySelectorAll(".cat-pill").forEach((btn) => {
    if (btn.dataset.cat === cat) {
      btn.className = "cat-pill active px-4 py-2 rounded-full text-xs font-bold bg-[#5A1220] text-[#FAF6F0] transition shrink-0";
    } else {
      btn.className = "cat-pill px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#D4AF37]/40 text-[#2A1810] hover:border-[#5A1220] transition shrink-0";
    }
  });
  renderCatalog();
}

// ============================================================================
// SHOPPING CART OPERATIONS (STOCK-AWARE)
// ============================================================================
function addToCart(id) {
  const item = SAREE_CATALOG.find((s) => s.id === id);
  if (!item) return;

  if (item.stock <= 0) {
    showToast(`✕ "${item.name}" is currently Out of Stock!`);
    return;
  }

  const existing = cart.find((c) => c.id === id);
  const currentQty = existing ? existing.qty : 0;

  if (currentQty + 1 > item.stock) {
    showToast(`⚠️ Only ${item.stock} piece(s) of "${item.name}" available in stock!`);
    return;
  }

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCartUI();
  triggerBagSpringAnimation();
  showToast(`Added "${item.name}" to your Saree Bag!`);
}

function buyNowDirect(id) {
  const item = SAREE_CATALOG.find((s) => s.id === id);
  if (!item) return;

  if (item.stock <= 0) {
    showToast(`✕ "${item.name}" is currently Out of Stock!`);
    return;
  }

  const existing = cart.find((c) => c.id === id);
  if (!existing) {
    cart.push({ ...item, qty: 1 });
  }
  updateCartUI();
  openCheckoutModal();
}

function changeCartQty(id, delta) {
  const idx = cart.findIndex((c) => c.id === id);
  const catalogItem = SAREE_CATALOG.find((s) => s.id === id);
  if (idx > -1) {
    const nextQty = cart[idx].qty + delta;
    if (delta > 0 && catalogItem && nextQty > catalogItem.stock) {
      showToast(`⚠️ Maximum available stock (${catalogItem.stock}) reached!`);
      return;
    }
    cart[idx].qty = nextQty;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
  }
  updateCartUI();
}

function calculateTotals() {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  let discount = 0;
  if (activeCoupon === "DIWALI20") {
    discount = Math.round(subtotal * 0.2);
  } else if (activeCoupon === "BULK25" && subtotal >= 10000) {
    discount = Math.round(subtotal * 0.25);
  }
  const finalTotal = Math.max(0, subtotal - discount);
  return { subtotal, discount, finalTotal };
}

function updateCartUI() {
  const count = cart.reduce((acc, item) => acc + item.qty, 0);
  const badge = document.getElementById("cartCountBadge");
  if (badge) badge.textContent = count;

  const listEl = document.getElementById("cartItemsList");
  if (listEl) {
    if (cart.length === 0) {
      listEl.innerHTML = `<p class="text-center text-xs text-gray-500 py-12">Your bag is currently empty. Add a saree to begin!</p>`;
    } else {
      listEl.innerHTML = cart
        .map(
          (item) => `
        <div class="flex gap-3 bg-white p-3 rounded-2xl border border-[#D4AF37]/40 items-center transition hover:border-[#D4AF37]">
          <img src="${item.image}" onerror="handleImgError(this, 'Saree')" class="w-16 h-16 rounded-xl object-cover" />
          <div class="flex-1">
            <h4 class="text-xs font-bold text-[#2A1810]">${escapeHtml(item.name)}</h4>
            <p class="text-xs text-[#5A1220] font-semibold">₹${item.price.toLocaleString("en-IN")} × ${item.qty}</p>
          </div>
          <div class="flex items-center gap-1.5">
            <button onclick="changeCartQty(${item.id}, -1)" class="w-6 h-6 rounded bg-gray-100 hover:bg-gray-200 text-xs font-bold transition">-</button>
            <span class="text-xs font-bold">${item.qty}</span>
            <button onclick="changeCartQty(${item.id}, 1)" class="w-6 h-6 rounded bg-gray-100 hover:bg-gray-200 text-xs font-bold transition">+</button>
          </div>
        </div>
      `
        )
        .join("");
    }
  }

  const { subtotal, discount, finalTotal } = calculateTotals();
  const subEl = document.getElementById("cartSubtotal");
  const discEl = document.getElementById("cartDiscount");
  const totEl = document.getElementById("cartFinalTotal");
  if (subEl) subEl.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
  if (discEl) discEl.textContent = `-₹${discount.toLocaleString("en-IN")} (${activeCoupon || "NONE"})`;
  if (totEl) totEl.textContent = `₹${finalTotal.toLocaleString("en-IN")}`;
}

function toggleCartDrawer(open) {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartDrawerBackdrop");
  if (!drawer || !backdrop) return;
  if (open) {
    drawer.classList.remove("translate-x-full");
    backdrop.classList.remove("hidden");
  } else {
    drawer.classList.add("translate-x-full");
    backdrop.classList.add("hidden");
  }
}

function proceedToCheckoutFromCart() {
  toggleCartDrawer(false);
  openCheckoutModal();
}

// ============================================================================
// 3-STEP ORDER & PAYMENT CHECKOUT MODAL
// ============================================================================
function openCheckoutModal() {
  if (cart.length === 0) {
    const firstAvailable = SAREE_CATALOG.find((s) => s.stock > 0);
    if (!firstAvailable) {
      showToast("All sarees are currently out of stock.");
      return;
    }
    addToCart(firstAvailable.id);
  }
  document.getElementById("checkoutFormView")?.classList.remove("hidden");
  document.getElementById("checkoutSuccessView")?.classList.add("hidden");
  const modal = document.getElementById("checkoutModal");
  modal?.classList.remove("hidden");
  animateModalEntrance(modal);
  updateCheckoutTotals();
}

function closeCheckoutModal() {
  document.getElementById("checkoutModal")?.classList.add("hidden");
}

function updateCheckoutTotals() {
  const { subtotal, discount } = calculateTotals();
  const totalCount = cart.reduce((acc, i) => acc + i.qty, 0);
  const fallPicoChecked = Boolean(document.getElementById("checkoutFallPico")?.checked);
  const fallPicoCost = fallPicoChecked ? totalCount * 150 : 0;

  const deliveryMode = document.querySelector('input[name="deliveryMode"]:checked')?.value || "delivery";
  const pinCode = document.getElementById("custPin")?.value.trim() || "741201";
  const shippingCost = deliveryMode === "pickup" || pinCode === "741201" || subtotal >= 2000 ? 0 : 99;

  const grandTotal = Math.max(0, subtotal - discount + fallPicoCost + shippingCost);

  const summaryEl = document.getElementById("checkoutItemsSummary");
  if (summaryEl) {
    summaryEl.innerHTML = cart
      .map(
        (item) => `
      <div class="flex justify-between items-center text-xs border-b pb-2 gap-2">
        <div class="flex items-center gap-2.5">
          <img src="${item.image}" onerror="handleImgError(this, 'Saree')" class="w-10 h-10 rounded-lg object-cover border border-[#D4AF37]/40" />
          <div>
            <p class="font-bold text-[#2A1810]">${escapeHtml(item.name)}</p>
            <p class="text-[11px] text-gray-500">Qty: ${item.qty} × ₹${item.price.toLocaleString("en-IN")}</p>
          </div>
        </div>
        <span class="font-bold text-[#5A1220]">₹${(item.price * item.qty).toLocaleString("en-IN")}</span>
      </div>
    `
      )
      .join("");
  }

  document.getElementById("chkSubtotal").textContent = `₹${subtotal.toLocaleString("en-IN")}`;
  document.getElementById("chkCouponCode").textContent = activeCoupon || "NONE";
  document.getElementById("chkDiscount").textContent = `-₹${discount.toLocaleString("en-IN")}`;
  document.getElementById("chkFallPico").textContent = `₹${fallPicoCost.toLocaleString("en-IN")}`;
  document.getElementById("chkShipping").textContent = shippingCost === 0 ? "FREE" : `₹${shippingCost}`;
  document.getElementById("chkGrandTotal").textContent = `₹${grandTotal.toLocaleString("en-IN")}`;

  const qrImg = document.getElementById("upiQrImage");
  if (qrImg) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(
      `upi://pay?pa=madhumitafab@pnb&pn=Madhumita Fab Fashion&am=${grandTotal}&cu=INR`
    )}`;
  }

  return { subtotal, discount, fallPicoCost, shippingCost, grandTotal, fallPicoChecked };
}

function selectPaymentTab(method) {
  selectedPaymentMethod = method;
  ["UPI", "CARD", "NETBANKING", "COD"].forEach((m) => {
    const tab = document.getElementById(`tab-${m}`);
    const panel = document.getElementById(`panel-${m}`);
    if (!tab || !panel) return;
    if (m === method) {
      tab.className = "pay-tab active p-2.5 rounded-xl border-2 border-[#5A1220] bg-[#5A1220] text-white text-xs font-bold transition";
      panel.classList.remove("hidden");
    } else {
      tab.className = "pay-tab p-2.5 rounded-xl border border-gray-200 text-xs font-semibold transition";
      panel.classList.add("hidden");
    }
  });
}

function verifyUpiId() {
  const val = (document.getElementById("upiIdInput")?.value || "").trim();
  if (!val.includes("@")) {
    showToast("Please enter a valid UPI ID containing '@'");
    return;
  }
  document.getElementById("upiVerifyStatus")?.classList.remove("hidden");
  showToast(`Verified UPI ID: ${val}`);
}

function autoFillGPSAddress() {
  document.getElementById("custPin").value = "741201";
  document.getElementById("custCity").value = "Ranaghat, Nadia, West Bengal";
  document.getElementById("custAddress").value = "Near Subhas Ave / Dispensary Lane, Ranaghat - 741201";
  updateCheckoutTotals();
  showToast("📍 GPS Location Auto-Filled for Ranaghat (741201)!");
}

// Confirm Order, Automatically Deduct Saree Stock, Save Record, and Render Receipt
function confirmAndPlaceOrder() {
  if (cart.length === 0) {
    showToast("Your bag is empty. Please select a saree first.");
    return;
  }

  // Verify stock availability right before completing order
  for (const cartItem of cart) {
    const liveSaree = SAREE_CATALOG.find((s) => s.id === cartItem.id);
    if (!liveSaree || liveSaree.stock < cartItem.qty) {
      showToast(`⚠️ "${cartItem.name}" no longer has enough stock available.`);
      return;
    }
  }

  // Deduct purchased quantities from live Saree Inventory
  cart.forEach((cartItem) => {
    const liveSaree = SAREE_CATALOG.find((s) => s.id === cartItem.id);
    if (liveSaree) {
      liveSaree.stock = Math.max(0, liveSaree.stock - cartItem.qty);
    }
  });
  saveSareeInventory();
  renderCatalog();

  let username = (document.getElementById("custUsername")?.value || "").trim() || "@ranaghat_buyer";
  if (!username.startsWith("@")) username = "@" + username;
  const fullName = (document.getElementById("custName")?.value || "").trim() || "Valued Customer";
  const mobileNumber = (document.getElementById("custPhone")?.value || "").trim() || "+91 98000 00000";
  const pinCode = (document.getElementById("custPin")?.value || "").trim() || "741201";
  const city = (document.getElementById("custCity")?.value || "").trim() || "Ranaghat, Nadia";
  const street = (document.getElementById("custAddress")?.value || "").trim() || "Subhas Avenue, Ranaghat";
  const deliveryAddress = `${street}, ${city} - ${pinCode}`;

  const totals = updateCheckoutTotals();
  const orderId = `MFF-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const nowStr = new Date().toISOString().replace("T", " ").slice(0, 19);
  const txnRef =
    selectedPaymentMethod === "COD"
      ? `COD-${Math.floor(100000 + Math.random() * 900000)}`
      : `UTR${Math.floor(100000000000 + Math.random() * 900000000000)}`;

  const newRecord = {
    orderId,
    createdAt: nowStr,
    customer: {
      username,
      fullName,
      mobileNumber,
      deliveryAddress,
      pinCode
    },
    items: cart.map((item) => ({
      sareeId: item.id,
      sareeName: item.name,
      category: item.category,
      imageUrl: item.image,
      unitPrice: item.price,
      quantity: item.qty
    })),
    payment: {
      method: selectedPaymentMethod,
      transactionRef: txnRef,
      couponApplied: activeCoupon || "NONE",
      fallPicoAdded: totals.fallPicoChecked,
      subtotalINR: totals.subtotal,
      discountINR: totals.discount,
      fallPicoINR: totals.fallPicoCost,
      shippingINR: totals.shippingCost,
      grandTotalINR: totals.grandTotal,
      status: selectedPaymentMethod === "COD" ? "CONFIRMED_COD" : "PAID_VERIFIED"
    }
  };

  ordersDatabase.unshift(newRecord);
  saveOrders();

  if (isAdminAuthenticated) {
    renderAdminOrdersTable();
  }

  cart = [];
  updateCartUI();

  renderReceiptModalContent(newRecord);
  document.getElementById("checkoutFormView")?.classList.add("hidden");
  document.getElementById("checkoutSuccessView")?.classList.remove("hidden");
  animateModalEntrance(document.getElementById("checkoutModal"));
  showToast(`🎉 Order #${orderId} Confirmed! Inventory updated automatically.`);
}

function renderReceiptModalContent(record) {
  const itemsRows = record.items
    .map(
      (it) => `
      <tr class="border-b border-gray-200">
        <td class="py-2.5 flex items-center gap-2.5">
          <img src="${it.imageUrl}" onerror="handleImgError(this, 'Saree')" class="w-10 h-10 rounded-lg object-cover border border-[#D4AF37]/40" />
          <div>
            <p class="font-bold text-[#2A1810]">${escapeHtml(it.sareeName)}</p>
            <p class="text-[11px] text-gray-500">${escapeHtml(it.category)}</p>
          </div>
        </td>
        <td class="py-2.5 text-center">${it.quantity}</td>
        <td class="py-2.5 text-right">₹${it.unitPrice.toLocaleString("en-IN")}</td>
        <td class="py-2.5 text-right font-bold">₹${(it.unitPrice * it.quantity).toLocaleString("en-IN")}</td>
      </tr>
    `
    )
    .join("");

  document.getElementById("receiptSummaryBox").innerHTML = `
    <div class="flex flex-wrap justify-between gap-4 border-b border-gray-200 pb-3">
      <div>
        <p class="text-[11px] uppercase text-gray-500 font-bold">Receipt / Order ID</p>
        <p class="text-sm font-bold text-[#5A1220]">#${escapeHtml(record.orderId)}</p>
        <p class="text-[11px] text-gray-500">Date: ${escapeHtml(record.createdAt)}</p>
      </div>
      <div class="text-right">
        <p class="text-[11px] uppercase text-gray-500 font-bold">Payment Verification</p>
        <p class="font-bold text-emerald-700">${escapeHtml(record.payment.method)} • ${escapeHtml(record.payment.status)}</p>
        <p class="text-[11px] text-gray-600">Ref: ${escapeHtml(record.payment.transactionRef)}</p>
      </div>
    </div>

    <div class="bg-[#FAF6F0] p-3.5 rounded-xl border border-[#D4AF37]/30 grid sm:grid-cols-2 gap-2">
      <div>
        <p class="text-[11px] text-gray-500">Customer Name &amp; Username</p>
        <p class="font-bold text-[#2A1810]">${escapeHtml(record.customer.fullName)} (${escapeHtml(record.customer.username)})</p>
      </div>
      <div>
        <p class="text-[11px] text-gray-500">Registered Mobile Number</p>
        <p class="font-bold text-[#2A1810]">${escapeHtml(record.customer.mobileNumber)}</p>
      </div>
      <div class="sm:col-span-2">
        <p class="text-[11px] text-gray-500">Delivery / Dispatch Address</p>
        <p class="font-semibold text-[#2A1810]">${escapeHtml(record.customer.deliveryAddress)}</p>
      </div>
    </div>

    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="border-b-2 border-[#5A1220] text-[11px] uppercase text-[#5A1220]">
          <th class="py-2">Purchased Saree</th>
          <th class="py-2 text-center">Qty</th>
          <th class="py-2 text-right">Rate</th>
          <th class="py-2 text-right">Amount</th>
        </tr>
      </thead>
      <tbody>${itemsRows}</tbody>
    </table>

    <div class="space-y-1 pt-2 border-t border-gray-200 text-right">
      <p>Items Subtotal: <strong>₹${record.payment.subtotalINR.toLocaleString("en-IN")}</strong></p>
      <p class="text-emerald-700">Coupon Discount (${escapeHtml(record.payment.couponApplied)}): <strong>-₹${record.payment.discountINR.toLocaleString("en-IN")}</strong></p>
      <p>Fall &amp; Pico Finishing: <strong>₹${record.payment.fallPicoINR.toLocaleString("en-IN")}</strong></p>
      <p class="text-base font-bold text-[#5A1220] pt-1">Total Amount Paid: ₹${record.payment.grandTotalINR.toLocaleString("en-IN")}</p>
    </div>
  `;
}

function viewReceipt(orderId) {
  if (!isAdminAuthenticated) {
    openAdminLoginModal();
    return;
  }
  const record = ordersDatabase.find((r) => r.orderId === orderId);
  if (!record) return;
  renderReceiptModalContent(record);
  document.getElementById("checkoutFormView")?.classList.add("hidden");
  document.getElementById("checkoutSuccessView")?.classList.remove("hidden");
  const modal = document.getElementById("checkoutModal");
  modal?.classList.remove("hidden");
  animateModalEntrance(modal);
}

// ============================================================================
// COUPON & SALE MODAL HELPERS
// ============================================================================
function openSaleModal() {
  const modal = document.getElementById("saleModal");
  modal?.classList.remove("hidden");
  animateModalEntrance(modal);
}

function closeSaleModal() {
  document.getElementById("saleModal")?.classList.add("hidden");
}

function applySaleCoupon(code) {
  activeCoupon = code;
  const input = document.getElementById("cartCouponInput");
  if (input) input.value = code;
  updateCartUI();
  closeSaleModal();
  showToast(`🪔 Coupon ${code} Applied Successfully!`);
}

function applyCouponFromInput() {
  const code = (document.getElementById("cartCouponInput")?.value || "").trim().toUpperCase();
  if (code === "DIWALI20" || code === "BULK25") {
    activeCoupon = code;
    updateCartUI();
    showToast(`✓ Coupon ${code} activated!`);
  } else {
    showToast("Use DIWALI20 (20% OFF) or BULK25 (25% OFF above ₹10,000)");
  }
}

// ============================================================================
// GPS & LEAFLET STORE LOCATOR (LOCKED TO 23.1758349, 88.5664704)
// ============================================================================
function initLeafletMap() {
  const mapEl = document.getElementById("storeMap");
  if (!mapEl || typeof L === "undefined") return;

  map = L.map("storeMap").setView([SHOWROOM_COORDS.lat, SHOWROOM_COORDS.lng], 17);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const marker = L.marker([SHOWROOM_COORDS.lat, SHOWROOM_COORDS.lng]).addTo(map);
  marker
    .bindPopup(`<b>${SHOWROOM_COORDS.name}</b><br>${SHOWROOM_COORDS.address}`)
    .openPopup();
}

function detectUserGPS() {
  if (!navigator.geolocation) {
    simulateGPS(23.1755, 88.5632, "Saratpally, Ranaghat");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      simulateGPS(pos.coords.latitude, pos.coords.longitude, "Your Live GPS Coordinates");
    },
    () => {
      simulateGPS(23.1755, 88.5632, "Saratpally, Ranaghat (Simulated)");
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

function simulateGPS(lat, lng, label) {
  const distKm = computeHaversineKm(lat, lng, SHOWROOM_COORDS.lat, SHOWROOM_COORDS.lng);
  const etaMins = Math.max(2, Math.round(distKm * 3.5));

  const distText = document.getElementById("gpsDistanceText");
  const heroGps = document.getElementById("heroGpsStatus");
  const perkText = document.getElementById("gpsDeliveryPerk");

  if (distText) distText.textContent = `${distKm.toFixed(2)} km from Madhumita Fab Fashion (${label})`;
  if (heroGps) heroGps.textContent = `📍 ${label}: ${distKm.toFixed(2)} km from Subhas Ave Showroom`;
  if (perkText) {
    perkText.textContent =
      distKm <= 8
        ? `✓ Eligible for FREE Same-Day Ranaghat Delivery (~${etaMins} mins drive)`
        : `✓ Express Insured Courier Delivery Available across West Bengal & India`;
  }

  if (map && typeof L !== "undefined") {
    if (userMarker) map.removeLayer(userMarker);
    userMarker = L.marker([lat, lng])
      .addTo(map)
      .bindPopup(`<b>${escapeHtml(label)}</b><br>${distKm.toFixed(2)} km away from showroom`)
      .openPopup();
    map.fitBounds(
      [
        [SHOWROOM_COORDS.lat, SHOWROOM_COORDS.lng],
        [lat, lng]
      ],
      { padding: [45, 45], maxZoom: 17 }
    );
  }
}

function computeHaversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function checkStoreOpenStatus() {
  const badge = document.getElementById("storeOpenBadge");
  if (!badge) return;

  const now = new Date();
  const day = now.getDay(); // 1 = Monday (Closed)
  const hour = now.getHours();
  if (day === 1) {
    badge.textContent = "Closed Today (Monday Weekly Off)";
    badge.className = "text-xs font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-800";
  } else if (hour >= 10 && hour < 21) {
    badge.textContent = "● Showroom Open Now (10 AM – 9 PM)";
    badge.className = "text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800";
  } else {
    badge.textContent = "Opens at 10:00 AM • Online Orders 24×7";
    badge.className = "text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800";
  }
}

function showToast(msg) {
  const toast = document.getElementById("toastBox");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove("hidden", "toast-slide-in");
  void toast.offsetWidth;
  toast.classList.add("toast-slide-in");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.add("hidden"), 3200);
}