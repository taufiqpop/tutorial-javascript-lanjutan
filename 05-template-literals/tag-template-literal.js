// Tagget Templates
const nama = "Taufiq Pop";
const umur = 21;

function coba (strings, ...values) {
    // let result = "";
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i] || ""}`
    // });
    // return result;

    // cara cepat pakai higher order function (reduce)
    return strings.reduce((result, str, i) => `${result}${str}${values[i] || ""}`, "");
}

const str = coba`Halo, nama saya ${nama}, saya umur ${umur} tahun.`;
console.log(str);