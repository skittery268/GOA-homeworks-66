const sum = (a, b) => {
    return a + b;
};

const multiple = (a, b) => {
    return a * b;
};

const difference = (a, b) => {
    return a - b;
};

const message = (name, age) => {
    return `Hello ${name}, your age ${age}`;
};

const greet = (name) => {
    return `Hello ${name}`;
};

module.exports = {sum, multiple, difference, message, greet};