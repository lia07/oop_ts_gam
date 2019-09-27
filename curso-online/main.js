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
 *
 * Crear 5 instancias de la clase curso.
 * Crear 10instancias  de la clase estudiante
 * Crear 2 instancias de la clase Docente.
 * Crear 12 instancias  de compraCurso.
 * Hacer correr y verificar el correcto funcionamiento de las clases implementadas.
 * Subir  su repositorio.
 */
exports.__esModule = true;
var Curso = /** @class */ (function () {
    function Curso(nomC, desc, pre, profe) {
        this.nombre = nomC;
        this.descripcion = desc;
        this.precio = pre;
        this.profesor = profe;
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
    Estudiante.prototype.setNombre = function (nomE) {
        this.nombre = nomE;
    };
    Estudiante.prototype.getNombre = function () {
        return this.nombre;
    };
    Estudiante.prototype.setApellido = function (ape) {
        this.apellido = ape;
    };
    Estudiante.prototype.getApellido = function () {
        return this.apellido;
    };
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
//Crear 10instancias  de la clase estudiante
var direccion1 = new Direccion("LPZ", "NOSE", "16 DE JULIO");
var dir = [direccion1];
var est1 = new Estudiante("Gladys", "Sarzuri", "sarzuri@gmail.com", dir);
var est2 = new Estudiante("Erlinda", "Chambi", "erlinda@gmail.com", dir);
var est3 = new Estudiante("Gio", "Brañez", "giob@gmail.com", dir);
var est4 = new Estudiante("Miguel", "Lopez", "miguell@gmail.com", dir);
var est5 = new Estudiante("Eduardo", "Gomez", "gomez@gmail.com", dir);
var est6 = new Estudiante("Luis", "Jadin", "lui@gmail.com", dir);
var est7 = new Estudiante("Aleyda", "Choque", "choque@gmail.com", dir);
var est8 = new Estudiante("Ariel", "Claros", "ariel@gmail.com", dir);
var est9 = new Estudiante("Brian", "Padilla", "briani@gmail.com", dir);
var est10 = new Estudiante("Henry", "Zerda", "henry@gmail.com", dir);
console.log(est1);
console.log(est2);
console.log(est3);
console.log(est4);
console.log(est5);
//Crear 2 instancias de la clase Docente.
var direccion2 = new Direccion("LPZ", "NOSE", "16 DE JULIO");
var dir2 = [direccion2];
var direccion3 = new Direccion("CBB", "tunari", "15 DE Junio");
var dir3 = [direccion3];
var prof1 = new Profesor("Grover", "Plaza", "grover@gmail.com", "Ingeniero", dir2);
var prof2 = new Profesor("Angel", "Antezana", "angel@gmail.com", "Ingeniero", dir3);
var prof3 = new Profesor("Ricardo", "Valencia", "ricardo@gmail.com", "Ingeniero", dir3);
var prof4 = new Profesor("Franz", "Lopez", "franz@gmail.com", "Ingeniero", dir3);
var prof5 = new Profesor("Angel2", "Antezana2", "angel2@gmail.com", "Ingeniero", dir3);
console.log(prof1);
console.log(prof2);
console.log(prof3);
console.log(prof4);
console.log(prof5);
//Crear 5 instancias de la clase curso.
var curso1 = new Curso("javaScript", "fundamentos de js", 200, prof2);
var curso2 = new Curso("angular", "angular basico", 400, prof5);
var curso3 = new Curso("python", "Fundamentos de python", 300, prof4);
var curso4 = new Curso("django", "Fundamentos de django", 300, prof3);
var curso5 = new Curso("vuejs", "Fundamentos de vuejs", 300, prof1);
//Crear 12 instancias  de compraCurso.
var comprarCurso1 = new CompraCurso(curso1, est1, "fecha");
var comprarCurso2 = new CompraCurso(curso2, est2, "fecha");
var comprarCurso3 = new CompraCurso(curso3, est3, "fecha");
var comprarCurso4 = new CompraCurso(curso4, est4, "fecha");
var comprarCurso5 = new CompraCurso(curso5, est5, "fecha");
var comprarCurso6 = new CompraCurso(curso1, est6, "fecha");
var comprarCurso7 = new CompraCurso(curso2, est7, "fecha");
var comprarCurso8 = new CompraCurso(curso3, est8, "fecha");
var comprarCurso9 = new CompraCurso(curso4, est9, "fecha");
var comprarCurso10 = new CompraCurso(curso5, est10, "fecha");
var comprarCurso11 = new CompraCurso(curso1, est1, "fecha");
var comprarCurso12 = new CompraCurso(curso2, est2, "fecha");
