//Condicional IF

//Si A es igual a B entonces haz algo

//Ejemplo 1:

let estaLloviendo = true;

if(estaLloviendo){//Es como si fuera estaLloviendo == true;

    //si se cumple la condicion se ejecuta esto
    console.log(`Me llevo el paraguas`);
}else{

    //Si no se cumple la condicion se ejecuta esto
    console.log(`No me llevo el paraguas`);
}


//Ejemplo 2: 

//Esta variable actuara como una flag
let quieroCebolla = false;

if(!quieroCebolla){
    console.log(`Tu burger no lleva cebolla`);
    
}else{
    console.log(`Tu hamburgesa llevará cebolla`);
}


//Ejemplo 3: 

let nombre = "Joaquin Perez";
let edad = 18;

if(edad >= 18){
    console.log(`El alumno ${nombre} tiene ${edad} años y es mayor de edad`);
    if(edad <= 20){//Los ifs pueden ir anidados dentro de otro if 
        console.log(`Es un adolescente`);
    }else if(edad >= 70){
        console.log(`Es un anciano`);
    }else{
        console.log(`Es un adulto`);
    }
}else{
    console.log(`El alumno ${nombre} tiene ${edad} años y no es mayor de edad`);
};


//Ejemplo 4: (NOT)

let buenTiempo = true;

if(!buenTiempo){//Niega el true, osea si es true pasara a false y si es false pasará a true. Es el NOT de los operadores lógicos
    console.log(`No vamos al parque a pasear`);
}


//Ejemplo 5: (AND)

let year = 2007;

if(year >= 2000 && year <= 2030){

    console.log(`Estamos en la era moderna`);

}else if(year > 2030){

    console.log(`Estamos en la era postmoderna`);

}else{
    console.log(`Estas en la era antigua`);
}


//Ejemplo 6:  (OR)

if(year == 2007 || year == 2017 || year == 2027 || year == 2037)
{
    console.log(`El año acaba en 7 !!!`);

}else{

    console.log(`Año desconocido`);
}