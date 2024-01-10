# Desafío: Ejemplo de Desafío "Hello World"

Este es un desafío de práctica para mostrar cómo están configuradas las cosas y cómo realizar pruebas, etc.

## Instrucciones
Escribe una función llamada `helloWorld` que devuelva la cadena '¡Hola Mundo!'.

### Firma de la Función

```js
/**
 * Devuelve una cadena que contiene '¡HelloWorld!'.
 * @returns {string} - La cadena 'HelloWorld!'.
 */
function helloWorld(): string;
```

### Ejemplos

```JS
helloWorld() // 'Hello World!'
```

### Restricciones

Aquí pondré cualquier restricción. Variarán según el desafío.

- La función debe devolver una cadena

### Consejos

- Aquí pondré un par de consejos. Puedes elegir usarlos o no.

## Soluciones

<details>
  <summary>Haz clic para ver la solución</summary>

```JS
function printHelloWorld() {
  return 'Hello World!';
}
```

### Explicación

Aquí pondré la explicación de la solución. La longitud y profundidad de la explicación variarán según el desafío.

</details>

### Casos de Prueba

Los tests de Jest irán aquí. Ya están incluidos en los archivos del curso. Solo necesitas ejecutar `npm test`. A veces también pondré pruebas manuales aquí.


```JS
test("Devuelve 'Hello, World!' como una cadena", () => {
  const result = helloWorld();
  expect(result).toBe('Hello World!');
});
```