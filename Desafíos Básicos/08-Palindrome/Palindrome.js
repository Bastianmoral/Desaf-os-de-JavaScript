function palindrome(str) {
  //Convierte la cadena de entrada a minúsculas.
  //Usa el método `replace` con una expresión regular para eliminar cualquier carácter no
  //alfanumérico de la cadena. De esta manera, podemos comparar la cadena sin preocuparnos por espacios
  //o puntuación, como 'racecar' y 'race car'.
  //Almacena el resultado en una variable llamada `formattedStr`.
  const formatedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  //Invierte la cadena, igual que hicimos en el desafío anterior.
  const reversedStr = formatedString.reverse("").split().join("");

  //Compara la cadena original con la cadena invertida y devuelve el resultado.
  //Si es un palíndromo, las dos cadenas serán iguales, por lo que devolvemos `true`.
  //Si no es un palíndromo, las dos cadenas no serán iguales, por lo que devolvemos `false`.
  return formatedString === reversedStr;
}

models.exports = palindrome;
