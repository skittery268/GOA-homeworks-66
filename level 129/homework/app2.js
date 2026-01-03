// 3) მოუსმინეთ POST მოთხოვნას '/guess/:number' მოცემულ ბილიკზე, შეამოწმეთ თუ მომხმარებლის მიერ შემოტანილი number პარამეტრი უდრის თქვენს random რიცხვს, json - ის ფორმატში დააბრუნეთ პასუხი 'You guessed the random number', თუ თქვენს რიცხვზე ნაკლებია გამოიტანეთ 'Your number is low', თუ მეტია 'Your number is higher than the random number, try again later.'

const express = require("express");

const app = express();

const randomNumber = Math.floor(Math.random() * 50);

app.post("/guess/:number", (req, res) => {
    const number = req.params.number;

    if (number == randomNumber) {
        res.status(200).json({ message: 'You guessed the random number' });
    } else if (number < randomNumber) {
        res.status(200).json({ message: 'Your number is low' })
    } else if (number > randomNumber) {
        res.status(200).json({ message: 'Your number is higher than the random number, try again later.' })
    }
})

app.listen(3000, () => {
    console.log("Server Started!");
})