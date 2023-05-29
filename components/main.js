// Dropdown button
const menu = document.querySelector("#menuDrop");
const hamburger = document.querySelector("#hamburger");
const x = document.querySelector(".x");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("block");

  // Hamburger spin
  hamburger.classList.toggle("spin");

  // Memunculkan X
  x.classList.toggle("active");
  console.log("hamburger diklik");
});

// Fungsi Close Button
x.addEventListener("click", () => {
  menu.classList.toggle("block");
  hamburger.classList.toggle("spin");
  x.classList.toggle("active");
});

document.body.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("block");
  }
});

// Tambah kurang jumlah pesanan
let tambah = document.getElementById("tambah");
let kurang = document.getElementById("kurang");
let banyakPesanan = document.getElementById("banyakPesanan");

let jumlah = 0;

tambah.addEventListener("click", () => {
  jumlah += 1;
  banyakPesanan.textContent = jumlah;
  console.log("bertambah");
});

kurang.addEventListener("click", () => {
  if (jumlah >= 1) {
    jumlah -= 1;
  }
  banyakPesanan.textContent = jumlah;
  console.log("berkurang");
});
