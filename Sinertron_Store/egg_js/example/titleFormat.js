function titleFormat(Cad_tex) {
  let Primera_Letra = Cad_tex.charAt(0);
  Primera_Letra = Primera_Letra.toUpperCase();
  let resto = Cad_tex.slice(1, Cad_tex.length);
  resto = resto.toLowerCase();
  let final = Primera_Letra + resto;
  return final;
}

console.log(titleFormat("esta es UNa Prueba de Potencia"));
