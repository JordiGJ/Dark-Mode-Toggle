// get elements
const label = document.querySelector("label");

// variables
let dark = false;
const stored = JSON.parse(localStorage.getItem("darkMode"));

// functions
function toggleDark() {
  document.body.classList.toggle("dark-mode-body");
  label.classList.toggle("dark-mode-label");
  document.querySelector(".circle").classList.toggle("dark-mode-circle");
}

function handleClick() {
  toggleDark();
  dark = !dark;
  localStorage.setItem("darkMode", JSON.stringify(dark));
}

function handleLoad() {
  stored ? handleClick() : "";
}
// eventListeners
label.addEventListener("click", handleClick);
window.addEventListener("load", handleLoad);
