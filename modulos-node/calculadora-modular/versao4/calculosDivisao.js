const { resto } = require("./calculosComplementares")

const div = (a, b) => a / b

const textoDivisao = (a, b) => `A divisão de ${a} por ${b} é ${div(a, b)} e o resto é ${resto(a, b)}`

module.exports = { textoDivisao }