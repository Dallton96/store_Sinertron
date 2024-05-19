import { printCards, printCards_2 } from "./printCards.js";

document.addEventListener("DOMContentLoaded", function () {
  loadNavigationAndFooter();
  loadProductDetails();
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

async function loadProductDetails() {
  try {
    const productsResponse = await fetch("scripts/products.json");
    if (!productsResponse.ok) {
      throw new Error("Failed to fetch product details");
    }
    const products = await productsResponse.json();
    renderProductDetails(products);
  } catch (error) {
    console.error("Error loading products:", error);
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

function renderProductDetails(data_p) {
  const products = data_p.products;
  const query = location.search;
  const params = new URLSearchParams(query);
  const identifier = params.get("id");
  var product_detail = 0;
  var precio = 0;
  var compras = [];

  for (var i = 0; i < products.length; i++) {
    if (products[i].id == identifier) {
      product_detail = products[i];
      precio = products[i].price;
    }
  }
  var detailsTemplate = `
    <div class="columns-container">
        <div class="product-images-block">
        ${product_detail.images
          .map(
            (each) =>
              `<div class="thumbnail-container"> <img src="${each}" alt="${product_detail.id}" /></div>`
          )
          .join("")}
            <img class="main-image" src="${product_detail.images[0]}" alt="${
    product_detail.id
  }" />
          </div>
          <div class="product-description-block">
            <h1 class="titulo">${product_detail.title}</h1>
            <form class="selector">
              <fieldset>
                <label class="label" for="color">Color</label>
                <select type="text" placeholder="Indica color de la Impresión">
                ${product_detail.colors
                  .map((each) => `<option value=${each}>${each}</option>`)
                  .join("")}
                </select>
              </fieldset>
            </form>
            <div class="descripction">
              <h1>Mini CNC para Escritorio V3.1</h1>
              <p>
              ${product_detail.description}
              </p>
            </div>
          </div>
          <div class="product-checkout-block">
            <div class="checkout-container">
              <span class="checkout-total-label">Total:</span>
              <h2 class="checkout-total-price">$ ${product_detail.price}</h2>
              <p class="checkout-description">
                Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                50 haciendo la solicitud en AFIP.
              </p>
              <ul class="checkout-policy-list">
                <li>
                  <span class="policy-icon"
                    ><img src="../assets/truck.png" alt="Truck"
                  /></span>
                  <span class="policy-desc">
                    Agrega el producto al carrito para conocer los costos de
                    envío
                  </span>
                </li>
                <li>
                  <span class="policy-icon"
                    ><img src="../assets/plane.png" alt="Plane"
                  /></span>
                  <span class="policy-desc">
                    Recibí aproximadamente entre 10 y 15 días hábiles,
                    seleccionando envío normal
                  </span>
                </li>
              </ul>
              <div class="checkout-process">
                <div class="top">
                  <input type="number" value="1" min="1" />
                  <button class="btn-primary">Comprar</button>
                </div>
                <div class="bottom">
                  <button class="btn-outline">Añadir al Carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>

    `;
  const detailsSelector = document.querySelector("#vista_producto");
  detailsSelector.innerHTML = detailsTemplate;

  function changeMini(event) {
    const selectedSrc = event.target.src;
    const bigSelector = document.querySelector(".main-image");
    bigSelector.src = selectedSrc;
  }

  function changeSubtotal() {
    var cantidad = document.querySelector(".top input").value;
    const total_new = document.querySelector(".checkout-total-price");
    total_new.textContent = "$ " + Number(cantidad) * precio;
  }

  var eventClick = document.querySelectorAll(".thumbnail-container");
  eventClick.forEach((element) => {
    element.addEventListener("click", (event) => changeMini(event));
  });

  var cantidadClick = document.querySelector(".top input");
  cantidadClick.addEventListener("change", changeSubtotal);

  function saveProduct() {
    const producto_1 = {
      id: identifier,
      title: product_detail.title,
      price: product_detail.price,
      image: product_detail.images[0],
      color: document.querySelector("form fieldset select option").value,
      quantity: document.querySelector(".top input").value,
    };
    if (localStorage.getItem("carta") === null) {
      //console.log(producto);
      compras = [];
      compras.push(producto_1);
      const stringifyProduct = JSON.stringify(compras);
      localStorage.setItem("carta", stringifyProduct);
      console.log(compras);
      Swal.fire(
        "Producto agregado al carrito",
        "Tienes " + String(compras.length) + " productos",
        "success"
      );
    } else {
      compras = JSON.parse(localStorage.getItem("carta"));
      //console.log(compras);
      var n = 0;
      function compara(ident, index) {
        n = index;
        return ident.id === identifier;
      }
      var compara2 = compras.find(compara);
      //console.log(compara2);

      if (compara2 == undefined) {
        console.log("Nuevo elemento");
        compras.push(producto_1);
        const stringifyProduct = JSON.stringify(compras);
        localStorage.setItem("carta", stringifyProduct);
        Swal.fire(
          "Producto agregado al carrito",
          "Tienes " + String(compras.length) + " productos",
          "success"
        );
      } else {
        console.log("Producto repetido");
        compras[n] = producto_1;
        const stringifyProduct = JSON.stringify(compras);
        localStorage.setItem("carta", stringifyProduct);
        Swal.fire(
          "Producto existente",
          "Cantidad actualizada en el carrito",
          "error"
        );
      }
    }
  }

  var carrito = document.querySelector(".btn-outline");
  carrito.addEventListener("click", saveProduct);
  var products_sec = [];
  if (localStorage.getItem("favoritos") === null) {
    for (var i = 0; i < 3; i++) {
      products_sec[i] = products[i];
    }
  } else {
    var favoritos_saved = JSON.parse(localStorage.getItem("favoritos"));
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < products.length; j++) {
        if (favoritos_saved[i].id == products[j].id) {
          products_sec[i] = products[j];
        }
      }
    }
  }
  console.log(products_sec);
  printCards(products_sec, "products");
}
