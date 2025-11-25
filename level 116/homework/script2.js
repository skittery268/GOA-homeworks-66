// 3) მომხმარებელმა უნდა გამოიცნოს თქვენს მიერ ჩაფიქრებული რიცხვი, თუ მომხმარებელმა შემოიტანა ისეთი რიცხვი რომელიც ჩაფიქრებულ რიცხვზე დიდია გამოიტანეთ ტექსტი 'Too high!' თუ რიცხვი ჩაფიქრებულ რიცხვზე ნაკლებია გამოიტანეთ ტექსტი 'Too Low!' სხვა შემთხვევაში კი გამოიტანეთ ტექსტი 'Correct!' და გათიშეთ პროგრამა

const myNumber = 55;

process.stdin.on("data", userInput => {
    if (parseInt(userInput) > myNumber) {
        console.log('Too high!');
    } else if (parseInt(userInput) < myNumber) {
        console.log('Too Low!');
    } else {
        console.log("Correct!");
        process.exit();
    }
})

