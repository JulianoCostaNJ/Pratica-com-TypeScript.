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
Descritivo: implemente uma calculadora de indice de massa corporal (IMC) que solicite o peso e a altura do usuário e exiba o resultado do cálculo do IMC.
e exiba o resultado com a classificação do IMC (abaixo do peso, peso normal, sobrepeso, obesidade).
***************************/
import * as readline from "readline";
export function executarExercicio15(
  rl: readline.Interface,
  menu: () => void,
): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 15: Calculadora de IMC");
  console.log("=========================================\n");
    rl.question("Digite seu peso em kg: ", (entradaPeso) => {
        const peso = parseFloat(entradaPeso);
        if (isNaN(peso) || peso <= 0) {
            console.log("[Erro]: Digite um peso válido.");
            executarExercicio15(rl, menu);
            return;
        }
        rl.question("Digite sua altura em metros: ", (entradaAltura) => {
            const altura = parseFloat(entradaAltura);
            if (isNaN(altura) || altura <= 0) {
                console.log("[Erro]: Digite uma altura válida.");
                executarExercicio15(rl, menu);
                return;
            }
            const imc = peso / (altura * altura);
            console.log(`\nSeu IMC é: ${imc.toFixed(2)}`);
            if (imc < 18.5) {
                console.log("Classificação: Abaixo do peso");
            } else if (imc < 25) {
                console.log("Classificação: Peso normal");
            } else if (imc < 30) {
                console.log("Classificação: Sobrepeso");
            } else {
                console.log("Classificação: Obesidade");
            }
            rl.question("\nPressione Enter para voltar ao menu...", () => {
                menu();
            });
        });
    });
}