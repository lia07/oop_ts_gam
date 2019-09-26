"use strict";
exports.__esModule = true;
/**
 * clase
 */
var Rectangulo = /** @class */ (function () {
    function Rectangulo(px, py, h, w) {
        this.posX = px;
        this.posY = py;
        this.heigth = h;
        this.width = w;
    }
    Rectangulo.prototype.setPosX = function (px) {
        this.posX = px;
    };
    Rectangulo.prototype.getPosX = function () {
        return this.posX;
    };
    Rectangulo.prototype.setPosY = function (py) {
        this.posY = py;
    };
    Rectangulo.prototype.getPosY = function () {
        return this.posY;
    };
    Rectangulo.prototype.setHeigth = function (h) {
        this.heigth = h;
    };
    Rectangulo.prototype.getHeigth = function () {
        return this.heigth;
    };
    return Rectangulo;
}());
exports.Rectangulo = Rectangulo;
/**
 * pruebas
 */
var posx1 = new Rectangulo(2, 3, 2, 5);
//let posx2: Rectangulo = new Rectangulo(1,3); 
posx1.setPosX(2);
console.log(posx1.getPosX());
console.log(posx1);
//console.log(posx2);
