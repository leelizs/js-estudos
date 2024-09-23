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