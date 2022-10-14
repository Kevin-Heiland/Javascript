import { validarProductoCarrito } from "./components/cart/accionesCarrito.js";

const mostrarProductos = async () => {
  const contenedorProductos = document.getElementById("producto-contenedor");
  const response = await fetch('./src/data/stock.json');
  const productos = await response.json();

  productos.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                      <img src=${producto.img}>
                      <span class="card-title">${producto.nombre}</span>
                      <a class="btn-floating halfway-fab wabes-effect waves-ligth purple" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
                      </div>
                      <div class="card-content">
                      <p>${producto.descripcion}</p>
                      <p>$${producto.precio}</p>
                      </div>
                            `;

    contenedorProductos.appendChild(div);

    mostrarProductos();

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      validarProductoCarrito(producto.id);
      Swal.fire({
        title: "Felicidades",
        icon: "success",
        text: 'Su producto ha sido agregado con exito!!',
      });
    });

  });

};
export { mostrarProductos };