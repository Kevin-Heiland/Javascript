const mainContent = document.getElementById("mainContent")


let carrito = [];

productos.forEach(element => {
  let content = document.createElement("div");
  content.className = "card"
  content.innerHTML = `
                    <h3>${element.nombre}</h3>
                              <p>${element.descripcion}</p>
                              <img class="img" src=${element.img}>
                              <b class="precio">$ ${element.precio}</b>
                            `;

  mainContent.append(content);

  let comprar = document.createElement("button")
  comprar.innerText = "Añadir al carrito";
  comprar.className = "boton";

  content.append(comprar);
  comprar.addEventListener("click", () =>{
    carrito.push({
      id : element.id,
      img : element.img,
      nombre: element.nombre,
      precio: element.precio,
    });
    console.log(carrito);
  });


});