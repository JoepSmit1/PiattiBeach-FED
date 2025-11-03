// JavaScript Document
/* Bron Header; https://codepen.io/shooft/pen/Qwjaojy + hulp van docent */
var deButton = document.querySelector("nav button:nth-of-type(1)");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
deButton.onclick = toggleMenu;

// stap 3: voeg in de functie een class toe aan de nav
function toggleMenu() {  
  // zoekt de nav op
  var deNav = document.querySelector("nav");
  // voeg een class toe aan de nav
  // en verwijder die weer bij nogmaals klikken
  // toggle
  deNav.classList.toggle("toonMenu");
}


// Javascript gekozen element Intersection observer
// Bron Intersection observer: https://blog.webdevsimplified.com/2022-01/intersection-observer/ + hulp van Melissa en Docent

const EigenaarPiatti = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const intersecting = entry.isIntersecting
    
    if (intersecting == true) {
      entry.target.classList.add("is-shown");
    }
  })
})

EigenaarPiatti.observe(document.querySelector("section:nth-of-type(2) img"));