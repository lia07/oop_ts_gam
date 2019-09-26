"use strict";
exports.__esModule = true;
/**
 * clase
 */
var Square = /** @class */ (function () {
    function Square(px, py, h, w) {
        this.posX = px;
        this.posY = py;
        this.heigth = h;
        this.width = w;
    }
    Square.prototype.setPosX = function (px) {
        this.posX = px;
    };
    Square.prototype.getPosX = function () {
        return this.posX;
    };
    Square.prototype.setPosY = function (py) {
        this.posY = py;
    };
    Square.prototype.getPosY = function () {
        return this.posY;
    };
    Square.prototype.setHeigth = function (h) {
        this.heigth = h;
    };
    Square.prototype.getHeigth = function () {
        return this.heigth;
    };
    Square.prototype.setWidth = function (w) {
        this.width = w;
    };
    Square.prototype.getWidth = function () {
        return this.width;
    };
    Square.prototype.getArea = function () {
        var area = this.heigth * this.heigth;
        return area;
    };
    Square.prototype.getPerimeter = function () {
        var perimeter = 4 * this.heigth;
        return perimeter;
    };
    return Square;
}());
exports.Square = Square;
/**
 * pruebas
 */
var square1 = new Square(2, 3, 1, 4);
console.log(square1);
square1.setHeigth(2);
square1.setWidth(3);
console.log(square1);
var areaParallelogram1 = square1.getArea();
console.log("area", areaParallelogram1);
var perimeterSquare1 = square1.getPerimeter();
console.log("perimetro", perimeterSquare1);
