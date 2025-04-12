let homem1 = parseInt(prompt("Digite a idade do primeiro homem"))
let homem2 = parseInt(prompt("Digite a idade do segundo homem"))
let mulher1 = parseInt(prompt("Digite a idade da primeira mulher"))
let mulher2 = parseInt(prompt("Digite a idade da segunda mulher"))

let homemMaisVelho
let homemMaisNovo

if (homem1 > homem2) {
    if(mulher1 < mulher2) {
        homemMaisVelho = homem1 + mulher1
        homemMaisNovo = homem2 + mulher2
    } else {
        homemMaisVelho = homem1 + mulher2
        homemMaisNovo = homem2 + mulher1
    }
} else {
    if(mulher1 < mulher2) {
        homemMaisVelho = homem2 + mulher1
        homemMaisNovo = homem1 + mulher2
    } else {
        homemMaisVelho = homem2 + mulher2
        homemMaisNovo = homem1 + mulher1
    }
}

alert(`O homem mais velho com a mulher mais nova com idade somado ficaria ${homemMaisVelho} e o homem mais novo com a mulher mais velha ficaria ${homemMaisNovo}`)
