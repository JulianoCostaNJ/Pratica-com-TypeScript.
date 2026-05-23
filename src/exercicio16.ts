/**************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B
Data: 24 de Maio de 2026

Componentes:
            RA:25356593-2- Daniela Da Silva Ferreira
            RA:25363470-2- Fernado Araujo Alvim
            RA:25292144-2- Juliano Henrique Costa 
            RA:25000914-2- Lucas De Freitas Ferreira De Oliveira
            RA:25260842-2- Pedro Rocha Reis
            RA:25363563-2- Sara Kerstin Miguel
Descritivo:  Escreva um programa que valide uma senha de acordo com os seguintes critérios:
 Pelo menos 8 caracteres
 Pelo menos uma letra maiúscula
 Pelo menos uma letra minúscula
 Pelo menos um número
***************************/
import * as readline from "readline";
export function executarExercicio16(
  rl: readline.Interface,
  menu: () => void,
): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 16: Validar Senha");
  console.log("=========================================\n");
  rl.question("Digite uma senha: ", (senha) => {
    const temOitoCaracteres = senha.length >= 8;
    const temMaiuscula = /[A-Z]/.test(senha);
    const temMinuscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);

    if (!temOitoCaracteres) {
      console.log("A senha deve conter pelo menos 8 caracteres.");
    }

    if (!temMaiuscula) {
      console.log("A senha deve conter pelo menos uma letra maiúscula.");
    }

    if (!temMinuscula) {
      console.log("A senha deve conter pelo menos uma letra minúscula.");
    }

    if (!temNumero) {
      console.log("A senha deve conter pelo menos um número.");
    }

    const senhaValida =
      temOitoCaracteres && temMaiuscula && temMinuscula && temNumero;

    if (senhaValida) {
      console.log("Senha válida!");
    } else {
      console.log("Senha inválida!");
    }

    rl.question("\nPressione Enter para voltar ao menu...", () => {
      menu();
    });
  });
}
