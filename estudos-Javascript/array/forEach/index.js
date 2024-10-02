// forEach() é usado para excluir a numero propriedade de cada elemento do array

let animais = [
    { numero: 1, nome: 'Pigs on the Wing (Part One)' },
    { numero: 2, nome: 'Dogs' },
    { numero: 3, nome: 'Pigs (Three Different Ones)' },
    { numero: 4, nome: 'Sheep' },
    { numero: 5, nome: 'Pigs on the Wing (Part Two)' }
];

animais.forEach(el => delete el['numero']);
console.log(animais);

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
    console.log(`Índice: ${index} Valor: ${number}`);
});

const myAwesomeArray = [5, 4, 3, 2, 1];

const startForEach = performance.now()
myAwesomeArray.forEach(x => (x + x) * 10000000000)
const endForEach = performance.now()
console.log(`Velocidade [forEach]: ${endForEach - startForEach} milissegundos`);