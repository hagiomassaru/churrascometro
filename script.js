let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let inputResultado = document.getElementById("resultado");

function calculo() {
    let qntCarne =
        inputAdultos.value * carnePP(inputDuracao.value) +
        (carnePP(inputDuracao.value) / 2) * inputCriancas.value;
    let qntCerveja = inputAdultos.value * cervejaPP(inputDuracao.value);
    let qntBebidas =
        inputAdultos.value * bebidasPP(inputDuracao.value) +
        (bebidasPP(inputDuracao.value) / 2) * inputCriancas.value;

    console.log(qntBebidas, qntCarne, qntCerveja);

    inputResultado.innerHTML = `<p>${qntCarne / 1000} Kg de carne</p>`;
    inputResultado.innerHTML += `<p>${Math.ceil(
        qntCerveja / 355
    )} lata(s) de cerveja (cada 355ml)</p>`;
    inputResultado.innerHTML += `<p>${Math.ceil(
        qntBebidas / 2000
    )} garrafas de bebida(s)</p>`;
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}
