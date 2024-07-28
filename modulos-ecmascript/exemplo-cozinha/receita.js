export default function (ingredientes, acao1, acao2) {
    let retorno = ''
    
    for(const ingrediente of ingredientes) {
        retorno += acao1(ingrediente) + '\n'
        retorno += acao2(ingrediente) + '\n'
    }
    retorno += 'Acabou'
    return retorno
}