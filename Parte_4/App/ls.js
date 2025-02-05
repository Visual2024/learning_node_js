const fs = require('node:fs');


fs.readdir('.')
    .then(file => {
        file.forEach(element => {
            console.log(element);
        });
    })
    .catch(err => {
        if (err) {
            console.log(err);
            return;
        }
    });

