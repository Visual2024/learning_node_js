const fs = require('node:fs');


// Esto nos sirve para leer los archivos de un directorio
fs.readdir('../', (err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    files.forEach(file => {
        console.log(file);
    })

})


