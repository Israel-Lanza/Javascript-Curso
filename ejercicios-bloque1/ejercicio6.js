/*Ejercicio 6: 

En mi tienda de videojuegos tenemos una oferta
Si compras un juego de 50 euros o más, te hacemos un 20% de descuento
Si un cliente compra el tekken 5 que cuesta 50 euros ¿en cuanto se le queda?*/

const porcentaje = 0.2;//(20%)
let compra = 50;

let descuento = compra * porcentaje;

let precioFinal = compra - descuento;

console.log(`El precio final comprando un juego que cuesta ${compra} euros y con un descuento de ${descuento} euros es: ${precioFinal}`)