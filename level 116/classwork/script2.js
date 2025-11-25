// 2) დააიმპორტეთ events მოდული, გამოიყენეთ EventEmmiter კლასი რომ შექმნათ ობიექტი,. შემდეგ მაგ ობიექტის დახმარებით მოუსმინეთ 2 მოვლენას პირველი მოვლენა იქნება sum მმართველ ფუნქციას გადაეცემა ორი რიცხვი, თქვენ უნდა დაბეჭდოთ რიცხვების ჯამი, მეორე მოვლენა თქვენი სურვილით შექმენით და გამოიწვიეთ (დაიმახსოვრეთ მოვლენის გამოწვევისას შეგიძლიათ თან გადასცეთ არგუმენტები ფუნქციებს)

const events = require('events');

const myEventEmitter = new events.EventEmitter();

myEventEmitter.on("sum", (a, b) => {
    console.log(a + b)
})

myEventEmitter.on("multiply", (a, b) => {
    console.log(a * b)
})

myEventEmitter.emit("sum", 10, 15)

myEventEmitter.emit("multiply", 10, 2)

