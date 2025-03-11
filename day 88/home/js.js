// უნივერსიტეტის ობიექტი
const university = {
    name: "თბილისის სახელმწიფო უნივერსიტეტი",
    departments: 12,
    website: "https://www.tsu.ge",
    ratings: {
        student1: 4.5,
        student2: 4.2,
        student3: 4.8
    }
};

console.log("უნივერსიტეტის მონაცემები:", university);

console.log("გააჩნია თუ არა scholarship?", university.hasOwnProperty("scholarship"));

const updatedUniversity = { ...university, studentsCount: 25000 };
console.log("განახლებული უნივერსიტეტი:", updatedUniversity);


Object.freeze(updatedUniversity);


updatedUniversity.name = "ახალი უნივერსიტეტი";
updatedUniversity.studentsCount = 30000;
console.log("ცდის შემდეგ ობიექტი:", updatedUniversity); 

console.log("გაყინულია თუ არა ობიექტი?", Object.isFrozen(updatedUniversity));





// N2








// სპორტული კლუბის ობიექტი
const sportsClub = {
    clubName: "FC Barcelona",
    sportType: "Football",
    foundedYear: 1899,
    achievements: {
        championsLeague: 5,
        laLigaTitles: 27,
        copaDelRey: 31
    }
};

console.log("კლუბის თვისებები:", Object.keys(sportsClub));


console.log("კლუბის თვისებების მნიშვნელობები:", Object.values(sportsClub));


console.log("არსებობს თუ არა sponsors?", sportsClub.hasOwnProperty("sponsors"));


const updatedSportsClub = { ...sportsClub, stadiumCapacity: 99354 };
console.log("განახლებული სპორტული კლუბი:", updatedSportsClub);


Object.freeze(updatedSportsClub);


updatedSportsClub.clubName = "Real Madrid";
updatedSportsClub.stadiumCapacity = 85000;
console.log("ცდის შემდეგ ობიექტი:", updatedSportsClub);


console.log("გაყინულია თუ არა ობიექტი?", Object.isFrozen(updatedSportsClub));










//N3
const hotel = {
    hotelName: "Grand Palace Hotel",
    stars: 5,
    location: "Paris, France",
    guestReviews: {
        guest1: "Excellent service and beautiful view!",
        guest2: "Clean rooms but a bit expensive.",
        guest3: "Best hotel experience ever!"
    }
};

console.log("სასტუმროს თვისებები:", Object.keys(hotel));
console.log("სასტუმროს თვისებების მნიშვნელობები:", Object.values(hotel));

console.log("გააჩნია თუ არა spa?", hotel.hasOwnProperty("spa"));

const updatedHotel = { ...hotel, roomsCount: 200 };
console.log("განახლებული სასტუმრო:", updatedHotel);


Object.freeze(updatedHotel);

updatedHotel.hotelName = "Luxury Resort";
updatedHotel.roomsCount = 250;
console.log("ცდის შემდეგ ობიექტი:", updatedHotel); 
console.log("გაყინულია თუ არა ობიექტი?", Object.isFrozen(updatedHotel));


//N4


// კინოს ობიექტი
const cinema = {
    cinemaName: "Grand Cinema",
    moviesCount: 10,
    location: "Tbilisi, Georgia",
    movieReviews: {
        user1: "Great atmosphere and high-quality screens!",
        user2: "Good selection of movies, but snacks are expensive.",
        user3: "Comfortable seats and friendly staff!"
    }
};


console.log("კინოს თვისებები:", Object.keys(cinema));
console.log("კინოს თვისებების მნიშვნელობები:", Object.values(cinema));


console.log("გააჩნია თუ არა vipSeats?", cinema.hasOwnProperty("vipSeats"));


const updatedCinema = { ...cinema, ticketPrice: 15 };
console.log("განახლებული კინო:", updatedCinema);

Object.freeze(updatedCinema);


updatedCinema.cinemaName = "Luxury Cinema";
updatedCinema.ticketPrice = 20;
console.log("ცდის შემდეგ ობიექტი:", updatedCinema); 

console.log("გაყინულია თუ არა ობიექტი?", Object.isFrozen(updatedCinema));
