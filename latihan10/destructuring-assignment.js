// Destructuring Variable / Assignment

// 1. Destructuring Array
const perkenalan = ['Halo', 'Nama', 'Saya', 'Taufiq Pop'];

const [salam, satu, dua, nama] = perkenalan;

// Skip items :
const [salam, , , nama] = perkenalan;
console.log(salam);
console.log(nama);

// Swap items
let a = 1;
let b = 2;

console.log(a);
console.log(b);

[a, b] = [b, a];
console.log(a);
console.log(b);


// Return Value pada function
function coba () {
    return [1, 2];
}

const [a, b] = coba();
console.log(b);


// Rest Parameter
const [a, ...values] = [1, 2, 3, 4, 5];
console.log(a);
console.log(values);


// 2. Destructuring Object
const mhs = {
    nama: 'Taufiq Pop',
    umur: 21
};

const {nama, umur} = mhs;
console.log(nama);


// Assignment tanpa deklarasi object
({nama, umur} = {nama: 'Taufiq Pop', umur: 21});
console.log(umur);


// Assign ke variabel baru
const mhs = {
    nama: 'Taufiq Pop',
    umur: 21
};

const {nama: n, umur: u} = mhs;
console.log(n);


// Memberikan default value
const mhs = {
    nama: 'Taufiq Pop',
    umur: 21
};

const {nama, umur, email = 'email.default.com'} = mhs;
console.log(email);


// Memberi nilai default + assign ke variabel baru (bisa juga pakai rest parameter)
const mhs = {
    nama: 'Taufiq Pop',
    umur: 21,
    email: 'taufiqpop52@gmail.com'
};

const {nama: n, umur: u, email: e = 'email.default.com'} = mhs;
console.log(e);


// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: 'Taufiq Pop',
    umur: 21,
    email: 'taufiqpop52@gmail.com'
};

function getIdMhs ({id, nama}) {
    return nama + " " + id;
}

console.log(getIdMhs(mhs));