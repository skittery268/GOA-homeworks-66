// 3) შექმენით guess game, მოიფიქრეთ რაიმე შემთხვევითი რიცხვი, სანამ მომხმარებელი მაგ რიცხვს არ შემოიტანს იქამდე დაუბეჭდეთ რომ არასწორია და სცადოს თავიდან, აგრეთვე დაუბეჭდეთ მერამდენე მცდელობაა მისი, როცა შემოიტანს სწორ რიცხვს გათიშეთ პროგრამა

const guessNumber = 153;
let attempts = 0;

process.stdin.on("data", (userInput) => {
    attempts++;
    if (parseInt(userInput) !== guessNumber) {
        console.log(`არასწორი რიცხვია! ეს არის თქვენი ${attempts} მცდელობა`);
        console.log("სცადეთ თავიდან!");
    } else {
        console.log("სწორია!")
        process.exit();
    }
})

