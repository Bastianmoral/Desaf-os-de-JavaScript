const titleCase = require("./title-case");

test("Convirtiendo cadena a título en mayúsculas", () => {
  expect(titleCase("hello world")).toBe("Hello World");
  expect(titleCase("javascript programming")).toBe("Javascript Programming");
  expect(titleCase("openai chatbot")).toBe("Openai Chatbot");
});
