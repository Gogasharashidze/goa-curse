// 1. Display current date and time
function displayCurrentDateTime() {
    const now = new Date();
    const formatted = now.getFullYear() + "-" +
      String(now.getMonth() + 1).padStart(2, '0') + "-" +
      String(now.getDate()).padStart(2, '0') + " " +
      String(now.getHours()).padStart(2, '0') + ":" +
      String(now.getMinutes()).padStart(2, '0') + ":" +
      String(now.getSeconds()).padStart(2, '0');
    document.getElementById("currentDateTime").textContent = formatted;
  }
  displayCurrentDateTime();
  
  // 2. Calculate age from birthdate
  function calculateAge() {
    const birthDate = new Date(document.getElementById("birthdate").value);
    const today = new Date();
  
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
  
    document.getElementById("ageResult").textContent =
      `You are ${years} years, ${months} months, and ${days} days old.`;
  }
  
  // 3. Show day of the week from date
  function showDayOfWeek() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dateInput = new Date(document.getElementById("anyDate").value);
    const day = days[dateInput.getDay()];
    document.getElementById("dayOfWeek").textContent = `Day: ${day}`;
  }
  
  // 4. Timer from 0
  let count = 0;
  setInterval(() => {
    document.getElementById("timer").textContent = count;
    count++;
  }, 1000);
  
  // 5. Live Clock
  function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("clock").textContent = time;
  }
  setInterval(updateClock, 1000);
  
  // 6. Random number to console every second
  setInterval(() => {
    console.log("Random Number:", Math.random());
  }, 1000);
  
  // 7. Delayed message (setTimeout)
  function showDelayedMessage() {
    const message = document.getElementById("message").value;
    const delay = parseInt(document.getElementById("delay").value);
  
    setTimeout(() => {
      document.getElementById("delayedOutput").textContent = message;
    }, delay);
  }
  