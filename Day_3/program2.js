/* count length of string*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findStringLength(str) {
    return str.length;
}

rl.question("Please enter a string: ", function(userInput) {

    const length = findStringLength(userInput);

    console.log("Length of the string:", length);

    rl.close();
});
