# Desafío: Invertir Cadena
## Instrucciones
Escribe una función llamada `reverseString` que reciba una cadena de texto y devuelva la inversa de esa cadena. En esta sección, nos estamos enfocando realmente en bucles sin usar métodos integrados, así que intenta eso primero. Si te quedas atascado, siempre puedes usar los métodos integrados para resolver el problema.

### Firma de la Función

```js
/**
 * Devuelve la inversa de una cadena.
 * @param {string} str - La cadena a invertir.
 * @returns {string} - La inversa de la cadena.
 */
function reverseString(str: string): string;
```

### Ejemplos

```JS
reverseString('hello') // 'olleh'
reverseString('world') // 'dlrow'
reverseString('') // ''
```
### Restricciones
-  La cadena de entrada solo contendrá letras minúsculas y espacios.

### Sugerencias
- También puedes hacer esto sin usar ninguno de los métodos integrados y solo usar un bucle for.

- También podrías usar los métodos split, reverse y join para resolver este problema.

## Soluciones

<details>
  <summary>Haz clic para ver la Solución 1</summary>
  Esta solución usa un bucle for para invertir la cadena.

```JS
function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}
```

### Explicación

- Crea una variable llamada reversed y asígnale una cadena vacía.
- Crea un bucle for que comienza en el último índice de str y decrece en 1 hasta que llega a 0.
- Agrega el carácter en el índice actual a la variable reversed.
- Devuelve la variable reversed.

</details>

<details>
  <summary>Haz clic para ver la Solución 2</summary>

```JS
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

### Explicación
- Creamos una función llamada reverseString que toma una cadena llamada str. Luego devolvemos el resultado de encadenar los métodos split, reverse y join en str.

- La función split toma una cadena y la convierte en un arreglo. Pasamos una cadena vacía como argumento para split para que divida la cadena en un arreglo de caracteres. (["h", "e", "l", "l", "o"])

- La función reverse toma un arreglo y lo invierte. (["o", "l", "l", "e", "h"])

- La función join toma un arreglo y lo convierte en una cadena. Pasamos una cadena vacía como argumento para join para que una el arreglo de caracteres en una cadena. ('olleh')

</details>

### Casos de Prueba

```JS
test('Invertir una cadena', () => {
  expect(reverseString('Hello')).toBe('olleH');
  expect(reverseString('JavaScript')).toBe('tpircSavaJ');
  expect(reverseString('12345')).toBe('54321');
});
```