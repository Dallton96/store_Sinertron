import { printCards, printCards_2 } from "./printCards.js";

document.addEventListener("DOMContentLoaded", function () {
  loadNavigationAndFooter();
});

async function loadNavigationAndFooter() {
  try {
    const optionsResponse = await fetch("scripts/options.json");
    if (!optionsResponse.ok) {
      throw new Error(
        "No se pudieron recuperar los datos de navegación y pie de página"
      );
    }
    const options = await optionsResponse.json();
    renderOptions(options);
  } catch (error) {
    console.error("Error al cargar productos: ", error);
  }
}


function renderOptions(datos) {
  const options = datos.options;
  const options2 = datos.options2;
  var navSelector = document.querySelector("#nav");
  const ul = document.createElement("ul");
  navSelector.appendChild(ul);

  for (var i = 0; i < options.length; i++) {
    var navSub1 = document.querySelector(".navega ul");
    const li = document.createElement("li");
    navSub1.appendChild(li);
  }

  var navSub2 = document.querySelectorAll(".navega ul li");

  navSub2.forEach((item, option) => {
    const anchor = document.createElement("a");
    anchor.className = "nav-button";
    var properties = options[option];
    anchor.textContent = properties.title;
    anchor.href = properties.linkto;
    item.appendChild(anchor);
  });

  var footerSelector = document.querySelector("#footer");
  const division = document.createElement("div");
  division.className = "columns-container";
  footerSelector.appendChild(division);

  const copyright = document.createElement("div");
  copyright.className = "copyright";
  copyright.textContent = "CURSO HTML+CSS 2024";
  footerSelector.appendChild(copyright);

  for (var i = 0; i < options2.length; i++) {
    var footer2 = document.querySelector("#footer .columns-container");
    const division2 = document.createElement("div");
    division2.className = "col";
    footer2.appendChild(division2);
  }

  var footer3 = document.querySelectorAll("#footer .columns-container .col");
  var clases = ["uno", "dos", "tres", "cuatro", "cinco"];

  footer3.forEach((element, index) => {
    const ul2 = document.createElement("ul");
    ul2.className = clases[index];
    element.appendChild(ul2);
  });

  var footer4 = document.querySelectorAll("#footer .columns-container .col ul");

  footer4.forEach((element, index) => {
    var longit = options2[index].opts;
    for (var j = 0; j < longit.length + 1; j++) {
      const li2 = document.createElement("li");
      if (j == 0) {
        li2.className = "col-main";
      } else {
        //li2.className = "";
      }
      element.appendChild(li2);
    }
  });

  for (var i = 0; i < options2.length; i++) {
    var pie4 = "#footer .columns-container .col ." + clases[i] + " li";
    //console.log(pie4);
    var footer5 = document.querySelectorAll(pie4);
    footer5.forEach((element, index) => {
      const anchor = document.createElement("a");
      if (index == 0) {
        anchor.textContent = options2[i].title;
      } else {
        anchor.textContent = options2[i].opts[index - 1];
      }
      anchor.href = "#";
      element.appendChild(anchor);
    });
  }
}
