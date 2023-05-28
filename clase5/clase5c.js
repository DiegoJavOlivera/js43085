
// CLASES //

class Alumno_coder{


    constructor( nombre , apellido , dni){
        //CARACTERISTICAS
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.nota_uno = 0;
        this.nota_dos = 0;
    }


    //METODOS
    saludar(){

        console.log("Hola muchos gusto, mi nombre es: ", this.nombre);
    }


    get_datos(){
        console.log("<----- DATOS DEL ALUMNO/A ----->");
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Dni: ", this.dni);      
        console.log("");


    }


    set_nota_uno( nota ){

        if( nota > 0 && nota <= 10){

            this.nota_uno = nota;
        }

    }


}



let alumno_uno = new Alumno_coder("Pepe" , "Lopez" , 3212313);
let alumno_dos = new Alumno_coder("Laura" , "Rojas" , 63213123);

console.log( alumno_uno );
console.log( alumno_dos );


alumno_uno.saludar();

alumno_dos.saludar();


alumno_uno.get_datos();
alumno_dos.get_datos();



console.log( alumno_uno.nota_uno );

alumno_uno.set_nota_uno(9);

console.log( alumno_uno.nota_uno );