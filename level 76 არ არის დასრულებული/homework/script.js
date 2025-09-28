// 1) Level 75 - ის 2 დავალებას დაუმატეთ Add to cart და Delete from cart ფუნქციები, უნდა შეგეძლოთ პროდუქტების კალათაში დამატება და კალათიდან წაშლა

const unorderdList = document.querySelector("ul");

let cart = [];

const renderPromise = array => {
    unorderdList.innerHTML = "";
    array.forEach(obj => {
        unorderdList.innerHTML += `
        <li>Title: ${obj.title}</li>
        <p>Price: ${obj.price}</p>
        <p>Description: ${obj.description}</p>
        <p>Image: <img src="${obj.image}" width="100"></p>
        <p>Rating: ${obj.rating.rate}</p>
        <p>Category: ${obj.category}</p>
        <button>Add to cart</button>
        `;
    });
};

fetch("https://fakestoreapi.com/products")
    .then(val => val.json())
    .then(value => renderPromise(value))
    .catch(reason => console.log(reason))
    .finally(() => console.log("Program ended"));

