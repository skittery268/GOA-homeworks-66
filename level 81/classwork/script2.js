// 4) გამოიყენეთ POST მეთოდი იმისათვის რომ დაამატოთ ახალი მონაცემი API - ში

// გამოიყენეთ fetch იმისათვის რომ გააგზავნოთ მოთხოვნა ამ https://fakestoreapi.com/products ლინკზე, გამოიყენეთ headers - ები და ასევე ახსენით 
// კომენტარების სახით თუ რას ნიშნავს ის, გამოიყენეთ body - იმისათვის რომ დაამატოთ ახალი პროდუქტი, საბოლოო შედეგი კი გამოიტანეთ console - ში

fetch("https://fakestoreapi.com/products", {
    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        title: "Jeans",
        price: 150.00,
        description: "This is blue jeans"
    })
})
    .then(arr => arr.json())
    .then(obj => console.log(obj))

