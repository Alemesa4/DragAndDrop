const Body = document.getElementById("Body");
const frutas = document.createElement("div");
frutas.classList.add("frutas");
const animales = document.createElement("div");
animales.classList.add("animales");
const colores = document.createElement("div");
colores.classList.add("colores");
const palabras = ["Perro", "Gato", "Periquito", "Rojo", "Platano", "Manzana", "Naranja", "Pera", "Pez", "Cerdo"];
const categoriasCorrectas = {
    "Frutas": ["Platano", "Manzana", "Naranja", "Pera"],
    "Animales": ["Perro", "Gato", "Periquito", "Pez", "Cerdo"],
    "Colores": ["Rojo"]
};
const boton = document.createElement("button");
boton.innerText = "Validar";
boton.classList.add("boton");
const titulofrutas = document.createElement("h2");
const tituloanimales = document.createElement("h2");
const titulocolores = document.createElement("h2");
const divpalabras = document.createElement("div");
divpalabras.classList.add("divpalabras");

palabras.forEach(palabra => {
    const palabraspan = document.createElement("span");
    palabraspan.innerText = palabra;
    palabraspan.classList.add("palabras");
    palabraspan.setAttribute("draggable", "true");
    divpalabras.appendChild(palabraspan);
});

titulofrutas.innerText = "Frutas";
tituloanimales.innerText = "Animales";
titulocolores.innerText = "Colores";

frutas.appendChild(titulofrutas);
animales.appendChild(tituloanimales);
colores.appendChild(titulocolores);
Body.appendChild(frutas);
Body.appendChild(animales);
Body.appendChild(colores);
Body.appendChild(boton);
Body.appendChild(divpalabras);

document.querySelectorAll(".palabras").forEach(palabra => {
    palabra.addEventListener("dragstart", dragstart);
});

[frutas, animales, colores].forEach(categoria => {
    categoria.addEventListener("dragover", dragover);
    categoria.addEventListener("drop", drop);
});

function dragstart(event) {
    event.dataTransfer.setData("text", event.target.innerText);
}

function dragover(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const palabra = Array.from(document.querySelectorAll(".palabras"))
        .find(el => el.innerText === data);
    if (palabra) {
        event.currentTarget.appendChild(palabra);
    }
}

boton.addEventListener("click", validar);

function validar() {
    let correctas = 0;
    let total = palabras.length;

    document.querySelectorAll(".palabras").forEach(palabra => {
        palabra.style.color = "black";
    });

    [frutas, animales, colores].forEach(categoria => {
        const categoriaNombre = categoria.querySelector("h2").innerText;
        const palabrasEnCategoria = Array.from(categoria.querySelectorAll(".palabras"));
        palabrasEnCategoria.forEach(palabra => {
            if (categoriasCorrectas[categoriaNombre].includes(palabra.innerText)) {
                palabra.style.color = "green";
                correctas++;
            } else {
                palabra.style.color = "red";
            }
        });
    });

    if (correctas === total) {
        alert("¡Felicidades! Todas las palabras están clasificadas correctamente.");
    } else {
    }
}
