// Dropdown button
const menu = document.querySelector("#menuDrop");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("block");
});

document.body.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("block");
  }
});
