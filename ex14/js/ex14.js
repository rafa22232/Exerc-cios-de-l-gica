
function calcularMulta(peso) {
    const limite = 50; 
    const valorMultaPorQuilo = 4.00; 

    var excesso = 0;
    var multa = 0;

    if (peso > limite) {
        excesso = peso - limite;
        multa = excesso * valorMultaPorQuilo;
    }

    else { excesso, multa };
}


var peso = parseFloat(prompt("Digite o peso dos peixes em quilos:"));


var resultado = calcularMulta(peso);


console.log("Excesso: " + resultado.excesso + " kg");
console.log("Multa: R$ " + resultado.multa(2));
