function greetUser(name) {
    return `Hello ${name}`;
};

function guessNumber(number) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (number === randomNumber) {
        return `You Gess the number`;
    } else {
        return `Wrong, number: ${randomNumber}`;
    };
};

module.exports = {greetUser, guessNumber};

