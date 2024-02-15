// Callback
// Synchronous Callback

// function halo (nama) {
//     alert(`Halo, ${nama} Sayang`);
// }

function tampilkanPesan (callback) {
    const nama = prompt('Masukkan Nama : ');
    callback(nama);
}

// tampilkanPesan(halo);
tampilkanPesan(nama => alert(`Halo, ${nama} Sayang`));