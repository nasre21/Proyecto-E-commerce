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

file.addEventListener('change', function(){
    // this refers to the file
    const choosedFile = this.files[0];
  
  if (choosedFile) {
    const reader = new FileReader();
  
    reader.addEventListener('load', function(){
      img.setAttribute('src', reader.result);
    });
  
    reader.readAsDataURL(choosedFile);
  }
  
  });


