/* seleccionar una etiqueta del HTML */
const selector = document.getElementById("mensaje");
/* escribir dentro de esa etiqueta con JS */
selector.innerHTML = "HOLA MUNDO";
var name = prompt("Escriba su Nombre");
var mensaje = "Bienvenido " + name;
console.log(mensaje);
alert(mensaje);
