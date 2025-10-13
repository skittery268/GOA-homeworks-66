// 11) მომხმარებელს შემოატანინეთ ფერი red, green, yellow, ფერების მიხედვით დააბრუნეთ slow, stop, go

const userInput = prompt("Please enter color (red, green, yellow)")

if (userInput.toLowerCase === "red") {
    console.log("STOP");
} else if (userInput.toLowerCase === "yellow") {
    console.log("SLOW");
} else if (userInput.toLowerCase === "green") {
    console.log("GO");
} else {
    console.log("Invalid Color");
};

