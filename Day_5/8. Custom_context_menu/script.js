const contextMenu = document.getElementById("contextMenu");

document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    
    contextMenu.style.top = `${event.clientY}px`;
    contextMenu.style.left = `${event.clientX}px`;
    contextMenu.style.display = "block";
});

document.addEventListener("click", () => {
    contextMenu.style.display = "none";
});

document.querySelectorAll(".context-item").forEach(item => {
    item.addEventListener("click", (event) => {
        const action = event.target.getAttribute("data-action");
        alert(`You selected: ${action}`);
        contextMenu.style.display = "none";
    });
});