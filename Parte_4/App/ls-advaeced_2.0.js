const fs = require('node:fs/promises');
const path = require('node:path');

const folder = process.argv[2] ?? '.'; // Esto hace referencia a la ruta del archivo que se está ejecutando

async function ls(directory) {
    let files;
    try {
        files = await fs.readdir(folder);
    } catch (error) {
        console.log("No se pudo leer el directorio" + error);
        process.exit(1);
    }

    const filePromises = files.map(async (file) => {
        const filePath = path.join(folder, file);
         const stats = await fs.stat(filePath);
        const readFile = await fs.readFile(filePath, 'utf-8');
        console.log(`File: ${file}`);
        console.log(`Size: ${stats.size} bytes`);
        console.log(`Is Directory: ${stats.isDirectory()}`);
        console.log(`Last Modified: ${stats.mtime}`);
        console.log(readFile);
        console.log('----------------------');
    });

    await Promise.all(filePromises);
}

ls(folder);
