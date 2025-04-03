let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];


let concatArray = array1.concat(array2);
console.log( concatArray); 


concatArray.copyWithin(concatArray.length - 2, 0, 2);
console.log( concatArray); 


concatArray.fill(0, concatArray.length );
console.log(concatArray); 


let lastElement = concatArray.pop();
console.log( concatArray); 
console.log( lastElement); 


let firstElement = concatArray.shift();
console.log(concatArray); 
console.log(firstElement); 