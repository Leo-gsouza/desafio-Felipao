

let resultado = saldoVitorias(150,12)
let nivel = " "

function saldoVitorias(vitorias,derrotas){
    return vitorias - derrotas
}

if (resultado<=10){
    nivel = "FERRO"
}else if (resultado>10 && resultado<=20){
    nivel = "BRONZE"
}else if (resultado>20 && resultado<=50){
    nivel = "PRATA"
}else if (resultado>50 && resultado<=80){
    nivel = "OURO"
}else if (resultado>80 && resultado<=90){
    nivel = "DIAMANTE"
}else if (resultado>90 && resultado<=100){
    nivel = "LENDARIO"
}else if (resultado>101){
    nivel = "IMORTAL"
}
console.log (`O Herói tem o saldo de ${resultado} vitorias e está no nível de ${nivel}`)