/*Ejercicio2: 

Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales

PLUS: si los numeros no son un numero o son meores o iguales a cero, nos lo vuelve a pedir
 
*/


do{

    var flag = true;
    let numero1 = prompt("Inserte un número");
    let numero2 = prompt("Inserte otro número");

    console.log(typeof numero1);
    console.log(typeof numero2);

    if(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){ //isNaN comprobara si es un número o no
        flag = false;
    }else if(numero1 > numero2){
        alert(`El número ${numero1} es mayor a ${numero2}`);
    }else if(numero1 < numero2){
        alert(`El número ${numero1} es menor a ${numero2}`);
    }else if(numero1 === numero2){
        alert(`El número ${numero1} es igual ${numero2}`);
    };



}while(flag == false);
