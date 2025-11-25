// 2) მომხმარებელს იქამდე შემოატანინეთ რაიმე სიტყვა სანამ ის არ ჩაწერს exit, თუ მომხმარებლის მიერ შემოტანილი მნიშვნელობა უდრის exit - ს მაშინ გათიშეთ პროგრამა

process.stdin.on("data", (userInput) => {
    if (userInput.toString().trim() === "exit") {
        console.log("Programm Complite")
        process.exit()
    }
})

