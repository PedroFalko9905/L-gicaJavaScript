
let maior = prompt("Digite o valor da base maior: ")
let menor = prompt("Digite o valor da base menor: ")
let altura = prompt("Digite o valor da altura: ")

maior = parseInt(maior)
menor = parseInt(menor)
altura = parseInt(altura)

function calcular() {
    let area = (maior + menor) * altura / 2

    alert("A área do trapézio é igual a " + area+"cm²")
}

calcular()

