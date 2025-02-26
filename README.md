# Typescript

## Requisitos iniciales

Asegurarse de que las dependencias se encuentren instaladas

- **Node:** `$ node -v`
- **NPM:** `$ npm -v`
- **Typescript:** `$ tsc -v`

Si las dependencias no se encuentran instaladas, proceda a instalarlas o a actualizarlas

- **Node:** Ir a la [pagina de node](https://nodejs.org/es) y descargar el instalador con la última versión disponible.
- **NPM:** Se instala junto con node o usando el comando `$ npm install -g npm@version` para actualizar
- **Typescript:** Se puede instalar de forma global en el sistema operativo usando el comando `$ npm install -g typescript`

## Introducción

TODO: Crear introducción

## Primeros pasos

### Generar traducción de typescript a javascript

En la carpeta `./01-Instalacion` se encuentran los archivos necesarios para iniciar con la explicación de como funciona Typescript. Esta carpeta contiene un archivo `index.html` y un archivo `script.ts` el cual nos servirá para iniciar con la explicación.

El archivo `index.html` contiene la instrucción para agregar un script de javascript, ya que los archivos html solo pueden entender este lenguaje de programacion.

Con la ayuda de typescript, vamos a traducir el archivo .ts y a generar de forma automática el archivo .js que se trata de incluir en la pagina web con el comando `tsc script.ts` ejecutado desde la terminal. Al ejecutar este comando, se va a crear un nuevo archivo `script.js` que se incluye en el archivo HTML

### Modo observador

El comando anteriormente descrito tiene un parámetro adicional que permite que revise cada cambio realizado en el archivo y actualice la traducción al momento en que los cambios sean guardados. El comando anterior se puede modificar agregando el parámetro watch de la siguiente manera para que observe si existen cambios: `tsc script.ts -w`
