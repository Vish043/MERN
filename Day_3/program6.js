/*write a js code take first 100 natural number as input if number is multiple of 2 multiply the given number is 5 ,if number multiple of 3 divide a given number by 3 and after the both the operation give me the result of the repeated numbers.*/
// Step 1: Initialize the array for the first 100 natural numbers
const numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

let resultFrequency = {};

for (let num of numbers) {
    let result = num;  

    if (num % 2 === 0) {
        result = result * 5;
    }

    if (num % 3 === 0) {
        result = result / 3;
    }

    if (resultFrequency[result]) {
        resultFrequency[result] += 1;
    } else {
        resultFrequency[result] = 1;
    }
}

let repeatedResults = [];
for (let key in resultFrequency) {
    if (resultFrequency[key] > 1) {
        repeatedResults.push(key);
    }
}

console.log("Repeated results:", repeatedResults);
