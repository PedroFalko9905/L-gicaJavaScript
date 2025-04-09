let anoNascimento = parseInt(prompt("Digite seu ano de nascimento"))
let anoAtual = parseInt(prompt("Digite o ano atual"))

let idade = anoAtual - anoNascimento

if(idade > 15) {
    alert("Essa pessoa pode votar")
}else{
    alert("Essa pessoa não pode votar")
}
