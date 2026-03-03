const visor = document.getElementById("visor");

let numeroAtual = "";
let resultado = 0;
let operador = null;

function adicionar(valor) {

    if("+-*/", includes(valor)){
        if(numeroAtual !== "") {

        if (operador === null) {
            resultado = parseFloat(numeroAtual);
        } else {
            calcularParcial();
        }

        numeroAtual = "";
    }

    operador = valor;
    visor.value += valor;
    return;
}

numeroAtual += valor;
visor.value += valor;
}

function calcularParcial() {
    const numero = parseFloat(numeroAtual);

    if (operador === "+") resultado += numero;
    if (operador === "-") resultado += numero;
    if (operador === "*") resultado += numero;
    if (operador === "/") resultado += numero;
}

function calcular() {
    if (numeroAtual === "" || operador === null)return;

    calcularParcial();
    visor.value = resultado;

    numeroAtual = ""
    operador = null;
}

function limpar() {
    visor.value = "";
    numeroAtual = "";
    resultado = 0;
    operador = "";
}