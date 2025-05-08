// Calcular o total de páginas lidas.
function totalPaginasLidas(paginas) {
    let total = 0;
    for (let i = 0; i< paginas.length; i++){
        total += paginas[i];
    }
    return total;
}

// Contar quantos dias não houve leitura (valor 0)
function diasSemLeitura(paginas) {
    let totalSemLeitura = 0;
    for (let i = 0; i < paginas.length; i++) {
        if (paginas[i] === 0){
            totalSemLeitura++;
        }
    }
    return totalSemLeitura;
}

// Calcular a média de páginas lidas considerando todos os dias
function mediaDePaginasLidas(paginas) {
    return totalPaginasLidas(paginas) / paginas.length;
}

// Contar quantos dias a leitura foi superior a um valor informado.
function diasSuperior(paginas, valor) {
    let total = 0;
    for (let i = 0; i< paginas.length; i++) {
        if (paginas[i] > valor) {
            total++;
        }
    }
    return total;
}

// Verificar se houve leitura em todos os dias (nenhum valor 0).
function diasComLeituraTodosDias(paginas) {
    for (let i = 0; i < paginas.length; i++) {
        if (paginas[i] === 0) {
            return false;
        }
    }
    return true;
}

// Verificar se o leitor atingiu a meta mensal.

function atingiuMetaMensal (leitor) {
    if (leitor.totalPaginas >= leitor.metaMensal) {
        return true;
    }
    return false;
}

// Atualizar a quantidade de livros lidos, para 14.
function atualizarQuantidadeLivros(leitor, valorNovo) {
    leitor.livrosLidos = valorNovo;
    return leitor.livrosLidos;
}

// Gerar um resumo, verificando se a meta foi atingida, páginas lidas, meta mensal e gênero favorito
function gerarResumo(leitor) {
    // posso fazer alternativa criando uma variavel para ele, ou colocar direto a function
    // const metaAtingida = atingiuMetaMensal(leitor);
    return `${leitor.nome} ${atingiuMetaMensal(leitor) ? "atingiu" : "não atingiu"} sua meta mensal, leu ${leitor.totalPaginas} páginas e sua meta era de ${leitor.metaMensal} páginas. Seu gênero favorito é ${leitor.generoPreferido}.`
}

// Filtrar os leitores que preferem um gênero específico (Teste com Ficção).
function filtrarGeneroEspecifico (leitores, genero) {
    return leitores.filter(leitor => leitor.generoPreferido === genero);
}

// Calcular a média de páginas lidas por todos os leitores.
function calcularMediaPaginasTodosLeitores (leitores) {
    const totalPaginasDeLeitores = leitores.reduce(function(soma, leitor) {
        return soma + leitor.totalPaginas
    },0);

    return totalPaginasDeLeitores / leitores.length;
}

// Identificar o leitor que mais leu páginas.
function identificarLeitorMaisLido (leitores) {
    // aqui define o leitor da posição 0 de uma array, ou seja primeiro leitor
    let LeitorMaisLeitor = leitores[0];

    // fazer laço de comparação de posição 0 até final da array, garantindo que todos leitores sejam comparados
    for (let i = 0; i < leitores.length; i++){
        // aqui vai fazer if se o leitores atual da comparação for maior que o LeitorMaisLeitor, ele ira armazenar 
        // o leitor mais lido na variavel LeitorMaisLeitor
        if (leitores[i].totalPaginas > LeitorMaisLeitor.totalPaginas){
            LeitorMaisLeitor = leitores[i];
        }
    }
    return LeitorMaisLeitor;
}

// Ordenar os leitores com base na quantidade de livros lidos (do menor para o maior).
function ordenarLeitores (leitores) {
    // utilizar sort
    return leitores.sort((a, b) => a.livrosLidos - b.livrosLidos);
}

// Verificar se todos os leitores atingiram sua meta mensal.
function verificarMetaMensal (leitores) {
    for (let i = 0; i < leitores.length; i++){
        if (!atingiuMetaMensal(leitores[i])){
            return false;
        }
    }
    return true;

    /* podemos utilizar alternativa de .every()
    return leitores.every(atingiuMetaMensal);
    */
}

// Verificar se pelo menos um leitor atingiu sua meta mensal.
function verificarSeAlgumLeitorAtingiuMetaMensal (leitores) {
    // ele vai fazer loop para verificar cada leitor e ver se algum atingiu a meta mensal
    for (let i = 0; i < leitores.length; i++){
        // se algum leitor atingir a meta mensal, ele retorna true atravez da função que tinha criado na questão anterior
        if (atingiuMetaMensal(leitores[i])){
            return true;
        }
    }
    return false;
}

// Gerar um resumo para cada leitor no formato proposto:
function gerarResumoCadaLeitor(leitores) {
    // Cria um novo array com os resultados da chamada de uma função criada que é "gerarResumo" para cada elemento do array.
    return leitores.map(leitor => gerarResumo(leitor));
}

module.exports = {
    totalPaginasLidas,
    diasSemLeitura,
    mediaDePaginasLidas,
    diasSuperior,
    diasComLeituraTodosDias,
    atingiuMetaMensal,
    atualizarQuantidadeLivros,
    gerarResumo,
    filtrarGeneroEspecifico,
    calcularMediaPaginasTodosLeitores,
    identificarLeitorMaisLido,
    ordenarLeitores,
    verificarMetaMensal,
    verificarSeAlgumLeitorAtingiuMetaMensal,
    gerarResumoCadaLeitor
}