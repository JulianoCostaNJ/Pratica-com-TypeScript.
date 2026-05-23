/******
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B
Componentes:
            RA:25356593-2- Daniela Da Silva Ferreira
            RA:25363470-2- Fernado Araujo Alvim
            RA:25291244-2- Juliano Henrique Costa 
            RA:25000914-2- Lucas De Freitas Ferreira De Oliveira
            RA:25260842-2- Pedro Rocha Reis
            RA:25363563-2- Sara Kerstin Miguel
Data: 20 de Maio de 2026
Descritivo: 6 - Escreva um programa que leia 5 números do usuário e os armazene em um array, depois exiba todos os números.
******/

import * as readline from "readline";

export function executarExercicio06(rl: readline.Interface, menu: () => void): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 6: Array com 5 números");
  console.log("=========================================\n");

  const numeros: number[] = [];

  function pedirNumero(indice: number): void {
    if (indice > 5) {
      console.log("\nNúmeros digitados:");
      console.log(numeros);

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