let pessoas = [
    { nome: "Leonardo", sobrenome: "Silva" },
    { nome: "Anderson", sobrenome: "Ferreira" },
    { nome: "Nokia", sobrenome: "TTG" }
];

let pessoas2 = [
    { nome: "Pedro", sobrenome: "Silva" },
    { nome: "Frigideira", sobrenome: "Ferreira" },
    { nome: "Mavis", sobrenome: "Scotty" }
];

console.log(pessoas2.map( (item) => `${item.nome} ${item.sobrenome}`));

function map(arr1, fun) {
    let nomesCompletos = [];

    for (let i = 0; i < arr1.length; i++) {
        // let nomesCompleto = `${arr1[i].nome} ${arr1[i].sobrenome}`;

        // nomesCompletos.push(nomesCompleto);

        nomesCompletos.push(fun(arr1[i]));
    }
    return nomesCompletos;
}

//let pessoasTransformes = map(pessoas, (item) => `${item.nome} ${item.sobrenome}`);
let pessoasTransformes = map(pessoas, (item) => [{nomeCompleto: item.nome}]);
//let pessoasTransformes2 = map(pessoas2);

//let pessoas2 = ["Leonardo Silva", "Anderson Ferreira", "Nokia TTG"];

console.log(pessoasTransformes);
//console.log(pessoasTransformes2);

function teste3 (a, b) {
    return a - b;
}

function teste2 (a, b) {
    return a + b;
}

function teste1 (fun, a, b) {
    return fun(a, b);
}

const testeTeste = (a, b) => a + b;

//console.log(teste1(testeTeste, 10, 15));

// let nomesObj = [];

// for (let i = 0; i < pessoas2.length; i++) {
//     let partes = pessoas2[i].split(" ");

//     let pessoa = {
//         nome: partes[0],
//         sobrenome: partes[1]
//     };

//     nomesObj.push(pessoa);
// }

// console.log(nomesObj);

// let pessoa1 = {nome: "Leonardo", sobrenome: "Silva"}
// let pessoa2 = {nome: "Anderson", sobrenome: "Ferreira"}
// let pessoa3 = {nome: "Nokia", sobrenome: "TTG"}

// let pessoas = [];
// pessoas.push(pessoa1);
// pessoas.push(pessoa2);
// pessoas.push(pessoa3);

// function printarNome (pessoa) {
//     console.log(`Pessoa: ${pessoa.nome} ${pessoa.sobrenome}`);
// }

// for (let i = 0; i < pessoas.length; i++) {
//     printarNome(pessoas[i]);
// }

// function soma (a, b) {
//     return a + b;
// }
// let resultado = soma(10, 20)
// console.log(resultado);

