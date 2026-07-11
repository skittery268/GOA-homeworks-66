// 3) შექმენით type Movie, რომელსაც ექნება ველები: title (string), year 
// (number), rating (number) და genre (string). შექმენით მინიმუმ 7 
// ფილმის მასივი. დაბეჭდეთ მხოლოდ ის ფილმები, რომელთა რეიტინგი 8 ან 
// მეტია, შემდეგ იპოვეთ ყველაზე მაღალი რეიტინგის მქონე ფილმი და დაბეჭდეთ 
// მისი სრული ინფორმაცია.

type Movie = {
    title: string;
    year: number;
    rating: number;
    genre: string;
};

const max = (arr: Movie[]): Movie => {
    let maxRatingMovie = arr[0];

    for (const movie of arr) {
        if (movie.rating > maxRatingMovie.rating) {
            maxRatingMovie = movie;
        };
    };

    return maxRatingMovie;
};

const movies: Movie[] = [
    {
        title: "Inception",
        year: 2010,
        rating: 8.8,
        genre: "Sci-Fi",
    },
    {
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        genre: "Action",
    },
    {
        title: "Interstellar",
        year: 2014,
        rating: 8.7,
        genre: "Sci-Fi",
    },
    {
        title: "Forrest Gump",
        year: 1994,
        rating: 8.8,
        genre: "Drama",
    },
    {
        title: "The Matrix",
        year: 1999,
        rating: 8.7,
        genre: "Sci-Fi",
    },
    {
        title: "Gladiator",
        year: 2000,
        rating: 8.5,
        genre: "Action",
    },
    {
        title: "The Lion King",
        year: 1994,
        rating: 8.5,
        genre: "Animation",
    },
];

for (let i: number = 0; i < movies.length; i++) {
    if (movies[i].rating >= 8) {
        console.log(movies[i]);
    };
};

console.log(max(movies));