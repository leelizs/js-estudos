// let pessoas = [
//     {nome: 'Leonardo', idade: '19', cpf: '550.774.848-99'},
//     {nome: 'Anderson', idade: '28', cpf: '999.888.777-11'},
//     {nome: 'Nokia', idade: '18', cpf: '777.888.999-22'}
// ];

// let texto = '';

// // for (let i = 0; i < pessoas.length; i++) {
// //     texto = texto + pessoas[i].nome + ', ';
// // }
// // console.log(texto);

// pessoas.forEach((nome) => {
//     texto = texto + nome.nome + ', ';
// });
// console.log(texto);

// console.log(pessoas.map(el => el.nome).join(', '));
//const numbers = [1, 2, 3];
//let soma = 0;

// for (let i = 0; i < numbers.length; i++) {
//     soma = soma + numbers[i];
//     //console.log(soma);
// }

// inicialização, condição e incremento.
// i = 0; - Inicialização
// 0 < 2; - Condição
// true
// 0
// i = 1;
// 1 < 2; - Condição
// true
// 1
// i = 2;
// 2 < 2;
// false

// Exercicios do FOR

const prompt = require('prompt-sync')();

// let x = parseFloat(prompt("Digite o valor de x: "));
// let y = parseInt(prompt("Digite o valor de y: "));

// let resultado = 1;

//  for (let i = 0; i < y; i++) {
//    resultado *= x;
//  }

// console.log(`${x} elevado a ${y} é igual a: ${resultado}`);

//  let tamanhoLista = parseInt(prompt("Digite o tamanho da lista (um inteiro positivo não nulo): "));

//  while (isNaN(tamanhoLista) || tamanhoLista <= 0) {
//    tamanhoLista = parseInt(prompt("Entrada inválida. Digite um inteiro positivo não nulo: "));
//  }

//  let numeros = [];
//  let menorNumero;

//  for (let i = 0; i < tamanhoLista; i++) {
//    let numero = parseFloat(prompt(`Digite o número ${i + 1} de ${tamanhoLista}: `));
//    numeros.push(numero);
//  }

//  for (let i = 0; i < numeros.length; i++) {
//     let aux = numeros[i];
//     if (i === 0 || aux < menorNumero) {
//         menorNumero = aux;
//       }
//  }

//  console.log(`O menor número da lista é: ${menorNumero}`);

// let n = parseInt(prompt("Digite um número inteiro positivo: "));

// while (isNaN(n) || n <= 0) {
//   n = parseInt(prompt("Entrada inválida. Digite um número inteiro positivo:"));
// }

// let soma = 0;

// for (let i = 1; i <= n; i++) {
//   soma += i;
// }

// console.log(`A soma de todos os números inteiros de 1 a ${n} é: ${soma}`);

// let n = parseInt(prompt("Digite um número inteiro positivo: "));

// while (isNaN(n) || n <= 0) {
//   n = parseInt(prompt("Entrada inválida. Digite um número inteiro positivo:"));
// }

// let somaDivisores = 0;

// for (let i = 1; i < n; i++) {
//   if (n % i === 0) { // Verifica se i é um divisor de n
//     somaDivisores += i;
//   }
// }

// if (somaDivisores === n) {
//   console.log(`${n} é um número perfeito.`);
// } else {
//   console.log(`${n} não é um número perfeito.`);
// }

//  let limiteSuperior = parseFloat(prompt("Digite o limite superior do intervalo em Fahrenheit: "));

//  let incremento = parseFloat(prompt("Digite o valor de incremento: "));

//  while (isNaN(limiteSuperior) || limiteSuperior <= 10) {
//    limiteSuperior = parseFloat(prompt("Entrada inválida. O limite superior deve ser maior que 10. Digite novamente:"));
//  }

//  while (isNaN(incremento) || incremento <= 0) {
//    incremento = parseFloat(prompt("Entrada inválida. O incremento deve ser um valor positivo. Digite novamente:"));
//  }

//  console.log("Tabela de Conversão de Fahrenheit para Celsius");
//  console.log("Fahrenheit | Celsius");

//  for (let fahrenheit = 10; fahrenheit <= limiteSuperior; fahrenheit += incremento) {
//    let celsius = ((fahrenheit - 32) * 5) / 9;
//    console.log(`${fahrenheit}°F       | ${celsius.toFixed(2)}°C`);
//  }

// const numeros = [1, 2, 3, 4, 5, 6];
// const numerosPares = [];

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 === 0) {
//     numerosPares.push(numeros[i]);
//   }
// }

// console.log(numerosPares);

// const numeros = [1, 2, 3, 4, 5];
// const numerosMultiplicados = [];

// for (let i = 0; i < numeros.length; i++) {
//   numerosMultiplicados.push(numeros[i] * 2);
// }

// console.log("Array original:", numeros);
// console.log("Array multiplicado por 2:", numerosMultiplicados);


// let tamanhoLista = parseInt(prompt("Digite o tamanho da lista (um inteiro positivo não nulo): "));

// while (isNaN(tamanhoLista) || tamanhoLista <= 0) {
//     tamanhoLista = parseInt(prompt("Entrada inválida. Digite um inteiro positivo não nulo: "));
// }

// let numeros = [];

// for (let i = 0; i < tamanhoLista; i++) {
//     let numero = parseFloat(prompt(`Digite o número ${i + 1} de ${tamanhoLista}: `));
//     numeros.push(numero);
// }

// let soma = 0;
// for (let i = 0; i < numeros.length; i++) {
//     let num = numeros[i];
//     if (num % 2 === 0) {
//         console.log(num);
//         soma = soma + num;
//     }
// }

// console.log(soma);

// [1, 2, 3, 4, 5]
// 2, 4
// 6

// let multiplicacao = 1;
// for (let i = 0; i < numeros.length; i++) {
//     let num = numeros[i];
//     if (num % 2 === 1) {
//         console.log(num);
//         multiplicacao = multiplicacao * num;
//     }
// }

// console.log(multiplicacao);

// [1, 2, 3, 4, 5]
// 1, 3, 5
// 15

// multiplicação dos numeros multiplos de 3

// let multiplicacao = 1;
// for (let i = 0; i < numeros.length; i++) {
//     let num = numeros[i];
//     if (num % 3 === 0) {
//         console.log(num);
//         multiplicacao = multiplicacao * num;
//     }
// }

//console.log(multiplicacao);

// let novoArray = [];

// for (let i = 0; i < numeros.length; i++) {
//     let num = numeros[i];
//     const resultado = num * 2 + 5;
//     novoArray.push(resultado);
// }

// console.log(novoArray);

// [1, 2, 3, 4, 5]
// [7, 9, 11, 13, 15]

// let multiplicacao = 1;
// for (let i = 0; i < numeros.length; i++) {
//     let num = numeros[i];
//     multiplicacao = multiplicacao * num;
// }

// console.log(multiplicacao);

// let soma = 0;
// for (let i = 0; i < numeros.length; i++) {
//     let num = numeros[i];
//     soma = soma + num;
// }

// console.log(soma);

// [2, 3, 4] 3
// num = 2; i = 0
// num = 3; i = 1
// num = 4; i = 2
// 2 * 3 * 4 = (1 * 2) * 3 * 4 = (2 * 3) * 4 = (6 * 4) = 24


//const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i in frutas) {
//   console.log(frutas[i]);
// }

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

const pessoa = {
  nome: 'Leonardo',
  sobrenome: 'Silva',
  idade: 19
};

for (let key in pessoa) {
  console.log(key, pessoa[key]);
}

let numeros = [10, 20, 30];

for (let key of numeros) {
  console.log(key);
}