export function CreateCard(product) {
  return `
      <article class="product-card">
      <a href="/details.html?id=${product.id}">
         <img class="product-imagen" src="${product.images[0]}" alt="${product.id}">
         <div class="info">
            <span class="titulo_articulo">${product.title}</span>
            <span class="descripcion_articulo">${product.description}</span>
            <div class="bloque_precio">
                    <span class="precio_actual">$${product.price}</span>
                    <span class="descuento">${product.onsale}</span>
                  </div>
                  <div class="tax_policy">Incluye IGV</div>
                </div>
              </a>
            </article>
   `;
}

export function CreateCard_2(product) {
  return `
      <article class="product-card">
      <a href="/details.html?id=${product.id}">
         <img class="product-imagen" src="${product.image}" alt="${product.id}">
         <div class="info">
            <span class="titulo_articulo">${product.title}</span>
            <span class="descripcion_articulo">${product.description}</span>
            <div class="bloque_precio">
                    <span class="precio_actual">$${product.price}</span>
                    <span class="descuento">${product.onsale}</span>
                  </div>
                  <div class="tax_policy">Incluye IGV</div>
                </div>
              </a>
            </article>
   `;
}
