/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B

Componentes:
RA:25356593-2 - Daniela da Silva Ferreira
RA:25363470-2 - Fernando Araujo Alvim
RA:252921244-2 - Juliano Henrique Costa
RA:25000914-2 - Lucas De Freitas Ferreira De Oliveira
RA:25260842-2 - Pedro Rocha Reis
RA:25363563-2 - Sara Kerstin Miguel

Data: 24 de Maio de 2026

Descritivo: Calculadora simples com quatro operações.
*******************************************************************************/

// O código solicita dois números e uma operação matemática.
// Depois realiza o cálculo utilizando switch case.

const readline = require('readline/promises');

async function main() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let numero1 = Number(await rl.question('Digite o primeiro numero: '));
    let numero2 = Number(await rl.question('Digite o segundo numero: '));
    let operacao = await rl.question('Digite a operacao (+ - * /): ');

    switch (operacao) {

        case '+':
            console.log(`Resultado: ${numero1 + numero2}`);
            break;

        case '-':
            console.log(`Resultado: ${numero1 - numero2}`);
            break;

        case '*':
            console.log(`Resultado: ${numero1 * numero2}`);
            break;

        case '/':

            if (numero2 !== 0) {
                console.log(`Resultado: ${numero1 / numero2}`);
            } else {
                console.log('Nao e possível dividir por zero.');
            }

            break;

        default:
            console.log('Operacao invalida.');
    }

    rl.close();
}

main();