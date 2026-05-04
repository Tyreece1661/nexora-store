const dynamiccomProducts = [
    { id: 101, name: "Plaud AI Note Pro", category: "AI Recorders", price: 4104, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Plaud-Note-Pro-fixed.webp", description: "Professional AI voice recorder with real-time transcription and summarisation. Records meetings, interviews and notes with exceptional clarity." },
    { id: 102, name: "Plaud AI Note", category: "AI Recorders", price: 2940, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Plaud-Note-fixed.webp", description: "Compact AI voice recorder that captures, transcribes and summarises your conversations automatically. Perfect for professionals on the go." },
    { id: 103, name: "Plaud AI NotePin S", category: "AI Recorders", price: 3150, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Plaud-NotePin-S-fixed.webp", description: "Wearable AI recorder pin that discreetly captures meetings and conversations with intelligent transcription." },
    { id: 104, name: "Boya Notra", category: "AI Recorders", price: 2508, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Boya-Notra-fixed.webp", description: "AI-powered voice recorder and transcriber with multi-language support and smart meeting summaries." },
    { id: 105, name: "Plaud Notepin Wristband", category: "AI Recorders", price: 273, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Plaud-Notepin-Wristband.webp", description: "Stylish wristband accessory for the Plaud Notepin wearable AI recorder." },
    { id: 106, name: "Kandao Meeting Pro", category: "AI Cameras", price: 15228, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Kandao-Meeting-Pro-fixed.webp", description: "Professional 360-degree AI video conferencing camera with auto-framing and noise-cancelling microphones." },
    { id: 107, name: "Obsbot Tiny SE", category: "AI Cameras", price: 1842, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Obsbot-Tiny-SE-fixed.webp", description: "AI-powered PTZ webcam with auto-tracking and gesture control for seamless video calls." },
    { id: 108, name: "Meeting Owl 3", category: "AI Cameras", price: 21907, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Meeting-Owl-3-fixed.webp", description: "360-degree 1080p video conferencing camera with AI speaker tracking and 8-mic array for hybrid meetings." },
    { id: 109, name: "OBSBOT Tiny 2", category: "AI Cameras", price: 4777, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/OBSBOT-Tiny-2-fixed.webp", description: "4K AI PTZ webcam with auto-framing, gesture control, and AI tracking for professional streaming and meetings." },
    { id: 110, name: "Meeting Owl 4+", category: "AI Cameras", price: 39414, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Meeting-Owl-4-fixed.webp", description: "Next-generation 4K 360-degree AI conferencing camera with enhanced speaker tracking and premium audio." },
    { id: 111, name: "Obsbot Meet 2", category: "AI Cameras", price: 2008, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Obsbot-Meet-2-fixed.webp", description: "AI-powered 4K webcam with auto-framing and low-light correction for professional video conferencing." },
    { id: 112, name: "Obsbot Meet 2 SE", category: "AI Cameras", price: 1315, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Obsbot-Meet-2-SE-fixed.webp", description: "Budget-friendly AI webcam with auto-framing and noise reduction for everyday meetings." },
    { id: 113, name: "OBSBOT Tail 2", category: "AI Cameras", price: 20892, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/OBSBOT-Tail-2-front.webp", description: "AI-powered 4K PTZ camera with auto-tracking, designed for professional streaming and large conference rooms." },
    { id: 114, name: "OBSBOT Tail Air Smart Remote", category: "AI Cameras", price: 1283, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/OBSBOT-Tail-Air-Remote.webp", description: "Wireless smart remote controller for OBSBOT Tail Air PTZ camera." },
    { id: 115, name: "OBSBOT Tail Air", category: "AI Cameras", price: 7996, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/OBSBOT-Tail-Air-front.webp", description: "AI-powered 4K PTZ camera with auto-tracking and gesture control for live streaming and conferencing." },
    { id: 116, name: "OBSBOT Tiny 3", category: "AI Cameras", price: 8198, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/OBSBOT-Tiny-3-front.webp", description: "Latest 4K AI PTZ webcam with enhanced tracking, auto-framing and premium optics for professional use." },
    { id: 117, name: "OBSBOT Tiny 2 Lite", category: "AI Cameras", price: 2700, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/OBSBOT-Tiny-2-Lite.webp", description: "Affordable 4K AI PTZ webcam with auto-framing and tracking for everyday professional use." },
    { id: 118, name: "Obsbot Tiny 2 Smart Remote", category: "AI Cameras", price: 788, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/OBSBOT-Tiny-2-Remote.webp", description: "Smart remote control for OBSBOT Tiny 2 webcam with one-touch framing and preset controls." },
    { id: 119, name: "Obsbot Vox Wireless Microphone", category: "AI Cameras", price: 1764, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Obsbot-Vox-Mic.webp", description: "Professional wireless microphone system designed for OBSBOT cameras and video production." },
    { id: 120, name: "Kandao Meeting Ultra Standard", category: "AI Cameras", price: 25920, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Kandao-Meeting-Ultra.webp", description: "Premium 4K 360-degree video conferencing camera with AI capabilities for enterprise meeting rooms." },
    { id: 121, name: "Meeting Owl Expansion Mic", category: "AI Cameras", price: 5067, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Meeting-Owl-Expansion-Mic.webp", description: "Expansion microphone for Meeting Owl 3 to extend audio pickup range for larger rooms." },
    { id: 122, name: "Meeting Owl Hard Travel Case", category: "AI Cameras", price: 4983, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Meeting-Owl-Case.webp", description: "Protective hard-sided carry case for Meeting Owl 3 and 4 devices." },
    { id: 133, name: "Rokid AI Smart Glasses", category: "AR/AI Glasses", price: 9990, image: "https://dynamiccom.co.za/wp-content/uploads/2026/03/Rokid-AI-Smart-Glasses-fixed.webp", description: "AI-powered AR smart glasses with heads-up display, voice assistant and spatial computing capabilities." },
    { id: 134, name: "Rokid AR Spatial", category: "AR/AI Glasses", price: 11286, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Rokid-AR-Spatial.webp", description: "Premium AR spatial computing glasses with immersive display for productivity and entertainment." },
    { id: 135, name: "Rokid Station 2", category: "AR/AI Glasses", price: 4293, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Rokid-Station-2.webp", description: "Companion device for Rokid AR glasses with processing power and wireless connectivity." },
    { id: 136, name: "Rokid Max 2", category: "AR/AI Glasses", price: 8343, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Rokid-Max-2.webp", description: "Second-generation AR display glasses with enhanced optics and comfort for extended use." },
    { id: 137, name: "Rokid AI Glasses Prescription Frame", category: "AR/AI Glasses", price: 420, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Rokid-Prescription-Frame.webp", description: "Prescription lens frame compatible with Rokid AI smart glasses." },
    { id: 138, name: "Rokid AI Glasses Charging Case", category: "AR/AI Glasses", price: 1701, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Rokid-Charging-Case.webp", description: "Portable charging case for Rokid AI glasses with extended battery life on the go." },
    { id: 139, name: "Espresso Display", category: "Portable Displays", price: 5914, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Espresso-Display.webp", description: "Ultra-slim portable touch monitor with stand. Perfect second screen for professionals." },
    { id: 140, name: "Espresso Display Pro", category: "Portable Displays", price: 13164, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Espresso-Display-Pro.webp", description: "Professional-grade portable 4K touch display with premium build and versatile connectivity." },
    { id: 141, name: "Espresso Creator", category: "Portable Displays", price: 643, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Espresso-Creator.webp", description: "Portable display solution for content creators with colour accuracy and touch support." },
    { id: 142, name: "EspressoPen", category: "Portable Displays", price: 1160, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/EspressoPen.webp", description: "Precision stylus pen for Espresso Display touch screens with palm rejection." },
    { id: 143, name: "Airtame 3 Hybrid", category: "Wireless Conferencing", price: 26291, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Airtame-3-Hybrid.webp", description: "Enterprise wireless presentation system with hybrid meeting support and 4K streaming." },
    { id: 144, name: "Virtual Airtame", category: "Wireless Conferencing", price: 2486, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Virtual-Airtame.webp", description: "Software-based wireless presentation solution for Windows and Android devices." },
    { id: 145, name: "NowSignage - Monthly", category: "Digital Signage", price: 99, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/NowSignage.webp", description: "Cloud-based digital signage content management platform. Monthly subscription per screen." },
    { id: 146, name: "Hikvision Wall Mount Displays", category: "Digital Signage", price: 7999, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Hikvision-Wall-Display.webp", description: "Professional wall-mount digital signage displays in various sizes for retail and corporate." },
    { id: 147, name: "Retail Stretch Displays", category: "Digital Signage", price: 8034, image: "https://dynamiccom.co.za/wp-content/uploads/xstore/xstore-placeholder-150x150.png", description: "Unique stretched digital signage displays for retail shelves and advertising spaces." },
    { id: 148, name: "Electronic Shelf Labels", category: "Digital Signage", price: 262, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/ESL-Labels.webp", description: "E-ink electronic pricing labels for retail with wireless gateway connectivity." },
    { id: 149, name: "Electronic Label Gateway", category: "Digital Signage", price: 4320, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/ESL-Gateway.webp", description: "2.4GHz gateway hub for managing networks of electronic shelf labels." },
    { id: 152, name: "Hikvision EL Interactive Display", category: "Smart Displays", price: 28813, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Hikvision-EL-Display.webp", description: "Enterprise interactive whiteboard display with touch annotation and wireless presentation." },
    { id: 153, name: "Hikvision Interactive (w/camera)", category: "Smart Displays", price: 48479, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Hikvision-Interactive-Camera.webp", description: "Interactive display with built-in tracking camera for video conferencing and collaboration." },
    { id: 154, name: "Hikvision Interactive (no/camera)", category: "Smart Displays", price: 39893, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Hikvision-Interactive.webp", description: "Interactive display without camera for presentations and collaborative workspaces." },
    { id: 155, name: "Boox Note Air5C Tablet", category: "E-Ink Tablets", price: 9692, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Boox-Note-Air5C.webp", description: "Colour E-Ink writing tablet with stylus support for note-taking and reading." },
    { id: 156, name: "Boox Go 10.3", category: "E-Ink Tablets", price: 7809, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Boox-Go-10-3.webp", description: "10.3-inch E-Ink tablet for reading, writing and document annotation with long battery life." },
    { id: 157, name: "BOOX Go 6 E-Ink Reader", category: "E-Ink Tablets", price: 3214, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Boox-Go-6.webp", description: "Compact 6-inch E-Ink reader for books and documents with lightweight design." },
    { id: 158, name: "Boox Go Colour 7 Gen II", category: "E-Ink Tablets", price: 5621, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Boox-Go-Colour-7.webp", description: "7-inch colour E-Ink tablet with stylus for vibrant note-taking and reading." },
    { id: 166, name: "Potensic Atom 2", category: "Photography Drones", price: 8640, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Potensic-Atom-2.webp", description: "4K photography drone with gimbal stabilisation, GPS and intelligent flight modes." },
    { id: 167, name: "Kandao Obsidan R/S", category: "360/3D Cameras", price: 77143, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Kandao-Obsidan.webp", description: "Professional 360-degree cinema camera for immersive VR content production." },
    { id: 168, name: "Kandao Obsidian Pro 8T SSD", category: "360/3D Cameras", price: 581143, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Kandao-Obsidian-Pro.webp", description: "Ultra-high-end 360-degree professional cinema camera with 8T SSD for massive storage." },
    { id: 169, name: "Kandao Qoocam 3 Battery", category: "360/3D Cameras", price: 486, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Qoocam-3-Battery.webp", description: "Replacement battery for Kandao Qoocam 3 360-degree camera." },
    { id: 170, name: "Kandao Qoocam Ego", category: "360/3D Cameras", price: 389, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Qoocam-Ego.webp", description: "Compact 360-degree camera for immersive content creation and virtual tours." },
    { id: 171, name: "Powerness Portable Powerstation", category: "Power Stations", price: 16667, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Powerness-Powerstation.webp", description: "High-capacity portable power station for outdoor events, field work and emergency backup." },
    { id: 126, name: "BOYA BY-M1", category: "AI Microphones", price: 237, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/BOYA-BY-M1.webp", description: "Professional lavalier microphone for smartphones, cameras and DSLRs. Omnidirectional pickup." },
    { id: 127, name: "BOYA K3", category: "AI Microphones", price: 591, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/BOYA-K3.webp", description: "USB condenser microphone with cardioid pickup pattern for podcasting and streaming." },
    { id: 128, name: "BOYA V Omni", category: "AI Microphones", price: 503, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/BOYA-V-Omni.webp", description: "Omnidirectional lavalier microphone with Lightning/USB-C connectivity for mobile recording." },
    { id: 129, name: "BOYA BOYALink 3", category: "AI Microphones", price: 2277, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/BOYA-BOYALink-3.webp", description: "Dual-channel wireless lavalier microphone system with compact receiver and AI noise reduction." },
    { id: 130, name: "BOYA Magic Mini", category: "AI Microphones", price: 1218, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/BOYA-Magic-Mini.webp", description: "Transformable wireless microphone with multiple pickup patterns for versatile recording." },
    { id: 131, name: "BOYA Mini", category: "AI Microphones", price: 414, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/BOYA-Mini.webp", description: "Ultra-compact wireless lavalier microphone for smartphones with Lightning/USB-C connector." },
    { id: 132, name: "BOYA Mini 2", category: "AI Microphones", price: 651, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/BOYA-Mini-2.webp", description: "Second-generation compact wireless microphone with improved range and battery life." },
    { id: 150, name: "Hikvision OPS Module", category: "Digital Signage", price: 17733, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Hikvision-OPS.webp", description: "Open Pluggable Specification compute module for Hikvision interactive displays." },
    { id: 151, name: "Amino Orchestrate", category: "Digital Signage", price: 518, image: "https://dynamiccom.co.za/wp-content/uploads/2026/04/Amino-Orchestrate.webp", description: "Cloud management platform for digital signage networks with content scheduling." }
];

const dynamiccomVideos = [
    { id: "k82ATg1uLlg", title: "Meeting Owl 3 — 360 Video Conferencing Demo", description: "Official Owl Labs demo showing the Meeting Owl 3's 360-degree AI speaker tracking for hybrid meetings." },
    { id: "7hd1CRL4u_U", title: "Meeting Owl Tripod Stand — Quick Setup", description: "Dynamiccom MEA shows the adjustable tripod stand for Meeting Owl 3 and 4+ conference cameras." },
    { id: "GLI4TyX4tWg", title: "OBSBOT Tiny 3 — Ultimate AI Webcam", description: "OBSBOT Tiny 3 overview: 4K AI tracking, spatial audio, gesture control for professional video calls." },
    { id: "ApSp9Ee5vaU", title: "Rokid Glasses — Live Translation at CES 2025", description: "Real-time language translation demo with Rokid AI glasses breaking language barriers." },
    { id: "1u8qNhSJdFg", title: "Rokid AI Smart Glasses — Full Review", description: "ShortCircuit unboxes and reviews Rokid AI smart glasses with display, camera and ChatGPT integration." },
    { id: "mHRJDpZtMtw", title: "Rokid Glasses Review — Smartglasses with Display", description: "Ben's Gadget Reviews tests Rokid smart glasses — translation, scene analysis, camera and ChatGPT." },
    { id: "29SPuSTylY4", title: "Rokid Glass — AI Powered AR for Enterprise", description: "Rokid Enterprise AR glasses with AI assistant, remote assistance, and field service applications." },
    { id: "IlBvIE8PVfE", title: "Go Global with Rokid Glasses — Travel Demo", description: "Creators explore the world with Rokid glasses — capture, translate, navigate and explore." },
    { id: "rR8eFcUw0TQ", title: "Rokid Glasses at CES 2025 — Future of Smart Glasses", description: "Tyriel Wood checks out Rokid's latest smart glasses with Snapdragon AR1, AI, and hidden waveguide screens." }
];

let currentFilter = 'all';
let searchQuery = '';
let generatedImageCache = {};

function getProductImage(product) {
    if (product.image) return product.image;
    const cacheKey = `${product.id}-${product.name}-${product.category}`;
    if (!generatedImageCache[cacheKey]) {
        generatedImageCache[cacheKey] = ProductImageGenerator.generateImage({ name: product.name, category: product.category });
    }
    return generatedImageCache[cacheKey];
}

function renderProductsPage() {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    if (!grid) return;

    let filtered = dynamiccomProducts;

    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilter);
    }

    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
        );
    }

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.classList.add('visible');
        return;
    }

    noResults.classList.remove('visible');

    let html = '';
    filtered.forEach(product => {
        const imgSrc = getProductImage(product);
        html += `
            <div class="product-card fade-in">
                <div class="product-image"><img src="${imgSrc}" alt="${product.name}" loading="lazy"></div>
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

function renderVideos() {
    const grid = document.getElementById('videosGrid');
    if (!grid) return;

    let html = '';
    dynamiccomVideos.forEach(video => {
        html += `
            <div class="video-card fade-in">
                <div class="video-wrapper">
                    <iframe src="https://www.youtube.com/embed/${video.id}" title="${video.title}" allowfullscreen loading="lazy"></iframe>
                </div>
                <div class="video-info">
                    <h4>${video.title}</h4>
                    <p>${video.description}</p>
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
    renderProductsPage();
    renderVideos();
    observeFadeIns();

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.category;
            renderProductsPage();
        });
    });

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderProductsPage();
        });
    }

    const cartToggle = document.getElementById('cartToggle');
    const cartClose = document.getElementById('cartClose');
    const overlay = document.getElementById('overlay');
    const cartSidebar = document.getElementById('cartSidebar');
    const whatsappCheckout = document.getElementById('whatsappCheckout');

    if (cartToggle) cartToggle.addEventListener('click', () => { cartSidebar?.classList.add('open'); overlay?.classList.add('active'); });
    if (cartClose) cartClose.addEventListener('click', () => { cartSidebar?.classList.remove('open'); overlay?.classList.remove('active'); });
    if (overlay) overlay.addEventListener('click', () => { cartSidebar?.classList.remove('open'); overlay?.classList.remove('active'); });
    if (whatsappCheckout) whatsappCheckout.addEventListener('click', checkoutWhatsApp);

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
