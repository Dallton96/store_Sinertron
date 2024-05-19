var user = false;
if (localStorage.getItem("usuario") === null) {
  const stringifyProduct = JSON.stringify(user);
  localStorage.setItem("usuario", stringifyProduct);
} else {
  user = JSON.parse(localStorage.getItem("usuario"));
}

var user_button = document.querySelector("#usuario");
var carrito = document.querySelector("#carrito");
var user_login = document.querySelector("#user_in");

user_button.addEventListener("click", cambiaEstado);
user_login.addEventListener("click", cambiaEstado);

function cambiaEstado() {
  user = !user;
  const stringifyProduct = JSON.stringify(user);
  localStorage.setItem("usuario", stringifyProduct);

  if (user) {
    user_button.classList.add("hidden");
    carrito.classList.remove("hidden");
    user_login.classList.remove("hidden");
  } else {
    user_button.classList.remove("hidden");
    carrito.classList.add("hidden");
    user_login.classList.add("hidden");
  }
}
