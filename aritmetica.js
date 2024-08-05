function soma(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function mult(a,b){
    return a*b
}

function div(a,b){
    if(b===0){
        throw new Error("Divisao por zero nao e possivel!")
    }
    return a/b
}

module.exports = { soma, sub, mult, div }