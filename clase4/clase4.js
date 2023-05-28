/*
function saludar_usuario( nombre ){

    
    console.log("Bienvenido/a al sistema: ", nombre);
}






saludar_usuario("Pepe");
saludar_usuario("Marta");
saludar_usuario("Luis");
saludar_usuario();
*/




//doble_num: Se encarga de mostrar el doble del numero enviado
//numero: Es un numero entero o flotante
function doble_num( numero ){

    if( typeof(numero) == "number"){
        console.log("Se ingreso el numero:" , numero);
        console.log("El doble es: ", numero * 2);
    }
    else{
        console.log("Solo se aceptan numeros");
    }
    

}



doble_num(10);
doble_num(25);
doble_num("Pepe");