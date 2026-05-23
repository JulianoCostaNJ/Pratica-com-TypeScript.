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
            RA:25000914-2- Lucas De Freitas Ferreira De Oliveira
            RA:25260842-2- Pedro Rocha Reis
            RA:25363563-2- Sara Kerstin Miguel
Descritivo:  Desenvolva um programa que conte quantas palavras existem em uma string fornecida 
pelo usuário.
***************************/
import * as readline from "readline";

export function executarExercicio18(
  rl: readline.Interface,
  menu: () => void,
): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 18: Contar Palavras");
  console.log("=========================================\n");
  rl.question("Digite uma frase: ", (frase) => {
    const fraseLimpa = frase.trim();

    if (fraseLimpa === "") {
      console.log("A frase possui 0 palavras.");
      menu();
      return;
    }

    const palavras = fraseLimpa.split(/\s+/);

    console.log(`A frase possui ${palavras.length} palavra(s).`);

    rl.question("\nPressione Enter para voltar ao menu...", () => {
      menu();
    });
  });
}
