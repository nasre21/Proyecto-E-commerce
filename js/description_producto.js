let contenedorId = document.getElementById("contenedor-description");

function mostrarProducto(){
 // alert("hellow")
 let consigueProducto = localStorage.getItem("listaProductos");
 let productosObjeto = JSON.parse(consigueProducto);
//  alert(productosObjeto)
 let idProducto = localStorage.getItem("nombreProducto");
 let productosId = idProducto;
//  alert(productosObjeto)
//  alert(productosId)
 productosObjeto.forEach((element) => {
  // alert(productosId)
    if(element.id === productosId){
     
        contenedorId.innerHTML = ` 
          <div id="img-descripcion" class="imagenes container  d-flex flex-column col-6 ">
          <img  id="imagen-descripcion2" class="w-25 m-auto mt-5 mb-3" src=${element.imagen} alt="" />
  
            <div class="botones d-flex justify-content-center mb-5">
              <input type="number" class="input-number me-2" min="0" />
               <div class="botones btn  border">Agregar al carrito</div>
            </div>
          </div>
  
          <div class="descripcion-producto d-flex justify-content-center mb-5 mt-5  col-6 flex-wrap ">
            <h2 class="col-12">${element.nombre}</h2>
            <p class="col-12">${element. descripcion}</p>
          </div>
        </div>`
      }
    
 });

}
mostrarProducto();
