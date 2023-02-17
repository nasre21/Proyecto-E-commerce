const imagenes = document.querySelectorAll(".imagen-productos");
//console.log(imagenes);

//console.log(productos);

detalleProducto = [];

imagenes.forEach(elemento => {
    elemento.addEventListener("click", (event) => {
        console.log(event)
        let image = event.target.src;
        detalleProducto.push(image);
        
        let name = event.target.nextSibling.nextSibling.firstChild.nextSibling.textContent;
        detalleProducto.push(name);
        
        let description = event.target.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.textContent;
        detalleProducto.push(description);
        
        let price = event.target.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.textContent;
        detalleProducto.push(price);
         console.log(detalleProducto)
    });
});
