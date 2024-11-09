/*
Ejercicio 6

Escribe un programa que muestre la tabla de multiplicar del numero que te diga el usuario

*/

let numero = parseInt(prompt("Introduzca un número para saber su tabla de multiplicar"));
let tablaMultiplicar = "";
let resultado;

for(var i = 1; i <= 10;i++){

    resultado = i * numero;

    tablaMultiplicar += `${i} x ${numero} = ${resultado} \n`;

}

alert(tablaMultiplicar);