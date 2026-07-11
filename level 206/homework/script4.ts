// 5) შექმენით enum Rank (Bronze, Silver, Gold, Platinum) და Player ტიპი (username, level, rank, 
// online), შექმენით მინიმუმ 7 მოთამაშის მასივი და for ციკლის გამოყენებით დაბეჭდეთ მხოლოდ ონლაინ 
// მოთამაშეები, დათვალეთ, რამდენი Gold მოთამაშეა და იპოვეთ ყველაზე მაღალი დონის (level) მოთამაშე.

enum Rank {
    Bronze = "bronze",
    Silver = "silver",
    Gold = "gold",
    Platinum = "platinum"
};

type Player = {
    userName: string;
    level: number;
    rank: Rank;
    online: boolean;
};

const players: Player[] = [
    {
        userName: "Shadow",
        level: 12,
        rank: Rank.Bronze,
        online: true
    },
    {
        userName: "Phoenix",
        level: 28,
        rank: Rank.Silver,
        online: false
    },
    {
        userName: "SniperX",
        level: 41,
        rank: Rank.Gold,
        online: true
    },
    {
        userName: "DarkKnight",
        level: 55,
        rank: Rank.Platinum,
        online: true
    },
    {
        userName: "Storm",
        level: 18,
        rank: Rank.Bronze,
        online: false
    },
    {
        userName: "Ghost",
        level: 34,
        rank: Rank.Gold,
        online: false
    },
    {
        userName: "Dragon",
        level: 67,
        rank: Rank.Platinum,
        online: true
    }
];

let topLevel: number = 0;
let goldPlayerCount: number = 0;

for (let i: number = 0; i < players.length; i++) {
    if (players[i].online) {
        console.log(players[i]);
    };

    if (players[i].rank === "gold") {
        goldPlayerCount++;
    };

    if (players[i].level > topLevel) {
        topLevel = players[i].level
    };
};

console.log(topLevel);
console.log(goldPlayerCount);
