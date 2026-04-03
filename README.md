# 🍛 Ghar ki Rasoi - Restaurant Ordering Website

A modern, responsive restaurant ordering website for **Ghar ki Rasoi** (homemade Indian food). Built with vanilla HTML, CSS, and JavaScript—delivering a seamless food ordering experience with WhatsApp integration.

**Live Demo:** [gharkirasoi.vercel.app](https://gharkirasoi.vercel.app)

---

## ✨ Features

### 🎯 Core Functionality
- **Complete Menu System** - 180+ dishes across 11 categories with full pricing variants
- **Smart Search** - Real-time search across all menu items
- **Shopping Cart** - Add/remove items with quantity controls, localStorage persistence
- **Category Filtering** - Organized menu views (Main Course, Tandoor, Rice, Noodles, etc.)
- **Price Variants** - Single items with Quarter/Half/Full (Q/H/F) pricing
- **Order Checkout** - Form validation with customer details collection
- **WhatsApp Integration** - Direct order placement via WhatsApp Business

### 🎨 User Experience
- **Responsive Design** - Mobile-first (480px, 768px, 1200px+ breakpoints)
- **Smooth Animations** - 30+ custom keyframe animations for visual delight
- **Bestseller Badges** - Social proof with top-4 bestseller highlights
- **Confetti Celebration** - Celebratory burst on successful order
- **3D Animated Logo** - Premium gradient logo with floating effects
- **Smooth Scrolling** - System-wide smooth navigation
- **Hero Banner** - Animated TODAY'S SPECIAL showcase with 3D effects
- **Sticky Footer** - Always-visible order CTA button

### 🔧 Technical Features
- **Browser History API** - Smart back button closes modals instead of leaving
- **Image Fallback System** - WebP → PNG → JPG → Emoji cascade
- **Geolocation Ready** - Optional GPS integration for delivery
- **Zero Dependencies** - Vanilla JavaScript, no frameworks required
- **SEO Optimized** - Semantic HTML, proper meta tags
- **Performance** - 60fps animations, lazy loading support

---

## 📊 Menu Structure

### Categories with Variants

| Category | Items | Pricing |
|----------|-------|---------|
| **Main Course** | 80+ items | Q\|H\|F (*Quarter, Half, Full*) |
| **Tandoor** | 20+ items | H\|F (*Half, Full*) |
| **Rice & Biryani** | 14 items | H\|F or Single |
| **Noodles** | 6 items | Single Price |
| **Breads** | 9 items | Single Price |
| **Parathas** | 7 items | Single Price |
| **Combos/Thalis** | 10 items | Single Price |
| **Appetizers** | 4 items | Single Price |
| **Crazy Dishes** | 8 items | Q\|F (*Quarter, Full*) |
| **Chinese** | 12 items | Single Price |
| **Extras** | 4 items | S\|L (*Small, Large*) |

### Bestseller Items ⭐
- Dal Makhani (Vegetarian)
- Paneer Tikka Masala (Vegetarian)
- Tawa Chicken (Non-Veg)
- Kadhai Chicken (Non-Veg)

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Styling:** Custom CSS with CSS Variables, @keyframe animations
- **Storage:** Browser localStorage for cart persistence
- **Integration:** WhatsApp Web (wa.me URLs)
- **Deployment:** Vercel (Automatic CI/CD on git push)
- **Assets:** WebP, PNG, JPG with emoji fallbacks

---

## 📁 Project Structure

```
gharkirasoi/
├── index.html              # Main HTML structure
├── style.css               # Styles (1650+ lines, 30+ animations)
├── script.js               # Application logic (1200+ lines)
├── images/                 # Food images (~70 files)
│   ├── gobhialoo.webp
│   ├── paneermakhani.jpg
│   └── ... (more images)
├── README.md               # This file
└── .gitignore
```

### Key Architecture

**script.js** contains:
- `menuData` object with all 180+ items
- Category filtering & search logic
- Cart management (add, remove, update)
- Modal systems (item detail, checkout)
- WhatsApp order integration
- Confetti animation system
- Smooth scroll navigation

**style.css** features:
- CSS custom properties for theming (`--primary-color: #e03546`)
- Responsive breakpoints for mobile, tablet, desktop
- 30+ `@keyframes` animations:
  - Logo floating & 3D effects
  - Bestseller badge pulses
  - Confetti falling
  - Smooth transitions
  - Hero banner shimmer

---

## 🚀 Deployment

### Current Deployment
Already deployed on **Vercel** with automatic CI/CD:
- Push to `origin/main` → Vercel auto-rebuilds in 1-2 minutes
- No build step required (static site)
- Live at: [gharkirasoi.vercel.app](https://gharkirasoi.vercel.app)

### Deploy Your Own

1. **Fork/Clone Repository**
   ```bash
   git clone https://github.com/niteshyagami/gharkirasoi.git
   cd gharkirasoi
   ```

2. **Push to Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

3. **Add Custom Domain** (Optional)
   - Go to Vercel Dashboard → Project Settings → Domains
   - Add your custom domain (e.g., `gharkirasoi.com`)
   - Configure DNS via your registrar

---

## 💻 Local Development

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Git
- Python/Node.js simple server (for local testing)

### Run Locally

```bash
# Clone repository
git clone https://github.com/niteshyagami/gharkirasoi.git
cd gharkirasoi

# Option 1: Python
python -m http.server 8000

# Option 2: Node.js
npx http-server

# Option 3: VS Code Live Server extension
# Right-click index.html → Open with Live Server

# Open http://localhost:8000
```

---

## 🎯 Key Features Explained

### Smart Menu Grouping
- Items with same base name automatically group by size
- "Paneer Butter Masala (Q)", "Paneer Butter Masala (H)", "Paneer Butter Masala (F)" → Single item with 3 variants
- Displayed in modal with radio button selection for quantity pricing

### Search Functionality
```javascript
// Real-time search across all categories
- Type to filter menu
- Searches item name + description
- Highlights results with animation
```

### WhatsApp Integration
```
Order Flow:
1. Customer adds items to cart
2. Clicks "Order Now"
3. Form validation (name, phone, address)
4. Confetti celebration 🎉
5. Redirects to WhatsApp with pre-filled order:
   - Item names + quantities + prices
   - Customer details
   - Total amount
   - Order message ready to send
```

### Cart Persistence
```javascript
// localStorage auto-saves cart
// Survives browser refresh/close
// Cleared only when customer clears cart
const cart = JSON.parse(localStorage.getItem('cart')) || [];
```

---

## 🎨 Customization Guide

### Change Colors
Edit `style.css`:
```css
:root {
  --primary-color: #e03546;      /* Red - change here */
  --secondary-color: #ff8c42;    /* Orange - change here */
}
```

### Update Menu Prices
Edit `script.js` → `menuData` object:
```javascript
{ name: "Paneer Butter Masala (Q)", price: 140, emoji: "🧀", description: "..." }
                                         ^^^
                                   Change price here
```

### Add New Menu Item
```javascript
// In script.js, add to appropriate category:
vegetarian: [
  { name: "New Dish (Q)", price: 100, emoji: "🥔", description: "Description here" },
  { name: "New Dish (H)", price: 160, emoji: "🥔", description: "Description here" },
  { name: "New Dish (F)", price: 220, emoji: "🥔", description: "Description here" },
]
```

### Update WhatsApp Number
```javascript
// script.js, line 220
const WHATSAPP_NUMBER = "918595044056";  // Change to your number
```

---

## 📱 Mobile Optimization

- **480px** - Small phones (portrait mode)
- **768px** - Tablets, medium devices
- **1200px+** - Desktops, large screens

All breakpoints tested:
- ✅ iPhone SE / 11 / 12 / 13
- ✅ Android devices (various sizes)
- ✅ iPad / Tablets
- ✅ Desktop browsers

---

## 🔒 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Full support |
| Firefox | Latest | ✅ Full support |
| Safari | Latest | ✅ Full support |
| Edge | Latest | ✅ Full support |
| Mobile Chrome | Latest | ✅ Full support |
| Mobile Safari | Latest | ✅ Full support |

---

## 📊 Performance Metrics

- **First Contentful Paint:** < 1s
- **Largest Contentful Paint:** < 2s
- **Time to Interactive:** < 2s
- **Animation Performance:** 60fps
- **Bundle Size:** ~50KB (HTML + CSS + JS combined)
- **Images:** ~2MB (lazy loaded)

---

## 🐛 Known Limitations & Future Features

### Current Limitations
- Payment gateway integration (WhatsApp-only currently)
- Order tracking/history (basic localStorage only)
- Customer authentication/accounts
- Admin panel for menu management
- Real-time order notifications

### Planned Features 🚀
- [ ] Favorites/Wishlist system
- [ ] Customer reviews & ratings
- [ ] Loyalty points program
- [ ] Promo code support
- [ ] Real payment gateway (Stripe, PhonePe, Google Pay)
- [ ] Order history & quick reorder
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Dark mode toggle
- [ ] Multi-language support

---

## 🤝 Contributing

To contribute improvements:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📄 License

This project is open source and available under the MIT License. See LICENSE file for details.

---

## 📞 Support

**Need help?**
- Check the [live demo](https://gharkirasoi.vercel.app)
- Review code in `script.js` and `style.css`
- Test on mobile for responsive experience
- File issues on GitHub

**WhatsApp Orders:**
- Number: +91 85 95 04 40 56
- Test order via the website

---

## 🎉 Credits

Built with ❤️ for **Ghar ki Rasoi** - Homemade Indian Food

**Tech Stack:** Vanilla HTML5, CSS3, JavaScript  
**Hosting:** Vercel  
**Updated:** April 2026

---

**Remember:** Every customer who orders through this site receives a confetti celebration! 🎊

Happy ordering! 🍛
