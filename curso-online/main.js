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
    Profesor.prototype.setNombre = function (nomP) {
        this.nombre = nomP;
    };
    Profesor.prototype.getNombre = function () {
        return this.nombre;
    };
    Profesor.prototype.setApellido = function (ap) {
        this.apellido = ap;
    };
    Profesor.prototype.getApellido = function () {
        return this.apellido;
    };
    Profesor.prototype.setCorreo = function (corr) {
        this.correo = corr;
    };
    Profesor.prototype.getCorreo = function () {
        return this.correo;
    };
    Profesor.prototype.setProfesion = function (profe) {
        this.profesion = profe;
    };
    Profesor.prototype.getProfesion = function () {
        return this.profesion;
    };
    Profesor.prototype.setDireccion = function (direcP) {
        this.direccion = direcP;
    };
    Profesor.prototype.getDireccion = function () {
        return this.direccion;
    };
    Profesor.prototype.setAgregarNuevaDireccion = function (nuevaDireccion) {
        this.direccion.push(nuevaDireccion);
    };
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
    Estudiante.prototype.setCorreo = function (corre) {
        this.correo = corre;
    };
    Estudiante.prototype.getCorreo = function () {
        return this.correo;
    };
    Estudiante.prototype.setAgregarNuevaDireccion = function (nuevaDireccion) {
        this.direccion.push(nuevaDireccion);
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
    Direccion.prototype.setCiudad = function (ci) {
        this.ciudad = ci;
    };
    Direccion.prototype.getCiudad = function () {
        return this.ciudad;
    };
    Direccion.prototype.setBarrio = function (ba) {
        this.barrio = ba;
    };
    Direccion.prototype.getBarrio = function () {
        return this.barrio;
    };
    Direccion.prototype.setCalle = function (cll) {
        this.calle = cll;
    };
    Direccion.prototype.getCalle = function () {
        return this.calle;
    };
    return Direccion;
}());
exports.Direccion = Direccion;
var PlataformaEducativa = /** @class */ (function () {
    function PlataformaEducativa(nompl, list) {
        this.nombre = nompl;
        this.lista = list;
    }
    PlataformaEducativa.prototype.setNombre = function (nompl) {
        this.nombre = nompl;
    };
    PlataformaEducativa.prototype.getNombre = function () {
        return this.nombre;
    };
    PlataformaEducativa.prototype.setRegistrarVenta = function (compra1) {
        this.lista.push(compra1);
    };
    PlataformaEducativa.prototype.setIngresoPersividos = function (venta1) {
        this.lista.push(venta1);
    };
    return PlataformaEducativa;
}());
exports.PlataformaEducativa = PlataformaEducativa;
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
console.log(est6);
est1.setAgregarNuevaDireccion(direccion1);
//Crear 2 instancias de la clase Docente.
var direccion2 = new Direccion("LPZ", "NOSE", "16 DE JULIO");
var dir2 = [direccion2];
var direccion3 = new Direccion("CBB", "tunari", "15 DE Junio");
var dir3 = [direccion3];
var direccion4 = new Direccion("SCZ", "3Anillo", "plan 300");
var dir4 = [direccion4];
var direccion5 = new Direccion("LPZ", "Zona  sur", "Villa Fatima");
var dir5 = [direccion5];
var prof1 = new Profesor("Grover", "Plaza", "grover@gmail.com", "Ingeniero", dir2);
var prof2 = new Profesor("Angel", "Antezana", "angel@gmail.com", "Ingeniero", dir3);
var prof3 = new Profesor("Ricardo", "Valencia", "ricardo@gmail.com", "Ingeniero", dir3);
var prof4 = new Profesor("Franz", "Lopez", "franz@gmail.com", "Ingeniero", dir5);
var prof5 = new Profesor("Angel2", "Antezana2", "angel2@gmail.com", "Ingeniero", dir4);
console.log(prof1 + '------------------------------------------------------------');
console.log(prof2);
console.log(prof3);
console.log(prof4);
console.log(prof5);
// prof1.s(dir3);
prof1.setAgregarNuevaDireccion(direccion2);
//Crear 5 instancias de la clase curso.
var curso1 = new Curso("javaScript", "fundamentos de js", 200, prof2);
var curso2 = new Curso("angular", "angular basico", 400, prof5);
var curso3 = new Curso("python", "Fundamentos de python", 300, prof4);
var curso4 = new Curso("django", "Fundamentos de django", 300, prof3);
var curso5 = new Curso("vuejs", "Fundamentos de vuejs", 300, prof1);
console.log(curso1);
console.log(curso2);
console.log(curso3);
console.log(curso4);
console.log(curso5);
//Crear 12 instancias  de compraCurso.
var comprarCurso1 = new CompraCurso(curso1, est1, "27 de septiembre de 2019");
var comprarCurso2 = new CompraCurso(curso2, est2, "7 de septiembre de 2019");
var comprarCurso3 = new CompraCurso(curso3, est3, "8 de septiembre de 2019");
var comprarCurso4 = new CompraCurso(curso4, est4, "9 de septiembre de 2019");
var comprarCurso5 = new CompraCurso(curso5, est5, "10 de septiembre de 2019");
var comprarCurso6 = new CompraCurso(curso1, est6, "11 de septiembre de 2019");
var comprarCurso7 = new CompraCurso(curso2, est7, "fecha");
var comprarCurso8 = new CompraCurso(curso3, est8, "fecha");
var comprarCurso9 = new CompraCurso(curso4, est9, "fecha");
var comprarCurso10 = new CompraCurso(curso5, est10, "fecha");
var comprarCurso11 = new CompraCurso(curso1, est1, "fecha");
var comprarCurso12 = new CompraCurso(curso2, est2, "fecha");
console.log(comprarCurso1, comprarCurso2, comprarCurso3, comprarCurso4, comprarCurso5);
console.log(comprarCurso6, comprarCurso7, comprarCurso8, comprarCurso9, comprarCurso10, comprarCurso11);
console.log(comprarCurso12);
//Crear 12 instancias  de compraCurso.
var comprarCurso13 = new CompraCurso(curso1, est1, "28 de septiembre de 2019");
var comprarCurso14 = new CompraCurso(curso1, est2, "29 de octubre de 2019");
var comprarCurso15 = new CompraCurso(curso1, est3, "30 de noviembre de 2019");
var comprarCurso16 = new CompraCurso(curso1, est4, "02 de diciembre de 2019");
var comprarCurso17 = new CompraCurso(curso1, est1, "03 de septiembre de 2019");
var comprarCurso18 = new CompraCurso(curso1, est1, "04 de septiembre de 2019");
var comprarCurso19 = new CompraCurso(curso1, est1, "05 de septiembre de 2019");
var comprarCurso20 = new CompraCurso(curso1, est1, "06 de septiembre de 2019");
var comprarCurso21 = new CompraCurso(curso1, est1, "07 de septiembre de 2019");
var comprarCurso22 = new CompraCurso(curso1, est1, "08 de septiembre de 2019");
var comprarCurso23 = new CompraCurso(curso1, est1, "09 de septiembre de 2019");
var comprarCurso24 = new CompraCurso(curso1, est1, "11 de septiembre de 2019");
console.log(comprarCurso13, comprarCurso14, comprarCurso15, comprarCurso16, comprarCurso17, comprarCurso18);
console.log(comprarCurso19, comprarCurso20, comprarCurso21, comprarCurso22, comprarCurso23, comprarCurso24);
//Crear 12 instancias  de compraCurso.
var CompraCurso9 = new CompraCurso(curso4, est1, "11 de septiembre");
var comp = [CompraCurso9];
console.log(comprarCurso9);
