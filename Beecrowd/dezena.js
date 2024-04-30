export function toString(dezena){
    if(typeof dezena == "boolean"){
        return dezena + "não corresponde a um algarismo"
    }
    let resposta;
    if(dezena == 0) resposta = ""
    if(dezena == 1) resposta = "dez"
    if(dezena == 2) resposta = "vinte"
    if(dezena == 3) resposta = "trinta"
    if(dezena == 4) resposta = "quareta"
    if(dezena == 5) resposta = "cinquenta"
    if(dezena == 6) resposta = "sessenta"
    if(dezena == 7) resposta = "setenta"
    if(dezena == 8) resposta = "oitenta"
    if(dezena == 9) resposta = "noventa"
    if(dezena >= 10 || dezena <= -1 ) resposta = "error"
    if(isNaN(dezena)) resposta = ("não corresponde a uma algarismo")
    return resposta;
}