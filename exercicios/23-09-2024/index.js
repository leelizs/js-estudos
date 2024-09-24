/* const a = 10;
let b = 20;
const soma = a + b;
b = 30;
const valores = [];
valores.push(a);
valores.push(b);
valores.push(soma);
const tamanhoArr = valores.length;
valores[1] = 45;
valores[2] = 100;
valores.splice(1, 1);
console.log(valores);
const arr = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
arr.splice(3, 4);
console.log(arr);
const stringNumber = arr.join(", ");
console.log(stringNumber);
const filtrados = arr.filter(item => item > 55);
const arrRemovido = arr.slice(1, arr.length - 1);
const parte1 = arr.slice(0, 1);
const parte2 = arr.slice(2, arr.length);
const arrNovo = [...parte1, ...parte2];
console.log(filtrados);

function teste(arr) {
    const copia = arr.slice();
    copia.splice();
} */

/* const arr = [12, 25, 67, 89, 56, 67];
console.log(arr);
arr.push(62);
console.log(arr);
arr.unshift(51);
console.log(arr);
arr.shift();
console.log(arr);
arr.pop();
console.log(arr);
const idade = [12, 18, 35, 47, 65, 70, 80];
const verificaAposentadoria = idade.find(item => item > 60);
console.log(verificaAposentadoria);
if(verificaAposentadoria == undefined) {
    console.log("Não tem nenhum aposentado.");
} else{
    const verificaVariosAposentados = idade.filter(item => item > 60);
    console.log(verificaVariosAposentados.join(", "));
    console.log("bla bla bla");
} */

const arr = [
    {nome: "Leonardo", idade: 19},
    {nome: "Anderson", idade: 28},
    {nome: "Pablo", idade: 70},
];

// const arr = ["Leonardo", "Anderson", "Pablo"];

const verificaIdade = arr.find(item => item.idade > 20);
if(verificaIdade == undefined) {
    console.log("Nenhuma pessoa com mais de 20 anos.");
} else{
    const pessoasComMaisDe20Anos = arr.filter(item => item.idade > 20);
    console.log(pessoasComMaisDe20Anos.map(item => item.nome).join(", "));
    console.log("BLA");
}