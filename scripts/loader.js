export default function loader() {
  var preLoader = document.querySelector(".loading");
  window.addEventListener("load", vanish);
  function vanish() {
    preLoader.classList.add("disapper");
  }
}
