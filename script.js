const inputField = document.getElementById("typingInput");
const wordCounter = document.getElementById("wordCount");
const saveButton = document.getElementById("saveButton");
const backButton = document.getElementById("backButton");
const newNoteButton = document.getElementById("newnoteButton");

if (inputField && wordCounter) {
  inputField.addEventListener("input", () => {
    const text = inputField.value.trim();
    const words = text === "" ? [] : text.split(/\s+/);
    wordCounter.textContent = words.length;
  });
}

if (saveButton && inputField) {
  saveButton.addEventListener("click", () => {
    const text = inputField.value;
    console.log("Saved text:", text); 
  });
}

if (backButton) {
  backButton.addEventListener("click", () => {
    window.location.href = "home.html";
  });
}

if (newNoteButton) {
  newNoteButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}