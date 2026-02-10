// 1. DATA: Et Array af Objekter (Centraliseret data)
// Her dækker vi: Datatyper, Arrays og Objekter
const menuItems = [
    { label: 'Åbningstider', link: '#opening' },
    { label: 'Find vej', link: '#map' },
    { label: 'Historien', link: '#history' },
    { label: 'Kontakt', link: '#contact' },
    { label: 'Jobs', link: '#jobs' }, // <--- Her manglede et komma!
    { label: 'IS-KORT 2026', link: '#menu' } 
];

// 2. SELEKTION: DOM-referencer
const sideMenu = document.querySelector('#side-menu');
const menuShade = document.querySelector('#menu-shade');
const menuContainer = document.querySelector('#menu-container');

// 3. RENDER-FUNKTION: Genererer HTML dynamisk
// Her dækker vi: Loops, Template Literals og DOM-manipulation
const renderMenu = () => {
    let menuHTML = ''; // Initialiserer en tom streng

    // Vi bruger forEach (Loop) til at gennemløbe vores Array
    menuItems.forEach((item) => {
        // Vi bruger Template Literals (Backticks) til at bygge HTML-strenge
        menuHTML += `<li><a href="${item.link}">${item.label}</a></li>`;
    });

    // Vi skyder den genererede HTML ind i DOM'en
    menuContainer.innerHTML = menuHTML;
};

// 4. LOGIK-FUNKTION: Toggle-mekanisme
const toggleMenu = () => {
    const isOpen = sideMenu.classList.toggle('open');
    menuShade.style.display = isOpen ? 'block' : 'none';
};

// 5. EVENT HANDLING: Array og Loop
// Her dækker vi: EventListeners og effektiv loop-håndtering
const triggers = [
    document.querySelector('#burger-menu'),
    document.querySelector('#close-menu'),
    menuShade
];

triggers.forEach(btn => btn.addEventListener('click', toggleMenu));

// 6. INITIALISERING: Kør render-funktionen når siden loader
renderMenu();