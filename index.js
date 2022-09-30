import { translateToMorseCode, translateToEnglish } from "./functions.js";

const englishText = document.querySelector(".convert__text__english");
const morseText = document.querySelector(".convert__morse__code");
const textButton = document.querySelector(".button__convert-text");
const morseButton = document.querySelector(".button__convert-morse");
const clearButton = document.querySelector(".button__clear");

morseButton.addEventListener("click", (event) => {
  event.preventDefault();
  const inputText = englishText.value;
  let convertedMorseText = "";
  try {
    convertedMorseText = translateToMorseCode(inputText);
  } catch (err) {
    morseText.value = "error";
    return;
  }

  if (convertedMorseText) {
    morseText.value = convertedMorseText;
  }
});

textButton.addEventListener("click", (event) => {
  event.preventDefault();
  const inputMorse = morseText.value;
  console.log(inputMorse);
  let convertedEnglishText = "";
  try {
    convertedEnglishText = translateToEnglish(inputMorse);
  } catch (err) {
    englishText.value = "error";
    return;
    
  }
  console.log(englishText.value);

  if (convertedEnglishText) {
    englishText.value = convertedEnglishText;
  }
});

// clearButton.addEventListener("click", () => {
// display.value = " ";
// })

//translateToMorseCode("My name is Leah");
