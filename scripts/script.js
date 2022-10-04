
// HAMBURGER MENU

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






// LASER OGEN

var jubileumImage = document.querySelector(".index main > section:nth-of-type(3) > div > div > img");

jubileumImage.addEventListener("click", laserOgen);

function laserOgen() {
  var linkerOog = document.querySelector(".index main > section:nth-of-type(3) > div > div > div:nth-of-type(1)");
  linkerOog.classList.toggle("laser-links");

  var rechterOog = document.querySelector(".index main > section:nth-of-type(3) > div > div > div:nth-of-type(2)");
  rechterOog.classList.toggle("laser-rechts");
}