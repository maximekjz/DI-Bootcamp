let array_objects = []

class Quote {
    static id = 0 
    constructor(author, quote){
        this.id = Quote.id++;
        this.author = author   
        this.quote = quote
        this.like = 0
    }

    implement(){
        array_objects.push({id : this.id, author : this.author, quote : this.quote, like : this.like})
    }
}


let quote0 = new Quote("Oscar Wilde","Be yourself; everyone else is already taken.").implement();
let quote1 = new Quote("Robert Frost", "In three words I can sum up everything I've learned about life: it goes on.").implement();
let quote2 = new Quote("Steve Jobs", "The only way to do great work is to love what you do.").implement();
let quote3 = new Quote("Wayne Gretzky", "You miss 100% of the shots you don't take.").implement();
let quote4 = new Quote("Nelson Mandela", "The greatest glory in living lies not in never falling, but in rising every time we fall.").implement();


console.log(array_objects)

let button = document.getElementById('generate_quote_button')
let button_charspace = document.getElementById('char_space')
let button_char_no_space = document.getElementById('char_no_space')
let button_words = document.getElementById('words')
let button_like = document.getElementById('like')
let display = document.getElementById('section')
let lastindex = -1;
let currentQuote = null
function displayQUote(){ 
    let randomIndex = Math.floor(Math.random() * array_objects.length);
    if(randomIndex===lastindex){
        displayQUote()
    }
    else{
    let quote = array_objects[randomIndex]
    display.textContent = `${quote.author}: "${quote.quote}"`;
    lastindex = randomIndex
    currentQuote = quote
    }
}

function displayChar(){
    if (currentQuote) { 
        let count = currentQuote.quote.length;
        alert(`Number of characters is ${count}`);
    } else {
        alert("No quote selected yet!");
    }
}

function displayChar_no_space(){
    if (currentQuote) { 
        let quoteWOspace = currentQuote.quote.replace(/\s/g,'')
        let count = quoteWOspace.length;
        alert(`Number of characters without space is ${count}`);
    } else {
        alert("No quote selected yet!");
    }
}


function displayWords(){
    if (currentQuote) { 
        let words = currentQuote.quote.split(' ');
        let count = words.length;
        alert(`Number of words is ${count}`);
    } else {
        alert("No quote selected yet!");
    }
}

function new_like(){
    if (currentQuote) { 
        currentQuote.like++ 
        alert(`You like this quote !`);
    } else {
        alert("No quote selected yet!");
    }
}

button.addEventListener('click', displayQUote)
button_charspace.addEventListener('click', displayChar)
button_char_no_space.addEventListener('click', displayChar_no_space)
button_words.addEventListener('click', displayWords)
button_like.addEventListener('click', new_like)


document.getElementById('addQuote').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const new_author = document.getElementsByName('author')[0].value;
    const new_quote = document.getElementsByName('quote')[0].value;

    let newQuote = new Quote(new_author, new_quote).implement()
    })
