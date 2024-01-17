function findMaxNumber(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

//Una segunda manera y mucho más facil de hacer es con la función de js Math.max()

/* function findMaxNumber(arr) {
  return Math.max(...arr);
}
 */
module.exports = findMaxNumber;
