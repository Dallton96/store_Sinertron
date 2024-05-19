var total_buy = 0;
var favoritos_guardar = new Array();
export { total_buy };
export function print_cart(name_local) {
  var articulos_compra = new Array();
  var canti_articulos = 0;

  if (localStorage) {
    if (
      localStorage.getItem(name_local) !== undefined &&
      localStorage.getItem(name_local)
    ) {
      articulos_compra = JSON.parse(localStorage.getItem(name_local));
      canti_articulos = articulos_compra.length;
    }
  } else {
    articulos_compra = [];
    canti_articulos = 0;
  }
  if (canti_articulos == 0) {
    const carta_selector = document.getElementById("cartproducts");
    carta_selector.innerHTML = "";
    var area_impresion_2 = document.querySelector("#cartproducts");
    const vacio = document.createElement("div");
    vacio.className = "no_products";
    vacio.textContent = "SIN PRODUCTOS SELECCIONADOS";
    area_impresion_2.appendChild(vacio);
  } else {
    for (var i = 0; i < canti_articulos; i++) {
      var area_impresion = document.querySelector("#cartproducts");
      const article = document.createElement("article");
      article.className = "art";
      area_impresion.appendChild(article);
    }

    var sub_article = document.querySelectorAll(".art");

    sub_article.forEach((element, index) => {
      const div_image = document.createElement("img");
      div_image.src = articulos_compra[index].image;
      div_image.alt = articulos_compra[index].title;
      div_image.height = "100";
      div_image.className = "sub_image";
      element.appendChild(div_image);
      const div_description = document.createElement("div");
      div_description.className = "description_art";
      element.appendChild(div_description);
      const total_price = document.createElement("div");
      total_price.className = "total_price";
      total_price.textContent =
        "PEN " +
        new Intl.NumberFormat("de-DE").format(
          articulos_compra[index].price * articulos_compra[index].quantity
        );
      element.appendChild(total_price);
    });

    var description_article = document.querySelectorAll(".description_art");
    description_article.forEach((element, index) => {
      const div_title = document.createElement("div");
      div_title.textContent = articulos_compra[index].title;
      div_title.className = "title_art";
      element.appendChild(div_title);
      const div_quantity = document.createElement("div");
      div_quantity.className = "quantity";
      div_quantity.textContent = "Quantity: ";
      element.appendChild(div_quantity);
      const price_unti = document.createElement("div");
      price_unti.textContent =
        "Unit Price: PEN " +
        new Intl.NumberFormat("de-DE").format(articulos_compra[index].price);
      price_unti.className = "price_unit";
      element.appendChild(price_unti);
      const favoritos_button = document.createElement("button");
      favoritos_button.textContent = "♥";
      favoritos_button.className = "agregar_fav";
      element.appendChild(favoritos_button);
    });

    var quantity_value = document.querySelectorAll(
      ".description_art .quantity"
    );

    quantity_value.forEach((element, index) => {
      const input_val = document.createElement("input");
      input_val.type = "number";
      input_val.value = articulos_compra[index].quantity;
      input_val.min = "1";
      element.appendChild(input_val);
    });
  }
  if (articulos_compra.length > 0) {
    articulos_compra.forEach((element) => {
      total_buy = total_buy + element.price * element.quantity;
    });
  } else {
    total_buy = 0;
  }
}

print_cart("carta");

//Inicio
var area_impresion_2 = document.querySelector("#total");
const suma_total = document.createElement("div");
suma_total.className = "suma_total";
area_impresion_2.appendChild(suma_total);

var sumaTotal = document.querySelector(".suma_total");
const resumen_suma = document.createElement("div");
resumen_suma.textContent = "RESUMEN DEL PEDIDO";
resumen_suma.className = "resumen_suma";
sumaTotal.appendChild(resumen_suma);

const valorTotal = document.createElement("div");
valorTotal.className = "valor_total";
sumaTotal.appendChild(valorTotal);

const valor_total_final = document.querySelector(".suma_total .valor_total");
var valorTotal_1 = document.createElement("div");
valorTotal_1.className = "valor_total_1";
valorTotal_1.textContent = "TOTAL";
valor_total_final.appendChild(valorTotal_1);

