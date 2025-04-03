// 1. ორი მასივის შექმნა
let numsArray = [1, 2, 3, 4, 5];
let strArray = ["apple", "banana", "cherry"];

// 2. numsArray და strArray გაერთიანება ახალი მასივის combinerArray-ში
let combinedArray = numsArray.concat(strArray);

// 3. copyWithin მეთოდის გამოყენება
combinedArray.copyWithin(4, 0, 3); // პირველი სამი ელემენტი (0, 1, 2) გადაედება ადგილებს, რომლებიც იწყება ინდექსიდან 4

// 4. fill მეთოდის გამოყენება
combinedArray.fill("filled", 2, 5); // ინდექსები 2-დან 4-მდე იცვლება სიტყვაზე "filled"

// 5. pop მეთოდის გამოყენება
let removedLast = combinedArray.pop(); // ბოლო ელემენტი მორჩება
console.log("Removed last element:", removedLast);

// 6. shift მეთოდის გამოყენება
let removedFirst = combinedArray.shift(); // პირველი ელემენტი მორჩება
console.log("Removed first element:", removedFirst);

// 7. unshift მეთოდის გამოყენება
combinedArray.unshift(100, 200); // 100 და 200 დამატება თავიდან

// 8. შედეგების გადამოწმება
console.log("Final array:", combinedArray);

// challenge: modifyArray ფუნქციის შექმნა
function modifyArray(arr) {
    // 1. გაერთიანება
    let combinedArray = arr[0].concat(arr[1]);

    // 2. copyWithin
    combinedArray.copyWithin(4, 0, 3);

    // 3. fill
    combinedArray.fill("filled", 2, 5);

    // 4. pop
    combinedArray.pop();

    // 5. shift
    combinedArray.shift();

    // 6. unshift
    combinedArray.unshift(100, 200);

    return combinedArray;
}

// სატესტო მაგალითი:
let result = modifyArray([numsArray, strArray]);
console.log("Modified array:", result);






















// 1. ორი მასივის შექმნა (people და places)
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Eve", age: 22 }
];

let places = [
    { city: "Paris", country: "France" },
    { city: "Tokyo", country: "Japan" }
];

// 2. people და places გაერთიანება mergedArray-ში
let mergedArray = people.concat(places);

// 3. copyWithin მეთოდის გამოყენება
mergedArray.copyWithin(2, 0, 2); // პირველ ორ ელემენტს (0 და 1) გადატანა იწყება ინდექსიდან 2

// 4. fill მეთოდის გამოყენება
mergedArray.fill({ city: 'New York' }, mergedArray.length - 2, mergedArray.length); // ბოლო ორი ელემენტი შეცვლება { city: 'New York' }

// 5. pop მეთოდის გამოყენება
let removedLast = mergedArray.pop(); // ბოლო ელემენტი ამოიღება
console.log("Removed last element:", removedLast);

// 6. shift მეთოდის გამოყენება
let removedFirst = mergedArray.shift(); // პირველი ელემენტი ამოიღება
console.log("Removed first element:", removedFirst);

// 7. unshift მეთოდის გამოყენება
mergedArray.unshift({ name: 'Charlie' }, { name: 'David' }); // Charlie და David დამატება დასაწყისში

// 8. საბოლოო შედეგების გადამოწმება
console.log("Final array:", mergedArray);










// 1. შექმენით mixedArray
let mixedArray = [1, "two", 3, "four", 5, true, false];

// 2. mixedArray გაერთიანება [true, false] მასივთან extendedArray-ში
let extendedArray = mixedArray.concat([true, false]);

// 3. copyWithin მეთოდის გამოყენება
extendedArray.copyWithin(0, 3, 5); // ელემენტები 3 და 'four' გადაკოპირდება დასაწყისში

// 4. fill მეთოდის გამოყენება
extendedArray.fill(0, 4, 7); // 5, true და false შეიცვლება 0-ით

// 5. pop მეთოდის გამოყენება
let removedLast = extendedArray.pop(); // ბოლო ელემენტი ამოიღება
console.log("Removed last element:", removedLast);

// 6. shift მეთოდის გამოყენება
let removedFirst = extendedArray.shift(); // პირველი ელემენტი ამოიღება
console.log("Removed first element:", removedFirst);

// 7. unshift მეთოდის გამოყენება
extendedArray.unshift(null, undefined); // null და undefined დაემატება დასაწყისში

// 8. საბოლოო შედეგების გადამოწმება
console.log("Final array:", extendedArray);
