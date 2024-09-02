// Obtener todos los elementos de imágenes expandibles
const images = document.querySelectorAll(".expandable-image");
const overlay = document.getElementById("overlay");
const expandedImg = document.getElementById("expanded-img");
const closeBtn = document.getElementById("close-btn");

// Añadir evento al hacer clic en cada imagen
images.forEach(image => {
    image.onclick = function() {
        expandedImg.src = image.src; // Poner la imagen clicada en el overlay
        overlay.classList.add("active"); // Activar la animación del overlay
    };
});

// Añadir evento al hacer clic en el botón de cerrar
closeBtn.onclick = function() {
    overlay.classList.remove("active"); // Desactivar la animación del overlay
};






