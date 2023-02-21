const cerrarSesion = document.getElementById("cerrar");

cerrarSesion.addEventListener("click", ()=>{
    
         //sessionStorage.getItem('usuarioLogeado');
        sessionStorage.clear();
        window.location.href ="login-page.html";

    
});
