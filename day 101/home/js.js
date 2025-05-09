const myDiv = document.getElementById('myDiv');
myDiv.classList.add('highlight');
//
const myDiv2 = document.getElementById('myDiv2');
myDiv2.classList.remove('highlight');

//
const toggleButton = document.getElementById('toggleButton');
const targetDiv = document.getElementById('targetDiv');
toggleButton.addEventListener('click', () => {
  targetDiv.classList.toggle('active');
});

//
const checkParagraph = document.getElementById('checkParagraph');
console.log(checkParagraph.classList.contains('important')); // Logs true or false

//
const replaceDiv = document.getElementById('replaceDiv');
replaceDiv.classList.replace('red', 'blue');

// 
const itemDiv = document.getElementById('itemDiv');
console.log(itemDiv.classList.item(1)); 

// 
const myList = document.getElementById('myList');

const newLi = document.createElement('li');
newLi.textContent = 'New Item';
myList.appendChild(newLi);
// 
myList.removeChild(myList.firstElementChild);
//
myList.children[1].textContent = 'Updated Item 2';

//
const myParagraph = document.getElementById('myParagraph');
myParagraph.textContent = 'New text content!';

//
const styledDiv = document.getElementById('styledDiv');
styledDiv.style.backgroundColor = 'lightblue';
styledDiv.style.color = 'darkblue';

// 
const myList2 = document.getElementById('myList2');
const newLi2 = document.createElement('li');
newLi2.textContent = 'New list item';
myList2.appendChild(newLi2);
