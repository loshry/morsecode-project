import {translateToMorseCode} from "./index.js";
import {it, expect} from "@jest/globals";

it("Translate Sam to Morse Code", () => {
const result = translateToMorseCode("Sam");
expect(result).toBe("... .- --");
});

it("Translate Sam J")