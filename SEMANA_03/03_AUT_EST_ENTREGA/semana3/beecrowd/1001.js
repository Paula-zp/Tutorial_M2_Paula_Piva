var input = require('fs').readFileSync('stdin', 'utf8');
var line = input.trim().split('\n')[0];

//o código a seguir é que irá para o Bee Crowd

var vogais = ["a", "e", "i", "o", "u"]
palavra = line.split("")

palavra = palavra.filter(letra => vogais.includes(letra))

console.log(palavra)

if(palavra.join("") == palavra.slice().reverse().join("")){
    console.log("S")
    console.log(palavra.join(""))
    console.log(palavra.slice().reverse().join(""))
}

else{
    console.log("N")
    console.log(palavra.join(""))
    console.log(palavra.slice().reverse().join(""))
}