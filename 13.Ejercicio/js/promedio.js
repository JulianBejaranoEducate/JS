'use strict';

import {obtCantNotas, obtNota, calPromNots} from "./procedimientos.js";

// Funcion principal para calcular el promedio
const calcularPromedio = () => {
    const cantidadNotas = obtCantNotas();
    if(cantidadNotas === null)
    return;

    const notas = [];

    for(let i = 0; i < cantidadNotas; i ++){
        const nota = obtNota(i);
        if(nota === null)
        return;
        notas.push(nota);
    }

    const promedio = calPromNots(notas);
    alert("El promedio " + promedio.toFixed(1));
    console.log("El promedio " + promedio.toFixed(1));
};

export {
    calcularPromedio as promedio
};