// FOR

/*
for( desde ; hasta ; actualizacion ){
    sentencias
}
*/

/*
for( let i = 0 ; i < 3 ; i = i + 1){
    console.log("mensaje desde el bucle");
    console.log("Estamos en la vuelta: ", i);
}
*/
/*
for (let i = 0 ; i < 11 ; i = i + 1){
    console.log("vuelta", i);
}
*/

/*
let nombre_usuario = prompt ("ingresar su nombre");*/

/*
let numero = prompt("insertar numero");
    numero = parseInt(numero);

    for( let i = 0 ; i < 11 ; i = i + 1){
        let resultado = numero * i;
        console.log("El resultado y la tabla del mismo: " , resultado);
    }
    */

/*
let usuario_registrado = "pepe";
let intentos = 0;

for(let i = 0 ; i < 5 ; i = i + 1){

    let nombre_usuario = prompt("nombre de de usuario");

    if( nombre_usuario != usuario_registrado && intentos < 3){
        console.log("Datos incorrectos");
        intentos = intentos + 1;
        continue 
    }

    if (intentos == 3){
        console.log("Chau tarjeta");
        break
    }

    if (nombre_usuario == usuario_registrado){
        console.log("Bienvenido al sistema:", nombre_usuario);
        break
    }
}
*/

/*
let partido_A = "A";
let voto_A = 0;
let partido_B = "B";
let voto_B = 0;
let empate = "empate";
let voto_empate = 0;


for (let i = 0 ; i < 11 ; i = i + 1){
    nombre_partido = prompt("Nombre de partido");

    if(nombre_partido == partido_A){
        voto_A = voto_A + 1;
        continue
    }
    else if(nombre_partido == partido_B){
        voto_B = voto_B + 1;
        continue
    }
    else if(nombre_partido == empate){
        voto_empate = voto_empate + 1;
        continue
    }
    else if(voto_A == 10){
        console.log("GANADOR PARTIDO A");
        break
    }
    else if(voto_B == 10){
        console.log("GANADOR PARTIDO B");
        break
    }
    else if(empate == 10){
        console.log("EMPATE");
        break
    }
}
*/






