/*
Ejercicio 10:

En base al numero que nos de el usuario decirle si es par o impar

*/



let numero;


while(isNaN(numero)){
    numero = parseInt(prompt("Introduzca un número para saber si es par o impar"))
    if(numero%2===0){
        alert(`El número ${numero} es par`);
    }else{
        alert(`El número ${numero} es impar`);
    }

}
