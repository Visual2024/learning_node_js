const { readFile } = require('node:fs/promises');

async function main() {
    const text = await readFile("../../Parte_2/txt/holamundo.txt", "utf-8");
    const secondText = await readFile("../../Parte_2/txt/holamundo2.txt", "utf-8");
    
    console.log(text);
    console.log(secondText);
}

console.log("Leyendo el archivo...");


main();