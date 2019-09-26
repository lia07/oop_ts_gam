"use strict";
exports.__esModule = true;
var Triangle = /** @class */ (function () {
    function Triangle(px, py, h, w) {
        this.heigth = h;
        this.width = w;
    }
    Triangle.prototype.setHeigth = function (h) {
        this.heigth = h;
    };
    Triangle.prototype.getHeigth = function () {
        return this.heigth;
    };
    Triangle.prototype.setWidth = function (w) {
        this.width = w;
    };
    Triangle.prototype.getWidth = function () {
        return this.width;
    };
    Triangle.prototype.getArea = function () {
        var area = (this.heigth * this.heigth) / 2;
        return area;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
/**
 * prueba
 */
var triangle1 = new Triangle(2, 3, 1, 4);
console.log(triangle1);
triangle1.setHeigth(5);
triangle1.setWidth(4);
console.log(triangle1);
var areaTriangle1 = triangle1.getArea();
console.log(areaTriangle1);
