import { validarProductoCarrito } from "./src/accionesCarrito";

const mostrarProductos = (productos) => {
  const contenedorProductos = document.getElementById("producto-contenedor");

  productos.forEach(producto => {
    const div = document.createElement("div");
    div.classlist.add('card');
    div.innerHTML += `
                    <h3>${producto.nombre}</h3>
                              <p>${producto.descripcion}</p>
                              <img class="img" src=${producto.img}>
                              <b class="precio">$ ${producto.precio}</b>
                            `;

    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      validarProductoCarrito(producto.id);

    });
  });
};
export { mostrarProductos };