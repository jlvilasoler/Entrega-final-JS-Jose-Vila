
//PRODUCTOS - Renderizarmos los productos:
console.log(productos);

// Elimina todos los elementos
localStorage.clear();

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let contenedor = document.getElementById("articulos");

function renderizarProductos() {
    for (const producto of productos) {
        contenedor.innerHTML += `
            <div class="card col-md-4 col-lg-2 col-sm-6">
                <img src=${producto.foto} class="card-img-top" xs alt="...">
                <div class="card-body mx-auto">
                    <p class="card-text text-center fs-4">${producto.articulo}</p>
                    <p class="card-text text-center fs-6">${producto.descripcion}</p>
                    <h4 class="card-text text-center">${producto.marca}</h4>
                    <h5 class="card-text text-center fs-2 bold">$ ${producto.precio}</h5>
                    <button id='btn${producto.id}' class="btn btn-primary mx-auto">Comprar</button>
                </div>
            </div>   
        `;
    }
    //Eventos:
    productos.forEach((producto) => {
        document.getElementById(`btn${producto.id}`).addEventListener("click", function () {
            agregarACarrito(producto);
        });
    });
}

if(contenedor){
renderizarProductos();
}


//TABLA DE PRODUCTOS - Funcion para agregar productos al carrito de compras:
function agregarACarrito(prodAAgregar) {
    carrito.push(prodAAgregar);
    console.table(carrito);
    alert(`Agregaste 1un: \n\n${prodAAgregar.articulo} ${prodAAgregar.descripcion} ${prodAAgregar.marca} al carrito!`);
//Storage - set item

localStorage.setItem("carrito", JSON.stringify(carrito))




    //Se agrega detalle de compra en filas en la tabla (carrito):
    document.getElementById("tablabody").innerHTML += `
    <tr>
    <td>${prodAAgregar.id}</td>
    <td>${prodAAgregar.cantidadCompra}</td>
    <td>${prodAAgregar.marca}</td>
    <td>${prodAAgregar.articulo}</td>
    <td>${prodAAgregar.descripcion}</td>
    <td>${prodAAgregar.precio}</td>
    </tr>
    `;
//SUMA TOTAL DE COMPRA - visualizamos el valor total que se llega gastado en el carrito:
    let totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    document.getElementById("total").innerText = "Total a pagar : " + "$ " + totalCarrito;

//CANTIDAD - visualizamos la cantidad total de articulos en el carrito:
    let cant = carrito.reduce((acumulador, producto) => acumulador + producto.cantidadCompra, 0);
    document.getElementById("cantidad").innerText = "Cantidad de Articulos: " + cant;


//CANTIDAD
localStorage.setItem("cantidad-formulario", JSON.stringify({totalCarrito:totalCarrito, cant:cant}));
}








//Boton Enviar

var botonenviar = document.getElementById("boton-enviar")
botonenviar.addEventListener("click" , clickeo)

function clickeo(){
    alert("Ya falta poco, a continuación procederemos al pago")
    window.location.href='./formulario_compras.html'

}



//


//"window.location.href='./formulario_compras.html'"