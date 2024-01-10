/* He creado una función llamada calculadora que toma tres argumentos: num1, num2 y operador. 
Creé una variable llamada result para almacenar el resultado del cálculo. Usé una declaración switch 
para determinar qué operador se dio. Si era +, -, * o /, realicé el cálculo. 
Si el operador es cualquier otro, lanzo un error.
 */

/* function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
        throw new Error('Operadores Inválidos')
  }
  return result;
}
 */

/* He creado una función llamada calculadora que toma tres argumentos: num1, num2 y operador. 
He creado una variable llamada result para almacenar el resultado del cálculo. Usé una declaración if para determinar 
qué operador se dio. Si era +, -, * o /, realicé el cálculo. Si el operador es cualquier otro, lanzo un error. */

function calculator(num1, num2, operator) {
  let result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    throw new Error("Operador inválido");
  }
  return result;
}

module.exports = calculator;
