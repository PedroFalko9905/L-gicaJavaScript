let num1 = parseInt(prompt("Digite o primeiro número"))
let num2 = parseInt(prompt("Digite o segundo número"))
let num3 = parseInt(prompt("Digite o terceiro número"))

let soma 

if (num1 > num3 && num2 > num3) {
    soma = num1 + num2
} else if (num1 > num2 && num3 > num2) {
    soma = num1 + num3
} else {
    soma = num2 + num3
}

alert("A soma dos dois números maiores seria "+ soma)
