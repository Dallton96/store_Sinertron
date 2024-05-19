function palindrome(Cadena1) {
  var Cad_dividida = Cadena1.split("", Cadena1.length);
  var reversed = Cad_dividida.reverse();
  var Cad_invertida = reversed.join("");
  if (Cadena1 == Cad_invertida) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("Hola mundo"));
console.log(palindrome("anitalavalatina"));
console.log(palindrome("12321"));
