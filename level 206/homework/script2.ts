// 3) შექმენით enum Category (Electronics, Clothes, Food, Books) და Product ტიპი 
// (name, price, category, inStock), შექმენით მინიმუმ 6 პროდუქტის მასივი და for 
// ციკლის გამოყენებით დაბეჭდეთ მხოლოდ მარაგში არსებული პროდუქტები, გამოთვალეთ ყველა 
// პროდუქტის ჯამური ფასი და იპოვეთ ყველაზე ძვირი პროდუქტი.

enum Category {
    Electronics = "electronics",
    Clothes = "clothes",
    Food = "food",
    Books = "books"
};

type Product = {
    name: string;
    price: number;
    category: Category;
    inStock: boolean;
};

const maximum = (arr: Product[]): Product => {
    let obj = arr[0];

    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i].price > obj.price) {
            obj = arr[i];
        };
    };

    return obj;
}

const products: Product[] = [
    {
        name: "iPhone 16",
        price: 999,
        category: Category.Electronics,
        inStock: true
    },
    {
        name: "Gaming Keyboard",
        price: 120,
        category: Category.Electronics,
        inStock: false
    },
    {
        name: "Hoodie",
        price: 45,
        category: Category.Clothes,
        inStock: true
    },
    {
        name: "Pizza",
        price: 15,
        category: Category.Food,
        inStock: true
    },
    {
        name: "Clean Code",
        price: 35,
        category: Category.Books,
        inStock: true
    },
    {
        name: "JavaScript: The Good Parts",
        price: 28,
        category: Category.Books,
        inStock: false
    }
];

let sum: number = 0;

for (let i: number = 0; i < products.length; i++) {
    if (products[i].inStock) {
        console.log(products[i]);
    };

    sum += products[i].price;
};

console.log(maximum(products));
console.log(sum);