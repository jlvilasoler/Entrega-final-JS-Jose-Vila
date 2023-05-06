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
const apellidosCompleto = apellidosInput.value;

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

//Apellidos Tarjeta
const apellidosTarjetaInput = document.getElementById("apellidosTarjetaInput");
const apellidosTarjeta = apellidosTarjetaInput.value;

//Num Tarjeta
const numeroTarjetaInput = document.getElementById("numeroTarjetaInput");
const numeroTarjeta = numeroTarjetaInput.value;

//Cod Tarjeta
const codigoInput = document.getElementById("codigoInput");
const codigo = codigoInput.value;

//Fecha Val Tarjeta
const fechaValidezInput = document.getElementById("fechaValidezInput");
const fechaValidez = fechaValidezInput.value;

// Institucion Bancaria Tarjeta
const institucionBancaria = document.getElementById("institucionBancaria");
const institucionBanco = institucionBancaria.value;

// Medio de Pago Tarjeta
const medioPago = document.getElementById("medioPago");
const medioP = medioPago.value;

// Direccion Envio
const direccionEnvioInput = document.getElementById("direccionEnvioInput");
const direccionEnvio = direccionEnvioInput.value;

// Ciudad Envio
const ciudadEnvioInput = document.getElementById("ciudadEnvioInput");
const ciudadEnvio = ciudadEnvioInput.value;

// Departamento Envio
const departamentoEnvioInput = document.getElementById("departamentoEnvioInput");
const departamentoEnvio = departamentoEnvioInput.value;

// Codigo Postal Envio
const codigoPostalInput = document.getElementById("codigoPostalInput");
const codigoPostal = codigoPostalInput.value;





const formulario = document.getElementById("form");

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    console.log("formulario enviado")

    Swal.fire({
        icon: 'success',
        title: 'Compra Exitosa!',
        text: 'Ya estamos preparando su perdido, en un maximo de 24hs estaremos en su casa. \nGracias!',
        showConfirmButton: false,
        timer: 2000
      }).then((result) => {
        if (result) {
            window.location.href='./index.html';
        }
      });

/*
    alert("Estamos preparando su compra"+"\n\nEn breve entraremos en comunicación con usted"+"\n\nCualquier consulta puede comunicarse con nostros a través del 0900-0101 o a través del email contacto@tiendaonline.uy" + "\n\nMuchas gracias...")
    window.location.href='./index.html'*/
    console.log("Documento:", documentInput.value)
    console.log("Email:", emailInput.value)
    console.log("Nombre Completo:", nombreCompletoInput.value)
    console.log("Apellidos:", apellidosInput.value)
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
apellidosInput.oninput = () => {
    if(isNaN(apellidosInput.value)){
        //si no es un numero
        apellidosInput.style.color='black';
    }else{
        //si es un numero
        apellidosInput.style.color = 'red';
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

