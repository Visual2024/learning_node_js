const fs = require('node:fs')


// fs.readFile('../txt/holamundo.txt', 'utf-8')
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.warn("Error")
//     })


fs.readFile('../txt/holamundo2.txt', 'utf-8', (err, data) => {
    console.log(data);
})


