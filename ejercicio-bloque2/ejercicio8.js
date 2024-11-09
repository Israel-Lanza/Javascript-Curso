/*
Ejercicio8:

Tenemos una colección de numeros desde el 1 al 17.

El usuario tiene que adivinar cual es el elegido

Haz un programa para que pueda adivinar el número

*/


let numeroAdivinar = 12;
let numero;

do{
    
    numero = parseInt(prompt("Adivina el numero del 1 al 17"));

    if(numero == numeroAdivinar){
        alert("Has acertado el número secreto");
    }else{
        if((numeroAdivinar - numero) < 3){
            alert("Estas muy cerca")
        }else if((numeroAdivinar - numero) < 9){
            alert("Te queda un poco lejos");
        }else if((numeroAdivinar - numero) < 16){
            alert("Demasiado lejos");
        }
    };
    

}while(numero != numeroAdivinar);