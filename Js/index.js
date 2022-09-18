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



})