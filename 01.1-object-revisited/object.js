// Cara membuat object pada javascript
// 1. Object Literal
let mahasiswa1 = {
    nama: "Taufiq Pop",
    energi: 10,
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
}

let mahasiswa2 = {
    nama: "Lala",
    energi: 20,
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
}

// 2. Function Declaration
function Mahasiswa (nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    mahasiswa.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }

    return mahasiswa;
}

// 3. Constructor Funtion
function Mahasiswa (nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    this.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }
}

let Pop = Mahasiswa("Pop", 9);
let Lala = new Mahasiswa("Lala", 20);

// 4. object.create
// ==>> next latihan 2