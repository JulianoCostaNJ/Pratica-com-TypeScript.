/******
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B
Componentes:
- Sara Kerstin Miguel RA: 25363563 - 2
- Fernado Araujo Alvim RA: 25363470 -2 
- Daniela Da Silva Ferreira RA: 25356593-2
- Juliano Henrique Costa RA: 252921244-2
- Lucas De Freitas Ferreira De Oliveira RA: 25000914-2
- Pedro Rocha Reis RA: 25260842-2                               
Data: 24 de Maio de 2026
Descritivo: Escreva um programa que calcule a soma de dois números.
******/

import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';


export async function executarExercicio01(): Promise<void> {
    const rl = readline.createInterface({ input, output });

    try {
        console.clear();
        console.log("=========================================");
        console.log("EXERCÍCIO 1: Soma de dois números");
        console.log("=========================================\n");

        
        const primeiraEntrada = await rl.question("Digite o primeiro número inteiro para a soma: ");
        const numero1 = parseInt(primeiraEntrada, 10);

        
        const segundaEntrada = await rl.question("Digite o segundo número inteiro para a soma: ");
        const numero2 = parseInt(segundaEntrada, 10);

        
        if (isNaN(numero1) || !Number.isInteger(numero1) || isNaN(numero2) || !Number.isInteger(numero2)) {
            console.log("\n[Erro]: Por favor, insira apenas números inteiros válidos.");
        } else {
            
            const soma = numero1 + numero2;
            console.log(`\nResultado da soma: ${soma}`);
        }

        console.log("\n-----------------------------------------");
        await rl.question("Pressione Enter para continuar...");
        
    } catch (error) {
        console.error("Ocorreu um erro durante a execução:", error);
    } finally {
        rl.close(); 
    }
}

if (require.main === module) {
    executarExercicio01();
}