# Desafío: CContar Ocurrencias

## Instrucciones
Escribe una función llamada `countOccurrences()` que reciba una cadena y un carácter, y devuelve el número de ocurrencias de ese carácter en la cadena.

### Firma de la Función

```js
/**
 * Devuelve el número de ocurrencias de un carácter en una cadena.
 * @param {string} str - La cadena a buscar.
 * @param {string} char - El carácter a buscar.
 * @returns {number} - El número de ocurrencias del carácter en la cadena.
 */
function countOccurrences(str: string, char: string): number;
```

### Ejemplos

```JS
countOccurrences('hello', 'l'); // 2
countOccurrences('hello', 'z'); // 0
```

### Restricciones
- Los caracteres en minúsculas y mayúsculas se consideran diferentes. Si deseas, puedes hacer que la función no distinga entre mayúsculas y minúsculas.
- 
### Consejos

- Puedes recorrer una cadena de la misma manera que recorres un arreglo.
- Puedes usar el operador ++ para incrementar una variable.
- Podrías tomar otro enfoque y usar el método split() para dividir la cadena en un arreglo de subcadenas basadas en el carácter dado.

## Soluciones

<details>
  <summary>Haz clic para ver la Solución 1</summary>

**Usando un switch:**
```JS
function countOccurrences(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

// Versión que no distingue mayúsculas y minúsculas
// function countOccurrences(str, char) {
//   const lowerStr = str.toLowerCase();
//   const lowerChar = char.toLowerCase();

//   let count = 0;

//   for (let i = 0; i < lowerStr.length; i++) {
//     if (lowerStr[i] === lowerChar) {
//       count++;
//     }
//   }

//   return count;
// }
```

### Explicación

- Inicializa una variable count a 0.
- Itera a través de la cadena y verifica si el carácter actual es igual al carácter que estamos buscando. Si es así, incrementamos la variable count.
- Después del bucle, devolvemos la variable count.
- Para hacer la función que no distingue entre mayúsculas y minúsculas, podemos convertir la cadena y el carácter a minúsculas antes de iterar a través de la cadena.

</details>

<details>
  <summary>Haz clic para ver la Solución 2</summary>

**Usando una declaración if:**
```JS
const countOccurrences = (str, char) => str.split(char).length - 1;
```

### Explicación

- Utiliza el método split de la cadena para dividirla en un arreglo de subcadenas basadas en el carácter dado.
- Dado que dividir la cadena elimina el carácter, el arreglo resultante tendrá un elemento menos que el número de ocurrencias del carácter
- Por lo tanto, simplemente podemos restar 1 de la longitud del arreglo para obtener el conteo de ocurrencias.

</details>

### Casos de Prueba

```JS
test('Contar Ocurrencias de un Carácter', () => {
  expect(countOccurrences('hello', 'l')).toBe(2);
  expect(countOccurrences('programming', 'm')).toBe(2);
  expect(countOccurrences('banana', 'a')).toBe(3);
});
```