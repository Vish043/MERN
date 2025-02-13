document.querySelectorAll(".edit-btn").forEach(button => {
    button.addEventListener("click", (event) => {
        const row = event.target.closest("tr");
        toggleEditMode(row, true);
    });
});

document.querySelectorAll(".save-btn").forEach(button => {
    button.addEventListener("click", (event) => {
        const row = event.target.closest("tr");
        toggleEditMode(row, false);
    });
});

document.querySelectorAll(".cancel-btn").forEach(button => {
    button.addEventListener("click", (event) => {
        const row = event.target.closest("tr");
        cancelEdit(row);
    });
});

function toggleEditMode(row, isEditing) {
    row.querySelectorAll("td[contenteditable]").forEach(cell => {
        cell.contentEditable = isEditing;
        if (isEditing) {
            cell.dataset.originalValue = cell.innerText;
        }
    });

    row.querySelector(".edit-btn").hidden = isEditing;
    row.querySelector(".save-btn").hidden = !isEditing;
    row.querySelector(".cancel-btn").hidden = !isEditing;
}

function cancelEdit(row) {
    row.querySelectorAll("td[contenteditable]").forEach(cell => {
        cell.innerText = cell.dataset.originalValue;
        cell.contentEditable = false;
    });

    row.querySelector(".edit-btn").hidden = false;
    row.querySelector(".save-btn").hidden = true;
    row.querySelector(".cancel-btn").hidden = true;
}