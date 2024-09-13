const visor = document.getElementById("visor");

function tecla0() {
    visor.value += "0";
}
function tecla1() {
    visor.value += "1";
}
function tecla2() {
    visor.value += "2";
}
function tecla3() {
    visor.value += "3";
}
function tecla4() {
    visor.value += "4";
}
function tecla5() {
    visor.value += "5";
}
function tecla6() {
    visor.value += "6";
}
function tecla7() {
    visor.value += "7";
}
function tecla8() {
    visor.value += "8";
}
function tecla9() {
    visor.value += "9";
}
function teclaPonto() {
    visor.value += ".";
}
function teclaDividir() {
    visor.value += "/";
}
function teclaFatorar() {
    visor.value += "!";
    calculaOperacao();
}
function teclaSomar() {
    visor.value += "+";
}
function teclaMultiplicar() {
    visor.value += "*";
}
function teclaSubtrair() {
    visor.value += "-";
}
function teclaAbreParenteses() {
    visor.value += "(";
}
function teclaFechaParenteses() {
    visor.value += ")";
}
function teclaLimpar() {
    visor.value = "";
}

visor.addEventListener('input', 
    function(){
        visor.value = visor.value.replace(/[^0-9+\-*/().!]/g, '');
    }
);

function calculaOperacao() {
    let resultado = visor.value;
    if (resultado.includes("!")) {
        resultado = parseInt(visor.value);
        for (let i = (resultado-1); i >= 1; i--){
            resultado*=i;
        }
        visor.value = resultado;
    }
    else{

    visor.value = math.evaluate(resultado);
    }
}
