async function weather(city) {

    let id = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0cf03c09253cddc00b6256eba1e4c680&units=metric&lang=fa`);
    console.log(id)
    id = await id.json();
    console.log(id);
    if (id.cod == "404") {
        document.querySelector(".msg").textContent = "sorry city not found!";
        document.querySelector(".para").textContent = "";
    } else {
        document.querySelector(".msg").textContent = "";
        let temp = "";
        let maxTemp = "";
        let minTemp = "";
        let weatherState = "";
        let humidity = "";
        let sunrise = "";
        let sunset = "";
        let time = "";
        temp = id.main.temp + "";

        maxTemp = id.main.temp_max + "";
        minTemp = id.main.temp_min + "";
        // weatherState = newData.consolidated_weather[0].weather_state_name;
        humidity = id.main.humidity;
        // sunrise = newData.sun_rise + "";
        // sunset = newData.sun_set + "";
        // time = newData.time + "";
        // sunrise = sunrise.slice(11, 18);
        // sunset = sunset.slice(11, 18);
        // time = time.slice(11, 18);
        // console.log(newData);

        document.querySelector(".para").innerHTML =
            `The weather info in <span>${city}</span> are:<br>
            <span>Temperature</span>: ${temp} °C <br>
            <span>Max temperature:</span> ${maxTemp} °C <br>
            <span>Mintemperature:</span> ${minTemp} °C<br>
            <span>Humidity:</span> ${humidity} <br>`;
        //    <span> weather state</span>:${weatherState}<br> 

        //     <span>Sunrise</span>: ${sunrise}<br>
        //     <span>Sunset</span>: ${sunset}<br>
        //     <span>Time</span>: ${time}  ;
    }

}

document.querySelector(".btn").addEventListener("click", () => {
    let val = document.getElementById("text").value;
    if (val !== "") {
        weather(val);
    } else {
        document.querySelector(".para").textContent = "";
        document.querySelector(".msg").textContent = "please enter a city name!"
    }

})
document.getElementById("text").addEventListener("focus", () => {
    document.querySelector("style").innerHTML = "div::after{top:-20px; transition: all 0.5s;}"
})
document.getElementById("text").addEventListener("focusout", () => {
    if (document.getElementById("text").value == "") { document.querySelector("style").innerHTML = "div::after{top: 10px; transition: all 0.5s;}" }

});