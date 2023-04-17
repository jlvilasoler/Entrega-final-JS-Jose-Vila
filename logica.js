
//PRODUCTOS - Renderizarmos los productos:
console.log(productos);
const carrito = [];

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
}

/*
//BOTON IR AL CARRITO DE COMPRAS PARA COMPRAR
const pagar = document.getElementById("pagar");

pagar.addEventListener("click", agregarACarrito);

function agregarACarrito(){
    carrito.push(producto);
    console.table(carrito);
}


*/


//FORMULARIO DE COMPRA:

//Numero de documento
const documentInput = document.getElementById("documentoInput");
const documento = documentInput.value;

console.log(documento)


//email
const emailInput = document.getElementById("emailInput");
const email = emailInput.value;

//Nombre Completo
const nombreCompletoInput = document.getElementById("nombreCompletoInput");
const nombreCompleto = nombreCompletoInput.value;

//Apellidos
const apellidosInput = document.getElementById("apellidosInput");
const apellidosCompleto = apellidosCompletoInput.value;

//Telefono
const telefonoInput = document.getElementById("telefonoInput");
const telefono = telefonoInput.value;

//Celular
const celularInput = document.getElementById("celularInput");
const celular = celularInput.value;



//TARJETA
//Nombre Tarjeta
const nombreTarjetaInput = document.getElementById("nombreTarjetaInput");
const nombreTarjeta = nombreTarjetaInput.value;









const formulario = document.getElementById("form");

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    console.log("formulario enviado")
    alert("Estamos preparando su compra"+"\n\nEn breve entraremos en comunicación con usted"+"\n\nCualquier consulta puede comunicarse con nostros a través del 0900-0101 o a través del email contacto@tiendaonline.uy" + "\n\nMuchas gracias...")
    console.log("Documento:", documentInput.value)
    console.log("Email:", emailInput.value)
    console.log("Nombre Completo:", nombreCompletoInput.value)
    console.log("Apellidos:", apellidosCompletoInput.value)
    console.log("Telefono:", telefonoInput.value)
    console.log("celular:", celularInput.value)

    console.log("Nombre Tarjeta:", nombreTarjetaInput.value)
    console.log("Apellidos Tarjeta:", apellidosTarjetaInput.value)
    console.log("Número Tarjeta:", numeroTarjetaInput.value)
    console.log("Codigo Tarjeta:", codigoInput.value)
    console.log("Fecha de Vencimiento Tarjeta:", fechaValidezInput.value)
    console.log("Institución Bancaria:", institucionBancaria.value)
    console.log("Medio de pago:", medioPago.value)

    console.log("Dirección Envío:", direccionEnvioInput.value)
    console.log("Ciudad Envío:", ciudadEnvioInput.value)
    console.log("Departamento Envío:", departamentoEnvioInput.value)
    console.log("Codigo Postal:", codigoPostalInput.value)
})









//EVENTOS DEL TECLADO - FORMULARIO INFORMACIÓN:
//Campo Número Documento
documentInput.oninput = () => {
    if(isNaN(documentInput.value)){
        //si no es un numero
        documentInput.style.color='red';
    }else{
        //si es un numero
        documentInput.style.color = 'black';
    }
}

//Campo Apellidos
apellidosCompletoInput.oninput = () => {
    if(isNaN(apellidosCompletoInput.value)){
        //si no es un numero
        apellidosCompletoInput.style.color='black';
    }else{
        //si es un numero
        apellidosCompletoInput.style.color = 'red';
    }
}

//Campo Nombre
nombreCompletoInput.oninput = () => {
    if(isNaN(nombreCompletoInput.value)){
        //si no es un numero
        nombreCompletoInput.style.color='black';
    }else{
        //si es un numero
        nombreCompletoInput.style.color = 'red';
    }
}

//Campo Telefono
telefonoInput.oninput = () => {
    if(isNaN(telefonoInput.value)){
        //si no es un numero
        telefonoInput.style.color='red';
    }else{
        //si es un numero
        telefonoInput.style.color = 'black';
    }
}

//Campo Celular
celularInput.oninput = () => {
    if(isNaN(celularInput.value)){
        //si no es un numero
        celularInput.style.color='red';
    }else{
        //si es un numero
        celularInput.style.color = 'black';
    }
}


//EVENTOS DEL TECLADO - FORMULARIO PAGO:

//Campo Nombre Tarjeta
nombreTarjetaInput.oninput = () => {
    if(isNaN(nombreTarjetaInput.value)){
        //si no es un numero
        nombreTarjetaInput.style.color='black';
    }else{
        //si es un numero
        nombreTarjetaInput.style.color = 'red';
    }
}

//Campo Apellidos Tarjeta
apellidosTarjetaInput.oninput = () => {
    if(isNaN(apellidosTarjetaInput.value)){
        //si no es un numero
        apellidosTarjetaInput.style.color='black';
    }else{
        //si es un numero
        apellidosTarjetaInput.style.color = 'red';
    }
}

//Numero de Tarjeta 16 Digitos
numeroTarjetaInput.oninput = () => {
    if(isNaN(numeroTarjetaInput.value)){
        //si no es un numero
        numeroTarjetaInput.style.color='red';
    }else{
        //si es un numero
        numeroTarjetaInput.style.color = 'black';
    }
}

//Codigo 3 digitos (acepta solo numeros)
codigoInput.oninput = () => {
    if(isNaN(codigoInput.value)){
        //si no es un numero
        codigoInput.style.color='red';
    }else{
        //si es un numero
        codigoInput.style.color = 'black';
    }
}




//Dirección Envío
direccionEnvioInput.oninput = () => {
    if(isNaN(direccionEnvioInput.value)){
        //si no es un numero
        direccionEnvioInput.style.color='black';
    }else{
        //si es un numero
        direccionEnvioInput.style.color = 'red';
    }
}

//Ciudad Envío
ciudadEnvioInput.oninput = () => {
    if(isNaN(ciudadEnvioInput.value)){
        //si no es un numero
        ciudadEnvioInput.style.color='black';
    }else{
        //si es un numero
        ciudadEnvioInput.style.color = 'red';
    }
}

//Departamento Envío
departamentoEnvioInput.oninput = () => {
    if(isNaN(departamentoEnvioInput.value)){
        //si no es un numero
        departamentoEnvioInput.style.color='black';
    }else{
        //si es un numero
        departamentoEnvioInput.style.color = 'red';
    }
}

//Codigo Postal
codigoPostalInput.oninput = () => {
    if(isNaN(codigoPostalInput.value)){
        //si no es un numero
        codigoPostalInput.style.color='red';
    }else{
        //si es un numero
        codigoPostalInput.style.color = 'black';
    }
}

/*
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}*/



