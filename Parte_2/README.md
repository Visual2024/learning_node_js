## Sistema de Modulo Nativo

- Lo bueno de NodeJs al ser un entorno de ejecucion, es que nos da una biblioteca enorme de modulos nativos que podemos utilizar para realizar tareas comunes, como por ejemplo, leer archivos, crear servidores, etc. Tambien esto mismo nos puede dar acceso al sistema operativo, al sistema de archivo,, a la red, etc.

- Este modulo que vamos a usar es uno que te da informacion del Sistema Operativo en el que estas trabajando.

### Modulo: os

```javascript
const os = require('node:os'); // Modulo nativo de NodeJs


console.log("Informacion del sistema operavio")

console.log('nombre del sistema operativo' + os.platform()); // Nos da el sistema operativo en el que estamos trabajando

console.log('Version del sistema operativo' + os.release()); // Nos da la version del sistema operativo
console.log('Memoria total del sistema operativo' + os.totalmem()); // Nos da la memoria total del sistema operativo
console.log('Memoria libre del sistema operativo' + os.freemem()); // Nos da la memoria libre del sistema operativo
console.log("Arquitectura del sistema operativo" + os.arch()); // Nos da la arquitectura del sistema operativo
console.log("Informacion de la CPU" + os.cpus()); // Nos da la informacion de la CPU

```


### Modulo FileSystem

- Este modulo nos permite trabajar con el sistema de archivos del sistema operativo.

```javascript

const fs = require('node:fs'); // Modulo nativo de NodeJs

// Crear un archivo
fs.writeFile('texto.txt', 'Hola mundo', 'utf8', (error) => {
    if(error){
        console.log('Error al crear el archivo');
        return;
    }
    console.log('Archivo creado con exito');
});

// Leer un archivo
fs.readFile('texto.txt', 'utf8', (error, data) => {
    if(error){
        console.log('Error al leer el archivo');
        return;
    }
    console.log(data);
});

// Renombrar un archivo
fs.rename('texto.txt', 'texto2.txt', (error) => {
    if(error){
        console.log('Error al renombrar el archivo');
        return;
    }
    console.log('Archivo renombrado con exito');
});

```