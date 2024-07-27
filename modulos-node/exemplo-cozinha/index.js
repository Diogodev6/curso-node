// const acoes = require("./cozinha/acoesCozinhar")
// const { alimentos } = require('./cozinha/alimentos')

// console.log(acoes.cozinhar(alimentos[0]))

// const cozinha = require("./cozinha")
// console.log(cozinha.ferver(cozinha.alimentos[2]))

// const receita = require("./receita")
// console.log(receita(['Carne', 'Alface'], cozinha.cortar, cozinha.assar))

const refeicao = require("./refeicao")('Almoço')
refeicao('Arroz', 'Feijão', 'Batata')
const refeicao2 = require("./refeicao")('Jantar')
refeicao2('Arroz', 'Feijão', 'Alface')
