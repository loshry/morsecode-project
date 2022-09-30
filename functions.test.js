import {translateToMorseCode, translateToEnglish} from "./functions.js";
import {it, expect} from "@jest/globals";

it("Translate Sam to Morse Code", () => {
const result = translateToMorseCode("Sam");
expect(result).toBe("... .- --");
});

it("Translate .... . .-.. .-.. --- from Morse Code", ()=> {
    const result = translateToEnglish(".... . .-.. .-.. ---");
    expect(result).toBe("HELLO");
});

