
/*
ACTIVIDAD 1
let nombre;
let apellido; 
let edad;

nombre = "Homero";
apellido = "Simpson";
edad = 35;

console.log(nombre,apellido,edad);*/

/*
ACTIVIDAD 2

const springfield = "springfield";
const shelbyville = "shelbyville";
const mina_clavero = "mina_clavero";
const bariloche = "bariloche";


console.log(springfield,shelbyville,mina_clavero,bariloche)
*/

/*

ACTIVIDAD 3

let nombre;
let apellido;
let direccion;
let numeracion
let edad;
let categoria;
let resultado = nombre + apellido + direccion + numeracion + edad + categoria;

nombre = "Bart";
apellido = "Simpson";
direccion = "Evergreen terr.";
numeracion = 742;
edad = 10;
categoria = "B2";
resultado = nombre + apellido + direccion + numeracion + edad + categoria;

console.log(resultado);
*/


/*
    Actividad 4

alert("ingrese los 5 nombres que componen su familia")

let nombre_1 = prompt("Ingrese el primer nombre");
let nombre_2 = prompt("Ingrese el segundo nombre");
let nombre_3 = prompt("Ingrese el tercer nombre");
let nombre_4 = prompt("Ingrese el cuarto nombre");
let nombre_5 = prompt("ingrese el quinto nombre");
let grupo_familiar = nombre_1 + nombre_2 + nombre_3 + nombre_4 + nombre_5;

console.log(grupo_familiar);

alert(grupo_familiar) */


/*

Actividad 4

let precio_1 = prompt("Ingrese el precio del primer producto");
let precio_2 = prompt("Ingrese el precio del segundo producto");

    precio_1 = parseInt(precio_1);
    precio_2 = parseInt(precio_2);



let resultado = precio_1 + precio_2;



console.log("El resultado del conjunto de los precios es de: ",resultado);

alert("El resultado del conjunto de los precios es de: "+ resultado);


let resultado_descuento = resultado *0.2;



console.log( "El total de los 2 productos es: ", resultado,". Y el descuento del 20% es de: ", resultado_descuento);

alert( "El total de los 2 productos es: " + resultado + ". Y el descuento del 20% es de: " + resultado_descuento);

let total = resultado - resultado_descuento;

console.log("El total es de: " ,total);

alert("El total es de: " + total);

*/



/*
ACTIVIDAD 1
let nombre = prompt("Solicito un nombre");

if( nombre == "Diego"){
    console.log("Fui yo");
    alert("fui yo");
}


else if( nombre != "Diego"){
    console.log("Yo no fui");
    alert("Yo no fui");
}

*/
/*
ACTIVIDAD 2
let tecla = prompt("Insertar una tecla");

if ( tecla == "y" || tecla == "Y"){
    console.log("Correcto");
    alert("Correcto");
    }else{
    console.log("ERROR");
    alert("ERROR");
}
*/
/*
    ACTIVIDAD 3

let seleccion_personaje = prompt("Selecionar un numero");



if( seleccion_personaje == 1){
    console.log("SELECCIONASTE A HOMERO");
    alert("SELECCIONASTE A HOMERO");
}

else if( seleccion_personaje == 2 ){
    console.log("SELECCIONASTE A BART");
    alert("SELECCIONASTE A BART")
}

else if( seleccion_personaje == 3 ){
    console.log("SELECCIONASTE A MARGE");
    alert("SELECCIONASTE A MARGE");
}

else if(seleccion_personaje == 4){
    console.log("SELECCIONASTE A LISA");
    alert("SELECCIONASTE A LISA");
}


*/
/*
let total = 0, numero = 0;

while(total <= 500){
    numero = prompt("Ingrese numero");
    numero = parseInt(numero);
    total = parseInt(total);
    if(total + numero <= 500){
        total += numero;
    }
    else{
        break;
    }    
};

console.log("La suma total menor o igual a 500 es " + total);
*/
/*
ACTIVIDAD 4
let numero = parseInt(prompt("Ingresar el valor del presupuesto"));

    if(numero >= 0 && numero <= 1000){
        console.log("El presupuesto es bajo");
    }
    else if(numero >= 1001 && numero <= 3000){
        console.log("El presupuesto es medio");
    }
    else if( numero >= 3000){
        console.log("El presupuesto es ALTO");
    }
*/

