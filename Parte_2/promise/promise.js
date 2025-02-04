const fs = require('node:fs/promises'); // Para convertir fs en promesas

fs.readFile('../txt/holamundo2.txt', 'utf-8')
    .then(data => console.log(data))
    .catch(err => console.log(err));

fs.readFile("../txt/holamundo.txt", "utf-8")
    .then(data => console.log(data))
    .catch(err => console.log(err));



