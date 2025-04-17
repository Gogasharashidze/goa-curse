let date = new Date();
console.log(date);


let newYear = date.setFullYear(2030);
let newMonth = date.setMonth(11);  
let newDay = date.setDate(25);
let newHours = date.setHours(15);
let newMinutes = date.setMinutes(30);
let newSeconds = date.setSeconds(0);


let changedTime = "New Time: " + date;
console.log(changedTime);