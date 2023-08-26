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
let XP = 25360
let Nivel = " "

if (XP < 1000){
     Nivel = "Ferro"
}else if (XP >1000 && XP<= 2000){
     Nivel = "Bronze"
}else if (XP >2000 && XP<= 5000){
    Nivel = "Prata"
}else if (XP >5000 && XP<= 7000){
    Nivel = "Ouro"
}else if (XP >7000 && XP<= 8000){
   Nivel = "Platina"
}else if (XP >8000 && XP<= 9000){
    Nivel = "Ascendente"
}else if (XP >9000 && XP<= 10000){
   Nivel = "Imortal"
}else if (XP >10000){
   Nivel = "Radiante"
}



console.log ("O personagem "+ Nome + " ganhou um total de " + XP + "XP e sua classificacção de nível é " + Nivel)