function Dayname(day){
    switch (day) {
        case 1:
            return "ორშაბათი";
        case 2:
            return "სამშაბათი";
        case 3:
            return "ოთხშაბათი";
        case 4:
            return "ხუთშაბათი";
        case 5:
            return "პარასკევი";
        case 6:
            return "შაბათი";
        case 7:
            return "კვირა";
        default:
            return "არასწორი დღე";
    }
}

console.log(DayName(3));  
console.log(DayName(7)); 
console.log(DayName(9)); 


// 2
let number = parseInt(prompt("შეიყვანეთ რიცხვი:"));
let result = (number % 2 === 0) ? "ლუწი" : "კენტი";

console.log(result);




// 3
let weatherCode = parseInt(prompt("შეიყვანეთ ამინდის კოდი (1-4):"));

switch (weatherCode) {
    case 1:
        console.log("მზიანი");
        break;
    case 2:
        console.log("წვიმიანი");
        break;
    case 3:
        console.log("მოღრუბლული");
        break;
    case 4:
        console.log("ქარიანი");
        break;
    default:
        console.log("არ არის დადგენილი");
}



//4






let monthNumber = parseInt(prompt("შეიყვანეთ თვის ნომერი (1-12):"));

switch (monthNumber) {
    case 1: 
    console.log("იანვარი"); 
    break;
    case 2: 
    console.log("თებერვალი"); 
    break;
    case 3: 
    console.log("მარტი"); 
    break;
    case 4: 
    console.log("აპრილი"); 
    break;
    case 5: 
    console.log("მაისი"); 
    break;
    case 6: 
    console.log("ივნისი");
     break;
    case 7: 
    console.log("ივლისი"); 
    break;
    case 8: 
    console.log("აგვისტო"); 
    break;
    case 9:
         console.log("სექტემბერი"); 
         break;
    case 10:
         console.log("ოქტომბერი"); 
         break;
    case 11: 
    console.log("ნოემბერი");
     break;
    case 12: 
    console.log("დეკემბერი");
     break;
    default: 
    console.log("არასწორი თვე");
}

console.log(monthNumber >= 1 && monthNumber <= 6 ? "პირველი ნახევარი" :
            monthNumber >= 7 && monthNumber <= 12 ? "მეორე ნახევარი" :
            "არასწორი მონაცემი");
