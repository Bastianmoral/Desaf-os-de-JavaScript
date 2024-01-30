/* function palindrome(str) {
  //Convierte la cadena de entrada a minúsculas.
  //Usa el método `replace` con una expresión regular para eliminar cualquier carácter no
  //alfanumérico de la cadena. De esta manera, podemos comparar la cadena sin preocuparnos por espacios
  //o puntuación, como 'racecar' y 'race car'.
  //Almacena el resultado en una variable llamada `formattedStr`.
  const formatedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  //Invierte la cadena, igual que hicimos en el desafío anterior.
  const reversedStr = formatedString.split("").reverse().join("");

  //Compara la cadena original con la cadena invertida y devuelve el resultado.
  //Si es un palíndromo, las dos cadenas serán iguales, por lo que devolvemos `true`.
  //Si no es un palíndromo, las dos cadenas no serán iguales, por lo que devolvemos `false`.
  return formatedString === reversedStr;
} */

function palindrome(str) {
  // Remuevo todos los valores que sean no alfa numérico y se pasa a minúscula
  const formattedStr = removeNonAlphanumeric(str.toLowerCase());

  // Damos vuelta el string
  const reversedStr = reverseString(formattedStr);

  // Return whether the formatted string is equal to the reversed string
  return formattedStr === reversedStr;
}

// Helper functions
function removeNonAlphanumeric(str) {
  // Declare a variable to store the formatted string
  let formattedStr = "";
  // Loop through the string
  for (let i = 0; i < str.length; i++) {
    // If the current character is alphanumeric, add it to the formatted string
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }
  return formattedStr;
}

function isAlphaNumeric(char) {
  // Get the character code
  const code = char.charCodeAt(0);
  // Return whether the character is alphanumeric
  return (
    (code >= 48 && code <= 57) || // Numbers 0-9
    (code >= 97 && code <= 122) // Lowercase letters a-z
  );
}

function reverseString(str) {
  // Declare a variable to store the reversed string
  let reversed = "";
  // Loop through the string backwards
  for (let i = str.length - 1; i >= 0; i--) {
    // Add each character to the reversed string
    reversed += str[i];
  }
  // Return the reversed string
  return reversed;
}

module.exports = palindrome;
