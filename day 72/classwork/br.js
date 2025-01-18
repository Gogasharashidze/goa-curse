let age = Number(prompt("მომხარებელს შეიყვანოს ასაკი:"));

if (age > 80) {
  console.log("დაბერდი ძმაო");
} else if (age >= 18) {
  console.log("შენ ხარ სრულწოვანი");
} else if (age >= 12) {
  console.log("შენ ხარ თინეიჯერი/მოზარდი");
} else if (age >= 5) {
  console.log("შენ ხარ ბავშვი");
} else {
  console.log("შენ ხარ ძალიან პატარა");
}


// N2



let number = Number(prompt("enter num: "))

if (number % 2 === 0) {
    console.log("ლუწია");
} else {
    console.log("კენტია");
}