document.getElementById('increaseButton').addEventListener('click', function() {
    const resizableDiv = document.getElementById('resizableDiv');
 
    resizableDiv.classList.add('increase');
    
    resizableDiv.classList.remove('decrease');
});

document.getElementById('decreaseButton').addEventListener('click', function() {
    const resizableDiv = document.getElementById('resizableDiv');
 
    resizableDiv.classList.add('decrease');
   
    resizableDiv.classList.remove('increase');
});
