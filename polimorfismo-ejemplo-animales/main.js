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
    Tigre.prototype.lactar = function () {
        return "Lacta 10 meses";
    };
    Tigre.prototype.gestar = function () {
        return "Gestar 3 meses";
    };
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
var Cangrejo = /** @class */ (function (_super) {
    __extends(Cangrejo, _super);
    function Cangrejo(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Cangrejo;
}(Animal));
exports.Cangrejo = Cangrejo;
var Zariguella = /** @class */ (function (_super) {
    __extends(Zariguella, _super);
    function Zariguella(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Zariguella;
}(Animal));
exports.Zariguella = Zariguella;
var Tortuga = /** @class */ (function (_super) {
    __extends(Tortuga, _super);
    function Tortuga(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Tortuga;
}(Animal));
exports.Tortuga = Tortuga;
var Aguila = /** @class */ (function (_super) {
    __extends(Aguila, _super);
    function Aguila(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Aguila;
}(Animal));
exports.Aguila = Aguila;
var Saltamonte = /** @class */ (function (_super) {
    __extends(Saltamonte, _super);
    function Saltamonte(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Saltamonte;
}(Animal));
exports.Saltamonte = Saltamonte;
var Hormiga = /** @class */ (function (_super) {
    __extends(Hormiga, _super);
    function Hormiga(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Hormiga;
}(Animal));
exports.Hormiga = Hormiga;
var Python = /** @class */ (function (_super) {
    __extends(Python, _super);
    function Python(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Python;
}(Animal));
exports.Python = Python;
var Macaco = /** @class */ (function (_super) {
    __extends(Macaco, _super);
    function Macaco(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Macaco;
}(Animal));
exports.Macaco = Macaco;
var Orangutan = /** @class */ (function (_super) {
    __extends(Orangutan, _super);
    function Orangutan(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Orangutan;
}(Animal));
exports.Orangutan = Orangutan;
var Gorila = /** @class */ (function (_super) {
    __extends(Gorila, _super);
    function Gorila(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Gorila;
}(Animal));
exports.Gorila = Gorila;
var Leon = /** @class */ (function (_super) {
    __extends(Leon, _super);
    function Leon(familia, nombreCientifico) {
        return _super.call(this, familia, nombreCientifico) || this;
    }
    return Leon;
}(Animal));
exports.Leon = Leon;
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
var animal1 = new Ballena("Ballena Azul", "Balainedar");
//console.log(animal1.getGestar());
console.log(animal1.getGestar());
//console.log(animal1 as Ballena);
console.log(animal1.getLactar());
console.log(animal1.getNadar());
// console.log(animal1 instanceof AnimalAcuatico);
//animal1 instanceof AnimalAcuatico
// exporta interface Persona{
//     nombre: string;
//     edsd: number;
// }
// let elinda: Persona = {
//     nombre: "Erlinda"
// }
