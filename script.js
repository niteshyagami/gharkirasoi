// ====== MENU DATA ====== 
const menuData = {
    vegetarian: [
        {
            name: "Paneer Butter Masala",
            price: 299,
            description: "Creamy paneer in rich tomato sauce",
            emoji: "🧀"
        },
        {
            name: "Dal Makhani",
            price: 199,
            description: "Slow-cooked black lentils with cream",
            emoji: "🍲"
        },
        {
            name: "Aloo Gobi",
            price: 149,
            description: "Spiced potato and cauliflower",
            emoji: "🥔"
        },
        {
            name: "Chana Masala",
            price: 179,
            description: "Chickpeas in aromatic tomato curry",
            emoji: "🍛"
        },
        {
            name: "Palak Paneer",
            price: 249,
            description: "Paneer in spinach and cream sauce",
            emoji: "🥬"
        },
        {
            name: "Mushroom Matar",
            price: 189,
            description: "Mushrooms and peas in gravy",
            emoji: "🍄"
        }
    ],
    nonVeg: [
        {
            name: "Chicken Tikka Masala",
            price: 349,
            description: "Tender chicken in creamy tomato sauce",
            emoji: "🍗"
        },
        {
            name: "Butter Chicken",
            price: 329,
            description: "Succulent chicken in buttery gravy",
            emoji: "🍖"
        },
        {
            name: "Lamb Rogan Josh",
            price: 399,
            description: "Slow-cooked lamb in aromatic sauce",
            emoji: "🐑"
        },
        {
            name: "Fish Curry",
            price: 349,
            description: "Fresh fish in tangy coconut gravy",
            emoji: "🐟"
        },
        {
            name: "Mutton Keema",
            price: 379,
            description: "Minced mutton with herbs and spices",
            emoji: "🥩"
        },
        {
            name: "Shrimp Masala",
            price: 429,
            description: "Juicy shrimp in flavorful sauce",
            emoji: "🦐"
        }
    ],
    breads: [
        {
            name: "Roti",
            price: 40,
            description: "Soft unleavened Indian bread",
            emoji: "🍞"
        },
        {
            name: "Naan",
            price: 60,
            description: "Fluffy tandoori oven bread",
            emoji: "🥖"
        },
        {
            name: "Paratha",
            price: 80,
            description: "Layered buttery Indian bread",
            emoji: "🥞"
        },
        {
            name: "Bhature",
            price: 90,
            description: "Fried puffed bread",
            emoji: "🍩"
        },
        {
            name: "Plain Rice",
            price: 100,
            description: "Steamed basmati rice",
            emoji: "🍚"
        },
        {
            name: "Raita",
            price: 50,
            description: "Yogurt-based cool side dish",
            emoji: "🥛"
        }
    ]
};

// ====== DELIVERY FEE SETTINGS ====== 
const DELIVERY_FEE = 30;
const WHATSAPP_NUMBER = "918448408429";

// ====== STATE ====== 
let cart = [];
let userLocation = null;
let activeFilter = 'all';
let filteredMenu = [];

// ====== INITIALIZATION ====== 
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    loadCartFromStorage();
    renderMenu();
    setupEventListeners();
    updateCartBadge();
    updateCartSummary();
}

// ====== MENU RENDERING ====== 
function renderMenu() {
    updateFilteredMenu();
    renderMenuGrid();
}

function updateFilteredMenu() {
    if (activeFilter === 'all') {
        filteredMenu = [
            ...menuData.vegetarian,
            ...menuData.nonVeg,
            ...menuData.breads
        ];
    } else {
        filteredMenu = menuData[activeFilter] || [];
    }
}

