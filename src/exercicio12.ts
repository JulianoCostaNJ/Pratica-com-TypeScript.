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
Descritivo: Classe aluno
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
    console.log("Nome:", this.nome);
    console.log("Idade:", this.idade);
  }
}

class Aluno extends Pessoa {
  matricula: string;

  constructor(nome: string, idade: number, matricula: string) {
    super(nome, idade);
    this.matricula = matricula;
  }

  exibirDadosAluno(): void {
    console.log("\nDados do aluno:");
    this.exibirDados();
    console.log("Matrícula:", this.matricula);
  }
}

export function executarExercicio12(
  rl: readline.Interface,
  menu: () => void
): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 12: Herança com Classe Aluno");
  console.log("=========================================\n");

  rl.question("Digite o nome do aluno: ", (nome) => {
    rl.question("Digite a idade do aluno: ", (entradaIdade) => {
      const idade = parseInt(entradaIdade, 10);

      rl.question("Digite a matrícula do aluno: ", (matricula) => {
        if (
          nome.trim() === "" ||
          isNaN(idade) ||
          idade < 0 ||
          matricula.trim() === ""
        ) {
          console.log("\n[Erro]: Dados inválidos.");
        } else {
          const aluno = new Aluno(nome, idade, matricula);
          aluno.exibirDadosAluno();
        }

        rl.question("\nPressione Enter para voltar ao menu...", () => {
          menu();
        });
      });
    });
  });
}