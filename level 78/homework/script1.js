// 1) fetch - ით გააგზავნეთ მოთხოვნა https://fakestoreapi.com/products ამ მისამართზე, გამოიყენეთ დღევანდელ გაკვეთილზე ნასწავლი async/await და try/catch, 
// გამოიტანეთ ელემენტები საიტზე თავისი ინფორმაციით (css - ის დახმარებით გასტილეთ), დაასრულეთ Level 76 - ის 
// დავალება ---> (დაამატეთ add To Cart და delete From Cart ფუნქციებიც ამ პროდუქტებს)

// 2) კომენტარების სახით ახსენით თქვენს მიერ დაწერილი კოდი დეტალურად, ასევე კარგად გაიაზრეთ

const unorderdList = document.querySelector("ul");
const orderdList = document.querySelector("ol");
const addBtn = document.getElementById("btn1");
const deleteBtn = document.getElementById("btn2");

if (JSON.parse(localStorage.getItem("cart")) === null) {
    let cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
}

const renderUnorderdList = array => {
    unorderdList.innerHTML = "";
    array.forEach(obj => {
        unorderdList.innerHTML += `
        <li>Title: ${obj.title}</li>
        <p>ID: ${obj.id}</p>
        <p>Price: ${obj.price}</p>
        <p>Description: ${obj.description}</p>
        <p>Image: <img src="${obj.image}" width="100"></p>
        <p>Rating: ${obj.rating.rate}</p>
        <p>Category: ${obj.category}</p>
        `;
    });
};

const renderOrderdList = () => {
    const array = JSON.parse(localStorage.getItem("cart"));

    orderdList.innerHTML = "";
    array.forEach(obj => {
        orderdList.innerHTML += `
        <li>Title: ${obj.title}</li>
        <p>ID: ${obj.id}</p>
        <p>Price: ${obj.price}</p>
        <p>Description: ${obj.description}</p>
        <p>Image: <img src="${obj.image}" width="100"></p>
        <p>Rating: ${obj.rating.rate}</p>
        <p>Category: ${obj.category}</p>
        `;
    });
}

renderOrderdList()

const addFromLocalStorageCart = element => {
    let item = JSON.parse(localStorage.getItem("cart"));

    item.push(element)
    localStorage.setItem("cart", JSON.stringify(item));
}

const asincFunc = async () => {
    try {
        const prom = await fetch("https://fakestoreapi.com/products");
        const date = await prom.json();

        localStorage.setItem("products", JSON.stringify(date));
        renderUnorderdList(date);
    } catch {
        console.error("ERROR")
    }
}

asincFunc()

const prod = JSON.parse(localStorage.getItem("products"));

addBtn.addEventListener('click', () => {
    const userProduct = parseInt(prompt("Please enter product ID to access from cart"));

    const foundProduct = prod.find(obj => obj.id === userProduct);
    const foundObj = JSON.parse(localStorage.getItem("cart")).find(obj => obj.id === userProduct);

    if (foundProduct && foundObj === undefined) {
        addFromLocalStorageCart(foundProduct);
        renderOrderdList();
    } else {
        alert("Invalid ID or The product is already added to the cart");
    }
})

deleteBtn.addEventListener('click', () => {
    const userProductDelite = parseInt(prompt("Please enter ID product to delite"));
    const cart = JSON.parse(localStorage.getItem("cart"));

    const findProduct = cart.find(obj => obj.id === userProductDelite);

    if (findProduct) {
        const userProduct = cart.indexOf(findProduct);
        cart.splice(userProduct, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderOrderdList();
    }
})