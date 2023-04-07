
const carrito = [];
let contenedor = document.getElementsByClassName("contenido-principal");


function renderizarProductos(){
    for(const producto of productos){
        contenedor.innerHTML += `
                <div class="contenido-principal">
                    <h2 id="id">${producto.id}</h2>
                    <h2 class="articulo">${producto.articulo}</h2>
                    <h3 class="descripcion">${producto.descripcion}</h3>
                    <h3 class="marca">${producto.marca}</h3>
                    <p class="precio">$ ${producto.precio}</p>
                    <button id='btn${producto.id}' class="btn"></button>
                </div>
            </div>   
        `;
    }
}

