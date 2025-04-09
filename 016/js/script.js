let valorFabrica = prompt("Digite o valor do carro apenas com o preço de fábrica: ")

valorFabrica = parseInt(valorFabrica)

let valorDistribuidora = valorFabrica / 100 * 28
let valorImposto = valorFabrica / 100 * 45

let valorTotal = valorFabrica + valorDistribuidora + valorImposto

alert("O valor total como as taxas o carro ficará por "+ valorTotal)
