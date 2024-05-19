var name_id = "Pablo Velez";
var age = 39;
var correo = "pablo.velez@yofc.com";
var altura = 154;
var peso = 98;
var job = "Electronic Engineer";
var located = "Chiclayo";
var hobby = "Diseñar mecanismos";
var afp = "";

if (age > 18 && age < 55) {
  afp = "Recibe AFP";
} else {
  afp = "No recibe AFP";
}

const nombre = document.querySelector("#nombre");
nombre.textContent = "Nombre: " + name_id;
const edad = document.querySelector("#edad");
edad.textContent = "Edad: " + age;
const email = document.querySelector("#correo");
email.textContent = "Correo Electrónico: " + correo;
const altura_01 = document.querySelector("#altura");
altura_01.textContent = "Altura: " + altura;
const peso_01 = document.querySelector("#peso");
peso_01.textContent = "Peso: " + peso;
const receive_afp = document.querySelector("#afp");
receive_afp.textContent = "AFP: " + afp;

let frutas = ["papaya", "platano", "durazno"];
let [fruta1, fruta2, fruta3] = frutas;
console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
