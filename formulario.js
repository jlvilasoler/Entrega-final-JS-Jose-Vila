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

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let cantart = document.getElementById("cantidad");
cantart.innerHTML = "Cantidad articulos:";
let total = document.getElementById("total");
total.innerHTML = "Total a pagar:";


let cant = carrito.reduce((acumulador, producto) => acumulador + producto.cantidadCompra, 0);
document.getElementById("cantidad").innerText = "Cantidad de Articulos: " + cant;
let totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
document.getElementById("total").innerText = "Total a pagar : " + "$ " + totalCarrito;

const documentInput = document.getElementById("documentoInput");
const documento = documentInput.value;

const emailInput = document.getElementById("emailInput");
const email = emailInput.value;

const nombreCompletoInput = document.getElementById("nombreCompletoInput");
const nombreCompleto = nombreCompletoInput.value;

const apellidosInput = document.getElementById("apellidosInput");
const apellidosCompleto = apellidosInput.value;

const telefonoInput = document.getElementById("telefonoInput");
const telefono = telefonoInput.value;

const celularInput = document.getElementById("celularInput");
const celular = celularInput.value;

const nombreTarjetaInput = document.getElementById("nombreTarjetaInput");
const nombreTarjeta = nombreTarjetaInput.value;

const apellidosTarjetaInput = document.getElementById("apellidosTarjetaInput");
const apellidosTarjeta = apellidosTarjetaInput.value;

const numeroTarjetaInput = document.getElementById("numeroTarjetaInput");
const numeroTarjeta = numeroTarjetaInput.value;

const codigoInput = document.getElementById("codigoInput");
const codigo = codigoInput.value;

const fechaValidezInput = document.getElementById("fechaValidezInput");
const fechaValidez = fechaValidezInput.value;

const institucionBancaria = document.getElementById("institucionBancaria");
const institucionBanco = institucionBancaria.value;

const medioPago = document.getElementById("medioPago");
const medioP = medioPago.value;

const direccionEnvioInput = document.getElementById("direccionEnvioInput");
const direccionEnvio = direccionEnvioInput.value;

const ciudadEnvioInput = document.getElementById("ciudadEnvioInput");
const ciudadEnvio = ciudadEnvioInput.value;

const departamentoEnvioInput = document.getElementById("departamentoEnvioInput");
const departamentoEnvio = departamentoEnvioInput.value;

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
            window.location.href = './index.html';
        }
    });

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







documentInput.oninput = () => {
    if (isNaN(documentInput.value)) {
        //si no es un numero
        documentInput.style.color = 'red';
    } else {
        //si es un numero
        documentInput.style.color = 'black';
    }
}


apellidosInput.oninput = () => {
    if (isNaN(apellidosInput.value)) {
        //si no es un numero
        apellidosInput.style.color = 'black';
    } else {
        //si es un numero
        apellidosInput.style.color = 'red';
    }
}

nombreCompletoInput.oninput = () => {
    if (isNaN(nombreCompletoInput.value)) {
        nombreCompletoInput.style.color = 'black';
    } else {
        nombreCompletoInput.style.color = 'red';
    }
}

telefonoInput.oninput = () => {
    if (isNaN(telefonoInput.value)) {
        //si no es un numero
        telefonoInput.style.color = 'red';
    } else {
        //si es un numero
        telefonoInput.style.color = 'black';
    }
}


celularInput.oninput = () => {
    if (isNaN(celularInput.value)) {
        //si no es un numero
        celularInput.style.color = 'red';
    } else {
        //si es un numero
        celularInput.style.color = 'black';
    }
}


nombreTarjetaInput.oninput = () => {
    if (isNaN(nombreTarjetaInput.value)) {
        nombreTarjetaInput.style.color = 'black';
    } else {
        nombreTarjetaInput.style.color = 'red';
    }
}

apellidosTarjetaInput.oninput = () => {
    if (isNaN(apellidosTarjetaInput.value)) {
        apellidosTarjetaInput.style.color = 'black';
    } else {
        apellidosTarjetaInput.style.color = 'red';
    }
}

numeroTarjetaInput.oninput = () => {
    if (isNaN(numeroTarjetaInput.value)) {
        numeroTarjetaInput.style.color = 'red';
    } else {
        numeroTarjetaInput.style.color = 'black';
    }
}

codigoInput.oninput = () => {
    if (isNaN(codigoInput.value)) {
        codigoInput.style.color = 'red';
    } else {
        codigoInput.style.color = 'black';
    }
}


direccionEnvioInput.oninput = () => {
    if (isNaN(direccionEnvioInput.value)) {
        direccionEnvioInput.style.color = 'black';
    } else {
        direccionEnvioInput.style.color = 'red';
    }
}

ciudadEnvioInput.oninput = () => {
    if (isNaN(ciudadEnvioInput.value)) {
        ciudadEnvioInput.style.color = 'black';
    } else {
        ciudadEnvioInput.style.color = 'red';
    }
}


departamentoEnvioInput.oninput = () => {
    if (isNaN(departamentoEnvioInput.value)) {
        departamentoEnvioInput.style.color = 'black';
    } else {
        departamentoEnvioInput.style.color = 'red';
    }
}

codigoPostalInput.oninput = () => {
    if (isNaN(codigoPostalInput.value)) {
        codigoPostalInput.style.color = 'red';
    } else {
        codigoPostalInput.style.color = 'black';
    }
}

