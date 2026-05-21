/******
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas [cite: 83]
Disciplina: Programação Front-End [cite: 84]
Professor: José Carlos Flores [cite: 85]
Turma: ADS3B [cite: 86]
Componentes:
- Sara Kerstin Miguel RA: 25363563 - 2
- Fernado Araujo Alvim RA: 25363470 -2 
- Daniela Da Silva Ferreira RA: 25356593-2
- Juliano Henrique Costa RA: 252921244-2
- Lucas De Freitas Ferreira De Oliveira RA: 25000914-2
- Pedro Rocha Reis RA: 25260842-2                               
Data: 24 de Maio de 2026
Descritivo: Escreva um programa que calcule a média de três notas fornecidas pelo usuário. [cite: 99, 144]
******/

import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';



export async function executarExercicio03(): Promise<void> {
    const rl = readline.createInterface({ input, output });

    try {
        console.clear();
        console.log("=========================================");
        console.log("EXERCÍCIO 3: Média de Três Notas");
        console.log("=========================================\n");

        
        const entrada1 = await rl.question("Digite a primeira nota: ");
        const nota1 = parseFloat(entrada1);

        
        const entrada2 = await rl.question("Digite a segunda nota: ");
        const nota2 = parseFloat(entrada2);

        
        const entrada3 = await rl.question("Digite a terceira nota: ");
        const nota3 = parseFloat(entrada3);

        
        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota2 < 0 || nota3 < 0) {
            console.log("\n[Erro]: Por favor, insira apenas notas numéricas válidas e maiores ou iguais a zero.");
        } else {
            
            const media = (nota1 + nota2 + nota3) / 3;
            
            
            console.log(`\nMédia final das notas: ${media.toFixed(2)}`);
        }

        console.log("\n-----------------------------------------");
        await rl.question("Pressione Enter para continuar..."); [74]
        
    } catch (error) {
        console.error("Ocorreu um erro durante a execução:", error);
    } finally {
        rl.close(); 
    }
}

if (require.main === module) {
    executarExercicio03();
}