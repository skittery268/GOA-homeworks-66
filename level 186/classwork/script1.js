const products = [
    {
    id: 1,
    name: "iPhone 15 Pro",
    category: "Smartphones",
    price: 1299,
    },
    {
    id: 2,
    name: "Samsung Galaxy S24",
    category: "Smartphones",
    price: 1099,
    },
    {
    id: 3,
    name: "MacBook Air M3",
    category: "Laptops",
    price: 1599,
    },
    {
    id: 4,
    name: "Lenovo IdeaPad Slim 3",
    category: "Laptops",
    price: 799,
    },
    {
    id: 5,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: 399,
    },
    {
    id: 6,
    name: "AirPods Pro 2",
    category: "Headphones",
    price: 249,
    },
    {
    id: 7,
    name: "Logitech G Pro X",
    category: "Accessories",
    price: 139,
    },
    {
    id: 8,
    name: "Razer DeathAdder V3",
    category: "Accessories",
    price: 89,
    },
    {
    id: 9,
    name: "ASUS TUF Gaming F15",
    category: "Laptops",
    price: 1199,
    },
    {
    id: 10,
    name: "PlayStation 5",
    category: "Gaming",
    price: 599,
    },
    {
    id: 11,
    name: "Xbox Series X",
    category: "Gaming",
    price: 549,
    },
    {
    id: 12,
    name: "Nintendo Switch OLED",
    category: "Gaming",
    price: 399,
    },
    {
    id: 13,
    name: "Apple Watch Series 10",
    category: "Wearables",
    price: 499,
    },
    {
    id: 14,
    name: "Samsung Galaxy Watch 7",
    category: "Wearables",
    price: 349,
    },
    {
    id: 15,
    name: "Dell UltraSharp 27",
    category: "Monitors",
    price: 429,
    },
    {
    id: 16,
    name: "ASUS ROG Swift",
    category: "Monitors",
    price: 699,
    },
    {
    id: 17,
    name: "Canon EOS R50",
    category: "Cameras",
    price: 899,
    },
    {
    id: 18,
    name: "GoPro Hero 13",
    category: "Cameras",
    price: 499,
    },
    {
    id: 19,
    name: "Anker Power Bank 20000mAh",
    category: "Accessories",
    price: 59,
    },
    {
    id: 20,
    name: "JBL Charge 5",
    category: "Speakers",
    price: 179,
    },
];

const indexes = new Map();

for (let i = 0; i < products.length; i++) {
    index = indexes.get(products[i].category) || [];

    indexes.set(products[i].category, [...index, products[i]]);
}

console.log(indexes);

