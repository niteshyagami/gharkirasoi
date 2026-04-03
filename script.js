// ====== MENU DATA ====== 
const menuData = {
    vegetarian: [
        { name: "Gobhi Aloo (Q)", price: 92, emoji: "🥔", description: "Golden, crispy comfort that melts in your mouth" },
        { name: "Gobhi Aloo (H)", price: 150, emoji: "🥔", description: "Golden, crispy comfort that melts in your mouth" },
        { name: "Gobhi Aloo (F)", price: 219, emoji: "🥔", description: "Golden, crispy comfort that melts in your mouth" },
        { name: "Bhindi Aloo (Q)", price: 92, emoji: "🥬", description: "Tender, aromatic and absolutely irresistible" },
        { name: "Bhindi Aloo (H)", price: 150, emoji: "🥬", description: "Tender, aromatic and absolutely irresistible" },
        { name: "Bhindi Aloo (F)", price: 219, emoji: "🥬", description: "Tender, aromatic and absolutely irresistible" },
        { name: "Egg Bhurji (Q)", price: 115, emoji: "🥚", description: "Fluffy scrambled delight bursting with flavor" },
        { name: "Egg Bhurji (H)", price: 184, emoji: "🥚", description: "Fluffy scrambled delight bursting with flavor" },
        { name: "Egg Bhurji (F)", price: 265, emoji: "🥚", description: "Fluffy scrambled delight bursting with flavor" },
        { name: "Soybean Aloo (Q)", price: 92, emoji: "🌱", description: "Hearty, wholesome and incredibly satisfying" },
        { name: "Soybean Aloo (H)", price: 150, emoji: "🌱", description: "Hearty, wholesome and incredibly satisfying" },
        { name: "Soybean Aloo (F)", price: 219, emoji: "🌱", description: "Hearty, wholesome and incredibly satisfying" },
        { name: "Aloo Jeera (Q)", price: 92, emoji: "🥔", description: "Rustic charm in every bite, perfectly spiced" },
        { name: "Aloo Jeera (H)", price: 150, emoji: "🥔", description: "Rustic charm in every bite, perfectly spiced" },
        { name: "Aloo Jeera (F)", price: 219, emoji: "🥔", description: "Rustic charm in every bite, perfectly spiced" },
        { name: "Rajma Masala (Q)", price: 92, emoji: "🥣", description: "Rich, creamy and deeply satisfying" },
        { name: "Rajma Masala (H)", price: 150, emoji: "🥣", description: "Rich, creamy and deeply satisfying" },
        { name: "Rajma Masala (F)", price: 219, emoji: "🥣", description: "Rich, creamy and deeply satisfying" },
        { name: "Chole Masala (Q)", price: 92, emoji: "🧆", description: "Aromatic bliss served hot and ready to delight" },
        { name: "Chole Masala (H)", price: 150, emoji: "🧆", description: "Aromatic bliss served hot and ready to delight" },
        { name: "Chole Masala (F)", price: 219, emoji: "🧆", description: "Aromatic bliss served hot and ready to delight" },
        { name: "Kaddi Pakoda (Q)", price: 92, emoji: "🍢", description: "Tangy, thick and absolutely lip-smacking good" },
        { name: "Kaddi Pakoda (H)", price: 150, emoji: "🍢", description: "Tangy, thick and absolutely lip-smacking good" },
        { name: "Kaddi Pakoda (F)", price: 219, emoji: "🍢", description: "Tangy, thick and absolutely lip-smacking good" },
        { name: "Shahi Paneer (Q)", price: 138, emoji: "🧀", description: "Royally creamy with premium taste" },
        { name: "Shahi Paneer (H)", price: 184, emoji: "🧀", description: "Royally creamy with premium taste" },
        { name: "Shahi Paneer (F)", price: 265, emoji: "🧀", description: "Royally creamy with premium taste" },
        { name: "Paneer Butter Masala (Q)", price: 150, emoji: "🧀", description: "The ultimate comfort dish you can't resist" },
        { name: "Paneer Butter Masala (H)", price: 207, emoji: "🧀", description: "The ultimate comfort dish you can't resist" },
        { name: "Paneer Butter Masala (F)", price: 276, emoji: "🧀", description: "The ultimate comfort dish you can't resist" },
        { name: "Palak Paneer (Q)", price: 150, emoji: "🥬", description: "Green goodness with rich, creamy perfection" },
        { name: "Palak Paneer (H)", price: 195, emoji: "🥬", description: "Green goodness with rich, creamy perfection" },
        { name: "Palak Paneer (F)", price: 265, emoji: "🥬", description: "Green goodness with rich, creamy perfection" },
        { name: "Paneer Lababdar (Q)", price: 150, emoji: "🧀", description: "A stunning blend of sweetness and spice" },
        { name: "Paneer Lababdar (H)", price: 207, emoji: "🧀", description: "A stunning blend of sweetness and spice" },
        { name: "Paneer Lababdar (F)", price: 276, emoji: "🧀", description: "A stunning blend of sweetness and spice" },
        { name: "Matar Paneer (Q)", price: 150, emoji: "🌱", description: "Fresh, vibrant and absolutely delightful" },
        { name: "Matar Paneer (H)", price: 195, emoji: "🌱", description: "Fresh, vibrant and absolutely delightful" },
        { name: "Matar Paneer (F)", price: 265, emoji: "🌱", description: "Fresh, vibrant and absolutely delightful" },
        { name: "Paneer Makhani (Q)", price: 150, emoji: "🧀", description: "Velvety smoothness with rich, buttery notes" },
        { name: "Paneer Makhani (H)", price: 195, emoji: "🧀", description: "Velvety smoothness with rich, buttery notes" },
        { name: "Paneer Makhani (F)", price: 265, emoji: "🧀", description: "Velvety smoothness with rich, buttery notes" },
        { name: "Paneer Do Payaza (Q)", price: 150, emoji: "🧀", description: "Sweet and spectacular feast of flavors" },
        { name: "Paneer Do Payaza (H)", price: 207, emoji: "🧀", description: "Sweet and spectacular feast of flavors" },
        { name: "Paneer Do Payaza (F)", price: 276, emoji: "🧀", description: "Sweet and spectacular feast of flavors" },
        { name: "Dal Tadka (Q)", price: 92, emoji: "🍲", description: "Lentil magic with fragrant, aromatic touch" },
        { name: "Dal Tadka (H)", price: 150, emoji: "🍲", description: "Lentil magic with fragrant, aromatic touch" },
        { name: "Dal Tadka (F)", price: 219, emoji: "🍲", description: "Lentil magic with fragrant, aromatic touch" },
        { name: "Dal Makhani (Q)", price: 115, emoji: "🍲", description: "Luxuriously creamy lentil masterpiece" },
        { name: "Dal Makhani (H)", price: 184, emoji: "🍲", description: "Luxuriously creamy lentil masterpiece" },
        { name: "Dal Makhani (F)", price: 265, emoji: "🍲", description: "Luxuriously creamy lentil masterpiece" },
        { name: "Dal Fry (Q)", price: 104, emoji: "🍲", description: "Perfectly spiced simplicity at its finest" },
        { name: "Dal Fry (H)", price: 161, emoji: "🍲", description: "Perfectly spiced simplicity at its finest" },
        { name: "Dal Fry (F)", price: 230, emoji: "🍲", description: "Perfectly spiced simplicity at its finest" },
        { name: "Chana Masala (Q)", price: 115, emoji: "🧆", description: "Warm, inviting and deeply flavored" },
        { name: "Chana Masala (H)", price: 184, emoji: "🧆", description: "Warm, inviting and deeply flavored" },
        { name: "Chana Masala (F)", price: 253, emoji: "🧆", description: "Warm, inviting and deeply flavored" },
        { name: "Mix Veg (Q)", price: 127, emoji: "🥦", description: "Vibrant medley of garden fresh goodness" },
        { name: "Mix Veg (H)", price: 184, emoji: "🥦", description: "Vibrant medley of garden fresh goodness" },
        { name: "Mix Veg (F)", price: 265, emoji: "🥦", description: "Vibrant medley of garden fresh goodness" },
        { name: "Kadhai Paneer (Q)", price: 150, emoji: "🍛", description: "Bold, smoky and absolutely unforgettable" },
        { name: "Kadhai Paneer (H)", price: 207, emoji: "🍛", description: "Bold, smoky and absolutely unforgettable" },
        { name: "Kadhai Paneer (F)", price: 276, emoji: "🍛", description: "Bold, smoky and absolutely unforgettable" },
        { name: "Tawa Paneer (Q)", price: 150, emoji: "🍲", description: "Charred, succulent and bursting with flavor" },
        { name: "Tawa Paneer (H)", price: 207, emoji: "🍲", description: "Charred, succulent and bursting with flavor" },
        { name: "Tawa Paneer (F)", price: 276, emoji: "🍲", description: "Charred, succulent and bursting with flavor" },
        { name: "Paneer Tikka Masala (Q)", price: 150, emoji: "🍗", description: "Smoky tandoor magic meets creamy dreams" },
        { name: "Paneer Tikka Masala (H)", price: 207, emoji: "🍗", description: "Smoky tandoor magic meets creamy dreams" },
        { name: "Paneer Tikka Masala (F)", price: 276, emoji: "🍗", description: "Smoky tandoor magic meets creamy dreams" },
        { name: "Tawa Chaap (Q)", price: 126, emoji: "🥩", description: "Tender, smoky and utterly mouth-watering" },
        { name: "Tawa Chaap (H)", price: 184, emoji: "🥩", description: "Tender, smoky and utterly mouth-watering" },
        { name: "Tawa Chaap (F)", price: 253, emoji: "🥩", description: "Tender, smoky and utterly mouth-watering" },
        { name: "Kadhai Chaap (Q)", price: 138, emoji: "🥩", description: "Spicy thrill meets incredible tenderness" },
        { name: "Kadhai Chaap (H)", price: 195, emoji: "🥩", description: "Spicy thrill meets incredible tenderness" },
        { name: "Kadhai Chaap (F)", price: 253, emoji: "🥩", description: "Spicy thrill meets incredible tenderness" }
    ],
    nonVeg: [
        { name: "Chicken Curry (Q)", price: 184, emoji: "🍗", description: "Silky, savory and packed with soul" },
        { name: "Chicken Curry (H)", price: 276, emoji: "🍗", description: "Silky, savory and packed with soul" },
        { name: "Chicken Curry (F)", price: 380, emoji: "🍗", description: "Silky, savory and packed with soul" },
        { name: "Egg Curry (Q)", price: 115, emoji: "🥚", description: "Soft, tender and immensely satisfying" },
        { name: "Egg Curry (H)", price: 196, emoji: "🥚", description: "Soft, tender and immensely satisfying" },
        { name: "Egg Curry (F)", price: 276, emoji: "🥚", description: "Soft, tender and immensely satisfying" },
        { name: "Crazy Butter Chicken (Q)", price: 196, emoji: "🍗", description: "Decadently rich with an incredible kick" },
        { name: "Crazy Butter Chicken (H)", price: 276, emoji: "🍗", description: "Decadently rich with an incredible kick" },
        { name: "Crazy Butter Chicken (F)", price: 403, emoji: "🍗", description: "Decadently rich with an incredible kick" },
        { name: "Tawa Chicken (Q)", price: 207, emoji: "🍗", description: "Smoky seared perfection with char marks" },
        { name: "Tawa Chicken (H)", price: 299, emoji: "🍗", description: "Smoky seared perfection with char marks" },
        { name: "Tawa Chicken (F)", price: 452, emoji: "🍗", description: "Smoky seared perfection with char marks" },
        { name: "Kadhai Chicken (Q)", price: 196, emoji: "🍗", description: "Bold spices with tender, juicy bites" },
        { name: "Kadhai Chicken (H)", price: 276, emoji: "🍗", description: "Bold spices with tender, juicy bites" },
        { name: "Kadhai Chicken (F)", price: 403, emoji: "🍗", description: "Bold spices with tender, juicy bites" },
        { name: "Rara Chicken (Q)", price: 219, emoji: "🍗", description: "Minced magic with a spicy, smoky soul" },
        { name: "Rara Chicken (H)", price: 319, emoji: "🍗", description: "Minced magic with a spicy, smoky soul" },
        { name: "Rara Chicken (F)", price: 495, emoji: "🍗", description: "Minced magic with a spicy, smoky soul" },
        { name: "Chicken Tikka Masala (Q)", price: 196, emoji: "🍗", description: "Restaurant-style perfection in every spoonful" },
        { name: "Chicken Tikka Masala (H)", price: 296, emoji: "🍗", description: "Restaurant-style perfection in every spoonful" },
        { name: "Chicken Tikka Masala (F)", price: 403, emoji: "🍗", description: "Restaurant-style perfection in every spoonful" },
        { name: "Tandoori Chaap (H)", price: 171, emoji: "🔥", description: "Smoky tandoor magic with incredible char" },
        { name: "Tandoori Chaap (F)", price: 286, emoji: "🔥", description: "Smoky tandoor magic with incredible char" },
        { name: "Malai Chaap (H)", price: 206, emoji: "🔥", description: "Creamy, succulent and absolutely divine" },
        { name: "Malai Chaap (F)", price: 321, emoji: "🔥", description: "Creamy, succulent and absolutely divine" },
        { name: "Tandoori Chicken (H)", price: 344, emoji: "🍗", description: "Tandoor perfection with smoky, aromatic allure" },
        { name: "Tandoori Chicken (F)", price: 631, emoji: "🍗", description: "Tandoor perfection with smoky, aromatic allure" },
        { name: "Afghani Chicken (H)", price: 379, emoji: "🍗", description: "Legendary flavors meet pure indulgence" },
        { name: "Afghani Chicken (F)", price: 654, emoji: "🍗", description: "Legendary flavors meet pure indulgence" },
        { name: "Mushroom Tikka", price: 286, emoji: "🍄", description: "Tender, smoky and surprisingly luxurious" },
        { name: "Paneer Tikka", price: 344, emoji: "🧀", description: "Tandoor-kissed chunks of pure delight" },
        { name: "Malai Paneer Tikka (H)", price: 252, emoji: "🧀", description: "Creamy, succulent and melts like butter" },
        { name: "Malai Paneer Tikka (F)", price: 378, emoji: "🧀", description: "Creamy, succulent and melts like butter" },
        { name: "Achari Paneer Tikka (H)", price: 195, emoji: "🧀", description: "Tangy spiced wonder with perfect char" },
        { name: "Achari Paneer Tikka (F)", price: 309, emoji: "🧀", description: "Tangy spiced wonder with perfect char" },
        { name: "Chicken Tikka (H)", price: 276, emoji: "🍗", description: "Charred, juicy and packed with flavor" },
        { name: "Chicken Tikka (F)", price: 459, emoji: "🍗", description: "Charred, juicy and packed with flavor" },
        { name: "Malai Chicken Tikka (H)", price: 298, emoji: "🍗", description: "Creamy marination meets smoky perfection" },
        { name: "Malai Chicken Tikka (F)", price: 494, emoji: "🍗", description: "Creamy marination meets smoky perfection" },
        { name: "Achari Chaap (H)", price: 218, emoji: "🔥", description: "Tangy, spicy and outrageously delicious" },
        { name: "Achari Chaap (F)", price: 321, emoji: "🔥", description: "Tangy, spicy and outrageously delicious" }
    ],
    breads: [
        { name: "Plain Tawa Roti", price: 12, emoji: "🍞", description: "Warm, light and perfect breakfast companion" },
        { name: "Butter Tawa Roti", price: 14, emoji: "🥖", description: "Golden, buttery and irresistibly soft" },
        { name: "Betroot Roti", price: 17, emoji: "🥖", description: "Colorful goodness with nutritious appeal" },
        { name: "Tandoori Roti", price: 17, emoji: "🥖", description: "Blistered, smoky and wonderfully rustic" },
        { name: "Laccha Paratha", price: 46, emoji: "🥞", description: "Layered, flaky and absolutely indulgent" },
        { name: "Butter Naan", price: 40, emoji: "🥐", description: "Soft, fluffy and glazed to perfection" },
        { name: "Plain Naan", price: 35, emoji: "🥐", description: "Classic, pillowy and wonderfully versatile" },
        { name: "Garlic Naan", price: 46, emoji: "🧄", description: "Aromatic, garlicky and utterly irresistible" },
        { name: "Pudina Paratha", price: 52, emoji: "🌿", description: "Fresh, minty and incredibly flavorful" }
    ],
    snacks: [
        { name: "Payaz Pakode", price: 119, emoji: "🧅", description: "Crispy, golden and bursting with aroma" }
    ],
    riceBiryani: [
        { name: "Steam Rice (Half)", price: 70, emoji: "🍚", description: "Fluffy, fragrant and perfectly cooked" },
        { name: "Steam Rice (Full)", price: 110, emoji: "🍚", description: "Fluffy, fragrant and perfectly cooked" },
        { name: "Jeera Rice (Half)", price: 80, emoji: "🍚", description: "Fragrant, aromatic and absolutely delightful" },
        { name: "Jeera Rice (Full)", price: 120, emoji: "🍚", description: "Fragrant, aromatic and absolutely delightful" },
        { name: "Matar Pulao", price: 129, emoji: "🌾", description: "Festive, flavorful and utterly comforting" },
        { name: "Veg Biryani (Half)", price: 189, emoji: "🍲", description: "Royal feast with tantalizing aromas" },
        { name: "Veg Biryani (Full)", price: 249, emoji: "🍲", description: "Royal feast with tantalizing aromas" },
        { name: "Chicken Biryani (Half)", price: 199, emoji: "🍗", description: "Legendary one-pot magic with premium taste" },
        { name: "Chicken Biryani (Full)", price: 279, emoji: "🍗", description: "Legendary one-pot magic with premium taste" },
        { name: "Egg Biryani (Half)", price: 199, emoji: "🥚", description: "Aromatic, layered and deeply satisfying" },
        { name: "Egg Biryani (Full)", price: 279, emoji: "🥚", description: "Aromatic, layered and deeply satisfying" },
        { name: "Veg Fried Rice", price: 150, emoji: "🥬", description: "Wok-tossed perfection with garden freshness" },
        { name: "Egg Fried Rice", price: 160, emoji: "🥚", description: "Fluffy, savory and incredibly satisfying" },
        { name: "Chicken Fried Rice", price: 170, emoji: "🍗", description: "Restaurant-quality with perfect char kiss" },
        { name: "Egg Chicken Fried Rice", price: 180, emoji: "🍲", description: "Double protein delight packed with flavor" },
        { name: "Schezwan Fried Rice", price: 189, emoji: "🌶️", description: "Fiery, bold and tantalizing to the taste buds" }
    ],
    noodles: [
        { name: "Veg Chilli Garlic", price: 160, emoji: "🍜", description: "Wok-tossed with spicy, garlicky brilliance" },
        { name: "Veg Singapuri", price: 170, emoji: "🍜", description: "Spicy, tangy and absolutely unforgettable" },
        { name: "Veg Hakka", price: 150, emoji: "🍜", description: "Bold, smoky and incredibly flavorful" },
        { name: "Chicken Chilli Garlic", price: 190, emoji: "🍜", description: "Spicy chicken noodle sensation" },
        { name: "Chicken Singapuri", price: 199, emoji: "🍜", description: "Spicy, aromatic chicken bliss" },
        { name: "Chicken Hakka", price: 180, emoji: "🍜", description: "Bold spiced chicken noodle delight" }
    ],
    combos: [
        { name: "Veg Thali", price: 150, emoji: "🍛", description: "Complete vegetarian feast at great value" },
        { name: "Paneer Thali", price: 180, emoji: "🧀", description: "Premium paneer experience with all fixings" },
        { name: "Spcl Thali", price: 210, emoji: "🍽️", description: "The ultimate special experience, house favorite" },
        { name: "Chicken Thali", price: 190, emoji: "🍗", description: "Premium chicken served complete and satisfying" },
        { name: "Egg Curry Thali", price: 180, emoji: "🥚", description: "Breakfast perfection served as complete meal" },
        { name: "Butter Chicken Thali", price: 200, emoji: "🍗", description: "The classic favorite served in style" },
        { name: "Dal Makhni Rice", price: 160, emoji: "🍚", description: "Creamy lentils with fluffy rice bliss" },
        { name: "Rajma Rice", price: 150, emoji: "🍚", description: "Hearty beans with perfectly cooked rice" },
        { name: "Chole Rice", price: 150, emoji: "🍚", description: "Aromatic chickpeas with fluffy rice" },
        { name: "Kaddi Rice", price: 150, emoji: "🍚", description: "Tangy delight paired with fragrant rice" }
    ],
    crazy: [
        { name: "Chilli Chicken (Q)", price: 299, emoji: "🌶️", description: "Fiery, crispy and completely addictive" },
        { name: "Chilli Chicken (F)", price: 344, emoji: "🌶️", description: "Fiery, crispy and completely addictive" },
        { name: "Chilli Paneer (Q)", price: 289, emoji: "🧀", description: "Spicy paneer bliss with incredible kick" },
        { name: "Chilli Paneer (F)", price: 332, emoji: "🧀", description: "Spicy paneer bliss with incredible kick" },
        { name: "Chilli Mushroom (Q)", price: 279, emoji: "🍄", description: "Veggie spice bomb with meaty texture" },
        { name: "Chilli Mushroom (F)", price: 321, emoji: "🍄", description: "Veggie spice bomb with meaty texture" },
        { name: "Chilli Potato", price: 199, emoji: "🥔", description: "Crispy potato sensation with spicy glory" },
        { name: "Honey Chilli Potato", price: 199, emoji: "🍯", description: "Sweet spice harmony in every golden bite" }
    ],
    extras: [
        { name: "Boondi Raita (S)", price: 58, emoji: "🥣", description: "Cool, creamy and refreshingly tangy" },
        { name: "Boondi Raita (L)", price: 92, emoji: "🥣", description: "Cool, creamy and refreshingly tangy" },
        { name: "Mix Raita", price: 115, emoji: "🥣", description: "Cooling yogurt medley with fresh vibes" },
        { name: "Gulab Jamun (3pcs)", price: 46, emoji: "🍮", description: "Soft, soaked and heartwarming dessert" }
    ],
    puriBhature: [
        { name: "Puri Sabji", price: 150, emoji: "🥘", description: "Fluffy puri with aromatic vegetable magic" },
        { name: "Puri Chole", price: 150, emoji: "🥘", description: "Crispy puri paired with tangy chickpea bliss" },
        { name: "Chole Bhature", price: 150, emoji: "🥘", description: "Giant fluffy bhature meets spicy chickpeas" },
        { name: "Veg Macaroni", price: 130, emoji: "🍝", description: "Creamy, cheesy and absolutely comforting" }
    ],
    parathas: [
        { name: "Aloo Payaz Paratha", price: 60, emoji: "🥞", description: "Flaky perfection with sweet onion magic" },
        { name: "Paneer Payaz Paratha", price: 70, emoji: "🧀", description: "Cheesy, flaky and utterly luxurious" },
        { name: "Gobhi Payaz Paratha", price: 70, emoji: "🥬", description: "Vegetable filled layers of pure joy" },
        { name: "Mix Paratha", price: 75, emoji: "🥞", description: "Medley of flavors in every flaky layer" },
        { name: "Chicken Paratha", price: 130, emoji: "🍗", description: "Tender chicken wrapped in soft, flaky bread" },
        { name: "Sattu Paratha", price: 90, emoji: "🥞", description: "Earthy, nutty and incredibly satisfying" },
        { name: "Egg Paratha", price: 70, emoji: "🥚", description: "Soft paratha infused with scrambled goodness" }
    ]
};

