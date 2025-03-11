
const book = {
    title: "სამი მუშკეტერი",
    author: "ალექსანდრე დიუმა",
    year: 1844,
    genre: "სათავგადასავლო",
    price: 25
};


console.log(book);

console.log(book.title);       
console.log(book["author"]);    
console.log(book.year);           
console.log(book["genre"]);     
console.log(book.price);       


console.log(`წიგნის სახელია "${book.title}", მისი ავტორია ${book.author}, გამოშვების წელი - ${book.year}. ჟანრი არის ${book.genre}, ხოლო ფასი - ${book.price} ლარი.`);





const student = {
    name: "ნიკა გიორგაძე",
    age: 20,
    faculty: "კომპიუტერული მეცნიერებები",
    course: 2,
    gpa: 3.8
};

console.log(student);

console.log(student.name);    
console.log(student["age"]);    
console.log(student.faculty);     
console.log(student["course"]);   
console.log(student.gpa);    

console.log(`სტუდენტის სახელია ${student.name}, ის არის ${student.age} წლის. მისი ფაკულტეტია ${student.faculty}, სწავლობს ${student.course}-ე კურსზე და მისი საშუალო ქულაა ${student.gpa}.`);
