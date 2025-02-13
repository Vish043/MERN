document.addEventListener("DOMContentLoaded", function () {
    const dropZone = document.getElementById("drop-zone");
    const fileInput = document.getElementById("file-input");
    const imagePreview = document.getElementById("image-preview");
    const errorMessage = document.getElementById("error-message");

    // Handle drag over event
    dropZone.addEventListener("dragover", function (event) {
        event.preventDefault(); // Prevent default behavior
        dropZone.style.background = "#ffefea"; // Highlight drop zone
    });

    // Handle drag leave event
    dropZone.addEventListener("dragleave", function () {
        dropZone.style.background = "white"; // Reset background
    });

    // Handle drop event
    dropZone.addEventListener("drop", function (event) {
        event.preventDefault(); // Prevent default behavior
        dropZone.style.background = "white"; // Reset background

        const files = event.dataTransfer.files;
        handleFileUpload(files[0]);
    });

    // Handle file input click (when clicking "click to upload")
    document.getElementById("file-select").addEventListener("click", function () {
        fileInput.click();
    });

    // Handle file selection via input field
    fileInput.addEventListener("change", function () {
        handleFileUpload(this.files[0]);
    });

    // Function to handle file upload
    function handleFileUpload(file) {
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith("image/")) {
            errorMessage.textContent = "Invalid file type. Please upload an image (.jpg, .png, .gif).";
            errorMessage.style.display = "block";
            imagePreview.style.display = "none";
            return;
        }

        // Display image preview
        const reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = "block";
            errorMessage.style.display = "none";
        };
        reader.readAsDataURL(file);
    }
});