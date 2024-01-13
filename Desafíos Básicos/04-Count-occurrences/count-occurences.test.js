const countOccurrences = require("./count-occurrence");

test("Contar Ocurrencias de un Carácter", () => {
  expect(countOccurrences("hello", "l")).toBe(2);
  expect(countOccurrences("programming", "m")).toBe(2);
  expect(countOccurrences("banana", "a")).toBe(3);
});
