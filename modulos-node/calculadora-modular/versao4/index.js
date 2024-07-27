const { soma, sub, texto } = require("./calculosBasicos")
const complementares = require("./calculosComplementares")
const { pot, resto } = complementares
const textoConflitante = complementares.texto

const { textoDivisao } = require('./calculosDivisao')

const x = 20
const y = 3

console.log(soma(x, y))
console.log(sub(x, y))
console.log(texto)

console.log(pot(x, y))
console.log(resto(x, y))
console.log(textoConflitante)

console.log(textoDivisao(x, y))