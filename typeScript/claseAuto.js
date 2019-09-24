/**
 *TAREA:HACER UNA CLASE QUE LAME "AUTO" EL CUAL RECIBA COMO
 *PARAMETROS(ruedas, color, puertas, marca, modelo)
*/
var Auto = /** @class */ (function () {
    function Auto(_ruedas, _color, _puertas, _marca, _modelo) {
        this.ruedas = _ruedas;
        this.color = _color;
        this.puertas = _puertas;
        this.marca = _marca;
        this.modelo = _modelo;
    }
    Auto.prototype.mostrarRuedas = function () {
        console.log(this.ruedas);
    };
    Auto.prototype.mostrarMarca = function () {
        console.log("marca toyota");
    };
    Auto.prototype.mostrarModelo = function () {
        console.log("modelo 99");
    };
    Auto.prototype.mostrarColor = function () {
        console.log("blanco");
    };
    return Auto;
}());
var auto1 = new Auto("cuatro", "blando", "dos", "toyota", "99");
auto1.mostrarRuedas();
console.log(auto1.ruedas);
console.log(auto1.marca);
console.log(auto1.modelo);
console.log(auto1.color);
