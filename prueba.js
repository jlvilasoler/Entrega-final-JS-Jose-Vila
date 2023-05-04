const url = "/productos.json";

fetch(url)
.then(res => res.json())
.then(data => mostrarProductos(data))

function mostrarProductos(productos){
    console.log(productos); 


productos.forEach(prod => {
    let card = document.createElement("div");

    card.innerHTML = `<div class="card col-md-4 col-lg-2 col-sm-6">
    <img src=${producto.foto} class="card-img-top" xs alt="...">
    <div class="card-body mx-auto">
        <p class="card-text text-center fs-4">${producto.articulo}</p>
        <p class="card-text text-center fs-6">${producto.descripcion}</p>
        <h4 class="card-text text-center">${producto.marca}</h4>
        <h5 class="card-text text-center fs-2 bold">$ ${producto.precio}</h5>
        <button id='btn${producto.id}' class="btn btn-primary mx-auto">Comprar</button>
    </div>
</div>   
`
contenedorProd.appendChild(card);
})
const botonesComprar = document.querySelectorAll("btn");
botonesComprar.forEach(btn => {
    btn.addEventListener("click", (e)=> agregarACarrito(e, productos))
})
}

function agregarACarrito(e, prods){
console.log(prods)
console.log(e.target.id)
}