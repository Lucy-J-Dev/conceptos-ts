console.log("Bienvenidos al curso de TS!!!");
let nombre = "Lucy";
let graduado = false;
console.log(`Hola ${nombre}`);

nombre = "Ale";
console.log(`Hola ${nombre}`);

let edad: number;
edad = 20;
edad = 50;

const studentName: string = "Pepito";
const studentAge: number = 25;
const str3: string = `Hola, mi nombre es ${studentName} y tengo ${studentAge} años.`;

console.log(str3);

const texto: string = "Hola, esto es " + "un texto " + "unido con +";
console.log(texto);

const lenguajes: string[] = ["js", "c#", "pyton"];
const numeros: number[] = [1, 2, 3];
const luces: boolean[] = [true, false, true, false];

const funciones: object[] = [() => {}, () => {}, () => {}];

const f1 = funciones[0];

const identificaciones: (string | number)[] = ["ABC123", 1825464];

// type ObjetoSumar = {
//   numeroA: number;
//   numeroB: number;
//   resultado: number;
// };

// interface IObjetoSumar {
//   numeroA: number;
//   numeroB: number;
//   resultado: number;
// }

const sumar = (num1: number, num2: number): object => {
  //   return num1 + num2;
  //   return `El resultado de la suma de los numeros ${num1} y ${num2} es igual a ${
  //     num1 + num2
  //   }`;
  //   console.log(num1 + num2);
  return {
    numeroA: num1,
    numeroB: num2,
    resultado: num1 + num2,
  };
};

const resultado = sumar(5, 8);
console.log(resultado.resultado);

const paises = ({ codigoPais, codigoTelefono }: { codigoPais: string; codigoTelefono: number }) => {
  return {
    cp: codigoPais,
    ct: codigoTelefono,
  };
};

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

enum Estados {
  Activo = 1,
  Inactivo = 0,
}
// Definición de un enum con valores de cadena (string enums)
enum Colores {
  Amarillo = "amarillo",
  Azul = "azul",
  Rojo = "rojo",
}

enum ProductoTipo {
  Tickete = 1,
  Suscripcion,
  Membresia,
}

console.log("Lunes: " + DiasSemana.Lunes);
console.log("Estado activo: " + Estados.Activo);
console.log("Estado inactivo: " + Estados.Inactivo);
console.log(Colores.Amarillo);
console.log(Colores.Azul);

console.log("Tickete: " + ProductoTipo.Tickete);
console.log("Suscripcion: " + ProductoTipo.Suscripcion);
console.log("Membresia: " + ProductoTipo.Membresia);

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, my name is ${this.name}.`);
  }
}

const personaLucy = new Person("Lucy");
personaLucy.greet();

const personaOscar = new Person("Oscar J.");
personaOscar.greet();

// Interface básica
// interface People1 {
//   name: string;
//   age: number;
//   address?: string;
// }

// const lucia: People1 = {
//   name: "Lucia",
//   age: 60,
//   address: "su casa",
// };

// const ale: People1 = {
//   name: "Ale",
//   age: 15,
// };

// console.log(lucia.name + " " + lucia.age + " " + lucia.address);
// console.log(ale.name + " " + ale.age);

// // Interface con propiedades opcionales
// interface Product {
//   name: string;
//   price: number;
//   description?: string;
// }

// // Interface para funciones
// interface Greet {
//   (name: string, age: number): string;
// }

// // Interface para classes
// interface People {
//   name: string;
//   age: number;
//   greet(): void;
// }

// type básico
type Numero = number | undefined;
const miNumero: Numero = undefined;

// type básico objeto literal
type Person2 = {
  name: string;
  age: Numero;
  address?: string;
};

const lucy: Person2 = {
  name: "Lucy",
  age: 25,
  address: "mi casa",
};

const ale: Person2 = {
  name: "Ale",
  age: 15,
};

console.log(lucy.name + " " + lucy.age + " " + lucy.address);
console.log(`${ale.name} - ${ale.age}`);

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

type Greet2 = (name: string, age: number) => string;

const saludar: Greet = (name, age) => `Hola ${name} - ${age}`;

const saludar2 = (param1: string, param2: number): string => {
  return "";
};

// type para clases
type People = {
  name: string;
  age: number;
  greet(): void;
};
