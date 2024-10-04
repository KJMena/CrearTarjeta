// Selección de elementos
var seleccion = document.getElementById("seleccion");
var colorf = document.getElementById("colorf");
var nombreInput = document.getElementById("nombreInput");
var mensajeInput = document.getElementById("mensajeInput");
var colorTexto = document.getElementById("colorTexto");
var tarjeta = document.getElementById("tarjeta");
var nombre = document.getElementById("nombre");
var arriba = document.getElementById("arriba");
var mensaje = document.getElementById("mensaje");
var img = document.getElementById("img");
var mostrar = document.getElementById("mostrar");

// Imágenes dinámicas
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");

// Variables para almacenamiento
let imgSeleccionada = "";

// Objeto que contiene las rutas de las imágenes por categoría
var imagenesPorCategoria = {
    halloween: ["img/Halloween1.jpeg", "img/Halloween2.jpeg", "img/Halloween3.jpeg"],
    navidad: ["img/Navidad1.jpeg", "img/Navidad2.jpeg", "img/Navidad3.jpeg"],
    cumpleanos: ["img/Cumple1.jpeg", "img/Cumple2.jpeg", "img/Cumple3.jpeg"]
};
// Función para cambiar las imágenes según la categoría seleccionada
seleccion.addEventListener("change", () => {
    var categoria = seleccion.value;

    if (categoria in imagenesPorCategoria) {
        // Cambiar las imágenes
        img1.src = imagenesPorCategoria[categoria][0];
        img2.src = imagenesPorCategoria[categoria][1];
        img3.src = imagenesPorCategoria[categoria][2];
    } else {
        // Si no hay categoría seleccionada, poner imágenes vacías o predeterminadas
        img1.src = "";
        img2.src = "";
        img3.src = "";
    }
});

img1.addEventListener("click", () => {
    imgSeleccionada = img1.src;
    img.src = imgSeleccionada;
});

img2.addEventListener("click", () => {
    imgSeleccionada = img2.src;
    img.src = imgSeleccionada;
});

img3.addEventListener("click", () => {
    imgSeleccionada = img3.src;
    img.src = imgSeleccionada;
});

colorf.addEventListener("change", function() {
    tarjeta.style.backgroundColor = colorf.value;
});

mostrar.addEventListener("click", function() {
    nombre.innerHTML = nombreInput.value;
    nombre.style.color = colorTexto.value;

    mensaje.innerHTML = mensajeInput.value;

    switch (seleccion.value) {
        case "cumpleanos":
            arriba.innerHTML = "¡Feliz Cumpleaños!";
            break;
        case "navidad":
            arriba.innerHTML = "¡Feliz Navidad!";
            break;
        case "halloween":
            arriba.innerHTML = "¡Feliz Halloween!";
            break;
        default:
            arriba.innerHTML = "";
            break;
    }
});