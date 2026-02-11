// VARIABLE SCOPE
const smagKnap = document.querySelector('#vis-smage-btn');
const smagWrapper = document.querySelector('#smag-wrapper');
const smagOutput = document.querySelector('#smag-output');

// Boolean til at styre om listen er bygget
let erSmageGenereret = false;

// ARRAY AF OBJEKTER
const isSmage = [
    { navn: "Gammeldags Vanilje", pris: 20, vegansk: false },
    { navn: "Mørk Chokolade", pris: 24, vegansk: true },
    { navn: "Bornholmsk Jordbær", pris: 24, vegansk: false },
    { navn: "Havtorn Sorbet", pris: 20, vegansk: true },
];

// FUNKTION TIL BEREGNING
function beregnMomsAfPris(pris) {
    return pris * 0.25; // Returnerer momsen (25%)
}

// HOVEDFUNKTION
const toggleSmage = () => {
    
    // KONTROLSTRUKTUR: Byg kun listen hvis den ikke findes 
    if (erSmageGenereret === false) {
        let listeHTML = "<ul class='smag-liste'>";
        let totalMoms = 0;

        // LOOP: Gennemløber arrayet
        for (let i = 0; i < isSmage.length; i++) {
            let smag = isSmage[i];
            let moms = beregnMomsAfPris(smag.pris);
            let totalPris = smag.pris + moms;
            
            // Logik: Tilføj et mærke hvis smagen er vegansk
            let veganskTag = smag.vegansk === true ? " (Vegansk)" : "";

            listeHTML += "<li class='smag-item'>" + 
                            "<strong>" + smag.navn + veganskTag + "</strong>" + 
                            "<span>" + totalPris + " kr.</span>" + 
                         "</li>";
        }

        listeHTML += "</ul>";
        listeHTML += "<p class='moms-info'>Priserne er inkl. moms</p>";
        
        smagOutput.innerHTML = listeHTML; // DOM Manipulation 
        erSmageGenereret = true; 
    }

    // TOGGLE: Skifter klassen for at køre CSS-animationen
    smagWrapper.classList.toggle('aaben');
};

// EVENT LISTENER: Lytter efter klik
smagKnap.addEventListener('click', toggleSmage);