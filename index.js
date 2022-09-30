import {translateToMorseCode, translateToEnglish} from "./functions.js";


const englishText = document.querySelector(".convert__text__english");
const morseText = document.querySelector(".convert__morse__code");
const textButton = document.querySelector(".button__convert-text");
const morseButton = document.querySelector(".button__convert-morse");
const clearButton = document.querySelector(".button__clear");

morseButton.addEventListener("click", (event) => {
    event.preventDefault();
    const inputText = englishText.value;
    const convertedMorseText = translateToMorseCode(inputText);
    
    if (convertedMorseText) {
        morseText.value = convertedMorseText;   
    }
    
});

textButton.addEventListener("click", (event) => {
    event.preventDefault();
    const inputMorse = morseText.value;
        const convertedEnglishText = translateToEnglish(inputMorse);
    
    if (convertedEnglishText) {
        englishText.value = convertedEnglishText;
    }
    
});

// clearButton.addEventListener("click", () => {
    // display.value = " ";
// })

//translateToMorseCode("My name is Leah");
