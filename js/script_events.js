console.log("script.js loaded");

// Selects the month selector on the left of page
let november = document.querySelector('#november-m')
// Sends user to the corresponding month of events
november.addEventListener('click', function () {
    window.location.href = "#november"
})

let december = document.querySelector('#december-m')
december.addEventListener('click', function () {
    window.location.href = "#december"
})

let january = document.querySelector('#january-m')
january.addEventListener('click', function () {
    window.location.href = "#january"
})

let february = document.querySelector('#february-m')
february.addEventListener('click', function () {
    window.location.href = "#february"
})

let march = document.querySelector('#march-m')
march.addEventListener('click', function () {
    window.location.href = "#march"
})

let april = document.querySelector('#april-m')
april.addEventListener('click', function () {
    window.location.href = "#april"
})