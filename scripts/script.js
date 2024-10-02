// JavaScript Document
console.log("hi");

/* CodePen Home
FED 24/25 - JS 3-stap - Oefening 2 - responsive 2-buttons hamburger
Bron: https://codepen.io/shooft/pen/VwJXNEg?editors=1100*/

/******************************/
/* menu openen de MENU button */
/******************************/

// zoekt de menu-button
var openButton = document.querySelector("nav:first-of-type > button");

// laat de menu-button luisteren naar kliks
openButton.onclick = openMenu;

// voegd een class toe aan de nav
function openMenu() {  
  var deNav = document.querySelector("nav:nth-of-type(2)");
  deNav.classList.add("toonMenu");
}


/************************************/
/* menu sluiten met de sluit button */
/************************************/

// zoekt sluiten button op
var sluitButton = document.querySelector("nav:nth-of-type(2) button");

// laat de button luisteren naar kliks
sluitButton.onclick = sluitMenu;

// verwijderd de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav:nth-of-type(2)");
  deNav.classList.remove("toonMenu");
}

/**********************************/
/*    menu sluiten met escape     */
/**********************************/
window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav:nth-of-type(2)");
    deNav.classList.remove("toonMenu");
  }
}