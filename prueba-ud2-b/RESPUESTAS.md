# Prueba UD2 · Versión B · Respuestas del ejercicio 1

**Nombre y apellidos:**
GermánSantosMarichal

Rellena la tabla con lo que muestra la consola (o el error que da) y una justificación de una línea con el concepto de la unidad (hoisting, zona muerta temporal, ámbito de bloque, sombreado, coerción, *falsy*, `??`…).

| Fragmento | Salida de la consola (o error) | Justificación |
|-----------|--------------------------------|---------------|
| F1 | 3 / Uncaught ReferenceError: j is not defined | El var declarada dentro del for existe en toda la función, mientras que el let solo existe dentro del for |
| F2 | Uncaught ReferenceError: Cannot access 'x' | al x esar dentro de un bloque no puede acceder a el desde afuera | 
| F3 | Uncaught TypeError: Assignment to constant variable. | |
| F4 | 12 / 345 / 75 |  |
| F5 | anónimo / *vacío* / anónimo | El primero ve que la variabel nombre esta vacia y asigna la siguente frase, el otro segundo detecta que el derecho no es null y el trecero si detecta que es null |
