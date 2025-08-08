'use strict';

import {promedio} from "./promedio.js";

// Evento clic desde el html "como funcion"
function notasPromedio(){
    promedio();
}
window.notasPromedio = notasPromedio; 

// Mediante la propiedad
const btnPropiedad = document.getElementById('btn3Promedio');
btnPropiedad.onclick = function(){/*Funcion clasica y anonima*/
    promedio();
};

// Metodo .addEventListener
const btnAddEvenL = document.querySelector('#btnPromedio');
btnAddEvenL.addEventListener('click', function(){
    promedio();
});

// Metodo para el calculo del promedio
/*const cuerpoPromedio = () => {
    let cantNotas = prompt("Introduzca la cantidad de notas:");
    // Debe haber un ciclo para que cuando el usuario no ingrese un valor numero, o sea una letra o otro caracter vuleva a arrojar el aviso de "valor invalido, por favor ingrese un numero."
    try {
        if(!isNaN(parseInt(cantNotas))){ isNan verifica que no sea un numero | pero lo negamos
            let nota = 0;
            let acumuladorNotas = 0;
            for(let i = 0; i < cantNotas; i ++){
                nota = prompt("Introduzca la nota");
                acumuladorNotas += (parseFloat(nota));
            }
            let promedio = acumuladorNotas / cantNotas;
            alert("El promedio es: " + promedio.toFixed(1));
        }else{
            alert("Valor invalido");
        }
    } catch (error) {
        alert("Error en datos");
        console.log(error);
    }
};*/
