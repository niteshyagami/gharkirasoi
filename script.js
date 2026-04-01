// ====== MENU DATA ====== 
const menuData = {
    vegetarian: [
        { name: "Gobhi Aloo (Q)", price: 92, emoji: "🥔" },
        { name: "Gobhi Aloo (H)", price: 150, emoji: "🥔" },
        { name: "Gobhi Aloo (F)", price: 219, emoji: "🥔" },
        { name: "Bhindi Aloo (Q)", price: 92, emoji: "🥬" },
        { name: "Bhindi Aloo (H)", price: 150, emoji: "🥬" },
        { name: "Bhindi Aloo (F)", price: 219, emoji: "🥬" },
        { name: "Egg Bhurji (Q)", price: 115, emoji: "🥚" },
        { name: "Egg Bhurji (H)", price: 184, emoji: "🥚" },
        { name: "Egg Bhurji (F)", price: 265, emoji: "🥚" },
        { name: "Soybean Aloo (Q)", price: 92, emoji: "🌱" },
        { name: "Soybean Aloo (H)", price: 150, emoji: "🌱" },
        { name: "Soybean Aloo (F)", price: 219, emoji: "🌱" },
        { name: "Aloo Jeera (Q)", price: 92, emoji: "🥔" },
        { name: "Aloo Jeera (H)", price: 150, emoji: "🥔" },
        { name: "Aloo Jeera (F)", price: 219, emoji: "🥔" },
        { name: "Rajma Masala (Q)", price: 92, emoji: "🥣" },
        { name: "Rajma Masala (H)", price: 150, emoji: "🥣" },
        { name: "Rajma Masala (F)", price: 219, emoji: "🥣" },
        { name: "Chole Masala (Q)", price: 92, emoji: "🧆" },
        { name: "Chole Masala (H)", price: 150, emoji: "🧆" },
        { name: "Chole Masala (F)", price: 219, emoji: "🧆" },
        { name: "Kaddi Pakoda (Q)", price: 92, emoji: "🍢" },
        { name: "Kaddi Pakoda (H)", price: 150, emoji: "🍢" },
        { name: "Kaddi Pakoda (F)", price: 219, emoji: "🍢" },
        { name: "Shahi Paneer (Q)", price: 138, emoji: "🧀" },
        { name: "Shahi Paneer (H)", price: 184, emoji: "🧀" },
        { name: "Shahi Paneer (F)", price: 265, emoji: "🧀" },
        { name: "Paneer Butter Masala (Q)", price: 150, emoji: "🧀" },
        { name: "Paneer Butter Masala (H)", price: 207, emoji: "🧀" },
        { name: "Paneer Butter Masala (F)", price: 276, emoji: "🧀" },
        { name: "Palak Paneer (Q)", price: 150, emoji: "🥬" },
        { name: "Palak Paneer (H)", price: 195, emoji: "🥬" },
        { name: "Palak Paneer (F)", price: 265, emoji: "🥬" },
        { name: "Paneer Lababdar (Q)", price: 150, emoji: "🧀" },
        { name: "Paneer Lababdar (H)", price: 207, emoji: "🧀" },
        { name: "Paneer Lababdar (F)", price: 276, emoji: "🧀" },
        { name: "Matar Paneer (Q)", price: 150, emoji: "🌱" },
        { name: "Matar Paneer (H)", price: 195, emoji: "🌱" },
        { name: "Matar Paneer (F)", price: 265, emoji: "🌱" },
        { name: "Paneer Makhani (Q)", price: 150, emoji: "🧀" },
        { name: "Paneer Makhani (H)", price: 195, emoji: "🧀" },
        { name: "Paneer Makhani (F)", price: 265, emoji: "🧀" },
        { name: "Paneer Do Payaza (Q)", price: 150, emoji: "🧀" },
        { name: "Paneer Do Payaza (H)", price: 207, emoji: "🧀" },
        { name: "Paneer Do Payaza (F)", price: 276, emoji: "🧀" },
        { name: "Dal Tadka (Q)", price: 92, emoji: "🍲" },
        { name: "Dal Tadka (H)", price: 150, emoji: "🍲" },
        { name: "Dal Tadka (F)", price: 219, emoji: "🍲" },
        { name: "Dal Makhani (Q)", price: 115, emoji: "🍲" },
        { name: "Dal Makhani (H)", price: 184, emoji: "🍲" },
        { name: "Dal Makhani (F)", price: 265, emoji: "🍲" },
        { name: "Dal Fry (Q)", price: 104, emoji: "🍲" },
        { name: "Dal Fry (H)", price: 161, emoji: "🍲" },
        { name: "Dal Fry (F)", price: 230, emoji: "🍲" },
        { name: "Chana Masala (Q)", price: 115, emoji: "🧆" },
        { name: "Chana Masala (H)", price: 184, emoji: "🧆" },
        { name: "Chana Masala (F)", price: 253, emoji: "🧆" },
        { name: "Mix Veg (Q)", price: 127, emoji: "🥦" },
        { name: "Mix Veg (H)", price: 184, emoji: "🥦" },
        { name: "Mix Veg (F)", price: 265, emoji: "🥦" },
        { name: "Kadhai Paneer (Q)", price: 150, emoji: "🍛" },
        { name: "Kadhai Paneer (H)", price: 207, emoji: "🍛" },
        { name: "Kadhai Paneer (F)", price: 276, emoji: "🍛" },
        { name: "Tawa Paneer (Q)", price: 150, emoji: "🍲" },
        { name: "Tawa Paneer (H)", price: 207, emoji: "🍲" },
        { name: "Tawa Paneer (F)", price: 276, emoji: "🍲" },
        { name: "Paneer Tikka Masala (Q)", price: 150, emoji: "🍗" },
        { name: "Paneer Tikka Masala (H)", price: 207, emoji: "🍗" },
        { name: "Paneer Tikka Masala (F)", price: 276, emoji: "🍗" },
        { name: "Tawa Chaap (Q)", price: 126, emoji: "🥩" },
        { name: "Tawa Chaap (H)", price: 184, emoji: "🥩" },
        { name: "Tawa Chaap (F)", price: 253, emoji: "🥩" },
        { name: "Baigan Bharta (H)", price: 207, emoji: "🍆" },
        { name: "Baigan Bharta (F)", price: 299, emoji: "🍆" },
        { name: "Kadhai Chaap (Q)", price: 138, emoji: "🥩" },
        { name: "Kadhai Chaap (H)", price: 195, emoji: "🥩" },
        { name: "Kadhai Chaap (F)", price: 253, emoji: "🥩" },
        { name: "Aloo Chana (Q)", price: 92, emoji: "🥔" },
        { name: "Aloo Chana (H)", price: 173, emoji: "🥔" },
        { name: "Aloo Chana (F)", price: 253, emoji: "🥔" }
    ],
    nonVeg: [
        { name: "Chicken Curry (Q)", price: 184, emoji: "🍗" },
        { name: "Chicken Curry (H)", price: 276, emoji: "🍗" },
        { name: "Chicken Curry (F)", price: 380, emoji: "🍗" },
        { name: "Egg Curry (Q)", price: 115, emoji: "🥚" },
        { name: "Egg Curry (H)", price: 196, emoji: "🥚" },
        { name: "Egg Curry (F)", price: 276, emoji: "🥚" },
        { name: "Crazy Butter Chicken (Q)", price: 196, emoji: "🍗" },
        { name: "Crazy Butter Chicken (H)", price: 276, emoji: "🍗" },
        { name: "Crazy Butter Chicken (F)", price: 403, emoji: "🍗" },
        { name: "Tawa Chicken (Q)", price: 207, emoji: "🍗" },
        { name: "Tawa Chicken (H)", price: 299, emoji: "🍗" },
        { name: "Tawa Chicken (F)", price: 452, emoji: "🍗" },
        { name: "Kadhai Chicken (Q)", price: 196, emoji: "🍗" },
        { name: "Kadhai Chicken (H)", price: 276, emoji: "🍗" },
        { name: "Kadhai Chicken (F)", price: 403, emoji: "🍗" },
        { name: "Rara Chicken (Q)", price: 219, emoji: "🍗" },
        { name: "Rara Chicken (H)", price: 319, emoji: "🍗" },
        { name: "Rara Chicken (F)", price: 495, emoji: "🍗" },
        { name: "Chicken Kali Mirch (Q)", price: 230, emoji: "🍗" },
        { name: "Chicken Kali Mirch (H)", price: 319, emoji: "🍗" },
        { name: "Chicken Kali Mirch (F)", price: 495, emoji: "🍗" },
        { name: "Chicken Tikka Masala (Q)", price: 196, emoji: "🍗" },
        { name: "Chicken Tikka Masala (H)", price: 296, emoji: "🍗" },
        { name: "Chicken Tikka Masala (F)", price: 403, emoji: "🍗" },
        { name: "Tandoori Chaap (H)", price: 171, emoji: "🔥" },
        { name: "Tandoori Chaap (F)", price: 286, emoji: "🔥" },
        { name: "Malai Chaap (H)", price: 206, emoji: "🔥" },
        { name: "Malai Chaap (F)", price: 321, emoji: "🔥" },
        { name: "Tandoori Chicken (H)", price: 344, emoji: "🍗" },
        { name: "Tandoori Chicken (F)", price: 631, emoji: "🍗" },
        { name: "Afghani Chicken (H)", price: 379, emoji: "🍗" },
        { name: "Afghani Chicken (F)", price: 654, emoji: "🍗" },
        { name: "Mushroom Tikka", price: 286, emoji: "🍄" },
        { name: "Paneer Tikka", price: 344, emoji: "🧀" },
        { name: "Malai Paneer Tikka (H)", price: 252, emoji: "🧀" },
        { name: "Malai Paneer Tikka (F)", price: 378, emoji: "🧀" },
        { name: "Achari Paneer Tikka (H)", price: 195, emoji: "🧀" },
        { name: "Achari Paneer Tikka (F)", price: 309, emoji: "🧀" },
        { name: "Chicken Tikka (H)", price: 276, emoji: "🍗" },
        { name: "Chicken Tikka (F)", price: 459, emoji: "🍗" },
        { name: "Malai Chicken Tikka (H)", price: 298, emoji: "🍗" },
        { name: "Malai Chicken Tikka (F)", price: 494, emoji: "🍗" },
        { name: "Achari Chaap (H)", price: 218, emoji: "🔥" },
        { name: "Achari Chaap (F)", price: 321, emoji: "🔥" }
    ],
    breads: [
        { name: "Plain Tawa Roti", price: 12, emoji: "🍞" },
        { name: "Butter Tawa Roti", price: 14, emoji: "🥖" },
        { name: "Betroot Roti", price: 17, emoji: "🥖" },
        { name: "Tandoori Roti", price: 17, emoji: "🥖" },
        { name: "Laccha Paratha", price: 46, emoji: "🥞" },
        { name: "Butter Naan", price: 40, emoji: "🥐" },
        { name: "Plain Naan", price: 35, emoji: "🥐" },
        { name: "Garlic Naan", price: 46, emoji: "🧄" },
        { name: "Pudina Paratha", price: 52, emoji: "🌿" }
    ],
    snacks: [
        { name: "Chicken Nuggets", price: 229, emoji: "🍗" },
        { name: "Cheese Garlic Bread", price: 114, emoji: "🧀" },
        { name: "Bread Roll", price: 114, emoji: "🥖" },
        { name: "Bread Pakoda", price: 114, emoji: "🧆" },
        { name: "Payaz Pakode", price: 114, emoji: "🧅" }
    ],
    riceBiryani: [
        { name: "Steam Rice (Q)", price: 69, emoji: "🍚" },
        { name: "Steam Rice (F)", price: 115, emoji: "🍚" },
        { name: "Jeera Rice (Q)", price: 81, emoji: "🍚" },
        { name: "Jeera Rice (F)", price: 127, emoji: "🍚" },
        { name: "Matar Pulao", price: 115, emoji: "🌾" },
        { name: "Veg Biryani (Q)", price: 171, emoji: "🍲" },
        { name: "Veg Biryani (F)", price: 229, emoji: "🍲" },
        { name: "Chicken Biryani (Q)", price: 196, emoji: "🍗" },
        { name: "Chicken Biryani (F)", price: 288, emoji: "🍗" },
        { name: "Egg Biryani (Q)", price: 183, emoji: "🥚" },
        { name: "Egg Biryani (F)", price: 253, emoji: "🥚" },
        { name: "Veg Fried Rice", price: 161, emoji: "🥬" },
        { name: "Egg Fried Rice", price: 173, emoji: "🥚" },
        { name: "Chicken Fried Rice", price: 184, emoji: "🍗" },
        { name: "Egg Chicken Fried Rice", price: 201, emoji: "🍲" },
        { name: "Schezwan Fried Rice", price: 173, emoji: "🌶️" }
    ],
    noodles: [
        { name: "Veg Chilli Garlic", price: 171, emoji: "🍜" },
        { name: "Veg Singapuri", price: 183, emoji: "🍜" },
        { name: "Veg Hakka", price: 171, emoji: "🍜" },
        { name: "Chicken Chilli Garlic", price: 206, emoji: "🍜" },
        { name: "Chicken Singapuri", price: 206, emoji: "🍜" },
        { name: "Chicken Hakka", price: 206, emoji: "🍜" }
    ],
    combos: [
        { name: "Veg Thali", price: 150, emoji: "🍛" },
        { name: "Paneer Thali", price: 196, emoji: "🧀" },
        { name: "Spcl Thali", price: 229, emoji: "🍽️" },
        { name: "Chicken Thali", price: 207, emoji: "🍗" },
        { name: "Egg Curry Thali", price: 184, emoji: "🥚" },
        { name: "Butter Chicken Thali", price: 253, emoji: "🍗" },
        { name: "Dal Makhni Rice", price: 173, emoji: "🍚" },
        { name: "Rajma Rice", price: 150, emoji: "🍚" },
        { name: "Chole Rice", price: 150, emoji: "🍚" },
        { name: "Kaddi Rice", price: 150, emoji: "🍚" },
        { name: "Tehri Rice", price: 173, emoji: "🍚" }
    ],
    crazy: [
        { name: "Chilli Chicken (Q)", price: 229, emoji: "🌶️" },
        { name: "Chilli Chicken (F)", price: 344, emoji: "🌶️" },
        { name: "Chilli Paneer (Q)", price: 217, emoji: "🧀" },
        { name: "Chilli Paneer (F)", price: 332, emoji: "🧀" },
        { name: "Chilli Mushroom (Q)", price: 229, emoji: "🍄" },
        { name: "Chilli Mushroom (F)", price: 321, emoji: "🍄" },
        { name: "Spring Roll (Q)", price: 148, emoji: "🥟" },
        { name: "Spring Roll (F)", price: 229, emoji: "🥟" },
        { name: "Manchurian (Q)", price: 196, emoji: "🥡" },
        { name: "Manchurian (F)", price: 321, emoji: "🥡" },
        { name: "Chilli Potato", price: 148, emoji: "🥔" },
        { name: "Honey Chilli Potato", price: 171, emoji: "🍯" }
    ],
    extras: [
        { name: "Boondi Raita (S)", price: 58, emoji: "🥣" },
        { name: "Boondi Raita (L)", price: 92, emoji: "🥣" },
        { name: "Mix Raita", price: 115, emoji: "🥣" },
        { name: "Gulab Jamun (3pcs)", price: 46, emoji: "🍮" }
    ],
    puriBhature: [
        { name: "Puri Sabji", price: 150, emoji: "🥘" },
        { name: "Puri Chole", price: 150, emoji: "🥘" },
        { name: "Chole Bhature", price: 150, emoji: "🥘" },
        { name: "Veg Macaroni", price: 138, emoji: "🍝" },
        { name: "Masala Dosa", price: 150, emoji: "🫓" }
    ],
    parathas: [
        { name: "Aloo Payaz Paratha", price: 63, emoji: "🥞" },
        { name: "Paneer Payaz Paratha", price: 69, emoji: "🧀" },
        { name: "Gobhi Payaz Paratha", price: 69, emoji: "🥬" },
        { name: "Mix Paratha", price: 81, emoji: "🥞" },
        { name: "Chicken Paratha", price: 138, emoji: "🍗" },
        { name: "Besan Chilla", price: 81, emoji: "🥚" },
        { name: "Paneer Gobhi Paratha", price: 81, emoji: "🧀" },
        { name: "Sattu Paratha", price: 75, emoji: "🥞" },
        { name: "Egg Paratha", price: 69, emoji: "🥚" }
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
let groupedMenu = {}; // prepared grouped menu for modals
let currentModalItem = null;

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
            ...menuData.breads,
            ...(menuData.snacks || []),
            ...(menuData.riceBiryani || []),
            ...(menuData.noodles || []),
            ...(menuData.combos || []),
            ...(menuData.crazy || []),
            ...(menuData.extras || []),
            ...(menuData.puriBhature || []),
            ...(menuData.parathas || [])
        ];
    } else {
        filteredMenu = menuData[activeFilter] || [];
    }

    // Group by base name for variant popup and display logic
    groupedMenu = {};
    filteredMenu.forEach(item => {
        const baseName = getBaseName(item.name);
        if (!groupedMenu[baseName]) {
            groupedMenu[baseName] = { emoji: item.emoji || '🍽️', description: item.description || 'Delicious homemade item', variants: {} };
        }

        const variant = getSizeFromName(item.name) || 'Full';
        groupedMenu[baseName].variants[variant] = { price: item.price, emoji: item.emoji || groupedMenu[baseName].emoji };
    });
}

