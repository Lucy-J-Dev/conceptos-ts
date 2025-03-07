# Typescript

## Requisitos iniciales

Asegurarse de que las dependencias se encuentren instaladas

- **Node:** `$ node -v`
- **NPM:** `$ npm -v`
- **Typescript:** `$ tsc -v`

Si las dependencias no se encuentran instaladas, proceda a instalarlas o a actualizarlas

- **Node:** Ir a la [pagina de node](https://nodejs.org/es) y descargar el instalador con la última versión disponible.
- **NPM:** Se instala junto con node o usando el comando `$ npm install -g npm@{version}` para actualizar
- **Typescript:** Se puede instalar de forma global en el sistema operativo usando el comando `$ npm install -g typescript`

## Introducción

# ¿Qué es TypeScript?

TypeScript es un **superset de JavaScript** que añade **tipado estático** y otras características avanzadas al lenguaje. Fue desarrollado por Microsoft para mejorar la escalabilidad y mantenibilidad del código en proyectos grandes.

---

## 🔹 **Características principales de TypeScript**

### 1. **Tipado estático** 🛠️

- Permite definir tipos explícitos para variables, funciones y objetos.
- Ayuda a detectar errores antes de ejecutar el código.

```ts
let nombre: string = "Lucy";
let edad: number = 30;
```

### 2. **Interfaces y tipos** 📋

- Se pueden definir estructuras de datos de manera clara y reutilizable.

```ts
interface Persona {
  nombre: string;
  edad: number;
}

const usuario: Persona = { nombre: "Lucy", edad: 30 };
```

### 3. **Compilación a JavaScript** ⚡

- TypeScript se compila a JavaScript estándar, compatible con cualquier navegador o entorno Node.js.

### 4. **Soporte para programación orientada a objetos (POO)** 🏗️

- TypeScript incluye clases, interfaces, herencia y modificadores de acceso (`public`, `private`, `protected`).

```ts
class Persona {
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}

const persona = new Persona("Lucy");
console.log(persona.saludar());
```

### 5. **Mejor autocompletado y detección de errores** 🚀

- Los editores como **Visual Studio Code** pueden ofrecer mejor ayuda con autocompletado, documentación y detección temprana de errores.

### 6. **Compatibilidad con JavaScript** 🔄

- Puedes usar código JavaScript normal dentro de TypeScript, lo que permite migraciones graduales.

---

## 🔹 **¿Por qué usar TypeScript?**

✅ **Mayor seguridad en el código** gracias al tipado.  
✅ **Mejor mantenibilidad** en proyectos grandes.  
✅ **Evita errores comunes** en JavaScript.  
✅ **Facilita el trabajo en equipo** con código más claro y predecible.

### 🚀 **Conclusión**

TypeScript es una excelente opción para desarrolladores frontend y backend que buscan mejorar la calidad y escalabilidad de su código. Se usa ampliamente en frameworks como **Angular, React y Vue**.

Si quieres aprender más sobre TypeScript, ¡te recomiendo empezar con ejercicios prácticos en [TypeScript Playground](https://www.typescriptlang.org/play)! 🎯

## Primeros pasos

### Generar traducción de typescript a javascript

En la carpeta `./01-Instalacion` se encuentran los archivos necesarios para iniciar con la explicación de como funciona Typescript. Esta carpeta contiene un archivo `index.html` y un archivo `script.ts` el cual nos servirá para iniciar con la explicación.

El archivo `index.html` contiene la instrucción para agregar un script de javascript, ya que los archivos html solo pueden entender este lenguaje de programacion.

Con la ayuda de typescript, vamos a traducir el archivo .ts y a generar de forma automática el archivo .js que se trata de incluir en la pagina web con el comando `tsc script.ts` ejecutado desde la terminal. Al ejecutar este comando, se va a crear un nuevo archivo `script.js` que se incluye en el archivo HTML

### Modo observador

El comando anteriormente descrito tiene un parámetro adicional que permite que revise cada cambio realizado en el archivo y actualice la traducción al momento en que los cambios sean guardados. El comando anterior se puede modificar agregando el parámetro watch de la siguiente manera para que observe si existen cambios: `tsc script.ts -w`

## Configuracion de Typescript

Ahora vamos a pasar a la carpeta `02-proyecto-ts` en donde vamos a realizar la configuración de un proyecto en ts.

Para iniciar, vamos a usar la terminal, ubicandonos en dicha carpeta y ejecutar el comando `tsc -init` esto nos va a crear un archivo llamado `tsconfig.json` el cual contiene todas las configuraciones para iniciar un proyecto basado en typescript. La salida del comando ejecutado en la terminal se verá parecido a:

```bash
Created a new tsconfig.json with: TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
```

Una vez creado este archivo de configuración, Typescript puede observar multiples archivos creados en ts y puede traducirlos a todos en lenjuage js dependiendo de las configuraciones establecidas.

Una vez iniciado el proyecto typescript se puede usar el comando `$ tsc -w` para iniciar la traducción de todos los archivos

## Tipos de datos en Typescript

Se basan en los tipos de datos de javascript, que son:

- Primitivos: (string, number, boolean, undefined, null, symbol)
- Objetos: (object, array, function, enum\*)
- Definidos por el usuario:\* (class, interface, type)

### Primitivos

**STRING**

```ts
// Comillas dobles
const str1: string = "Hola, soy una cadena con comillas dobles.";
// Comillas simples
const str2: string = "Hola, soy una cadena con comillas simples.";

// Template literals - string interpolation (backticks)
const name: string = "Juan";
const str3: string = `Hola, mi nombre es ${name}.`;
```

**NUMBER**

```ts
// Números enteros
const num1: number = 10;

// Números decimales
const num2: number = 10.25;

// Notación exponencial
const num3: number = 2.5e3; // 2.5 * 10^3 = 2500

// Notación exponencial negativa
const num4: number = 1.5e-2; // 1.5 * 10^-2 = 0.015

// Hexadecimales (base 16) utilizando el prefijo "0x"
const num5: number = 0xa; // Valor decimal: 10

// Octales (base 8) utilizando el prefijo "0o"
const num6: number = 0o12; // Valor decimal: 10

// Binarios (base 2) utilizando el prefijo "0b"
const num7: number = 0b1010; // Balor decimal 10
```

**BOOLEAN**

```ts
// Valor booleano verdadero
const bool1: boolean = true;

// Valor booleano falso
const bool2: boolean = false;
```

**UNDEFINED**

```ts
// Declaración de una variable con valor undefined
let undVariable: undefined;

// Asignación de valor undefined
undVariable = undefined;
```

**NULL**

```ts
// Declaración de una variable con valor null
let nullVariable: null;

// Asignación de valor null
nullVariable = null;
```

**ARRAYS**

```ts
// Arreglo de números
const numbers: number[] = [1, 2, 3, 4, 5];

// Arreglo de cadenas de texto
const names: string[] = ["Lucy", "Ale", "Jairo"];

// Arreglo de booleanos
const boolValues: boolean[] = [true, false, true, false];

// Arreglo con tipos combinados
const identificaciones: (string | number)[] = ["ABC123", 1825464];

// etc
```

**FUNCTIONS**

```ts
// Declaración de función con tipado explícito
function sum(num1: number, num2: number): number {
  return num1 + num2;
}

// Declaración de función flecha con retorno implícito (inferido por Typescript)
const multiply = (num1: number, num2: number) => a * b;

// Funciones con parámetros opcionales marcados con simbolo de interrogación (?)
function greet(name: string, age?: number): string {
  if (age) {
    return `Hi, my name is ${name} and I am ${age} years old.`;
  } else {
    return `Hi, my name is ${name}`;
  }
}

//Funciones con parámetros por defecto
function greet2(name: string, age: number = 30): string {
  return `Hi, my name is ${name} and I am ${age} years old.`;
}
```

**ENUM**

```ts
// Definición de un enum para días de la semana
enum DiasSemana {
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sabado,
  Domingo,
}

// Definición de un enum con valores de cadena (string enums)
enum Colores {
  Amarillo = "amarillo",
  Azul = "azul",
  Rojo = "rojo",
}
```

**CLASSES**

```ts
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, my name is ${name}.`);
  }
}
```

**INTERFACES**

```ts
// Interface básica
interface People {
  name: string;
  age: number;
}

