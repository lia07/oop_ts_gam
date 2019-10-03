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
var Instrumento = /** @class */ (function () {
    function Instrumento(nombre, color, tamanio, sonido) {
        this.nombre = nombre;
        this.color = color;
        this.tamanio = tamanio;
        this.sonido = sonido;
    }
    return Instrumento;
}());
exports.Instrumento = Instrumento;
var Guitarra = /** @class */ (function (_super) {
    __extends(Guitarra, _super);
    function Guitarra(nombre, color, tamanio, cuerdas, sonido) {
        var _this = _super.call(this, nombre, color, tamanio, sonido) || this;
        _this.cuerdas = cuerdas;
        return _this;
    }
    Guitarra.prototype.nota = function () {
        return "Traste 0: E (mi)  |  Traste 1: F (fa)  | Traste 3: G (sol)  | Traste 5: A (la)";
    };
    return Guitarra;
}(Instrumento));
exports.Guitarra = Guitarra;
var Piano = /** @class */ (function (_super) {
    __extends(Piano, _super);
    function Piano(nombre, color, tamanio, cajaResonancia, sonido) {
        var _this = _super.call(this, nombre, color, tamanio, sonido) || this;
        _this.cajaResonancia = cajaResonancia;
        return _this;
    }
    Piano.prototype.nota = function () {
        return "Do mayor: do \u2013 mi \u2013 sol\n\n    Re menor: re \u2013 fa \u2013 la\n    \n    Mi menor: mi \u2013 sol \u2013 si\n    \n    Fa Mayor: fa \u2013 la \u2013 do\n    \n    Sol mayor: sol \u2013 si \u2013 re\n    \n    La Mayor: la \u2013 do \u2013 mi\n    \n    Si Mayor: si \u2013 re \u2013 fa";
    };
    return Piano;
}(Instrumento));
exports.Piano = Piano;
var Timbal = /** @class */ (function (_super) {
    __extends(Timbal, _super);
    function Timbal(nombre, color, tamanio, sonido, baqueta) {
        var _this = _super.call(this, nombre, color, tamanio, sonido) || this;
        _this.baqueta = baqueta;
        return _this;
    }
    Timbal.prototype.nota = function () {
        return "\n            _______________________d_______\n            ________________d______________\n            _________d_____________________\n            ___d___________________________\n            ___________________________d___";
    };
    return Timbal;
}(Instrumento));
exports.Timbal = Timbal;
var instrumento1 = new Timbal("Timbal", "cafe", "2m", "graves", 2);
var instrumento2 = new Guitarra("guitarra", "cafe", "2m", 6, "agudas");
var instrumento3 = new Piano("piano", "negro", "4m", 2, "graves");
console.log(instrumento1, instrumento2, instrumento3);
console.log(instrumento1.nota());
console.log(instrumento2.nota());
console.log(instrumento3.nota());
