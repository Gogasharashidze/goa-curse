function findMax(a, b, c) {
    return Math.max(a, b, c);
}

console.log(findMax(10, 25, 7)); 

function isEven(number) {
    return number % 2 === 0;
}


console.log(isEven(10)); 
console.log(isEven(7)); 





function multiplyNumbers(start, end) {
    let product = 1;
    
    for (let i = start; i <= end; i++) {
        product *= i;
    }
    
    return product;
}


console.log(multiplyNumbers(1, 5)); 







function findMin(a, b, c) {
    return (a < b && a < c) ? a : (b < c ? b : c);
}


console.log(findMin(10, 25, 7)); 













function calculateSum(n) {
    let sum = 0;
    
    switch (true) {
        case n > 0:
            for (let i = 1; i <= n; i++) {
                sum += i;
            }
            return sum;
        default:
            return "შეიყვანეთ დადებითი რიცხვი!";
    }
}


console.log(calculateSum(5)); 

