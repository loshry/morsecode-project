const morseCodeTranslation = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  " ": "/",
};

// console.log(Object.values(morseCodeTranslation["A"]).join(""));

export const translateToMorseCode = (textToConvert) => {
   
  // if text has a character not in the translation table
  const keyArr = Object.keys(morseCodeTranslation);


  let convertedText = "";
  for (let i = 0; i < textToConvert.length; i++) {
    const charToConvert = textToConvert.charAt(i).toUpperCase();
        if (keyArr.includes(charToConvert)) {
      convertedText +=
       morseCodeTranslation[charToConvert] + " ";
      
    } else {
      throw new Error("Unrecognized character in input");
    }
 
  }
  
  return convertedText.trimEnd();
};

export const translateToEnglish = (codeToConvert) => {
    const codeArr = codeToConvert.split(" ");
    // const keyArr = Object.keys(morseCodeTranslation);
    const valueArr = Object.values(morseCodeTranslation);


    let convertedCode = "";
    for (let i = 0;  i < codeArr.length; i++) {
        
              const morseToConvert = codeArr[i];
              
              if(valueArr.includes(morseToConvert)) {
               let englishCharacter = Object.keys(morseCodeTranslation).find(key => morseCodeTranslation[key] === morseToConvert);
                convertedCode += englishCharacter;
              }
              else {
                throw new Error ("Error");
              }
              
   
    }
    
    return convertedCode.trimEnd();

};
