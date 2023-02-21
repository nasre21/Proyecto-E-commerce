// PRODUCTOS

const productos = [
    //jaulas
    {
        id: "jaula-01",
        nombre: "Jaula Ferplast Planeta para pájaros",
        descripcion: "Jaula grande para canarios, pinzones, loros pequeños o grupos de pájaros. Rejillas estrechas, con 8 puertas, totalmente equipada. Dispone de un soporte para almacenamiento con cuatro ruedas.",
        imagen: "../image/pajaros/jaulas/jaula01_jaulavogelvoliere_planeta_9.jpg",
        categoria: {
            nombre: "Pajaros",
            id: "pajaro"
        },
        precio: 172.99,
        cantidad:1
    },
    //Rascadores
    {
        id: "rascador-01",
        nombre: "Cueva Trixie con bola rascadora",
        descripcion: "Elegante cueva para gatos, gran bola rascadora de yute, mucha superficie para afilar las uñas, amplio escondite, forrada con cálido vellón y felpa suave texturizada, medidas: 36 x 50 cm (Diám x Al)",
        imagen: "../image/gatos/rascadores/rascador01_trixie_hoehle_kratzball.jpg",
        categoria: {
            nombre: "Gatos",
            id: "gato"
        },
        precio: 60.99,
        cantidad:1
    },
    {
        id: "rascador-02",
        nombre: "Tabla rascador Trixie",
        descripcion: "Tabla rascador para gatos, tamaño 70 x 17 cm, de madera tapizada de sisal , contribuye al cuidado diario de las uñas,  con hierba gatera, para colgar, color gris.",
        imagen: "../image/gatos/rascadores/rascador02_trixie_kratzbrett.jpg",
        categoria: {
            nombre: "Gatos",
            id: "gato"
        },
        precio: 9.49,
        cantidad:1
    },
    {
        id: "rascador-03",
        nombre: "Rascador Flamingo Cya",
        descripcion: "Tabla rascador para gatos, tamaño 70 x 17 cm, de madera tapizada de sisal , contribuye al cuidado diario de las uñas,  con hierba gatera, para colgar, color gris.",
        imagen: "../image/gatos/rascadores/rascador03_flamingo_kratzbaum_cya1.jpg",
        categoria: {
            nombre: "Gatos",
            id: "gato"
        },
        precio: 25.99,
        cantidad:1
    },
    {
        id: "rascador-0",
        nombre: "Rascador Flamingo Gene",
        descripcion: "Árbol rascador elegante para gatos, con poste y puente rascadores de sisal estables, zona de descanso blanda con cojín de juguete adorables para cazar y atrapar, colores discretos, altura: 45 cm",
        imagen: "../image/gatos/rascadores/rascador04_flamingo_kratzbaum_gene.jpg",
        categoria: {
            nombre: "Gatos",
            id: "gato"
        },
        precio: 47.99,
        cantidad:1
    },
    //Pelotas
    {
        id: "pelota-01",
        nombre: "Pelota TIAKI con pinchos",
        imagen: "../image/perros/pelotas/pelota01_stacheliger_ball.jpg",
        descripcion: "La clásica pelota erizo para perros pequeños y grandes no debe faltar en ningún hogar canino, de material resistente (TPR) e impermeable, flotante, los pinchos sirven para masajear las encías",
        categoria: {
            nombre: "Perros",
            id: "perro"
        },
        precio: 3.99,
        cantidad:1
    },
    {
        id: "pelota-02",
        nombre: "Pelota Squeaky",
        imagen: "../image/perros/pelotas/pelota02_hundespielzeug_squeaky_ball.jpg",
        descripcion: "Pelota con silbato interno, hecha de elastómetro termoplástico, superficie granulosa, masajea las encías del perro cuando juega, apta para el agua y antideslizante, color verde.",
        categoria: {
            nombre: "Perros",
            id: "perro"
        },
        precio: 2.29,
        cantidad:1
    },
    {
        id: "pelota-03",
        nombre: "Pelota Chuckit! Ultra Ball",
        descripcion: "Pelota para perros de caucho natural. Ideal para juegos de lanzar y traer, gracias sus grandes botes y a que flota. Superficie con textura y surcos en llamativos colores. Disponible en varios tamaños",
        imagen: "../image/perros/pelotas/pelota03_chuckit_ultra_ball.jpg",
        categoria: {
            nombre: "Perros",
            id: "perro"
        },
        precio: 3.99,
        cantidad:1
    },
    {
        id: "pelota-04",
        nombre: "Trixie Junior Pelota de cuerda anudada",
        descripcion: "Duradera bola de nudos de cuerda fuerte para cachorros, resiste a los dientes puntiagudos, las fibras ayudan a la higiene dental, de 3 colores, ideal para masticar y tirar, mezcla de algodón",
        imagen: "../image/perros/pelotas/pelota04_trixie_junior_knotenball.jpg",
        categoria: {
            nombre: "Perros",
            id: "perro"
        },
        precio: 2.99,
        cantidad:1
    },
    //Pienso
    {
        id: "pienso-01",
        nombre: "Ultima Adult para gatos esterilizados - Pack mixto",
        imagen: "../image/gatos/pienso/pienso01_ultima_affinity_esterilizado_pienso_pack_mixto_4.jpg",
        descripcion: "Piensos de alta calidad para gatos esterilizados, elaborado con L-carnitina para controlar el peso y con pocas grasas. ¡Prueba ahora las diferentes variedades a un precio increíble!",
        categoria: {
            nombre: "Gatos",
            id: "gato"
        },
        precio: 31.99,
        cantidad:1
    },
    {
        id: "pienso-02",
        nombre: "Ultima Nature No Grain Esterilizados con buey",
        descripcion: "Pienso sin cereales para gatos esterilizados, receta con carne de vacuno fresca de origen francés, aderezada con verduras, equilibrada y sana, con ácidos grasos omega 3, buen sabor",
        imagen: "../image/gatos/pienso/pienso02_1_kg_64199_8410650238852_cat_4.jpg",
        categoria: {
            nombre: "Gatos",
            id: "gato"
        },
        precio: 9.99,
        cantidad:1
    },
    {
        id: "pienso-03",
        nombre: "Royal Canin Giant Starter Madre y Cachorro",
        descripcion: "¡Nueva receta! Pienso completo para perras gestantes y lactantes de razas muy grandes y para  sus cachorros, apoyo del microbioma, para reforzar las defensas, croquetas rehidratables.",
        imagen: "../image/perros/pienso/pienso01_royalcanin_giantbreed_starter_motherbabydog_hs.jpg",
        categoria: {
            nombre: "Perros",
            id: "perro"
        },
        precio: 71.55,
        cantidad:1
    },
    {
        id: "pienso-04",
        nombre: "Royal Canin Giant Adult",
        descripcion: "Pienso para perros muy grandes, de más de 45kg, a partir de 18 o 24 meses. Con ingredientes que favorecen la salud de cartílago y articulaciones. Con croquetas extragrandes y complejo de antioxidantes",
        imagen: "../image/perros/pienso/pienso02_adultgiant_mv_eretailkit.jpg",
        categoria: {
            nombre: "Perros",
            id: "perro"
        },
        precio: 56.99,
        cantidad:1
    },
    //Correas
    {
        id: "correa-01",
        nombre: "Arnés Trixie Soft con correa para gatos",
        descripcion: "Arnés suave con correa incluida, ideal para pasear gatos de interior, hecho de malla transpirable con acolchado para mayor comodidad, de ajuste continuo, correa con asa, no es posible elegir el color",
        imagen: "../image/gatos/correas/correa01_trixie_softgeschirr_leine_katze_hs_01_5.jpg",
        categoria: {
            nombre: "Gatos",
            id: "gato"
        },
        precio: 14.49,
        cantidad:1
    },
    {
        id: "correa-02",
        nombre: "Arnés Trixie para gatos",
        descripcion: "Arnés con correa para gatos, con un sistema de cierre especial. El material es de nailon suave. Medidas (cuello y pecho): 26-43 cm, incl. 120 cm de correa",
        imagen: "../image/gatos/correas/correa02_trixiekatzengeschirr_schwarz_06_2011_4.jpg",
        categoria: {
            nombre: "Gatos",
            id: "gato"
        },
        precio: 4.99,
        cantidad:1
    },
    {
        id: "correa-03",
        nombre: "Correa ajustable de cuero Heim marrón para perros",
        descripcion: "Correa multiposición remachada, regulable de 3 formas, hecha de cuero marrón suave y engrasado.",
        imagen: "../image/perros/correas/correa01_heim_fuehrleine_1.jpg",
        categoria: {
            nombre: "Perros",
            id: "perro"
        },
        precio: 16.99,
        cantidad:1
    },
    {
        id: "correa-04",
        nombre: "Correa ajustable Heim negra para perros",
        descripcion: "Correa multiposición de cuero suave y engrasado. Es de color negro y la longitud se puede regular tres veces. De fabricación alemana y hecha a mano para que cada correa sea única.",
        imagen: "../image/perros/correas/correa02_heim_soft_fl_1_1.jpg",
        categoria: {
            nombre: "Perros",
            id: "perro"
        },
        precio: 16.99,
        cantidad:1
    }
];
const listaProductos = localStorage.setItem("listaProductos", JSON.stringify(productos));

