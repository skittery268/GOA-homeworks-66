// 3) შექმენიტ ფუნქცია სადაც პარამეტრს აქვს UNION ტიპი და გამოიყენეთ 
// type guard აგრეთვე ახსენით კომენატრებით რა არის type guard

const read = (id: string | number) => {
    if (typeof id === "string") {
        return id.toLocaleUpperCase();
    };

    return id;
};

// type guard - როდესაც ჩვენ ფუნქციაში გადმოგვეცემა union ტიპის 
// ინფორმაცია, ჩვენ უნდა მოვახდინოთ კონკრეტული მოქმედება კონკრეტული 
// ტიპის ინფორმაციაზე ისე, რომ error - ი არ მოხდეს.
