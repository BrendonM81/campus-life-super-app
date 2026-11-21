console.log("script.js loaded");

let classes = document.querySelectorAll('.class-div');
classes.forEach((item) => {
    let assignment = item.querySelector('.assignments');
    item.addEventListener('click', () => {
        assignment.classList.toggle('d-none');
    })
});