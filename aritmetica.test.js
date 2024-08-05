const { soma, sub, mult, div } = require('./aritmetica')

describe("Testes das operacoes aritmeticas", ()=>{
    test("A soma de 8 + 2 deve ser = 10", ()=>{
        expect(soma(8,2))
        .toBe(10)
    })

    test("A subtracao de 8 - 2 deve ser = 6", ()=>{
        expect(sub(8,2))
        .toBe(6)
    })

    test("A multiplicacao de 8 * 2 deve ser = 16", ()=>{
        expect(mult(8,2))
        .toBe(16)
    })

    test("A divisao de 8 / 2 deve ser = 4", ()=>{
        expect(div(8,2))
        .toBe(4)
    })

    test("A divisao por zero deve lancar um erro!", ()=>{
        expect(()=>div(8,0))
        .toThrow("Divisao por zero nao e possivel!")
    })
})
