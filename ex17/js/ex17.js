
function calcularTinta(area) {
    const coberturaPorLitro = 6; 
    const litrosPorLata = 18; 
    const precoPorLata = 80.00;
    const litrosPorGalao = 3.6; 
    const precoPorGalao = 25.00; 

    area *= 1.1;

    
    var litrosNecessarios = area / coberturaPorLitro;

    
    var latasNecessarias = Math.ceil(litrosNecessarios / litrosPorLata);
    var precoTotalLatas = latasNecessarias * precoPorLata;

    
    var galoesNecessarios = Math.ceil(litrosNecessarios / litrosPorGalao);
    var precoTotalGaloes = galoesNecessarios * precoPorGalao;

    
    var latasMistura = Math.floor(litrosNecessarios / litrosPorLata);
    var litrosRestantes = litrosNecessarios % litrosPorLata;
    var galoesMistura = Math.ceil(litrosRestantes / litrosPorGalao);
    var precoTotalMistura = (latasMistura * precoPorLata) + (galoesMistura * precoPorGalao);

    return {
        latasNecessarias,
        precoTotalLatas,
        galoesNecessarios,
        precoTotalGaloes,
        latasMistura,
        galoesMistura,
        precoTotalMistura
    };
}

var area = parseFloat(prompt("Digite o tamanho da área a ser pintada em metros quadrados:"));


var resultado = calcularTinta(area);


console.log("Comprando apenas latas de 18 litros:");
console.log("Quantidade de latas: " + resultado.latasNecessarias);
console.log("Preço total: R$ " + resultado.precoTotalLatas(2));

console.log("Comprando apenas galões de 3,6 litros:");
console.log("Quantidade de galões: " + resultado.galoesNecessarios);
console.log("Preço total: R$ " + resultado.precoTotalGaloes(2));

console.log("Misturando latas e galões para o menor preço:");
console.log("Quantidade de latas: " + resultado.latasMistura);
console.log("Quantidade de galões: " + resultado.galoesMistura);
console.log("Preço total: R$ " + resultado.precoTotalMistura(2));
