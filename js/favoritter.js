// 1. VARIABLE SCOPE (Pensum: let og const)
const smagKnap = document.querySelector('#vis-smage-btn');
const smagWrapper = document.querySelector('#smag-wrapper');
const smagOutput = document.querySelector('#smag-output');

// Boolean til at styre om listen er bygget (Datatyper: Boolean)
let erSmageGenereret = false;

// 2. ARRAY AF OBJEKTER (Pensum: Arrays & Objekter)
const isSmage = [
    { navn: "Gammeldags Vanilje", pris: 35, vegansk: false },
    { navn: "Mørk Chokolade", pris: 35, vegansk: true },
    { navn: "Bornholmsk Jordbær", pris: 40, vegansk: false },
    { navn: "Havtorn Sorbet", pris: 40, vegansk: true }
];

// 3. FUNKTION TIL BEREGNING (Pensum: Return statement & Operatorer) 
function beregnMomsAfPris(pris) {
    return pris * 0.25; // Returnerer momsen (25%)
}

// 4. HOVEDFUNKTION (Pensum: Arrow Function)
const toggleSmage = () => {
    
    // 5. KONTROLSTRUKTUR: Byg kun listen hvis den ikke findes (If-else) 
    if (erSmageGenereret === false) {
        let listeHTML = "<ul class='smag-liste'>";
        let totalMoms = 0;

        // 6. LOOP: Gennemløber arrayet (Pensum: For-loop)
        for (let i = 0; i < isSmage.length; i++) {
            let smag = isSmage[i];
            let moms = beregnMomsAfPris(smag.pris);
            
            // Logik: Tilføj et mærke hvis smagen er vegansk (Operator: ===)
            let veganskTag = smag.vegansk === true ? " (Vegansk)" : "";

            listeHTML += "<li class='smag-item'>" + 
                            "<strong>" + smag.navn + veganskTag + "</strong>" + 
                            "<span>" + smag.pris + " kr.</span>" + 
                         "</li>";
        }

        listeHTML += "</ul>";
        listeHTML += "<p class='moms-info'>Priserne er inkl. moms</p>";
        
        smagOutput.innerHTML = listeHTML; // DOM Manipulation 
        erSmageGenereret = true; 
    }

    // 7. TOGGLE: Skifter klassen for at køre CSS-animationen (Pensum: Events)
    smagWrapper.classList.toggle('aaben');
};

// 8. EVENT LISTENER: Lytter efter klik
smagKnap.addEventListener('click', toggleSmage);