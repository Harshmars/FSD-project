const notesCont = document.querySelector(".notes-cont");
const createBtn = document.querySelector(".btn");
let notes = [];

function showNotes() {
    notesCont.innerHTML = ""; // Clear the container
    notes.forEach((noteContent, index) => {
        const noteContainer = document.createElement("div");
        noteContainer.className = "note-container";

        const inputBox = document.createElement("p");
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");
        inputBox.innerHTML = noteContent;

        const img = document.createElement("img");
        img.src = "images/delete.png";
        img.className = "delete-btn";

        inputBox.appendChild(img); // Add img as a child of inputBox
        noteContainer.appendChild(inputBox);
        notesCont.appendChild(noteContainer);

        img.addEventListener("click", () => {
            notes.splice(index, 1); // Remove the note content from the array
            showNotes(); // Refresh the notes display
            updateStorage(); // Save the updated notes array
        });

        inputBox.addEventListener("keyup", () => {
            notes[index] = inputBox.innerHTML; // Update the edited note content
            updateStorage(); // Save the updated notes array
        });
    });
}

function updateStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

createBtn.addEventListener("click", () => {
    notes.push(""); // Add an empty note content to the array
    showNotes(); // Refresh the notes display
    updateStorage(); // Save the updated notes array
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

// Load notes from localStorage on page load
const storedNotes = JSON.parse(localStorage.getItem("notes"));
if (storedNotes) {
    notes = storedNotes;
    showNotes();
}
