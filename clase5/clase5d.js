
//CREAR UN CLASE Producto: nombre , precio , stock 

//METODOS
/*

get_datos: trae todos los datos del producto
get_stock: retorna true si existe stock disponible, sino retorna false. 

*/


class Producto{

    constructor( nombre , precio , stock){

        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;

    }


    // METODOS

    get_datos(){
        console.log("<------ DATOS DEL PRODUCTO -------->");
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Stock: ", this.stock);
        console.log("");
    }


    get_stock(){

        if( this.stock > 0){
            return true
        }
        else{
            return false
        }
    }


    venta( cantidad ){

        if( this.stock >= cantidad ){
            console.log("Gracias por su compra");
            this.stock = this.stock - cantidad;
        }
        else{
            console.log("No se puede realizar la comprar por falta de stock");
        }
    }

}


let producto_uno = new Producto("Monitor" , 15000 , 4);
let producto_dos = new Producto("Lampara" , 8000 , 6);
let producto_tres = new Producto("Silla" , 30000 , 3);

console.log(producto_uno);

producto_uno.get_datos();
producto_dos.get_datos();
producto_tres.get_datos();


producto_uno.get_stock();

// VENTA DE PRODUCTO

// QUIERO COMPRAR UNA LAMPARA //

if( producto_dos.get_stock() ){
    let cantidad = parseInt(prompt("Cuantas lamparas queres?"));
    producto_dos.venta( cantidad );
    producto_dos.get_datos();    
}
else{
    console.log("No disponemos de stock del producto");
}