function renderMenuGrid() {
    const container = document.getElementById('menuGrid');

    container.innerHTML = filteredMenu.map((item, index) => `
        <div class="menu-card">
            <div class="menu-card-image">${item.emoji}</div>
            <div class="menu-card-body">
                <h3 class="menu-card-name">${item.name}</h3>
                <p class="menu-card-desc">${item.description}</p>
                <div class="menu-card-footer">
                    <span class="menu-card-price">₹${item.price}</span>
                    <button class="btn-add-cart" onclick="addToCart('${item.name}', ${item.price}, '${item.emoji}')">
                        Add
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterMenu(category) {
    activeFilter = category;
    updateFilterActiveButton(category);
    updateFilteredMenu();
    renderMenuGrid();
}

function updateFilterActiveButton(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        }
    });
}

// ====== CART FUNCTIONS ====== 
function addToCart(name, price, emoji) {
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name,
            price,
            emoji,
            quantity: 1
        });
    }

    saveCartToStorage();
    updateCartBadge();
    updateCartSummary();
    renderCartItems();

    // Show toast notification
    showToast(`${name} added to cart!`);
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    saveCartToStorage();
    updateCartBadge();
    updateCartSummary();
    renderCartItems();
}

function updateQuantity(name, change) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(name);
        } else {
            saveCartToStorage();
            updateCartSummary();
            renderCartItems();
        }
    }
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.emoji} ${item.name}</div>
                <div class="cart-item-price">₹${item.price}</div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity('${item.name}', -1)">−</button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
            </div>
            <button class="remove-item" onclick="removeFromCart('${item.name}')">🗑️</button>
        </div>
    `).join('');
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
}

function updateCartSummary() {
    const subtotal = calculateSubtotal();
    const deliveryFee = subtotal > 0 ? DELIVERY_FEE : 0;
    const total = subtotal + deliveryFee;

    document.getElementById('subtotal').textContent = `₹${subtotal}`;
    document.getElementById('deliveryFee').textContent = `₹${deliveryFee}`;
    document.getElementById('totalPrice').textContent = `₹${total}`;
    document.getElementById('footerTotal').textContent = total;

    // Show/hide sticky footer
    if (cart.length > 0) {
        document.querySelector('.sticky-footer').classList.add('show');
    } else {
        document.querySelector('.sticky-footer').classList.remove('show');
    }
}

function calculateSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// ====== STORAGE FUNCTIONS ====== 
function saveCartToStorage() {
    localStorage.setItem('gharkirasoi_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const stored = localStorage.getItem('gharkirasoi_cart');
    cart = stored ? JSON.parse(stored) : [];
}

// ====== CART UI FUNCTIONS ====== 
function openCart() {
    document.getElementById('cartSidebar').classList.add('open');
    document.getElementById('cartOverlay').classList.add('open');
    renderCartItems();
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('open');
}

// ====== CHECKOUT MODAL FUNCTIONS ====== 
function openCheckout() {
    if (cart.length === 0) {
        showToast('❌ Your cart is empty!', 3000);
        return;
    }

    closeCart();
    renderOrderSummary();
    document.getElementById('checkoutModal').classList.add('open');
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    
    // Focus on first input for better UX - disabled for mobile
    // setTimeout(() => {
    //     document.getElementById('customerName').focus();
    // }, 100);
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('open');
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = 'auto';
    clearCheckoutForm();
}

function renderOrderSummary() {
    const summaryContainer = document.getElementById('summaryItems');
    const total = calculateSubtotal() + DELIVERY_FEE;

    summaryContainer.innerHTML = cart.map(item => `
        <div class="summary-item">
            <span>${item.emoji} ${item.name} <span class="summary-item-qty">× ${item.quantity}</span></span>
            <span class="summary-item-price">₹${item.price * item.quantity}</span>
        </div>
    `).join('');

    document.getElementById('summaryTotal').textContent = `₹${total}`;
}

function clearCheckoutForm() {
    document.getElementById('checkoutForm').reset();
    userLocation = null;
    document.getElementById('locationStatus').innerHTML = '';
    document.getElementById('locationStatus').classList.remove('success', 'error');
    clearFormErrors();
}

// ====== FORM VALIDATION ====== 
function validateCheckoutForm() {
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();

    // Clear previous errors
    clearFormErrors();

    let isValid = true;

    // Validate Name
    if (!name || name.length < 2) {
        showError('nameError', 'Please enter a valid name');
        isValid = false;
    }

    // Validate Phone (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phone || !phoneRegex.test(phone)) {
        showError('phoneError', 'Please enter a valid 10-digit phone number');
        isValid = false;
    }

    // Validate Address
    if (!address || address.length < 5) {
        showError('addressError', 'Please enter a complete address');
        isValid = false;
    }

    // Scroll to first error if validation fails
    if (!isValid) {
        const firstError = document.querySelector('.error-msg.show');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    return isValid;
}

function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.classList.add('show');

    // Add error class to input
    if (errorId === 'nameError') {
        document.getElementById('customerName').classList.add('error');
    } else if (errorId === 'phoneError') {
        document.getElementById('customerPhone').classList.add('error');
    } else if (errorId === 'addressError') {
        document.getElementById('customerAddress').classList.add('error');
    }
}

