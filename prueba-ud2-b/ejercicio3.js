   //GermánSantosMarichal
/* =====================================================================
   Prueba UD2 · Versión B · Ejercicio 3 · Escribe una función
   Coste de un aparcamiento
   ---------------------------------------------------------------------
   Nombre y apellidos: ______________________________________________

   Escribe aquí la función costeAparcamiento(minutos, vehiculo) y el
   programa que la usa, según el enunciado. Documenta la función con JSDoc.
   ===================================================================== */
'use strict';
if (typeof prompt === 'undefined') { require('./_node-prompt.js'); }

// ----- FUNCIÓN -----------------------------------------------------------

/**
 * Calcula el coste de una estancia en un aparcamiento.
 *
 * @param {number} minutos Minutos de estancia (entre 0 y 1440).
 * @param {string} vehiculo Tipo de vehículo: coche, moto o furgoneta.
 * @returns {number|null} Coste en euros, o null si los datos no son válidos.
 */
function costeAparcamiento(minutos, vehiculo) {
    // Cláusula de guarda: validación de tipos y rangos
    if (typeof minutos !== 'number' || isNaN(minutos)) {
        return null;
    }
    if (typeof vehiculo !== 'string') {
        return null;
    }
    if (minutos < 0 || minutos > 1440) {
        return null;
    }
    const vehiculoNormalizado = vehiculo.trim().toLowerCase();
    let multiplicador;
    switch (vehiculoNormalizado) {
        case 'coche':
            multiplicador = 1;
            break;
        case 'moto':
            multiplicador = 0.5;
            break;
        case 'furgoneta':
            multiplicador = 1.5;
            break;
        default:
            return null;
    }
    let tarifa;
    if (minutos <= 15) {
        tarifa = 0;
    } else if (minutos <= 60) {
        tarifa = 1.50;
    } else if (minutos <= 180) {
        tarifa = 1.50 + (minutos - 60) * 0.04;
    } else {
        tarifa = 7.00;
    }
    return tarifa * multiplicador;
}
// ----- PROGRAMA ----------------------------------------------------------

const minutos = Number(prompt('Introduce los minutos de estancia:'));
const vehiculo = prompt('Introduce el vehículo (coche, moto o furgoneta):');

const coste = costeAparcamiento(minutos, vehiculo);

const mensaje = coste === null
    ? 'Datos no válidos'
    : `Coste del aparcamiento: ${coste.toFixed(2)} €`;

console.log(mensaje);


/* ---------------------------------------------------------------------
   CASOS DE PRUEBA
   minutos | vehiculo     | esperado | obtenido
   --------|--------------|----------|---------
   10      | coche        | 0.00     | 0.00
   60      | ' Moto '     | 0.75     | 0.75
   90      | coche        | 2.70     | 2.70
   200     | furgoneta    | 10.50    | 10.50
   1500    | coche        | null     | null
   30      | bici         | null     | null
   --------------------------------------------------------------------- */