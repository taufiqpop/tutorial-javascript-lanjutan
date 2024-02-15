// Rest Parameter

// function myFunc (...myArgs) {
function myFunc () {
    // return myArgs;
    // return Array.from(arguments);
    return [...arguments];
}

console.log(myFunc(1, 2, 3, 4, 5));


function jumlahkan (...angka) {
    let total = 0;
    for (const a of angka) {
        total += a;
    }

    // return total;
    return angka.reduce((a, b) => a + b);
}

console.log(jumlahkan(1, 2, 3, 4, 5));


// Array Distructuring
const kelompok1 = ['Taufiq Pop', 'Shofiya', 'Syari', 'Lala', 'Thifal'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(anggota);


// Object Distructuring
const team = {
    pm: 'Taufiq Pop',
    frontEnd1: 'Shofiya',
    frontEnd2: 'Syari',
    backEnd: 'Ainun',
    ux: 'Dyva',
    devOps: 'Anita'
};

const {pm, ...myTeam} = team;
console.log(myTeam);


// Filtering
function filterBy (type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('string', 1, 3, 'Lala', false, 90, 14, true, 'Syari'));
console.log(filterBy('number', 1, 3, 'Lala', false, 90, 14, true, 'Syari'));
console.log(filterBy('boolean', 1, 3, 'Lala', false, 90, 14, true, 'Syari'));