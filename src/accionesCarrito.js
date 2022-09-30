import { actualizarTotalesCarrito } from "./actualizarCarrito.js";
import { productos } from "./stock.js";


let carrito = [];

const validarProductoCarrito = (productoId) => {
    const productoRepetido = carrito.find(producto => producto.id === productoId);
    if (productoRepetido) {
        productoRepetido.cantidad++;
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`)
        cantidadProducto.innerText = `cantidad${productoRepetido.cantidad}`

        actualizarTotalesCarrito(carrito);

    } else {
        agregarAlCarrito(productoId);
    }
};

const agregarAlCarrito = (productoId) => {
    const contenedor = document.getElementById('carrito-contenedor');
    const producto = productos.find(producto => producto.id === productoId);
    carrito.push(producto);

    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${producto.nombre}</p>
                <p>precio: ${producto.precio}</p>
                <p>${producto.id}</p>
                <p id=cantidad${producto.cantidad}>Cantidad:</p>
                <button id=eliminar ${producto.id} class='btn waves=effect waves-light boton-eliminar' value='${producto.id}'>x</button>
`;
    contenedor.appendChild(div);
    actualizarTotalesCarrito(carrito);
};

const pintarCarrito = (carrito) => {
    const contenedor = document.getElementById('carrito-contenedor');

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>precio: ${producto.precio}</p>
                        <p>${producto.id}</p>
                        <p id=cantidad${producto.cantidad}>Cantidad:</p>
                        <button id=eliminar ${producto.id} class='btn waves=effect waves-light boton-eliminar' value='${producto.id}'>x</button>
        `;
        contenedor.appendChild(div);

    });
};
export { validarProductoCarrito, pintarCarrito };