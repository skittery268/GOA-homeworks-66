// 6) შექმენით ერთი ცვლადი სახელად role მაში შეინახეთ რაიმე role - ი მაგალითად (moderator, admin, user), 
// switch - ის გამოყენებით შეამოწმეთ თუ role - ი არის admin - ი console ში გამოიტენეთ რომ "You Have Full Access" 
// moderator - ის შემთხვევაში გამოიტანეთ "You Can Manage The Content", user - ის შემთხვევაში გამოიტანეთ 
// "You Can View The Content"  სხვა შემთხვევაში კი "Access Denied" or "Invalid Role"

const role = "admin";

switch (role) {
    case (admin):
        console.log("You Have Full Access");
        break;
    case (moderator):
        console.log("You Can Manage The Content");
        break;
    case (user):
        console.log("You Can View The Content");
        break;
    default:
        console.log("Access Denied");
        break;
}

