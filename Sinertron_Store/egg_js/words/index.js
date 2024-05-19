const frase = prompt("Ingrese una palabra o frase");
const fraseMinuscula = frase.toLowerCase();
const fraseMayuscula = frase.toUpperCase();
const cantidad = frase.length;
const Min_May = fraseMinuscula + " " +fraseMayuscula;
const mensaje_cant = "El mensaje " + frase + " contiene " + String(cantidad) + " caracteres";
alert (Min_May);
alert(mensaje_cant);