export class persona{
    Nombre:string;
    Apellidos:string;
    Edad:number;
    Sexo:string;
    
    constructor(Nombre:string,Apellidos:string,Edad:number,Sexo:string){
        this.Nombre = Nombre;
        this.Apellidos = Apellidos;
        this.Edad = Edad;
        this.Sexo = Sexo;
    }
/*
    setNombre(nombre:string) {
        this.Nombre = nombre; 
    }

    setApellidos(apellidos:string){
        this.Apellidos = apellidos;
    }

    setEdad(edad:number){
        this.Edad = edad;
    }

    setSexo(sexo:string){
        this.Sexo = sexo;
    }

    getNombre(){
        return this.Nombre;
    }

    getApellidos(){
        return this.Apellidos;
    }

    getEdad(){
        return this.Edad;
    }

    getSexo(){
        return this.Sexo;
    }*/
}