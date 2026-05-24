/******
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas 
Disciplina: Programação Front-End 
Professor: José Carlos Flores 
Turma: ADS3B 
Componentes:
- Sara Kerstin Miguel RA: 25363563 - 2
- Fernado Araujo Alvim RA: 25363470 -2 
- Daniela Da Silva Ferreira RA: 25356593-2
- Juliano Henrique Costa RA: 25291244-2
- Pedro Rocha Reis RA: 25260842-2                               
Data: 24 de Maio de 2026
Descritivo: Escreva um programa que calcule a média de três notas fornecidas pelo usuário.
******/

import * as readline from "readline";

export function executarExercicio03(rl: readline.Interface, menu: () => void): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 3: Média de Três Notas");
  console.log("=========================================\n");

  rl.question("Digite a primeira nota: ", (entrada1) => {
    const nota1 = parseFloat(entrada1);

    rl.question("Digite a segunda nota: ", (entrada2) => {
      const nota2 = parseFloat(entrada2);

      rl.question("Digite a terceira nota: ", (entrada3) => {
        const nota3 = parseFloat(entrada3);

        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
          console.log("\n[Erro]: Digite apenas notas válidas.");
        } else {
          const media = (nota1 + nota2 + nota3) / 3;
          console.log(`\nMédia final: ${media.toFixed(2)}`);
        }

        rl.question("\nPressione Enter para voltar ao menu...", () => {
          menu();
        });
      });
    });
  });
}