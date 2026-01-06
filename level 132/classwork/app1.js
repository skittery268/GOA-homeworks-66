// 1) შექმენით სერვერი მანქანების სამართავი სისტემიოსთვის, სადაც გექნებათ 
// ორი ტიპის ბილიკი /cars და /users, ორივე ტიპის ბილიკისთის შექმენით სატესტო 
// მასივები სადაც მინიმუმ 3 მნიშნელობა გექნებათ შენახული შემდეგ კი 
// დაარეგისტირრეთ ყველა ის route რომელიც საჭიროა (CRUD - Create, Read, 
// Update, Delete) (post, get, patch, delete) - თავისი query (ინფოს 
// შესაქმნელად) და პარამეტრებით (კონკრეტული ობიექტების ასარჩევად) კოდის 
// ხარისხის და ოპტიმიზაციისთვის გამოიყენეთ router და use მეთოდები.

const express = require("express");

const usersRouter = require("./routers/users.router.js");
const carsRouter = require("./routers/cars.router.js");

const app = express();

app.use("/users", usersRouter);

app.use("/cars", carsRouter);

app.listen(3000, () => {
    console.log("Server Started!");
})