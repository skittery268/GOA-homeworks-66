// 6) შექმენით ტიპი type Status = "success" | "error" | 
// "loading". შემდეგ შექმენით ფუნქცია showStatus(status: Status), 
// რომელიც switch ოპერატორის გამოყენებით თითოეული შესაძლო 
// მნიშვნელობისთვის დაბეჭდავს შესაბამის შეტყობინებას. გამოიძახეთ 
// ფუნქცია სამივე შესაძლო მნიშვნელობით.

type Status = "success" | "error" | "loading";

const showStatus = (status: Status) => {
    switch (status) {
        case "success":
            return "Users returned successfully!";
        case "error":
            return "Users not found!";
        case "loading":
            return "Loading...";
    };
};

console.log(showStatus("success"));
console.log(showStatus("error"));
console.log(showStatus("loading"));