// 2) შექმენით საკუთაი ტიპი რომელიც იქნება დატვირთული მაგალითად 
// მასივები ობიექტები და სხვა დანარჩენი ტიპების ერთიანობა, შემდეგ 
// შექმენით ცვლადი და მიანიჭეთ შექმნილი ტიპი

type Product = {
    name: string;
    price: number;
    category: string;
};

type Person = {
    id: string | number;
    name: string;
    email: string;
    
    products: Product[];

    favoriteProduct: Product;
};

const user: Person = {
    id: "abc123abc",
    name: "Saba",
    email: "example@gmail.com",
    products: [
        {
            name: "Test product",
            price: 5000,
            category: "product"
        },
        {
            name: "Test product",
            price: 3500,
            category: "test"
        }
    ],
    favoriteProduct: {
        name: "Test",
        price: 500,
        category: "Test"
    }
};