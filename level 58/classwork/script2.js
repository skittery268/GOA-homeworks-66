// 2) გამოიყენეთ switch განცხადება იმისათვის რომ განიხილოთ day ცვლადი, თუ დღე უდრის 1 მაშნ დაბეჭდეთ ტერმინალში რომ ორშაბათია და ასშ

const day = 1;

switch (day) {
    case 1: 
        console.log("ორშაბათი");
        break;
    case 2: 
        console.log("სამშაბათი");
        break
    case 3:
        console.log("ოთხშაბათი");
        break
    case 4:
        console.log("ხუთშაბათი");
        break
    case 5:
        console.log("პარასკევი.");
        break;
    case 6:
        console.log("შაბათი.");
        break;
    case 7:
        console.log("კვირა");
        break
    default:
        console.log("არასწორი რიცხვია მითითებული.")
}

