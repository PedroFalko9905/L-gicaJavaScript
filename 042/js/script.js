
let anoDeNascimento = parseInt(prompt("Digite o ano que o funcionário nasceu"))
let anoDeIngresso = parseInt(prompt("Digite o ano que o funcionário ingressou na empresa"))
let anoAtual = parseInt(prompt("Digite o ano atual"))

let idade = anoAtual - anoDeNascimento
let tempoEmpresa = anoAtual - anoDeIngresso
let aposentadoria

switch (true){
    case idade >= 65:
        aposentadoria = "Aposentadoria aprovada"
    case tempoEmpresa >= 30:
        aposentadoria = "Aposentadoria aprovada"
    case idade >= 60 && tempoEmpresa >= 25:
        aposentadoria = "Aposentadoria aprovada"
    default:
        aposentadoria = "Aposentadoria não aprovada"
}

