// COSAS DEL DOM

const botonanchomas  = document.querySelector(".anchomas");
const botonanchomenos  = document.querySelector(".anchomenos");
const botonaltomas  = document.querySelector(".altomas");
const botonaltomenos  = document.querySelector(".altomenos");
const rectangulo = document.querySelector(".rectangulo");

const ancho  = document.querySelector(".ancho");
const alto  = document.querySelector(".alto");

botonanchomas.addEventListener('click', () => {
    let valorancho = Number(ancho.textContent);
    let valoralto = Number(alto.textContent);
    //console.log(valorancho)
    valorancho ++;
    //console.log(valorancho)
    ancho.textContent = valorancho;
    rectangulo.style.width = valorancho + "px";
    rectangulo.textContent = valoralto*valorancho;
});
botonanchomenos.addEventListener('click', () => {
    let valorancho = Number(ancho.textContent);
    let valoralto = Number(alto.textContent);
    //console.log(valorancho)
    valorancho --;
    //console.log(valorancho)
    ancho.textContent = valorancho;
    rectangulo.style.width = valorancho + "px";
    rectangulo.textContent = valoralto*valorancho;
});
botonaltomas.addEventListener('click', () => {
    let valoralto = Number(alto.textContent);
    let valorancho = Number(ancho.textContent);
    //console.log(valorancho)
    valoralto ++;
    //console.log(valorancho)
    alto.textContent = valoralto;
    rectangulo.style.height = valoralto + "px";
    rectangulo.textContent = valoralto*valorancho;
});
botonaltomenos.addEventListener('click', () => {
    let valoralto = Number(alto.textContent);
    let valorancho = Number(ancho.textContent);
    //console.log(valorancho)
    valoralto --;
    //console.log(valorancho)
    alto.textContent = valoralto;
    rectangulo.style.height = valoralto + "px";
    rectangulo.textContent = valoralto*valorancho;
});
