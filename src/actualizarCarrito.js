import { guardarCarritoStorage } from "./storage.js";

const actualizarTotalesCarrito = (carrito) => {
    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const TotalCompra = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    pintarTotalesCarrito(totalCantidad, TotalCompra);
    guardarCarritoStorage(carrito);

};

const pintarTotalesCarrito = (totalCantidad, TotalCompra) => {
    const contadorCarrito = document.getElementById('contador-carrito');
    const precioTotal = document.getElementById('precioTotal');

    contadorCarrito.innerText = totalCantidad;
    precioTotal.innerText = TotalCompra;
};

export { actualizarTotalesCarrito };