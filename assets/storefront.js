/**
 * KRAK & CO. — DYNAMIC STOREFRONT ENGINE
 * Fully functional Cart Store, Instant Search, Wishlist, Filter & Sort,
 * Product Detail switcher, Checkout & Order Placement, Toast Notifications.
 */

// ==========================================
// 1. PRODUCT CATALOG DATA STORE
// ==========================================
const PRODUCTS = {
  thenkulzal: {
    id: 'thenkulzal',
    title: 'Thenkulzal Murukku',
    eyebrow: 'THE CLASSIC CRUNCH.',
    breadcrumb: 'Thenkulzal Murukku',
    price: 199,
    weight: '150 g',
    category: 'murukku traditional',
    tagline: 'The classic. The crunch. The comfort.',
    hook: 'A golden, delicate, traditional spiral that brings the familiar joy of Indian snacking to every bite.',
    desc: 'Some classics never need an upgrade. Just a really good crunch.<br><br>Meet Thenkulzal Murukku. Delicate spirals, golden crunch and the comforting flavour of a snack that never goes out of style.<br><br>Whether it\'s alongside your chai, on the snack table or straight out of the pack, this is your everyday crunch done right.',
    taste: 'Traditional',
    texture: 'Light & crunchy',
    img: 'assets/pouch-thenkulzal-murukku-card.png'
  },
  periperi: {
    id: 'periperi',
    title: 'Peri Peri Murukku',
    eyebrow: 'THE SPICY SIDE OF TRADITION.',
    breadcrumb: 'Peri Peri Murukku',
    price: 219,
    weight: '150 g',
    category: 'murukku spicy',
    tagline: 'Tradition got a little spicy.',
    hook: 'A satisfying murukku crunch with bold peri peri flavour. Traditional snack energy with a modern kick.',
    desc: 'A classic crunch. A seriously spicy twist.<br><br>We took the familiar crunch of murukku and turned up the flavour.<br><br>Meet Peri Peri Murukku. Bold, spicy and full of character. Every bite brings together the crunch you know with a flavour that refuses to stay quiet.<br><br>For spice lovers, snack addicts and anyone who believes ordinary snacks are overrated.',
    taste: 'Bold & spicy',
    texture: 'Crunchy',
    img: 'assets/pouch-peri-peri-murukku-card.png'
  },
  namki: {
    id: 'namki',
    title: 'Thika Namki',
    eyebrow: 'THE LITTLE BITE WITH BIG ENERGY.',
    breadcrumb: 'Thika Namki',
    price: 189,
    weight: '150 g',
    category: 'namki spicy',
    tagline: 'Small bites. Big spice energy.',
    hook: 'A spicy, crispy and flavour-packed snack made for the cravings that refuse to wait.',
    desc: 'Tiny bites. Massive snack energy.<br><br>Don\'t let the size fool you.<br><br>Thika Namki brings a crispy bite, a spicy kick and a flavour that makes it very easy to lose track of how much is left in the pack.<br><br>Open it for a snack break. End up making it the snack break.',
    taste: 'Spicy',
    texture: 'Crispy',
    img: 'assets/pouch-thika-namki-card.png'
  },
  combo: {
    id: 'combo',
    title: 'KRAK Snack Trio Bundle',
    eyebrow: 'THE ULTIMATE PARTY PACK',
    breadcrumb: 'KRAK Snack Trio Bundle',
    price: 549,
    weight: '450 g',
    category: 'combo party',
    tagline: 'A little classic, a little spice, a little chaos.',
    hook: 'Why settle for one craving when you can have the whole snack party?',
    desc: 'Meet the KRAK & CO. snack combo. A little classic, a little spice, a little chaos. Perfect for stocking up, sharing with your crew or keeping all three dangerously close.',
    taste: 'All Flavours',
    texture: 'Ultra Crunchy',
    img: 'assets/hero-krak-official-pouches.png'
  }
};

// ==========================================
// 2. REACTIVE CART STORE
// ==========================================
let CART = [
  { id: 'thenkulzal', qty: 1 },
  { id: 'periperi', qty: 1 }
];
let WISHLIST = new Set();
let currentPdpKey = 'thenkulzal';
let appliedPromo = null;

const FREE_SHIPPING_THRESHOLD = 999;
const STANDARD_SHIPPING_FEE = 99;

