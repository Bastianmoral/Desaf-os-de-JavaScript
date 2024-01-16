# Desafío: Encontrar el Número Máximo

## Instrucciones
Escribe una función llamada `findMaxNumber` que tome un arreglo de números y devuelva el número más grande del arreglo.

### Firma de la Función

```js
/**
 * Devuelve el número más grande en un arreglo.
 * @param {number[]} arr - El arreglo de números.
 * @returns {number} - El número más grande en el arreglo.
 */
function findMaxNumber(arr: number[]): number;
```

### Ejemplos

```JS
findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 10
findMaxNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]); // 10
findMaxNumber([1, 2, 3, 4, 5, 10, 9, 8, 7, 6]); // 10
```


### Consejos

-Hay una manera muy fácil de hacer esto usando un método incorporado específico. Te sugeriría no hacerlo de esa manera. Intenta resolver este problema usando un bucle `for`.

## Soluciones

<details>
  <summary>Haz clic para ver la Solución 1</summary>
  Esta es la manera fácil de hacerlo. Hay un método llamado Math.max() que devolverá el número más grande en un arreglo. Esta no es la manera en la que sugeriría hacerlo, pero es bueno saber que este método existe.

**Usando un switch:**
```JS
function findMaxNumber(arr) {
  return Math.max(...arr);
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

- No se necesita demasiada explicación aquí.

</details>

<details>
  <summary>Haz clic para ver la Solución 2</summary>
Aquí hay otra manera de resolverlo usando un bucle for.

**Usando una declaración if:**
```JS
function findMaxNumber(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
```

### Explicación

- Crear una variable llamada max y asignarle el primer elemento del arreglo.
- Recorrer el arreglo comenzando desde el segundo elemento.
- Comprobar si el elemento actual es mayor que el valor actual de max. Si lo es, establecemos max igual al elemento actual.
- Devolver max después de que el bucle haya terminado.

</details>

### Casos de Prueba

```JS
test('Encontrar el número máximo en un arreglo', () => {
  expect(findMaxNumber([1, 5, 3, 9, 2])).toBe(9);
expect(findMaxNumber([0, -1, -5, 2])).toBe(2);
expect(findMaxNumber([10, 10, 10, 10])).toBe(10);
});
```