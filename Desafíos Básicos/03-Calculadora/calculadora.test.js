const calculator = require("./calculadora");

test("Calculando operaciones aritméticas usando la función calculadora.", () => {
  // Casos para el test
  const num1 = 5;
  const num2 = 7;

  // Suma
  expect(calculator(num1, num2, "+")).toBe(12);

  // Resta
  expect(calculator(num1, num2, "-")).toBe(-2);

  // Multiplicación
  expect(calculator(num1, num2, "*")).toBe(35);

  // División
  expect(calculator(num1, num2, "/")).toBeCloseTo(0.7143, 4);
});
