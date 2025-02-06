## NPM - (Node Package Manager)

- NPM es el sistema de gestión de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript.

- Salio despues de Node.js, y se encarga de la gestión de paquetes y dependencias de Node.js.

- NPM es un repositorio de paquetes de código abierto, que permite a los desarrolladores de software publicar, compartir y reutilizar el código de Node.js.

- No hay que confundir NPM con Node.js, ya que NPM es un paquete de Node.js o la linea de comando.

- Porque puedes usar alternativas de NPM como Yarn, pero NPM es el más popular.

## Inicializar un Proyecto

- Para inicializar un proyecto con NPM, debemos de ejecutar el siguiente comando:

```bash
npm init
```

- Para evitar las preguntas podemos ejecutar el siguiente comando:

```bash 
npm init -y
```

## Package.json

- El archivo `package.json` es un archivo que se crea al inicializar un proyecto con NPM, en este archivo se almacena la información del proyecto, como el nombre, la versión, la descripción, los scripts, las dependencias, entre otros.

## Instalar Dependencias - PicoColors

- Esta misma nos sirve para darle color a la consola, para instalarla debemos de ejecutar el siguiente comando:

```bash
npm i picocolors
```

## Semantic Versioning

- Las versiones de los paquetes de NPM siguen un patrón llamado `Semantic Version`, el cual se compone de 3 números, el primer número es el número de versió

- X.Y.Z => X la versión mayor
            Y la versión menor
            Z la versión de parche  

## Node Modules

- Cuando instalamos un paquete con NPM, este se guarda en una carpeta llamada `node_modules`, en esta carpeta se guardan todas las dependencias de nuestro proyecto.

- No debemos de subir la carpeta `node_modules` a nuestro repositorio de Git, ya que esta carpeta puede llegar a pesar mucho.


## Desinstalar Dependencias

- Para desinstalar una dependencia de nuestro proyecto, debemos de ejecutar el siguiente comando:

```bash
npm uninstall picocolors
```

