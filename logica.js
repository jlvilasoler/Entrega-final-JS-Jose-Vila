//PRODUCTOS - Renderizarmos los productos:
console.log(productos);

// Elimina todos los elementos
localStorage.clear();

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Traemos el ID articulos del index.html
let contenedor = document.getElementById("articulos");


// Recorremos el array de productos e inyectamos los datos de cada producto
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


    renderizarProductos();




//TABLA DE PRODUCTOS - Funcion para agregar productos al carrito de compras:
function agregarACarrito(prodAAgregar) {
    carrito.push(prodAAgregar);
    console.table(carrito);
//Cartel aviso producto agrregado:
    Swal.fire({
        icon: 'success',
        title: 'Agregaste 1un:',
        text: `\n\n${prodAAgregar.articulo} ${prodAAgregar.descripcion} ${prodAAgregar.marca}`,
        imageUrl: `${prodAAgregar.foto}`,
        imageWidth: 180,
        imageHeight: 200,
        imageAlt: `\n\n${prodAAgregar.articulo} ${prodAAgregar.descripcion} ${prodAAgregar.marca}`,
        showConfirmButton: false,
        timer: 1000,
    })

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


//CANTIDAD A LOCALSTORAGE:
    localStorage.setItem("cantidad-formulario", JSON.stringify({ totalCarrito: totalCarrito, cant: cant }));
}








//Boton Enviar

var botonenviar = document.getElementById("btn-enviar");

botonenviar.addEventListener("click", clickeo);

function clickeo() {
    if (carrito < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes seleccionar los articulos para seguir con tu compra',
            showConfirmButton: false,
            timer: 1500,
        })
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Ya falta poco!',
            text: 'A continuación procederemos al pago...',
            showConfirmButton: false,
            timer: 1500
        }).then((result) => {
            if (result) {
                window.location.href = './formulario_compras.html';
            }
        });

    }

}

/*

//JSON
async function obtenerJSON(){
const URLJSON = "/productos.json";
const respuesta = await fetch(URLJSON);
const data = await respuesta.json();
productos = data;
renderizarProductos();
}


*/





//"window.location.href='./formulario_compras.html'"