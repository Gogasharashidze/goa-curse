let arr = [10, 20, 30, 40, 50];


function checkvalue(value) {
    let index = arr.indexOf(value);
    if (index !== -1) {
        console.log("true");
    } else {
        console.log("false");
    }
}

let js = checkvalue.i

arr.push(60, 70, 80);
console.log("დამატების შემდეგ მასივი:", arr);


arr.pop();
arr.pop();
arr.pop();
arr.pop();

console.log("ამოშლის შემდეგ მასივი:", arr);