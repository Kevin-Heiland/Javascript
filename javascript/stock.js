
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

    
// ]

const productos = ['chipa', 'palmeritas', 'lemon pie']

let elijaProd = '';

do {
    if ( elijaProd != '' ) {
        alert ('El producto a sido seleccionado');
    }

    elijaProd = prompt ('Ingrese el producto que sea comprar! (chipa, palmeritas o lemon pie)')
} while (productos.includes (elijaProd));

alert ('El producto '+elijaProd+' no se encuentra disponible')