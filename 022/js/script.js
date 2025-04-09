let macaTotal = prompt("Digite o total de maçãs")


if (macaTotal > 11) {
    precoMaca = 1.00

} else {
    precoMaca = 1.30
}

let valorTotal = macaTotal * precoMaca

alert("O custo das maçãs seria "+ valorTotal)
