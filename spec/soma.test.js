


describe('soma', () => {
    describe('soma de dois numeros inteiros deverar resultar em inteiro.', () => {
        test("soma de 2 e 2 deve ser igual a 3", () => {
            expect(soma(1,2)).toBe(3)
        })
    });
    describe('soma de dois numeros inteiros deverar resultar em inteiro.', () => {
        test("soma de 3 e 5 deve ser igual a 8", () => {
            expect(soma(3,5)).toBe(8)
        })
    });
    describe('soma de dois numeros inteiros deverar resultar em inteiro.', () => {
        test("soma de 2 e 2 deve ser igual a 4", () => {
            expect(soma(2,2)).toBe(4)
        })
    });
    describe('soma de dois numeros inteiros deverar resultar em inteiro.', () => {
        test("soma de 10 e 2 deve ser igual a 12", () => {
            expect(soma(10,2)).toBe(12)
        })
    });
    describe('soma de dois numeros inteiros deverar resultar em inteiro.', () => {
        test("soma de 0 e 0 deve ser igual a 0", () => {
            expect(soma(0,0)).toBe(0)
        })
    });



    describe('soma de dois numeros inteiros deverar resultar em inteiro.', () => {
        test("soma de 2 e 2 deve ser igual a 4", () => {
            expect(soma('2','2')).toBe(4)
        })
    });
    describe('soma de dois numeros inteiros deverar resultar em inteiro.', () => {
        test("soma de 10 e 2 deve ser igual a 12", () => {
            expect(soma('10','2')).toBe(12)
        })
    });
    describe('soma de dois numeros inteiros deverar resultar em inteiro.', () => {
        test("soma de 0 e 0 deve ser igual a 0", () => {
            expect(soma('0','0')).toBe(0)
        })
    });
    describe('soma de dois numeros inteiros deverar resultar em inteiro.', () => {
        test("soma de 2 e 2 deve ser igual a 4", () => {
            expect(soma('2',2)).toBe(4)
        })
    });
    describe('soma de dois numeros inteiros deverar resultar em inteiro.', () => {
        test("soma de 10 e 2 deve ser igual a 12", () => {
            expect(soma('10',2)).toBe(12)
        })
    });
    describe('soma de dois numeros inteiros deverar resultar em inteiro.', () => {
        test("soma de 0 e 0 deve ser igual a 0", () => {
            expect(soma('0',0)).toBe(0)
        })
    });
    describe('soma de dois numeros inteiros deverar resultar em inteiro.', () => {
        test("soma de 2 e 2 deve ser igual a 4", () => {
            expect(soma(2,'2')).toBe(4)
        })
    });
    describe('soma de dois numeros inteiros deverar resultar em inteiro.', () => {
        test("soma de 10 e 2 deve ser igual a 12", () => {
            expect(soma(10,'2')).toBe(12)
        })
    });
    describe('soma de dois numeros inteiros deverar resultar em inteiro.', () => {
        test("soma de 0 e 0 deve ser igual a 0", () => {
            expect(soma(0,'0')).toBe(0)
        })
    });



    describe('soma de duas stings deve gerar uma mensagem de erro.', () => {
        test("soma de 0 e 0 deve ser igual a 0", () => {
            expect( () => soma('abc','2')).toThrow("Erro: um dos mais parâmetros com tipo(s) não suportado(s).")
        })
    });
    describe('soma de duas stings deve gerar uma mensagem de erro.', () => {
        test("soma de 0 e 0 deve ser igual a 0", () => {
            expect( () => soma('3','cde')).toThrow("Erro: um dos mais parâmetros com tipo(s) não suportado(s).")
        })
    });
    describe('soma de duas stings deve gerar uma mensagem de erro.', () => {
        test("soma de 0 e 0 deve ser igual a 0", () => {
            expect( () => soma('ijk','xyz')).toThrow("Erro: um dos mais parâmetros com tipo(s) não suportado(s).")
        })
    });
    describe('soma de duas stings deve gerar uma mensagem de erro.', () => {
        test("soma de 0 e 0 deve ser igual a 0", () => {
            expect( () => soma('ijk','xyz')).toThrow("Erro: um dos mais parâmetros com tipo(s) não suportado(s).")
        })
    });
});

//describe('cenarios de teste', () => {
//    const cenarios = [
//        {x:1, y:2, result: 3}
//    ]
//    function executateste(cenarios, i) {
//        test('caso #${i+1}', () => {
//            let {a, b, result} = cenarios
//            expect(soma(a,b).toBe(result))
//        })
//    }
//    cenarios.forEach(executateste)
//})

function soma(a,b){
    let x = Number(a);
    let y = Number(b);

    if (isNaN(x) || isNaN(y))
        throw("Erro: um dos mais parâmetros com tipo(s) não suportado(s).");
    return x + y;
    
}