function userInfo(name, lastname, age, birthYear) {
    return { name, lastname, age, birthYear };
}

let Name_1 = "goga";
let Lastname_2 = "sharashidze";
let Age_3 = 12;
let Year_4 = 2012;

let info = userInfo(Name_1, Lastname_2, Age_3, Year_4);


if (userInfo.name === Name_1) {
    console.log("სახელი ემთხვევა");
} else {
    console.log("სახელი არ ემთხვევა");
}

if (userInfo.lastname === Lastname_2) {
    console.log("გვარი ემთხვევა");
} else {
    console.log("გვარი არ ემთხვევა");
}

if (userInfo.age === Age_3) {
    console.log("ასაკი ემთხვევა");
} else {
    console.log("ასაკი არ ემთხვევა");
}

if (userInfo.birthYear === Year_4) {
    console.log("დაბადების წელი ემთხვევა");
} else {
    console.log("დაბადების წელი არ ემთხვევა");
}

















function area(width,length){
return width * length

}


let width = 8
let length = 5


console.log(area(width, length))