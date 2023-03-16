// 2. Function Declaration (Lebih Efektif)

const methodMahasiswa = {
    makan : function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    },
    
    main : function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    },
    
    tidur : function (jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur!`);
    }
};

function Mahasiswa (nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    
    return mahasiswa;
}
let Lala = Mahasiswa("Lala", 10);
let Pop = Mahasiswa("Pop", 9);
