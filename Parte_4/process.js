const process = require("node:process");

// Argumento de entrada
console.log(process.argv ?? ''); // Esto hace referencia a la ruta del archivo que se está ejecutando

// Nos muestra el directorio actual en cual se está ejecutando el archivo y estamos trabajando
// console.log(process.cwd())


// Plansform
// console.log(process.platform);


// Variables de entorno
// console.log(process.env.PEPITO);


// Controlar el proceso y su salida
// process.exit(0); // Con Cero el proceso termina correctamente, con cualquier otro número termina con error