/*

let producto1 = prompt("");
let producto2 = prompt("");
let producto3 = prompt("");
let producto4 = prompt("");

if((producto1 != "") && (producto2 != "") &&  (producto3 != "") && (producto4 != "")){
    let heladera = "1) " + producto1 + " " + "2) " + producto2 + " " + "3) " + producto3 + " " + "4) " + producto4 + " ";
    console.log(heladera);
} else {
    console.log("ES NECESARIO TODOS LOS PRODUCTOS");
}

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
ACTIVIDAD 1
let numero = parseInt(prompt("ingresar numero"));
let texto = prompt("Ingresar un texto");

for (let numeroNuevo = 0 ; numeroNuevo < numero ; numeroNuevo = numeroNuevo + 1 ){
    alert("iniciar nuevamente");
    console.log(texto)
}
*/

/*
ACTIVIDAD 2
let numero = parseInt(prompt("Ingrese un numero"));

for(let i = 0; i < numero ; i = i++){
    
    if(i > 4){
        break;
    }
    console.log("supera el numero 4");
    alert("lado");
}
*/
/*
    ACTIVIDAD 3
let alumno0 = prompt("");
let alumno1 = prompt("");
let alumno2 = prompt("");
let alumno3 = prompt("");
let alumno4 = prompt("");
let alumno5 = prompt("");
let alumno6 = prompt("");
let alumno7 = prompt("");
let alumno8 = prompt("");
let alumno9 = prompt("");
let alumno10 = prompt("");


    let total_alumnos = alumno0 + " " + alumno1 + " " +alumno2 + " " + alumno3 + " " + alumno4 + " " + alumno5 + " " + alumno6 + " " + alumno7 + " " + alumno8 + " " + alumno9 + " " + alumno10;

    console.log(total_alumnos);
    alert(total_alumnos);

*/

/*
let nombre = prompt("INGRESAR NOMBRE");
let ingresados = "";

while(nombre != "voldemort"){
    ingresados += nombre + "/n";

    nombre = prompt(" INGRESAR NOMBRE")
}

alert(ingresados);
*/
/*
    ACTIVIDAD 5

let numero = parseInt(prompt(""));
while (numero != "ESC") {
    switch (numero) {
        case "1":
            alert("Tomate");
            break;
        case "2":
            alert("papa");
        break;
        case "3":
            alert("carne");
        case "4":
            alert("pollo");
        break;
        default:
            alert("INGRESAR DE 1 A 4");
        break
    }
    numero = prompt ("SELECCIONAR PRODUCTO DE 1 A 4");
}
*/
/*
function solicitar_nombre(){
    let nombre_ingresado = prompt("INGRESAR NOMBRE");
    alert("El nombre ingresado es " + nombre_ingresado);
}

solicitar_nombre();
solicitar_nombre();
solicitar_nombre();
*/
/*
function conParametros(parametro1, parametro2){
    console.log(parametro1 + " " + parametro2);
}

conParametros("hola","coder");
conParametros("cursando","js");
*/
/*
let resultado = 0;

function sumar (primerNumero , segundoNumero){
    resultado = primerNumero + segundoNumero
}

function mostrar(mensaje){
    console.log(mensaje);
}

sumar(6,3);
mostrar(resultado);
*/
/*

function sumar(primerNumero, segundoNumero){
    return primerNumero + segundoNumero;
}

let resultado = sumar (5 ,8 );

console.log(resultado);
*/

function calculadora(primerNumero, segundoNumero, operacion){
    switch(operacion){
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}

console.log(calculadora(10,5,"-"));


