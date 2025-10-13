// 6) შექმენით ფუნქცია სახელად realFriends რომელსაც გადაეცემა სახელების მასივი, თქვენი დავალებააა შექმნათ ერთი ცარიელი 
// მასივი სახელად myFriends რომელშიც მხოლოდ იმ სახელებს ჩაამატებთ რომლის ზომაც (სიმბოლოების რაოდენობაც) >= 4 შემდეგ 
// კი დააბრუნეთ ეს მასივი

const realFriends = function(nameList) {
    let myFriends = [];

    for(let i = 0; i < nameList.length; i++) {
        if (nameList[i].length >= 4) {
            myFriends.push(nameList[i]);
        }
    };

    return myFriends
};

