// Adicionando vários valores ao Array Original com o operador push e spread
let arrOriginal = ["Valorant", "CS 2"];
let arr1 = ["Minecraft", "LOL"];
let arr2 = ["PUBG", "Free Fire"];

arrOriginal.push(...arr1, ...arr2);
console.log(arrOriginal);