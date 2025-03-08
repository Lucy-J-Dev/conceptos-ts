console.log("Bienvenidos al curso de TS!!!");
var nombre = "Lucy";
var graduado = false;
console.log("Hola ".concat(nombre));
nombre = "Ale";
console.log("Hola ".concat(nombre));
var edad;
edad = 20;
edad = 50;
var studentName = "Pepito";
var studentAge = 25;
var str3 = "Hola, mi nombre es ".concat(studentName, " y tengo ").concat(studentAge, " a\u00F1os.");
console.log(str3);
var texto = "Hola, esto es " + "un texto " + "unido con +";
console.log(texto);
var lenguajes = ["js", "c#", "pyton"];
var numeros = [1, 2, 3];
var luces = [true, false, true, false];
var funciones = [function () { }, function () { }, function () { }];
var f1 = funciones[0];
var identificaciones = ["ABC123", 1825464];
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
var sumar = function (num1, num2) {
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
var resultado = sumar(5, 8);
console.log(resultado.resultado);
var paises = function (_a) {
    var codigoPais = _a.codigoPais, codigoTelefono = _a.codigoTelefono;
    return {
        cp: codigoPais,
        ct: codigoTelefono,
    };
};
// Definición de un enum para días de la semana
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Lunes"] = 0] = "Lunes";
    DiasSemana[DiasSemana["Martes"] = 1] = "Martes";
    DiasSemana[DiasSemana["Miercoles"] = 2] = "Miercoles";
    DiasSemana[DiasSemana["Jueves"] = 3] = "Jueves";
    DiasSemana[DiasSemana["Viernes"] = 4] = "Viernes";
    DiasSemana[DiasSemana["Sabado"] = 5] = "Sabado";
    DiasSemana[DiasSemana["Domingo"] = 6] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
var Estados;
(function (Estados) {
    Estados[Estados["Activo"] = 1] = "Activo";
    Estados[Estados["Inactivo"] = 0] = "Inactivo";
})(Estados || (Estados = {}));
// Definición de un enum con valores de cadena (string enums)
var Colores;
(function (Colores) {
    Colores["Amarillo"] = "amarillo";
    Colores["Azul"] = "azul";
    Colores["Rojo"] = "rojo";
})(Colores || (Colores = {}));
var ProductoTipo;
(function (ProductoTipo) {
    ProductoTipo[ProductoTipo["Tickete"] = 1] = "Tickete";
    ProductoTipo[ProductoTipo["Suscripcion"] = 2] = "Suscripcion";
    ProductoTipo[ProductoTipo["Membresia"] = 3] = "Membresia";
})(ProductoTipo || (ProductoTipo = {}));
console.log("Lunes: " + DiasSemana.Lunes);
console.log("Estado activo: " + Estados.Activo);
console.log("Estado inactivo: " + Estados.Inactivo);
console.log(Colores.Amarillo);
console.log(Colores.Azul);
console.log("Tickete: " + ProductoTipo.Tickete);
console.log("Suscripcion: " + ProductoTipo.Suscripcion);
console.log("Membresia: " + ProductoTipo.Membresia);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hi, my name is ".concat(this.name, "."));
    };
    return Person;
}());
var personaLucy = new Person("Lucy");
personaLucy.greet();
var personaOscar = new Person("Oscar J.");
personaOscar.greet();
var miNumero = undefined;
var lucy = {
    name: "Lucy",
    age: 25,
    address: "mi casa",
};
var ale = {
    name: "Ale",
    age: 15,
};
console.log(lucy.name + " " + lucy.age + " " + lucy.address);
console.log("".concat(ale.name, " - ").concat(ale.age));
var saludar = function (name, age) { return "Hola ".concat(name, " - ").concat(age); };
var saludar2 = function (param1, param2) {
    return "";
};
