let saldo = parseFloat(prompt("Digite o seu saldo"))
let debito = parseFloat(prompt("Digite o valor total de debitos feitos"))
let credito = parseFloat(prompt("Digite o seu limite no crédito"))

let saldoAtual = saldo - debito + credito

if (saldoAtual >= 0) {
    alert("Seu saldo atual é de "+ saldoAtual+" R$, portando seu saldo é positivo")
} else {
    alert("Seu saldo atual é de "+saldoAtual+" R$, portando seu saldo é negativo")
}
