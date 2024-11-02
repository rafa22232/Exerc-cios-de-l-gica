
function produtoDobroPrimeiroMetadeSegundo(num1, num2) {
    return (2 * num1) * (num2 / 2);
}


function somaTriploPrimeiroComTerceiro(num1, num3) {
    return (3 * num1) + num3;
}


function terceiroElevadoAoCubo(num3) {
    return Math.pow(num3, 3);
}


var num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
var num2 = parseInt(prompt("Digite o segundo número inteiro:"));
var num3 = parseFloat(prompt("Digite um número real:"));


var resultadoA = produtoDobroPrimeiroMetadeSegundo(num1, num2);
var resultadoB = somaTriploPrimeiroComTerceiro(num1, num3);
var resultadoC = terceiroElevadoAoCubo(num3);

console.log("a) O produto do dobro do primeiro com metade do segundo é: " + resultadoA);
console.log("b) A soma do triplo do primeiro com o terceiro é: " + resultadoB);
console.log("c) O terceiro elevado ao cubo é: " + resultadoC);
