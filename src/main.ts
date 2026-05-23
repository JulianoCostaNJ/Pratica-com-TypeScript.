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
Descritivo:  Arquivo principal que importa e executa os exercícios desenvolvidos.
            O programa apresenta um menu para o usuário escolher qual exercício deseja executar.
            Após a execução de cada exercício, o programa retorna ao menu principal,
            permitindo que o usuário escolha outro exercício ou saia do programa.
***************************/
import * as readline from "readline";

import { executarExercicio01 } from "./exercicio01";
import { executarExercicio02 } from "./exercicio02";
import { executarExercicio03 } from "./exercicio03";
import { executarExercicio04 } from "./exercicio04";
import { executarExercicio05 } from "./exercicio05";
import { executarExercicio06 } from "./exercicio06";
import { executarExercicio07 } from "./exercicio07";
import { executarExercicio08 } from "./exercicio08";
import { executarExercicio09 } from "./exercicio09";
import { executarExercicio10 } from "./exercicio10";
import { executarExercicio11 } from "./exercicio11";
import { executarExercicio12 } from "./exercicio12";
import { executarExercicio16 } from "./exercicio16";
import { executarExercicio17 } from "./exercicio17";
import { executarExercicio18 } from "./exercicio18";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu(): void {
  console.clear();
  console.log("=========================================");
  console.log("MENU PRINCIPAL");
  console.log("=========================================");
  console.log("1  - Soma de dois números");
  console.log("2  - Par ou ímpar");
  console.log("3  - Média de três notas");
  console.log("4  - Celsius para Fahrenheit");
  console.log("5  - Números pares de 1 a 20");
  console.log("6  - Array com 5 números");
  console.log("7  - Maior número em array");
  console.log("8  - Contar vogais");
  console.log("9  - Calculadora simples");
  console.log("10 - Ordenar array");
  console.log("11 - Classe Pessoa");
  console.log("12 - Herança Aluno");
  console.log("16 - Validar senha");
  console.log("17 - Jogo de adivinhação");
  console.log("18 - Contar palavras");
  console.log("0  - Sair");
  console.log("=========================================");

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        executarExercicio01(rl, menu);
        break;
      case "2":
        executarExercicio02(rl, menu);
        break;
      case "3":
        executarExercicio03(rl, menu);
        break;
      case "4":
        executarExercicio04(rl, menu);
        break;
      case "5":
        executarExercicio05(rl, menu);
        break;
      case "6":
        executarExercicio06(rl, menu);
        break;
      case "7":
        executarExercicio07(rl, menu);
        break;
      case "8":
        executarExercicio08(rl, menu);
        break;
      case "9":
        executarExercicio09(rl, menu);
        break;
      case "10":
        executarExercicio10(rl, menu);
        break;
      case "11":
        executarExercicio11(rl, menu);
        break;
      case "12":
        executarExercicio12(rl, menu);
        break;
      case "16":
        executarExercicio16(rl, menu);
        break;
      case "17":
        executarExercicio17(rl, menu);
        break;
      case "18":
        executarExercicio18(rl, menu);
        break;
      case "0":
        console.log("Saindo do programa...");
        rl.close();
        break;
      default:
        console.log("Opção inválida.");
        rl.question("\nPressione Enter para tentar novamente...", () => {
          menu();
        });
    }
  });
}

menu();