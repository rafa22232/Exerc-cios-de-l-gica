
function pesoIdealHomem(altura) {
    return (72.7 * altura) - 58;
}


function pesoIdealMulher(altura) {
    return (62.1 * altura) - 44.7;
}


var altura = parseFloat(prompt("Digite a sua altura em metros:"));
var sexo = prompt("Digite o seu sexo (M para masculino, F para feminino):");
var pesoAtual = parseFloat(prompt("Digite o seu peso atual em kg:"));

var pesoIdeal;


if (sexo = "M") {
    pesoIdeal = pesoIdealHomem(altura);
} else if (sexo = "F") {
    pesoIdeal = pesoIdealMulher(altura);
} else {
    console.log("Sexo inválido. Por favor, digite M para masculino ou F para feminino.");
}


if (pesoIdeal) {
    if (pesoAtual < pesoIdeal) {
        console.log("Você está abaixo do peso ideal. Seu peso ideal é: " + pesoIdeal(2) + " kg");
    } else if (pesoAtual > pesoIdeal) {
        console.log("Você está acima do peso ideal. Seu peso ideal é: " + pesoIdeal(2) + " kg");
    } else {
        console.log("Você está no peso ideal! Seu peso ideal é: " + pesoIdeal(2) + " kg");
    }
}
