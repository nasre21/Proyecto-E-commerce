
let contenedorId = document.getElementById("contenedor-description");
let 
function mostrarProducto(){

 let consigueProducto = localStorage.getItem("productos");
 let productosObjeto = JSON.parse(consigueProducto);
 let idProducto = localStorage.getItem("productoSeleccionado");
 let productosId = JSON.parse(idProducto);

 productosObjeto.forEach((element) => {
    if(element.id === productosId){
        contenedorId.innerHTML = ` <div id="contenedor-description" class="caja border row mb-3 container mx-auto">
        <div id="img-descripcion" class="container  d-flex flex-column col-6 ">
          <img id="imagen-descripcion2" class="w-25 m-auto mt-5 mb-3" src=${element.imagen} alt="" />
  
          <div class="botones d-flex justify-content-center mb-5">
            <input type="number" class="input-number me-2" min="0" />
            <div id="btn-sidebar" class="botones btn  border">Agregar al carrito</div>
          </div>
        </div>
  
        <div id="descripcion-producto"
          class="descripcion-producto d-flex justify-content-center mb-5 mt-5  col-6 flex-wrap ">
          <h2 class="col-12">${element.nombre}</h2>
          <p class="col-12">
          ${element. descripcion}
          </p>
        </div>
      </div>`
    }
    
 });

}
mostrarProducto();
