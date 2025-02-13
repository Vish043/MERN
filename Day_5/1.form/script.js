document.addEventListener("DOMContentLoaded", function () {
    // Get form and input elements
    const form = document.getElementById("signupForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const genderSelect = document.getElementById("gender");

    // Add submit event listener
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const gender = genderSelect.value;

        // Simple validation
        if (name === "" || email === "" || password === "" || gender === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Check password length
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // Simulate successful form submission
        alert("Form submitted successfully!");
        form.reset(); // Reset the form fields
    });

    // Add focus event to highlight input fields
    document.querySelectorAll("input, select").forEach((input) => {
        input.addEventListener("focus", function () {
            this.style.border = "2px solid #ff7e5f";
        });

        input.addEventListener("blur", function () {
            this.style.border = "1px solid #ccc";
        });
    });
});