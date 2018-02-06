


function pegaNumeroDecimal(texto) {
    return parseFloat(prompt(texto).replace(",","."));
}

function formataValorDecimal(valor) {
    return valor.toFixed(2).replace(".",",");
}