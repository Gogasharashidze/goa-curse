for(let i = 0; i<= 50 ; i +=2){
    console.log(i)
}

// 2
let sum = 0;

for (let i = 0; i <= 10; i++) {
    sum += i;
}

console.log(`საბოლოო რიცხვების ჯამი არის ${sum}`);

// 3

for (let x = 1; x <= 10; x++) {
    console.log(`${x} - ის კვადრატი არის ${x ** 2}`);
}


// 4

let word = "გამარჯობა";

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}



// 5

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
