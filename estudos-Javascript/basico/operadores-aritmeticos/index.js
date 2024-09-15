let nome = "Leonardo";

if(nome != "Leonardo") {
    console.log("Não é possível acessar!");
} else {
    console.log("Bem vindo!");
}

let nome2 = "Anderson";
let sobrenome = "Silva";

console.log(nome2 + " " + sobrenome);
console.log(`${nome} ${sobrenome}`);

let states = nome != "Leonardo" ? "Não é possivel acessar!" : "Bem vindo!";

console.log(states);