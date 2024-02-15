// Penggunaan Lain Tag Template Literal :
// 1. Escaping HTML Tags => untuk menghindari script/karakter yg tidak diinginkan pada halaman web
// 2. Translation & Internationalization => alih bahasa pada web
// 3. Style Component => biasanya untuk vue / react
// 4. Escaping/Sanitize HTML Tags
// Hightlight
const nama = "Taufiq Pop";
const umur = 21;
const email = "taufiqpop52@gmail.com";

function highlight (strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ""}</span>`, "");
}

const str = highlight`Halo, nama saya ${nama}, saya umur ${umur} tahun, dan email saya: ${email}.`;

document.body.innerHTML = str;

