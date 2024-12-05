//give a user validation email and password to check whether the user input is valid using ddictionary in js
const readline = require('readline');

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Dictionary (object) to store valid user credentials
const validCredentials = {
    email: "user@example.com",
    password: "securePassword123"
};

// Function to validate user input (email and password)
function validateUserInput(inputEmail, inputPassword) {
    // Check if the input email and password match the stored valid credentials
    if (inputEmail === validCredentials.email && inputPassword === validCredentials.password) {
        return "Login successful!";
    } else {
        return "Invalid email or password.";
    }
}

// Prompt the user for email and password
rl.question("Enter your email: ", function(inputEmail) {
    rl.question("Enter your password: ", function(inputPassword) {
        // Validate the input and show the result
        let validationMessage = validateUserInput(inputEmail, inputPassword);
        console.log(validationMessage); // Display the result

        // Close the readline interface
        rl.close();
    });
});
