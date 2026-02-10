let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
let autoSlideInterval; // Variabel til at holde styr på timeren

function changeSlide(direction) {
    // Stop den nuværende timer, så den ikke forstyrrer
    stopAutoSlide();

    // Fjern 'active' fra nuværende slide
    slides[currentSlide].classList.remove('active');
    
    // Beregn næste slide index
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    // Tilføj 'active' til den nye slide
    slides[currentSlide].classList.add('active');

    // Start timeren forfra
    startAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Start slideshowet første gang
startAutoSlide();