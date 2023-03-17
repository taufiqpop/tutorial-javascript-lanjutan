// 2.2 Closure
// function init () {
//     // let nama = "Taufiq Pop";
//     return function (nama) {
//         console.log(nama);
//     }
// };

// let panggilNama = init();
// panggilNama("Lala");
// panggilNama("Pop");




// Contoh 2
// function ucapkanSalam (waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, Semoga Harimu Menyenangkan!`);
//     };
// };

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");

// console.dir(selamatMalam("Lala"));



// Contoh 3
let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
