// 1. DATA: Et Array af Objekter
const menuItems = [
    { label: 'Historien', link: '#historie' },
    { label: 'Iskort 2026', link: '#smag-sektion' }, 
    { label: 'Åbningstider', link: '#kontakt' },
    { label: 'Kontakt', link: '#kontakt' },
];

// 2. DOM-referencer
const sideMenu = document.querySelector('#side-menu');
const menuShade = document.querySelector('#menu-shade');
const menuContainer = document.querySelector('#menu-container');

// 3. RENDER-FUNKTION (Loops, Template Literals og DOM-manipulation)
const renderMenu = () => {
    if (menuContainer) {
        let menuHTML = ''; 

        menuItems.forEach((item) => {
            menuHTML += `<li><a href="${item.link}">${item.label}</a></li>`;
        });

        menuContainer.innerHTML = menuHTML;
    }
};

// 4. LOGIK (Toggle-mekanisme)
const toggleMenu = () => {
    if (sideMenu && menuShade) {
        const isOpen = sideMenu.classList.toggle('open');
        menuShade.style.display = isOpen ? 'block' : 'none';
    }
};

// 5. EVENT HANDLING (Array og Loop)
const triggers = [
    document.querySelector('#burger-menu'),
    document.querySelector('#close-menu'),
    menuShade
];

// Vi bruger forEach til at tildele click-event til alle knapperne
triggers.forEach(btn => {
    if (btn) { 
        btn.addEventListener('click', toggleMenu);
    }
});

window.addEventListener('scroll', function() {

    const navbar = document.querySelector('.navbar');
    

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Kør funktionen
renderMenu();