/******
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B
Componentes:
            RA:25356593-2- Daniela Da Silva Ferreira
            RA:25363470-2- Fernado Araujo Alvim
            RA:252921244-2- Juliano Henrique Costa 
            RA:25000914-2- Lucas De Freitas Ferreira De Oliveira
            RA:25260842-2- Pedro Rocha Reis
            RA:25363563-2- Sara Kerstin Miguel
Data: 20 de Maio de 2026
Descritivo: 4 - Faça um programa que converta uma temperatura em graus Celsius para Fahrenheit, utilizando a fórmula: F = (C * 9/5) + 32.
******/

import * as readline from 'readline';



// Configuração da interface de leitura de dados do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Promisificação do método question para permitir o uso de async/await de forma limpa
const question = (query: string): Promise<string> => {
    return new Promise((resolve) => rl.question(query, resolve));
};

async function executarExercicio04(): Promise<void> {
    console.clear();
    console.log("========================================");
    console.log("EXERCÍCIO 4 - CONVERSOR CELSIUS -> FAHRENHEIT");
    console.log("========================================\n");

    try {
        // Solicitação e captura do dado de entrada do usuário
        const entrada: string = await question("Digite a temperatura em graus Celsius (°C): ");
        
        // Conversão do dado de entrada de string para número flutuante
        const celsius: number = parseFloat(entrada);

        // Validação básica para garantir que a entrada é de fato um número válido
        if (isNaN(celsius)) {
            console.log("\n[Erro]: Por favor, insira um valor numérico válido para a temperatura.");
        } else {
            // Aplicação da fórmula matemática solicitada pelo enunciado
            const fahrenheit: number = (celsius * 9 / 5) + 32;

            // Apresentação do resultado formatado no console com precisão de duas casas decimais
            console.log(`\nResultado da conversão:`);
            console.log(`${celsius.toFixed(1)}°C é equivalente a ${fahrenheit.toFixed(1)}°F`);
        }
    } catch (error) {
        console.log("\nOcorreu um erro inesperado durante a execução do programa.");
    } finally {
        // Exigência do roteiro: Aguardar o Enter antes de retornar ao menu principal
        console.log("\n========================================");
        await question("Pressione Enter para continuar...");
        rl.close();
    }
}

// Inicia a execução do exercício
executarExercicio04();