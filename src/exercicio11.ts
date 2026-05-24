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
Descritivo: classe Pessoa 
***************************/
import * as readline from "readline";

class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  exibirDados(): void {
    console.log("\nDados da pessoa:");
    console.log("Nome:", this.nome);
    console.log("Idade:", this.idade);
  }
}

export function executarExercicio11(
  rl: readline.Interface,
  menu: () => void
): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 11: Classe Pessoa");
  console.log("=========================================\n");

  rl.question("Digite o nome da pessoa: ", (nome) => {
    rl.question("Digite a idade da pessoa: ", (entradaIdade) => {
      const idade = parseInt(entradaIdade, 10);

      if (nome.trim() === "" || isNaN(idade) || idade < 0) {
        console.log("\n[Erro]: Nome ou idade inválidos.");
      } else {
        const pessoa = new Pessoa(nome, idade);
        pessoa.exibirDados();
      }

      rl.question("\nPressione Enter para voltar ao menu...", () => {
        menu();
      });
    });
  });
}