const {
    totalPaginasLidas,
    diasSemLeitura,
    mediaDePaginasLidas,
    diasSuperior,
    diasComLeituraTodosDias,
    atingiuMetaMensal,
    atualizarQuantidadeLivros
} = require("./analise");

const paginasLidas = [10, 20, 0, 15, 30, 5, 0, 25, 0, 25, 54, 18, 14,0];
console.log("===============================================");
console.log("Etapa 1 - Análise de uma sequência de leituras");
console.log("===============================================");
console.log("Total de paginas lidas: ", totalPaginasLidas(paginasLidas));
console.log("Dias sem Leitura: ", diasSemLeitura(paginasLidas));
console.log("Média de páginas lidas por dia: ", mediaDePaginasLidas(paginasLidas));
console.log("Dias com leitura superior a 20: ", diasSuperior(paginasLidas, 15));
console.log("Houve leitura em todos os dias? ", diasComLeituraTodosDias(paginasLidas));

const leitores = { 
    nome: "Ana", 
    idade: 25, 
    generoPreferido: "Ficção", 
    livrosLidos: 12, 
    totalPaginas: 600, 
    metaMensal:600 
};
console.log("===============================================");
console.log("Etapa 2 - Análise de um leitor específico");
console.log("===============================================");
console.log("A leitora Ana atingiu meta mensal? ", atingiuMetaMensal(leitores));
atualizarQuantidadeLivros(leitores, 14);
console.log("Quantidade de livros lidos atualizados: ", leitores.livrosLidos);