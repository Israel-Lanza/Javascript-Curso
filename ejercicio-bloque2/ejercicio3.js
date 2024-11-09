/**
Ejercicio 3: 

Tengo un canguro que salta 3 metros cada vez
Haz un programa que me diga cuantos saltos ha dado el canguro...
y cual es la distancia total recorrida tras 17 saltos
*/



let saltos = 17;

let metros = 3;
let metrosRecorridos;

for(var i = 0;i<=saltos;i++){

    metrosRecorridos = i * metros;

    if(i==17){
        alert(`El canguro ha dado ${saltos} saltos y recorrido una distancia de ${metrosRecorridos} metros`);
    }

};