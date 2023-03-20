// Prototype
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


// Versi Class (pembungkus prototype, dasarnya protopype dulu)
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;        
        this.energi = energi;        
    }

    makan (porsi) {
        this.energi += porsi;
        return `Halo ${this.nama} selamat makan!`
    };

    main (jam) {
        this.energi -= jam;
        return `Halo ${this.nama} selamat main!`
    };

    tidur (jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama} selamat tidur!`
    }
};

let Lala = new Mahasiswa("Lala", 10);
let Pop = new Mahasiswa("Pop", 10);