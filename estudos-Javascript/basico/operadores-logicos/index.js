let nome = "Leonardo";

if(nome != "Leonardo") {
    console.log("Não é possível acessar!");
} else {
    console.log("Bem vindo!");
}

let states = nome != "Leonardo" ? "Não é possivel acessar!" : "Bem vindo!";

console.log(states);

let nomes = ["Leonardo", "Anderson"];

if(nomes[0] == "Leonardo" && nomes[1] == "Anderson") {
    console.log("Tudo certo!");
} else {
    console.log("Não está certo!");
}

nomes = ["Leonardo", "Erika"];

if(nomes[0] == "Leonardo" || nomes[1] == "Anderson") {
    console.log("Tudo certo!");
} else {
    console.log("Não está certo!");
}