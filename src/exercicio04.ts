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
Descritivo: 4 - Faça um programa que converta uma temperatura em graus Celsius para Fahrenheit, utilizando a fórmula: F = (C * 9/5) + 32.
******/

import * as readline from "readline";

export function executarExercicio04(rl: readline.Interface, menu: () => void): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 4: Celsius para Fahrenheit");
  console.log("=========================================\n");

  rl.question("Digite a temperatura em Celsius: ", (entrada) => {
    const celsius = parseFloat(entrada);

    if (isNaN(celsius)) {
      console.log("\n[Erro]: Digite uma temperatura válida.");
    } else {
      const fahrenheit = (celsius * 9) / 5 + 32;
      console.log(`\n${celsius.toFixed(1)}°C equivale a ${fahrenheit.toFixed(1)}°F.`);
    }

    rl.question("\nPressione Enter para voltar ao menu...", () => {
      menu();
    });
  });
}