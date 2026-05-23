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
- Lucas De Freitas Ferreira De Oliveira RA: 25000914-2
- Pedro Rocha Reis RA: 25260842-2                               
Data: 24 de Maio de 2026
Descritivo: Escreva um programa que calcule a soma de dois números.
******/
import * as readline from "readline";

export function executarExercicio01(rl: readline.Interface, menu: () => void): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 1: Soma de dois números");
  console.log("=========================================\n");

  rl.question("Digite o primeiro número inteiro: ", (entrada1) => {
    const numero1 = parseInt(entrada1, 10);

    rl.question("Digite o segundo número inteiro: ", (entrada2) => {
      const numero2 = parseInt(entrada2, 10);

      if (isNaN(numero1) || isNaN(numero2)) {
        console.log("\n[Erro]: Digite apenas números inteiros válidos.");
      } else {
        console.log(`\nResultado da soma: ${numero1 + numero2}`);
      }

      rl.question("\nPressione Enter para voltar ao menu...", () => {
        menu();
      });
    });
  });
}