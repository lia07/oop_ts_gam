/** 
 *TAREA:HACER UNA CLASE QUE LAME "AUTO" EL CUAL RECIBA COMO 
 *PARAMETROS(ruedas, color, puertas, marca, modelo)
*/
export class Auto{
    ruedas: number;
    color: string;
    puertas: number;
    marca: string;
    modelo: number;
    constructor(_ruedas,_color,_puertas,_marca,_modelo){
        this.ruedas = _ruedas;
        this.color = _color;
        this.puertas = _puertas;
        this.marca = _marca;
        this.modelo = _modelo;
    }
    mostrarRuedas(){
        console.log(this.ruedas);
    }
    mostrarMarca(){
        console.log("marca toyota");
    }
    mostrarModelo(){
        console.log("modelo 99");
    }
    mostrarColor(){
        console.log("blanco");
    }
}
let auto1: Auto = new Auto("cuatro", "blando", "dos", "toyota", "99");
auto1.mostrarRuedas();
console.log(auto1.ruedas);
console.log(auto1.marca);
console.log(auto1.modelo);
console.log(auto1.color);

 