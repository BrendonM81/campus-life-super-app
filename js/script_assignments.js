console.log("script.js loaded");

// Selects all divs with '.class-div' class
let classes = document.querySelectorAll('.class-div');
// forEach used so EventListener can be applied to multiple elements
classes.forEach((item) => {
    // Selects the '.assignments' div in the clicked class
    let assignment = item.querySelector('.assignments');
    // When clicked, toggles show/hide
    item.addEventListener('click', () => {
        assignment.classList.toggle('d-none');
    })
});