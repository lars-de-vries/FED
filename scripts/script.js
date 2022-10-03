
var hamburgerMenu = document.querySelector("header:nth-of-type(2) button");

hamburgerMenu.addEventListener("click", toggleMenu);

function toggleMenu() {  
  var deNav = document.querySelector("header:nth-of-type(2) nav");
  deNav.classList.toggle("toonMenu");

  var hamburgerIcon = document.querySelector("header:nth-of-type(2) button img");
  if (deNav.classList.contains("toonMenu")){
    hamburgerIcon.src="assets/hamburger-menu-close.svg";
  } else{
    hamburgerIcon.src="assets/hamburger-menu.svg";
  }
};










