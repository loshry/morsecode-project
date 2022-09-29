const englishText = document.querySelector(".convert__text__english");
const morseText = document.querySelector(".convert__text__morse");
const textButton = document.querySelector(".button__convert-text");
const morseButton = document.querySelector(".button__convert-morse");



morseButton.addEventListener("click", () => {
    Event.preventDefault();
    const inputText = englishText.value;
    const convertedMorseText = translateToMorseCode(inputText);
    if (convertedMorseText) {
        morseText.value = convertedMorseText;   
    }

});

textButton.addEventListener("click", () => {
    Event.preventDefault();
    const inputMorse = morseText.value;
    const convertedEnglishText = translateToMorseCode(inputMorse);
    if (convertedEnglishText) {
        englishText.value = convertedEnglishText;
    }
});