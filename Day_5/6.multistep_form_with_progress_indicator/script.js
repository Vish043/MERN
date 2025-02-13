const steps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");
const progressBar = document.querySelector(".progress-bar");
const stepIndicators = document.querySelectorAll(".step");

let currentStep = 0;

function updateStep() {
    steps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
        stepIndicators[index].classList.toggle("active", index <= currentStep);
    });
    progressBar.style.width = `${(currentStep / (steps.length - 1)) * 100}%`;
}

nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (currentStep < steps.length - 1) currentStep++;
        updateStep();
    });
});

prevBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (currentStep > 0) currentStep--;
        updateStep();
    });
});

document.getElementById("multiStepForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
});