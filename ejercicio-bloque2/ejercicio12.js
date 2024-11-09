/*
Ejercicio 12:

Tenemos una bolsa con 37 caramelos

Cada vez que te comes uno, quedan menos

Haz una simulacion de esto con un bucle
*/


let bolsaCaramelos = 37;
let respuesta;

do{
    respuesta = prompt("Quieres comerte un caramelo?: [si/no]").toLowerCase();

    if(respuesta == "si"){
        bolsaCaramelos--;
        alert(`Te queda ${bolsaCaramelos} caramelos`);
    }
    if(bolsaCaramelos == 0){
        alert("No quedan caramelos");
    }

}while(respuesta == "si" || bolsaCaramelos == 0);
