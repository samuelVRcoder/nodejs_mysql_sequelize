const Produto = require('./produto'); 

( async () => {

const resultadoCreate = await Produto.create({
nome: 'mouse',
preco: 10,
descricao: 'Um mouse USB bonitão'
})
console.log(resultadoCreate);

})();



