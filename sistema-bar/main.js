"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom; //sirve para refenciar a los atributos
        this.capacidad = cap;
    }
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nomb, apellidos) {
        this.nombre = nomb;
        this.apellido = apellidos;
    }
    return BarMan;
}());
exports.BarMan = BarMan;
var Tragos = /** @class */ (function () {
    function Tragos(nombr, colores, cant) {
        this.nombre = nombr;
        this.color = colores;
        this.cantidad = cant;
    }
    return Tragos;
}());
exports.Tragos = Tragos;
/**
 * CONCEPTO: Los atributos son las caracteristicas indibiduales
 * que diferencian un objeto de otro y determinan  su apariencia
 * estado u otros cualidades. Los atributos se guardan en variables
 *  denominadasde instancia, y cada objeto particular puede tene
 * valores distintos para estas variables.
 * CONSTRUCTOR:en programacion orientada a objetos (poo), un constructor
 * es una subrutina cuya mision es inicializar en un objeto
 * de una clase con valores predeterminados
*/
/************************************************/
// let bar1: Bar = new Bar("Nueva Era2", 50);
// let bar2: Bar = new Bar("El patio", 20);
var bar1 = new Bar("Nueva era", 50);
var bar2 = new Bar("El patio", 200);
console.log(bar1);
console.log(bar2);
var barMan1 = new BarMan("Gladys", "Sarzuri");
var barMan2 = new BarMan("aaa", "bb");
console.log(barMan1);
console.log(barMan2);
var tragos1 = new Tragos("name", "verde", 150);
var tragos2 = new Tragos("name1", "azul", 80);
console.log(tragos1);
console.log(tragos2);
