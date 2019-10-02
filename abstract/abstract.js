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
var FiguraG = /** @class */ (function () {
    function FiguraG(ancho1, alto) {
        this.ancho1 = ancho1;
        this.alto = alto;
    }
    FiguraG.prototype.getAncho1 = function () {
        return this.ancho1;
    };
    // getAncho2(): number{
    //     return this.ancho2;
    // }
    FiguraG.prototype.getAlto = function () {
        return this.alto;
    };
    return FiguraG;
}());
exports.FiguraG = FiguraG;
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(ancho1, alto, ancho2) {
        var _this = _super.call(this, ancho1, alto) || this;
        _this.ancho2 = ancho2;
        return _this;
    }
    Rectangulo.prototype.getAncho2 = function () {
        return this.ancho2;
    };
    Rectangulo.prototype.getArea = function () {
        var area = this.getAncho1() * this.getAlto();
        return area;
    };
    Rectangulo.prototype.getVolumen = function () {
        var volumen = this.getAncho1() * this.getAlto() * this.getAncho2();
        return volumen;
    };
    return Rectangulo;
}(FiguraG));
exports.Rectangulo = Rectangulo;
var rectangulo1 = new Rectangulo(2, 2, 4);
console.log(rectangulo1.getArea());
var rectangulo2 = new Rectangulo(4, 4, 8);
console.log("volumende rectangulo es:", rectangulo2.getVolumen());
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(ancho1, alto, anchox) {
        var _this = _super.call(this, ancho1, alto) || this;
        _this.anchox = anchox;
        return _this;
    }
    Triangulo.prototype.getAnchox = function () {
        return this.anchox;
    };
    Triangulo.prototype.getArea = function () {
        var area = (this.getAncho1() * this.getAlto()) / 2;
        return area;
    };
    Triangulo.prototype.getVolumen = function () {
        // let volumen = (this.getArea()* this.getAlto())/3;
        var volumen = (this.getAnchox() * this.getAnchox() * this.getAlto()) / 3;
        return volumen; //area de la base por altura/3
    };
    return Triangulo;
}(FiguraG));
exports.Triangulo = Triangulo;
var triangulo1 = new Triangulo(4, 4, 5);
console.log(triangulo1.getArea());
var triangulo2 = new Triangulo(4, 4, 7);
console.log("volumen es:", triangulo1.getVolumen());
