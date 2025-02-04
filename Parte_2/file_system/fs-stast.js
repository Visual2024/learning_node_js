const fs = require('node:fs');

const stast = fs.statSync('txt/holamundo.txt');

console.log(
    stast.isFile(), // Si es un archivo
    stast.isDirectory(), // Si es un directorio
    stast.isSymbolicLink(), // Si es un enlace simbolico
    `${stast.size}` // Tamaño del archivo
);