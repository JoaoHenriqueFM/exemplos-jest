import {verificar} from "../Beecrowd/notas"
import { calcularMedia } from "../Beecrowd/notasn";

    describe('Nota e aprovado ou reprovado ', () => {
        test('caso seja a aprovado', () => {
            let n1 = 8
            let n2 = 10
            let n3 = 5
            let n4 = 5
            let result = verificar(n1,n2,n3,n4)
            expect(result).toBe("aprovado")
        });
        test('caso seja a aprovado', () => {
            let n1 = 8
            let n2 = 9
            let n3 = 5
            let n4 = 5
            let result = calcularMedia(n1,n2,n3,n4)
            expect(result).toBe("aprovado")
        });
        test('caso seja a aprovado', () => {
            let n1 = 8.5
            let n2 = 8
            let n3 = 7
            let n4 = 6.5
            let result = verificar(n1,n2,n3,n4)
            expect(result).toBe("aprovado")
        });
        test('caso seja a aprovado', () => {
            let n1 = '7'
            let n2 = '8'
            let n3 = '9'
            let n4 = '10'
            let result = verificar(n1,n2,n3,n4)
            expect(result).toBe("aprovado")
        });
        test('caso seja a aprovado 5', () => {
            let n1 = '1'
            let n2 = '1'
            let n3 = '1'
            let n4 = '10'
            let result = verificar(n1,n2,n3,n4)
            expect(result).toBe("reprovado")
        });
        test('caso seja a aprovado *', () => {
            let n1 = '1'
            let n2 = '1'
            let n3 = '1'
            let n4 = '1'
            let peso1 = '1'
            let peso2 = '2'
            let peso3 = '3'
            let peso4 = '4'
            let result = verificar(n1,n2,n3,n4,peso1,peso2,peso3,peso4)
            expect(result).toBe("reprovado")
        });
        test('caso seja a aprovado **', () => {
            let n1 = 8
            let n2 = 10
            let n3 = 5
            let n4 = 5
            let peso1 = 1
            let peso2 = 2
            let peso3 = 3
            let peso4 = 4
            let result = verificar(n1,n2,n3,n4,peso1,peso2,peso3,peso4)
            expect(result).toBe("aprovado")
        });
        // test('caso seja a aprovado error ', () => {
        //     let n1 = 8
        //     let n2 = 10
        //     let n3 = 'zebra'
        //     let n4 = 5
        //     let peso1 = 1
        //     let peso2 = 2
        //     let peso3 = 3
        //     let peso4 = 4
        //     let result = verificar(n1,n2,n3,n4,peso1,peso2,peso3,peso4)
        //     expect(result).toBe("error")
        // });
    });