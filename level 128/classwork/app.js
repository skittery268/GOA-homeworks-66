// 1) შექმენით მასივი სადაც  შეინახავთ წიგნების ობიეტებს, მოუსმინეთ POST მოთხოვნას '/books' 
// ბილიკზე, postman - ის გამოყენებით გააგზავნეთ წიგნის ინფორმაცია, მოცემული ობეიქტი კი ჩასვით 
// books მასივში და მიანიჭეთ შესაბამისი id

// 2) ასევე უნდა შეგეძლოთ მოცემული წიგნების id - ის და id - ის გარეშე წამოღება

// 3) მოუსმინეთ DELETE მეთოდსაც და გადმოცემული id - ით books მასივში არსებული წიგნი წაშალეთ

const express = require("express");

let books = [
    { id: 1, title: "Book One", author: "Author One" },
    { id: 2, title: "Book Two", author: "Author Two" },
    { id: 3, title: "Book Three", author: "Author Three" }
]

const app = express();

app.use(express.json());

app.post("/books", (req, res) => {
    const newBook = req.body;
    const id = books.length + 1;
    newBook.id = id;
    books.push(newBook);
    res.status(201).json(newBook);
})

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    if (book) {
        books = books.filter(b => b.id !== id);
        books = books.map((b, index) => ({ ...b, id: index + 1 }));
        res.status(200).json({ message: "Book deleted successfully" });
    } else {
        res.status(404).json({ message: "Book not found" });
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})