// 15) reduce მეთოდის დახმარებით შეამოწმეთ თუ რამდენჯერ მეორდება თითო ელემენტი სიაში

const array = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 1, 2, 5, 3, 2, 6, 1];

const elementCount = array.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
}, {});

console.log(elementCount)

