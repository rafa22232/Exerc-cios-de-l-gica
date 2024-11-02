
function calcularPesoIdeal(altura) {
    return (72.7 * altura) - 58;
}


var altura = parseFloat(prompt("Digite a sua altura em metros:"));


var pesoIdeal = calcularPesoIdeal(altura);


console.log("Seu peso ideal é: " + pesoIdeal(2) + " kg");
