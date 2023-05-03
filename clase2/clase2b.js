/*
let edad_usuario = prompt ("Ingrese su edad");

edad_usuario = parseInt(edad_usuario)

if( edad_usuario >= 18 ){
    console.log("Bienvenido/a al sistema");
    //condigo si
}
else{

    console.log("no podes ingresar");
}


let num_uno = 30;
let num_dos = 50;



let operacion = prompt("ingrese SUMA o RESTA");

if( operacion == "SUMA"){

    let suma = num_uno + num_dos;
    console.log("El resultado de la suma es :", suma);
}

else if( operacion == "RESTA"){
    let resta = num_uno - num_dos;
    console.log("El resultado de la resta es:", resta);
}
else{
    console.log("OPERACION NO ENCONTRADA");
}

*/



//OPERADORES LOGICOS //

// AND ---- Y ---- &&
// OR ---- o --- || 

/*

let nota_1 = prompt("ingrese nota de matematica");
let nota_2 = prompt("Ingrese nota de lengua");
let estado = prompt("El alumno es regular ?");

nota_1 = parseInt(nota_1)
nota_2 = parseInt(nota_2)

let resultado = (nota_1 + nota_2) /2;

if(resultado >= 7 && estado == "es regular" ){
    console.log("el alumno aprobo con: " + resultado);
}
else if(  resultado >= 4 && resultado <= 7 && estado == "es regular"){
    console.log("El alumno recupera, saco: ",resultado);
}
else if(resultado < 3 || estado != "es regular" ){
    console.log("El alumno recursa por que saco",resultado );
}
*/

let partidos = { A: 0, B: 0, EMPATE: 0 };
let numero_socios = 10;
let contador_votos = 0;

while (contador_votos < numero_socios) {
    let voto = prompt("Ingrese su voto (A, B o EMPATE)").toUpperCase();

    if (voto === "A" || voto === "B" || voto === "EMPATE") {
    partidos[voto]++;
    contador_votos++;
    } else {
    alert("Voto inválido. Ingrese A, B o EMPATE.");
    }
}

let ganador;

if (partidos.A > partidos.B && partidos.A > partidos.EMPATE) {
    ganador = "A";
    console.log("El partido A es el ganador");
    alert("El partido A es el ganador");
} else if (partidos.B > partidos.A && partidos.B > partidos.EMPATE) {
    ganador = "B";
    console.log("El partido B es el ganador");
    alert("El partido B es el ganador");
} else {
    ganador = "EMPATE";
    console.log("Empate");
    alert("Empate");
}




