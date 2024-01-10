# Desafío: Obtener Suma

Este es otro desafío de práctica muy básico, solo para que te acostumbres a cómo se hacen las cosas.

## Instrucciones
Escribe una función llamada `getSum` que tome dos números y devuelva la suma de esos dos números.


### Firma de la Función

```js
/**
 * Devuelve la suma de dos números.
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} - La suma de los dos números.
 */
function getSum(a: number, b: number): number;
```

### Ejemplos

```JS
getSum(1, 2) // 3
getSum(10, 5) // 15
getSum(2, 2) // 4
getSum(10, 5) // 15
```

### Restricciones

La función debe devolver un número

- La función debe devolver una cadena

### Consejos

- Puedes usar el operador + para sumar dos números.

## Soluciones

<details>
  <summary>Haz clic para ver la solución</summary>

```JS
function getSum(a, b) {
  return a + b;
}
```

### Explicación

Este es un desafío bastante simple. He creado una función que recibe dos valores y sumo estos dos valores. Luego, devuelvo la suma de estos dos valores.

</details>

### Casos de Prueba

```JS
test('Calculando la suma de dos números', () => {
  // Entradas para el caso de prueba
  const num1 = 5;
  const num2 = 7;

  // Llamada a la función
  const result = getSum(num1, num2);

  // Verificación de que el resultado es igual a la suma esperada
  expect(result).toBe(12);
});
```