//write js program to find square of first 10 number prime numbers
// Prime checking function
function prime(x) {
    // If x is less than 2, it's not prime
    if (x <= 1) {
        return false;
    }

    // Check divisibility from 2 to the square root of x
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false;  // x is divisible by i, so it's not prime
        }
    }

    return true;  // x is prime
}

// Loop through numbers from 0 to 99
for (let i = 0; i < 100; i++) {
    if (prime(i)) {
        console.log(i);  // Print prime numbers
    }
}
