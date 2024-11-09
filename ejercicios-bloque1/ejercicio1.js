/*Ejercicio1: 
Calcula cuantas horas te llevaría llegar a la luna o a una nave espacial y 
guarda el resultado en una variable.
La distancia desde la tierra a la luna es de 384.400 Kilometros
La velocidad de la nave es de 1225 kilometros por hora*/



let horas = parseInt(384400 / 1225); //parseInt lo pasa a entero. Coge el primer valor antes del punto o coma. Tambien se puede usar Math.ceil para redondear
let horasRedondeadas = 384400 / 1225;

console.log("La nave espacial tardará "+horas+ " horas en llegar a la luna");
console.log("Horas redondeadas "+Math.ceil(horasRedondeadas));