let salarioFixo = parseFloat(prompt("Digite o salario fixo mensal do funcionário"))
let comissaoFixa = parseFloat(prompt("Digite o valor fixo da comissão"))
let totalCarros = parseInt(prompt("Digite valor total de carros vendidos pelo funcionário"))

let totalComissao = comissaoFixa * totalCarros
let salarioFinal = totalComissao / 100 * 5 + totalComissao + salarioFixo

alert("O salário total do funcionário vai ser "+salarioFinal)
