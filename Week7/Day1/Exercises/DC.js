// DC1

const makeAllCaps = (words) => new Promise((resolve, reject) => {
    if(words.every(word => typeof word ==='string')){
        resolve(words.map(word => word.toUpperCase()))
    }
    else {reject('all the words are not strings')}
})

// makeAllCaps([1, 'bbbj'])
//     .then(result => console.log(result))
//     .catch(error => console.log(error))


const sortWords = array => {
    return makeAllCaps(array)
        .then(upper => {
            if(upper.length>4){
              return upper.sort()
            }
            else {return "Array's length <4"}
        })
        .catch(error => {throw error})
    }

// sortWords(['lm', 'bbbj', 'arb','cl','ll'])
//     .then(result => console.log(result))
//     .catch(error => console.log(error))


//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))

// DC2
const morse = `{
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
    ")": "-.--.-"
  }`

const toJS = morse_code => new Promise((resolve, reject) => {
    let array = JSON.parse(morse_code)
    if(array.length===0){
        reject('The code is empty')
    }
    else{resolve(array)}
})

toJS(morse)
    .then(result => console.log(result))
    .catch(error => console.log(error))

const toMorse = morseJS => new Promise((resolve, reject) => {
    toJS(morse)
        .then(morse_obj =>{
            let morseJS_check = morseJS.toLowerCase().split("")
            let new_morse = []
            morseJS_check.forEach(element => {
                if(element in morse_obj){
                    new_morse.push(morse_obj[element])
                }
                else{
                    reject(`character ${element} doesn't exist in morse`)
                    return} 
            });
            resolve(new_morse.join(" "))
        })
        .catch(error=> reject(error))
    });

toMorse('Hello')
    .then(result => console.log(result))
    .catch(error => console.log(error))

const joinWords = () =>{
    let user_string = prompt('Enter the word you want to convert')
    toMorse(user_string)
        .then(result => {
            let display  = document.getElementById('display')
            display.textContent = result
        })
        .catch(alert('Error converting to Morse code. Please try again.'))

}
joinWords()
        