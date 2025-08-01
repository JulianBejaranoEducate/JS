'use strict';

// Metodo para obtener el calculo del promedio
const calcularPromedio = () => {
    let cantNotas;
    do {
        cantNotas = prompt("Introduzca la cantidad de notas:");
        if(cantNotas === null){
            return;
        }
        if(isNaN(parseInt(cantNotas)) || parseInt(cantNotas) <= 0){ /*isNaN verifica que no sea un numero*/
            alert("Valor invalido, por favor ingrese un numero")
        }
    } while (isNaN(parseInt(cantNotas)) || parseInt(cantNotas) <= 0);

    try {
        let contadorNotas = 0;
        for(let i = 0; i < contadorNotas; i ++){
            let nota;
            do { 
                nota = promt(`Introduza la nota ${i + 1}:`); //
                if(nota === null){
                    return;
                }
                if(isNaN(parseFloat(nota)));
            } while (isNaN(parseFloat(nota)));
            acumuladorNotas += parseFloat(nota);
        }
        let promedio = acumuladorNotas / cantNotas;
        alert("EL promedio es: " + promedio.toFixed(1));
        
    } catch (error) {
        alert("Error en datos");
        console.log(error);
    }
};

export {
    calcularPromedio as promedio
};