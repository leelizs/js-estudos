let animais = [
    { numero: 1, nome: 'Pigs on the Wing (Part One)' },
    { numero: 2, nome: 'Dogs' },
    { numero: 3, nome: 'Pigs (Three Different Ones)' },
    { numero: 4, nome: 'Sheep' },
    { numero: 5, nome: 'Pigs on the Wing (Part Two)' }
];

// Find
console.log(animais.find(el => el['nome'].includes('Pigs')));

// FindLast
console.log(animais.findLast(el => el['nome'].includes('Pigs')));

// No exemplo acima, apenas o primeiro e o último objetos contendo 'Pigs' são encontrados. 
// O objeto do meio {no: 3, track: 'Pigs (Three Different Ones)'} não pode ser alcançado por esses dois métodos.

// FindIndex
console.log(animais.findIndex(el => el['nome'].includes('Pigs')));

// FindLastIndex
console.log(animais.findLastIndex(el => el['nome'].includes('Pigs')));

// FindIndex
console.log(animais.findIndex(el => el['nome'].includes('Horses')));