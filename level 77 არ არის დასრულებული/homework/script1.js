// 3) კომენტარების სახით ახსენით თუ რა არის Promise - ები, რა არის fetch - ი და რაში ვიყენებთ ჩვენ მას, თქვენი სიტყვებით ახსენით თუ რა არის server, 
// Promise - ებზე და fetch - ზე გააკეთეთ რამოდენიმე დავალება

// Promise - ები არის ობიექტები, რომლებიც წარმოადგენენ ასინქრონულ ოპერაციებს. ისინი გვაძლევენ საშუალებას დავგეგმოთ კოდი, რომელიც შესრულდება მომავალში, როდესაც ოპერაცია დასრულდება. Promise - ებს აქვს სამი მდგომარეობა: pending (მიმდინარე), fulfilled (შესრულებული) და rejected (უარყოფილი).

// fetch არის ბრაუზერის API, რომელიც გამოიყენება ქსელური მოთხოვნების შესასრულებლად. ის გვაძლევს საშუალებას გავაგზავნოთ HTTP მოთხოვნები და მივიღოთ პასუხები სერვერიდან. fetch ფუნქცია აბრუნებს Promise - ს, რაც საშუალებას გვაძლევს გავმართოთ ასინქრონული ოპერაციები მარტივად.

// სერვერი არის კომპიუტერი ან პროგრამა, რომელიც უზრუნველყოფს რესურსების, მონაცემების ან სერვისების მიწოდებას სხვა კომპიუტერებს (კლიენტებს) ქსელში. სერვერები ხშირად გამოიყენება ვებგვერდების, მონაცემთა ბაზების და სხვა ონლაინ სერვისების მასპინძლობისთვის.

// promise - ებზე დავალება:
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Promise შესრულდა წარმატებით!");
    } else {
        reject("Promise უარყოფილია!");
    }
});

myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

// fetch - ზე დავალება:
fetch("https://fakestoreapi.com/products")
    .then(val => val.json())
    .then(value => console.log(value))
    .catch(reason => console.log(reason))
    .finally(() => console.log("Program ended"));


const delayedPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise შესრულდა 2 წამის შემდეგ");
    }, 2000);
});
delayedPromise.then((message) => {
    console.log(message);
});