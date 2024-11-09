

//condicional Switch

let miDesayuno = "carajillo";

switch(miDesayuno){

    case "tortitas":
        //bloque de instrucciones
        console.log(`Haz elegido tortitas`);
        break; //Para salir del bucle una vez haya localizado el caso dado. Se evita pasar por todos los case una vez se haya encontrado una
    
    case "huevasos": 
    console.log(`Haz elegido huevasos`);
        break;

    case "carajillo": 
    console.log(`Haz elegido el tipico carajillo`);
        break;

    default://opcion por defecto si no encuentra ningun case acorde
        console.log(`Haz elegido otro desayuno diferente`);
}



//Condicional ternario


let nombre = "Kung lee";
let edad = 18;

//Primero va una condicion (edad >= 18) y luego utilizamos la ? y lo que queramos que devuelva en el caso de que se cumpla o no se cumpla
let resultado = (edad >= 18) ? `Es mayor de edad` : `Es menor de edad`;
console.log(resultado);




//Diferencia entre var y let (alcance / bloques)


var curso = "Master en React"; //Es una variable global
let grado = 3;

if("hola" == "hola"){
    curso = "Master en CSS3";
    let grado = 2;//Es una variable de bloque. Su alcance está limitado al bloque donde este definida
}

console.log(curso); //cambiara el valor ya que la variable es global
console.log(grado);//saldrá el resultado ya que grado se ha declarado como let dentro del bloque if y solo tiene alcance dentro del bloque if. Si pones consolelog dentro del if para grado sacara resultado 2 
//Pero saldrá el resultado de 3 no de 2 ya que coge el que declaramos fuera del if
