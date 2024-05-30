let imagenIzquierda = document.getElementById("demoIz");
let imagenCentro = document.getElementById("demoP");
let imagenDerecha = document.getElementById("demoDr");

let dirImagen = "./img/";
let imagenes = [
    "apocalipsis_zombi.svg",
    "ciberCarrera.svg",
    "exploradores_de_calabozos.svg",
    "la_defensa_galactica.svg",
    "las_aventuras_en_el_espacio_exterior.svg",
    "alfredo.svg"
];


let indiceActual = 0;
let indiceAnt = imagenes.length - 1;
let indiceSig = 1;

let urlMap = new Map();
urlMap.set('apocalipsis_zombi.svg', 'Apocalipsis_Zombi');
urlMap.set('alfredo.svg', 'Alfredo');
urlMap.set('ciberCarrera.svg', 'CiberCarrera');
urlMap.set('exploradores_de_calabozos.svg', 'Exploradores_De_Calabazos');
urlMap.set('la_defensa_galactica.svg', 'La_Defensa_Galactica');
urlMap.set('las_aventuras_en_el_espacio_exterior.svg', 'Las_Aventuras_en_el_Espacio_Esterior');


function actualizarImagen() {
    let svg_path = './juegos/' + urlMap.get(imagenes[indiceActual]) + '/';
    
    if (window.location.protocol === "file:") {
        svg_path += 'index.html';
    }
    console.log(svg_path);

    imagenIzquierda.src = dirImagen + imagenes[indiceAnt];
    imagenCentro.src = dirImagen + imagenes[indiceActual];
    imagenDerecha.src = dirImagen + imagenes[indiceSig];

    quitarEnlace("demoP");
    agregarEnlace("demoP", svg_path);
}

actualizarImagen();

document.getElementById("siguiente").addEventListener("click", function () {
    indiceAnt = indiceActual;
    indiceActual++;
    indiceSig++;
    if (indiceSig >= imagenes.length) {
        indiceSig = 0;
    }
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    actualizarImagen();
});

document.getElementById("anterior").addEventListener("click", function () {
    indiceSig = indiceActual;
    indiceActual--;
    indiceAnt--;
    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
        indiceAnt = imagenes.length - 2;
    }
    if (indiceAnt < 0) {
        indiceAnt = imagenes.length - 1;
    }
    actualizarImagen();
});



function agregarEnlace(idImagen, url) {
    let imagen = document.getElementById(idImagen);

    let parent = imagen.parentNode;
    if (parent.tagName !== 'a') {
      let ancla = document.createElement('a');
      ancla.href = url;
      ancla.id = "imagen-link";
      parent.insertBefore(ancla, imagen);
      ancla.appendChild(imagen);
    }
  }

  function quitarEnlace(idImagen) {
    let imagen = document.getElementById(idImagen);
    let parent = imagen.parentNode;
    if (parent.tagName === 'a' && parent.id === 'imagen-link') {
      parent.parentNode.insertBefore(imagen, parent);
      parent.parentNode.removeChild(parent);
    }
  }
