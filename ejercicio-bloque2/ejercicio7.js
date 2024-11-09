/*
Ejercicio 7:

Mostrar todos los numeros impares que hay entre dos numeros que nos de el usuario
*/

let numero1 = parseInt(prompt("Introduzca un numero"));
let numero2 = parseInt(prompt("Introduzca otro numero"));


while(numero1 < numero2){

    numero1++;

    if(numero1 % 2 != 0){
        console.log(`El número ${numero1} es impar`);
    };

}




