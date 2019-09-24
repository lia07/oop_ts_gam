class Animal {
    nombre: string;
    color: string;

    constructor(nombre,_color){
        this.nombre = _nombre;
        this.color = _color;
        //console.log(nombre, color);
    }
    mostrarColor(){
        console.log(this.color);
    }
    caminar(){
        console.log("Esta caminando");
    }
}
let perro: Animal = new Animal("Firulais", "negro");
perro.mostrarColor();
perro.caminar();
//console.log("Esta caminando");