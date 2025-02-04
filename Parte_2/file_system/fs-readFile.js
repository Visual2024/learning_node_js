const fs = require('node:fs');

// Asincrono
fs.readFile('txt/holamundo.txt', 'utf-8', (err, data) => {
    console.log(data + " Asincrono");
    if (err) {
        console.log("error");
    }
});

// Sincrono
const data = fs.readFileSync('txt/holamundo.txt', 'utf-8');
console.log(data + " Sincrono");


console.log('Leyendo el archivo');