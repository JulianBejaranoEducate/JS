'use strict';

import {promedio} from "./promedio.js";

// Evento clic desde el html
function notasPromedio(){
    promedio();
}
window.notasPromedio = notasPromedio;

// Mediante la propiedad
const btnPropiedad = document.getElementById('btn3Promedio');
btnPropiedad.onclick = function(){/*Funcion clacia y anonima*/
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

// Metodo para obtener el calculo del promedio
/*const calcularPromedio = () => {
    let cantNotas;
    
    // Ciclo para validar que se ingrese un número válido para la cantidad de notas
    do {
        cantNotas = prompt("Introduzca la cantidad de notas:");
        
        // Si el usuario cancela el prompt, salir de la función
        if (cantNotas === null) {
            return;
        }
        
        // Validar que sea un número entero positivo
        if (isNaN(parseInt(cantNotas)) || parseInt(cantNotas) <= 0) {
            alert("Valor inválido, por favor ingrese un número entero positivo");
        }
    } while (isNaN(parseInt(cantNotas)) || parseInt(cantNotas) <= 0);
    
    try {
        let acumuladorNotas = 0;

        // Ciclo para ingresar cada nota
        for(let i = 0; i < cantNotas; i ++){
            let nota;
            
            // Ciclo para validar que cada nota sea un número válido
            do {
                nota = prompt(`Introduzca la nota ${i + 1}:`);
                
                // Si el usuario cancela el prompt, salir de la función
                if (nota === null) {
                    return;
                }
                
                // Validar que sea un número válido
                if (isNaN(parseFloat(nota))) {
                    alert("Valor inválido, por favor ingrese un número");
                }
            } while (isNaN(parseFloat(nota)));
            
            acumuladorNotas += parseFloat(nota);
        }
        
        let promedio = acumuladorNotas / cantNotas;
        alert("El promedio es: " + promedio.toFixed(1));
        
    } catch (error) {
        alert("Error en datos");
        console.log(error);
    }
};*/