const modalContenedor = document.querySelector('.modal-contenedor')
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const limpiarCarrito = document.getElementById("limpiar-carrito");

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
