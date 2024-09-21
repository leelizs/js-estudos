// Array literal
const nomes = ["Leonardo", "Anderson", "Erika"];
// console.log(nomes);

// Adicionando novo valor em uma posição do Array
nomes[3] = "João";
// console.log(nomes);

// Verificando quantos valores tem em um Array com o operador length
// console.log(nomes.length);

let nomes1 = ["Leonardo", "Anderson", "Erika", "João"];
let nomes2 = nomes1;

// Comparando se dois Array são iguais
const compararArray = (nomes1, nomes2) => {
    if (nomes1.length !== nomes2.length) {
        return false;
    }
    for (let i = 0; i < nomes1.length; i++) {
        if (nomes1[i] !== nomes2[i]) {
            return false;
        }
    }
    return true;
};

let resultado = compararArray(nomes1, nomes2);
// console.log(resultado);

let idades = [19, 25, 16, 20];
let maisIdades = [20, 26, 17, 21];

// Mesclando dois Array com o operador spread

let todasIdades = [...idades, ...maisIdades];
// console.log(todasIdades);

let nomeProdutos = ["Veja", "Toddy", "Nescau"];
// Adicionando novo valor no Array com o operador push
nomeProdutos.push("Bolo");
// console.log(nomeProdutos);
// Adicionando mais de um valor no Array com o operador push
nomeProdutos.push("Pão", "Mortadela", "Mussarela");
// console.log(nomeProdutos);

let primeiroValor = ["Primeiro valor"];
// Adicionando novo valor no inicio do Array com o operador unshift
primeiroValor.unshift("Eu sou o primeiro valor");
// console.log(primeiroValor);

let removerUltimo = ["Neymar", "Messi", "CR7"];
// Removendo o último valor de um Array com o operador pop
removerUltimo.pop();
// console.log(removerUltimo);

let pinaMenos = ["Mavis", "Leelizs", "Nokia"];
// Removendo o primeiro valor de um Array com o operador shift
pinaMenos.shift();
// console.log(pinaMenos);

let removeTrolls = ["Leelizs", "KgBR", "Frigi Frigi", "medodemulher", "Nokia"];
// Removendo multiplos valores de uma posição especifica em um Array com o operador splice
removeTrolls.splice(1, 3);
// console.log(removeTrolls);
// Removendo e adicionando valores no Array com o operador splice
removeTrolls.splice(2, 0, "Frigi Frigi");
// console.log(removeTrolls);


// Mesclando vários Array a um só com o operador concat
let vazio = nomes1.concat(pinaMenos, nomeProdutos);
// console.log(vazio);

// Adicionando vários valores ao Array Original com o operador push e spread
let arrOriginal = ["Valorant", "CS 2"];
let arr1 = ["Minecraft", "LOL"];
let arr2 = ["PUBG", "Free Fire"];

arrOriginal.push(...arr1, ...arr2);
// console.log(arrOriginal);

// Convertendo Array para String com o operador toString e join
let frase = ['Hoje', 'eu', 'aprendi', 'sobre', 'Array.'];
let resultadoFrase = frase.toString();
// console.log(resultadoFrase);

resultadoFrase = frase.join(" ");
// console.log(resultadoFrase);

// Copiando um Array com o operador slice
let cores = ["Azul", "Roxo", "Preto", "Amarelo"];
let copiaCores = cores.slice();
// console.log(copiaCores);

copiaCores = cores.slice(0, 2);
// console.log(copiaCores);

// Copiando Array com o operador map
let album = [
    { artista: "Matuê", titulo: "Quem manda é a 30" },
    { artista: "Matuê", titulo: "É Sal" }
];

let mapAlbum = album.map(element => element);
// console.log(mapAlbum);

// Cópia profunda do Array com o operador JSON.stringify e JSON.parse
let copiaAlbum = JSON.parse(JSON.stringify(album));
// console.log(copiaAlbum);

// Pesquisando dentro de um Array com o operador includes
let letras = ["A", "C", "D", "H", "Z"];
// console.log(letras.includes("A")); // True se tiver
// console.log(letras.includes("A", 2)); // False se não tiver

// Encontrar valor especificado com o operador indexOf
// console.log(letras.indexOf("C"));
// console.log(letras.indexOf("C", 2));

let animais = [
    { numero: 1, nome: 'Pigs on the Wing (Part One)' },
    { numero: 2, nome: 'Dogs' },
    { numero: 3, nome: 'Pigs (Three Different Ones)' },
    { numero: 4, nome: 'Sheep' },
    { numero: 5, nome: 'Pigs on the Wing (Part Two)' }
];

// console.log(animais.find(el => el['nome'].includes('Pigs')));

// console.log(animais.findLast(el => el['nome'].includes('Pigs')));

// console.log(animais.findIndex(el => el['nome'].includes('Pigs')));

// console.log(animais.findLastIndex(el => el['nome'].includes('Pigs')));

// console.log(animais.findIndex(el => el['nome'].includes('Horses')));

// Verificando se alguns valores, não todos, atendem aos requisitos com o operador some
// console.log(letras.every(el => typeof el == "string"));

// console.log(letras.some(el => el == "A"));

// console.log(letras.some(el => el == "B"));

// Filtrando os valores do Array com o operador filter
// console.log(animais.filter(el => el['nome'].includes('Pigs')));

let frutas = ["Banana", "Maçã", "Pera", "Abacaxi", "Manga", "Laranja"];

//  O operador sort muda o array no qual está agindo
// console.log(frutas.sort((a, b) => {
//     return a === b ? 0 : a > b ? 1 : -1;
// }));

// console.log(frutas.sort((a, b) => {
//     return a === b ? 0 : a < b ? 1 : -1;
// }));

let tracks = animais.map(el => el['nome']);
// console.log(tracks);

// O forEach método é similar a map, Ele executa uma função em cada elemento do array
animais.forEach(el => delete el['numero']);
// console.log(animais);

// O reduce método aceita uma função de retorno de chamada, que é executada em cada elemento do array
let contarPigs = animais.reduce((count, el) => {
    return el['nome'].includes('Pigs') ? count + 1 : count
}, 0);

// console.log(contarPigs);