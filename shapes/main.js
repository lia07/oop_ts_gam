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
var areaRectangle1 = rectangle1.getHeigth() * rectangle1.getWidth();
console.log(areaRectangle1);
//let rectangle: Rectangle = new Rectangle(2,3,2,5);
//console.log(rectangle1.getPosX());
