/******
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas [cite: 186]
Disciplina: Programação Front-End [cite: 187]
Professor: José Carlos Flores [cite: 188]
Turma: ADS3B [cite: 189]
Componentes:
            RA:25356593-2- Daniela Da Silva Ferreira
            RA:25363470-2- Fernado Araujo Alvim
            RA:252921244-2- Juliano Henrique Costa 
            RA:25000914-2- Lucas De Freitas Ferreira De Oliveira
            RA:25260842-2- Pedro Rocha Reis
            RA:25363563-2- Sara Kerstin Miguel
Data: 20 de Maio de 2026
Descritivo: 5 - Escreva um programa que exiba apenas os números pares de 1 a 20. [cite: 249]
******/

import * as readline from 'readline';


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