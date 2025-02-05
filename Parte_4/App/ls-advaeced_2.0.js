const fs = require('node:fs/promises');
const path = require('node:path');

const folder = process.argv[2] ?? '.' // Esto hace referencia a la ruta del archivo que se está ejecutando

async function ls (directory) {
    let files
    try {
        files = await fs.readdir(folder)
    }
    catch (error){
        console.log("No se pudo leer el directorio" + error)
        process.exit(1);
    }

    const filePromises = files.map(async file => {
        const filePat = path.join(folder, file);
        const stats = await fs.stat(filePat);
        return { file, stats }
    }

    


    )
}