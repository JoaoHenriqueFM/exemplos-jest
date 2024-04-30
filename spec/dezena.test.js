import { toString } from "../Beecrowd/dezena"

describe("retorne valor entre 0 e 90", () =>{
    test('Caso seja a 0', () => {
        let Text = toString(0);
        expect(Text).toBe("");
    });
    test('Caso seja a 10', () => {
        let Text = toString(1);
        expect(Text).toBe("dez");
    });
    test('Caso seja a 20', () => {
        let Text = toString(2);
        expect(Text).toBe("vinte");
    });
    test('Caso seja a 30', () => {
        let Text = toString(3);
        expect(Text).toBe("trinta");
    });
    test('Caso seja a 40', () => {
        let Text = toString(4);
        expect(Text).toBe("quareta");
    });
    test('Caso seja a 50', () => {
        let Text = toString(5);
        expect(Text).toBe("cinquenta");
    });
    test('Caso seja a 60', () => {
        let Text = toString(6);
        expect(Text).toBe("sessenta");
    });
    test('Caso seja a 70', () => {
        let Text = toString(7);
        expect(Text).toBe("setenta");
    });
    test('Caso seja a 80', () => {
        let Text = toString(8);
        expect(Text).toBe("oitenta");
    });
    test('Caso seja a 90', () => {
        let Text = toString(9);
        expect(Text).toBe("noventa");
    });
    test('Caso seja a 92', () => {
        let Text = toString(92);
        expect(Text).toBe("error");
    });
    test('Caso seja a -1', () => {
        let Text = toString(-1);
        expect(Text).toBe("error");
    });
    test('Caso seja a abc', () => {
        let Text = toString("abc");
        expect(Text).toBe('não corresponde a uma algarismo');
    });
    test('Caso seja a aaa', () => {
        let Text = toString("aaa");
        expect(Text).toBe('não corresponde a uma algarismo');
    });
    test('Caso seja a bbb', () => {
        let Text = toString("bbb");
        expect(Text).toBe('não corresponde a uma algarismo');
    });
    test('Caso seja a bbb', () => {
        let Text = toString("bbb");
        expect(Text).toBe('não corresponde a uma algarismo');
    });
    test('Caso seja a "20"', () => {
        let Text = toString("2");
        expect(Text).toBe("vinte");
    });
})