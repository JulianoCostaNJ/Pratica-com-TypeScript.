/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B

Componentes:
RA:25356593-2 - Daniela da Silva Ferreira
RA:25363470-2 - Fernando Araujo Alvim
RA:25291244-2 - Juliano Henrique Costa
RA:25000914-2 - Lucas De Freitas Ferreira De Oliveira
RA:25260842-2 - Pedro Rocha Reis
RA:25363563-2 - Sara Kerstin Miguel

Data: 24 de Maio de 2026

Descritivo: Programa que encontra o maior número em um array.
*******************************************************************************/

// O código solicita 5 números ao usuário,
// armazena em um array e identifica o maior valor.

import * as readline from "readline";

export function executarExercicio07(rl: readline.Interface, menu: () => void): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 7: Maior número em um array");
  console.log("=========================================\n");

  const numeros: number[] = [];

  function pedirNumero(indice: number): void {
    if (indice > 5) {
      let maiorNumero = numeros[0];

      for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
          maiorNumero = numeros[i];
        }
      }

      console.log(`\nO maior número do array é: ${maiorNumero}`);

      rl.question("\nPressione Enter para voltar ao menu...", () => {
        menu();
      });

      return;
    }

    rl.question(`Digite o ${indice}º número: `, (entrada) => {
      const numero = parseFloat(entrada);

      if (isNaN(numero)) {
        console.log("[Erro]: Digite um número válido.");
        pedirNumero(indice);
      } else {
        numeros.push(numero);
        pedirNumero(indice + 1);
      }
    });
  }

  pedirNumero(1);
}