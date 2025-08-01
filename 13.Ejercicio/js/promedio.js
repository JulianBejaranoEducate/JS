'use strict';

import {validarNota, validarCant} from "./validaciones.js";

// Metodo para obtener el calculo del promedio
const calcularPromedio = () => {
    let cantNotas;
    do {
        cantNotas = prompt("Introduzca la cantidad de notas:");
        if(cantNotas === null){
            return; // El usuario cancela la operación
        }
    } while (!validarCant(cantNotas));

    cantNotas = parseInt(cantNotas);
    let acumuladorNotas = 0;

    for(let i = 0; i < cantNotas; i ++){
        let nota;
        do { 
            nota = prompt(`Introduza la nota ${i + 1}:`); // Esta interpolando
            if(nota === null){
                return; // El usuario cancela la operacion
            }
        } while (!validarNota(nota));
        acumuladorNotas += parseFloat(nota);
    }
    const promedio = acumuladorNotas / cantNotas;
    alert("El promedio es: " + promedio.toFixed(1));
};

export {
    calcularPromedio as promedio
};