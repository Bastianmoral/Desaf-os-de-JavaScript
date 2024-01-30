const Palindrome = require("./Palindrome");

test("Revisando por cadenas con palindromos", () => {
  expect(Palindrome("racecar")).toBe(true);
  expect(Palindrome("Hello")).toBe(false);
  expect(Palindrome("A man, a plan, a canal, Panama")).toBe(true);
  expect(Palindrome("12321")).toBe(true);
});
