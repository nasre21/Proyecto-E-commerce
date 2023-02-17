const imagenes = document.querySelectorAll(".imagen-productos");
const productos = JSON.parse(localStorage.getItem("listaProductos")) === null? []: JSON.parse(localStorage.getItem("listaProductos"))

imagenes.forEach( imagen => {
    imagen.addEventListener("click", mostrarDetalle);
});

function mostrarDetalle() {
    
}