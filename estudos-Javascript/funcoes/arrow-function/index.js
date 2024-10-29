const usuarios = [];

const criaUsuario = (...nomes) => {
    nomes.forEach(nome => usuarios.push(nome));
};

criaUsuario("Nokia", "Leelizs", "Medina", "Frigideira", "Mavis");

for (let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i]);
}
