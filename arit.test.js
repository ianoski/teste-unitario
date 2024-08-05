const { soma, sub, mult, div } = require('./aritmetica')

describe("Teste das funções das operações aritméticas", ()=>{
    test("A soma de 8 + 2 = ", ()=>{
        expect(soma(8,2))
        .toBe(10)
    })

    test("A subtracao de 8 - 2 = ", ()=>{
        expect(sub(8,2))
        .toBe(6)
    })

    test("A multiplicacao de 8 * 2 = ", ()=>{
        expect(mult(8,2))
        .toBe(16)
    })

    test("A divisao de 8 / 2 = 4", ()=>{
        expect(div(8,2))
        .toBe(4)
    })

    test("A divisao de 8 / 0 = inválido", ()=>{
        expect(()=> div(8,0))
        .toThrow("Divisao por zero nao e possivel!")
    })
})