
function calcularTempoDownload (tamanhoArquivo, velocidadeLink) {
    
    var velocidadeMBps = velocidadeLink * 0.125;
   
    var tempoSegundos = tamanhoArquivo / velocidadeMBps;
    
    var tempoMinutos = tempoSegundos / 60;
    return tempoMinutos;
}


var tamanhoArquivo = parseFloat(prompt("Digite o tamanho do arquivo para download (em MB):"));
var velocidadeLink = parseFloat(prompt("Digite a velocidade do link de Internet (em Mbps):"));


var tempoDownload = calcularTempoDownload(tamanhoArquivo, velocidadeLink);


console.log("O tempo aproximado de download do arquivo é: " + tempoDownload(2) + " minutos");
