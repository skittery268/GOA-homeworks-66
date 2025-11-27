// 6) Buffer - ის გამოყენებით, შექმენით 10 ადგილიანი მეხსიერება, მეორე არგუმენტად კი გადაეცით ascii ცხრილიდან რომელიმე სიმბოლო, ასო მაგალითად 'N', საბოლოო შედეგი კი დაბეჭდეთ

const { Buffer } = require("buffer");

const buffer = Buffer.alloc(10, "Saba");

console.log(buffer)