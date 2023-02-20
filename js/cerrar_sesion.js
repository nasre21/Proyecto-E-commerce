// Cerrar session

const cerrar = document.querySelector("#cerrar");

cerrar.addEventListener("click", ()=>{
    
         //sessionStorage.getItem('usuarioLogeado');
        sessionStorage.clear();
        window.location.href ="login-page.html";

    
});
