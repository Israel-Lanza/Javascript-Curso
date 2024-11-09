//Simbolos especiales que nos van a permitir realizar operaciones con variables o cualquier valor 

let frase = "Hola soy Isra"; //Tipo de dato String o cadena de texto
let anio = 2027;            //En el nombre de las variables no usar tildes, ni ñ, mirar info sobre nombre de variables. Tipo de dato numero entero
let interes = 2.7           //Número decimal / float / double
let mayorEdad = true;       //Tipo de dato booleano (verdadero o falso)
let vacia;                  //Tipo de dato undefined (vacio)
let nula = null;            //Tipo de dato null (nulo)

let fruta = ["manzana", "pera", "fresa"]; //Tipo de dato array o arreglo (colección de datos)
let heroe = {nombre: "Batman", universo: "DC"}; //Tipo de dato objeto



/*console.log(typeof nula); //Nos dara por consola el tipo de dato indicado con la variable que le pongamos
console.log(typeof frase); 
console.log(typeof interes); 
console.log(typeof anio); 
console.log(typeof heroe); 
console.log(Array.isArray(fruta)); //Nos saldrá true ya que si es un array
*/

//Operadores aritméticos (+,-,*,/,%,**)
let numero1 = 12;
let numero2 = 44;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multi = numero1 * numero2;
let division = numero1 / numero2;
let resto = numero1 % numero2; //Nos da el resto de la división
let potencia = numero1 ** 2; //potencia de dos
console.log("La suma es: " + suma);
console.log("La resta es: " + resta);
console.log("La multiplicacion es: " + multi);
console.log("La division es: " + division);
console.log("El resto es: " + resto);
console.log("La potencia es: " + potencia);


//Operadores de asignacion
let numerito = 12; //= es asignacion

//numerito = 17 + 3; //da 20

numerito += 3; //forma de sumarle 3 a 17 

console.log(numerito);


//Operadores de comparación
let numeraso = 31;

console.warn(numeraso == 31); //nos dara true ya que si es igual. Operador de igualdad. Aqui no le importa el tipo de dato, solo el valor
console.warn(numeraso === "31") //Aqui nos dará false. El operador triple igual compara el valor y los tipos

console.warn(numeraso != 31); // dara false porque no es distinto. Operador de distinto
console.warn(numeraso !== "31"); //nos dará true ya que compara valor y tipo de dato y si que es distinto a un tipo de dato numero

console.warn(numeraso > 55);//mayor que
console.warn(numeraso < 55);//menor que
console.warn(numeraso >= 55);//mayor igual que
console.warn(numeraso <= 55); //menor igual que


//Operadores lógicos. Nos permite evaluar si dos condiciones son verdaderas, falsas, etc

let esMayorEdad = true;
let tieneEntrada = false;

console.warn(esMayorEdad && tieneEntrada); //Dara true ya que las dos se cumplen. El operador AND (&&) debe dar las dos verdaderas para dar verdadero
console.warn(esMayorEdad || tieneEntrada); //Si una u otra se cumple dará true. Solo tiene que ser una verdadera para que de true
console.warn(!esMayorEdad) //Operador not. Decimos con la exclamacion NO es mayor de edad. Lo "convertimos" en falso. Invierte el valor


//Operadores de cadena

let mensaje1 = "Hola";
let mensaje2 = "que tal";

let mensajeTotal = mensaje1 + " " + mensaje2;//concatenar string
console.warn(mensajeTotal);
mensajeTotal += ", soy Israel";//operador de asignación de concatenación
console.warn(mensajeTotal);


//Operadores de incremento y decremento

let cifra = 1200;

cifra++; //Se le sumara uno al valor de la variable
console.warn(cifra);
cifra--;//Se le restara uno al valor de la variabe
console.warn(cifra);

