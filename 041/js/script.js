
let nota1 = parseFloat(prompt("Digite a primeira nota"))
let nota2 = parseFloat(prompt("Digite a segunta nota"))
let nota3 = parseFloat(prompt("Digite a terceira nota"))
let mediaExercicio = parseFloat(prompt("Digite a media dos exercicios"))

let mediaDeAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicio) / 7
let notaFinal

switch (true) {
    case mediaDeAproveitamento >= 9:
        notaFinal = "A"
        break
    case mediaDeAproveitamento >= 7.5 && mediaDeAproveitamento < 9:
        notaFinal = "B"
        break
    case mediaDeAproveitamento >= 6 && mediaDeAproveitamento < 7.5:
        notaFinal = "C"
        break
    default:
        notaFinal = "D"
        break
}

alert("A nota final é " + notaFinal)
