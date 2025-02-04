const os = require('node:os'); // Modulo nativo de NodeJs


console.log("Informacion del sistema operavio")

console.log('nombre del sistema operativo: ' + os.platform()); // Nos da el sistema operativo en el que estamos trabajando

console.log('Version del sistema operativo: ' + os.release()); // Nos da la version del sistema operativo: 
console.log('Memoria total del sistema operativo: ' + os.totalmem() / 1024 / 1024) ; // Nos da la memoria total del sistema operativo: 
console.log('Memoria libre del sistema operativo: ' + os.freemem() / 1024 / 1024) ; // Nos da la memoria libre del sistema operativo: 
console.log("Arquitectura del sistema operativo: " + os.arch()); // Nos da la arquitectura del sistema operativo
console.log("Informacion de la CPU" + JSON.stringify(os.cpus())); // Nos da la informacion de la CPU
`<br/>`
console.log("uptime del sistema operativo: " + os.uptime() / 60 / 60); // Nos da el tiempo que lleva encendido el sistema operativo