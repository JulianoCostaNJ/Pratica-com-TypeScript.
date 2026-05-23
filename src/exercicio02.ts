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
Descritivo: Escreva um programa que leia um número inteiro e informe se ele é par ou ímpar. 
******/

import * as readline from "readline";

export function executarExercicio02(rl: readline.Interface, menu: () => void): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 2: Par ou Ímpar");
  console.log("=========================================\n");

  rl.question("Digite um número inteiro: ", (entrada) => {
    const numero = parseInt(entrada, 10);

    if (isNaN(numero)) {
      console.log("\n[Erro]: Digite um número inteiro válido.");
    } else if (numero % 2 === 0) {
      console.log(`\nO número ${numero} é PAR.`);
    } else {
      console.log(`\nO número ${numero} é ÍMPAR.`);
    }

    rl.question("\nPressione Enter para voltar ao menu...", () => {
      menu();
    });
  });
}