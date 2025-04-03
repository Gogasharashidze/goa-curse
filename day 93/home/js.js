// 1. სამი მასივის შექმნა (arr1, arr2 და arr3)
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["apple", "banana", "cherry"];
let arr3 = [10, 20, 30, 40];

// 2. arr1 და arr2 გაერთიანება mergedArray-ში
let mergedArray = arr1.concat(arr2);

// 3. copyWithin მეთოდის გამოყენება
mergedArray.copyWithin(5, 0, 3); // პირველი სამი ელემენტი 5 ინდექსიდან

// 4. fill მეთოდის გამოყენება
mergedArray.fill(0, 6); // ინდექსი 6 და შემდეგ ყველა ელემენტი 0-ით შეიცვლება

// 5. pop მეთოდის გამოყენება
let removedLast = mergedArray.pop(); // ბოლო ელემენტი ამოიღება
console.log("Removed last element:", removedLast);

// 6. shift მეთოდის გამოყენება
let removedFirst = mergedArray.shift(); // პირველი ელემენტი ამოიღება
console.log("Removed first element:", removedFirst);

// 7. unshift მეთოდის გამოყენება
mergedArray.unshift(100, 200); // 100 და 200 დაემატება დასაწყისში

// 8. splice მეთოდის გამოყენება
mergedArray.splice(2, 2, ...arr3); // ელემენტები 2 და 3 ამოიღება და ანაცვლება arr3-ის ელემენტებით

// 9. slice მეთოდის გამოყენება
let slicedArray = mergedArray.slice(-5); // ბოლო 5 ელემენტი მიღება

// 10. join მეთოდის გამოყენება
let joinedString = slicedArray.join(", "); // ელემენტები კომამშორებით შეერთება
console.log("Joined string:", joinedString);

// challenge: comprehensiveArrayTask ფუნქციის შექმნა
function comprehensiveArrayTask(arr1, arr2, arr3) {
    // გაერთიანება
    let mergedArray = arr1.concat(arr2);

    // copyWithin
    mergedArray.copyWithin(5, 0, 3);

    // fill
    mergedArray.fill(0, 6);

    // pop
    mergedArray.pop();

    // shift
    mergedArray.shift();

    // unshift
    mergedArray.unshift(100, 200);

    // splice
    mergedArray.splice(2, 2, ...arr3);

    // slice
    let slicedArray = mergedArray.slice(-5);

    // join
    return slicedArray.join(", ");
}

// სატესტო მაგალითი
let resultString = comprehensiveArrayTask(arr1, arr2, arr3);
console.log("Final result string:", resultString);









// 1. შექმენით initial სტუდენტების და grades-ის მასივები
let students = ["Alice", "Bob", "Charlie"];
let grades = [85, 90, 78];

// 2. addStudent ფუნქცია: სტუდენტის დამატება unshift-ის გამოყენებით
function addStudent(student, grade) {
    students.unshift(student);  // სტუდენტის დამატება დასაწყისში
    grades.unshift(grade);  // ქულის დამატება დასაწყისში
    return { students, grades };  // დაბრუნება განახლებული მასივები
}

// 3. removeLastStudent ფუნქცია: ბოლო სტუდენტის და მათი ქულის ამოღება pop-ის გამოყენებით
function removeLastStudent() {
    let removedStudent = students.pop();  // ბოლო სტუდენტი ამოიღება
    let removedGrade = grades.pop();  // ბოლო ქულა ამოიღება
    return { students, grades };  // დაბრუნება განახლებული მასივები
}

// 4. replaceGrade ფუნქცია: სტუდენტის ქულის შეცვლა splice-ის გამოყენებით
function replaceGrade(index, newGrade) {
    grades.splice(index, 1, newGrade);  // შეცვლა ინდექსზე არსებული ქულის
    return grades;  // დაბრუნება განახლებული ქულების მასივი
}

// 5. updateGrades ფუნქცია: ყველა ქულის შეცვლა fill-ის გამოყენებით
function updateGrades(newGrade) {
    grades.fill(newGrade);  // ყველა ქულა შეიცვლება ერთი და იგივე მნიშვნელობით
    return grades;  // დაბრუნება განახლებული ქულების მასივი
}

// სატესტო მაგალითები:

// სტუდენტის დამატება
console.log("Add new student:", addStudent("David", 88));

// ბოლო სტუდენტის ამოღება
console.log("Remove last student:", removeLastStudent());

// ქულის შეცვლა
console.log("Replace grade of student at index 1:", replaceGrade(1, 95));

// ყველა ქულის განახლება
console.log("Update all grades to 100:", updateGrades(100));






// 1. შექმენით initial playlist მასივი
let playlist = ["Song A", "Song B", "Song C", "Song D"];

// 2. addSong ფუნქცია: სიმღენის დამატება unshift-ის გამოყენებით
function addSong(song) {
    playlist.unshift(song);  // სიმღენის დამატება დასაწყისში
    return playlist;  // დაბრუნება განახლებული პლეილისტი
}

// 3. removeLastSong ფუნქცია: ბოლო სიმღენის ამოღება pop-ის გამოყენებით
function removeLastSong() {
    playlist.pop();  // ბოლო სიმღენის ამოღება
    return playlist;  // დაბრუნება განახლებული პლეილისტი
}

// 4. moveSongs ფუნქცია: პირველი ორი სიმღენის გადატანა ბოლოს copyWithin-ის გამოყენებით
function moveSongs() {
    playlist.copyWithin(playlist.length, 0, 2);  // პირველი ორი სიმღენის გადატანა ბოლო
    playlist.length = playlist.length - 2;  // პლეილისტის სიგრძის შემცირება
    return playlist;  // დაბრუნება განახლებული პლეილისტი
}

// 5. combinePlaylists ფუნქცია: ორი პლეილისტის გაერთიანება concat-ის გამოყენებით
function combinePlaylists(secondPlaylist) {
    playlist = playlist.concat(secondPlaylist);  // პლეილისტების გაერთიანება
    return playlist;  // დაბრუნება გაერთიანებული პლეილისტი
}

// სატესტო მაგალითები:

// სიმღენის დამატება
console.log("Add new song:", addSong("Song E"));

// ბოლო სიმღენის ამოღება
console.log("Remove last song:", removeLastSong());

// სიმღენების გადატანა
console.log("Move songs:", moveSongs());

// მეორე პლეილისტის დამატება
let secondPlaylist = ["Song F", "Song G"];
console.log("Combine playlists:", combinePlaylists(secondPlaylist));