function getSizeFromName(name) {
    const match = name.match(/\((Q|H|F)\)$/i);
    if (!match) return null;
    const code = match[1].toUpperCase();
    return code === 'Q' ? 'Quarter' : code === 'H' ? 'Half' : 'Full';
}

function getBaseName(name) {
    return name.replace(/\s*\((Q|H|F)\)$/i, '').trim();
}

function getSizeFromName(name) {
    const match = name.match(/\((Q|H|F)\)$/i);
    if (!match) return null;
    const code = match[1].toUpperCase();
    return code === 'Q' ? 'Quarter' : code === 'H' ? 'Half' : 'Full';
}

function getBaseName(name) {
    return name.replace(/\s*\((Q|H|F)\)$/i, '').trim();
}

function renderMenuGrid() {
    const container = document.getElementById('menuGrid');

    container.innerHTML = Object.keys(groupedMenu).map(baseName => {
        const group = groupedMenu[baseName];
        const variants = Object.entries(group.variants);
        const startingPrice = Math.min(...variants.map(([_, v]) => v.price));

        return `
            <div class="menu-card" onclick="openItemModal('${baseName}')">
                <div class="menu-card-side">
                    <div class="menu-card-image">${group.emoji}</div>
                    <div class="menu-card-details">
                        <h3 class="menu-card-name">${baseName}</h3>
                        <p class="menu-card-desc">${group.description}</p>
                        <p class="menu-card-advanced">Starts at ₹${startingPrice}</p>
                    </div>
                </div>
                <div class="menu-card-inline">
                    <span class="menu-card-price">₹${startingPrice}</span>
                    <button class="btn-add-cart" onclick="event.stopPropagation(); openItemModal('${baseName}')">ADD +</button>
                </div>
            </div>
        `;
    }).join('');
}

