
var hamburgerMenu = document.querySelector("header button");

hamburgerMenu.addEventListener("click", toggleMenu);

function toggleMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.toggle("toonMenu");

  var hamburgerIcon = document.querySelector("header button img");
  if (deNav.classList.contains("toonMenu")){
    hamburgerIcon.src="assets/hamburger-menu-close.svg";
  } else{
    hamburgerIcon.src="assets/hamburger-menu.svg";
  }
};





