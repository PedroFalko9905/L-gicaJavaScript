let salarioHora = parseFloat(prompt("Digite o salário por hora"))
let horasMes = parseInt(prompt("Digite o total de horas trabalhadas no mês")) 

let salarioTotal

if (horasMes > 160) {
    salarioTotal = (horasMes - 160) * (salarioHora * 1.5) + salarioHora * 160
} else {
    salarioTotal = salarioHora * horasMes
}

alert("O salário no final do mês vai ser "+salarioTotal+" R$")
