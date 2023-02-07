const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#imagen-perfil');
const file = document.querySelector('#picture-file');
const uploadBtn = document.querySelector('#boton-foto');



imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});

imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});


