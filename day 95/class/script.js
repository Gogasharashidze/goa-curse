


function loveCalculator() {

    let name1 = prompt("შეიყვანეთ 1 სახელი:");
    let name2 = prompt("შეიყვანეთ 2 სახელი:");
  
    if (name1 === "" || name2 === "") {
      alert("ორივე სახელი შეიყვანოთ.");
      return;
    }
  
    let percentage = Math.floor(Math.random() * 100) + 1;
    let message = `${name1} და ${name2}, თქვენი სიყვარული ${percentage}%`;
  
    alert(message);
  }

   console.log(loveCalculator)