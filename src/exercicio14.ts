/**************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B
Data: 24 de Maio de 2026

Componentes:
            RA:25356593-2- Daniela Da Silva Ferreira
            RA:25363470-2- Fernado Araujo Alvim
            RA:25291244-2- Juliano Henrique Costa 
            RA:25260842-2- Pedro Rocha Reis
            RA:25363563-2- Sara Kerstin Miguel
Descritivo: escreva um programa que solicite um numero inteiro e exiba a tabuada desse número de 1 a 10.
***************************/
import * as readline from "readline";
export function executarExercicio14(
  rl: readline.Interface,
  menu: () => void,
): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 14: Tabuada");
  console.log("=========================================\n");
    rl.question("Digite um número inteiro para ver a tabuada: ", (entrada) => {
      const numero = parseInt(entrada);
      if (isNaN(numero)) {
        console.log("Por favor, digite um número inteiro válido.");
        rl.question("\nPressione Enter para voltar ao menu...", () => {
          menu();
        });
      } else {
        console.log(`\nTabuada do ${numero}:`);
        for (let i = 1; i <= 10; i++) {
          console.log(`${numero} x ${i} = ${numero * i}`);
        }
        rl.question("\nPressione Enter para voltar ao menu...", () => {
          menu();
        });
      }
    });
}