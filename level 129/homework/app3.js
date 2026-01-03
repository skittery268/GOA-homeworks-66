// 4) მოუსმინეთ Delete მოთხოვნას '/tasks?id={id}' მოცემულ ბილიკზე, შეამოწმეთ თუ მოცემული id - ით task - არსებობს მაშინ წაშალეთ და დააბრუნეთ შესაბამისი message, სხვა შემთხვევაში კი დააბრუნეთ error - ის message - ი შესაბამისი status code - ით

const express = require("express");

const app = express();

let tasks = [
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
    { id: 4, title: "Task 4" },
    { id: 5, title: "Task 5" },
    { id: 6, title: "Task 6" },
    { id: 7, title: "Task 7" },
    { id: 8, title: "Task 8" },
    { id: 9, title: "Task 9" },
    { id: 10, title: "Task 10" }
]

app.delete("/tasks", (req, res) => {
    const id = parseInt(req.query.id);
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    tasks = tasks.filter(t => t !== task);

    tasks = tasks.map((t, index) => ({ ...t, id: index + 1 }));
    res.status(204).json({ message: "Task delited", newArray: tasks });
})

app.listen(3000, () => {
    console.log("Server Started!");
})