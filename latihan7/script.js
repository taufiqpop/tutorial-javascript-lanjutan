// Konsep THIS pada arrow function


// constructor function
const Mahasiswa = function () {
    this.nama = "Taufiq Pop";
    this.umur = 21;
    console.log(this);
}

const Pop = new Mahasiswa();