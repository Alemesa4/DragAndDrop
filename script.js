const Body = document.getElementById("Body");
const frutas = document.createElement("div");
frutas.classList.add("frutas");
const animales = document.createElement("div");
animales.classList.add("animales");
const colores = document.createElement("div");
colores.classList.add("colores");
const palabras = ["Perro", "Gato", "Periquito", "Rojo", "Platano", "Manzana", "Naranja", "Pera", "Pez", "Cerdo"];
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
    palabra.addEventListener("dragend", dragend);
    frutas.addEventListener("dragover", dragover);
    frutas.addEventListener("drop", drop);
    animales.addEventListener("dragover", dragover);
    animales.addEventListener("drop", drop);
    colores.addEventListener("dragover", dragover);
    colores.addEventListener("drop", drop);
});

function dragstart(event) {
    event.dataTransfer.setData("text", event.target.innerText);
}

function dragend(event) {
    event.target.style.visibility = "hidden";
}

function dragover(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const targetDiv = event.target.closest("div");
    if (targetDiv) {
        targetDiv.appendChild(document.querySelector(`.palabras:contains(${data})`));
        document.querySelector(`.palabras:contains(${data})`).style.visibility = "";
    }
}

