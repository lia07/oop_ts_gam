"use strict";
exports.__esModule = true;
var Trapezoid = /** @class */ (function () {
    function Trapezoid(a, h, w) {
        this.heigth = h;
        this.width = w;
    }
    Trapezoid.prototype.setHeigth = function (h) {
        this.heigth = h;
    };
    Trapezoid.prototype.getHeigth = function () {
        return this.heigth;
    };
    Trapezoid.prototype.setWidth = function (w) {
        this.width = w;
    };
    Trapezoid.prototype.getWidth = function () {
        return this.width;
    };
    Trapezoid.prototype.setA = function (a1) {
        this.a = a1;
    };
    Trapezoid.prototype.getA = function () {
        return this.a;
    };
    Trapezoid.prototype.getArea = function () {
        var area = this.heigth * this.a;
        return area;
    };
    return Trapezoid;
}());
exports.Trapezoid = Trapezoid;
/**
 * prueba
 */
var trapezoid1 = new Trapezoid(2, 3, 1);
console.log(trapezoid1);
trapezoid1.setHeigth(5);
trapezoid1.setWidth(4);
console.log(trapezoid1);
var areaTrapezoid1 = trapezoid1.getArea();
console.log(areaTrapezoid1);
