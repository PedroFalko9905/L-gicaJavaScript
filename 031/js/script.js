let ladoA = parseInt(prompt("Digite o lado A do triangulo"))
let ladoB = parseInt(prompt("Digite o lado B do triangulo"))
let ladoC = parseInt(prompt("Digite o lado C do triangulo"))

let somaAB = ladoA + ladoB
let somaAC = ladoA + ladoC
let somaBC = ladoB + ladoC

if (ladoA > somaBC || ladoB > somaAC || ladoC > somaAB) {
    alert("Com base no tamanho dos lado que foram dados, isso não pode ser considerado um triangulo")
} else {
    alert("Com base nos tamanhos dos lado que foram dados, isso pode sim ser considerado um triangulo")
}
