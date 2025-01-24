## Instalación 

### Para instalar el proyecto en tu máquina local, sigue los siguientes pasos:

1. Entrar a la pagina de Node js y descargar la versión LTS.

2. Una ves descarga dale continuar y sigue los pasos de instalación.

3. Abre tu terminal y escribe el siguiente comando para verificar que la instalación fue exitosa.

```bash
node -v
# v22.13.0

```

## Primer pasos en Node JS

### Para crear un proyecto en Node JS sigue los siguientes pasos:

1. Abre tu terminal y escribe el siguiente comando para crear una carpeta.

```bash

mkdir nombre_carpeta

```

2. Una ves creada la carpeta, entra a ella con el siguiente comando.

```bash

cd nombre_carpeta

```

3. Ahora escribe el siguiente comando para inicializar el proyecto.

```bash

npm init -y

```

4. Ahora escribe el siguiente comando para instalar express.

```bash

npm install express

```

5. Ahora escribe el siguiente comando para instalar nodemon.

<br/>
 - Nodemon es una herramienta que ayuda a desarrollar aplicaciones basadas en node.js reiniciando automáticamente la aplicación cuando se detectan cambios en el directorio.
<br/>

```bash

npm install nodemon -D

```

6. Ahora escribe el siguiente comando para crear un archivo index.js.


```bash

touch index.js

```

7. Ahora escribe el siguiente comando para abrir el archivo la carpeta en Visual Studio Code.

```bash

code .

```

8. Ahora escribe el siguiente código en el archivo index.js.

```javascript

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

```

9. Ahora escribe el siguiente comando para correr el servidor.

```bash

npx nodemon index.js

```

10. Abre tu navegador y escribe la siguiente dirección.

```bash

http://localhost:3000/

```

11. Listo, has creado tu primer servidor en Node JS.

### Paso extrar

#### Configurar el archivo package.json para correr el servidor con un solo comando.

1. Abre el archivo package.json y busca la siguiente línea.

```json

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    // Aquí es donde se escriben los comandos para correr el servidor.
  },

```

2. Ahora escribe el siguiente código en la línea de "test".

```json

"dev": "nodemon index.js"

```

3. Ahora escribe el siguiente comando para correr el servidor.

```bash

npm run dev

```



