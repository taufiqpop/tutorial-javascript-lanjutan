// Konsep THIS pada arrow function
// ==>> Arrow Function Tidak Memiliki Konsep THIS


// constructor function
// const Mahasiswa = function () {
//     this.nama = "Taufiq Pop";
//     this.umur = 21;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const Pop = new Mahasiswa();

// Arrow Function
// const Mahasiswa = function () {
//     this.nama = "Taufiq Pop";
//     this.umur = 21;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const Pop = new Mahasiswa();


// Object Literal
// const mhs1 = {
//     nama: "Taufiq Pop",
//     umur: 21,
//     sayHello: function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }



// Masih bingung, coba contoh lain
const Mahasiswa = function () {
    this.nama = "Taufiq Pop";
    this.umur = 21;
    this.sayHello = function () {
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
    }

    setInterval(() => {
        console.log(this.umur++);
    }, 500);
}

const pop = new Mahasiswa();