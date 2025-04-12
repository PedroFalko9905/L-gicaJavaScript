let login = parseInt(prompt("Digite o código do usuário"))

if (login != 1234) {
    alert("Usuário invalido!")
} else {
    let senha = parseInt(prompt("Digite a senha"))

    if (senha != 9999) {
        alert("Senha incorreta")
    } else {
        alert("Acesso permitio")
    }
}

