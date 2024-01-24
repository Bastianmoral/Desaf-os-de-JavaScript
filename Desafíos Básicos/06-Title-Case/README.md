# Desafío: Título en Mayúsculas
## Instrucciones
Escribe una función llamada  `titleCase` que tome una cadena de texto y devuelva la cadena con la primera letra de cada palabra en mayúsculas.

### Firma de la Función

```js
/**
 * Devuelve una cadena con la primera letra de cada palabra en mayúsculas.
 * @param {string} str - La cadena a capitalizar.
 * @returns {string} - La cadena con la primera letra de cada palabra en mayúsculas.
 */
function titleCase(str: string): string;
```

### Ejemplos

```JS
titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
titleCase('sHoRt AnD sToUt'); // Short And Stout
titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'); // Here Is My Handle Here Is My Spout
```
### Restricciones
-  Puedes asumir que cada palabra consta solo de letras y espacios.



## Soluciones

<details>
  <summary>Haz clic para ver la Solución 1</summary>

```JS
function titleCase(str) {
  const words = str.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
}
```

### Explicación

- Divide la cadena en un arreglo de palabras y conviértelas todas a minúsculas.
- Itera a través del arreglo y capitaliza la primera letra de cada palabra usando el índice 0 de la palabra y concatenándola con el resto de la palabra.
- Une el arreglo de vuelta en una cadena y devuélvela.

</details>

<details>
  <summary>Haz clic para ver la Solución 2</summary>

```JS
function titleCase(str) {
  return str.replace(/\b\w/g, (coincidencia) => coincidencia.toUpperCase());
}
```

### Explicación
En este ejemplo, estamos utilizando el método replace para encontrar la primera letra de cada palabra y reemplazarla con la versión en mayúsculas de sí misma.

La expresión regular /\b\w/g coincide con la primera letra de cada palabra.

- `\b` coincide con el límite de la palabra
- `\w` coincide con la primera letra de cada palabra
- La bandera `g` se utiliza para reemplazar todas las ocurrencias de la expresión regular en la cadena

El segundo argumento es una función de retorno que devuelve la versión en mayúsculas de la letra coincidente.

</details>

### Casos de Prueba

```JS
test('Convirtiendo cadena a título en mayúsculas', () => {
  expect(titleCase('hello world')).toBe('Hello World');
  expect(titleCase('javascript programming')).toBe('Javascript Programming');
  expect(titleCase('openai chatbot')).toBe('Openai Chatbot');
});
```