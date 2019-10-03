"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica(nombre, posx, posy) {
        this.nombre = nombre;
        this.posX = posx;
        this.posY = posy;
    }
    FiguraGeometrica.prototype.getPrincipalInf = function () {
        return "Nombre de la Figura: " + this.nombre + ".\n        Posicion en el eje X: " + this.posX + ".\n        Posicion en el eje Y: " + this.posY + "."; // "+THIS.NOMBRE+"+"....
    };
    return FiguraGeometrica;
}());
exports.FiguraGeometrica = FiguraGeometrica;
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(nombre, posX, posY, ba, al) {
        var _this = _super.call(this, nombre, posX, posY) || this;
        _this.base = ba;
        _this.altura = al;
        return _this;
    }
    Triangulo.prototype.dibujar = function () {
        return "\n                  *\n                 ***\n                *****\n               ******";
    };
    Triangulo.prototype.getPrincipalInf = function () {
        return "Soy una Figura rebelde:\n        Mi nombre es: " + this.nombre + ".\n        Mi Altura es: " + this.altura + ".\n        Mi base es : " + this.base + ".";
    };
    return Triangulo;
}(FiguraGeometrica));
exports.Triangulo = Triangulo;
var Cuadrado = /** @class */ (function (_super) {
    __extends(Cuadrado, _super);
    function Cuadrado(nom, posX, posY, ba, al) {
        var _this = _super.call(this, nom, posX, posY) || this;
        _this.base = ba;
        _this.altura = al;
        return _this;
    }
    Cuadrado.prototype.dibujar = function () {
        return "\n                ________\n               |        |\n               |        |\n               |________|";
    };
    return Cuadrado;
}(FiguraGeometrica));
exports.Cuadrado = Cuadrado;
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(nombre, posX, posY, r) {
        var _this = _super.call(this, nombre, posX, posY) || this;
        _this.radio = r;
        return _this;
    }
    Circulo.prototype.dibujar = function () {
        return "\n               ***\n             *     *\n             *     *\n               *** ";
    };
    return Circulo;
}(FiguraGeometrica));
exports.Circulo = Circulo;
var Rectangulo = /** @class */ (function () {
    function Rectangulo(nom, ba, al) {
        this.nombre = nom;
        this.base = ba;
        this.altura = al;
    }
    return Rectangulo;
}());
exports.Rectangulo = Rectangulo;
var figuraGeometrica1 = new Triangulo("t escaleno", 2, 2, 5, 8); // aqui yo defino
var figuraGeometrica2 = new Circulo("Circulo", 2, 2, 5);
// let figuraGeometrica3 : FiguraGeometrica = new Cuadrado("Cuadrado", 0,0,20);
console.log(figuraGeometrica1.dibujar());
console.log(figuraGeometrica2.dibujar());
// console.log(figuraGeometrica3.dibujar());
