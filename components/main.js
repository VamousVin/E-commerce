// Dropdown button
const menu = document.querySelector("#menuDrop");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("block");
  console.log("hamburger diklik");
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
  jumlah -= 1;
  banyakPesanan.textContent = jumlah;
  console.log("berkurang");
});
