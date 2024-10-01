// escreva um array de nomes e filtre com letra "A"

const nomes = ["Anderson", "Leonardo", "Alessandra", "Nokia", "Alex", "Andressa"];

const filtrados = nomes.filter(el => el.startsWith("An"));
console.log(filtrados);
console.log("A");

const str = "Leonardo Silva";
// const regex = /^[A-Z][a-zA-Z0-9]+ardo.+$/.test(str);
// console.log(regex);

// começa com Santa, tenha duas palavras no máximo, e que a primeira letra da segunda palavra comece com T
/* const cidade = "Santa Terezinha";
const regex = /^Santa\sT.+$/.test(cidade);
console.log(regex); */

const cpf = "550.774.848-99"
const regex = /^\d\d\d\.\d\d\d\.\d\d\d-\d\d$/.test(cpf);
console.log(regex);