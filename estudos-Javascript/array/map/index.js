// Você pode usar map() para copiar uma matriz especificando uma função que retorna cada elemento da matriz
// Copiando Array com o operador map
let album = [
    { artista: "Matuê", titulo: "Quem manda é a 30" },
    { artista: "Matuê", titulo: "É Sal" }
];

let mapAlbum = album.map(element => element);
console.log(mapAlbum);

// criar uma matriz preenchida com os valores da track chave de cada objeto na animais matriz.

let animais = [
    { numero: 1, nome: 'Pigs on the Wing (Part One)' },
    { numero: 2, nome: 'Dogs' },
    { numero: 3, nome: 'Pigs (Three Different Ones)' },
    { numero: 4, nome: 'Sheep' },
    { numero: 5, nome: 'Pigs on the Wing (Part Two)' }
];

let tracks = animais.map(el => el['nome']);
console.log(tracks);

const myAwesomeArray = [5, 4, 3, 2, 1];

const myAwesomeArrayMap = myAwesomeArray.map(x => x * x);
console.log(myAwesomeArrayMap);

const startMap = performance.now()
myAwesomeArray.map(x => (x + x) * 10000000000)
const endMap = performance.now()
console.log(`Velocidade [map]: ${endMap - startMap} milissegundos`);

let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function (element) {
    return element * 3;
});

console.log(modifiedArr);

let users = [
    { firstName: "Anderson", lastName: "Silva" },
    { firstName: "Leonardo", lastName: "Melo" },
    { firstName: "Erika", lastName: "Carol" }
];

let userFullNames = users.map(function(element) {
    return `${element.firstName} ${element.lastName}`;
});

console.log(userFullNames);

// testando argumentos do Map

let arrExemplo = [2, 3, 5, 7]

arrExemplo.map(function(elemento, indice, array){
    console.log(elemento);
    console.log(indice);
    console.log(array);
    return elemento;
}, 80);