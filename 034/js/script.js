let X = parseFloat(prompt("Digite o valor de X"))
let Y = parseFloat(prompt("Digite o valor de Y"))

let Z = X * Y + 5

let resposta 

if (Z <= 0) {
    resposta = "A"
} else if ( Z <= 100){
    resposta = "B"
} else {
    resposta = "C"
}

alert("O valor de Z é " + Z + " portando a respota é " + resposta)

// Z = 11, resp B
// Z = 455, resp C
// Z = -2, resp A
// Z = -5, resp A
// Z = 155, resp C
