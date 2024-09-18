const inputFardo = document.getElementById("fardo");
const inputDividir = document.getElementById("dividir");
const inputPercentual = document.getElementById("percentual");
const btnCalcular = document.getElementById("btn");
const trocarTexto = document.getElementById("trocarTexto");

btnCalcular.addEventListener('click', () => {
    let fardo = parseFloat(inputFardo.value);
    let dividir = parseFloat(inputDividir.value);
    let percentual = parseFloat(inputPercentual.value);

    let precoCusto = fardo / dividir;

    percentual = percentual / 100;

    let calculoPercentual = precoCusto * percentual;
    percentual = percentual * 100;
    let precoFinal = precoCusto + calculoPercentual;

    if (Number.isNaN(fardo) || Number.isNaN(dividir) || Number.isNaN(percentual)) {
        alert("Preencha todos os campos!");
    } else {
        document.getElementById("trocarTexto").innerHTML = (`O Preço de Custo é de: ${precoCusto.toFixed(2)}. 
        O Preço de venda é de: R$: ${precoFinal.toFixed(2)}. O Percentual é de: ${percentual}%`);
    }
});