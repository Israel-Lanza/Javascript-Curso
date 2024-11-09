//Tres formas de declarar una variable

/*var nombre = "Isra"; //forma clasica. Alcance mas amplio. 
let apellido = "Betancor"; //Forma mas nueva de declarar variables. Alcance de bloque. 
const nacionalidad = "Canario"; //Su valor no cambia durante todo el programa
*/

let heroe = "Batman";//Prueba a cambiar los datos 
let universo = "DC";
let edad = 50;

console.log(heroe); //Por consola mostrara el valor de heroe
alert(universo); //Por pantalla mostrara el valor de universo

let heroeUniverso = heroe + " es un superheroe de la marca " + universo; //Concatenamos (juntamos) las dos cadenas heroe y universo. Por la consola del navegador saldrá "Batman DC"
console.log(heroeUniverso);