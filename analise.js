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
    calcularMediaPaginasTodosLeitores
}