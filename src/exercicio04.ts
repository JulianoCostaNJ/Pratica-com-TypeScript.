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
Descritivo: 4 - Faça um programa que converta uma temperatura em graus Celsius para Fahrenheit, utilizando a fórmula: F = (C * 9/5) + 32.
******/

import * as readline from 'readline';

/* BREVE EXPLICAÇÃO DE COMO O CÓDIGO RESOLVE O PROBLEMA PROPOSTO:
  O programa utiliza a interface 'readline' do Node.js para criar um fluxo de entrada 
  e saída via terminal de forma assíncrona. Ele solicita que o usuário insira um valor 
  numérico correspondente à temperatura em graus Celsius (C). 
  Após a captura, o valor inserido (que chega originalmente como String) é submetido a uma 
  função de conversão ('parseFloat') para assegurar o tipo numérico e evitar erros de cálculo.
  O algoritmo aplica estritamente a fórmula matemática estipulada no enunciado: F = (C * 9/5) + 32.
  Por fim, o resultado formatado em graus Fahrenheit (F) é impresso no console com duas casas 
  decimais, e o programa aguarda o acionamento da tecla Enter antes de encerrar e permitir 
  o retorno ao Menu Principal do sistema.
*/

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