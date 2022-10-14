import { eliminarProductoCarrito } from "../cart/accionesCarrito.js";

const modalContenedor = document.querySelector('.modal-contenedor')
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const limpiarCarrito = document.getElementById("limpiar-carrito");
const modalCarrito = document.querySelector('.modal-carrito');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
    
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

limpiarCarrito.addEventListener("click", () => {
    limpiarCarrito.click();
    swal.fire({
        title: "¿Esta seguro de vaciar el carrito?",
        icon: "warning",
        showCancelButton: true,
        buttons: true,
        dangerMode: true
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload();
            localStorage.clear();
            swal.fire({
                title: "borrado",
                icon: "sucess",
                text: "El producto ha sido borrado"
            })
            location.reload();
            localStorage.clear();
        }
    })
})

modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target.classList.contains('boton-eliminar')) {
        Swal.fire({
            title: 'Esta seguro?',
            text: `Va a eleminar el producto`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarProductoCarrito(event.target.value);
                Swal.fire(
                    'Eliminado!',
                    'El producto ha sido eliminado',
                    'success'
                )
            }
        })
    }
})