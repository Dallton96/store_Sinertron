function ask_numbers() {
  const n1 = prompt("Ingresar un número: ");
  const n2 = prompt("Ingresar otro número: ");
  division(n1, n2, mensaje_error);
}
function division(n1, n2, callback) {
  if (isNaN(n1) || isNaN(n2)) {
    callback("Ambos números ingresados deben ser numéricos");
    return;
  }
  n1 = parseFloat(n1);
  n2 = parseFloat(n2);
  if (n2 === 0) {
    callback("Imposible división entre 0");
  }
  const result = n1 / n2;
  mostrarResultado(result);
}

function mensaje_error(msn) {
  alert(msn);
}

function mostrarResultado(b) {
  const contenedor = document.getElementById("resultado");
  contenedor.innerHTML = "El resultado de la división es " + b;
}

document.addEventListener("DOMContentLoaded", ask_numbers);
