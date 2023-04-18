//CARRITO GET ITEM
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];




//RESUMEN TOTAL COMPRA ARRIBA A LA DERECHA (Cambiamos resumen por JS)


let cantart = document.getElementById("cantidad");
cantart.innerHTML = "Cantidad articulos:";


let total = document.getElementById("total");
total.innerHTML = "Total a pagar:";




/*
//SUMA TOTAL DE COMPRA - visualizamos el valor total que se llega gastado en el carrito:
let totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
document.getElementById("total").innerText = "Total a pagar : " + "$ " + JSON.parse(localStorage.getItem("totalcarrito.totalCarrito"));
*/

//JSON.parse(localStorage.getItem("totalcarrito.totalCarrito"))


//CANTIDAD - visualizamos la cantidad total de articulos en el carrito:
let cant = carrito.reduce((acumulador, producto) => acumulador + producto.cantidadCompra, 0);
document.getElementById("cantidad").innerText = "Cantidad de Articulos: " + cant;

//SUMA TOTAL DE COMPRA - visualizamos la cantidad total de articulos en el carrito:
let totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
document.getElementById("total").innerText = "Total a pagar : " + "$ " + totalCarrito;





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
    window.location.href='./index.html'
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

