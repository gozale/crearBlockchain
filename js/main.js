const Block = require('./block');
const Blockchain = require('./blockchain');

let block = new Block(0,"lo q sea",null);
console.log(block);

const blockchain = new Blockchain("Hola a mi nueva cadena");
blockchain.addBlock("Data del segundo bloque");
blockchain.addBlock("Data del tercer bloque");

console.log(blockchain);