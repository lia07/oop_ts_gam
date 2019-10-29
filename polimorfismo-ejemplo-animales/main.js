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
    /**
     * constructor
     */
    function Cocodrilo(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    Cocodrilo.prototype.nadar = function () {
        return "Nada usando sus 4 patas.";
    };
    Cocodrilo.prototype.nacerHuevo = function () {
        return "Nace en 6 meses";
    };
    return Cocodrilo;
}(Animal));
exports.Cocodrilo = Cocodrilo;
var Canguro = /** @class */ (function (_super) {
    __extends(Canguro, _super);
    function Canguro(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Canguro;
}(Animal));
exports.Canguro = Canguro;
var Avestruz = /** @class */ (function (_super) {
    __extends(Avestruz, _super);
    function Avestruz(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Avestruz;
}(Animal));
exports.Avestruz = Avestruz;
var Ornitorinco = /** @class */ (function (_super) {
    __extends(Ornitorinco, _super);
    function Ornitorinco(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    Ornitorinco.prototype.nacerHuevo = function () {
        return "Nace en 3 meses";
    };
    Ornitorinco.prototype.lactar = function () {
        return "Lacta 10 meses";
    };
    Ornitorinco.prototype.gestar = function () {
        return "Gestar 3 meses";
    };
    return Ornitorinco;
}(Animal));
exports.Ornitorinco = Ornitorinco;
var Ballena = /** @class */ (function (_super) {
    __extends(Ballena, _super);
    function Ballena(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    Ballena.prototype.nadar = function () {
        return "Nada usando aletas";
    };
    Ballena.prototype.lactar = function () {
        return "Lacta 1 año.";
    };
    Ballena.prototype.gestar = function () {
        return "Gestar 2 años.";
    };
    return Ballena;
}(Animal));
exports.Ballena = Ballena;
var Murcielago = /** @class */ (function (_super) {
    __extends(Murcielago, _super);
    function Murcielago(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Murcielago;
}(Animal));
exports.Murcielago = Murcielago;
var Estrella = /** @class */ (function (_super) {
    __extends(Estrella, _super);
    function Estrella(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Estrella;
}(Animal));
exports.Estrella = Estrella;
var Medusa = /** @class */ (function (_super) {
    __extends(Medusa, _super);
    function Medusa(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Medusa;
}(Animal));
exports.Medusa = Medusa;
var Zariguella = /** @class */ (function (_super) {
    __extends(Zariguella, _super);
    function Zariguella(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Zariguella;
}(Animal));
exports.Zariguella = Zariguella;
var Camello = /** @class */ (function (_super) {
    __extends(Camello, _super);
    function Camello(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Camello;
}(Animal));
exports.Camello = Camello;
var Caballo = /** @class */ (function (_super) {
    __extends(Caballo, _super);
    function Caballo(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
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
