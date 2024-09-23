let animais = [
    { numero: 1, nome: 'Pigs on the Wing (Part One)' },
    { numero: 2, nome: 'Dogs' },
    { numero: 3, nome: 'Pigs (Three Different Ones)' },
    { numero: 4, nome: 'Sheep' },
    { numero: 5, nome: 'Pigs on the Wing (Part Two)' }
];

// Filtrando os valores do Array com o operador filter
console.log(animais.filter(el => el['nome'].includes('Pigs'))); // apenas os elementos incluindo 'Pigs', são inseridos na matriz filtrada.