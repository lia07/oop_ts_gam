
export class ComponenteCoche{
    protected descripcion: string;
    protected peso: number;
    protected coste: number;

    public constructor(descripcion: string, peso:number, coste: number){
        this.descripcion = descripcion;
        this.peso = peso;
        this.coste = coste;
    }  
    public  mostrar(): string{
        return `descripcion:
        peso: 100.
        coste: ${this.descripcion}.`;   
    }
}

export class Motor extends ComponenteCoche{

    constructor(descripcion:string, peso: number, coste: number){
        super(descripcion, peso, coste);
    }

    public  arrancarMotor(): string{
        return " arranque el motor";  
    }

    public  apagarMotor(): string{
         return "apagar motor";
    }
}

export class Rueda extends ComponenteCoche{

    constructor(descripcion:string, peso: number, coste: number){
        super(descripcion, peso, coste);
    }

    public  inflarRueda(): string{
        return " rueda inflada";
    }
    public  desinflarRueda(): string{
        return " rueda desinflada";
    } 
}

export class Ventana extends ComponenteCoche{
    constructor(descripcion:string, peso: number, coste: number){
        super(descripcion, peso, coste);
    }

    public  abrirVentana(): string{
        return " ventana abierto";
    }

    public  cerrarVentana(): string{
        return " cerrar ventana";
    }
    
}
export class PuertaCoche extends ComponenteCoche implements PuertaBloqueable, InterfacePuerta{
    private estaBloqueado: boolean;

    constructor(descripcion:string, peso: number, coste: number, estaBloqueado:boolean){
        super(descripcion, peso, coste);
        this.estaBloqueado = true;
    }  

    abrirPuerta(): string{
        return "abrir puerta";
    }
    cerrarPuerta(): string{
        return "cerrar puerta";
    }
    bloquearPuerta(): string{
        return "la puerta esta bloqueada";
    }
    desbloquearPuerta(): string{
        return "la puerta esta desbloqueada";
    }
}

export class Coche implements Alarma{
    private motor: number;
    private rueda: number;
    private puerta: number;

    constructor(motor:number, rueda:number, puerta:number){
        this.motor = motor;
        this.rueda = rueda;
        this.puerta = puerta;
    }  
    
    public  activarAlarma(): string{
        return "activar";
    } 
    public  desactvarAlarma(): string{
        return "desactivar";
    } 
}

export class Alarma{

    constructor(){

    }

    public  activarAlarma(): string{
        return "activar";
    } 
    public  desactvarAlarma(): string{
        return "desactivar";
    }
}

export interface InterfacePuerta{
    abrirPuerta(): string;
    cerrarPuerta(): string;
}

export interface PuertaBloqueable{
    bloquearPuerta(): string;
    desbloquearPuerta(): string;
}

//prueba
//  let coche: Coche=new Coche()