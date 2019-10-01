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
/**Resuelva el siguiente problema usando programación Orientada objetos
 * y herencia: Se necesita implementar un sistema para la venta de películas
 * en formatos cd, dvd, blu-ray. Donde debe estar involucrado al cliente. Se debe
 *  guardar cds,  dvds, el monto total percibido por la venta de dvds. Se debe  poder
 *  calcular  el  monto total percibido por la venta de cds. Se debe poder calcular  el
 * monto total percibido por la venta  de blu-rays.  Se debe poder calcular el monto total
 *  percibido por la venta de cds, dvds y blu-ray. Los 3 tipos de discos
 *  deben guardar en una lista.
 */
var Disco = /** @class */ (function () {
    function Disco(nom, pr) {
        this.nombre = nom;
        this.precio = pr;
    }
    return Disco;
}());
exports.Disco = Disco;
var Cd = /** @class */ (function (_super) {
    __extends(Cd, _super);
    function Cd(nom, pr) {
        return _super.call(this, nom, pr) || this;
    }
    return Cd;
}(Disco));
exports.Cd = Cd;
var Dvd = /** @class */ (function (_super) {
    __extends(Dvd, _super);
    function Dvd(nom, pr) {
        return _super.call(this, nom, pr) || this;
    }
    return Dvd;
}(Disco));
exports.Dvd = Dvd;
var Bluray = /** @class */ (function (_super) {
    __extends(Bluray, _super);
    function Bluray(nom, pr) {
        return _super.call(this, nom, pr) || this;
    }
    return Bluray;
}(Disco));
exports.Bluray = Bluray;
var Cliente = /** @class */ (function () {
    function Cliente(nom, ap, ed) {
        this.nombre = nom;
        this.apellido = ap;
        this.edad = ed;
    }
    return Cliente;
}());
exports.Cliente = Cliente;
var TiendaDisco = /** @class */ (function () {
    function TiendaDisco(cu, est, fe) {
        this.curso = cu;
    }
    return TiendaDisco;
}());
exports.TiendaDisco = TiendaDisco;
var VentaDisco = /** @class */ (function () {
    function VentaDisco(cu, est, fe) {
        this.curso = cu;
    }
    return VentaDisco;
}());
exports.VentaDisco = VentaDisco;
