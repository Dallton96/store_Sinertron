class Calculator {
  constructor(Num1, Num2) {
    this.Num1 = Num1;
    this.Num2 = Num2;
  }
  get 1() {
    return this.Num1 + this.Num2;
  }
  get 2() {
    return this.Num1 - this.Num2;
  }
  get 3() {
    return this.Num1 * this.Num2;
  }
  get 4() {
    return this.Num1 / this.Num2;
  }
  get 5() {
    return Math.pow(this.Num1, this.Num2);
  }
  get 6() {
    return Math.sqrt(this.Num1);
  }
  get 7() {
    return Math.cbrt(this.Num1);
  }
}
var selection = 0;
var N1 = 0;
var N2 = 0;

do {
  do {
    var selection = Number(
      prompt(
        "Indicar operación a realizar: 1.Suma 2.Resta 3.Multiplicación 4.División 5.Potencia 6.Raiz Cuadra 7.Raiz Cúbica"
      )
    );
  } while (Number.isInteger(selection) == false);
  if (selection < 1 || selection > 7) {
    alert("Por favor indicar un número entre el rango 1 - 7: ");
  }
} while (selection > 7 || selection < 1);

switch (selection) {
  case 1:
    do {
      N1 = Number(prompt("Indique primer número: "));
    } while (Number.isInteger(N1) == false);
    do {
      N2 = Number(prompt("Indique segundo número: "));
    } while (Number.isInteger(N2) == false);
    break;
  case 2:
    do {
      N1 = Number(prompt("Indique primer número: "));
    } while (Number.isInteger(N1) == false);
    do {
      N2 = Number(prompt("Indique segundo número: "));
    } while (Number.isInteger(N2) == false);
    break;
  case 3:
    do {
      N1 = Number(prompt("Indique primer factor: "));
    } while (Number.isInteger(N1) == false);
    do {
      N2 = Number(prompt("Indique segundo factor: "));
    } while (Number.isInteger(N2) == false);
    break;
  case 4:
    do {
      N1 = Number(prompt("Indique dividendo: "));
    } while (Number.isInteger(N1) == false);
    do {
      N2 = Number(prompt("Indique divisor: "));
    } while (Number.isInteger(N2) == false);
    break;
  case 5:
    do {
      N1 = Number(prompt("Indicar base: "));
    } while (Number.isInteger(N1) == false);
    do {
      N2 = Number(prompt("Indicar exponente: "));
    } while (Number.isInteger(N2) == false);
    break;
  case 6:
    do {
      N1 = Number(prompt("Indicar radicando: "));
    } while (Number.isInteger(N1) == false);
    break;
  case 7:
    do {
      N1 = Number(prompt("Indicar radicando: "));
    } while (Number.isInteger(N1) == false);
    break;
}

const operation = new Calculator(N1, N2);
var oper = String(selection);
alert("El resultado es: " + operation[oper]);
