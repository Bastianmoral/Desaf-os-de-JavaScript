# Desafío: Palíndromo
Un palíndromo es una palabra, frase, número u otra secuencia de caracteres que se lee igual hacia atrás o hacia adelante. Un ejemplo de palíndromo es "madam".

## Instrucciones

Escribe una función llamada `isPalindrome` que tome una cadena de texto y devuelva  `true` si la cadena es un palíndromo y  `false` si no lo es.
### Firma de la Función

```js
/**
 * Devuelve true si la cadena es un palíndromo.
 * @param {string} str - La cadena a verificar.
 * @returns {boolean} - True si la cadena es un palíndromo, false en caso contrario.
 */
function isPalindrome(str: string): boolean;
```

### Ejemplos

```JS
isPalindrome('madam') // true
isPalindrome('racecar') // true
isPalindrome('hello') // false
isPalindrome('') // true
```

### Restricciones

- La cadena de entrada solo contendrá letras minúsculas y espacios.
- La función debe ignorar los espacios al verificar si la cadena es un palíndromo.

### Sugerencias

- Puedes resolver esto de manera similar al desafío de invertir una cadena con algunos pasos adicionales.
- Recuerda, quieres eliminar cualquier carácter no alfanumérico de la cadena antes de compararla con la cadena invertida. Hay varias formas de hacer esto, pero una forma es usar el método  `replace` con una expresión regular`/[^a-z0-9]/g`. 
- 
## Soluciones

<details>
  <summary>Haz Clic Para la Solución 1</summary>

Usar `replace`con una expresión regular es la forma más fácil de resolver este desafío.

```js
function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = formattedStr.split('').reverse().join('');
  return formattedStr === reversedStr;
}
```

### Explicación

- Convierte la cadena de entrada a minúsculas.
- Usa el método `replace` con una expresión regular para eliminar cualquier carácter no alfanumérico de la cadena. De esta manera, podemos comparar la cadena sin preocuparnos por espacios o puntuación, como 'racecar' y 'race car'.
- Almacena el resultado en una variable llamada `formattedStr`.
- Invierte la cadena, igual que hicimos en el desafío anterior.
- Compara la cadena original con la cadena invertida y devuelve el resultado. Si es un palíndromo, las dos cadenas serán iguales, por lo que devolvemos `true`. Si no es un palíndromo, las dos cadenas no serán iguales, por lo que devolvemos `false`.

</details>

<details>
  <summary>Haz Clic Para la Solución 2</summary>

Si no quieres usar una expresión regular para eliminar los caracteres no alfanuméricos, hay varias formas de hacerlo. Vamos a crear algunas funciones auxiliares para facilitarlo.

```js
function isPalindrome(str) {
  const formattedStr = removeNonAlphanumeric(str.toLowerCase());
  const reversedStr = reverseString(formattedStr);
  return formattedStr === reversedStr;
}

function removeNonAlphanumeric(str) {
  let formattedStr = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }
  return formattedStr;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // Numbers 0-9
    (code >= 97 && code <= 122) // Lowercase letters a-z
  );
}

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
```

### Explicación

Esta solución es un poco más compleja.


- Crea una función auxiliar llamada `removeNonAlphanumeric` que toma una cadena y devuelve una nueva cadena con todos los caracteres no alfanuméricos eliminados. Hacemos esto recorriendo la cadena y comprobando si cada carácter es alfanumérico con otra función auxiliar llamada  `isAlphaNumeric`.
- Crea una función auxiliar llamada  `removeNonAlphanumeric` que toma una cadena y devuelve una nueva cadena con todos los caracteres no alfanuméricos eliminados. Hacemos esto recorriendo la cadena y comprobando si cada carácter es alfanumérico con otra función auxiliar llamada `isAlphaNumeric`.
- En la función `isAlphaNumeric` , usamos el método `charCodeAt` para obtener el código de carácter del carácter. Luego verificamos si el código de carácter está entre 48 y 57, que es el rango para los números 0-9, o si está entre 97 y 122, que es el rango para las letras minúsculas a-z. Si es así, devolvemos `true`. Si no es así, devolvemos `false`.
- Una vez que tenemos una cadena solo con caracteres alfanuméricos, podemos invertirla y compararla con la cadena original para ver si es un palíndromo.

</details>

### Casos de Prueba

```js
test('Verificando cadenas palíndromas', () => {
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('Hello')).toBe(false);
  expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
  expect(isPalindrome('12321')).toBe(true);
});
```