/*

Ejercicio 9:

Muestra todos los numeros divisores de un numero que se introduce en un prompt
*/

let numero = parseInt(prompt("Introduzca un número"));
let divisores = `Los divisores del número ${numero} son: `;
for(var i = 1; i <= numero; i++){
    console.log(i);
    if(numero%i== 0){
        console.log(i);
        divisores += `\n ${i}`;
    }
};

alert(divisores);