// Interface con propiedades opcionales
interface Product {
  name: string;
  price: number;
  description?: string;
}

// Interface para funciones
interface Greet {
  (name: string, age: number): string;
}

// Interface para classes
interface People {
  name: string;
  age: number;
  greet(): void;
}
```

**TYPE**

```ts
// type básico
type Numero = number;

// type básico objeto literal
type Person = {
  name: string;
  age: number;
};

// type con unión de tipos o combinación de tipos
type Name = string | null;

// type con propiedades opcionales (?)
type Product = {
  name: string;
  price: number;
  description?: string;
};

// type para funciones
type Greet = {
  (name: string, age: number): string;
};

// type para clases
type People = {
  name: string;
  age: number;
  greet(): void;
};
```

# Diferencias entre `interface` y `type` en TypeScript

En TypeScript, tanto `interface` como `type` permiten definir estructuras de datos, pero tienen diferencias clave en su uso y capacidades. A continuación, exploraremos sus similitudes, diferencias y casos de uso recomendados.

---

## 📌 Similitudes entre `interface` y `type`

- Ambos permiten definir la estructura de un objeto.
- Se pueden extender para reutilizar definiciones.
- Funcionan para tipar parámetros y retornos de funciones.

A pesar de estas similitudes, existen diferencias importantes en cómo funcionan y en qué situaciones es mejor usar uno u otro.

---

## ⚡ Diferencias Clave entre `interface` y `type`

| Característica                    | `interface`                                                   | `type`                                                                                     |
| --------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Extensibilidad**                | Se pueden extender con `extends`.                             | Se combinan con `&` (intersección).                                                        |
| **Composición**                   | Se pueden fusionar automáticamente si tienen el mismo nombre. | No se fusionan si tienen el mismo nombre.                                                  |
| **Usos**                          | Ideal para definir estructuras de objetos y contratos.        | Útil para alias de tipos, unir tipos (`&` y `\|`), y definir tipos primitivos o funciones. |
| **Soporte para uniones (`\|`)**   | ❌ No soporta uniones.                                        | ✅ Puede definir uniones de tipos.                                                         |
| **Soporte para tipos primitivos** | ❌ Solo objetos y clases.                                     | ✅ Puede ser un alias de cualquier tipo.                                                   |

---

## 📌 Ejemplos Prácticos

### 1️⃣ **Extensión en `interface`**

Una `interface` permite extender otra para añadir nuevas propiedades.

```ts
interface Persona {
  nombre: string;
}

