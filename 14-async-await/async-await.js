// Async Await
function cobaPromise () {
    return new Promise ((resolve, reject) => {
        const waktu = 5000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('Selesai')
            }, waktu);
        }
        else {
            reject ('Kelamaan!');
        }
    });
}

async function cobaAsync () {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    }
    catch (error) {
        console.error(error);
    }
}

cobaAsync();