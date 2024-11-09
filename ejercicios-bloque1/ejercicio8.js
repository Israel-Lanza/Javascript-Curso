/*Ejercicio 8:


Tengo una heladeria y cada bola de helado vale 1.8 euros
¿Cuanto cuestan los cucuruchos de 1, 2 y 3 bolas?
Ten en cuenta que el barquillo cuesta cincuenta centimos de euros*/



const precioBolaHelado = 1.8;
const barquillo = 0.5;

let precioUnaBola = precioBolaHelado + barquillo;
let precioDosBolas = (precioBolaHelado * 2) + barquillo;
let precioTresBolas = (precioBolaHelado * 3) + barquillo;

console.log(`
    1. El precio de 1 bola de helado es: ${precioUnaBola} euros
    2. El precio de 2 bolas de helado es: ${precioDosBolas} euros
    3. El precio de 3 bolas de helado es: ${precioTresBolas} euros
    `);