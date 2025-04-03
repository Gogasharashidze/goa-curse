function Contact(name,number) {
    this.name = name;
    this.number = number;
    
    this.print = function() {
        console.log(this.name + ": " + this.number);
    };
}

let cont1 = new Contact("goga", "12723864");
let cont2 = new Contact("gia", "87637246832")
cont1.print()
cont2.print()