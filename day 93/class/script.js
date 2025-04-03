function processFruits(fruits) {
    let citrus = fruits.slice(1, 3);
    console.log(citrus);

    fruits.splice(-2, 2, 'fig');
    console.log(fruits);

    let fruitstring = fruits.join('-');
    console.log(fruitstring);

    return fruitString
}

let fruits = ["apple", "orange", "lemon", "banana", "grape"];
let res = processFruits(fruits);
console.log(res);