// create categorized menu views for filter buttons
menuData.mainCourse = [...menuData.vegetarian, ...menuData.nonVeg];
menuData.tandoor = menuData.nonVeg.filter(item => /tandoori|chaap|tikka|paneer tikka|mushroom tikka/i.test(item.name));
menuData.chinese = [...menuData.noodles, ...menuData.crazy];
menuData.appetizers = menuData.snacks;
menuData.rice = menuData.riceBiryani;
menuData.parathas = menuData.parathas;
menuData.breads = menuData.breads;
menuData.combos = menuData.combos;

// ====== DELIVERY FEE SETTINGS ====== 
const DELIVERY_FEE = 0;
const WHATSAPP_NUMBER = "918595044056";
const BESTSELLERS = {
    vegetarian: ["Dal Makhani", "Paneer Tikka Masala"],
    nonVeg: ["Tawa Chicken", "Kadhai Chicken"]
};

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

// Handle back button for closing modals
window.addEventListener('popstate', (event) => {
    // Close whatever modal is currently open
    const itemModalOpen = document.getElementById('itemModal').classList.contains('open');
    const checkoutModalOpen = document.getElementById('checkoutModal').classList.contains('open');
    
    if (itemModalOpen) {
        closeItemModalInternal();
    } else if (checkoutModalOpen) {
        closeCheckoutInternal();
    }
});

