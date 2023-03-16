// Prototype

// const methodMahasiswa = {
//     makan : function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
    
//     main : function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },
    
//     tidur : function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// };

function Mahasiswa (nama, energi) {
    this.nama = nama;
    this.energi = energi;
};

Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `Halo ${this.nama} selamat makan!`
};

Mahasiswa.prototype.main = function (jam) {
    this.energi -= jam;
    return `Halo ${this.nama} selamat main!`
};

Mahasiswa.prototype.tidur = function (jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama} selamat tidur!`
};

let Lala = new Mahasiswa("Lala", 10);
let Pop = new Mahasiswa("Pop", 9);

