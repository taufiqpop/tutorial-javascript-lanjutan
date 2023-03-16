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

let Lala = Mahasiswa("Lala", 10);
let Pop = Mahasiswa("Pop", 9);