var valorTotal_2 = document.createElement("div");
valorTotal_2.className = "valor_total_2";
valorTotal_2.textContent = total_buy;
valor_total_final.appendChild(valorTotal_2);

const IGV = document.createElement("div");
IGV.className = "impuesto";
IGV.textContent = "Incluído IGV.";
sumaTotal.appendChild(IGV);

const button_pay = document.createElement("button");
button_pay.textContent = "COMPRAR";
button_pay.className = "button_pay";
sumaTotal.appendChild(button_pay);

//Final

var cantidadClick = document.querySelectorAll(
  ".description_art .quantity input"
);
cantidadClick.forEach((element) => {
  element.addEventListener("change", changeSubtotal);
});

function changeSubtotal() {
  var cantidad_1 = document.querySelectorAll(
    ".description_art .quantity input"
  );
  var total_new = document.querySelectorAll(".total_price");
  var total = [];
  var articulos_compra = JSON.parse(localStorage.getItem("carta"));
  cantidad_1.forEach((element, index) => {
    var sub_total = element.value * articulos_compra[index].price;
    total_new[index].textContent =
      "PEN " + new Intl.NumberFormat("de-DE").format(sub_total);
    total.push(sub_total);
  });

  var total_final = total.reduce(
    (acumulator, currentValue) => acumulator + currentValue,
    0
  );
  var total_2 = document.querySelector(".valor_total .valor_total_2");
  total_2.textContent = total_final;
  Swal.fire({
    title: "Producto actualizado",
    text: "Cantidad total del carrito: " + total_final,
    position: "top-end",
    icon: "success",
    showConfirmButton: false,
    timer: 800,
  });
}
var m = 0;
var botones_fav = document.querySelectorAll(".agregar_fav");
botones_fav.forEach((element, index) => {
  element.addEventListener("click", () => agregar_a_fav(index));
  m = m + 1;
});

function agregar_a_fav(w) {
  var articulos_compra = JSON.parse(localStorage.getItem("carta"));
  const producto_fav = {
    id: articulos_compra[w].id,
    title: articulos_compra[w].title,
    price: articulos_compra[w].price,
    image: articulos_compra[w].image,
    color: articulos_compra[w].color,
    quantity: articulos_compra[w].quantity,
  };

  if (localStorage.getItem("favoritos") === null) {
    //console.log(articulos_compra);
    favoritos_guardar = [];
    favoritos_guardar.push(producto_fav);
    const stringifyProduct = JSON.stringify(favoritos_guardar);
    localStorage.setItem("favoritos", stringifyProduct);
    console.log(favoritos_guardar);
    Swal.fire({
      iconHtml: "<p style='color:red'>♥</p>",
      title: "Agregado a tus favoritos",
      text: "Se agregó a tu lista de favoritos",
      timer: 1000,
      showConfirmButton: false,
    });
  } else {
    favoritos_guardar = [];
    favoritos_guardar = JSON.parse(localStorage.getItem("favoritos"));
    var n = 0;
    for (var i = 0; i < favoritos_guardar.length; i++) {
      if (favoritos_guardar[i].id === producto_fav.id) {
        favoritos_guardar.splice(i, 1);
        console.log("Elemento repetido");
        favoritos_guardar.unshift(producto_fav);
        const stringifyProduct = JSON.stringify(favoritos_guardar);
        localStorage.setItem("favoritos", stringifyProduct);
        n = 1;
        Swal.fire({
          iconHtml: "<p style='color:red'>♥</p>",
          title: "Producto guardado",
          text: "Se actualizó a tu lista de favoritos",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    }
    if (n == 0) {
      favoritos_guardar = [];
      favoritos_guardar = JSON.parse(localStorage.getItem("favoritos"));
      favoritos_guardar.unshift(producto_fav);
      const stringifyProduct = JSON.stringify(favoritos_guardar);
      localStorage.setItem("favoritos", stringifyProduct);
      console.log("Producto Nuevo agregado a favoritos");
      Swal.fire({
        iconHtml: "<p style='color:red'>♥</p>",
        title: "Agregado a tus favoritos",
        text: "Se agregó a tu lista de favoritos",
        timer: 1000,
        showConfirmButton: false,
      });
    }
  }
}
