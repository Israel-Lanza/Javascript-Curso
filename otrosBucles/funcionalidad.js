

//Bucle while

/**
 let contador = 0;
 while(condicion){
    //Si se cumple se ejecuta indefinidamente

    contador++;
}
*/


//Ejemplo:

let year = 1990;
let objetivo = 2177;
let interferencia = 2117;

while(year <= objetivo){

    console.log(`Estamos ahora en el año ${year}`);

    if(year === interferencia){
        break; //Corta el bucle
    }

    year++;
}


//Do while. El bucle se ejecutará al menos una vez

/*
do{

    ///ejecutas codigo

}while(condicion) */

let numeros = 47;

do{
    console.log(numeros);

    numeros--;

}while(numeros > 0)