const contenedorProductos = document.querySelector("#cards-catalogo");
const contenedorOcultoProductos = document.querySelector("#cards-catalogo-oculto");
const linkCategorias = document.querySelectorAll(".link-categoria");
const tituloCatalogo = document.querySelector("#catalogo-titulo");
let botones = document.querySelectorAll(".botones");
const numerito = document.querySelector("#bubble");

//imagenes Nasser

contenedorProductos.addEventListener('click', (eventoClick)=>{
    console.log(eventoClick.target.id);
    let productoSeleccionado=eventoClick.target.id;
    let nodo= eventoClick.target.nodeName;
    //alert(nodo);
    console.log(nodo);
    if(nodo == "IMG"){

localStorage.setItem("nombreProducto", productoSeleccionado);
    window.location.assign("descripcionproducto.html?"+productoSeleccionado);
    }
    
});

//terminar aqui Nasser

function cargarProductosEnCatalogo(productosElegidos) {
    contenedorProductos.innerHTML = "";
    contenedorOcultoProductos.innerHTML = "";
    productosElegidos.forEach((producto, index) => {
        if (index < 6) {
            const div = document.createElement("div");
            div.classList.add("card", "cads-plus");
            div.innerHTML = `
            <img class="imagen-productos card-img-top" id= ${producto.id} src="${producto.imagen}" alt="${producto.nombre}" />
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text"> ${producto.descripcion}</p>
                <p class="card-text">${producto.precio} <span>€</span></p>
                <div class="container botones-car" id= ${producto.id}>
                    <button  class="botones btn border">Agregar al carrito</button>
                    <input type="number" min="0" name="contadorcarrito" class=" contadorcarrito w-25 text-center" />
                </div>
            </div>
            `;
            contenedorProductos.append(div);
        } else {
            const div = document.createElement("div");
            div.classList.add("card", "cads-plus");
            div. innerHTML = `
            <img id= ${producto.id} class="imagen-productos card-img-top" src="${producto.imagen}" alt="${producto.nombre}" />
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text"> ${producto.descripcion}</p>
                <p class="card-text">${producto.precio} <span>€</span></p>
                <div class="container botones-car" id= ${producto.id}>
                    <button class="botones btn border" ">Agregar al carrito</button>
                    <input type="number" min="0"  name="contadorcarrito" class="contadorcarrito w-25 text-center" />
                </div>
            </div>
            `;
            contenedorOcultoProductos.append(div);
        }
    })
    actualizarBotonesAgregar()
}

cargarProductosEnCatalogo(productos);

linkCategorias.forEach(link => {
    link.addEventListener("click", (e) => {
        linkCategorias.forEach(link => link.classList.remove("active"));
        e.target.classList.add("active");

        if(e.target.id != "todo") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.target.id);
            tituloCatalogo.innerText = "Productos para: " + productoCategoria.categoria.nombre;
            const productosLink = productos.filter(producto => producto.categoria.id === e.target.id);
            cargarProductosEnCatalogo(productosLink);
        } else {
            tituloCatalogo.innerText = "Catalogo completo";
            cargarProductosEnCatalogo(productos);
        }
    })
})

// trabajando en el carrito
function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".botones");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito ;

let productosEnCarritoLS = localStorage.getItem("productosEnCarrito");

if (productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
}else{
    productosEnCarrito = [];
}


function agregarAlCarrito(e){
    const idBoton = e.target.parentElement.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton) ;
        productosEnCarrito[index].cantidad += 1;;
    }else{     
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito ();
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
};

function actualizarNumerito (){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);  
}
