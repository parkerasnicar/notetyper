const inputField = document.getElementById("typingInput");
const wordCounter = document.getElementById("wordCount");

inputField.addEventListener("input", () => {
  const text = inputField.value.trim();
  const words = text === "" ? [] : text.split(/\s+/);
  wordCounter.textContent = words.length;
});

document.getElementById("saveButton").addEventListener("click", () => {
    const text = document.getElementById("typingInput").value;
    console.log("Saved text:", text); 
  });

  document.getElementById("backButton").addEventListener("click", () => {
    console.log("Back button clicked");
  });