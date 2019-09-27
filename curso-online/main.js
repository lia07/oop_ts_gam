"use strict";
/**
 * Se necesita resolver el siguiente problema usando programacion
 *  orientada a objetos.
 * Se desea realizar un sistema de venta de curso online como por ejemplo Udemy,
 * Platzi, etc.
 * Para ello se necesita interactuar con estudiantes, profesores de los mismos
 * se necesita registrar su informacion basica como nombre, apellido, correo,
 * direccion; por otras parte se necesita interactuar  con los cursos que se
 * impartiran de los mismos se necesita registrar su precio, nombre,
 * descripcion; finalmente se desea guardar el registro de los estudiantes
 * que compraron algun  curso. Un estudiante o profesor  puede tener una o mas
 * direcciones, al mismo tiempo una direccion  esta compuesta por la siguiente
 * informacion: ciudad, barrio, calle.
 * Para los profesores en particular se necesita guardar su profesion.
 */
exports.__esModule = true;
var Curso = /** @class */ (function () {
    function Curso(nomC, desc, precio) {
        this.nombre = nomC;
        this.descripcion = desc;
    }
    return Curso;
}());
exports.Curso = Curso;
var CompraCurso = /** @class */ (function () {
    function CompraCurso(cu, est, fe) {
        this.curso = cu;
        this.estudiante = est;
        this.fecha = fe;
    }
    return CompraCurso;
}());
exports.CompraCurso = CompraCurso;
var Profesor = /** @class */ (function () {
    function Profesor(nomP, ap, corr, pro, direcP) {
        this.nombre = nomP;
        this.apellido = ap;
        this.correo = corr;
        this.profesion = pro;
        this.direccion = direcP;
    }
    return Profesor;
}());
exports.Profesor = Profesor;
var Estudiante = /** @class */ (function () {
    function Estudiante(nomE, ape, corre, direcE) {
        this.nombre = nomE;
        this.apellido = ape;
        this.correo = corre;
        this.direccion = direcE;
    }
    return Estudiante;
}());
exports.Estudiante = Estudiante;
var Direccion = /** @class */ (function () {
    function Direccion(ci, bar, call) {
        this.ciudad = ci;
        this.barrio = bar;
        this.calle = call;
    }
    return Direccion;
}());
exports.Direccion = Direccion;
/**
 * Prueba
 */
