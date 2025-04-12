let timeA = prompt("Digite o nome do primeiro time")
let golsTimeA = parseInt(prompt("Digite a quantidade de gols feitos pelo primeiro time"))
let timeB = prompt("Digite o nome do segundo time")
let golsTimeB = parseInt(prompt("Digite a quantidade gols feitos pelo segundo time"))

if (golsTimeA > golsTimeB) {
    alert("O time vencedor foi o "+timeA)
} else if(golsTimeB > golsTimeA) {
    alert("O time vencedor foi o "+ timeB)
} else {
    alert("O resultado da partida foi um empate")
}
