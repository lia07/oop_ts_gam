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
var Persona = /** @class */ (function () {
    function Persona(nom, ape, ci, ed) {
        this.nombre = nom;
        this.apellido = ape;
        this.ci = ci;
        this.edad = ed;
    }
    Persona.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setApellido = function (ape) {
        this.apellido = ape;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    return Persona;
}());
exports.Persona = Persona;
var Docente = /** @class */ (function (_super) {
    __extends(Docente, _super);
    function Docente(nom, ape, ci, ed, prof) {
        var _this = _super.call(this, nom, ape, ci, ed) || this;
        _this.profesion = prof;
        return _this;
    }
    return Docente;
}(Persona));
exports.Docente = Docente;
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(nom, ape, ci, ed) {
        return _super.call(this, nom, ape, ci, ed) || this;
    }
    return Estudiante;
}(Persona));
exports.Estudiante = Estudiante;
var estudiante1 = new Estudiante("Gladys", "Sarzuri", 123456, 26);
var estudiante2 = new Estudiante("Deysi", "Sarzuri", 1234561, 24);
var estudiante3 = new Estudiante("Monica", "Sarzuri", 123456781, 28);
console.log(estudiante1, estudiante2, estudiante3);
