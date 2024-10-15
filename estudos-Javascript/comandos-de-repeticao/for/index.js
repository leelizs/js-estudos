for (let i = 0; i <= 5; i++) {
    console.log(i);
}

// Inicialização: let i = 0 — começamos o contador i com o valor 0.
// Condição: i <= 5 — o loop continuará enquanto i for menor ou igual a 5.
// Incremento: i++ — após cada iteração, aumentamos o valor de i em 1.
// O código dentro do bloco {} (console.log(i);) é executado repetidamente até que i ultrapasse o valor 5.

// let i = 0; - Inicialização
// 0 <= 5 - Condição
// 0 - Corpo
// i = 1; - Incremento
// 1 <= 5 - Condição
// 1 - Corpo
// i = 2; - Incremento
// 2 <= 5 - Condição
// 2 - Corpo
// i = 3; - Incremento
// 3 <= 5 - Condição
// 3 - Corpo
// i = 4; - Incremento
// 4 <= 5 - Condição
// 4 - Corpo
// i = 5; Incremento
// 5 <= 5 - Condição
// 5 - Corpo
// i = 6; - Incremento
// 6 <= 5 - Condição (false) Encerra aqui porque a condição não foi satisfeita.

for (let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'Par' : 'Impar';
    console.log(`O número ${i} é ${par}`);
}