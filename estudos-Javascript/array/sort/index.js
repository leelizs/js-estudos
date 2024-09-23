let frutas = ["Banana", "Maçã", "Pera", "Abacaxi", "Manga", "Laranja"];

//  O operador sort muda o array no qual está agindo
console.log(frutas.sort((a, b) => {
    return a === b ? 0 : a > b ? 1 : -1;
}));

console.log(frutas.sort((a, b) => {
    return a === b ? 0 : a < b ? 1 : -1;
}));