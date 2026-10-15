//GermánSantosMarichal
/* =====================================================================
   Prueba UD2 · Versión B · Ejercicio 2 · Completa el código
   Desglose de un importe en billetes y monedas
   ---------------------------------------------------------------------
   Nombre y apellidos: ______________________________________________

   Sustituye cada hueco (comentarios ① a ⑧) por el código que falta.
   No cambies nada más. El programa debe ejecutar sin errores.

   Qué hace:
     a) Pide un importe en euros (entero). Si el usuario cancela, se usa
        100 por defecto (operador ??).
     b) Convierte el texto a número.
     c) Si el importe no es un número positivo, muestra un error y NO
        calcula nada (cláusula de guarda).
     d) Calcula cuántos billetes de 50, de 20 y de 10 hacen falta y
        cuánto queda en monedas (Math.trunc y %).
     e) Muestra el desglose y el importe con IGIC del 7 % con dos
        decimales.

   Comprobación: 185 -> 3 de 50, 1 de 20, 1 de 10, 5 en monedas · 197,95
                 cancelar -> 100 -> 2 de 50, 0 de 20, 0 de 10, 0 · 107,00
   ===================================================================== */
'use strict';
// ----- c) CLÁUSULA DE GUARDA ----------------------------------------------
if (Number.isNaN(importe) || importe <= 0) {
  console.error('Error: el importe debe ser un número positivo.');
} else {
  // ----- d) CÁLCULO --------------------------------------------------------
  const billetes50 = Math.trunc(importe / 50);
  const restoTras50 = importe % 50;
  const billetes20 = Math.trunc(restoTras50 / 20);
  const restoTras20 = restoTras50 % 20;
  const billetes10 = Math.trunc(restoTras20 / 10);
  const monedas = restoTras20 % 10;
  const conIgic = (importe * (1 + TIPO_IGIC)).toFixed(2);

  // ----- e) SALIDA ---------------------------------------------------------
  console.log(`Importe: ${importe} € (con IGIC: ${conIgic} €)`);
  console.log(`Billetes de 50: ${billetes50} · de 20: ${billetes20} · de 10: ${billetes10}`);
  console.log(`En monedas: ${monedas} €`);
}
