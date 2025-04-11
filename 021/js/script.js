let horaInicio = parseInt(prompt("Digite a hora que a partida começou"))
let horaFinal = parseInt(prompt("Digite a hora que a partida acabou"))

let tempoPartida

if (horaInicio>horaFinal) {
    tempoPartida = 24 - horaInicio + horaFinal
} else {
    tempoPartida = horaFinal - horaInicio
}

alert("O tempo de partida foi de "+tempoPartida+ " horas")
