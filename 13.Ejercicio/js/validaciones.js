'use strict';
 
// Metodo para validar la nota, debe ser un numero, y que el rango debe estar entre 0 y 5
const notas = (numero) => {
    const nota = parseFloat(numero);
    if(isNaN(nota)){
        alert("La nota ingresada no es un numero");
        return false;
    }
    if(nota < 0 || nota > 5){
        alert("La nota debe estar entre 0 y 5");
        return false;
    }
    return true;
};

// Metodo para validar la cantidad de notas ingresadas
const cantidad = (dato) => {
    const numero = parseInt(dato);
    if(isNaN(numero)){
        alert("La cantidad ingresada no es numero");
        return false;
    }
    if(numero < 2 || numero > 10){
        alert("La cantidad de notas debe estar entre 2 y 10");
        return false;
    }
    return true;
}

export {
    notas as validarNota,
    cantidad as validarCant
}