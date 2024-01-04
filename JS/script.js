// validasi form
function validasi() {
  let nama = document.getElementById("nama").value;
  let telp = document.getElementById("no").value;
  let pesan = document.getElementById("pesan").value;
  let URL = window.open(
    "https://wa.me/6285606775439?text=*Nama* :%20" +
      nama +
      "%0a*No.Telp* :%20" +
      telp +
      "%0a*Pesan* :%20" +
      pesan +
      "%0a"
  );

  window.open(URL, "_top") + Form.reset();
}

// klik button untuk lihat lebih lanjut
let box = document.getElementById("kotak");
let btn1 = document.getElementById("seen");
let btn2 = document.getElementById("hide");

function seen() {
  box.style.display = "block";
  btn1.style.display = "none";
  btn2.style.display = "block";
}

function hide() {
  box.style.display = "none";
  btn1.style.display = "block";
  btn2.style.display = "none";
}

// Search Engine
// const search = () => {
//   const searchbox = document.getElementById("search-item").value.toLowerCase();
//   const storeitems = document.querySelectorAll("#product-list");
//   const product = document.querySelectorAll(".product");
//   const pname = document.querySelectorAll(".card-text");

//   for (var i = 0; i < pname.length; i++) {
//     let match = product[i].querySelectorAll(".card-text")[0];

//     if (match) {
//       let textvalue = match.textContent || match.innerHTML;

//       if (textvalue.toLowerCase().indexOf(searchbox) > -1) {
//         product[i].style.display = "";
//       } else {
//         product[i].style.display = "none";
//       }
//   }
// };
