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





const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_5hfblfy';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar Mensaje';
                alert('Mensaje enviado correctamente!');
            }, (err) => {
                btn.value = 'Enviar Mensaje';
                alert(JSON.stringify(err));
            });
    });


