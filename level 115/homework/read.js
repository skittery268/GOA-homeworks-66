const fs = require("fs");

fs.readFile("./level 115/homework/array.json", "utf8", (err, data) => {
    if (err) {
        console.log("error: ", err)
        return;
    }

    console.log("Information in file:", data)
})

