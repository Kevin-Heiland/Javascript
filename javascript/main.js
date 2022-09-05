

// let ingresarNumero = Number(prompt('ingrese un numero'));
// let i = Number(prompt('ingrese un numero por el cual desea multiplicar'))

// for (let i = 1; i <= i; i++) {
//     let resultado = ingresarNumero * i;
//     alert (ingresarNumero+ 'x'+i+ '='+resultado);
// }

function solicitarPrecio() {

    let valorIngresado = parseInt(prompt("Ingrese el precio del producto para saber el precio final:"));
    const ivaProducto = valorIngresado + (valorIngresado * 0.21);
    alert("El precio del producto mas el IVA es: " + ivaProducto);

}

let seguirCotizando;

do {
    solicitarPrecio();
    seguirCotizando = confirm("Desea saber otro precio?");
} while (seguirCotizando);