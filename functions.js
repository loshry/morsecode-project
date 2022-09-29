const morseCodeTranslation = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    " ": "/"
};

// console.log(Object.values(morseCodeTranslation["A"]).join(""));

export const translateToMorseCode = (textToConvert) => {
    // if text has a character not in the translation table
    const keyArr = Object.keys(morseCodeTranslation);

    let convertedText = "";
    for (let i=0; i < textToConvert.length; i++) {
        const charToConvert = textToConvert.charAt(i).toUpperCase();
        if(keyArr.includes(charToConvert)) {
            convertedText += Object.values(morseCodeTranslation[charToConvert]).join("") + " ";
    }
    else {
        throw new Error("Unrecognized character in input");
    }
        return convertedText.trimEnd();
    }
};
