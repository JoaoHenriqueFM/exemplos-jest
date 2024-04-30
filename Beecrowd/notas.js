

export function verificar(n1,n2,n3,n4,peso1=1,peso2=1,peso3=1,peso4=1){
    let letra = isNaN(n1,n2,n3,n4,peso1=1,peso2=1,peso3=1,peso4=1)
    let media = (n1*1) + (n2*1) + (n3*1) + (n4*1) / 4
    let mediap = (n1*peso1) + (n2*peso2) + (n3*peso3) + (n4*peso4) / (peso1*1+peso2*1+peso3*1+peso4*1)

    let resposta;
    if(letra ){

    }
    if(mediap, media >= 7) {
        resposta = "aprovado";
    }
    else {
        resposta = "reprovado";
    }
    
    
    return resposta;
}
//     let mediaz = (peso1*n1) + (peso2*n2) + (peso3*n3) + (peso4*n4) / (peso1*1+peso2*1+peso3*1+peso4*1)
//     return mediaz >=7 ?"aprovado":"reprovado"
// }
// if(isNaN(n1,n2,n3,n4,peso1,peso2,peso3,peso4)){
//     resposta = "error" 
// }