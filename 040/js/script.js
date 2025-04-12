
let nomeProduto = prompt("Digite o nome do produto")
let quantidadeProduto = parseInt(prompt("Digite a quatnidade adquirida do produto"))
let precoUnitario = parseFloat(prompt("Digite o preço unitario do produto"))

let precoSemDesconto = quantidadeProduto * precoUnitario
let precoComDesconto

if (quantidadeProduto  <= 5) {
    precoComDesconto = precoSemDesconto - precoSemDesconto / 100 * 2
} else if (quantidadeProduto > 5 && quantidadeProduto <= 10) {
    precoComDesconto = precoSemDesconto - precoSemDesconto / 100 * 3
} else{
    precoComDesconto = precoSemDesconto - precoSemDesconto / 100 * 5
}

alert("O preço total ficou "+ precoComDesconto.toFixed(2))
