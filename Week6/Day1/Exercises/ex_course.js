// 🌟 Exercise 1 : Scope

// // #1 
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }
// funcOne()

// inside the funcOne function 3
// 1.2 - error cause a will remain 5 with a const and can't be equal to 3


// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree() -> inside the funcThree function 0
// funcTwo() 
// funcThree() -> inside the funcThree function 5
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?  -> inside the funcThree function 0 then error (same as 1.2)


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour() 
// funcFive() -> inside the funcFive function hello 


// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console: ->inside the funcSix function  test 
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ? -> inside the funcSix function  test  cause we 'let' a in the function 

// //#5
// const a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console -> outside of the if block 5 / outside of the if block 2
//  cause first it alerts with the 'if' and then it goes out of the condition and a=2
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ? -> outside of the if block 5 / outside of the if block 2


// 🌟 Exercise 2 : Ternary Operator

// function winBattle(){
//     return true;
// };

// const winBattle =() => true;

// var experiencePoints = winBattle () ? 10 : 1;
// console.log(experiencePoints)


// 🌟 Exercise 3 : Is It A String ?

// const isString =value => typeof value === 'string' ? true : false; 

// console.log(isString('hello')); 
// // //true
// console.log(isString([1, 2, 4, 0]));
// // //false


// 🌟 Exercise 4 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// const oneLine = (a,b) => a+b
// console.log(oneLine(2,3))

// 🌟 Exercise 5 : Kg And Grams

// function weight_converter (weight) {
//     return `${weight*1000} grams`
// }
// console.log(weight_converter(2));

// First, use function declaration and invoke it.

// const my_grams = function(weight_kg){
//     return `${weight_kg*1000} grams`
// }
// console.log(my_grams(2));

// Then, use function expression and invoke it.

// Write in a one line comment, the difference between function declaration and function expression.

// const kg_to_g = kg_weight => kg_weight*1000 + ' grams'
// console.log(kg_to_g(1))

// Finally, use a one line arrow function and invoke it.


// 🌟 Exercise 6 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic  location>, and married to <partner's name> with <number of children> kids."

// (function fortune(number_of_children, partner_name, geographic_location, job_title){
//     const my_fortune = "You will be a ${job_title} in ${geographic_location}, and married to ${partner_name} with ${number_of_children} kids.";
//     const add_element = document.createElement('p'); // create a <p> in the doc
//     add_element.textContent = my_fortune; // <p>my_fortune</p>
//     document.body.appendChild(add_element) // add <p> to the body
// }(9, 'Sarah', 'Tlv', 'Developer')

// 🌟 Exercise 7 : Welcome

// (function user(name){
//     const user_profile = {
//         username = name,
//         userpicture = }

//     const user_div = document.createElement('div');
//     user_div.classList.add('user-profile');

//     const img = document.createElement('img');
//     img.src = user_profile.userpicture;
//     img.alt = `${user_profile.userpicture}'s profil picture`;
//     img.classList.add('profile-picture');

//     const span = document.createElement('span');
//     span.textContent= user_profile.username;
//     span.classList.add('profile-name')

//     document.user_div.appendChild(img);
//     document.user_div.appendChild(span)

//     const navbar = document.querySelector('.navbar'); 
//     navbar.appendChild(user_div);
// })('John')

// 🌟 Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.


const makeJuice = size => {
    if (size === 'small' || size ==='medium' || size ==='large') 
        {
            const ingredients = [];
            
            // function addIngredients(first, second, third){
            //     const client_choice = `The client wants a ${size} juice, containing ${first}, ${second}, ${third}`;
            //     document.getElementById('message').textContent = client_choice;

            function displayJuice(first, second, third){
                ingredients.push(first, second, third);
                const client_choice_PII = `The client wants a ${size} juice, containing ${first}, ${second}, ${third}`;
                document.getElementById('message').textContent = client_choice_PII;
            }
             
            first = 'apple'
            second = 'lime'
            third = 'orange'
            fourth ='banana'
            fifth='strawberry'
            sixth = 'grappefruit'
            
            // addIngredients(first, second, third)
            displayJuice(first, second, third)
            displayJuice(fourth, fifth, sixth)
            } 

    else {
        alert('select small, medium or large')
    };
}

makeJuice('medium')


// Part II:

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope