const checkOut = document.querySelector("#carrito-accion-comprar");
const contenedorcheck = document.querySelector(".container-resumen");

let productosEnCarrito = localStorage.getItem("productosEnCarrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

productosEnCarrito.forEach(producto => {

  const check = document.createElement("div");

  check.classList.add("card", "mb-3");

  check.innerHTML = 
  `
    <div class="row g-0" id="card-mobile">
        <div class="col-sm-1 col-md-4 ">
            <img src="${producto.imagen}" class="img-fluid img-card rounded-start" alt="camiseta amarilla para perro" id="img-articulo">
        </div>
        <div class="col-sm-1 col-md-6" id="card-body">
            <div class="card-body">
                <h5 class="card-title">Camiseta perro</h5>
                 <p class="card-text">Camiseta amarilla para perro pequeño.</p>
            </div>
        </div>
         <div class="col-sm-12 col-md-2 card-body">
            <p class="card-text">19.95 €</p>
        </div>
        </div>
        <div class="total-pago">       
        </div>
    </div>
  `
 contenedorcheck.appendChild(check);
});
//checkbox

const button = document.querySelector("#btn");
const check = document.querySelector("#checkbox");

check.addEventListener("change", ()=>{
if (check.checked== false) {
    button.disabled= true; 
}else{
    button.disabled=false;
}
    
})

