
// const productos = [
//     {
//         id: 1,
//         nombre: "Lemon pie",
//         descripcion: "El postre mas rico, si te gusta el limon. con limones seleccionados y materia prima de excelente calidad",
//         precio: 2500,
//         cantidad:1
//     },

//     {
//         id: 2,
//         nombre: "cañonsito",
//         descripcion: "Hechos de hojaldre y rellenos de dulce de leche",
//         precio: 600,
//         cantidad:1
//     },

//     {
//         id: 3,
//         nombre: "chipa",
//         descripcion: "Con harina de mandioca y queso parmesano de la mejor calidad.",
//         precio: 800,
//         cantidad:1
//     },


class alimentos {
    constructor (nombre, precio, stock) {
        this.nombre= nombre;
        this.precio= precio;
        this.stock= stock;
    }

    actualizarStock(X){
        this.stock= this.stock - X;
    }
  
}

const arrayAlimentos = [];
arrayAlimentos.push(new alimentos ("chipa", 100, 20));
arrayAlimentos.push(new alimentos ("palmeritas", 300, 20));
arrayAlimentos.push(new alimentos ("lemon pie", 600, 15));

//Precio Menor a Mayor
const ordenarMenorMayor = () => {
    arrayAlimentos.sort((a,b)=> a.precio - b.precio);
    console.log(arrayAlimentos);
    mostrarListaOrdenada();
}

//Precio Mayor a Menor
const ordenarMayorMenor = () => {
    arrayAlimentos.sort((a,b)=> b.precio - a.precio);
    console.log(arrayAlimentos);
    mostrarListaOrdenada();
}

const mostrarListaOrdenada = () => {
    let array = [];
    arrayAlimentos.forEach(alimentos => array.push(alimentos.nombre+" $"+alimentos.precio));
    alert("Lista de precios:"+"\n"+array.join("\n"))
}


// FUNCTIONS PARA PROCESO DE COMPRA

let total= 0;

const agregarProductoAlCarrito = () => {
    let productoAgregado;
    let producto = "";
    let cantidad = 0;
    let precio = 0;

    //Ciclo para sumar productos al carrito
    do {
        producto = prompt ("¿Que alimentos desea comprar. tenemos para ofrecerle (chipa, palmeritas, lemon pie."); 
        cantidad = parseInt(prompt ("¿Cuántos desea comprar?"));
        console.log(cantidad)

        switch (producto) {
            case arrayAlimentos[0].nombre:
                arrayAlimentos[0].actualizarStock(cantidad);
                if (arrayAlimentos[0].stock <= 0 || isNaN(cantidad)){
                    alert("Lo sentimos. En este momento no tenemos stock")
                    arrayAlimentos[0].stock=arrayAlimentos[0].stock+cantidad;
                     precio = 0;
                    cantidad = 0;
                }else{
                    precio= arrayAlimentos[0].precio;
                }
                break;
            case arrayAlimentos[1].nombre:
                arrayAlimentos[1].actualizarStock(cantidad);
                if (arrayAlimentos[1].stock<=0 || isNaN(cantidad)){
                    alert("Lo sentimos. En este momento no tenemos stock")
                    arrayAlimentos[1].stock=arrayAlimentos[1].stock+cantidad;
                    precio = 0;
                    cantidad = 0;
                }else{
                    precio= arrayAlimentos[1].precio;
                }
                break;
            case arrayAlimentos[2].nombre:
                arrayAlimentos[2].actualizarStock(cantidad);
                if (arrayAlimentos[2].stock<=0 || isNaN(cantidad)){
                    alert("Lo sentimos. En este momento no tenemos stock")
                    arrayAlimentos[2].stock=arrayAlimentos[2].stock+cantidad;
                    precio = 0;
                    cantidad = 0;
                }else{
                    precio= arrayAlimentos[2].precio;
                }
                break;
            default:
                alert("Alguno de los ingresados no es correcto");
                precio= 0;
                cantidad= 0;
        }
        total = total + precio*cantidad;
        productoAgregado = confirm("¿Desea agregar otro producto?");
    } while (productoAgregado);
}

//Función para calcular el envío
const obtenerPrecioDeEnvio = (total) => {
    let confirmacion = confirm("¿Querés envio a domicilio?");
    if (confirmacion && total>=1000){
        alert("Tenés envío gratis. El total de tu compra es $"+total);
    }else if (confirmacion && total<1000 && total!=0){
        total=total+700;
        alert("El envío cuesta $700. El total de tu compra asciende a $"+total);
    }else{
        alert("El total de tu compra es $"+total);
    }
    return total;
}

//Calculo el total de carrito
const obtenerTotal = (total) => {
    alert ("El total a pagar es $"+total);
}


// llamando funciones

comprarProductos = () => {
    if (confirm("¿Querés ordenar la lista de alimentos del más barato al más caro?")){
        ordenarMenorMayor();
    }else{
        ordenarMayorMenor();
    }
    agregarProductoAlCarrito();
    obtenerTotal(obtenerPrecioDeEnvio(total));
}

comprarProductos();