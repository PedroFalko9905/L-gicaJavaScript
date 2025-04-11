let salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor"))
let totalVendas = parseFloat(prompt("Digite o valor total arrecadado pelas vendas do vendedor"))

let valorTotal

if (totalVendas > 1500) {
    valorTotal = 1500 /100 * 3 + (totalVendas - 1500) / 100 * 5 + salarioFixo 
} else {
    valorTotal = totalVendas / 100 * 3 + salarioFixo 
}

alert("O salário total vai ser "+valorTotal)
