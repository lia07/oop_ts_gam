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
var Animal = /** @class */ (function () {
    /**
     * constructor
     */
    function Animal(familia, nombreCientifico) {
        this.familia = familia;
        this.nombreCientifico = nombreCientifico;
    }
    return Animal;
}());
exports.Animal = Animal;
var Tigre = /** @class */ (function (_super) {
    __extends(Tigre, _super);
    /**
    *constructor
    */
    function Tigre(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Tigre;
}(Animal));
exports.Tigre = Tigre;
var Cocodrilo = /** @class */ (function (_super) {
    __extends(Cocodrilo, _super);
    function Cocodrilo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * name
     */
    Cocodrilo.prototype.name = function () {
    };
    return Cocodrilo;
}(Animal));
exports.Cocodrilo = Cocodrilo;
var Tigre = /** @class */ (function (_super) {
    __extends(Tigre, _super);
    function Tigre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tigre;
}(Animal));
exports.Tigre = Tigre;
var Ballena = /** @class */ (function (_super) {
    __extends(Ballena, _super);
    function Ballena() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ballena.prototype.nadar = function () {
        return "Nada usando aletas";
    };
    Ballena.prototype.nadar = function () {
        return "Nada usando aletas";
    };
    return Ballena;
}(Animal));
exports.Ballena = Ballena;
var Ornitorinco = /** @class */ (function (_super) {
    __extends(Ornitorinco, _super);
    function Ornitorinco(familia) {
        var _this = this;
        return _this;
    }
    Ornitorinco.prototype.nacerHuevo = function () {
        return "Nace en 3 meses";
    };
    return Ornitorinco;
}(Animal));
exports.Ornitorinco = Ornitorinco;
var Zariguella = /** @class */ (function (_super) {
    __extends(Zariguella, _super);
    function Zariguella() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Zariguella;
}(Animal));
exports.Zariguella = Zariguella;
var Camello = /** @class */ (function (_super) {
    __extends(Camello, _super);
    function Camello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Camello;
}(Animal));
exports.Camello = Camello;
var Caballo = /** @class */ (function (_super) {
    __extends(Caballo, _super);
    function Caballo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Caballo;
}(Animal));
exports.Caballo = Caballo;
var animal1 = new Ballena("Balle Azul", "Balainedar");
//console.log(animal1.getGestar());
console.log(animal1.getGestar());
//console.log(animal1 as Ballena);
console.log(animal1.getNadar());
console.log(animal1 instanceof AnimalAcuatico);
//animal1 instanceof AnimalAcuatico
exporta;
var elinda = {
    nombre: "Erlinda"
};
