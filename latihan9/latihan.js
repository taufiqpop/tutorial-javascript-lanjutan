// 1. HTML Fragments
// const mhs = {
//     nama: "Taufiq Pop",
//     umur: 21,
//     nim: "L200190085",
//     email: "taufiqpop52@gmail.com"
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`;

// console.log(el);    
// document.body.innerHTML = el;

// 2. Looping
// const mhs = [
//     {
//         nama:"Taufiq Pop",
//         email: "taufiqpop52@gmail.com"
//     },
//     {
//         nama:"Lala",
//         email: "lalapo19@gmail.com"
//     },
//     {
//         nama:"Nabila",
//         email: "nabila04@gmail.com"
//     },
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//         </ul>
//     `).join("")}
// </div>`;

// document.body.innerHTML = el;

// 3. Conditionals
// ternary()
// const lagu = {
//     judul: "Mantra Hujan",
//     penyanyi: "Kobo Kanaeru",
//     feat: "Vestia Zeta"
// };

// const el = `<div class="lagu">
//     <ul>
//         <li>Judul Lagu: ${lagu.judul}</li>
//         <li>Penyanyi: ${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
//     </ul>
// </div>`;

// document.body.innerHTML = el;

// 4. Nested
// HTML Fragment Bersarang
const mhs = {
    nama: "Taufiq Pop",
    semester: 8,
    mataKuliah: [
        "Pemrograman Web Dinamis",
        "Rekayasa Perangkat Lunak",
        "Sistem Basis Data",
        "Algoritma & Struktur Data",
        "Machine Learning",
        "Pemrograman Berorientasi Objek",
        "Kalkulus"
    ]
};

function cetakMataKuliah (mataKuliah) {
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join(" ")}
        </ol>
    `
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester: ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;