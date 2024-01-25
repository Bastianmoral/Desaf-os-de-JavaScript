function reverseString(str) {
  //La función split toma una cadena y la convierte en un arreglo.
  //Pasamos una cadena vacía como argumento para split para que divida la cadena en un arreglo de caracteres.
  // la finalidad de crear el arreglo es poder usar reverse y darlo vuelta  para luego hacer un join
  /* return str.split("").reverse().join(""); */

  // Crea una variable llamada reversed y le asigné una cadena vacía.
  let reversed = "";

  //Creo un bucle for que comienza en el último índice de str y decrece en 1 hasta que llega a 0.
  for (let i = str.length - 1; i >= 0; i--) {
    //Agrego el carácter en el índice actual a la variable reversed.
    reversed += str[i];
  }
  // Retorno la variable
  return reversed;
}

module.exports = reverseString;
