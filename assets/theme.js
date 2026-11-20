/**
 * KRAK & CO. — SHOPIFY 2.0 THEME JAVASCRIPT
 * Handles AJAX Cart Drawer, Variant Selection, Filter Pills, Wishlist, Accordions & Drawers
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initCartDrawer();
  initProductVariants();
  initQuantitySteppers();
  initAccordions();
  initWishlist();
  initFilterPills();
  initGallery();
});

/* --------------------------------------------------------------------------
   Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.querySelector('.menu-toggle-btn');
  const closeBtn = document.querySelector('.mobile-nav-close');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.drawer-overlay');

  if (!menuBtn || !drawer || !overlay) return;

  function openMenu() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', () => {
    closeMenu();
    closeCartDrawer();
  });
}

/* --------------------------------------------------------------------------
   AJAX Cart Drawer & Cart API
   -------------------------------------------------------------------------- */
window.KrakCart = {
  freeShippingThreshold: 999,

  async getCart() {
    try {
      const response = await fetch('/cart.js');
      return await response.json();
    } catch (err) {
      console.error('Error fetching cart:', err);
    }
  },

  async addItem(variantId, quantity = 1) {
    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ id: variantId, quantity: parseInt(quantity, 10) })
      });
      const item = await response.json();
      await this.refreshDrawer();
      openCartDrawer();
      return item;
    } catch (err) {
      console.error('Error adding item to cart:', err);
    }
  },

  async changeQuantity(key, quantity) {
    try {
      const response = await fetch('/cart/change.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ id: key, quantity: parseInt(quantity, 10) })
      });
      await response.json();
      await this.refreshDrawer();
    } catch (err) {
      console.error('Error updating cart quantity:', err);
    }
  },

  async refreshDrawer() {
    const cart = await this.getCart();
    if (!cart) return;

    // Update cart count badges across the page
    document.querySelectorAll('.cart-count-badge').forEach(badge => {
      badge.textContent = cart.item_count;
    });

    const itemsContainer = document.querySelector('.cart-drawer__items');
    const subtotalEl = document.querySelector('.cart-drawer-subtotal');
    const totalEl = document.querySelector('.cart-drawer-total');
    const freeShippingEl = document.querySelector('.free-shipping-progress');

    if (subtotalEl) {
      subtotalEl.textContent = formatMoney(cart.items_subtotal_price);
    }
    if (totalEl) {
      totalEl.textContent = formatMoney(cart.total_price);
    }

    // Free shipping threshold calculator
    if (freeShippingEl) {
      const thresholdCents = this.freeShippingThreshold * 100;
      if (cart.total_price >= thresholdCents) {
        freeShippingEl.innerHTML = '<span style="color: var(--color-accent-sage); font-weight: 700;">★ You have unlocked FREE shipping!</span>';
      } else {
        const remaining = thresholdCents - cart.total_price;
        freeShippingEl.innerHTML = `Add <strong>${formatMoney(remaining)}</strong> more for FREE shipping!`;
      }
    }

    if (!itemsContainer) return;

    if (cart.item_count === 0) {
      itemsContainer.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--color-text-muted);">
          <p style="margin-bottom: 1.5rem; font-size: 1.1rem;">Your cart is empty.</p>
          <a href="/collections/all" class="btn btn-primary" onclick="closeCartDrawer()">Explore Snacks</a>
        </div>
      `;
      return;
    }

    let html = '';
    cart.items.forEach(item => {
      html += `
        <div class="cart-item" data-line-item-key="${item.key}">
          <img src="${item.image || '//via.placeholder.com/100'}" alt="${escapeHtml(item.title)}" class="cart-item__image">
          <div class="cart-item__details">
            <h4 class="cart-item__title">${escapeHtml(item.product_title)}</h4>
            ${item.variant_title ? `<span class="cart-item__variant">${escapeHtml(item.variant_title)}</span>` : ''}
            <span class="cart-item__price">${formatMoney(item.final_line_price)}</span>
            <div class="cart-item__bottom">
              <div class="quantity-stepper" style="height: 32px;">
                <button type="button" onclick="KrakCart.changeQuantity('${item.key}', ${item.quantity - 1})">-</button>
                <input type="text" value="${item.quantity}" readonly style="width: 32px;">
                <button type="button" onclick="KrakCart.changeQuantity('${item.key}', ${item.quantity + 1})">+</button>
              </div>
              <button type="button" class="cart-item__remove" onclick="KrakCart.changeQuantity('${item.key}', 0)" title="Remove item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      `;
    });
    itemsContainer.innerHTML = html;
  }
};

