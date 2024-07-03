// Part I

// function say_hello(){
//     alert('Hello World');
// }
// setTimeout(say_hello, 2*1000);


// Part II

// function say_hello_div(){
//     let paragraph=document.getElementById('container');
//     let newP = document.createElement('p');
//     newP.textContent='Hello World';
//     paragraph.appendChild(newP);
// }
// setTimeout(say_hello_div, 2*1000);

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.

// function new_function(){
//     let paragraph=document.getElementById('container');
//     let newP = document.createElement('p');
//     newP.textContent='Hello World';
//     paragraph.appendChild(newP);
//     let button = document.getElementById('clear')
//     button.addEventListener('click', function(){
//         clearInterval(interval)})
// }
// let interval=setInterval(new_function, 2000)


// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

function new_function(){
    let paragraph=document.getElementById('container');
    let i=0;
    let interval= setInterval(function(){
        if(i<5) {
            let newP = document.createElement('p');
            newP.textContent='Hello World'; 
            paragraph.appendChild(newP);
            i++;
        }
    else {clearInterval(interval);}
},2000)

}
new_function();