// 4) მომხმარებელს შემოატანინეთ სიტყვა, დააბრუნეთ მოცემული ტექსტის შემობრუნებული ვერსია

process.stdin.on("data", userInput => {
    const userWord = userInput.toString();
    let word = "";
    for (let i = userWord.length - 1; i >= 0; i--) {
        word += userWord[i];
    }
    console.log(word)
})

