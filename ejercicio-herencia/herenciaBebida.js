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
var Bebida = /** @class */ (function () {
    function Bebida(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }
    return Bebida;
}());
exports.Bebida = Bebida;
/**
 * para adultos
*/
var RedBull = /** @class */ (function (_super) {
    __extends(RedBull, _super);
    function RedBull(nombre, color, capacidad) {
        var _this = _super.call(this, nombre, color) || this;
        _this.capacidad = capacidad;
        return _this;
    }
    RedBull.prototype.informacionPrincipal = function () {
        return " soy bebida reenergizante";
    };
    RedBull.prototype.diseñar = function () {
        return "\n            \n              (((())))\n              (((())))\n              (((())))\n              (((())))";
    };
    RedBull.prototype.decirMarca = function () {
        return "Red Bull";
    };
    RedBull.prototype.clasificar = function () {
        return "bebida energizante";
    };
    RedBull.prototype.contarContenido = function () {
        return "1L";
    };
    RedBull.prototype.tipificar = function () {
        return "bebida Alcoholica";
    };
    return RedBull;
}(Bebida));
exports.RedBull = RedBull;
/**
 * para niños, adultos para todos
 */
var Energy = /** @class */ (function (_super) {
    __extends(Energy, _super);
    function Energy(nombre, color, sabor) {
        var _this = _super.call(this, nombre, color) || this;
        _this.sabor = sabor;
        return _this;
    }
    Energy.prototype.informacionPrincipal = function () {
        return " soy bebida energizante y vitaminico";
    };
    Energy.prototype.diseñar = function () {
        return "\n             ========\n            ||      ||\n            ||energy||\n            ||______||";
    };
    Energy.prototype.decirMarca = function () {
        return "Energy";
    };
    Energy.prototype.clasificar = function () {
        return "bebida vitaminica";
    };
    Energy.prototype.contarContenido = function () {
        return "1L, 600ml";
    };
    return Energy;
}(Bebida));
exports.Energy = Energy;
/**
 * Para todo edad
 */
var Agua = /** @class */ (function (_super) {
    __extends(Agua, _super);
    function Agua(nombre, color, tipo) {
        var _this = _super.call(this, nombre, color) || this;
        _this.tipo = tipo;
        return _this;
    }
    Agua.prototype.informacionPrincipal = function () {
        return " soy bebida Hidratante";
    };
    Agua.prototype.diseñar = function () {
        return "\n            ==========\n            |__agua__|\n             |      |\n              |____|";
    };
    Agua.prototype.decirMarca = function () {
        return "Coca Cola";
    };
    Agua.prototype.clasificar = function () {
        return "Agua dulce";
    };
    Agua.prototype.contarContenido = function () {
        return "2L, 1L, 600ml";
    };
    return Agua;
}(Bebida));
exports.Agua = Agua;
var Tienda = /** @class */ (function () {
    function Tienda() {
    }
    Tienda.prototype.venderBebida = function (bebida) {
        return "bebida para todo edad";
    };
    return Tienda;
}());
exports.Tienda = Tienda;
//  let agua1:Bebida=new Agua();
//  let redbull1: Bebida=new RedBull();
//  let energy1:Bebida=new Energy();
// let listaBebida: Bebida[]=[];
// listaBebida.push(agua1);
// listaBebida.push(redBull1);
// listaBebida.push(energy1);
//  for(const v of listaBebida){
//      console.log(v.informacionPrincipal());
//  }
var bebida1 = new Agua("Vital", "blanco", "Agua mineral");
var bebida2 = new Energy("Energy", "Anaranjado", "Sabor a naranja");
var bebida3 = new RedBull("RedBull", "Negro", "600ml");
console.log(bebida1, bebida2, bebida3);
console.log(bebida1.diseñar());
console.log(bebida2.diseñar());
console.log(bebida3.diseñar());
var bebida = new Agua("agua", "incolor", "agua vital");
console.log(bebida);
// console.log(bebida1.clasificar());
console.log(bebida2.decirMarca());
// console.log(bebida3.contarContenido());
