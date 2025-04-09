let votosBrancos = prompt("Digite a quantidade de votos em branco: ")
let votosNulos = prompt("Digite a quantidade de votos nulos: ")
let votosValidos = prompt("Digite a quantidade de votos validos: ")

votosBrancos = parseInt(votosBrancos)
votosNulos = parseInt(votosNulos)
votosValidos = parseInt(votosValidos)

let votosTotais = votosBrancos + votosNulos + votosValidos

let porceBrancos = votosBrancos / votosTotais * 100
let porceNulos = votosNulos / votosTotais * 100
let porceValidos = votosValidos / votosTotais * 100

alert("O total de votos são "+ votosTotais+ " Sendo "+porceBrancos+"% em branco, "+ porceNulos+"% são nulos e "+porceValidos+ "% são validos" )
