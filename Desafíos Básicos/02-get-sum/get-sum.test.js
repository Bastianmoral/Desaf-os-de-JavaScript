const getSum = require("./get-sum");

test("Calculando la suma de dos números", () => {
  // Entradas para el caso de prueba
  const num1 = 5;
  const num2 = 7;

  // Llamada a la función
  const result = getSum(num1, num2);

  // Verificación de que el resultado es igual a la suma esperada
  expect(result).toBe(12);
});
