process.argv.push(5)
process.argv.push(10)
process.argv.push(7)
const args = process.argv.slice(2);
let sum = 0;
for (const arg of args) {
    const num = parseInt(arg);
    if (num) {
        sum += num;
    }
}

console.log("ჯამი:", sum);
