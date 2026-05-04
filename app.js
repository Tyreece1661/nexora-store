const WHATSAPP_NUMBER = '27664752916';

const defaultProducts = [
    { id: 101, name: 'Plaud AI Note Pro', category: 'AI Recorders', price: 4104, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Plaud-Note-Pro-fixed.webp', description: 'Professional AI voice recorder with real-time transcription and summarisation.' },
    { id: 102, name: 'Plaud AI Note', category: 'AI Recorders', price: 2940, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Plaud-Note-fixed.webp', description: 'Compact AI voice recorder that captures, transcribes and summarises conversations.' },
    { id: 103, name: 'Plaud AI NotePin S', category: 'AI Recorders', price: 3150, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Plaud-NotePin-S-fixed.webp', description: 'Wearable AI recorder pin that discreetly captures meetings.' },
    { id: 106, name: 'Kandao Meeting Pro', category: 'AI Cameras', price: 15228, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Kandao-Meeting-Pro-fixed.webp', description: 'Professional 360-degree AI video conferencing camera with auto-framing.' },
    { id: 107, name: 'Kandao Meeting Ultra', category: 'AI Cameras', price: 46980, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Kandao-Meeting-Ultra.webp', description: 'Flagship 360-degree Android-based conferencing system with AI speaker tracking.' },
    { id: 108, name: 'Meeting Owl 3', category: 'AI Cameras', price: 21907, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Meeting-Owl-3-fixed.webp', description: '360-degree 1080p video conferencing camera with AI speaker tracking.' },
    { id: 110, name: 'Meeting Owl 4+', category: 'AI Cameras', price: 39414, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Meeting-Owl-4-fixed.webp', description: 'Next-gen 4K 360-degree AI conferencing camera with enhanced speaker tracking.' },
    { id: 111, name: 'Whiteboard Owl', category: 'AI Cameras', price: 13276, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Whiteboard-Owl.webp', description: 'AI-powered whiteboard capture camera for training rooms and design studios.' },
    { id: 109, name: 'OBSBOT Tiny 2', category: 'AI Cameras', price: 4777, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/OBSBOT-Tiny-2-fixed.webp', description: '4K AI PTZ webcam with auto-framing, gesture control, and AI tracking.' },
    { id: 112, name: 'OBSBOT Tiny 2 Lite', category: 'AI Cameras', price: 2700, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/OBSBOT-Tiny-2-Lite.webp', description: 'Mid-tier AI webcam with auto-framing for home office and hybrid work.' },
    { id: 114, name: 'OBSBOT Tiny SE', category: 'AI Cameras', price: 1842, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/OBSBOT-Tiny-SE.webp', description: 'Entry-level AI webcam with auto-framing for budget-conscious creators.' },
    { id: 116, name: 'OBSBOT Tiny 3', category: 'AI Cameras', price: 8198, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/OBSBOT-Tiny-3-front.webp', description: 'Latest 4K AI PTZ webcam with enhanced tracking and premium optics.' },
    { id: 117, name: 'OBSBOT Meet 2', category: 'AI Cameras', price: 2008, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/OBSBOT-Meet-2.webp', description: 'USB AI webcam for huddle rooms and hot desks with plug-and-play setup.' },
    { id: 118, name: 'OBSBOT Meet 2 SE', category: 'AI Cameras', price: 1315, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/OBSBOT-Meet-2-SE.webp', description: 'Budget USB AI webcam for volume deployments and meeting kit-outs.' },
    { id: 113, name: 'OBSBOT Tail 2', category: 'AI Cameras', price: 20892, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/OBSBOT-Tail-2-front.webp', description: 'AI-powered 4K PTZ camera with auto-tracking for professional streaming.' },
    { id: 115, name: 'OBSBOT Tail Air', category: 'AI Cameras', price: 7996, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/OBSBOT-Tail-Air-front.webp', description: 'AI-powered 4K PTZ camera with auto-tracking and gesture control.' },
    { id: 119, name: 'OBSBOT Talent', category: 'AI Cameras', price: 16707, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/OBSBOT-Talent.webp', description: 'All-in-one streaming kit with camera, mic, and teleprompter for solo creators.' },
    { id: 120, name: 'OBSBOT Vox Wireless Mic', category: 'AI Microphones', price: 1764, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/OBSBOT-Vox.webp', description: 'Wireless lavalier microphone system for video production and interviews.' },
    { id: 133, name: 'Rokid AI Smart Glasses', category: 'AR/AI Glasses', price: 9990, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/03/Rokid-AI-Smart-Glasses-fixed.webp', description: 'AI-powered AR smart glasses with heads-up display and spatial computing.' },
    { id: 134, name: 'Rokid AR Spatial', category: 'AR/AI Glasses', price: 11286, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Rokid-AR-Spatial.webp', description: 'Premium AR spatial computing glasses with immersive display.' },
    { id: 136, name: 'Rokid Max 2', category: 'AR/AI Glasses', price: 8343, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Rokid-Max-2.webp', description: 'Second-gen AR display glasses with enhanced optics and comfort.' },
    { id: 139, name: 'Espresso Display', category: 'Portable Displays', price: 5914, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Espresso-Display.webp', description: 'Ultra-slim portable touch monitor. Perfect second screen for professionals.' },
    { id: 140, name: 'Espresso Display Pro', category: 'Portable Displays', price: 13164, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Espresso-Display-Pro.webp', description: 'Professional-grade portable 4K touch display with premium build.' },
    { id: 141, name: 'Espresso Creator', category: 'Portable Displays', price: 790, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Espresso-Creator.webp', description: 'Entry-level 13-inch portable display with Espresso build quality.' },
    { id: 142, name: 'EspressoPen', category: 'Portable Displays', price: 1159, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/EspressoPen.webp', description: 'Active stylus for Espresso Display Pro models with pressure sensitivity.' },
    { id: 143, name: 'Airtame 3 Hybrid', category: 'Wireless Conferencing', price: 26291, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Airtame-3-Hybrid.webp', description: 'Enterprise wireless presentation system with hybrid meeting support.' },
    { id: 152, name: 'Hikvision EL Interactive Display', category: 'Smart Displays', price: 28813, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Hikvision-EL-Display.webp', description: 'Enterprise interactive whiteboard with touch annotation and wireless presentation.' },
    { id: 153, name: 'Dahua Interactive Display 65"', category: 'Smart Displays', price: 35000, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Dahua-Interactive-Display.webp', description: 'Professional 65-inch 4K interactive display with built-in AI camera for boardrooms.' },
    { id: 155, name: 'Boox Note Air5C Tablet', category: 'E-Ink Tablets', price: 9692, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Boox-Note-Air5C.webp', description: 'Colour E-Ink writing tablet with stylus support for note-taking.' },
    { id: 166, name: 'Potensic Atom 2', category: 'Photography Drones', price: 8640, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Potensic-Atom-2.webp', description: '4K photography drone with gimbal stabilisation and GPS.' },
    { id: 129, name: 'BOYA BOYALink 3', category: 'AI Microphones', price: 2277, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/BOYA-BOYALink-3.webp', description: 'Dual-channel wireless lavalier microphone with AI noise reduction.' },
    { id: 171, name: 'Powerness Powerstation', category: 'Power Stations', price: 16667, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Powerness-Powerstation.webp', description: 'High-capacity portable power station for outdoor events and backup.' },
    { id: 145, name: 'NowSignage - Monthly', category: 'Digital Signage', price: 99, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/NowSignage.webp', description: 'Cloud-based digital signage CMS. Monthly subscription per screen.' },
    { id: 146, name: 'Dahua Shop Window Display 32"', category: 'Digital Signage', price: 18500, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Dahua-Shop-Window.webp', description: 'High-brightness 4K shop window display with 2,500 nits for storefront advertising.' },
    { id: 160, name: 'Kandao QooCam 3', category: '360/3D Cameras', price: 8326, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Kandao-QooCam-3.webp', description: '5.7K 360-degree action camera with AI reframe for content creators.' },
    { id: 161, name: 'Kandao QooCam 3 Ultra', category: '360/3D Cameras', price: 14904, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Kandao-QooCam-3-Ultra.webp', description: '8K 360-degree professional camera with 1-inch sensors for VR content.' },
    { id: 162, name: 'Kandao QooCam EGO', category: '360/3D Cameras', price: 6804, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Kandao-QooCam-EGO.webp', description: 'True stereoscopic 3D camera for 3D photos and video playback.' },
    { id: 163, name: 'Kandao Meeting S', category: 'AI Cameras', price: 11534, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Kandao-Meeting-S.webp', description: 'Compact 360-degree AI conferencing camera for small rooms and huddle spaces.' },
    { id: 164, name: 'Kandao Meeting Ultra Standard', category: 'AI Cameras', price: 25920, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Kandao-Meeting-Ultra-Standard.webp', description: '4K 360-degree conferencing system with Android OS and AI speaker tracking.' },
    { id: 165, name: 'Meeting Owl Bar', category: 'AI Cameras', price: 41336, image: 'https://dynamiccom.co.za/wp-content/uploads/2026/04/Meeting-Owl-Bar.webp', description: 'Front-of-room 4K hybrid conferencing bar with AI framing and audio.' },
];

function getProducts() {
    const stored = localStorage.getItem('nexoraProducts');
    if (stored) return JSON.parse(stored);
    localStorage.setItem('nexoraProducts', JSON.stringify(defaultProducts));
    return defaultProducts;
}

function saveProducts(products) {
    localStorage.setItem('nexoraProducts', JSON.stringify(products));
}

function getCart() {
    const stored = localStorage.getItem('nexoraCart');
    return stored ? JSON.parse(stored) : [];
}

function saveCart(cart) {
    localStorage.setItem('nexoraCart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const cart = getCart();
    const countEl = document.getElementById('cartCount');
    const itemsEl = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');

    if (countEl) {
        countEl.textContent = cart.length;
    }

    if (!itemsEl) return;

    if (cart.length === 0) {
        itemsEl.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
        if (totalEl) totalEl.textContent = 'R0.00';
        return;
    }

    let html = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        html += `
            <div class="cart-item">
                <div class="cart-item-image">
                    ${item.image ? `<img src="${item.image}" alt="${item.name}" onerror="this.style.display='none';this.parentElement.style.background='var(--black)';this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;height:100%;color:var(--gold);font-size:0.85rem;font-weight:700\\'>${item.name.charAt(0)}</div>'">` : '<div style="display:flex;align-items:center;justify-content:center;height:100%;background:var(--black);color:var(--gold);font-size:0.85rem;font-weight:700">' + item.name.charAt(0) + '</div>'}
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">R${item.price.toLocaleString()}</div>
                    <button class="cart-item-remove" onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `;
    });

    itemsEl.innerHTML = html;
    if (totalEl) totalEl.textContent = `R${total.toLocaleString()}`;
}

function addToCart(productId) {
    const products = getProducts();
    const product = products.find(p => p.id === productId);
    if (product) {
        const cart = getCart();
        cart.push(product);
        saveCart(cart);
        openCart();
    }
}

function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
}

function openCart() {
    document.getElementById('cartSidebar')?.classList.add('open');
    document.getElementById('overlay')?.classList.add('active');
}

function closeCart() {
    document.getElementById('cartSidebar')?.classList.remove('open');
    document.getElementById('overlay')?.classList.remove('active');
}

function checkoutWhatsApp() {
    const cart = getCart();
    if (cart.length === 0) return;

    let total = 0;
    let message = 'Hello Nexora! I would like to order:\n\n';

    cart.forEach((item, i) => {
        message += `${i + 1}. ${item.name} - R${item.price.toLocaleString()}\n`;
        total += item.price;
    });

    message += `\nTotal: R${total.toLocaleString()}\n\nPlease confirm availability and payment details.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const products = getProducts();
    let html = '';

    products.forEach(product => {
        const imgHtml = product.image
            ? `<img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;height:100%;background:var(--black);color:var(--gold);font-size:1.5rem;font-weight:700\\'>${product.name.charAt(0)}</div>'">`
            : `<div style="display:flex;align-items:center;justify-content:center;height:100%;background:var(--black);color:var(--gold);font-size:1.5rem;font-weight:700">${product.name.charAt(0)}</div>`;

        html += `
            <div class="product-card fade-in">
                <div class="product-image">${imgHtml}</div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-desc">${product.description}</div>
                    <div class="product-footer">
                        <div class="product-price">R${product.price.toLocaleString()}</div>
                        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
    observeFadeIns();
}

function observeFadeIns() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splashScreen');
    const particlesContainer = document.getElementById('splashParticles');

    if (particlesContainer) {
        for (let i = 0; i < 40; i++) {
            const particle = document.createElement('div');
            particle.className = 'splash-particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 4}s`;
            particle.style.animationDuration = `${3 + Math.random() * 3}s`;
            particle.style.width = `${2 + Math.random() * 3}px`;
            particle.style.height = particle.style.width;
            particlesContainer.appendChild(particle);
        }
    }

    if (splashScreen) {
        setTimeout(() => {
            splashScreen.classList.add('hide');
            document.body.style.overflow = 'auto';
        }, 4000);
        document.body.style.overflow = 'hidden';
    }

    renderProducts();
    updateCartUI();
    observeFadeIns();

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    document.getElementById('mobileMenu')?.addEventListener('click', () => {
        document.querySelector('.nav-links')?.classList.toggle('active');
    });

    document.getElementById('cartToggle')?.addEventListener('click', openCart);
    document.getElementById('cartClose')?.addEventListener('click', closeCart);
    document.getElementById('overlay')?.addEventListener('click', closeCart);
    document.getElementById('whatsappCheckout')?.addEventListener('click', checkoutWhatsApp);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                document.querySelector('.nav-links')?.classList.remove('active');
            }
        });
    });
});
