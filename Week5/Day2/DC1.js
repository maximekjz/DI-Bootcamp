// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
let sentence = 'The movie is not that bad, I like it';
let wordNot = Number(sentence.indexOf('not'));
let count_space_not = 0 ;
for (let i = 0; i < wordNot; i++){
    if(sentence[i]===' '){
        count_space_not ++;
    }
}
wordNot=Number(count_space_not)+1;

console.log(wordNot)

// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
let wordBad = Number(sentence.indexOf('bad'));
let count_space_bad = 0 ;
for (let j = 0; j < wordBad; j++){
    if(sentence[j]===' '){
        count_space_bad ++;
    }
}
wordBad=Number(count_space_bad)+1;

console.log(wordBad);

if(wordBad > wordNot){
    sentence = sentence.replace('not that bad', 'good');
};
console.log(sentence)
// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be : “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
// Example:

//   Your string is : 'This dinner is not that bad ! You cook well', 
//   --> the result is : 'This dinner is good ! You cook well'

//   Your string is : 'This movie is not so bad !' 
//   --> the result is : 'This movie is good !'

//   Your string is : 'This dinner is bad !' 
//   --> the result is : 'This dinner is bad !'

