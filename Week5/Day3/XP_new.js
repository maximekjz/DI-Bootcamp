// 🌟 Exercise 5 : Users

// Using Javascript:
// Retrieve the div and console.log it
let contentdiv = document.getElementById('container');
console.log(contentdiv.textContent);

// Change the name "Pete" to "Richard"
let change_pete = document.querySelector('.list li:nth-child(2)'); 
change_pete.textContent = 'Richard';
// Delete the second <li> of the second <ul>.
let secUl = document.querySelectorAll('.list')[1];
let secLi = secUl.querySelectorAll('li')[1];
secLi.remove();

// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
let UL=document.querySelectorAll('.list');
for(i=0; i < UL.length; i++){
    let firstLi = UL[i].querySelector('li');
    firstLi.textContent = 'Maxime'};

// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
UL.forEach(ul=>{
    ul.classList.add('student_list');
});
// Add the classes university and attendance to the first <ul>.
let firstUl = document.querySelectorAll('.list')[0];
firstUl.classList.add('university', 'attendance');
// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
contentdiv.style.backgroundColor = 'lightblue'
// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
let lastLi = secUl.querySelectorAll('li')[secUl.querySelectorAll('li').length - 1]
if(lastLi && lastLi.textContent.trim()==='Dan'){
lastLi.style.display = 'none'
};
// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
if (change_pete && change_pete.textContent.trim()==='Richard'){
change_pete.style.border = '8px solid red'}
// Change the font size of the whole body.
document.body.style.fontSize='20px'
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).


// 🌟 Exercise 6 : Change The Navbar

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let div = document.getElementById("navBar");
div.setAttribute("id","socialNetworkNavigation");

// First, create a new <li> tag (use the createElement method).
let new_li = document.createElement('li');
// Create a new text node with “Logout” as its specified text.
let logout = document.createTextNode('Logout');
// Append the text node to the newly created list node (<li>).
logout_item.appendChild(logoutText);
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
let ul = document.querySelector('ul');
ul.appendChild(new_li)
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
let firstli = ul.firstElementChild;
console.log('Text:', firstLi.textContent);
let lastli = ul.lastElementChild;
console.log('Text:', lastLi.textContent);


// Exercise 7 : My Book List

// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
let allBooks = [{
    title:'1984';
    author:'Georges Orwell';
    image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8bTpGDLEYVpDlV8tD10XlQHaMF%26pid%3DApi&f=1&ipt=a9367ece6b824dbf954f761d0e7cc85094dd64ef12ff3e43eb18d1924085c1e0&ipo=images';
    alreadyRead: 'Yes'}

    {title:'Zadig';
    author:'Voltaire';
    image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jHs72rbF9PFCrfzo3FZYhQHaK2%26pid%3DApi&f=1&ipt=90843c512e7aecaf436d0b370e76cf58c80a15ab183797257098d7359971a62a&ipo=images';
    alreadyRead: 'Yes'

}];

// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red

let section_book = document.querySelector('.listBooks');

allBooks.forEach(book => {
    let div = document.createElement('div');

    let Author = document.createElement('p');
    Author.textContent = `${book.title} written by ${book.author}.`;

    if (book.alreadyRead) {
        Author.style.color = 'red';
    }
    div.appendChild(Author);

    let img = document.createElement('img');
    img.src = book.image;
    img.alt = book.title + 'Book cover image';
    img.style.width = '100px'; 
    div.appendChild(img);

    section.appendChild(div);
});
