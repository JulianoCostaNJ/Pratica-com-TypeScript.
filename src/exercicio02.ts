/******
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas [cite: 83]
Disciplina: Programação Front-End [cite: 84]
Professor: José Carlos Flores [cite: 85]
Turma: ADS3B [cite: 86]
Componentes: [cite: 87]
- Sara Kerstin Miguel RA: 25363563 - 2
- Fernado Araujo Alvim RA: 25363470 -2 
- Daniela Da Silva Ferreira RA: 25356593-2
- Juliano Henrique Costa RA: 252921244-2
- Lucas De Freitas Ferreira De Oliveira RA: 25000914-2
- Pedro Rocha Reis RA: 25260842-2                               
Data: 24 de Maio de 2026 [cite: 98]
Descritivo: Escreva um programa que leia um número inteiro e informe se ele é par ou ímpar. 
******/

import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';


export async function executarExercicio02(): Promise<void> {
    const rl = readline.createInterface({ input, output });

    try {
        console.clear();
        console.log("=========================================");
        console.log("EXERCÍCIO 2: Verificar Par ou Ímpar");
        console.log("=========================================\n");

        
        const entrada = await rl.question("Digite um número inteiro: ");
        const numero = parseInt(entrada, 10);

    
        if (isNaN(numero) || !Number.isInteger(numero)) {
            console.log("\n[Erro]: Por favor, insira apenas um número inteiro válido.");
        } else {
            
            if (numero % 2 === 0) {
                console.log(`\nO número ${numero} é: PAR`);
            } else {
                console.log(`\nO número ${numero} é: ÍMPAR`);
            }
        }

        console.log("\n-----------------------------------------");
        await rl.question("Pressione Enter para continuar..."); [46, 74]
        
    } catch (error) {
        console.error("Ocorreu um erro durante a execução:", error);
    } finally {
        rl.close(); 
    }
}


if (require.main === module) {
    executarExercicio02();
}