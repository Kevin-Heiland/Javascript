import { mostrarProductos } from "./App.js"
import { actualizarTotalesCarrito } from "/src/components/cart/actualizarCarrito.js";
import { obtenerCarritoStorage } from "/src/components/storage/storage.js";
import {pintarCarrito} from "/src/components/cart/accionesCarrito.js"
import { homeController } from "./components/controllers/homeController.js";

document.addEventListener('DOMContentLoaded', async ()=> {
  
  const productos = await homeController();
  mostrarProductos(productos);


  if (localStorage.getItem('carrito')) {
    const carrito = obtenerCarritoStorage ();
    pintarCarrito(carrito);
    actualizarTotalesCarrito(carrito);
  }

})