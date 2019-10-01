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
    return Circulo;
}(FiguraGeometrica));
exports.Circulo = Circulo;
var Rectangulo = /** @class */ (function () {
    function Rectangulo(ba, al) {
        this.base = ba;
        this.altura = al;
    }
    return Rectangulo;
}());
exports.Rectangulo = Rectangulo;
var triangulo1 = new Triangulo("Equilatero", 10, 15, 5, 6);
console.log(triangulo1);
var figuraGeometrica1 = new Circulo("circulo", 11, 12, 10);
var resultado = figuraGeometrica1 instanceof Circulo;
console.log(resultado);
var figuraGeometrica2 = new Cuadrado("cuadrado", 1, 2, 3, 4);
var resultado = figuraGeometrica2 instanceof Triangulo;
console.log(resultado);
