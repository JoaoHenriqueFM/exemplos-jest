import { main } from "../Beecrowd/bee1013";



describe('teste maior', () => {
    const cenarios = [
        {
            lines: ['7 14 106'],
            result: ["106 eh o maior"]
        },
        {
            lines: ['217 14 6'],
            result: ['217 eh o maior']
        }
    ]
cenarios.forEach(cenario, i => {
    test('Caso #' + i, () => {
        let { lines, result } =
        cenario;
        let output = main(lines);
        expect(output).toBe
        (result)
    });
});
});
