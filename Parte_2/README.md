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

- Este modulo es el mas importante de todos los modulos nativos de NodeJs, ya que nos permite trabajar con el sistema de archivos del sistema operativo.

```javascript
const fs = require('node:fs');

const stast = fs.statSync('txt/holamundo.txt');

console.log(
    stast.isFile(), // Si es un archivo
    stast.isDirectory(), // Si es un directorio
    stast.isSymbolicLink(), // Si es un enlace simbolico
    stast.size // Tamaño del archivo
);

```

## Asicronia vs Sincronia

- En node js es mono hilo, lo que significa que solo puede ejecutar una tarea a la vez, pero esto no significa que sea sincrono, ya que node js es asincrono, lo que significa que puede ejecutar varias tareas a la vez, pero no de manera simultanea.

- Este mismo esta basado en eventos y callbacks, lo que significa que cuando una tarea se completa, se ejecuta un callback, y esto es lo que hace que node js sea asincrono.

