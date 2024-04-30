import {calcularMedia, main, verificar} from "../Beecrowd/notasn"

describe('media', () => {
    test('media 1', () => {
            let n1 = 7
            let n2 = 7
            let n3 = 7
            let n4 = 7
            let reposta = calcularMedia(n1,n2,n3,n4)
            expect(reposta).toBe(7)
    });
    test('media 2', () => {
            let n1 = 6
            let n2 = 6
            let n3 = 6
            let n4 = 6
            let reposta = calcularMedia(n1,n2,n3,n4)
            expect(reposta).toBe(6)
    });
    test('media 3', () => {
            let n1 = 8
            let n2 = 8
            let n3 = 8
            let n4 = 8
            let reposta = calcularMedia(n1,n2,n3,n4)
            expect(reposta).toBe(8)
    });
    test('media 4', () => {
            let n1 = '6'
            let n2 = '6'
            let n3 = '6'
            let n4 = '6'
            let reposta = calcularMedia(n1,n2,n3,n4)
            expect(reposta).toBe(6)
    });
});

describe('media ponderada', () => {
    test('media ponderada 1 ', () => {
        let n1 = 8
            let n2 = 10
            let n3 = 5
            let n4 = 5
            let peso1 = 1
            let peso2 = 2
            let peso3 = 3
            let peso4 = 4
            let resposta = calcularMedia(n1,n2,n3,n4,peso1,peso2,peso3,peso4)
        expect(resposta).toBe(6.3)
    });
    test('media ponderada 2 ', () => {
        let n1 = 7
            let n2 = 7
            let n3 = 7
            let n4 = 7
            let peso1 = 1
            let peso2 = 2
            let peso3 = 3
            let peso4 = 4
            let resposta = calcularMedia(n1,n2,n3,n4,peso1,peso2,peso3,peso4)
        expect(resposta).toBe(7)
    });
    test('media ponderada 3 ', () => {
        let n1 = 8
            let n2 = 8
            let n3 = 8
            let n4 = 8
            let peso1 = 1
            let peso2 = 2
            let peso3 = 3
            let peso4 = 4
            let resposta = calcularMedia(n1,n2,n3,n4,peso1,peso2,peso3,peso4)
        expect(resposta).toBe(8)
    });
    test('media ponderada 4 ', () => {
        let n1 = 8
            let n2 = 8
            let n3 = 8
            let n4 = 8
            let peso1 = '1'
            let peso2 = '2'
            let peso3 = '3'
            let peso4 = '4'
            let resposta = calcularMedia(n1,n2,n3,n4,peso1,peso2,peso3,peso4)
        expect(resposta).toBe(8)
    });
    test('media ponderada 5 ', () => {
        let n1 = '8'
            let n2 = '8'
            let n3 = '8'
            let n4 = '8'
            let peso1 = 1
            let peso2 = 2
            let peso3 = 3
            let peso4 = 4
            let resposta = calcularMedia(n1,n2,n3,n4,peso1,peso2,peso3,peso4)
        expect(resposta).toBe(8)
    });
    test('media ponderada 6 ', () => {
        let n1 = '8'
            let n2 = '8'
            let n3 = '8'
            let n4 = '8'
            let peso1 = '1'
            let peso2 = '2'
            let peso3 = '3'
            let peso4 = '4'
            let resposta = calcularMedia(n1,n2,n3,n4,peso1,peso2,peso3,peso4)
        expect(resposta).toBe(8)
    });
});


describe('verificar', () => {
    test('verificar 1', () => {
        let media = 8
        let presenca = 0.76
        let resposta = verificar(media,presenca)
    expect(resposta).toBe("aprovado")
    });
    test('verificar 2', () => {
        let media = 8
        let presenca = 0.75
        let resposta = verificar(media,presenca)
    expect(resposta).toBe("aprovado")
    });
    test('verificar 3', () => {
        let media = 8
        let presenca = 0.74
        let resposta = verificar(media,presenca)
    expect(resposta).toBe("reprovado")
    });
    test('verificar 4', () => {
        let media = 7
        let presenca = 0.76
        let resposta = verificar(media,presenca)
    expect(resposta).toBe("aprovado")
    });
    test('verificar 5', () => {
        let media = 7
        let presenca = 0.75
        let resposta = verificar(media,presenca)
    expect(resposta).toBe("aprovado")
    });
    test('verificar 6', () => {
        let media = 7
        let presenca = 0.74
        let resposta = verificar(media,presenca)
    expect(resposta).toBe("reprovado")
    });
    test('verificar 7', () => {
        let media = 6
        let presenca = 0.76
        let resposta = verificar(media,presenca)
    expect(resposta).toBe("reprovado")
    });
    test('verificar 8', () => {
        let media = 6
        let presenca = 0.75
        let resposta = verificar(media,presenca)
    expect(resposta).toBe("reprovado")
    });
    test('verificar 9', () => {
        let media = 6
        let presenca = 0.74
        let resposta = verificar(media,presenca)
    expect(resposta).toBe("reprovado")
    });
});


