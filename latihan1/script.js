// Cara membuat objek pada javascript
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
// 3. Constructor Funtion
// 4. object.create