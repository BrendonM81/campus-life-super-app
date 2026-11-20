console.log("script.js loaded");
let endpoint = "https://api.apilayer.net/weatherstack/current?access_key=b694faef17bebffa9b1029c79ec6ebed&query=New%20York&units=f";

// Selects div that will hold weather info
const weatherContainer = document.querySelector("#weather-container");
// Selects button that will request weather info
const button = document.querySelector("#weather-button");

// Code inside block only triggers when 'View Weather' button is clicked
button.addEventListener("click", async function () {
    const response = await fetch(endpoint);
    const data = await response.json();
    const dataset = [data];
    console.log(dataset);
    // Shows border around the div
    weatherContainer.classList.remove('invisdiv');
    // Adds the requested weather info into the div
    weatherContainer.innerHTML += `
        <ul class="list-unstyled">
            <li>Location: ${data.location["name"]}</li>
            <li>Temperature: ${data.current.temperature}℉</li>
            <li>Cloud cover: ${data.current.cloudcover}%</li>
            <li>Humidity: ${data.current.humidity}%</li>
        </ul>
    `;
    // Removes the button
    button.classList.add('d-none');
})