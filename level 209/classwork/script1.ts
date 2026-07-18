// 1) შექმენით Type Guard typeof გამოყენებით 
// ფუნქციაში სადაც პარამეტრის ტიპი Union არის

const formatId = (id: number | string) => {
    if (typeof id === "string") {
        return id.toLowerCase();
    };

    return id.toFixed(2);
};

