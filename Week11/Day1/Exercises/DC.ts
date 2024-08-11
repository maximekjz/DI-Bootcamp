// Create a function processInput that accepts an input of type number | string | boolean. The function should perform the following operations:

// If the input is a number, return its square.
// If the input is a string, return the uppercase version of the string.
// If the input is a boolean, return the negated value.

function processInput(input : number | string | boolean) : number | string | boolean {
    if (typeof input==='number') {
        return input*input
    }
    else if (typeof input ==='string') {
        return input.toUpperCase()
    }
    else if (typeof input==='boolean') {
        return !input
    }
    else {
        throw new Error('The type of input is not correct')
    }
}

console.log(processInput(2));
console.log(processInput('hello'));
console.log(processInput(true));
console.log(processInput(hi));
