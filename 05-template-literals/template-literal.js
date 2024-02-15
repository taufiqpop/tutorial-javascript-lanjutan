// Template Literals / Template String
const nama = "Taufiq Pop";
const umur = 21;
console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);

// Jika pakai kutip 1 dan 2
// console.log("Halo, nama saya " + nama + ", dan saya " + umur +  " tahun.");

// Embedded Expressions
console.log(`${1 + 1}`);
console.log(`${alert("Hello World!")}`);

// ternary()
const x = 11;
console.log(`${(x % 2 == 0) ? "genap" : "ganjil"}`);


// HTML Fragment
const mhs = {
    nama: "Taufiq Pop",
    umur: 21,
    nim: "L200190085",
    email: "taufiqpop52@gmail.com"
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nim">${mhs.nim}</span>
</div>`;

console.log(el);