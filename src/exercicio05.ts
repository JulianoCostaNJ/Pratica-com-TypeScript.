/******
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas [cite: 186]
Disciplina: Programação Front-End [cite: 187]
Professor: José Carlos Flores [cite: 188]
Turma: ADS3B [cite: 189]
Componentes:
25004000-1 - Ana Castela da Silva [cite: 191, 192]
25004001-2 - Pedro Alvares Cabral [cite: 193, 194]
25004001-3 - Roberto Carlos de Andrade [cite: 195, 196]
25004001-4 - Sergio Roberto Gularte [cite: 197, 198]
25004001-5 - Lauana Prado de Andrade [cite: 199, 200]
Data: 20 de Maio de 2026
Descritivo: 5 - Escreva um programa que exiba apenas os números pares de 1 a 20. [cite: 249]
******/

import * as readline from 'readline';

/* BREVE EXPLICAÇÃO DE COMO O CÓDIGO RESOLVE O PROBLEMA PROPOSTO: 
  O programa utiliza uma estrutura de repetição contada ('for') para iterar por todos 
  os números inteiros presentes no intervalo fechado de 1 a 20.
  A cada iteração, o algoritmo aplica o operador módulo ('%'), que calcula o resto da 
  divisão inteira do número corrente por 2. Se o resto for exatamente igual a zero (0), 
  o número é classificado logicamente como PAR e enviado para exibição no console.
  Após listar todos os valores correspondentes, a interface 'readline' suspende o 
  encerramento automático e aguarda que o usuário pressione a tecla Enter, cumprindo 
  o requisito de fluxo do menu principal.
*/

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const aguardarEnter = (query: string): Promise<string> => {
    return new Promise((resolve) => rl.question(query, resolve));
};

async function executarExercicio05(): Promise<void> {
    console.clear();
    console.log("========================================");
    console.log("EXERCÍCIO 5 - NÚMEROS PARES DE 1 A 20");
    console.log("========================================\n");
    console.log("Lista de números pares encontrados:");
    
    let contadorPares = 0;

    // Laço de repetição que percorre o intervalo de 1 a 20 conforme o enunciado [cite: 249]
    for (let i: number = 1; i <= 20; i++) {
        // Validação lógica: se o resto da divisão por 2 for 0, o número é par
        if (i % 2 === 0) {
            console.log(` -> Número: ${i}`);
            contadorPares++;
        }
    }

    console.log(`\nTotal de números exibidos: ${contadorPares}`);
    console.log("========================================");

    // Requisito obrigatório: Mostrar o resultado e aguardar Enter para retornar 
    await aguardarEnter("Pressione Enter para voltar ao Menu Principal...");
    rl.close();
}

// Inicia o programa
executarExercicio05();