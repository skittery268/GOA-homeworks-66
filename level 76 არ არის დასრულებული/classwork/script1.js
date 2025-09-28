// 1) fetch ის გამოყენებით გააგზავნეთ მოცემულ მისამართზე მოთხოვნა, მიღებული მონაცემებით შექმენით სტრინგი სადაც გექნებათ მოცემული li 
// თეგები რომელში ჩასმული იქნება თითოეული პროდუქტის ინფორმაცია, შექმენით ორი ფუნქცია პირველი render და მეორე createProductLI 
// რომელსაც გადაეცემა მასივი, createProductLI აბრუნებს სტრინგს render ფუნქციაში და რენდერ ფუნქცია გამოიტანს ეკრანზე

// https://fakestoreapi.com/products

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

