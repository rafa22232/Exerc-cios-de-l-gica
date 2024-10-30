
var valorHora = parseFloat(prompt("Digite quanto você ganha por hora:"));


var horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));

var salarioMensal = valorHora * horasTrabalhadas;


console.log("O seu salário no mês é: R$ " + salarioMensal.toFixed(2));
