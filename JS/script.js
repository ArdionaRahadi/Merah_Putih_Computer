// validasi form
function validasi() {
<<<<<<< HEAD
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
=======
  let nama = document.getElementById('nama').value;
  let telp = document.getElementById('no').value;
  let pesan = document.getElementById('pesan').value;
  let URL = window.open("https://api.whatsapp.com/send?phone=6285606775439&text=*Nama* :%20' + nama + '%0a*No.Telp* :%20' + telp + '%0a*Pesan* :%20' + pesan + '%0a");

  window.open(URL, "_top");
>>>>>>> accc3fa6242e74e2098c7b8e3064473a440f3492
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

//
// function hehe() {
//   const pw = prompt('password (1-5000)');

//   if (pw == 2604) {
//     window.open('https://youtube.com/shorts/G9e2Pk86JVU?si=0b8t32Mm0A0-C8V7', '_blank');
//   } else {
//     alert('Password Salah');
//   }
// }
