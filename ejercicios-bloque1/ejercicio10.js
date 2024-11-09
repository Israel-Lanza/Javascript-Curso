/*Ejercicio10: 

El otro dia fui con mi amigo pepe y manolo a un restaurante de smash burgers.

Yo me comí 2, pepe se comió 3 y Manolo se comio 6

¿Cuántas hamburgesas nos comimos en total?
Y...¿Es cierto que yo comi menos que pepe?

*/

let isra = 2;
let pepe = 3;
let manolo = 6;

let totalHamburgesas = isra + manolo + pepe;

let comparar = isra < pepe;


console.log(`
    Nos comimos un total de ${totalHamburgesas}.
    ¿Es cierto que Isra comio menos hamburgesas que Pepe? ${comparar} `);