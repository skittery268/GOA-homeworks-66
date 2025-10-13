// 1) https://jsonplaceholder.typicode.com/users/1/posts ამ მისამართზე გააგზავნეთ მოთხოვნა ყველა ასიქნრონული ოპერაცია უნდა იმართებოდეს async await 
// ტექნიკის გამოყენებით, კომენტარებით ახსენით რა არის async await და try catch, დამატებით მიღებული ინფორმაცია საიტზე გამოიტანეთ სიის ელემენტების სახით

const myAsincFunc = async () => {
    try {
        const info = await fetch("https://jsonplaceholder.typicode.com/users/1/posts");
        const date = await info.json();

        console.log(date);
    } catch {
        console.error("ERROR");
    }
};

myAsincFunc()

// async await - ი არის ასინქრონული ფუნქცია
// try keyword - ით ჩვენ შეგვიძლია ვცადოთ ასინქრონული კოდის გაშვება და თუ ერორი დაგვიბრუნდა მაშინ catch - ით დავიჭიროთ ეს ერორი და სპეციალური შეტყობინება გამოვიტანოთ.

