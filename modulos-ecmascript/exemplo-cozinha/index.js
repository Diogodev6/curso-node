import cozinha from "./cozinha/principal.js";
import receita from "./receita.js";
import refeicao from "./refeicao.js";

const r = receita(['Arroz', 'Feijão'], cozinha.assar, cozinha.cortar)
console.log(r)

const vouComerNoAlmoco = refeicao('Almoço')
const vouComerNoJantar = refeicao('Jantar')

vouComerNoAlmoco('Arroz', 'Feijão', 'Batata')
vouComerNoJantar('Arroz', 'Feijão', 'Alface')

