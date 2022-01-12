
const rotationPlate = document.querySelector('.rotation-plate');


const explore = document.getElementById('explore-button');
explore.addEventListener('click', function () {
    // const raje = document.getElementById('name');
    // raje.style.color = "yellow";
    rotationPlate.classList.replace("rotation-plate", "rotation-after");
})