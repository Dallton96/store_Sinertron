const hobbies = {
  enPareja: [
    "Jugar PaintBall",
    "ver Películas de terror",
    "ir al Cine",
    "comer Makis",
  ],
  conAmigos: [
    "Jugar Futboll",
    "Salir a comer",
    "Programar",
    "Estudiar",
    "Beber alcohol",
  ],
  conFamilia: [
    "Jugar Videojuegos",
    "Pelear por terrenos",
    "Picknick",
    "Cocinar",
    "Ver Películas",
  ],
};

var hobbie2_enPareja = hobbies.enPareja[2];
var hobbie4_conFamilia = hobbies.conFamilia[3];
console.log(hobbie2_enPareja);
console.log(hobbie4_conFamilia);

var templateFav_Hobbie = `Mi hobbie favorito para hacer con mi pareja es ${hobbie2_enPareja} y mi hobbie favorito
para hacer con mi familia es ${hobbie4_conFamilia}`;

const hobbies_select = document.querySelector("#hobbies-seleccionados");
hobbies_select.innerHTML = templateFav_Hobbie;

//var todos = {hobbies_01: () => (...hobbies)}
