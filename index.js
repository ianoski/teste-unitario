const leia = require('readline-sync')
const { soma, sub, mult, div } = require('./aritmetica')

function main(){

    try{
    console.log(" ------------------------------------------ ")
    console.log(" Operações aritméticas: + , - , * , / ")
    const num1 = leia.question(" Digite o primeiro numero: ")
    const num2 = leia.question(" Digite o segundo numero: ")
    console.log(" ------------------------------------------ ")
    const op = leia.question(" Escolha uma operacao: ")

    const n1 = Number(num1)
    const n2 = Number(num2)

    if(isNaN(n1) || isNaN(n2)){
        console.log(" Digite um numero valido")
        return
    }

    let resultado = 0;

    switch(op){
        case "+":
            resultado = soma(n1,n2)
            break
        
        case "-":
            resultado = sub(n1,n2)
            break
        
        case "*":
            resultado = mult(n1,n2)
            break
        
        case "/":
            resultado = div(n1,n2)
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
