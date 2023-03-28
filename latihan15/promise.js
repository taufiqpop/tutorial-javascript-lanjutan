// JQuery
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//     success: movies => console.log(movies)
// });

// Vanilla JavaScript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if(xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     }
//     else {
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers');
// xhr.send();


// FETCH
// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));


// PROMISE
// Object yg merepresentasikan keberhasilkan / kegagalan sebuah event yg asynchronous di masa yg akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// Contoh 1 (sederhana)
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
    if (ditepati) {
        resolve('Janji telah ditepati!');
    }
    else {
        reject('Ingkar janji..');
    }
});

janji1
    .then(response => console.log('OK! : ' + response))
    .catch(response => console.log('NOT OK! : ' + response));