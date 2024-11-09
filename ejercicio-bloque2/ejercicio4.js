/*
Ejercicio4: 

    Un dj no sabe que genero musical poner en la fiesta...

    Preguntale al usuario que genero quiere (pop, rock, rap)

    Segun lo que prefiera devuelve un mensaje diferente
*/


var flag;
let generoMusical = ['pop', 'rock', 'rap'];
let generoUsuario;

do{
    
    generoUsuario = prompt("¿Que genero musical desea que el dj ponga?");

    for(var i = 0; i < generoMusical.length; i++){
        if(generoMusical[i] === generoUsuario){
            console.log(flag);
            flag = true;
            break;
        }else{
            flag = false;
        }
    };
    
}while(flag == false);

console.log(flag);

switch(generoUsuario){
    case "rap":
        alert("Fuerte loco el rapero");
        break;
    case "pop":
        alert("El popeer iiiiih");
        break;
    default:
        alert("I wanaaa roooooock roooock punpuuuuun");
};


