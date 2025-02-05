const path = require('node:path');

//Barra separadora de rutas
console.log(path.sep)

// Unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath)


// El basename nos permite obtener el nombre del archivo
const base = path.basename('/tmp/midu-secrect-file/password.txt'); 
console.log(base);

// Quiero el nombre del fichero sin la extensión
const ext = path.basename('/tmp/midu-secrect-file/password.txt', '.txt');
console.log(ext);

const extensión = path.extname('/tmp/midu-secrect-file/password.txt');
console.log(extensión);