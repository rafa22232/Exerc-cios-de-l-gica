
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


var celsius = prompt("Digite a temperatura em graus Celsius:");


var fahrenheit = celsiusParaFahrenheit(celsius);


console.log(celsius + " graus Celsius é igual a " + fahrenheit + " graus Fahrenheit.");
