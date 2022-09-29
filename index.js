import {translateToMorseCode} from "./functions.js";

const englishText = document.querySelector(".convert__text__english");
const morseText = document.querySelector(".convert__morse__code");
const textButton = document.querySelector(".button__convert-text");
const morseButton = document.querySelector(".button__convert-morse");

morseButton.addEventListener("click", (event) => {
    event.preventDefault();
    const inputText = englishText.value;
    const convertedMorseText = translateToMorseCode(inputText);
    console.log(inputText);
    console.log(convertedMorseText);
    if (convertedMorseText) {
        morseText.value = convertedMorseText;   
    }
    console.log(convertedMorseText);
});

textButton.addEventListener("click", (event) => {
    event.preventDefault();
    const inputMorse = morseText.value;
    const convertedEnglishText = translateToMorseCode(inputMorse);
    if (convertedEnglishText) {
        englishText.value = convertedEnglishText;
    }
    console.log(convertedEnglishText);
});


//translateToMorseCode("My name is Leah");
console.log(translateToMorseCode("My name is Leah"));