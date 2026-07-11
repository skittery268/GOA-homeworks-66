// 2) შექმენით type Book, რომელსაც ექნება შემდეგი ველები: title 
// (string), author (string), pages (number) და isAvailable (boolean). 
// შემდეგ შექმენით მინიმუმ 6 წიგნის მასივი ამ ტიპის გამოყენებით. for...
// of ციკლის მეშვეობით დაბეჭდეთ ყველა წიგნის სათაური, შემდეგ მხოლოდ 
// ხელმისაწვდომი წიგნები (isAvailable === true) და ბოლოს გამოთვალეთ 
// ყველა წიგნის გვერდების საერთო რაოდენობა.

type Book = {
    title: string;
    author: string;
    pages: number;
    isAvailable: boolean;
};

const books: Book[] = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 310,
        isAvailable: true,
    },
    {
        title: "1984",
        author: "George Orwell",
        pages: 328,
        isAvailable: false,
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        pages: 223,
        isAvailable: true,
    },
    {
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        pages: 96,
        isAvailable: true,
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        pages: 208,
        isAvailable: false,
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        pages: 281,
        isAvailable: true,
    },
];

let pageCount = 0;

for (const book of books) {
    console.log(book.title);

    if (book.isAvailable) {
        console.log(book);
    };

    pageCount += book.pages;
};

console.log(pageCount);