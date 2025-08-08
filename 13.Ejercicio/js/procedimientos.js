'use strict';

import { validarCant, validarNota } from "./validaciones.js";

const obtenterCantNotas = () => {
    let cantNotas;
    do {
        cantNotas = prompt("Ingresa la cantidad de notas");
        if(cantNotas === null)
        return null;
    } while (!validarCant(cantNotas));
    return parseInt(cantNotas);
};

const obtenerNota = (i) => {
    let nota;
    do {
        nota = prompt(`Ingresa una nota ${i + 1}:`);
        if(nota === null)
        return null;
    } while (!validarNota(nota));
    return parseFloat(nota);
};

const calcularPromedioNotas = (notas) => {
    const suma = notas.reduce((total, nota) => total + nota, 0);
    return suma / notas.length;
}

export{
    obtenterCantNotas as obtCantNotas,
    obtenerNota as obtNota,
    calcularPromedioNotas as calPromNots
};