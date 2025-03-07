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

enum ProductoTipo {
  Tickete = 1,
  Suscripcion,
  Membresia,
}

// Definición de un enum con valores de cadena (string enums)
enum Colores {
  Amarillo = "amarillo",
  Azul = "azul",
  Rojo = "rojo",
}

console.log(DiasSemana.Lunes);
console.log(Estados.Activo);
console.log(Colores.Amarillo);

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
