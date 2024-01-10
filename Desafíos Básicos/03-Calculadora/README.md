# Desafío: Calculadora

## Instrucciones
Escribe una función llamada calculadora que tome 2 números y un operador y devuelva el resultado del cálculo.


### Ejemplos

```JS
calculator(1, 2, '+') // 3
calculator(10, 5, '-') // 5
calculator(2, 2, '*') // 4
calculator(10, 5, '/') // 2
```

### Restricciones
- La función debe devolver un número
- La función debe arrojar o registrar un error si se da un operador no válido

### Consejos

- Puedes usar declaraciones if o switch para determinar qué operador se dio.

## Soluciones

<details>
  <summary>Haz clic para ver la Solución 1</summary>

**Usando un switch:**
```JS
function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      throw new Error('Operador inválido');
  }

  return result;
}
```

### Explicación

He creado una función llamada calculadora que toma tres argumentos: num1, num2 y operador. Creé una variable llamada result para almacenar el resultado del cálculo. Usé una declaración switch para determinar qué operador se dio. Si era +, -, * o /, realicé el cálculo. Si el operador es cualquier otro, lanzo un error.

</details>

<details>
  <summary>Haz clic para ver la Solución 2</summary>

**Usando una declaración if:**
```JS
function calculator(num1, num2, operator) {
  let result;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num1 / num2;
  } else {
    throw new Error('Operador inválido');
  }

  return result;
}
```

### Explicación

He creado una función llamada calculadora que toma tres argumentos: num1, num2 y operador. He creado una variable llamada result para almacenar el resultado del cálculo. Usé una declaración if para determinar qué operador se dio. Si era +, -, * o /, realicé el cálculo. Si el operador es cualquier otro, lanzo un error.

</details>

### Casos de Prueba

```JS
test('Realizando operaciones aritméticas usando la función calculadora', () => {
  // Entradas para el caso de prueba
  const num1 = 5;
  const num2 = 7;

  // Adición
  expect(calculator(num1, num2, '+')).toBe(12);

  // Sustracción
  expect(calculator(num1, num2, '-')).toBe(-2);

  // Multiplicación
  expect(calculator(num1, num2, '*')).toBe(35);

  // División
  expect(calculator(num1, num2, '/')).toBeCloseTo(0.7143, 4);
  // Operador no válido
  expect(() => calculator(num1, num2, '^')).toThrow('Operador no válido');
});
```