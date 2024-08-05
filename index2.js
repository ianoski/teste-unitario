const leia = require('readline-sync')
const { somaArr, subArr } = require('./opArray')

function main(){
    let valArr = []
    try{
        console.log(" ------------------------------------------ ")
        console.log(" soma e subtracao de valroes em array: + , - ")
        for(let i=0;i<5;i++){
            let val = Number(leia.question(" Digite um numero: "))
            valArr.push(val)
        }

        console.log(valArr)
        const op = leia.question(" Escolha uma operacao: ")

        let resultado = 0;

    switch(op){
        case "+":
            resultado = somaArr(valArr)
            break
        
        case "-":
            resultado = subArr(valArr)
            break
        
        default:
            console.log(" operacao invalida!")
            return
    }
    console.log(` Resultado = ${resultado}`)
    
    
    }catch(err){
        console.error(" Erro de sistema!",err)
    }
}

main()
