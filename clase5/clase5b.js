
//FUNCIONA CONSTRUCTORA

function alumno( nombre , apellido , dni ){


    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;

}



let alumno_uno = new alumno( "Pepe" , "Lopez" , 3212313);
let alumno_dos = new alumno( "Marta" , "Sanchez" , 3212313);

console.log(alumno_uno);
console.log(alumno_dos);