// MongoDB collection named products
const products = [
    { id: 1,  name: "Wireless Headphones", category: "Electronics",  brand: "Sony",       price: 79.99,  rating: 4.5, inStock: true  },
    { id: 2,  name: "Running Shoes",        category: "Footwear",     brand: "Nike",       price: 120.00, rating: 4.7, inStock: true  },
    { id: 3,  name: "Bluetooth Speaker",    category: "Electronics",  brand: "JBL",        price: 49.99,  rating: 4.2, inStock: true  },
    { id: 4,  name: "Coffee Maker",         category: "Kitchen",      brand: "Breville",   price: 89.99,  rating: 4.6, inStock: false },
    { id: 5,  name: "Yoga Mat",             category: "Sports",       brand: "Lululemon",  price: 35.00,  rating: 4.8, inStock: true  },
    { id: 6,  name: "Leather Wallet",       category: "Accessories",  brand: "Fossil",     price: 45.00,  rating: 4.3, inStock: true  },
    { id: 7,  name: "Air Fryer",            category: "Kitchen",      brand: "Philips",    price: 99.99,  rating: 4.5, inStock: true  },
    { id: 8,  name: "Sneakers",             category: "Footwear",     brand: "Adidas",     price: 95.00,  rating: 4.4, inStock: false },
    { id: 9,  name: "Smart Watch",          category: "Electronics",  brand: "Samsung",    price: 199.99, rating: 4.6, inStock: true  },
    { id: 10, name: "Dumbbells Set",        category: "Sports",       brand: "Bowflex",    price: 60.00,  rating: 4.1, inStock: true  },
    { id: 11, name: "Blender",              category: "Kitchen",      brand: "Breville",   price: 55.00,  rating: 4.3, inStock: true  },
    { id: 12, name: "Sunglasses",           category: "Accessories",  brand: "Ray-Ban",    price: 30.00,  rating: 4.0, inStock: true  },
    { id: 13, name: "Laptop Stand",         category: "Electronics",  brand: "Sony",       price: 40.00,  rating: 4.2, inStock: false },
    { id: 14, name: "Hiking Boots",         category: "Footwear",     brand: "Nike",       price: 140.00, rating: 4.9, inStock: true  },
    { id: 15, name: "Resistance Bands",     category: "Sports",       brand: "Bowflex",    price: 20.00,  rating: 3.9, inStock: true  },
    { id: 16, name: "Backpack",             category: "Accessories",  brand: "Fossil",     price: 65.00,  rating: 4.4, inStock: true  },
    { id: 17, name: "Toaster Oven",         category: "Kitchen",      brand: "Philips",    price: 75.00,  rating: 4.1, inStock: false },
    { id: 18, name: "USB-C Hub",            category: "Electronics",  brand: "Samsung",    price: 35.00,  rating: 4.0, inStock: true  },
    { id: 19, name: "Baseball Cap",         category: "Accessories",  brand: "Adidas",     price: 25.00,  rating: 3.8, inStock: true  },
    { id: 20, name: "Jump Rope",            category: "Sports",       brand: "Lululemon",  price: 15.00,  rating: 4.2, inStock: true  },
];

const indexes = new Map();

for(const product of products) {
    const key = `${product.category}_${product.brand}`;
    const index = indexes.get(key) || [];
    indexes.set(key, [...index, product])
}

console.log(indexes)

