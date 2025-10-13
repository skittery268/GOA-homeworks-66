// 1) (fetch, async/await, try/catch - ის გადამეორება) გააგზავნეთ ამ https://fakestoreapi.com/products ლინკზე მოთხოვნა, async await - ის 
// გამოყენებით და დაბეჭდეთ მონაცემები

// კომენტარების სახით ახსენით თუ რა არის try, catch, async, await

const myAsincFunc = async () => {
    try {
        const prom = await fetch("https://fakestoreapi.com/products");
        const date = await prom.json();

        console.log(date);
    } catch {
        console.error("ERROR");
    }
}

myAsincFunc()

// async await - ი არის ასინქრონული ფუნქცია
// try keyword - ით ჩვენ შეგვიძლია ვცადოთ ასინქრონული კოდის გაშვება და თუ ერორი დაგვიბრუნდა მაშინ catch - ით დავიჭიროთ ეს ერორი და სპეციალური შეტყობინება გამოვიტანოთ.

