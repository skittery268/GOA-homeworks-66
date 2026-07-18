// 1) შექმენით interface რომელსაც ჩააშენებთ კლასში implements 
// keyword დახმარებით

interface User {
    name: string;
    email: string;
    password: string;
};

class Person implements User {
    name: string;
    email: string;
    password: string;

    constructor (name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    };
};