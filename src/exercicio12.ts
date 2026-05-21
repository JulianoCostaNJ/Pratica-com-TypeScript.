/**************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B
Data: 24 de Maio de 2026

Componentes:
            RA:25356593-2- Daniela Da Silva Ferreira
            RA:25363470-2- Fernado Araujo Alvim
            RA:252921244-2- Juliano Henrique Costa 
            RA:25000914-2- Lucas De Freitas Ferreira De Oliveira
            RA:25260842-2- Pedro Rocha Reis
            RA:25363563-2- Sara Kerstin Miguel
Descritivo: Classe aluno
***************************/
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
        this.exibirDados();
        console.log("Matrícula:", this.matricula);
    }
}

const aluno1 = new Aluno("Pedro", 20, "2025001");

aluno1.exibirDadosAluno();