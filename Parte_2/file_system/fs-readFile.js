const fs = require('node:fs');

const read = fs.readFileSync('txt/holamundo.txt', 'utf-8');

console.log(read); // Hola mundo