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
Descritivo: Ordenar array de números em ordem crescente.
***************************/
// Array de números
import * as readline from "readline";

export function executarExercicio10(
  rl: readline.Interface,
  menu: () => void
): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 10: Ordenar array");
  console.log("=========================================\n");

  const numeros: number[] = [];

  function pedirNumero(indice: number): void {
    if (indice > 5) {
      console.log("\nArray original:");
      console.log(numeros);

      const numerosOrdenados = [...numeros].sort((a, b) => a - b);

      console.log("\nArray em ordem crescente:");
      console.log(numerosOrdenados);

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