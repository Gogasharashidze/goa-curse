function selectPayer(names) {
    if (names.length === 0) {
        return "სია ცარიელია!";
    }
    let randomIndex = Math.floor(Math.random() * names.length);
    return `${names[randomIndex]} გადაიხდის ყველას საკვების გადასახადს!`;
}


let nameList = ["გიორგი", "ანა", "ნიკა", "თეო", "ლუკა"];
console.log(selectPayer(nameList));






function fizzBuzz(n) {
    let result = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    
    return result;
}


console.log(fizzBuzz(20));
