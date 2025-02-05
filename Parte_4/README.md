## Path

- Con Path vamos a queres construir nuevas rutas de archivos, saber si un archivo tiene una extesion, crear rutas absolutas, relativas, etc.

### Ejemplo 1

```javascript

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
```

## Objecto Global Process

- El objeto global process nos permite acceder a información del proceso de Node.js, como argumentos de línea de comandos, variables de entorno, etc.

### Ejemplo 1

```javascript

console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv);

const [, , firstName, lastName] = process.argv;
console.log(`Tu nombre es ${firstName} ${lastName}`);
```

- Con esto mismo se pueden hacer un monto de cosas como: 
    - Crear un servidor
        - Para crear un servidor 
        ```javascript
        const http = require('http');
         
        const server = http.createServer((req, res) => {
            res.end('Welcome');
        });

        server.listen(3000);
        ```

    - Crear un proceso de fork
        - Para crear un proceso de fork
        ```javascript
        const { fork } = require('child_process');
        const forked = fork('child.js');
        ```
        - Un proceso fork sirve para crear un proceso hijo que se comunica con el proceso padre a través de un canal de comunicación.
        - Esto de ayuda cuando se necesita realizar tareas pesadas en un proceso hijo para no bloquear el proceso principal.


    - Crear un proceso de spawn
        - Esto nos sirve para ejecutar un comando en la terminal
        ```javascript
        const { spawn } = require('child_process');
        const child = spawn('ls', ['-lh', '/usr']);
        ```
        - Esto es util porque se puede ejecutar un comando en la terminal y obtener la salida de ese comando en el proceso de Node.js.

    - Crear un proceso de exec
        - Esto es util porque se puede ejecutar un comando en la terminal y obtener la salida de ese comando en el proceso de Node.js.
        ```javascript
        const { exec } = require('child_process');
        exec('find . -type f | wc -l', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`Number of files ${stdout}`);
        });
        ```
        - Esto nos ayuda si en una aplicacion necesitamos ejecutar un comando en la terminal y obtener la salida de ese comando en el proceso de Node.js.
    - Crear un proceso de execFile