function initCartDrawer() {
  const cartTriggers = document.querySelectorAll('.cart-drawer-trigger');
  const closeBtn = document.querySelector('.cart-drawer-close');

  cartTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeCartDrawer);
  }

  // Intercept form submit for Add to Cart
  document.addEventListener('submit', async (e) => {
    const form = e.target.closest('form[action*="/cart/add"]');
    if (form) {
      e.preventDefault();
      const formData = new FormData(form);
      const variantId = formData.get('id');
      const quantity = formData.get('quantity') || 1;
      await KrakCart.addItem(variantId, quantity);
    }
  });
}

function openCartDrawer() {
  const drawer = document.querySelector('.cart-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  if (drawer && overlay) {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    KrakCart.refreshDrawer();
  }
}

function closeCartDrawer() {
  const drawer = document.querySelector('.cart-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  if (drawer && overlay) {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* --------------------------------------------------------------------------
   Product Variants (PDP)
   -------------------------------------------------------------------------- */
function initProductVariants() {
  const variantPickers = document.querySelectorAll('.variant-picker');
  variantPickers.forEach(picker => {
    const pills = picker.querySelectorAll('.variant-pill');
    const select = picker.closest('form')?.querySelector('select[name="id"]');
    const priceDisplay = document.querySelector('.pdp-price');

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const variantId = pill.dataset.variantId;
        const price = pill.dataset.price;

        if (select) {
          select.value = variantId;
          select.dispatchEvent(new Event('change', { bubbles: true }));
        }

        if (priceDisplay && price) {
          priceDisplay.textContent = price;
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   Quantity Steppers
   -------------------------------------------------------------------------- */
function initQuantitySteppers() {
  document.querySelectorAll('.quantity-stepper').forEach(stepper => {
    const input = stepper.querySelector('input');
    const minusBtn = stepper.querySelector('button[data-action="minus"]');
    const plusBtn = stepper.querySelector('button[data-action="plus"]');

    if (!input) return;

    if (minusBtn) {
      minusBtn.addEventListener('click', () => {
        let val = parseInt(input.value, 10) || 1;
        if (val > 1) {
          input.value = val - 1;
          input.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
    }

    if (plusBtn) {
      plusBtn.addEventListener('click', () => {
        let val = parseInt(input.value, 10) || 1;
        input.value = val + 1;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      });
    }
  });
}

/* --------------------------------------------------------------------------
   Accordions (PDP & FAQs)
   -------------------------------------------------------------------------- */
function initAccordions() {
  document.querySelectorAll('.pdp-accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.pdp-accordion-item');
      if (item) {
        item.classList.toggle('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Wishlist (LocalStorage)
   -------------------------------------------------------------------------- */
function initWishlist() {
  const storageKey = 'krak_wishlist';
  let wishlist = JSON.parse(localStorage.getItem(storageKey) || '[]');

  function updateHeartStates() {
    document.querySelectorAll('.product-card__wishlist').forEach(btn => {
      const handle = btn.dataset.productHandle;
      if (wishlist.includes(handle)) {
        btn.classList.add('active');
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
      } else {
        btn.classList.remove('active');
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
      }
    });
  }

  updateHeartStates();

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.product-card__wishlist');
    if (btn) {
      e.preventDefault();
      const handle = btn.dataset.productHandle;
      if (wishlist.includes(handle)) {
        wishlist = wishlist.filter(h => h !== handle);
      } else {
        wishlist.push(handle);
      }
      localStorage.setItem(storageKey, JSON.stringify(wishlist));
      updateHeartStates();
    }
  });
}

/* --------------------------------------------------------------------------
   Filter Pills (PLP)
   -------------------------------------------------------------------------- */
function initFilterPills() {
  const pills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.product-card[data-category]');

  if (!pills.length || !cards.length) return;

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterVal = pill.dataset.filter.toLowerCase();
      cards.forEach(card => {
        const cat = card.dataset.category.toLowerCase();
        if (filterVal === 'all' || cat.includes(filterVal)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   Thumbnail Gallery (PDP)
   -------------------------------------------------------------------------- */
function initGallery() {
  const thumbs = document.querySelectorAll('.pdp-gallery__thumb');
  const mainImg = document.querySelector('.pdp-gallery__main-img');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const targetSrc = thumb.dataset.fullSrc;
      if (mainImg && targetSrc) {
        mainImg.src = targetSrc;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Helpers
   -------------------------------------------------------------------------- */
function formatMoney(cents) {
  if (typeof cents !== 'number') cents = parseInt(cents, 10) || 0;
  const rupees = (cents / 100).toFixed(0);
  return '₹' + rupees;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[m]));
}

