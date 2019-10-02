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
var Operacion = /** @class */ (function () {
    function Operacion(numerox, numeroy) {
        this.numerox = numerox;
        this.numeroy = numeroy;
        //this.resultado = res;
    }
    return Operacion;
}());
exports.Operacion = Operacion;
var Suma = /** @class */ (function (_super) {
    __extends(Suma, _super);
    function Suma(numerox, numeroy) {
        var _this = _super.call(this, numerox, numeroy) || this;
        _this.suma = 0;
        return _this;
    }
    Suma.prototype.SumarNumero = function () {
        this.suma = this.numerox + this.numeroy;
        return suma1;
    };
    return Suma;
}(Operacion));
exports.Suma = Suma;
var suma1 = new Suma(10, 10);
console.log(suma1.SumarNumero());
var Resta = /** @class */ (function (_super) {
    __extends(Resta, _super);
    function Resta(numerox, numeroy, res, resta) {
        var _this = _super.call(this, numerox, numeroy) || this;
        _this.resta = resta;
        return _this;
    }
    return Resta;
}(Operacion));
exports.Resta = Resta;
var Multiplicion = /** @class */ (function (_super) {
    __extends(Multiplicion, _super);
    function Multiplicion(numerox, numeroy, res, mult) {
        var _this = _super.call(this, numerox, numeroy) || this;
        _this.multiplicacion = mult;
        return _this;
    }
    return Multiplicion;
}(Operacion));
exports.Multiplicion = Multiplicion;
var Division = /** @class */ (function (_super) {
    __extends(Division, _super);
    function Division(numerox, numeroy, res, div) {
        var _this = _super.call(this, numerox, numeroy) || this;
        _this.division = div;
        return _this;
    }
    return Division;
}(Operacion));
exports.Division = Division;
/**
 * Prueba
*/
