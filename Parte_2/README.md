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

- Como transforma de Sincrono a Asincrono

```javascript
const fs = require('node:fs');

// Asincrono
fs.readFile('txt/holamundo.txt', 'utf-8', (err, data) => {
    console.log(data);
});

// Sincrono
const data = fs.readFileSync('txt/holamundo.txt', 'utf-8');
console.log(data);


console.log('Leyendo el archivo');
```

- Lo que esta pasando es que estoy poniendo arriba de todo un fs.readFile Asicrono en donde es ves de darme la informacion del archivo, me da un callback, y abajo de todo estoy poniendo un fs.readFileSync Sincrono, en donde me da la informacion del archivo.

- Entoces lo que va a pasar es que el primero se va a ejecutar paralelamente, y el segundo se va a ejecutar secuencialmente. Entoces el primer resultado va a ser Sincrono porque esta dentro de hilo principal, y el segundo va a ser Asincrono porque esta en un apartado.

## Callbacks

- Los callbacks son funciones que se pasan como argumentos a otras funciones, y se ejecutan cuando una tarea se completa.

- Los callbacks son la base de la asincronia en NodeJs.

```javascript

const fs = require('node:fs');

fs.readFile('txt/holamundo.txt', 'utf-8', (err, data) => {
    console.log(data);
});

console.log('Leyendo el archivo');

```

## Promesas

- Las promesas son un objeto que representa la terminacion o el fracaso de una operacion asincrona.

- Las promesas son una mejora de los callbacks, ya que nos permiten encadenar operaciones asincronas de manera mas legible.

```javascript

const fs = require('node:fs');

const readFile = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

readFile('txt/holamundo.txt')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });

console.log('Leyendo el archivo');


```

## Transformando Callbacks a Promesas

- En este caso vamos a transformar un callback a una promesa con la propiedad promisefy.

```javascript

const fs = require('node:fs');

const { promisify } = require('node:util');

const readFile = promisify(fs.readFile);

readFile('txt/holamundo.txt', 'utf-8')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });

console.log('Leyendo el archivo');

```

## Async/Await

- Async/Await es una forma de trabajar con promesas de manera mas legible.

- Async/Await es una mejora de las promesas, ya que nos permite trabajar con promesas de manera mas sincrona.

```javascript

const fs = require('node:fs');

const { promisify } = require('node:util');

const readFile = promisify(fs.readFile);

const read = async () => {
    try {
        const data = await readFile('txt/holamundo.txt', 'utf-8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};

read();

console.log('Leyendo el archivo');

```

