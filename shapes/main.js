"use strict";
exports.__esModule = true;
/**
 * clase
 */
var Rectangle = /** @class */ (function () {
    function Rectangle(px, py, h, w) {
        this.posX = px;
        this.posY = py;
        this.heigth = h;
        this.width = w;
    }
    Rectangle.prototype.setPosX = function (px) {
        this.posX = px;
    };
    Rectangle.prototype.getPosX = function () {
        return this.posX;
    };
    Rectangle.prototype.setPosY = function (py) {
        this.posY = py;
    };
    Rectangle.prototype.getPosY = function () {
        return this.posY;
    };
    Rectangle.prototype.setHeigth = function (h) {
        this.heigth = h;
    };
    Rectangle.prototype.getHeigth = function () {
        return this.heigth;
    };
    Rectangle.prototype.setWidth = function (w) {
        this.width = w;
    };
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.desplazar = function (posX2, posY2) {
        this.posX = posX2;
        this.posY = posY2;
    };
    Rectangle.prototype.getArea = function () {
        var area = this.heigth * this.heigth;
        return area;
    };
    Rectangle.prototype.getPerimeter = function () {
        var perimeter = 2 * this.heigth + 2 * this.width;
        return perimeter;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
/**
 * pruebas
 */
var rectangle1 = new Rectangle(2, 3, 1, 4);
console.log(rectangle1);
rectangle1.setHeigth(55);
rectangle1.setWidth(80);
console.log(rectangle1);
rectangle1.desplazar(110, 110);
console.log(rectangle1);
//let  areaRectangle1: number = rectangle1.getHeigth()*rectangle1.getWidth();
//console.log(areaRectangle1);
var areaRectangle1 = rectangle1.getArea();
console.log(areaRectangle1);
var perimeterRectangle1 = rectangle1.getPerimeter();
console.log(perimeterRectangle1);
