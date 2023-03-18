// 4.1 Higher Order Function
// Filter, Map, Reduce
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);


// filter
// const newAngka = angka.filter (a => a >= 3);

// cara lama
// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// });

// console.log(newAngka);


// map
// kalikan semua angka dengan 2 (menjadi array baru)
// const newAngka = angka.map (a => a * 2);
// console.log(newAngka);


// reduce (punya 2 parameter)
// jumlahkan seluruh elemen pada array
// 0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(newAngka);