describe('main', () => {
    test('main 1', () => {
            let n1 = 7
            let n2 = 7
            let n3 = 7
            let n4 = 7
            let peso1 = 1
            let peso2 = 2
            let peso3 = 3
            let peso4 = 4
            let presenca = 0.76
            let resposta = main(n1,n2,n3,n4,peso1,peso2,peso3,peso4,presenca)
            expect(resposta).toBe("aprovado")
    });
    test('main 2', () => {
            let n1 = 7
            let n2 = 7
            let n3 = 7
            let n4 = 7
            let peso1 = 1
            let peso2 = 2
            let peso3 = 3
            let peso4 = 4
            let presenca = 0.75
            let resposta = main(n1,n2,n3,n4,peso1,peso2,peso3,peso4,presenca)
            // let resposta = verificar(media,presenca)
            expect(resposta).toBe("aprovado")
    });
    test('main 3', () => {
            let n1 = 7
            let n2 = 7
            let n3 = 7
            let n4 = 7
            let peso1 = 1
            let peso2 = 2
            let peso3 = 3
            let peso4 = 4
            let presenca = 0.74
            let resposta = main(n1,n2,n3,n4,peso1,peso2,peso3,peso4,presenca)
            expect(resposta).toBe("reprovado")
    });
    test('main 4', () => {
            let n1 = 8
            let n2 = 8
            let n3 = 8
            let n4 = 8
            let peso1 = 1
            let peso2 = 2
            let peso3 = 3
            let peso4 = 4
            let presenca = 0.74
            let resposta = main(n1,n2,n3,n4,peso1,peso2,peso3,peso4,presenca)
            expect(resposta).toBe("reprovado")
    });
    test('main 5', () => {
            let n1 = 8
            let n2 = 8
            let n3 = 8
            let n4 = 8
            let peso1 = 1
            let peso2 = 2
            let peso3 = 3
            let peso4 = 4
            let presenca = 0.76
            let resposta = main(n1,n2,n3,n4,peso1,peso2,peso3,peso4,presenca)
            expect(resposta).toBe("aprovado")
    });
    test('main 6', () => {
            let n1 = 8
            let n2 = 8
            let n3 = 8
            let n4 = 8
            let peso1 = 1
            let peso2 = 2
            let peso3 = 3
            let peso4 = 4
            let presenca = 0.75
            let resposta = main(n1,n2,n3,n4,peso1,peso2,peso3,peso4,presenca)
            expect(resposta).toBe("aprovado")
    });
    test('main 7', () => {
            let n1 = 6
            let n2 = 6
            let n3 = 6
            let n4 = 6
            let peso1 = 1
            let peso2 = 2
            let peso3 = 3
            let peso4 = 4
            let presenca = 0.76
            let resposta = main(n1,n2,n3,n4,peso1,peso2,peso3,peso4,presenca)
            expect(resposta).toBe("reprovado")
    });
    test('main 8', () => {
            let n1 = 6
            let n2 = 6
            let n3 = 6
            let n4 = 6
            let peso1 = 1
            let peso2 = 2
            let peso3 = 3
            let peso4 = 4
            let presenca = 0.75
            let resposta = main(n1,n2,n3,n4,peso1,peso2,peso3,peso4,presenca)
            expect(resposta).toBe("reprovado")
    });
    test('main 9', () => {
            let n1 = 6
            let n2 = 6
            let n3 = 6
            let n4 = 6
            let peso1 = 1
            let peso2 = 2
            let peso3 = 3
            let peso4 = 4
            let presenca = 0.74
            let resposta = main(n1,n2,n3,n4,peso1,peso2,peso3,peso4,presenca)
            expect(resposta).toBe("reprovado")
    });
});