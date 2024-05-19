import { printCards } from "./printCards.js";

document.addEventListener("DOMContentLoaded", function () {
  fetchOptions();
  fetchProducts();
});

function fetchOptions() {
  fetch("scripts/options.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => renderOptions(data))
    .catch((error) => console.error("Error fetching options: ", error));
}

function fetchProducts() {
  fetch("scripts/products.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => renderProducts(data))
    .catch((error) => console.error("Error fetching products:", error));
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

function renderProducts(data_p) {
  var products_2 = data_p.products;
  products_2.sort(function (a, b) {
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    return 0;
  });

  var cadena = "";
  function captureText(tecla) {
    var Codigo_tecla = tecla.code;
    const produc_busqueda = [];

    if (Codigo_tecla == "Backspace") {
      cadena = cadena.substring(0, cadena.length - 1);
      console.log(cadena);
      if (cadena.length > 0) {
        for (var i = 0; i < products_2.length; i++) {
          if (products_2[i].title.toLowerCase().includes(cadena)) {
            produc_busqueda.push(products_2[i]);
          }
        }
        console.log(produc_busqueda);
        printCards(produc_busqueda, "products");
      }
    } else if (Codigo_tecla.includes("Key")) {
      cadena = searchSelector.value;
      cadena = cadena.toLowerCase();
      if (cadena.length > 0) {
        for (var i = 0; i < products_2.length; i++) {
          if (products_2[i].title.toLowerCase().includes(cadena)) {
            produc_busqueda.push(products_2[i]);
          }
        }
        console.log(produc_busqueda);
        printCards(produc_busqueda, "products");
      }
    }
    cadena = searchSelector.value;
    if (cadena.length == 0) {
      printCards(products_2, "products");
    }
  }

  var searchSelector = document.querySelector("#buscar");
  searchSelector.addEventListener("keyup", (event) => captureText(event));

  printCards(products_2, "products");
}
