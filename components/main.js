// Dropdown button
const menu = document.querySelector(".menuDrop");
const hamburger = document.querySelector("#hamburger");
const x = document.querySelector(".x");

hamburger.addEventListener("click", () => {
  menu.classList.add("block");
  hamburger.classList.add("spin");
  x.classList.add("active");
  console.log("hamburger diklik");
});

// Fungsi Close Button
x.addEventListener("click", () => {
  menu.classList.remove("block");
  hamburger.classList.remove("spin");
  x.classList.remove("active");
});

document.body.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
    hamburger.classList.remove("spin");
    x.classList.remove("active");
    menu.classList.remove("block");
  }
});

// Tambah kurang jumlah pesanan
function tambah(params) {
  let banyakPesanan = params.parentNode.querySelector("#banyakPesanan");
  let jumlah = parseInt(banyakPesanan.textContent);
  jumlah += 1;
  banyakPesanan.textContent = jumlah;
  console.log("bertambah");
}

function kurang(params) {
  let banyakPesanan = params.parentNode.querySelector("#banyakPesanan");
  let jumlah = parseInt(banyakPesanan.textContent);
  if (jumlah >= 1) {
    jumlah -= 1;
    banyakPesanan.textContent = jumlah;
  }
  console.log("berkurang");
}

// Slide Menu
const makanan = document.querySelector("#makananSlide");
const minuman = document.querySelector("#minumanSlide");
const makananMenu = document.querySelector(".pilihanMakanan");
const minumanMenu = document.querySelector(".pilihanMinuman");

makanan.addEventListener("click", () => {
  makananMenu.classList.toggle("show");
  minumanMenu.classList.toggle("show");
  console.log("Slider berfungsi");
});

minuman.addEventListener("click", () => {
  makananMenu.classList.toggle("show");
  minumanMenu.classList.toggle("show");
  console.log("Slider berfungsi");
});
