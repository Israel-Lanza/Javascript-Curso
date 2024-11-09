/*
Ejercicio 15:

Muestra la suma y la media de los números introducidos 
hasta introducir un numero negativo y ahi mostrar el resultado

*/

let sumaTotal = 0;
let media;
let numeroIntroducido;
let contadorNumeros = 0;


do{

    numeroIntroducido = prompt("Introduce un numero");

    if(isNaN(numeroIntroducido)){
        numeroIntroducido = 0;
    }else if(numeroIntroducido >= 0){
        sumaTotal += numeroIntroducido; 
        contadorNumeros++;
    };



}while(numeroIntroducido >= 0);

media = sumaTotal / contadorNumeros;

alert(`La suma de los números introducidos es de: ${sumaTotal}
    y la media de los números introducidos es de: ${media}`);