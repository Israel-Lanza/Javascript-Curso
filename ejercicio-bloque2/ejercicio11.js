/*
Ejercicio 11: 

Calculadora
-Pida dos numeros por pantalla
-Si metemos uno mal que nos lo vuelva a pedir
.En una alerta y por consola el resultado de sumar, restar, multiplicar y dividir esas dos cifras
*/


let numero1;
let numero2;

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduzca un número"));
    numero2 = parseInt(prompt("Introduzca un número"));
};

let sumar = numero1 + numero2;
let resta = numero1 - numero2;
let mult = numero1 * numero2;
let div = numero1 / numero2;


let resultado = `La suma de ${numero1} y ${numero2} es de: ${sumar}
        La resta de ${numero1} y ${numero2} es de: ${resta}
        La multiplicacion de ${numero1} y ${numero2} es de: ${mult}
        La division de ${numero1} y ${numero2} es de: ${div}`;

alert(resultado);
console.log(resultado);
document.write(resultado);//Lo incrusta dentro de html



