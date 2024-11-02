
function calcularSalarioBruto(valorHora, horasTrabalhadas) {
    return valorHora * horasTrabalhadas;
}


function calcularDescontos(salarioBruto) {
    const impostoRenda = salarioBruto * 0.11;
    const inss = salarioBruto * 0.08;
    const sindicato = salarioBruto * 0.05;
    const totalDescontos = impostoRenda + inss + sindicato;
    return { impostoRenda, inss, sindicato, totalDescontos };
}


function calcularSalarioLiquido(salarioBruto, totalDescontos) {
    return salarioBruto - totalDescontos;
}


var valorHora = parseFloat(prompt("Digite quanto você ganha por hora:"));
var horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));


var salarioBruto = calcularSalarioBruto(valorHora, horasTrabalhadas);


var descontos = calcularDescontos(salarioBruto);


var salarioLiquido = calcularSalarioLiquido(salarioBruto, descontos.totalDescontos);


console.log("Salário Bruto: R$ " + salarioBruto(2));
console.log("Desconto INSS: R$ " + descontos.inss(2));
console.logt("Desconto Sindicato: R$ " + descontos.sindicato(2));
console.log("Desconto Imposto de Renda: R$ " + descontos.impostoRenda(2));
console.log("Salário Líquido: R$ " + salarioLiquido(2));
