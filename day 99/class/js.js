const fruitList = document.getElementById('fruit-list');

const orange = document.createElement('li');

orange.textContent = "Orange";

fruitList.insertBefore(orange, fruitList.firstElementChild);

fruitList.removeChild(fruitList.lastElementChild);

console.log("First item:", fruitList.firstElementChild.textContent);

console.log("Parent of second item:", fruitList.children[1].parentElement.textContent);