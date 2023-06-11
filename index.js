const words = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
];


const searchInput = document.getElementById("search-input");
const suggestionsContainer = document.getElementById("suggestions");

searchInput.addEventListener("input", handleInput);

function handleInput() {
    const inputValue = searchInput.value.toLowerCase();
    let matchedWords = []
    if (inputValue.length > 0) {
        matchedWords = words.filter(word => word.includes(inputValue));
    }


    suggestionsContainer.innerHTML = "";
    matchedWords.forEach(word => {
        const suggestion = document.createElement("div");
        suggestion.classList.add("suggestion");
        suggestion.innerHTML = highlightMatchedCharacters(word, inputValue);
        suggestion.addEventListener("click", () => {
            searchInput.value = word;
            suggestionsContainer.innerHTML = "";
        });
        suggestionsContainer.appendChild(suggestion);
    });
}

function highlightMatchedCharacters(word, inputValue) {
    const matchedIndex = word.toLowerCase().indexOf(inputValue);
    if (matchedIndex >= 0) {
        const highlightedText = word.substring(matchedIndex, matchedIndex + inputValue.length);
        const remainingText = word.substring(matchedIndex + inputValue.length);
        return `${word.substring(0, matchedIndex)}<span class="highlight">${highlightedText}</span>${remainingText}`;
    }
    return word;
}

const toggleSwitch = document.querySelector(".toggle-switch");

toggleSwitch.addEventListener("change", toggleMode);

function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

}