function clearFormErrors() {
    document.querySelectorAll('.error-msg').forEach(el => {
        el.classList.remove('show');
        el.textContent = '';
    });
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(el => {
        el.classList.remove('error');
    });
}

// ====== GPS LOCATION FUNCTIONS ====== 
function useCurrentLocation() {
    const locationBtn = document.getElementById('useLocationBtn');
    const locationStatus = document.getElementById('locationStatus');

    locationStatus.innerHTML = 'Getting location...';
    locationStatus.classList.remove('success', 'error');
    locationStatus.style.display = 'block';

    if (!navigator.geolocation) {
        locationStatus.innerHTML = '❌ Geolocation is not supported by your browser';
        locationStatus.classList.add('error');
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            userLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };

            const mapsLink = `https://maps.google.com/?q=${userLocation.latitude},${userLocation.longitude}`;
            locationStatus.innerHTML = `✅ Location captured! <a href="${mapsLink}" target="_blank">View on Maps</a>`;
            locationStatus.classList.add('success');

            // Auto-fill address field (optional enhancement)
            console.log('Location captured:', userLocation);
        },
        (error) => {
            let errorMessage = 'Unable to get location';
            if (error.code === error.PERMISSION_DENIED) {
                errorMessage = 'Location permission denied. Please enable it in browser settings.';
            } else if (error.code === error.POSITION_UNAVAILABLE) {
                errorMessage = 'Location information unavailable. Please enter manually.';
            }
            locationStatus.innerHTML = `❌ ${errorMessage}`;
            locationStatus.classList.add('error');
            userLocation = null;
        }
    );
}

// ====== WHATSAPP ORDER INTEGRATION ====== 
function submitOrderOnWhatsApp(e) {
    e.preventDefault();

    // Validate form
    if (!validateCheckoutForm()) {
        return;
    }

    const submitBtn = document.querySelector('.submit-order-btn');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = '⏳ Processing...';

    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const finalAddress = address || 'Location shared via GPS';

    // Generate order message
    const message = generateOrderMessage(name, phone, finalAddress);

    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp URL - use fixed link
    const whatsappUrl = "https://wa.me/91844848429?text=Hi%20I%20want%20to%20order%20food%20from%20your%20website";

    // Simulate small delay for UX feedback
    setTimeout(() => {
        // Clear cart and close modal
        cart = [];
        saveCartToStorage();
        updateCartBadge();
        updateCartSummary();
        closeCheckout();

        // Open WhatsApp - use location.href for better mobile compatibility
        window.location.href = whatsappUrl;

        // Show success message
        showToast('✅ Order sent! Opening WhatsApp...');

        // Reset button after modal closes
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }, 500);
}

