const { somaArr, subArr } = require('./opArray')

describe("Testes de operação de soma e subtração de um array numérico", ()=>{
    test('A soma de 1 + 1 + 1 + 1 + 1 no array deve ser = 5', ()=>{
        let arr = [1, 1, 1, 1, 1]
        expect(somaArr(arr))
        .toBe(5)
    })

    test('A subtracao de - 1 - 1 - 1 - 1 - 1 no array deve ser = - 5',()=>{
        let arr = [1, 1, 1, 1, 1]
        expect(subArr(arr))
        .toBe(-5)
    })
})