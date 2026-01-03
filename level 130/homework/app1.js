// 1) მოუსმინეთ Post მოთხოვნას '/posts/:id/comments' ბილიკზე, თქვენი დავალებაა, რომ id - ის მიხედვით წამოიღოთ post და comments მასივში დაამატოთ ახალი კომენტარი, ამავდროულად მოცემულ comment - ს უნდა მიანიჭოთ id, უნდა შეგეძლოთ კომენტარების როგორც მთლიანად წამოღება ისე id - ის მიხედვით, აგრეთვე კომენტარის წაშლაც

const express = require("express");

const app = express();
app.use(express.json());

let comments = [
    { id: 1, comment: "i like this video" },
    { id: 2, comment: "this video is very helpful" },
    { id: 3, comment: "awesome explanation" },
    { id: 4, comment: "great job" },
    { id: 5, comment: "well done" },
    { id: 6, comment: "keep it up" },
    { id: 7, comment: "very informative" },
    { id: 8, comment: "excellent content" },
    { id: 9, comment: "loved the examples" },
    { id: 10, comment: "clear and concise" }
]

app.get("/posts/comments", (req, res) => {
    res.status(200).json(comments);
})

app.get("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const comment = comments.find(c => c.id === id);

    if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json(comment);
})

app.post("/posts", (req, res) => {
    const comment = req.body.comment;

    if (!comment) {
        return res.status(400).json({ message: "Please write comment!" });
    }

    const id = comments.length + 1;

    comments.push({ id, comment });

    res.status(201).json({ id, comment });
})

app.delete("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const comment = comments.find(c => c.id === id);
    
    if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
    }

    comments = comments.filter(c => c !== comment);
    comments = comments.map((c, index) => ({ ...c, id: index + 1 }));
    
    res.status(204).json({ message: "Comment successfull deleted", newArray: comments });
})

app.listen(3000, () => {
    console.log("Server Started!");
})