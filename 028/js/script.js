let num1 = parseInt(prompt("Digite o primeiro número"))
let num2 = parseInt(prompt("Digite o segundo número"))
let num3 = parseInt(prompt("Digite o terceiro número"))

if (num1 > num2 && num1 > num3) {
    alert("O número maior é "+ num1)
} else if (num2 > num1 && num2 > num3){
    alert("O número maior é "+ num2)
} else {
    alert("O número maior é "+ num3)
}