// Try image fallbacks: webp -> png -> jpg -> jpeg. Hides image and shows emoji fallback if none load.
function tryNextImage(img) {
    const exts = ['.webp', '.png', '.jpg', '.jpeg'];
    const base = img.dataset.base;
    let attempt = parseInt(img.dataset.attempt || '0', 10);

    if (isNaN(attempt)) attempt = 0;

    // If current src failed, advance to next extension
    attempt += 1;
    if (attempt < exts.length) {
        img.dataset.attempt = attempt;
        img.src = base + exts[attempt];
    } else {
        // No more fallbacks - hide image and show emoji
        img.style.display = 'none';
        const fallback = img.parentNode.querySelector('.emoji-fallback');
        if (fallback) fallback.style.display = 'flex';
    }
}

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
    const match = name.match(/\((Q|H|F|S|L)\)$/i);
    if (!match) return null;
    const code = match[1].toUpperCase();
    if (code === 'Q') return 'Quarter';
    if (code === 'H') return 'Half';
    if (code === 'F') return 'Full';
    if (code === 'S') return 'Small';
    if (code === 'L') return 'Large';
    return null;
}

function getBaseName(name) {
    return name.replace(/\s*\((Q|H|F|S|L)\)$/i, '').trim();
}

function renderMenuGrid() {
    const container = document.getElementById('menuGrid');

    // Sort items: bestsellers first, then others
    const items = Object.keys(groupedMenu);
    const bestsellersFirst = items.sort((a, b) => {
        const aIsBestseller = BESTSELLERS.vegetarian.includes(a) || BESTSELLERS.nonVeg.includes(a);
        const bIsBestseller = BESTSELLERS.vegetarian.includes(b) || BESTSELLERS.nonVeg.includes(b);
        if (aIsBestseller && !bIsBestseller) return -1;
        if (!aIsBestseller && bIsBestseller) return 1;
        return 0;
    });

    container.innerHTML = bestsellersFirst.map(baseName => {
        const group = groupedMenu[baseName];
        const variants = Object.entries(group.variants);
        const startingPrice = Math.min(...variants.map(([_, v]) => v.price));
        // derive a simple slug to look for an image file in /images
        const slug = baseName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
        const imageBase = `images/${slug}`; // no extension, we'll try webp/png/jpg
        
        // Check if this is a bestseller
        const isBestseller = BESTSELLERS.vegetarian.includes(baseName) || BESTSELLERS.nonVeg.includes(baseName);
        const bestsellBadge = isBestseller ? '<div class="bestseller-badge">⭐ BESTSELLER</div>' : '';

        return `
            <div class="menu-card" onclick="openItemModal('${baseName}')">
                ${bestsellBadge}
                <div class="menu-card-image">
                    <img src="${imageBase}.webp" data-base="${imageBase}" data-attempt="0" alt="${baseName}" loading="lazy" onerror="tryNextImage(this)">
                        <div class="emoji-fallback" style="display:none">${group.emoji}</div>
                </div>
                <div class="menu-card-body">
                    <h3 class="menu-card-name">${baseName}</h3>
                    <p class="menu-card-desc">${group.description}</p>
                    <p class="menu-card-advanced">Starts at ₹${startingPrice}</p>

                    <div class="menu-card-footer">
                        <span class="menu-card-price">₹${startingPrice}</span>
                        <button class="btn-add-cart" onclick="event.stopPropagation(); openItemModal('${baseName}')">ADD +</button>
                    </div>
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

    // Generate image slug for modal (same pattern as menu cards)
    const slug = baseName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
    const imageBase = `images/${slug}`;

    const modal = document.getElementById('itemModal');
    const modalContent = `
        <div class="modal-card-image">
            <img src="${imageBase}.webp" data-base="${imageBase}" data-attempt="0" alt="${baseName}" onerror="tryNextImage(this)">
            <div class="emoji-fallback" style="display:none">${item.emoji}</div>
        </div>
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
    
    // Add to browser history to handle back button
    window.history.pushState({ modal: 'item', item: baseName }, '', window.location.href);
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

// Helper to close item modal UI without history manipulation (used by popstate handler)
function closeItemModalInternal() {
    document.getElementById('itemModalOverlay').classList.remove('open');
    document.getElementById('itemModal').classList.remove('open');
    document.body.style.overflow = 'auto';
    currentModalItem = null;
}

function closeItemModal() {
    closeItemModalInternal();
}


function filterMenu(category) {
    activeFilter = category;
    
    // Smooth transition animation
    const container = document.getElementById('menuGrid');
    container.style.animation = 'none';
    setTimeout(() => {
        container.style.animation = 'fadeTransition 0.3s ease';
    }, 10);
    
    updateFilterActiveButton(category);
    updateFilteredMenu();
    
    // Show today's special when filtering by category (not searching)
    const todaySpecial = document.querySelector('.today-special');
    if (todaySpecial) todaySpecial.style.display = 'block';
    
    renderMenuGrid();
    
    // Scroll to menu on mobile
    if (window.innerWidth <= 768) {
        scrollToMenu();
    }
}

function scrollToMenu() {
    const menuSection = document.querySelector('.menu-section');
    if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
    
    // Add to browser history to handle back button
    window.history.pushState({ modal: 'checkout' }, '', window.location.href);
    
    // Focus on first input for better UX - disabled for mobile
    // setTimeout(() => {
    //     document.getElementById('customerName').focus();
    // }, 100);
}

// Helper to close checkout modal UI without history manipulation (used by popstate handler)
function closeCheckoutInternal() {
    document.getElementById('checkoutModal').classList.remove('open');
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = 'auto';
    clearCheckoutForm();
}

function closeCheckout() {
    closeCheckoutInternal();
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
        // Trigger confetti burst 🎉
        triggerConfetti();
        
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

// ====== CONFETTI BURST ====== 
function triggerConfetti() {
    const confettiCount = 60;
    for (let i = 0; i < confettiCount; i++) {
        createConfetti();
    }
}

function createConfetti() {
    const confetti = document.createElement('div');
    const colors = ['#e03546', '#ff6b35', '#ff8c42', '#FFD700', '#FFA500', '#FF69B4'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomDelay = Math.random() * 0.2;
    
    confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${randomColor};
        left: ${Math.random() * 100}vw;
        top: -10px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        animation: confettiFall ${2 + Math.random() * 1}s ease-in forwards;
        animation-delay: ${randomDelay}s;
        opacity: 0.9;
    `;
    
    // Add animation if not already in stylesheet
    if (!document.querySelector('style[data-confetti]')) {
        const style = document.createElement('style');
        style.setAttribute('data-confetti', 'true');
        style.textContent = `
            @keyframes confettiFall {
                to {
                    transform: translateY(${window.innerHeight + 20}px) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
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
            // Clear search input when filtering by category
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.value = '';
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
    const todaySpecial = document.querySelector('.today-special');
    
    if (!query) {
        // Clear search - show today's special and all items
        if (todaySpecial) todaySpecial.style.display = 'block';
        updateFilteredMenu();
        renderMenuGrid();
        return;
    }

    // Hide today's special when searching
    if (todaySpecial) todaySpecial.style.display = 'none';

    // Search across ALL menu categories
    const allItems = [
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

    filteredMenu = allItems.filter(item => 
        item.name.toLowerCase().includes(query) || 
        (item.description && item.description.toLowerCase().includes(query))
    );

    // Group the filtered results the same way as the menu
    groupedMenu = {};
    filteredMenu.forEach(item => {
        const baseName = getBaseName(item.name);
        if (!groupedMenu[baseName]) {
            groupedMenu[baseName] = { emoji: item.emoji || '🍽️', description: item.description || 'Delicious homemade item', variants: {} };
        }

        const variant = getSizeFromName(item.name) || 'Full';
        groupedMenu[baseName].variants[variant] = { price: item.price, emoji: item.emoji || groupedMenu[baseName].emoji };
    });

    renderMenuGrid();
}
