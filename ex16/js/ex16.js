
function calcularTinta(area) {
    const coberturaPorLitro = 3; 
    const litrosPorLata = 18; 
    const precoPorLata = 80.00; 


    var litrosNecessarios = area / coberturaPorLitro;

  
    var latasNecessarias = (litrosNecessarios / litrosPorLata);

   
    var precoTotal = latasNecessarias * precoPorLata;

    return { latasNecessarias, precoTotal };
}


var area = parseFloat(prompt("Digite o tamanho da área a ser pintada em metros quadrados:"));


var resultado = calcularTinta(area);


console.log("Quantidade de latas de tinta necessárias: " + resultado.latasNecessarias);
console.log("Preço total: R$ " + resultado.precoTotal(2));
