let estoqueMaximo = parseInt(prompt("Digite o valor máximo de estoque"))
let estoqueMinimo = parseInt(prompt("Digite o valor minimo de estoque"))
let estoqueAtual = parseInt(prompt("Digite o valor de estoque atual"))

let mediaEstoque = (estoqueMaximo + estoqueMinimo) / 2

if (estoqueAtual >= mediaEstoque) {
    alert("Não efetuar compra")
} else {
    alert("Efetuar compra")
}
