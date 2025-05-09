// 1
const p = document.createElement('p');
p.textContent = "This is a paragraph.";
document.body.appendChild(p);

// 2
const h2 = document.createElement('h2');
h2.textContent = "Subheading";
document.body.appendChild(h2);
h2.textContent = "Updated Subheading";

// 3
const div = document.createElement('div');
div.textContent = "This is a div.";
document.body.appendChild(div);
document.body.removeChild(div);

// 4
const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.textContent = "Item 1";
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.textContent = "Item 2";
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.textContent = "Item 3";
ul.appendChild(li3);

document.body.appendChild(ul);

console.log("First child:", ul.firstElementChild);
console.log("Last child:", ul.lastElementChild);

// 5
const h3 = document.createElement('h3');
h3.textContent = "Inserted Heading";
document.body.insertBefore(h3, document.body.firstElementChild);

// 6
const span = document.createElement('span');
span.textContent = "This is a span.";
const container = document.getElementById('container');
container.appendChild(span);

console.log("Parent of span:", span.parentElement);
