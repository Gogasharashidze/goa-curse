function guessPassword() {
    let attempts = 3;
    while (attempts > 0) {
        let userInput = prompt("შეიყვანეთ პაროლი:");
        
        if (userInput === password) {
            alert("თქვენი შეყვანილი პაროლი სწორია");
            return;
        } else {
            attempts--;
            if (attempts > 0) {
                alert(`პაროლი არასწორია, დარჩენილი ცდები: ${attempts}`);
            } else {
                alert("თქვენ ამოგეწურათ ცდების რაოდენობა");
            }
        }
    }
}

guessPassword();


function factorial(N) {
    let result = 1;
    for (let i = 2; i <= N; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); 
console.log(factorial(7)); 
console.log(factorial(0)); 





function countdown() {
    let i = 100;
    let interval = setInterval(() => {
        console.log(`დარჩენილია ${i} წამი`);
        if (i === 0) {
            clearInterval(interval);
        }
        i--;
    }, 1000); }

countdown();





