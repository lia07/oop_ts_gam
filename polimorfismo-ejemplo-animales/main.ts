export class Animal{
    private familia: string;
    protected nombreCientifico: string;
    
    /** 
     * constructor 
     */

    public constructor(familia: string, nombreCientifico: string){
        this.familia = familia;
        this.nombreCientifico = nombreCientifico;
    }
}

export interface AnimalAcuatico{
    //public abstract
    nadar(): string;
    
} 
export interface AnimalOviparo{
    nacerHuevo(): string;
        
}
export interface AnimalMamifero{
    lactar(): string;
    gestar(): string;
        
}
export class Tigre extends Animal implements AnimalMamifero{
    /** 
    *constructor
    */
   public constructor(familia: string, nombreCientifico: string){
       super(familia, nombreCientifico);
   }
}
export class Cocodrilo extends Animal implements AnimalAcuatico, AnimalOviparo{

    /**
     * name
     */
    public name() {
        
    }

}
export class Tigre extends Animal{

}
export class Ballena extends Animal implements AnimalAcuatico, AnimalMamifero{

    publ
    nadar(): string{
        return "Nada usando aletas";
    }
    nadar(): string{
        return "Nada usando aletas";
    }

}
export class Ornitorinco extends Animal implements AnimalOviparo, AnimalMamifero{

    public constructor(familia: string,){

    }
    nacerHuevo():string{
        return "Nace en 3 meses";
    }

}

export class Zariguella extends Animal{

}
export class Camello extends Animal{

}
export class Caballo extends Animal{

}

let animal1: Animal = new Ballena("Balle Azul",  "Balainedar");
//console.log(animal1.getGestar());
console.log(animal1.getGestar());
//console.log(animal1 as Ballena);
console.log(animal1.getNadar());

console.log(animal1 instanceof AnimalAcuatico);

//animal1 instanceof AnimalAcuatico

exporta interface Persona{
    nombre: string;
    edsd: number;
}
let elinda: Persona = {
    nombre: "Erlinda"
}