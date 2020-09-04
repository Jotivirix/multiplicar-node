//Requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    //Imprimimos la tabla
    console.log(`-----------------`.green);
    console.log(`Tabla del ${base} al ${limite}`.green);
    console.log(`-----------------`.green);
    for (let i = 0; i <= limite; i++) {
        const resultado = base * i;
        console.log(`${base} * ${i} = ${resultado}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            return reject('La base NO es un numero');
        }
        let data = '';
        //Imprimir la tabla del 2 con un bucle for
        for (let i = 1; i <= limite; i++) {
            const resultado = base * i;
            data += `${base} * ${i} = ${resultado} \n`;
        }

        fs.writeFile(`tablas/tabla${base}al${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`Tabla${base}al${limite}.txt`);
            }
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}