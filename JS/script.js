function validasi(){
    let nama = document.getElementById('nama').value
    let telp = document.getElementById("no").value;
    let pesan = document.getElementById("pesan").value;
    // var URL = window.open("https://wa.me/6285854653667?text=*Nama* :%20" + nama + "%0a*No.Telp* :%20" + telp + "%0a*Pesan* :%20" + pesan + "%0a");

    if (nama === "" || telp === "" || pesan === "") {
        
    } else {
        window.open("https://wa.me/6285854653667?text=*Nama* :%20" + nama + "%0a*No.Telp* :%20" + telp + "%0a*Pesan* :%20" + pesan + "%0a") + FormData.reset();
    }
}

let box = document.getElementById("kotak");
let btn1 = document.getElementById("seen");
let btn2 = document.getElementById("hide");

function seen() {
    box.style.display="block";
    btn1.style.display="none";
    btn2.style.display="block";
}

function hide() {
    box.style.display="none";
    btn1.style.display="block";
    btn2.style.display="none";
}