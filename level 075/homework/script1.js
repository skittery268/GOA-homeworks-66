// 2) fetch - ის დახმარებით გააგზავნეთ მოთხოვნა https://fakestoreapi.com/products ამ ლინკზე, წამოიღეთ პროდუქტები და დაა - render - ეთ 
// (გამოიტანეთ) საიტზე, გამოიტანეთ პროდუქტების ფასი, description, სურათი, rating, category, title, დაულაგებელი სიის სახით 

const unorderdList = document.querySelector("ul");

const renderPromise = array => {
    unorderdList.innerHTML = "";
    array.forEach(obj => {
        unorderdList.innerHTML += `
        <li>Price: ${obj.price}</li>
        <li>Description: ${obj.description}</li>
        <li>Image: <img src="${obj.image}" width="100"></li>
        <li>Rating: ${obj.rating}</li>
        <li>Category: ${obj.category}</li>
        <li>Title: ${obj.title}</li>
        `;
    });
};

fetch("https://fakestoreapi.com/products")
    .then(val => val.json())
    .then(value => renderPromise(value))
    .catch(reason => console.log(reason))
    .finally(() => console.log("Program ended"));

