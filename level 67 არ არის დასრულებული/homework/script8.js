// 10) შექმენით მასივი რომელიც შედგება boolean მნიშვნელობებისგან true, false - ი, თქვენი დავალებაა, რომ map method - ის გამოყენებით 
// გამოიტანოთ true boolean - მნიშვნელობები როგორც 'Yes' და false boolean - მნიშვნელობები როგორც 'No'

const booleans = [true, false, true, false, true, false, true, false];

const yesNo = booleans.map(word => word === true ? "Yes" : "No");

console.log(yesNo);

