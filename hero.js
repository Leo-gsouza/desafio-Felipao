class hero{
    constructor (nome,idade,tipo){
        this.nome = nome
        this.idade =idade
        this.tipo = tipo 
    }
     
    personagem(){
        console.log (`O heroi  ${this.nome} que tem ${this.idade} anos e pertence a classe de ${this.tipo} `)
    }

    atacar(){
        if(this.tipo === "guerreiro"){
            console.log ("atacou usando espada")
        }else if(this.tipo === "mago"){
            console.log ("atacou usando magia")
        }else if (this.tipo === "monge"){
            console.log ("atacou usando artes marciais")
        }else if (this.tipo === "ninja"){
            console.log ("atacou usando shuriken")
        }else{
            console.log ("fugiu da batalha, pois não sabe lutar")
        }
    }

}


  heroi = new hero("Lucian",19,"guerreiro") 

  heroi.personagem() + heroi.atacar()
   
