// 4) შექმენით Class - ი სახელად Movie - რომელიც constructor მეთოდში იღებს 4 პარამეტრს title, director, rating, releaseYear, 
// შექმენით ერთი მეთოდი isHit რომელიც დააბრუნებს true მნიშვნელობას იმ შემთხვევაში თუ rating - ი არის 8 - ზე მეტი, new - ის 
// გამოყენებით შექმენით 2 განსხვავებული Movie - ის ობიექტი

class Movie {
    constructor(title, director, rating, releaseYear) {
        this.title = title;
        this.director = director;
        this.rating = rating;
        this.releaseYear = releaseYear;

        this.isHit = function() {
            if (this.rating > 8) {
                return true;
            } else {
                return false;
            };
        };
    };
};

const movie1 = new Movie("Inception", "Christopher Nolan", 8.8, 2010);
const movie2 = new Movie("Some Average Film", "John Doe", 6.5, 2020);

