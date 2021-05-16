const asincrona = (callback) => {
    setTimeout(() => {
        callback();
    }, 1000);
}

function adios(callback){
    setTimeout(() => {
        const nombre = 'Brandon';
        console.log(`Adios ${nombre}`);
        callback(nombre)
    }, 1000);
}

// asincrona(() => console.log("Metodo asincrono"));
// adios((nombre) => {
//     asincrona(() => console.log("Metodo asincrono", nombre));
//     console.log("Finalizando saludo.")
// });

const promesa = (dato=null) => {
    return new Promise((resolve, reject) => {
        if(dato)
            resolve(`El dato: "${dato}" si existe.`);
        else
            reject('El dato no existe.');
    });
}

const promesaConAzucar = async (dato) => {
    if(dato)
        return `El dato: "${dato}" si existe con azucar.`;
    else 
        throw 'El dato no existe con azucar.';
}

// promesa("Soy un dato")
//     .then(msg => console.log(msg))
//     .catch(err => console.log(err));

// promesaConAzucar("Otro dato")
//     .then(msg => console.log(msg))
//     .catch(err => console.log(err));

// promesa("Soy un dato")
//     .then(msg => promesaConAzucar())
//     .then(msg => console.log(msg))
//     .catch(err => console.log(err));

const otraPromesaAzucarada = async () => {
    try {
        const msg = await promesa("Brandon");
        const msgAzucar = await promesaConAzucar(msg);
        console.log(msgAzucar);
    } catch (error) {
        console.log(error);
    }
};


otraPromesaAzucarada();
