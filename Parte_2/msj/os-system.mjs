import { platform, release, totalmem, freemem, arch, cpus, uptime } from 'node:os'; // Modulo nativo de NodeJs


console.log("Informacion del sistema operavio")

console.log('nombre del sistema operativo: ' + platform()); // Nos da el sistema operativo en el que estamos trabajando

console.log('Version del sistema operativo: ' + release()); // Nos da la version del sistema operativo: 
console.log('Memoria total del sistema operativo: ' + totalmem() / 1024 / 1024) ; // Nos da la memoria total del sistema operativo: 
console.log('Memoria libre del sistema operativo: ' + freemem() / 1024 / 1024) ; // Nos da la memoria libre del sistema operativo: 
console.log("Arquitectura del sistema operativo: " + arch()); // Nos da la arquitectura del sistema operativo
console.log("Informacion de la CPU" + JSON.stringify(cpus())); // Nos da la informacion de la CPU
`<br/>`
console.log("uptime del sistema operativo: " + uptime() / 60 / 60); // Nos da el tiempo que lleva encendido el sistema operativo