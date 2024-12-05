/*Print Numbers in a Range with Conditions
Write a JavaScript program that prints numbers from 1 to 188, but with the following rules:
For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz" instead of the 
number. For numbers that are multiples of both 3 and 5, print "FizzBuzz".
Question: Write a JavaScript function printFizzBuzz() that implements this logic and prints the results
 in the console.*/
 function game(x) { 
    if (x % 3 === 0 && x % 5 !== 0)
        return "Fizz";
    if (x % 5 === 0 && x % 3 !== 0)
        return "Buzz";
    if (x % 5 === 0 && x % 3 === 0)
        return "FizzBuzz";
    else
        return x;
}

for (let i = 0; i <= 188; i++) {
    console.log(game(i));
}