function generateOrderMessage(name, phone, address) {
    const itemsList = cart.map(item => 
        `• ${item.name} (₹${item.price}) × ${item.quantity} = ₹${item.price * item.quantity}`
    ).join('\n');

    const subtotal = calculateSubtotal();
    const total = subtotal + DELIVERY_FEE;

    let message = `🍛 *Ghar ki Rasoi Order*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${name}\n`;
    message += `Phone: ${phone}\n`;
    message += `Address: ${address}\n`;

    if (userLocation) {
        const mapsLink = `https://maps.google.com/?q=${userLocation.latitude},${userLocation.longitude}`;
        message += `Location: ${mapsLink}\n`;
    }

    message += `\n*Order Details:*\n`;
    message += itemsList;
    message += `\n\nSubtotal: ₹${subtotal}\n`;
    message += `Delivery Fee: ₹${DELIVERY_FEE}\n`;
    message += `*Total: ₹${total}*\n\n`;
    message += `⚠️ Prices may vary. Please confirm order details.`;

    return message;
}

// ====== TOAST NOTIFICATION ====== 
function showToast(message, duration = 2000) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #28a745;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 10000;
        font-size: 14px;
        font-weight: 600;
        animation: slideUp 0.3s ease;
    `;
    toast.textContent = message;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            from { transform: translateX(-50%) translateY(100px); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        @keyframes slideDown {
            from { transform: translateX(-50%) translateY(0); opacity: 1; }
            to { transform: translateX(-50%) translateY(100px); opacity: 0; }
        }
    `;
    if (!document.querySelector('style[data-toast]')) {
        style.setAttribute('data-toast', 'true');
        document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ====== EVENT LISTENERS SETUP ====== 
function setupEventListeners() {
    // Cart toggle
    document.getElementById('cartToggle').addEventListener('click', openCart);
    document.getElementById('closeCart').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('cartOverlay')) {
            closeCart();
        }
    });

    // Checkout
    document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
    document.getElementById('orderNowBtn').addEventListener('click', openCheckout);
    document.getElementById('closeCheckout').addEventListener('click', closeCheckout);

    // Form submission
    document.getElementById('checkoutForm').addEventListener('submit', submitOrderOnWhatsApp);

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterMenu(e.target.dataset.filter);
        });
    });

    // Search functionality (only if search input exists)
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (query) {
                searchMenuItems(query);
            } else {
                // Reset to active filter if search is cleared
                filterMenu(activeFilter);
            }
        }, { passive: true });
    }

    // Phone input - allow only digits
    const phoneInput = document.getElementById('customerPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d]/g, '').slice(0, 10);
        }, { passive: true });
        // Scroll to phone field when focused
        phoneInput.addEventListener('focus', () => {
            setTimeout(() => {
                phoneInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        });
    }

    // Address textarea - scroll to view when focused
    const addressInput = document.getElementById('customerAddress');
    if (addressInput) {
        addressInput.addEventListener('focus', () => {
            setTimeout(() => {
                addressInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        });
    }

    // Location button - scroll to view when focused
    const locationBtn = document.getElementById('useLocationBtn');
    if (locationBtn) {
        locationBtn.addEventListener('focus', () => {
            setTimeout(() => {
                locationBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        });
    }

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
            closeCheckout();
        }
    });

    // Modal overlay - only close if clicking overlay itself, not modal content
    // Temporarily disabled to prevent accidental closes
    // document.getElementById('modalOverlay').addEventListener('click', (e) => {
    //     if (e.target === document.getElementById('modalOverlay')) {
    //         closeCheckout();
    //     }
    // });
}

function searchMenuItems(query) {
    if (!query) {
        updateFilteredMenu();
        renderMenuGrid();
        return;
    }

    const allItems = [
        ...menuData.vegetarian,
        ...menuData.nonVeg,
        ...menuData.breads
    ];

    filteredMenu = allItems.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
    );

    renderMenuGrid();
}
