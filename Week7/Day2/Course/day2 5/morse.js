let morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
  " ": " "
}`;

const toJs = (jsonString) => {
  return new Promise((res, rej) => {
    try {
      let objMorse = JSON.parse(jsonString);
      if (Object.keys(objMorse).length === 0) {
        rej("Error: this is not an empty JSON object");
      }
      res(objMorse);
    } catch (e) {
      rej("Error: this is not a valid JSON format");
    }
  });
};

const toMorse = (morseJS) => {
  const userStr = 'hello';//prompt("Enter a word...");
  if (!userStr) {
    return Promise.reject("Error: no input provided");
  }

  const arrStr = userStr.toLowerCase().split("");

  const returnArr = arrStr.map((char) => {
    if (char in morseJS) {
      return morseJS[char];
    } else {
      throw new Error(`Char ${char} not exist in the morse code`)
      // return Promise.reject(`Char ${char} not exist in the morse code`);
    }
  });

  return Promise.resolve(returnArr);
};

const joinWords = (morseArr) => {
  return morseArr.map((item) => `<div>${item}</div>`);
};

toJs(morse)
  .then((result) => {
    // console.log(result);
    return toMorse(result);
  })
  .then((result) => {
    return joinWords(result);
  })
  .then((result) => {
    document.getElementById("root").innerHTML = result.join("");
  })
  .catch((e) => {
    console.log(e);
  });
