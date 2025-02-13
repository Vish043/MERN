document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    
    if (key === "h") {
        window.location.href = "home.html"; // Change to your home page URL
    } else if (key === "c") {
        window.location.href = "contact.html"; // Change to your contact page URL
    } else if (key === "b") {
        history.back();
    }
});
