// Map, Filter, Reduce
// ambil semua element video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih hanya yg "JAVASCRIPT LANJUTAN"
// const jsLanjutan = videos.filter(function (video) {
//     return video.textContent.includes("JAVASCRIPT LANJUTAN")
// })
let jsLanjutan = videos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN"))

// ambil durasi masing-masing video
    .map (item => item.dataset.duration)
// ubah durasi menjadi float, ubah menit menjadi detik
    .map (waktu => {
        // 10:30 -> [10, 30] split
        const parts = waktu.split(":").map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

// jumlahkan semua detiknya
    .reduce((total, detik) => total + detik);

// ubah formatnya jadi (jam-menit-detik)
const jam = Math.floor(jsLanjutan / 3600);
jsLanjutan = jsLanjutan - jam * 3600;
const menit = Math.floor(jsLanjutan / 60);
const detik = Math.floor(jsLanjutan - menit * 60);

// simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

const jmlVideo = videos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;
const pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.textContent = `${jmlVideo} Video.`;


// debugging
console.log(jumlahVideo);