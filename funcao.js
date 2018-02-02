


function pegaNumeroDecimal(texto) {
    return parseFloat(prompt(texto).replace(",","."));
}

function formataValorDecimal() {
    return valor.toFixed(2).replace(".",",");
}