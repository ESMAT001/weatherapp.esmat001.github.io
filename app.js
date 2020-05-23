// const api = fetch('https://www.metaweather.com/api/location/search/?query=london');
// api.then(re => { return re.json(); }).then(data => { console.log(data) });
async function weather(city) {
    let id = await fetch(`https://www.metaweather.com/api/location/search/?query=${city}`);
    console.log(id)
    id = await id.json();
    console.log(id.length);
    if (id.length == 0) {
        document.querySelector(".msg").textContent = "sorry city not found!";
        document.querySelector(".para").textContent = "";
    } else {
        document.querySelector(".msg").textContent = "";
        id = id[0].woeid;
        let newData = await fetch(`https://www.metaweather.com/api/location/${id}/`);
        newData = await newData.json();
        let temp = newData.consolidated_weather[0].the_temp + "";
        temp = temp.slice(0, 4);
        let maxTemp = newData.consolidated_weather[0].max_temp + "";
        maxTemp = maxTemp.slice(0, 4);
        let minTemp = newData.consolidated_weather[0].min_temp + "";
        minTemp = minTemp.slice(0, 4);
        let weatherState = newData.consolidated_weather[0].weather_state_name;
        let humidity = newData.consolidated_weather[0].humidity;
        let sunrise = newData.sun_rise + "";
        let sunset = newData.sun_set + "";
        let time = newData.time + "";
        sunrise = sunrise.slice(11, 18);
        sunset = sunset.slice(11, 18);
        time = time.slice(11, 18);
        console.log(newData);

        document.querySelector(".para").innerHTML =
            `The weather info in <span>${city}</span> are:<br>
            <span>Temperature</span>: ${temp} °C <br>
           <span> weather state</span>:${weatherState}<br> 
            <span>Max temperature:</span> ${maxTemp} °C <br>
            <span>Mintemperature:</span> ${minTemp} °C<br>
            <span>Humidity:</span> ${humidity} <br>
            <span>Sunrise</span>: ${sunrise}<br>
            <span>Sunset</span>: ${sunset}<br>
            <span>Time</span>: ${time}  `;
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