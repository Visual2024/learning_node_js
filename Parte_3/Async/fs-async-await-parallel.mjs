import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('../../Parte_2/txt/holamundo.txt', 'utf-8'),
    readFile('../../Parte_2/txt/holamundo2.txt', 'utf-8')
]).then((texts) => {
    console.log(texts[0]);
    console.log(texts[1]);
});


console.log("Leyendo el archivo...")

