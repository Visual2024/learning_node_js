## Console.log en Node js  

En Node JS, la función `console.log()` se utiliza para imprimir mensajes en la consola. Por ejemplo, si queremos imprimir un mensaje en la consola, podemos hacerlo de la siguiente manera:

```javascript

console.log('Hola Mundo');
console.info('Hola Mundo');
console.warn('Hola Mundo');
console.error('Hola Mundo');

```

### Corre codigo con Node js dentro de la terminal de Visual Studio Code

```bash

node index.js

```

## Variables Globales en Node js / 23:15

- Dentro de Node Js no tenemos window, pero tenemos `global` que es una variable global que se puede acceder desde cualquier parte del código.

```javascript

global.miVariable = 'Hola Mundo';

console.log(miVariable);

```

- Dentro de Node js, como en el navegador tenemos el famoso `globalThis` que es una variable global que se puede acceder desde cualquier parte del código.

- No importa si estamos en un archivo o en otro, siempre podremos acceder a esta variable.

- Lo que pasa que en el navegador window es una variable global, pero en Node js no existe window, por eso se utiliza `globalThis`.


```javascript

globalThis.miVariable = 'Hola Mundo';

console.log(miVariable);

```

### De donde sale el console.log?

- El objeto `console` es un objeto global que se puede acceder desde cualquier parte del código.

- Dentro de este objeto tenemos varios métodos como `log`, `info`, `warn`, `error`, etc.

Ejemplo 

```javascript

globalThis.console.log("Hola Mundo");

```

- Cualquier cosa que usen, como promesas, callback, todo eso sale de la variable global `globalThis`.



## Patrones de diseño en Node js

- Cuando estamos trabajando con Node js, no vamos a trabajar todo en un mismo archivo, sino que vamos a trabajar con varios archivos.

- Por eso es importante conocer los patrones de diseño en Node js, ya que nos ayudan a escribir código limpio y mantenible.

- En Node js, los patrones de diseño son muy importantes, ya que nos ayudan a escribir código limpio y mantenible.

- Algunos de los patrones de diseño más comunes en Node js son:

1. Module
2. Factory
3. Observer
4. Strategy
5. Decorator
6. Adapter
7. Facade
8. Proxy
9. Command
10. Chain of Responsibility
11. Template Method
12. State
13. Mediator
14. Memento
15. Iterator

- Estos son solo algunos de los patrones de diseño más comunes en Node js, pero hay muchos más.

- Los patrones de diseño son muy importantes en Node js, ya que nos ayudan a escribir código limpio y mantenible.

- Algunos de los beneficios de los patrones de diseño en Node js son:

1. Reutilización de código
2. Facilidad de mantenimiento
3. Facilidad de extensión
4. Facilidad de comprensión
5. Facilidad de depuración

- En resumen, los patrones de diseño son muy importantes en Node js, ya que nos ayudan a escribir código limpio y mantenible.

- Dentro de todos los patrones ahi uno que se llama `Module` que es el más utilizado en Node js.

- Es un patron de código que lo que vamos hacer es separar nuestro código en diferentes archivos. Y lo vamos a poder exportar e importar en otros archivos, para que este código sea reutilizable.

- Dentro de este ejemplo tenemos todo dentro de un solo archivo, en donde tenemos una función que se llama `sum` que recibe dos parámetros y retorna la suma de esos dos parámetros.

```javascript

function sum(a, b) {
    return a + b;
}

console.log(sum(2,3)); // 6

```
### CommonJS Modules Export

- Ahora vamos a separar este código en diferentes archivos.

- Vamos a crear un archivo que se llama `sum.js` y vamos a pegar la función `sum` dentro de este archivo.

```javascript  

// sum.js

function sum(a, b) {
    return a + b;
}

module.exports = sum;

```

### ES Module : 

- Ahora vamos a crear un archivo que se llama `index.js` y vamos a importar la función `sum` desde el archivo `sum.js`.

```javascript

// index.js

const sum = require('./sum');

console.log(sum(2,3)); // 6

```

- Ahora dentro del mismo exportamos de una manera antigua, pero en la actualidad se exporta de la siguiente manera.

```javascript

// sum.js

export function sum(a, b) {
    return a + b;
}

```

- Ahora en el archivo `index.js` importamos de la siguiente manera.

```javascript

// index.js

import { sum } from './sum';

console.log(sum(2,3)); // 6

```

- Para actualizar el código a la nueva forma de exportar e importar, debemos de cambiar el archivo `package.json` y agregar `"type": "module"`.

```json

{
  "type": "module"
}

```

- Ahora en el archivo `index.js` importamos de la siguiente manera.

```javascript

// index.js

import { sum } from './sum.js';

console.log(sum(2,3)); // 6

```

- Ahora en el archivo `sum.js` exportamos de la siguiente manera.

```javascript

// sum.js

export function sum(a, b) {
    return a + b;
}

```