interface Empleado extends Persona {
  salario: number;
}

const dev: Empleado = { nombre: "Lucy", salario: 2000 };
```

### 2️⃣ **Combinación en `type` con intersección (`&`)**

Los `type` pueden combinarse usando `&` para crear nuevos tipos a partir de otros.

```ts
type Persona = { nombre: string };
type Empleado = Persona & { salario: number };

const dev: Empleado = { nombre: "Lucy", salario: 2000 };
```

### 3️⃣ **Unión con `type` (`|`)**

Solo `type` permite definir uniones de tipos.

```ts
type Estado = "activo" | "inactivo"; // No se puede hacer con interfaces
```

### 4️⃣ **Fusión automática de `interface`**

Si se definen múltiples interfaces con el mismo nombre, TypeScript las fusiona automáticamente.

```ts
interface Usuario {
  nombre: string;
}
interface Usuario {
  edad: number;
} // Se fusiona automáticamente

const user: Usuario = { nombre: "Lucy", edad: 30 };
```

### 5️⃣ **Alias de tipos con `type`**

Los `type` pueden actuar como alias de tipos primitivos o funciones.

```ts
type Id = string | number; // Se puede usar como alias para tipos primitivos
```

---

## 🚀 ¿Cuál deberías usar?

| Situación                                     | Usa `interface`   | Usa `type`  |
| --------------------------------------------- | ----------------- | ----------- |
| Definir la estructura de un objeto            | ✅ Sí             | ✅ Sí       |
| Extender estructuras existentes               | ✅ Sí (`extends`) | ✅ Sí (`&`) |
| Fusionar definiciones automáticamente         | ✅ Sí             | ❌ No       |
| Definir alias de tipos primitivos o funciones | ❌ No             | ✅ Sí       |
| Usar uniones (`\|`)                           | ❌ No             | ✅ Sí       |

**Recomendación:**

- Usa **`interface`** si estás definiendo objetos y necesitas la capacidad de fusión automática.
- Usa **`type`** cuando necesitas alias de tipos, uniones (`|`), o definir tipos primitivos y funciones.

En general, **se recomienda usar `interface` para definir objetos** y **`type` para alias de tipos y combinaciones complejas**. 🎯
