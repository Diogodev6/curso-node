import chalk from "chalk"

const azul = (texto) => console.log(chalk.blue(texto))
const aviso = (texto) => console.log(chalk.bgYellow.bold(texto))
const erro = (texto) => console.log(chalk.bgRed.bold.italic(texto))


azul('Grêmiooooo')
aviso('Eu preciso te falar....')
erro('Isso é um erro!!!!')