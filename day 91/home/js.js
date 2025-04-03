// 1. ფუნქცია, რომელიც აბრუნებს მასივის ელემენტების რაოდენობას
function getArrayLength(arr) {
    return arr.length;
}

// 2. ფუნქცია, რომელიც აერთიანებს ორ მასივს
function concatenateArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

// 3. ფუნქცია, რომელიც მასივში ამატებს მნიშვნელობას და აბრუნებს ახალ სიგრძეს
function pushToArray(arr, value) {
    return arr.push(value);
}

// 4. ფუნქცია, რომელიც შლის მასივის ბოლო ელემენტს და აბრუნებს მას
function popFromArray(arr) {
    return arr.pop();
}

// 5. ფუნქცია, რომელიც აერთიანებს ორ მასივს, ამატებს ახალ მნიშვნელობას და აბრუნებს განახლებულ მასივს
function concatenateAndPush(arr1, arr2, value) {
    let newArray = arr1.concat(arr2);
    newArray.push(value);
    return newArray;
}

// 6. ფუნქცია, რომელიც აბრუნებს მასივის ყველა ელემენტის ჯამს (for loop-ის გამოყენებით)
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// 7. ფუნქცია, რომელიც ქმნის ახალ მასივს, რომელშიც შედის მხოლოდ ლუწი ინდექსის მქონე ელემენტები
function evenIndexedElements(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i += 2) {
        newArray.push(arr[i]);
    }
    return newArray;
}

// 8. ფუნქცია, რომელიც იღებს სტრიქონების მასივს და აბრუნებს ახალ მასივს თითოეული სტრიქონის სიგრძით
function getStringLengths(arr) {
    let lengthsArray = [];
    for (let i = 0; i < arr.length; i++) {
        lengthsArray.push(arr[i].length);
    }
    return lengthsArray;
}

// სატესტო მაგალითები:
let myArray = [1, 2, 3];
let anotherArray = [4, 5, 6];
let numbersArray = [1, 2, 3, 4, 5, 6];
let mixedArray = ["apple", "banana", "cherry", "date", "elderberry"];

console.log(getArrayLength(myArray)); // 3
console.log(concatenateArrays(myArray, anotherArray)); // [1, 2, 3, 4, 5, 6]
console.log(pushToArray(myArray, 7)); // 4 (ახალი სიგრძე)
console.log(myArray); // [1, 2, 3, 7]
console.log(popFromArray(myArray)); // 7 (მოშლილი ელემენტი)
console.log(myArray); // [1, 2, 3]
console.log(concatenateAndPush(myArray, anotherArray, 10)); // [1, 2, 3, 4, 5, 6, 10]
console.log(sumArray(numbersArray)); // 21
console.log(evenIndexedElements(numbersArray)); // [1, 3, 5]
console.log(getStringLengths(mixedArray)); // [5, 6, 6, 4, 10]
