export function toString(algarismo){
    if(typeof algarismo == "boolean"){
        return algarismo + "não corresponde a um algarismo"
    }
    let resposta;
    if(algarismo == 0) resposta = "zero"
    if(algarismo == 1) resposta = "um"
    if(algarismo == 2) resposta = "dois"
    if(algarismo == 3) resposta = "tres"
    if(algarismo == 4) resposta = "quatro"
    if(algarismo == 5) resposta = "cinco"
    if(algarismo == 6) resposta = "seis"
    if(algarismo == 7) resposta = "sete"
    if(algarismo == 8) resposta = "oito"
    if(algarismo == 9) resposta = "nove"
    if(isNaN(algarismo)) resposta = ( algarismo + ' não corresponde a uma algarismo')
    if(algarismo <=-1 || algarismo >=10) resposta = algarismo + " não corresponde a uma algarismo"
    //if(algarismo >=50) resposta = "50 não corresponde a uma algarismo"
    //if(algarismo <=-1) resposta = "-1 não corresponde a uma algarismo"

    return resposta;
}