"use strict";
exports.__esModule = true;
/**
 * Desarrollar una clase CD con los siguientes atributos.
Canciones: un array (lista) de objetos de la clase canción.
Contador: la siguiente posición libre de array(lista) canciones, y los siguientes métodos:
CD():Constructor predeterminado (creara el array canciones).
numeroCanciones(); devuelve el valor del contador de canciones.
dameCancion(int):devuelve la canción que se encuentra en la posición  indicada.
grabarCancion(int, cancion): cambia la canción de la posición indicada por la nueva canción proporcionada.
Agregar(Cancion): agrega al final del array la Cancion proporcionada.
Elemina(int): elimina la Cancion que se encuentra en la posición indicada.
 */
var Cancion = /** @class */ (function () {
    function Cancion(nombre, cancion, genero, autor) {
        this.nombre = nombre;
        this.cancion = cancion;
        this.genero = genero;
        this.autor = autor;
    }
    return Cancion;
}());
exports.Cancion = Cancion;
var Cd = /** @class */ (function () {
    function Cd() {
        //this.cancion=cancion;
        this.listaCancion = [];
        this.contador = 0;
    }
    // public dameCancion(listaCancion: Cancion): void{
    //     let listaCanciones:Cancion;
    // }
    Cd.prototype.numeroCancion = function (listaCancion) {
        return this.contador;
    };
    Cd.prototype.darCancion = function (posicionCancion) {
        return this.listaCancion[posicionCancion];
    };
    // public crearCancion(listaCancion: Cancion): void{
    //     this.listaCancion.push(listaCancion);
    // }
    Cd.prototype.grabarCanion = function (listaCanciones, contador) {
        this.listaCancion[contador] = listaCanciones;
    };
    Cd.prototype.agregarCancion = function (listaCancion) {
        this.listaCancion.push(listaCancion);
        this.contador++;
    };
    Cd.prototype.eliminarCancion = function (listaCancion) {
        this.listaCancion.splice(listaCancion);
        this.contador--;
    };
    return Cd;
}());
exports.Cd = Cd;
/**
 * pruebas
 */
var cancion1 = new Cancion("Sabor sabor", "cumbia", "Los Vivis", "");
var cancion2 = new Cancion("RataBlanca", "Rock", "James", "");
var cancion3 = new Cancion("RataBlanca", "Rock", "James", "");
var cd1 = new Cd();
cd1.agregarCancion(cancion1);
cd1.agregarCancion(cancion2);
cd1.agregarCancion(cancion3);
console.log(cd1);
cd1.eliminarCancion(2);
console.log(cd1);