function renderCart() {
  const body = document.getElementById('cart-drawer-body');
  const footer = document.getElementById('cart-drawer-footer');
  const banner = document.getElementById('cart-shipping-banner');
  if (!body) return;

  const totalCount = CART.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count-badge, .cart-count-display, .checkout-items-count').forEach(el => {
    el.textContent = totalCount;
  });

  let subtotal = 0;
  CART.forEach(item => {
    const prod = PRODUCTS[item.id];
    if (prod) subtotal += prod.price * item.qty;
  });

  // Free shipping progress bar
  if (banner) {
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      document.getElementById('shipping-banner-text').innerHTML = '🎉 You\'ve unlocked <strong>FREE Shipping!</strong>';
      document.getElementById('shipping-banner-bar').style.width = '100%';
      document.getElementById('shipping-banner-bar').style.background = '#2E7D32';
    } else {
      const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
      const pct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      document.getElementById('shipping-banner-text').innerHTML = 'Add <strong>₹' + remaining + '</strong> more for <strong>FREE shipping!</strong>';
      document.getElementById('shipping-banner-bar').style.width = pct + '%';
      document.getElementById('shipping-banner-bar').style.background = 'var(--color-primary)';
    }
  }

  // Empty Cart Condition
  if (CART.length === 0) {
    body.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🧺</div>
        <h3 class="cart-empty-title">Looks like your snack shelf is empty.</h3>
        <p class="cart-empty-sub">Let's fix that.</p>
        <button type="button" class="btn btn-primary" style="border-radius: 9999px; padding: 0.85rem 2rem;" onclick="closeCartDrawer(); switchPreview('plp');">
          EXPLORE SNACKS &rarr;
        </button>
      </div>
    `;
    if (footer) footer.style.display = 'none';
    if (banner) banner.style.display = 'none';
    renderCheckoutSummary();
    return;
  }

  if (footer) footer.style.display = 'block';
  if (banner) banner.style.display = 'block';

  // Render Item List
  let html = '';
  CART.forEach(item => {
    const prod = PRODUCTS[item.id];
    if (!prod) return;
    html += `
      <div class="cart-item">
        <div style="width: 72px; height: 72px; background: #FFF; border-radius: 6px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--color-border); padding: 4px;">
          <img src="${prod.img}" alt="${prod.title}" style="max-height: 100%; max-width: 100%; object-fit: contain;">
        </div>
        <div class="cart-item__details">
          <h4 class="cart-item__title">${prod.title}</h4>
          <span class="cart-item__variant">${prod.weight} &bull; ${prod.taste || 'Artisanal'}</span>
          <span class="cart-item__price">₹${prod.price}</span>
          <div class="cart-item__bottom">
            <div class="quantity-stepper" style="height: 32px;">
              <button type="button" onclick="updateCartQty('${item.id}', -1)">-</button>
              <input type="text" value="${item.qty}" readonly style="width: 32px;">
              <button type="button" onclick="updateCartQty('${item.id}', 1)">+</button>
            </div>
            <span style="color: var(--color-text-muted); cursor: pointer; padding: 4px;" onclick="removeFromCart('${item.id}')" title="Remove snack">🗑</span>
          </div>
        </div>
      </div>
    `;
  });
  body.innerHTML = html;

  // Update Subtotal and Total
  const shippingCost = (subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0) ? 0 : STANDARD_SHIPPING_FEE;
  const total = subtotal + shippingCost;

  const subtotalEl = document.getElementById('cart-subtotal');
  const shippingEl = document.getElementById('cart-shipping');
  const totalEl = document.getElementById('cart-total');

  if (subtotalEl) subtotalEl.textContent = '₹' + subtotal;
  if (shippingEl) shippingEl.textContent = (shippingCost === 0) ? 'FREE' : '₹' + shippingCost;
  if (totalEl) totalEl.textContent = '₹' + total;

  renderCheckoutSummary();
}

function addToCart(productId, qty = 1) {
  const prod = PRODUCTS[productId];
  if (!prod) return;
  const existing = CART.find(i => i.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    CART.push({ id: productId, qty: qty });
  }
  renderCart();
  openCartDrawer();
  showToast(`Added ${prod.title} to your crunch collection! 🥨`);
}

function updateCartQty(productId, delta) {
  const existing = CART.find(i => i.id === productId);
  if (!existing) return;
  existing.qty += delta;
  if (existing.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  renderCart();
}

function removeFromCart(productId) {
  const prod = PRODUCTS[productId];
  CART = CART.filter(i => i.id !== productId);
  renderCart();
  if (prod) showToast(`Removed ${prod.title} from cart`);
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('drawer-overlay');
  if (drawer) drawer.classList.add('active');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('drawer-overlay');
  if (drawer) drawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function proceedToCheckout() {
  closeCartDrawer();
  switchPreview('checkout');
}

// ==========================================
// 3. CHECKOUT LOGIC & SUMMARY
// ==========================================
function renderCheckoutSummary() {
  const listEl = document.getElementById('checkout-items-list');
  if (!listEl) return;
  
  let subtotal = 0;
  let html = '';
  CART.forEach(item => {
    const prod = PRODUCTS[item.id];
    if (!prod) return;
    const lineTotal = prod.price * item.qty;
    subtotal += lineTotal;
    html += `
      <div class="order-summary-item">
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="${prod.img}" class="order-summary-item-img" alt="${prod.title}">
          <div>
            <strong style="display: block; font-size: 0.95rem;">${prod.title}</strong>
            <span style="font-size: 0.8rem; color: var(--color-text-muted);">Qty: ${item.qty} &bull; ${prod.weight}</span>
          </div>
        </div>
        <strong style="font-size: 0.95rem;">₹${lineTotal}</strong>
      </div>
    `;
  });
  listEl.innerHTML = html;

  const shippingCost = (subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0) ? 0 : STANDARD_SHIPPING_FEE;
  let discount = 0;
  const discountRow = document.getElementById('checkout-discount-row');
  const discountAmount = document.getElementById('checkout-discount-amount');

  if (appliedPromo === 'CRUNCH10' && discountRow && discountAmount) {
    discount = Math.round(subtotal * 0.10);
    discountRow.style.display = 'flex';
    discountAmount.textContent = '-₹' + discount;
  } else if (discountRow) {
    discountRow.style.display = 'none';
  }

  const total = Math.max(0, subtotal - discount + shippingCost);

  const subEl = document.getElementById('checkout-subtotal');
  const shipEl = document.getElementById('checkout-shipping');
  const totEl = document.getElementById('checkout-total');

  if (subEl) subEl.textContent = '₹' + subtotal;
  if (shipEl) shipEl.textContent = (shippingCost === 0) ? 'FREE' : '₹' + shippingCost;
  if (totEl) totEl.textContent = '₹' + total;
}

function applyPromoCode() {
  const input = document.getElementById('checkout-promo-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (code === 'CRUNCH10') {
    appliedPromo = 'CRUNCH10';
    renderCheckoutSummary();
    showToast('🎉 Promo code CRUNCH10 applied! 10% discount.');
  } else {
    showToast('Invalid promo code. Try CRUNCH10');
  }
}

function selectPaymentOption(card) {
  document.querySelectorAll('.payment-option-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  const radio = card.querySelector('input[type="radio"]');
  if (radio) radio.checked = true;
}

function placeOrder() {
  if (CART.length === 0) {
    showToast('Your cart is empty! Add snacks before checking out.');
    return;
  }
  const btn = document.getElementById('btn-place-order');
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'PLACING YOUR ORDER...';
  }

  setTimeout(() => {
    const orderNum = 'KRAK-' + Math.floor(10000 + Math.random() * 90000);
    const fname = document.getElementById('checkout-fname')?.value || 'Snack Lover';
    const lname = document.getElementById('checkout-lname')?.value || '';
    const address = document.getElementById('checkout-address')?.value || '42 Heritage Boulevard, Indiranagar';
    const city = document.getElementById('checkout-city')?.value || 'Bengaluru';
    const pincode = document.getElementById('checkout-pincode')?.value || '560038';

    const orderIdEl = document.getElementById('confirmed-order-id');
    const custNameEl = document.getElementById('confirmed-customer-name');
    const custAddrEl = document.getElementById('confirmed-customer-address');

    if (orderIdEl) orderIdEl.textContent = 'Order #' + orderNum;
    if (custNameEl) custNameEl.textContent = fname + ' ' + lname;
    if (custAddrEl) custAddrEl.textContent = address + ', ' + city + ' ' + pincode;

    // Clear cart
    CART = [];
    renderCart();

    if (btn) {
      btn.disabled = false;
      btn.textContent = 'PLACE MY ORDER →';
    }

    switchPreview('order');
    showToast('🎉 Order placed successfully! Welcome to KRAK & CO.');
  }, 700);
}

// ==========================================
// 4. INSTANT SEARCH OVERLAY
// ==========================================
function openSearchModal() {
  const modal = document.getElementById('search-modal');
  if (!modal) return;
  modal.classList.add('active');
  const input = document.getElementById('search-modal-input');
  if (input) {
    input.value = '';
    input.focus();
  }
  handleSearchInput('');
}

function closeSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) modal.classList.remove('active');
}

function handleSearchBackdropClick(e) {
  if (e.target.id === 'search-modal') {
    closeSearchModal();
  }
}

function handleSearchInput(query) {
  const q = (query || '').toLowerCase().trim();
  const resultsContainer = document.getElementById('search-modal-results');
  if (!resultsContainer) return;
  
  const filtered = Object.values(PRODUCTS).filter(p => {
    if (!q) return true;
    return p.title.toLowerCase().includes(q) ||
           p.tagline.toLowerCase().includes(q) ||
           p.category.toLowerCase().includes(q) ||
           p.taste.toLowerCase().includes(q);
  });

  if (filtered.length === 0) {
    resultsContainer.innerHTML = `
      <div style="text-align: center; padding: 30px; color: var(--color-text-muted);">
        No snacks found matching "<strong>${query}</strong>". Try searching for <em>murukku</em>, <em>peri peri</em>, or <em>namki</em>.
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach(p => {
    html += `
      <div class="search-result-item" onclick="openPdpFor('${p.id}'); closeSearchModal();">
        <img src="${p.img}" class="search-result-img" alt="${p.title}">
        <div style="flex: 1;">
          <strong style="display: block; font-size: 1rem; color: var(--color-text-main);">${p.title}</strong>
          <span style="font-size: 0.85rem; color: var(--color-text-muted);">${p.tagline}</span>
        </div>
        <div style="text-align: right;">
          <strong style="font-size: 1rem; color: var(--color-primary); display: block;">₹${p.price}</strong>
          <button type="button" class="btn btn-primary" style="padding: 4px 10px; font-size: 0.75rem; border-radius: 9999px; margin-top: 4px;" onclick="event.stopPropagation(); addToCart('${p.id}', 1); closeSearchModal();">+ Add</button>
        </div>
      </div>
    `;
  });
  resultsContainer.innerHTML = html;
}

