function titleCase(str) {
  //Dividola cadena en un arreglo de palabras y se pasan todas a minúsculas.
  const words = str.toLowerCase().split(" ");

  //Iteré a través del arreglo y le puse mayuscula a la primera letra de cada palabra
  //usando el índice 0 de la palabra y concatenándola con el resto de la palabra.
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  //Uní el arreglo de vuelta en una cadena y la devolví.
  return words.join(" ");
}

module.exports = titleCase;
