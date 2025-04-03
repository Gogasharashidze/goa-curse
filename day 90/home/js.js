let myArray = [42, "Hello", true, null, undefined, {name: "Alice"}, [1, 2, 3], function() { return "Hi"; }, Symbol("id"), BigInt(9007199254740991)];

// ინდივიდუალური 5 მნიშვნელობის მიღება
console.log(myArray[0]); // 42
console.log(myArray[1]); // "Hello"
console.log(myArray[2]); // true
console.log(myArray[5]); // {name: "Alice"}
console.log(myArray[7]()); // "Hi" (ფუნქციის გამოძახება)

// დარჩენილი 5 მნიშვნელობის შეცვლა
myArray[3] = "New Value";
myArray[4] = 999;
myArray[6] = false;
myArray[8] = [5, 6, 7];
myArray[9] = { age: 25 };

console.log(myArray);













//N2


let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// მაგალითი 2 - სხვადასხვა ტიპის მონაცემებით სავსე მასივი
let mixedArray = ["Hello", 42, true, null, { name: "Alice" }];
console.log(mixedArray);

// მაგალითი 3 - ჩაშენებული მასივი
let nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log(nestedArray);