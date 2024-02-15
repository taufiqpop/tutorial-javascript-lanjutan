// Destructuring Function

// 1. Destructuring Return Value
function penjumlahanPerkalian (a, b) {
    return [a + b, a * b];
}

const jumlah = penjumlahanPerkalian(2, 3)[0];
const kali = penjumlahanPerkalian(2, 3)[1];

const [jumlah, kali] = penjumlahanPerkalian(2, 3);
console.log(jumlah);
console.log(kali);

// Array
function kalkulasi (a, b) {
    return [a + b, a - b, a * b, a / b];
}

const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi (2, 3);
console.log(bagi);


// Object (lebih better)
function kalkulasi (a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b
    }
}

const {bagi, tambah, kali, kurang} = kalkulasi(2, 3);
console.log(kurang);


// 2. Destructuring Arguments
const mhs1 = {
    nama: 'Taufiq Pop',
    umur: 21,
    email: 'taufiqpop52@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
};

// Tanpa Distructuring
function cetakMhs (mhs) {
    return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`; // dipecah di sini
}

console.log(cetakMhs(mhs1));


// Dengan Distructuring
function cetakMhs ({nama, umur, nilai: {tugas, uts, uas}}) { // dipecah di sini
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai UAS saya adalah ${uas}.`;
}

console.log(cetakMhs(mhs1));