//Crie uma váriavel para armazenar o nome e a quantidade de expêriencia (XP) de um heroi, 
//depois utilize uma estrutura de decisão para apresentar algumas das mensagens abaixo:
//XP menor do que 1000 = FERRO
//XP estiver entre  1001 e 2000 = BRONZE
//XP estiver entre  2001 e 5000 = PRATA
//XP estiver entre  5001 e 7000 = OURO
//XP estiver entre  7001 e 8000 = PLATINA
//XP estiver entre  8001 e 9000 = ASCENDENTE 
//XP estiver entre  9001 e 10000 = IMORTAL
//XP maior ou igual a  10001  = RADIANTE



console.log ("Desafio Felipão da DIO.ME")
let Nome = "Lezard"
let XP = 700
let Nivel = " "
let TotalXP = 0

for (let i = 1; i <= 5; i++){
    console.log( Nome +" ganhou na "+ i +"ª batalha "+ XP+"XP")
    TotalXP += XP
    XP += 285
}

if (XP < 1000){
     Nivel = "Ferro"
}else if (TotalXP >1000 && TotalXP<= 2000){
     Nivel = "Bronze"
}else if (TotalXP >2000 && TotalXP<= 5000){
    Nivel = "Prata"
}else if (TotalXP >5000 && TotalXP<= 7000){
    Nivel = "Ouro"
}else if (TotalXP >7000 && TotalXP<= 8000){
   Nivel = "Platina"
}else if (TotalXP >8000 && TotalXP<= 9000){
    Nivel = "Ascendente"
}else if (TotalXP >9000 && TotalXP<= 10000){
   Nivel = "Imortal"
}else if (TotalXP >10000){
   Nivel = "Radiante"
}



console.log ("O personagem "+ Nome + " ganhou um total de " + TotalXP + "XP e sua classificacção de nível é " + Nivel)