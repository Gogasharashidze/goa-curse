function User(name, lastName, phoneNumber, email, password, confirmPassword) {
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;

    this.introduce = function() {
        console.log(`ჩემი სახელია ${this.name}, ჩემი გვარია ${this.lastName}, ჩემი ტელეფონის ნომერია ${this.phoneNumber}, ჩემი ელფოსტაა ${this.email}.`);
    };
}


let user1 = new User("გიორგი", "ბერიძე", "555123456", "giorgi@mail.com", "pass123", "pass123");
let user2 = new User("ნინო", "მამულაშვილი", "599987654", "nino@mail.com", "securePass", "securePass");
let user3 = new User("ლევან", "კაპანაძე", "577654321", "levan@mail.com", "strongPass", "strongPass");


