import { perimetro } from "./perimeter.js";
import { area } from "./area.js";

import {
  vector_rectangulo,
  rectangulo_1,
  rectangulo_2,
  rectangulo_3,
} from "./rectangleData.js";

console.log(perimetro(rectangulo_1.altura, rectangulo_1.ancho));
console.log(area(rectangulo_2.altura, rectangulo_2.ancho));

function crear_fila(r1, altura, ancho, perimetro, area) {
  var template = `<tr><td> ${r1} </td><td> ${altura} </td><td> ${ancho} </td><td> ${perimetro} </td><td> ${area} </td></tr>`;
  return template;
}

var texto_to_inner =
  "<tr><td>Nombre</td><td>Alto</td><td>Ancho</td><td>Perímetro</td><td>Area</td></tr>";

vector_rectangulo.forEach((element) => {
  texto_to_inner =
    texto_to_inner +
    crear_fila(
      element.nombre,
      element.altura,
      element.ancho,
      perimetro(element.altura, element.ancho),
      area(element.altura, element.ancho)
    );
});

const main = document.querySelector("main");
main.innerHTML = "<table>" + texto_to_inner + "</table>";
