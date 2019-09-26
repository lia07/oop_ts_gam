"use strict";
exports.__esModule = true;
/**
 * clase
 */
var Parallelogram = /** @class */ (function () {
    function Parallelogram(px, py, h, w) {
        this.posX = px;
        this.posY = py;
        this.heigth = h;
        this.width = w;
    }
    Parallelogram.prototype.setPosX = function (px) {
        this.posX = px;
    };
    Parallelogram.prototype.getPosX = function () {
        return this.posX;
    };
    Parallelogram.prototype.setPosY = function (py) {
        this.posY = py;
    };
    Parallelogram.prototype.getPosY = function () {
        return this.posY;
    };
    Parallelogram.prototype.setHeigth = function (h) {
        this.heigth = h;
    };
    Parallelogram.prototype.getHeigth = function () {
        return this.heigth;
    };
    Parallelogram.prototype.setWidth = function (w) {
        this.width = w;
    };
    Parallelogram.prototype.getWidth = function () {
        return this.width;
    };
    Parallelogram.prototype.getArea = function () {
        var area = this.heigth * this.width;
        return area;
    };
    Parallelogram.prototype.getPerimeter = function () {
        var perimeter = 2 * this.heigth + 2 * this.width;
        return perimeter;
    };
    return Parallelogram;
}());
exports.Parallelogram = Parallelogram;
/**
 * pruebas
 */
var parallelogram1 = new Parallelogram(2, 3, 1, 4);
console.log(parallelogram1);
parallelogram1.setHeigth(5);
parallelogram1.setWidth(5);
console.log(parallelogram1);
var areaParallelogram1 = parallelogram1.getArea();
console.log("area", areaParallelogram1);
var perimeterParallelogram1 = parallelogram1.getPerimeter();
console.log("perimetro", perimeterParallelogram1);
