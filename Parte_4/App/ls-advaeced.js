const fs = require('node:fs/promises');

const folder = process.argv[2] ?? '.' // Esto hace referencia a la ruta del archivo que se está ejecutando

fs.readdir(folder)
    .then(files => {
        files.forEach(element => {
            console.log(element);
        });
    })
    .catch(err => {
        if (err) {
            console.log(err);
            return;
        }
    });
