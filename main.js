const menu = document.querySelector("#menuDrop");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("block");
});
