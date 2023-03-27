import activeToggle from "../activePage.js";
import loader from "../loader.js";
import navRun from "../navBar.js";
import toggleMode from "../toggleMode.js";

loader()
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scrolled", window.scrollY > 0);
});
console.log("hello");

// navbar js
const nav = document.querySelector(".nav__links");
const openNavBtn = document.querySelector("#nav__toggle-open");
const closeNavBtn = document.querySelector("#nav__toggle-close");
navRun(nav, openNavBtn, closeNavBtn);

//  mode
const toggle = document.querySelector(".slider");
toggleMode(toggle);
