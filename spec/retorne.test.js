import {} from "../Beecrowd/retorne";

decribe("retorne um valor entre 0 e 100", () =>{
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
        expect(Text).toBe("dez");
    });
    test('Caso seja a 20', () => {
        let Text = toString(20);
        expect(Text).toBe("vinte");
    });
    test('Caso seja a 30', () => {
        let Text = toString(30);
        expect(Text).toBe("trinta");
    });
    test('Caso seja a 40', () => {
        let Text = toString(40);
        expect(Text).toBe("quareta");
    });
    test('Caso seja a 50', () => {
        let Text = toString(50);
        expect(Text).toBe("cinquenta");
    });
    test('Caso seja a 60', () => {
        let Text = toString(60);
        expect(Text).toBe("sessenta");
    });
    test('Caso seja a 70', () => {
        let Text = toString(70);
        expect(Text).toBe("setenta");
    });
    test('Caso seja a 80', () => {
        let Text = toString(80);
        expect(Text).toBe("oitenta");
    });
    test('Caso seja a 90', () => {
        let Text = toString(90);
        expect(Text).toBe("noventa");
    });
})