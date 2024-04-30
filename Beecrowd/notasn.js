
// export function media1(n1,n2,n3,n4){
//     return (n1*1) + (n2*1) + (n3*1) + (n4*1) / 4
// }
export function calcularMedia(n1,n2,n3,n4,peso1=1,peso2=1,peso3=1,peso4=1){
    return ((n1*peso1) + (n2*peso2) + (n3*peso3) + (n4*peso4)) / (peso1*1+peso2*1+peso3*1+peso4*1)
}
export function verificar(media, presenca){
    let reposta
    if (media >= 7 && presenca >= 0.75) {
        reposta = "aprovado"
    } else {
        reposta = "reprovado"
    }
    return reposta
}
export function main(n1,n2,n3,n4,peso1,peso2,peso3,peso4,presenca){
    let media = calcularMedia(n1,n2,n3,n4,peso1,peso2,peso3,peso4)
    let resultado = verificar(media,presenca)
    return resultado
}
