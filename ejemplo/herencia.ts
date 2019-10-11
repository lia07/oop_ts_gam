export class Persona{
    private nombre: string; //atributos
    private apellido: string;
    private ci: number;
    private edad: number;

   constructor(nom: string, ape: string, ci: number, ed: number){
       this.nombre= nom;
       this.apellido = ape;
       this.ci = ci;
       this.edad = ed;
  }
  public setNombre(nom: string):void{
    this.nombre = nom;
  }
  public getNombre(): string{
   return  this.nombre;
  }
  public setApellido(ape: string): void{
      this.apellido = ape;
  }
  public getApellido(): string{
      return this.apellido;
  }
}
export class Docente extends Persona{
    private profesion: string; 

   constructor(nom: string, ape: string, ci: number, ed: number, prof: string){
    super(nom, ape, ci, ed);   
    this.profesion = prof;
  }
}
export class Estudiante extends Persona{
   constructor(nom: string, ape: string, ci: number, ed: number){
    super(nom, ape, ci, ed);   
  }
}
let estudiante1: Estudiante = new Estudiante("Gladys","Sarzuri",123456, 26);
let estudiante2: Estudiante = new Estudiante("Deysi","Sarzuri",1234561, 24);
let estudiante3: Estudiante = new Estudiante("Monica","Sarzuri",123456781, 28);
console.log(estudiante1, estudiante2, estudiante3);