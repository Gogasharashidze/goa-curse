
let academy = {
    name: "GOA",
    courses: ["JavaScript", "Python", "Web Development"],
    socialLink: 'https://www.youtube.com/@Goal_Oriented_Academy__GOA',
    reviews: {
        user1: { name: "Alice", 
            status: "parent", 
            review: "Great courses!" },
        user2: {
             name: "Bob", 
             status: "child",
              review: "Loved the lessons!" },
        user3: { 
            name: "Charlie", 
            status: "parent",
             review: "Very helpful instructors." }
    }
};


console.log(Object.entries(academy));

console.log(Object.keys(academy));

console.log(Object.values(academy));

console.log(academy.hasOwnProperty("courses")); 
console.log(academy.hasOwnProperty("students")); 

let Academy = Object.assign({}, academy, { member: 100 });
console.log(Academy);

Object.freeze(Academy);

console.log(Object.isFrozen(Academy)); 
