// 5) გააკეთეთ პირველი დავალება switch - ით

const score = 100;

switch (true) {
    case (score < 0 || score > 100):
        console.log("Invalid Score")
        break
    case (score === 100):
        console.log("A+")
        break
    case (score >= 90):
        console.log("A")
        break
    case (score >= 80):
        console.log("B")
        break
    case (score >= 70):
        console.log("C")
        break
    case (score >= 60):
        console.log("D")
        break
    case (score >= 40):
        console.log("E")
        break
    default:
        console.log("F")
        break
}
