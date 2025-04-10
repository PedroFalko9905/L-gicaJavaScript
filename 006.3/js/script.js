
let base = prompt("Digite o valor da base: ")
let altura= prompt("Digite o valor da altura: ")

base = parseInt(base)
altura = parseInt(altura)

function calcular() {
    let area = base * altura / 2

    alert("A área do triangulo é igual a " + area+"cm²")
}

calcular()

