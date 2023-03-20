// Arrow Function
const tampilNama = (nama) => {
    return `Halo, ${nama}`;
}
console.log(tampilNama("Taufiq Pop"));


// Jika ada 2 parameter :
const tampilNama = (nama, waktu) => {
    return `Selamat ${waktu}, ${nama}`;
}
console.log(tampilNama("Lala", "Malam"));


// Implisit Return (Lebih ringkas)
const tampilNama = nama => `Halo, ${nama}`;
console.log(tampilNama("Lala"));


// Jika Tanpa Parameter
const tampilNama = () => `Hello World!`;
console.log(tampilNama());


// Contoh lain, pakai map
let mahasiswa = ["Taufiq Pop", "Lala", "Nabila"];
let jumlahHuruf = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf);

// Jika object
let jumlahHuruf = mahasiswa.map(nama => ({
    nama: nama,
    jmlHuruf: nama.length
}));

console.table(jumlahHuruf);