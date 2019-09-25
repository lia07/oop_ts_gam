"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom; //sirve para refenciar a los atributos
        this.capacidad = cap;
    }
    Bar.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Bar.prototype.getNombre = function () {
        return this.nombre;
    };
    Bar.prototype.setCapacidad = function (cap) {
        this.capacidad = cap;
    };
    Bar.prototype.getCapacidad = function () {
        return this.capacidad;
    };
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nomb, apellidos) {
        this.nombre = nomb;
        this.apellido = apellidos;
    }
    BarMan.prototype.setNombre = function (nomb) {
        this.nombre = nomb;
    };
    BarMan.prototype.getNombre = function () {
        return this.nombre;
    };
    BarMan.prototype.setApellido = function (apellidos) {
        this.apellido = apellidos;
    };
    BarMan.prototype.getApellido = function () {
        return this.apellido;
    };
    return BarMan;
}());
exports.BarMan = BarMan;
var Tragos = /** @class */ (function () {
    function Tragos(nombr, colores, cant) {
        this.nombre = nombr;
        this.color = colores;
        this.cantidad = cant;
    }
    Tragos.prototype.setNombre = function (nombr) {
        this.nombre = nombr;
    };
    Tragos.prototype.getNombre = function () {
        return this.nombre;
    };
    Tragos.prototype.setColor = function (colores) {
        this.color = colores;
    };
    Tragos.prototype.getColor = function () {
        return this.color;
    };
    Tragos.prototype.setCantidad = function (cant) {
        this.cantidad = cant;
    };
    Tragos.prototype.getCantidad = function () {
        return this.cantidad;
    };
    return Tragos;
}());
exports.Tragos = Tragos;
var bar1 = new Bar("Nueva era", 50);
var bar2 = new Bar("El patio", 200);
bar1.setNombre("el pueblito");
bar1.setCapacidad(85);
console.log(bar1);
console.log(bar2);
//console.log(bar1.nombre); forma incorrecta de pedir un atributo
//bar1.nombre = "pueblito"; forma incorrecta actualizar un atributo
console.log(bar1.getNombre());
console.log(bar1.getCapacidad());
var barMan1 = new BarMan("Gladys", "Sarzuri");
var barMan2 = new BarMan("Julio", "Gomez");
console.log(barMan1);
console.log(barMan2);
var tragos1 = new Tragos("name", "verde", 150);
var tragos2 = new Tragos("name1", "azul", 80);
console.log(tragos1);
console.log(tragos2);
bar1.setCapacidad(40);
