/******
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B
Componentes:
25004000-1 - Ana Castela da Silva
25004001-2 - Pedro Alvares Cabral
25004001-3 - Roberto Carlos de Andrade
25004001-4 - Sergio Roberto Gularte
25004001-5 - Lauana Prado de Andrade
Data: 20 de Maio de 2026
Descritivo: 6 - Escreva um programa que leia 5 números do usuário e os armazene em um array, depois exiba todos os números.
******/

import * as readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query: string): Promise<string> => {
    return new Promise((resolve) => rl.question(query, resolve));
};

async function executarExercicio06(): Promise<void> {
    console.clear();
    console.log("========================================");
    console.log("EXERCÍCIO 6 - ARMAZENAR 5 NÚMEROS EM ARRAY");
    console.log("========================================\n");

    // Declaração e inicialização do array numérico conforme o enunciado
    const numeros: number[] = [];
    const QUANTIDADE_ALVO = 5;

    // Laço para leitura dos 5 números
    for (let i = 1; i <= QUANTIDADE_ALVO; i++) {
        let entradaValida = false;

        while (!entradaValida) {
            const entrada = await question(`Digite o ${i}º número: `);
            const numeroConvertido = parseFloat(entrada);

            if (isNaN(numeroConvertido)) {
                console.log("[Erro]: Valor inválido. Por favor, insira um número real ou inteiro.\n");
            } else {
                numeros.push(numeroConvertido);
                entradaValida = true;
            }
        }
    }

    // Exibição de todos os números armazenados no array
    console.log("\n========================================");
    console.log("Exibindo todos os números do array:");
    console.log("========================================");
    
    numeros.forEach((num, index) => {
        console.log(` Posicionamento [${index}]: ${num}`);
    });

    console.log("========================================");

    // Requisito obrigatório do fluxo do menu
    await question("Pressione Enter para voltar ao Menu Principal...");
    rl.close();
}

// Inicia o programa
executarExercicio06();
