// Implement a function that takes 2 positive integers and returns the sum of every number between (and including) them:
const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0) return "ERROR";
    if(!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    let finalSum = 0;
    
    for (let i = num1; i <= num2; i++) {
        finalSum += i;
    }
    
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
