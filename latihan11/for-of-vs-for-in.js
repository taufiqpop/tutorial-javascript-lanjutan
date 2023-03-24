// for.. of VS for.. in

// A. FOR OF

// 1. ARRAY
const mhs = ['Taufiq Pop', 'Lala', 'Nabila'];

// FOR
for (let i = 0; i < mhs.length; i++) {
    console.log(mhs[i]);
};


// FOR EACH
mhs.forEach(m => console.log(m));


// FOR OF
for (const m of mhs) {
    console.log(m);
}


// 2. STRING
const nama = 'Taufiq Pop';
for (const n of nama) {
    console.log(n);
}


// 3. NodeList
const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.textContent));
for (n of liNama) {
    console.log(n.innerHTML);
}


// 4. Arguments
function jumlahkanAngka () {
    let jumlah = 0;
    for (a of arguments) {
        jumlah += a;
    }
    return jumlah;
}

console.log(jumlahkanAngka(1,2, 3, 4, 5));


// B. FOR IN (object)
const mhs = {
    nama: 'Taufiq Pop',
    umur: 33,
    email: 'taufiqpop52@gmail.com'
};

for (m in mhs) {
    console.log(mhs[m]);
}