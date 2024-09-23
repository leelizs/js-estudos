let removeTrolls = ["Leelizs", "KgBR", "Frigi Frigi", "medodemulher", "Nokia"];
// Removendo multiplos valores de uma posição especifica em um Array com o operador splice
removeTrolls.splice(1, 3);
console.log(removeTrolls);
// Removendo e adicionando valores no Array com o operador splice
removeTrolls.splice(2, 0, "Frigi Frigi");
console.log(removeTrolls);