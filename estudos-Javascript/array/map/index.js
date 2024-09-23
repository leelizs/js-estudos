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