//  Exercice 1

// Using a DOM property, retrieve the h1 and console.log it.
// let h1 = document.querySelector('h1');
// console.log(h1)

// Using DOM methods, remove the last paragraph in the <article> tag.
const paragraph = document.querySelectorAll('p');
let last_paragraph = paragraph[paragraph.length-1];
last_paragraph.remove()

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let h2 = document.querySelector('h2')
h2.addEventListener('mouseover', function(e){
e.target.style.color = 'red';
});

// Add an event listener hich will hide the h3 when it’s clicked on (use the display:none property).
let h3 = document.querySelector('h3')
h3.addEventListener('mouseover', function(e){
e.target.style.display = 'none';
});


// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let button = document.querySelector('button')
button.addEventListener('click',function(){
document.body.style.fontWeight = 'bold';
});
// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
let random_number = Math.floor(Math.random() * 101);
let h1 = document.querySelector('h1');
h1.addEventListener('mouseover', function(e){
    e.target.style.fontSize = `${random_number}px`;
})
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
// let p2 = paragraph[2];
// p2.addEventListener('mouseover', function(e){
//     e.target.fadeOut('1s');
// })




//  Exercice 2 

let form = document.querySelector('form')
console.log(form);

let fname = document.getElementsByName('firstname')[0]
console.log(fname);

let lname = document.getElementsByName('lastname')[0]
console.log(lname);

form.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = e.target.elements["fname"].value;
    const lastName = e.target.elements["lname"].value;
    if (firstName === '' || lastName === '') {
        alert('Please populate the empty fields');
    return
    }
    console.log('First name:', e.target.elements["firstname"].value);
    console.log('Last name:', lastName)

addElement(firstName,lastName) 

});


function addElement(firstName, lastName){
    const newLiFirstName = document.createElement('li');
    newLiFirstName.textContent = `First Name of the user: ${firstName}`;
    const newLiLastName = document.createElement('li');
    newLiLastName.textContent = `Last Name of the user: ${lastName}`;
    const newUl = document.createElement('ul');
    newUl.className='usersAnswer';
    newUl.appendChild(newLiFirstName);
    newUl.appendChild(newLiLastName);
    document.body.appendChild(newUl);
}
