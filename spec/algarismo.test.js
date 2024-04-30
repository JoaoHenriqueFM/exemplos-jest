import { toString } from "../Beecrowd/algarismo";

describe("Transforma um algarismo em um texto", () =>{
    test('Caso seja a 0', () => {
        let Text = toString(0);
        expect(Text).toBe("zero");
    });
    test('Caso seja a 1', () => {
        let Text = toString(1);
        expect(Text).toBe("um");
    });
    test('Caso seja a 2', () => {
        let Text = toString(2);
        expect(Text).toBe("dois");
    });
    test('Caso seja a 3', () => {
        let Text = toString(3);
        expect(Text).toBe("tres");
    });
    test('Caso seja a 4', () => {
        let Text = toString(4);
        expect(Text).toBe("quatro");
    });
    test('Caso seja a 5', () => {
        let Text = toString(5);
        expect(Text).toBe("cinco");
    });
    test('Caso seja a 6', () => {
        let Text = toString(6);
        expect(Text).toBe("seis");
    });
    test('Caso seja a 7', () => {
        let Text = toString(7);
        expect(Text).toBe("sete");
    });
    test('Caso seja a 8', () => {
        let Text = toString(8);
        expect(Text).toBe("oito");
    });
    test('Caso seja a 9', () => {
        let Text = toString(9);
        expect(Text).toBe("nove");
    });
    test('Caso seja a 10', () => {
        let Text = toString(10);
        expect(Text).toBe("10 não corresponde a uma algarismo");
    });
    test('Caso seja a 50', () => {
        let Text = toString(50);
        expect(Text).toBe("50 não corresponde a uma algarismo");
    });
    test('Caso seja a -1', () => {
        let Text = toString(-1);
        expect(Text).toBe("-1 não corresponde a uma algarismo");
    });
    test('Caso seja a "A"', () => {
        let Text = toString("A");
        expect(Text).toBe("A não corresponde a uma algarismo");
    });
    test('Caso seja a "ABC"', () => {
        let Text = toString("ABC");
        expect(Text).toBe("ABC não corresponde a uma algarismo");
    });
    test('Caso seja a "KLÇSDJFKLJSDFLKJSDFÇJKL"', () => {
        let Text = toString("KLÇSDJFKLJSDFLKJSDFÇJKL");
        expect(Text).toBe("KLÇSDJFKLJSDFLKJSDFÇJKL não corresponde a uma algarismo");
    });
    test('Caso seja a "HGRUHASDFJKHSDFAJKSDFA"', () => {
        let Text = toString("HGRUHASDFJKHSDFAJKSDFA");
        expect(Text).toBe("HGRUHASDFJKHSDFAJKSDFA não corresponde a uma algarismo");
    });
    test('Caso seja a "jklsfhjklsdfhlkjfsd"', () => {
        let Text = toString("jklsfhjklsdfhlkjfsd");
        expect(Text).toBe("jklsfhjklsdfhlkjfsd não corresponde a uma algarismo");
    });
});