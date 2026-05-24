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
Descritivo: Escreva um programa que defina uma interface veiculo com métodos acelerar e frear e em seguida implemente essa interface
em uma classe carro.
***************************/
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

Descritivo: Escreva um programa que defina uma interface veiculo
com métodos acelerar e frear e em seguida implemente essa interface
em uma classe carro.
***************************/

import * as readline from "readline";

export function executarExercicio13(
  rl: readline.Interface,
  menu: () => void,
): void {
  console.clear();

  console.log("=========================================");
  console.log("EXERCÍCIO 13: Interface Veículo");
  console.log("=========================================\n");

  interface Veiculo {
    acelerar(): void;
    frear(): void;
  }

  class Carro implements Veiculo {
    acelerar(): void {
      console.log("\nO carro está acelerando...");
    }

    frear(): void {
      console.log("\nO carro está freando...");
    }
  }

  const meuCarro = new Carro();

  rl.question("Aperte Enter para acelerar o carro...", () => {
    meuCarro.acelerar();

    rl.question("\nAperte Enter para frear o carro...", () => {
      meuCarro.frear();

      rl.question("\nPressione Enter para voltar ao menu...", () => {
        menu();
      });
    });
  });
}
