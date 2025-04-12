let kilosMorango = parseFloat(prompt("Digite quantos kilos de morango foram comprados"))
let kilosMaca = parseFloat(prompt("Digite quantos kilos de maçã que foram comprados"))

let valorMorango
let valorMaca
let kilosTotal = kilosMorango + kilosMaca

if (kilosTotal > 5) {
    valorMorango = 2.20
    valorMaca = 1.50
} else {
    valorMorango = 2.50
    valorMaca = 1.80
}

let precoMorango = valorMorango * kilosMorango
let precoMaca = valorMaca * kilosMaca
let precoTotal = precoMaca + precoMorango

if (kilosTotal > 8 || precoTotal > 25) {
    precoTotal = precoTotal - precoTotal / 100 * 10
}

alert("O preço total das frutas será " + precoTotal + " R$")
