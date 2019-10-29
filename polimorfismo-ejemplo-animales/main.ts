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
     * constructor
     */
    public constructor(familia: string, nombreCientifico: string){
        super(familia, nombreCientifico);
    }
    nadar(): string{
        return "Nada usando sus 4 patas.";
    }
    nacerHuevo(): string{
        return "Nace en 6 meses";
    }

}
export class Canguro extends Animal{

    public constructor(familia: string, nombreCientifico: string){
        super(familia, nombreCientifico);

    }
}

export class Avestruz extends Animal{

    public constructor(familia: string, nombreCientifico: string){
        super(familia, nombreCientifico);

    }
}
export class Ornitorinco extends Animal implements AnimalOviparo, AnimalMamifero{

    public constructor(familia: string, nombreCientifico: string){
        super(familia, nombreCientifico);
    }
    nacerHuevo():string{
        return "Nace en 3 meses";
    }
    lactar():string{
        return "Lacta 10 meses";
    }
    gestar():string{
        return "Gestar 3 meses";
    }
}
export class Ballena extends Animal implements AnimalAcuatico, AnimalMamifero{

    public constructor(familia: string, nombreCientifico: string){
        super(familia, nombreCientifico);
    }
    nadar(): string{
        return "Nada usando aletas";
    }
    lactar(): string{
        return "Lacta 1 año.";
    }
    gestar():string{
        return "Gestar 2 años.";
    }
}
export class Murcielago extends Animal{

    public constructor(familia: string, nombreCientifico: string){
        super(familia, nombreCientifico);
    }
}
export class Estrella extends Animal{

    public constructor(familia: string, nombreCientifico: string){
        super(familia, nombreCientifico);
    }
}

export class Medusa extends Animal{

    public constructor(familia: string, nombreCientifico: string){
        super(familia, nombreCientifico);
    }
}
export class Zariguella extends Animal{

    public constructor(familia: string, nombreCientifico: string){
        super(familia, nombreCientifico);
    }
}
export class Camello extends Animal{


    public constructor(familia: string, nombreCientifico: string){
        super(familia, nombreCientifico);
    }
}
export class Caballo extends Animal{

    public constructor(familia: string, nombreCientifico: string){
        super(familia, nombreCientifico);
    }
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