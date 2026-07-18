// 2) შექმენით ერთმანეთში ჩაშენებული 4 ტიპის ობიექტი დააკვირდით 
// რამდენად რთულია წერაც და წაკითხვაც, შემდეგ დაყავეთ ეს ინტერფეისი 
// სხვადასხვა ინტერფეისებად

// interface Preson {
//     name: string;
//     email: string;
//     password: string;
//     cart: {
//         product: {
//             name: string,
//             price: number,
//             inStock: boolean
//         }
//     },
//     whishList: {
//         product: {
//             name: string,
//             price: number,
//             inStock: boolean
//         }
//     }
// };

interface Product {
    name: string,
    price: number,
    inStock: boolean
};

interface Cart {
    cart: Product;
};

interface WhishList {
    whishList: Product;
};

interface PlatformUser {
    name: string;
    email: string;
    password: string;
    cart: Cart;
    whishList: WhishList;
};