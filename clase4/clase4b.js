
//mayor_de_edad: Le llega por parametro una edad. 
//Se encarga informar si el usuario es mayor o no de edad.
//edad: Numero entero(int)
/*
function mayor_de_edad( edad ){

    if( typeof(edad)  == "number" ){
        if( edad >= 18){
            console.log("Es mayor de edad");
        }
        else{
            console.log("No es mayor de edad");
        }
    }
    else{
        console.log("Tipo de dato incorrecto");
    }
    

}



mayor_de_edad(20);
mayor_de_edad(13);
mayor_de_edad(22);
mayor_de_edad("Pepe");

*/


function suma_dos_numeros( num_uno , num_dos ){

    let suma = num_uno + num_dos;

    return suma 

}



let resultado = suma_dos_numeros(10 , 30);
console.log( resultado );