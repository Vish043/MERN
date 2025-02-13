// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const timeInput = document.getElementById("time-input");
    const timerDisplay = document.getElementById("timer-display");
    const startBtn = document.getElementById("start-btn");
    const pauseBtn = document.getElementById("pause-btn");
    const resetBtn = document.getElementById("reset-btn");

    let countdown;
    let timeLeft = 0;
    let isPaused = false;
    let originalTime = 0;

    // Function to update the display
    function updateDisplay(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }

    // Start Timer
    startBtn.addEventListener("click", function () {
        if (timeInput.value && !countdown) {
            originalTime = parseInt(timeInput.value);
            timeLeft = originalTime;
            updateDisplay(timeLeft);
            startCountdown();
        } else if (isPaused) {
            startCountdown();
        }
    });

    // Function to start the countdown
    function startCountdown() {
        isPaused = false;
        countdown = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay(timeLeft);
            } else {
                clearInterval(countdown);
                countdown = null;
            }
        }, 1000);
    }

    // Pause Timer
    pauseBtn.addEventListener("click", function () {
        if (countdown) {
            clearInterval(countdown);
            countdown = null;
            isPaused = true;
        }
    });

    // Reset Timer
    resetBtn.addEventListener("click", function () {
        clearInterval(countdown);
        countdown = null;
        timeLeft = originalTime;
        updateDisplay(timeLeft);
    });

    // Initialize display
    updateDisplay(0);
});