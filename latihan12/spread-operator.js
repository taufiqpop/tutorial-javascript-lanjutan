// Spread Operator

const mhs = ['Taufiq Pop', 'Lala', 'Nabila'];
// console.log(...mhs[0]);


// Menggabungkan 2 array
const dosen = ['Syari', 'Ainun', 'Thifal'];
const orang = [...mhs, ...dosen];
// const orang = mhs.concat(dosen);

console.log(orang);


// Meng-copy array
const mhs = ['Taufiq Pop', 'Lala', 'Nabila'];
const mhs1 = [...mhs];
mhs1[0] = 'Syari';
console.log(mhs1);

// Contoh Lain:
const liMhs = document.querySelectorAll('li');

// tanpa spread operator
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// };

// console.log(mhs);


// dengan spread operator
const mhs = [...liMhs].map(m => m.textContent);
console.log(mhs);