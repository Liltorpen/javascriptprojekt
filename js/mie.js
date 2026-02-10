// 1. Selektion af elementer (DOM referencer)
const burgerBtn = document.querySelector('#burger-menu');
const sideMenu = document.querySelector('#side-menu');
const menuShade = document.querySelector('#menu-shade');
const closeBtn = document.querySelector('#close-menu');

// 2. Funktion til at styre menuens "state"
const toggleMenu = () => {
    // Vi toggler klassen 'open' på menuen
    const isOpen = sideMenu.classList.toggle('open');
    
    // Vi styrer skyggens synlighed baseret på menuens tilstand
    if (isOpen) {
        menuShade.style.display = 'block';
    } else {
        menuShade.style.display = 'none';
    }
};

// 3. Event Listeners (Interaktion)
burgerBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
menuShade.addEventListener('click', toggleMenu);