function openItemModal(baseName) {
    const item = groupedMenu[baseName];
    if (!item) return;

    currentModalItem = { baseName, item, selectedVariant: Object.keys(item.variants)[0], quantity: 1 };

    const variantOptions = Object.entries(item.variants).map(([size, data]) => `
        <label class="variant-row">
            <input type="radio" name="itemVariant" value="${size}" ${size === currentModalItem.selectedVariant ? 'checked' : ''} onclick="changeModalVariant('${size}')">
            <span>${size}</span>
            <span>₹${data.price}</span>
        </label>
    `).join('');

    const modal = document.getElementById('itemModal');
    const modalContent = `
        <div class="modal-card-image">${item.emoji}</div>
        <h2>${baseName}</h2>
        <p>${item.description}</p>

        <div class="modal-section">
            <h4>Select Variant</h4>
            <div class="modal-variant-list">${variantOptions}</div>
        </div>

        <div class="modal-price-row">Price: <span id="modalItemPrice">₹${item.variants[currentModalItem.selectedVariant].price}</span></div>
        <div class="quantity-controls modal-quantity">
            <button onclick="changeModalQuantity(-1)">−</button>
            <span id="modalQuantity">1</span>
            <button onclick="changeModalQuantity(1)">+</button>
        </div>
        <button class="btn-primary" onclick="addModalItemToCart()">Add to Cart</button>
    `;

    document.getElementById('itemModalContent').innerHTML = modalContent;
    document.getElementById('itemModalOverlay').classList.add('open');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function changeModalVariant(size) {
    if (!currentModalItem) return;
    currentModalItem.selectedVariant = size;
    const price = currentModalItem.item.variants[size].price;
    document.getElementById('modalItemPrice').textContent = `₹${price}`;
}

function changeModalQuantity(delta) {
    if (!currentModalItem) return;
    currentModalItem.quantity = Math.max(1, currentModalItem.quantity + delta);
    document.getElementById('modalQuantity').textContent = currentModalItem.quantity;
}

function addModalItemToCart() {
    if (!currentModalItem) return;
    const variant = currentModalItem.selectedVariant;
    const variantData = currentModalItem.item.variants[variant];
    const name = `${currentModalItem.baseName} (${variant})`;

    for (let i = 0; i < currentModalItem.quantity; i++) {
        addToCart(name, variantData.price, currentModalItem.item.emoji);
    }

    closeItemModal();
}

function closeItemModal() {
    document.getElementById('itemModalOverlay').classList.remove('open');
    document.getElementById('itemModal').classList.remove('open');
    document.body.style.overflow = 'auto';
    currentModalItem = null;
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

    // WhatsApp URL with dynamic message content
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Simulate small delay for UX feedback
    setTimeout(() => {
        // Open WhatsApp first
        window.location.href = whatsappUrl;

        // Then clear cart and close modal
        cart = [];
        saveCartToStorage();
        updateCartBadge();
        updateCartSummary();
        closeCheckout();

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

    // Item modal overlay close
    document.getElementById('itemModalOverlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('itemModalOverlay')) {
            closeItemModal();
        }
    });

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
