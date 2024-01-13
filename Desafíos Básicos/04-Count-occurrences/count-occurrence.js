/* ESTA FUNCIÓN NO CUENTA SI ESTÁN EN MAYUSCULAS */
/* 
function countOcurrences(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
*/

/* ESTA VERSION CUENTA SIN IMPORTAR SI ESTÁN EN MAYUSUCULA O MINUSCULA */

/* function countOcurrences(str, char) {
  const lowerStr = str.toLowerCase();
  const lowerChar = char.toLowerCase();

  let count = 0;

  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === lowerChar) {
      count++;
    }
  }
  return count;
}
 */

const countOccurrences = (str, char) => str.split(char).length - 1;

module.exports = countOccurrences;