// ==========================================
// 5. WISHLIST TOGGLE & STORAGE
// ==========================================
function toggleWishlist(e, productId) {
  e.stopPropagation();
  const btn = e.currentTarget;
  const prod = PRODUCTS[productId];
  if (WISHLIST.has(productId)) {
    WISHLIST.delete(productId);
    btn.classList.remove('active');
    btn.innerHTML = '&hearts;';
    if (prod) showToast(`Removed ${prod.title} from Wishlist`);
  } else {
    WISHLIST.add(productId);
    btn.classList.add('active');
    btn.innerHTML = '❤️';
    if (prod) showToast(`Added ${prod.title} to your Wishlist ❤️`);
  }
}

// ==========================================
// 6. DYNAMIC PLP (SHOP ALL) RENDERING & FILTER
// ==========================================
let currentPlpCategory = 'all';

function renderPlp() {
  const container = document.getElementById('plp-grid-container');
  if (!container) return;

  let list = Object.values(PRODUCTS);

  if (currentPlpCategory !== 'all') {
    list = list.filter(p => p.category.includes(currentPlpCategory));
  }

  const sortMode = document.getElementById('plp-sort-select')?.value || 'featured';
  if (sortMode === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (sortMode === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (sortMode === 'name-asc') {
    list.sort((a, b) => a.title.localeCompare(b.title));
  }

  let html = '';
  list.forEach(p => {
    const isWished = WISHLIST.has(p.id);
    html += `
      <div class="product-card" style="position: relative;">
        <button type="button" class="product-card__wishlist ${isWished ? 'active' : ''}" onclick="toggleWishlist(event, '${p.id}')">${isWished ? '❤️' : '&hearts;'}</button>
        <div class="product-card__image-wrap" onclick="openPdpFor('${p.id}')" style="cursor: pointer;">
          <img src="${p.img}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: contain;">
        </div>
        <h3 class="product-card__title" onclick="openPdpFor('${p.id}')" style="cursor: pointer;">${p.title}</h3>
        <p style="font-size: 0.88rem; color: var(--color-text-muted); margin-bottom: 0.75rem;">${p.tagline}</p>
        <div class="product-card__meta">
          <span>${p.weight}</span><span>|</span><span class="product-card__price">₹${p.price}</span>
        </div>
        <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
          <button type="button" class="btn btn-primary" style="flex: 1; padding: 0.65rem 0.5rem; font-size: 0.85rem; font-weight: 700;" onclick="addToCart('${p.id}', 1)">
            + ADD TO CART
          </button>
          <button type="button" class="btn btn-outline-primary" style="padding: 0.65rem 0.85rem; font-size: 0.85rem; font-weight: 700;" onclick="openPdpFor('${p.id}')">
            VIEW
          </button>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function filterPlp(category, btn) {
  currentPlpCategory = category;
  document.querySelectorAll('.filter-pills-bar .filter-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  renderPlp();
}

function handlePlpSort(val) {
  renderPlp();
}

// ==========================================
// 7. PRODUCT DETAIL PAGE (PDP) LOGIC
// ==========================================
function selectPdpProduct(key) {
  const data = PRODUCTS[key];
  if (!data) return;
  currentPdpKey = key;
  const titleEl = document.getElementById('pdp-title');
  const eyeEl = document.getElementById('pdp-eyebrow');
  const breadEl = document.getElementById('pdp-breadcrumb-name');
  const priceEl = document.getElementById('pdp-price');
  const hookEl = document.getElementById('pdp-hook');
  const descEl = document.getElementById('pdp-desc');
  const tasteEl = document.getElementById('pdp-taste');
  const textEl = document.getElementById('pdp-texture');
  const packEl = document.getElementById('pdp-pack');
  const mainImg = document.getElementById('pdp-main-img');
  const thumb1 = document.getElementById('pdp-thumb-1');
  const qtyInput = document.getElementById('pdp-qty');

  if (titleEl) titleEl.textContent = data.title.toUpperCase();
  if (eyeEl) eyeEl.textContent = data.eyebrow;
  if (breadEl) breadEl.textContent = data.title;
  if (priceEl) priceEl.textContent = '₹' + data.price;
  if (hookEl) hookEl.innerHTML = data.hook;
  if (descEl) descEl.innerHTML = data.desc;
  if (tasteEl) tasteEl.textContent = data.taste;
  if (textEl) textEl.textContent = data.texture;
  if (packEl) packEl.textContent = data.weight;
  if (mainImg) mainImg.src = data.img;
  if (thumb1) thumb1.src = data.img;
  if (qtyInput) qtyInput.value = '1';

  ['thenkulzal', 'periperi', 'namki'].forEach(k => {
    const btn = document.getElementById('btn-pdp-' + k);
    if (btn) {
      if (k === key) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  });
}

function openPdpFor(key) {
  selectPdpProduct(key);
  switchPreview('pdp');
}

function setMainImage(index) {
  document.querySelectorAll('.pdp-gallery__thumb').forEach(t => t.classList.remove('active'));
  const activeThumb = document.getElementById('thumb-wrap-' + index);
  if (activeThumb) activeThumb.classList.add('active');
  const img = activeThumb?.querySelector('img')?.src;
  const mainImg = document.getElementById('pdp-main-img');
  if (img && mainImg) mainImg.src = img;
}

function adjustQty(delta) {
  const input = document.getElementById('pdp-qty');
  if (!input) return;
  let val = parseInt(input.value, 10) || 1;
  val = Math.max(1, val + delta);
  input.value = val;
}

function addToCartCurrent() {
  const qtyInput = document.getElementById('pdp-qty');
  const qty = parseInt(qtyInput ? qtyInput.value : '1', 10) || 1;
  addToCart(currentPdpKey, qty);
}

function buyNowCurrent() {
  const qtyInput = document.getElementById('pdp-qty');
  const qty = parseInt(qtyInput ? qtyInput.value : '1', 10) || 1;
  addToCart(currentPdpKey, qty);
  closeCartDrawer();
  switchPreview('checkout');
}

function toggleAccordion(btn) {
  const item = btn.closest('.pdp-accordion-item');
  if (item) item.classList.toggle('active');
}

// ==========================================
// 8. GLOBAL NAVIGATION, FORMS & TOAST
// ==========================================
function switchPreview(viewId) {
  document.querySelectorAll('.preview-view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.preview-tab').forEach(t => t.classList.remove('active'));
  const target = document.getElementById('view-' + viewId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const activeBtn = Array.from(document.querySelectorAll('.preview-tab')).find(b => b.getAttribute('onclick')?.includes(viewId));
  if (activeBtn) activeBtn.classList.add('active');

  if (viewId === 'plp') {
    renderPlp();
  } else if (viewId === 'checkout') {
    renderCheckoutSummary();
  }
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `<span>✨</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px) scale(0.95)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  if (input) input.value = '';
  showToast('🎉 You\'re in! Welcome to KRAK & CO. snack updates.');
}

function handleContactSubmit(e) {
  e.preventDefault();
  e.target.reset();
  showToast('Message sent! Our crunch team will reply shortly. 📩');
}

// Keyboard ESC listener to close search/cart
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSearchModal();
    closeCartDrawer();
  }
});

// Initialize Storefront State on Load
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  renderPlp();
});

