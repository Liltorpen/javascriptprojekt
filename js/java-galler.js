// Opretter et array med alle slide-elementerne
const billedArray = Array.from(document.querySelectorAll('.slide'));
let currentSlide = 0;
let autoSlideInterval;

// Håndterer skift af slides, opdaterer index og nulstiller timeren
function changeSlide(direction) {
    stopAutoSlide();

    // Går igennem arrayet med et loop og fjerner den aktive klasse fra alle slides
    billedArray.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Beregner index for det næste slide i rækken
    currentSlide = (currentSlide + direction + billedArray.length) % billedArray.length;

    // Tilføjer den aktive klasse til det valgte slide i arrayet
    billedArray[currentSlide].classList.add('active');

    startAutoSlide();
}

// Starter det automatiske skift af slides med et fast tidsinterval
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

// Stopper det automatiske skift ved at rydde det aktive interval
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Initialiserer slideshowet når siden indlæses
startAutoSlide();