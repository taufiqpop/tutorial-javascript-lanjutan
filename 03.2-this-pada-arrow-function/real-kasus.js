// gagal
// const box = document.querySelector(".box");
// box.addEventListener("click", function () {
//     this.classList.toggle("size");
//     setTimeout(function () {
//         this.classList.toggle("caption");
//     }, 600);
// });

// berhasil karena arrow function, tapi animasinya kebalik
// const box = document.querySelector(".box");
// box.addEventListener("click", function () {
//     this.classList.toggle("size");
//     setTimeout(() => {
//         this.classList.toggle("caption");
//     }, 600);
// });

// animasi benar
const box = document.querySelector(".box");
box.addEventListener("click", function () {
    let satu = "size";
    let dua = "caption";

    if (this.classList.contains(satu)) {
        // dibalik
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});