let tipo = prompt("Deseja colocar Gasolina ou Alcool? (G ou A)")
let litros = parseFloat(prompt("Digite a quantidade de litros que deseja colocar"))

let desconto 
let valorTotal

if (tipo == "G") {
    valorTotal = litros * 3.30
    if (litros > 20) {
        desconto = valorTotal / 100 * 5
        valorTotal =  valorTotal - desconto

    } else {
        desconto = valorTotal / 100 * 3
        valorTotal = valorTotal - desconto

    }
} else {
    valorTotal = litros * 2.90
    if (litros > 20) {
        desconto = valorTotal / 100 * 5
        valorTotal = valorTotal - desconto

    } else {
        desconto = valorTotal / 100 * 3
        valorTotal = valorTotal - desconto

    }
}

alert("O preço final é "+ valorTotal)
