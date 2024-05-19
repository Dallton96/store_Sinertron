function palindrome(variable) {
  var resp = Math.abs(variable);
  return resp;
}

function palindrome2(variable) {
  var resp = Math.ceil(variable);
  return resp;
}

function palindrome3(variable) {
  var resp = Math.floor(variable);
  return resp;
}

function palindrome4(variable) {
  var resp = Math.round(variable);
  return resp;
}

function palindrome5(lista) {
  var resp = Math.max(...lista);
  return resp;
}

function palindrome6(lista) {
  var resp = Math.min(...lista);
  return resp;
}

function palindrome7() {
  var resp = Math.random();
  return resp;
}

var prueba = -52;
var entero_prox = -5.54;
var vector = [15, 21, 35, 10, 8, 12, 45];

console.log("El absoluto de " + prueba + " es: " + palindrome(prueba));
console.log(
  "El entero mayor más próximo de " +
    entero_prox +
    " es: " +
    palindrome2(entero_prox)
);
console.log(
  "El entero menor más próximo de " +
    entero_prox +
    " es: " +
    palindrome3(entero_prox)
);

console.log(
  "Rendodear el número " +
    entero_prox +
    " a entero es: " +
    palindrome4(entero_prox)
);

console.log(
  "El número mayor del vector: " + vector + " es: " + palindrome5(vector)
);

console.log(
  "El número menor del vector: " + vector + " es: " + palindrome6(vector)
);

console.log("Número aleatorio entre 0 y 1: " + palindrome7());
