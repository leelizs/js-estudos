// const nome = "Leonardo";

// let i = 0;

// while(i < nome.length) {
//     console.log(nome[i]);
//     i++;
// }

function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = randomNumber(min, max);

while (rand !== 10) {
    rand = randomNumber(min, max);
    console.log(rand);
}

do {
    rand = randomNumber(min, max);
    console.log(rand);
} while (rand !== 10)
