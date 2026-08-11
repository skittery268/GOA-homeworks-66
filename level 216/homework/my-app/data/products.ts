export type Product = {
	name: string;
	category: string;
	subcategory: string;
	price: number;
};

export const products: Product[] = [
	{ name: "iPhone 15 Pro", category: "electronics", subcategory: "phones", price: 3200 },
	{ name: "Samsung Galaxy S24", category: "electronics", subcategory: "phones", price: 2650 },
	{ name: "Xiaomi Redmi Note 13", category: "electronics", subcategory: "phones", price: 780 },
	{ name: "MacBook Air M3", category: "electronics", subcategory: "laptops", price: 4100 },
	{ name: "Dell XPS 13", category: "electronics", subcategory: "laptops", price: 3450 },
	{ name: "Lenovo ThinkPad X1", category: "electronics", subcategory: "laptops", price: 3900 },
	{ name: "AirPods Pro 2", category: "electronics", subcategory: "headphones", price: 690 },
	{ name: "Sony WH-1000XM5", category: "electronics", subcategory: "headphones", price: 1150 },
	{ name: "Nike Air Max 90", category: "clothes", subcategory: "shoes", price: 420 },
	{ name: "Adidas Ultraboost 22", category: "clothes", subcategory: "shoes", price: 510 },
	{ name: "Uniqlo Cotton T-Shirt", category: "clothes", subcategory: "tshirts", price: 65 },
	{ name: "Zara Basic T-Shirt", category: "clothes", subcategory: "tshirts", price: 55 },
	{ name: "Levi's Denim Jacket", category: "clothes", subcategory: "jackets", price: 340 },
	{ name: "The North Face Puffer", category: "clothes", subcategory: "jackets", price: 890 },
];
