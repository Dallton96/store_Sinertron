const misDatosFisicos = {
  nombre: "Pablo Velez",
  edad: 48,
  dirección: {
    calle: "Bartolomé Herrera",
    number_streed: "555",
    city: "Lince",
  },
  altura: 1.54,
  peso: 97,
  hobby: "Diseño mecánico",
};

function impresion(texto) {
  if (texto != "texto1" && texto != "texto2" && texto != "texto4") {
    texto = "texto3";
  }

  var contenidoPerfil = `
    ${misDatosFisicos.nombre} 
    <br> Edad: ${misDatosFisicos.edad} 
    <br> Dirección: ${misDatosFisicos.dirección.calle} ${misDatosFisicos.dirección.number_streed}, ${misDatosFisicos.dirección.city} 
    <br> Altura ${misDatosFisicos.altura}m
    <br> Peso ${misDatosFisicos.peso}
    <br> Hobby: ${misDatosFisicos.hobby}`;
  const presentacion = document.getElementById(texto);
  presentacion.innerHTML = contenidoPerfil;
}

impresion(prompt("Indicar texto donde se desea imprimir: "));
