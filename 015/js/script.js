let salarioAntigo = prompt("Qual o valor do salário sem o reajuste? ")
let porcentAumento = prompt("Quantos por cento o salário aumentou? ")

salarioAntigo = parseFloat(salarioAntigo)
porcentAumento = parseInt(porcentAumento)

let aumento = salarioAntigo / 100 * porcentAumento
let salarioAtual = salarioAntigo + aumento

alert("O salário atual é "+salarioAtual)
