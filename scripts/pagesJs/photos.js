import activeToggle from "../activePage.js";
import loader from "../loader.js";
import navRun from "../navBar.js";
import toggleMode from "../toggleMode.js";

// loader();
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scrolled", window.scrollY > 0);
});

// navbar js
const nav = document.querySelector(".nav__links");
const openNavBtn = document.querySelector("#nav__toggle-open");
const closeNavBtn = document.querySelector("#nav__toggle-close");
navRun(nav, openNavBtn, closeNavBtn);

// render photo
let ele = document.querySelector(".gallery-container");
console.log(ele);

let arr = [
  "g1",
  "g2",
  "g3",
  "g4",
  "g5",
  "g6",
  "g7",
  "g8",
  "g9",
  "g10",
  "g11",
  "g12",
  "g13",
  "g14",
  "g15",
  "g16",
  "g17",
  "g18",
  "g19",
  "g20",
  "g21",
];
function renderPhotos() {
  ele.innerHTML = "";
  const markUp = arr
    .map((val, index) => {
      return `
          <a
          href="../images/gallery_portFolio/${val}.jpg"
          class="gallery-item"
          data-lightbox="${index + 1}"
        >
          <img src="../images/gallery_portFolio/${val}.jpg" />
        </a>
    `;
    })
    .join("");
  ele.innerHTML = markUp;
}
renderPhotos();

//  mode
const toggle = document.querySelector(".slider");
toggleMode(toggle);

// lightbox
var lightbox = new SimpleLightbox(".gallery-container a", {
  /* options */
});
