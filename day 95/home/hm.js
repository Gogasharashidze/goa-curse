function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; // ლიპი წელიწადი
            } else {
                return false; // არ არის ლიპი
            }
        } else {
            return true; // ლიპი წელიწადი
        }
    } else {
        return false; // არ არის ლიპი
    }
}

// მაგალითი გამოყენებისთვის:
const year = prompt("შეიყვანე წელი:");
if (isLeapYear(parseInt(year))) {
    console.log(`${year} არის ლიპი წელიწადი!`);
} else {
    console.log(`${year} არ არის ლიპი წელიწადი.`);
}












//2
function whoPays(names) {
    const randomIndex = Math.floor(Math.random() * names.length);
    const person = names[randomIndex];
    return `${person} გადაიხდის ყველას საჭმლის ფულს! 🍕`;
}

// გამოყენება:
const namesList = ["ნიკა", "მარი", "გიორგი", "ანა", "ლუკა"];
console.log(whoPays(namesList));


//3
function fizzBuzzList(numbers) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];

        if (num % 3 === 0 && num % 5 === 0) {
            result.push("FizzBuzz");
        } else if (num % 3 === 0) {
            result.push("Fizz");
        } else if (num % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(num); // მხოლოდ მაშინ ამატებს რიცხვს, როცა არ იყოფა 3-ზე ან 5-ზე
        }
    }

    return result;
}

// გამოყენება:
const numbers = [1, 3, 5, 10, 15, 16, 20, 21];
console.log(fizzBuzzList(numbers)); 
// შედეგი: [1, "Fizz", "Buzz", "Buzz", "FizzBuzz", 16, "Buzz", "Fizz"]

