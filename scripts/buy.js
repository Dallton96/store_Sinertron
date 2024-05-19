var button_payed = document.querySelector(".button_pay");
import { print_cart, total_buy } from "./products_carrito.js";

function fin_compra() {
  if (
    localStorage.getItem("carta") !== undefined &&
    localStorage.getItem("carta")
  ) {
    Swal.fire({
      title: "Continuar con la compra",
      text: "Confirmar la compra para continuar",
      icon: "warning",
      showCloseButton: true,
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Comprar",
      denyButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("carta");
        print_cart("carta");
      }
    });
  } else {
    alert("Por favor selecciona productos antes de comprar");
  }

  var mod_total = document.querySelector(".valor_total_2");
  mod_total.textContent = total_buy;
}

button_payed.addEventListener("click", fin_compra);
