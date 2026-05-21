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

Descritivo: Programa que encontra o maior número em um array.
*******************************************************************************/

// O código solicita 5 números ao usuário,
// armazena em um array e identifica o maior valor.

const readline = require('readline/promises');

async function main() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let numeros: number[] = [];

    for (let i = 0; i < 5; i++) {

        let numero = Number(
            await rl.question(`Digite o ${i + 1}º numero: `)
        );

        numeros.push(numero);
    }

    let maiorNumero: number = numeros[0];

    for (let i = 1; i < numeros.length; i++) {

        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i];
        }

    }

    console.log(`O maior numero do array e: ${maiorNumero}`);

    rl.close();
}

main();