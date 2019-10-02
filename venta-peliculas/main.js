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
    function Disco(nom, precio, categ) {
        this.nombre = nom;
        this.precio = precio;
        this.categoria = categ;
    }
    return Disco;
}());
exports.Disco = Disco;
var Cd = /** @class */ (function (_super) {
    __extends(Cd, _super);
    function Cd(nom, pr, categ) {
        return _super.call(this, nom, pr, categ) || this;
    }
    return Cd;
}(Disco));
exports.Cd = Cd;
var Dvd = /** @class */ (function (_super) {
    __extends(Dvd, _super);
    function Dvd(nom, precio, categ) {
        return _super.call(this, nom, precio, categ) || this;
    }
    return Dvd;
}(Disco));
exports.Dvd = Dvd;
var BluRay = /** @class */ (function (_super) {
    __extends(BluRay, _super);
    function BluRay(nom, pr, categ) {
        return _super.call(this, nom, pr, categ) || this;
    }
    return BluRay;
}(Disco));
exports.BluRay = BluRay;
/*********************************************************************/
var Cliente = /** @class */ (function () {
    function Cliente(nom, ap, ed) {
        this.nombre = nom;
        this.apellido = ap;
        this.edad = ed;
    }
    return Cliente;
}());
exports.Cliente = Cliente;
var cliente1 = new Cliente("Gladys", "Sarzuri", 26);
var cliente2 = new Cliente("Deysi", "Sarzuri", 24);
var cliente3 = new Cliente("Monica", "Sarzuri", 28);
console.log(cliente1, cliente2, cliente3);
var dumbo = new Dvd("Dumbo", 10, "infantil"); //Dvd
var rambo = new Cd("Rambo", 20, "accion");
var mypelicula = new Cd("pelicula", 80, "Terror");
var hachiko = new BluRay("hachiko", 8, "familiar");
var pinocho = new Dvd("hachiko", 10, "familiar"); //Dvd
console.log(dumbo, rambo, mypelicula, hachiko, pinocho);
/***************************************************************************/
var VentaDisco = /** @class */ (function () {
    function VentaDisco(producto, cliente) {
        this.producto = producto;
        this.cliente = cliente;
    }
    VentaDisco.prototype.montoDeLaVenta = function () {
        var monto = this.producto.precio;
        console.log(monto);
        return monto;
    };
    return VentaDisco;
}());
exports.VentaDisco = VentaDisco;
var venta1 = new VentaDisco(dumbo, cliente1);
var venta2 = new VentaDisco(rambo, cliente2);
var venta3 = new VentaDisco(hachiko, cliente3);
var venta4 = new VentaDisco(pinocho, cliente1);
var venta5 = new VentaDisco(mypelicula, cliente3);
/*******************************************************************/
var TiendaDisco = /** @class */ (function () {
    function TiendaDisco(nombre) {
        this.nombreTienda = nombre;
        this.ventas = [];
    }
    TiendaDisco.prototype.realizarVenta = function (venta) {
        this.ventas.push(venta);
    };
    TiendaDisco.prototype.calcularVentaCds = function () {
        var suma = 0;
        for (var i = 0; i < this.ventas.length; i++) {
            var prod = this.ventas[i].producto;
            if (prod instanceof Cd) {
                suma += prod.precio;
            }
        }
        return suma;
    };
    TiendaDisco.prototype.calcularVentaDvds = function () {
        var suma = 0;
        for (var i = 0; i < this.ventas.length; i++) {
            var prod = this.ventas[i].producto;
            if (prod instanceof Dvd) {
                suma += prod.precio;
            }
        }
        return suma;
    };
    TiendaDisco.prototype.calcularVentaBluRay = function () {
        var suma = 0;
        for (var i = 0; i < this.ventas.length; i++) {
            var prod = this.ventas[i].producto;
            if (prod instanceof BluRay) {
                suma += prod.precio;
            }
        }
        return suma;
    };
    TiendaDisco.prototype.totalVenta = function () {
        var suma = 0;
        for (var i = 0; i < this.ventas.length; i++) {
            var prod = this.ventas[i].producto;
            //if(prod instanceof Dvd){
            suma += prod.precio;
            //}
        }
        return suma;
    };
    return TiendaDisco;
}());
exports.TiendaDisco = TiendaDisco;
/*********/
var tienda1 = new TiendaDisco("MiTienda");
tienda1.realizarVenta(venta1);
tienda1.realizarVenta(venta2);
tienda1.realizarVenta(venta3);
tienda1.realizarVenta(venta4);
tienda1.realizarVenta(venta5);
// let tienda2: TiendaDisco = new TiendaDisco("Su Tienda");
// tienda2.realizarVenta(venta2);
// let tienda3: TiendaDisco = new TiendaDisco("Center");
// tienda3.realizarVenta(venta3);
var ingresosCds = tienda1.calcularVentaCds();
console.log("Los ingrsos de la venta de Cds" + ingresosCds + " Bs");
var ingresosDvds = tienda1.calcularVentaDvds();
console.log("Los ingrsos de la venta de Dvds" + ingresosDvds + " Bs");
var ingresosBluRays = tienda1.calcularVentaBluRay();
console.log("Los ingrsos de la venta de BluRay" + ingresosBluRays + " Bs");
console.log("Total Venta", tienda1.totalVenta());
