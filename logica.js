//PRODUCTOS - Renderizarmos los productos:
//console.log(productos);

// Elimina todos los elementos
localStorage.clear();

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Traemos el ID articulos del index.html
let contenedor = document.getElementById("articulos");




fetch("./productos.json")
    .then(response => response.json())
    .then(data => renderizarProductos(data))

// Recorremos el array de productos e inyectamos los datos de cada producto
function renderizarProductos(productos) {
    for (const producto of productos) {
        const div = document.createElement("div")
        div.innerHTML += `
            <div class="card">
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
        contenedor.appendChild(div)
        let btnAgregar = document.getElementById(`btn${producto.id}`)
        console.log(btnAgregar)
        btnAgregar.addEventListener("click", () => agregarACarrito(producto));
    }
}




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



//API CLIMA Y UBICACION
window.addEventListener("load", () => {
    if (navigator.geolocation) {

        let temperaturaValor = document.getElementById("temperatura-Valor")
        let ubicacion = document.getElementById("ubicacion")
        let icono = document.getElementById("icono")

        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude
            lat = position.coords.latitude



            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2c027a02a8f28f67380f6206d601ab90`
            fetch(url)
                .then(response => { return response.json() })
                .then(data => {

                    let temp = Math.round(data.main.temp)
                    temperaturaValor.textContent = `${temp} °f`
                    let celsius = (temp - 273.15);
                    temperaturaValor.textContent = `${celsius.toFixed(0)} °C `;
                    console.log(data.weather[0].description)

                    ubicacion.textContent = data.name + ", " + data.sys.country;


                    switch (data.weather[0].description) {
                        case "overcast clouds":
                            icono.src = 'icons/cloudy.svg'
                            break;

                        case "rainy":
                            icono.src = 'icons/rainy-1.svg'
                            console.log("lluvioso");
                            break;

                        case "snowy":
                            icono.src = 'icons/snowy-1.svg'
                            console.log("Nieve");
                            break;

                        case "thunder":
                            icono.src = 'icons/thunder.svg'
                            console.log("Ventoso");
                            break;

                        case "clear sky":
                            icono.src = 'icons/day.svg'
                            console.log("despejado");
                            break;

                        case "light rain":
                            icono.src = 'icons/rainy-4.svg'
                            console.log("llovizna nublado");
                            break;

                        case "light rain with sun":
                            icono.src = 'icons/rainy-3.svg'
                            console.log("llovizna sol");
                            break;

                        case "few clouds":
                            icono.src = 'icons/cloudy-day-1.svg'
                            console.log("poco nuboso");
                            break;

                        case "drizzle":
                            icono.src = 'icons/rainy-7.svg'
                            console.log("Llovizna");
                            break;

                        case "light intensity drizzle":
                            icono.src = 'icons/rainy-5.svg'
                            console.log("Llovizna ligera");
                            break;

                        case "broken clouds":
                            icono.src = 'icons/cloudy-night-1.svg'
                            console.log("Nubes dispersas");
                            break;
                    }

                })
                .catch(error => {
                    console.log(error)
                })
        })
    }
})