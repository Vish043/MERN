// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Select all FAQ question elements
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach((question) => {
        question.addEventListener("click", function () {
            // Close all open answers
            document.querySelectorAll(".faq-answer").forEach((answer) => {
                if (answer !== this.nextElementSibling) {
                    answer.style.display = "none";
                }
            });

            // Toggle the visibility of the clicked question's answer
            const answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
                this.classList.remove("active");
            } else {
                answer.style.display = "block";
                this.classList.add("active");
            }
        });
    });
});