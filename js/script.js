console.log("script.js loaded");
let endpoint = "https://api.apilayer.net/weatherstack/current?access_key=b694faef17bebffa9b1029c79ec6ebed&query=New%20York&units=f";

// Selects div that will hold weather info
const weatherContainer = document.querySelector('#weather-container');
// Selects button that will request weather info
const button = document.querySelector('#weather-button');

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
    // Removes the button to avoid excessive API calls
    button.classList.add('d-none');
});


// Selects breakfast, lunch, and dinner buttons
const breakfast = document.querySelector("#breakfast");
const lunch = document.querySelector("#lunch");
const dinner = document.querySelector("#dinner");
// Selects div that holds the ul with cafeteria hours
const caf_hours = document.querySelector("#hour-info");

breakfast.addEventListener("click", function () {
    lunch.classList.remove('clicked-button');
    dinner.classList.remove('clicked-button');
    breakfast.classList.add('clicked-button');
    caf_hours.innerHTML = `
        <ul class="text-start">
            <li>Monday - Friday | 6 AM - 9 AM</li>
            <li>Saturday & Sunday | 7 AM - 10 PM</li>
        </ul>
    `;
});

lunch.addEventListener("click", function () {
    breakfast.classList.remove('clicked-button');
    dinner.classList.remove('clicked-button');
    lunch.classList.add('clicked-button');
    caf_hours.innerHTML = `
        <ul class="text-start">
            <li>Monday - Friday | 11 AM - 2 PM</li>
            <li>Saturday & Sunday | 12 AM - 3 PM</li>
        </ul>
    `;
});

dinner.addEventListener("click", function () {
    breakfast.classList.remove('clicked-button');
    lunch.classList.remove('clicked-button');
    dinner.classList.add('clicked-button');
    caf_hours.innerHTML = `
        <ul class="text-start">
            <li>Monday - Friday | 4 PM - 7 PM</li>
            <li>Saturday & Sunday | 5 PM - 8 PM</li>
        </ul>
    `;
});


assignments = document.querySelectorAll('.assignments');
classes = document.querySelector('#tempbutton');

classes.addEventListener("click", function () {
    console.log("text");
});