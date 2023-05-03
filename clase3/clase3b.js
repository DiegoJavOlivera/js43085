


/*
ojo infinito no ejecutar
whiile ( 10 > 5){
    console.log(hola);
}

while( condicion){
    sentencia
}
*/
/*

let nombre_usuario = prompt("Ingrese su nombre o Salir");

while( nombre_usuario != "Salir"){
    console.log("Bienvenido/a al sistema: ", nombre_usuario);
    let nombre_usuario = prompt("Ingrese su nombre o Salir");
}
*/
/*
let numero = prompt("ingresar el numero ");
let numero_siguiente = 0;

    numero = parseInt(numero);

while( numero >= 0 ){
    console.log("el numero no es negativo", numero);
    console.log("El siguiente es: ", numero+1);
    
    numero = prompt("ingrese numero, se mostrara por consola");
    numero = parseInt(numero);


}

*/


//DO WHILE

/*

let nombre_usuario = prompt("NOMBRE O ERROR");

do{
    if(nombre_usuario == "ERROR"){
        console.log("SE DETECTO UN ERROR EN LA CONSULTA");
    } 
    else{
        console.log("Bienvenido al sistema: ", nombre_usuario);
        nombre_usuario = prompt("NOMBRE O ERROR");
    }
}

while(nombre_usuario != "ERROR")
*/

/*
let numeros_1 = prompt("Ingresar numeros");
let numeros_2 = prompt("Ingresar numeros de la segunda seccion");

    numeros_1 = parseInt(numeros_1);
    numeros_2 = parseInt(numeros_2);

let resultado = numeros_1 + numeros_2;




while(resultado <= 500 ){
    console.log("La suma total de ambos numeros no es mayor a 500", resultado);
    let numeros_1 = prompt("Ingresar numeros");
    let numeros_2 = prompt("Ingresar numeros de la segunda seccion");

        numeros_1 = parseInt(numeros_1);
        numeros_2 = parseInt(numeros_2);

        resultado = numeros_1 + numeros_2;

    if( resultado >= 500){
        console.log("la suma es mayor o igual a 500");
    }
}
*/

/*
let sumar = 0;

while(sumar <= 500){
    let numero = prompt("Ingrese un numero");
    numero = parseInt(numero);
    sumar += numero;
}

console.log("la suma total es: " + suma);

*/



let partidos = { A: 0, B: 0, EMPATE: 0 };

let numero_socios = 10;

let contador_votos = 0;

while( contador_votos <= numero_socios){
    let voto = prompt ("ingresar voto (A , B o EMPATE) ");
    
    if( voto == "A" || voto =="B" || voto == "EMPATE"){
        partidos[voto]++;
        contador_votos++; 
    } else {
        alert("El voto es invalido. Ingresar A, B o EMPATE");
    }
}


let ganador;

if(partidos.A > partidos.B && partidos.A > partidos.EMPATE){
    ganador = "A";
    console.log("EL PARTIDO A ES EL GANADOR")
    alert("EL PARTIDO A ES EL GANADOR")
} 
else if(partidos.B > partido.A && partidos.B > partidos.EMPATE) {
    ganador = "B";
    console.log("ELPARTIDO B ES EL GANADOR");
    alert("EL PARTIDO B ES EL GANADOR");
}else{
    ganador = "EMPATE";
    console.log("EMPATE");
}









