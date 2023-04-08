//PRODUCTOS

console.log(productos);
const carrito = [];
let contenedor = document.getElementById("articulos");

function renderizarProductos(){
    for(const producto of productos){
        contenedor.innerHTML += `
            <div class="card col-sm-2">
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
productos.forEach((producto) =>  {document.getElementById(`btn${producto.id}`).addEventListener("click", function() {
            agregarACarrito(producto);
});
});
}

renderizarProductos();



//TABLA DE PRODUCTOS (CARRITO)
function agregarACarrito(prodAAgregar){
    carrito.push(prodAAgregar);
    console.table(carrito);
    alert(`Agregaste 1un: \n\n${prodAAgregar.articulo} ${prodAAgregar.descripcion} ${prodAAgregar.marca} al carrito!`);


    //Se agrega fila a la tabla (carrito):
    document.getElementById("tablabody").innerHTML += `
    <tr>
    <td>${prodAAgregar.id}</td>
    <td>${prodAAgregar.marca}</td>
    <td>${prodAAgregar.articulo}</td>
    <td>${prodAAgregar.descripcion}</td>
    <td>${prodAAgregar.precio}</td>
    </tr>
    `;





  //hace la suma del total:
let totalCarrito = carrito.reduce((acumulador,producto)=>acumulador+producto.precio, 0);
document.getElementById("total").innerText = "TOTAL A PAGAR $: " + totalCarrito; 
}