const Produto = require('./produto'); 

(async () => {

const produtos = await Produto.findAll();
console.log(produtos);

})();

(async () => {

const produto = await Produto.findByPk(1);
console.log(produto)

})();

(async () => {

const produto = await Produto.findByPk(2);
//console.log(produto);
produto.nome = "Mouse Top";
const resultadoSave = await produto.save();
console.log(resultadoSave);

})();

(async () => {


Produto.destroy({ where: { id: 1 }});

//const produto = await Produto.findByPk(1);
//produto.destroy();

})();
