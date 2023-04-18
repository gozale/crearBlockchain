const SHA256 = require('crypto-js/sha256');

class Block {
    //Index = posicion del bloque en la cadena
    //data = el contenido de la cadena
    //previoushash = valor del bloque anterior
    //date = fecha de creacion del bloque
    //hash = 

    constructor(index,data,previousHash=''){
        this.index = index;
        this.data = data;
        this.previousHash = previousHash;
        this.date = new Date();
        this.hash = this.createdHash();
    }

    createdHash(){
        const originalChain = `${this.index} ${this.data} ${this.date}`;
        return SHA256(originalChain).toString();
    }

    mine(dif){
        while(this.hash.startsWith(dif)){
            this.nounce++;
            this.hash = this.createdHash();
        }
    }
}

module.exports = Block;

//Cifrados
//simetricos y asimetricos

//SHA (algoritmo simetrico e irreversible)