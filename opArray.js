function somaArr(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function subArr(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total -= arr[i];
    }
    return total;
}

module.exports = { somaArr, subArr }