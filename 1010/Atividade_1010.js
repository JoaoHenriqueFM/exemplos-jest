var input = '12 1 5.50\n16 2 5.10\n'
var lines = input.split('\n');

function separar(sp){
    let A = lines[0].split(" ")
    let B = lines[1].split(" ")
    let N2 = parseFloat(A[1])
    let N3 = parseFloat(A[2])
    let P2 = parseFloat(B[1])
    let P3 = parseFloat(B[2])

    return(separar)
}


console.log("VALOR A PAGAR: R$", parseFloat((N2*N3)+(P2*P3)).toFixed(2))

export {}