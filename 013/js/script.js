let idadeAnos = prompt("Digite quantos anos voçê tem: ")
let idadeMeses = prompt("Digite quantos meses tem desde o seu ultimo aniversário: ")
let idadeDias = prompt("Digite quantos dias se passaram desde o seu ultimo mêsversário: ")

idadeAnos = parseInt(idadeAnos)
idadeMeses = parseInt(idadeMeses)
idadeDias = parseInt(idadeDias)

let diasAnos = idadeAnos * 365
let diasMes = idadeMeses * 30
let totalDias = diasAnos + diasMes + idadeDias

alert("Sua idade só em dias são "+ totalDias+ " Dias")



