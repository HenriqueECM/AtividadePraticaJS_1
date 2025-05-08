const {
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
    gerarResumoCadaLeitor,
    atualizarLeitor,
    resumoFernanda
    
} = require("./analise");

const paginasLidas = [10, 20, 0, 15, 30, 5, 0, 25, 0, 25, 54, 18, 14, 0];
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
    metaMensal: 600
};
console.log("===============================================");
console.log("Etapa 2 - Análise de um leitor específico");
console.log("===============================================");
console.log("A leitora Ana atingiu meta mensal? ", atingiuMetaMensal(leitores));
atualizarQuantidadeLivros(leitores, 14);
console.log("Quantidade de livros lidos atualizados: ", leitores.livrosLidos);
console.log("Resumo do leitor: ", gerarResumo(leitores));

// aqui vai ser criado uma array de objetos
const leitoresNovos = [
    {
        nome: "Bruno", idade: 30, generoPreferido: "Terror", livrosLidos: 8, totalPaginas: 320,
        metaMensal: 400
    },

    {
        nome: "Clara", idade: 22, generoPreferido: "Romance", livrosLidos: 15, totalPaginas: 840,
        metaMensal: 800
    },
    {
        nome: "Davi", idade: 28, generoPreferido: "Ficção", livrosLidos: 4, totalPaginas: 150,
        metaMensal: 200
    },
    {
        nome: "Eva", idade: 26, generoPreferido: "Ficção", livrosLidos: 7, totalPaginas: 400,
        metaMensal: 500
    },
    {
        nome: "Felipe", idade: 21, generoPreferido: "Aventura", livrosLidos: 9, totalPaginas: 360,
        metaMensal: 350
    },
    {
        nome: "Fernanda", idade: 27, generoPreferido: "Drama", livrosLidos: 11, totalPaginas: 670,
        metaMensal: 700
    },
    {
        nome: "Heitor", idade: 24, generoPreferido: "Terror", livrosLidos: 5, totalPaginas: 230,
        metaMensal: 300
    },
    {
        nome: "Isabela", idade: 29, generoPreferido: "Romance", livrosLidos: 6, totalPaginas: 310,
        metaMensal: 280
    },
    {
        nome: "João", idade: 23, generoPreferido: "Ficção", livrosLidos: 13, totalPaginas: 710,
        metaMensal: 650
    }
];

// aqui vou fazer uma nova "array", sem modificar o original e adicionar o objeto que quero dentro de uma nova array com outros objetos
const leitoresAtualizados = [leitores, ...leitoresNovos];

console.log("===============================================");
console.log("Etapa 3 - Análise de múltiplos leitores");
console.log("===============================================");
console.log("\nLeitores atualizados: ", leitoresAtualizados);
console.log("\nLeitores filtrado por genero Romance: ",filtrarGeneroEspecifico(leitoresAtualizados, "Romance"));
console.log("\nMédia de páginas lidas por todos leitores: ", calcularMediaPaginasTodosLeitores(leitoresAtualizados));
console.log("\nLeitor que mais leu páginas foi: ", identificarLeitorMaisLido(leitoresAtualizados));
console.log("\nLeitores ordenados de forma crescente por livros lidos: ", ordenarLeitores(leitoresAtualizados));
console.log("\nTodos os leitores atingiram meta mensal? ", verificarMetaMensal(leitoresAtualizados));
console.log("\nPelo menos um leitor atingiu a sua meta mensal? ", verificarSeAlgumLeitorAtingiuMetaMensal(leitoresAtualizados));
console.log("\nResumo de todos os leitores: ", gerarResumoCadaLeitor(leitoresAtualizados));
console.log("\nAtualizando dados da fernanda: ", atualizarLeitor (leitoresAtualizados, "Fernanda", 12, 750));
console.log("\nResumo da Fernanda: ", resumoFernanda(leitoresAtualizados));