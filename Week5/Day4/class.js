let mydiv = document.getElementById('root')
let my_main_div = document.getElementById('main')
let innerbutton = document.getElementById('innerbutton')


mydiv.addEventListener('click', mydivclick, false)
my_main_div.addEventListener('click', my_main_divclick, false)
innerbutton.addEventListener('click', innerbuttonclick, false)

function mydivclick(e){
    console.log('click on DIV')
}

function my_main_divclick(e){
    console.log('click on DIV')
}

function innerbuttonclick(e){
    console.log('click on button')
}
// {
//     e.target.style.backgroundcolor = 
// }
function popup(){
    alert('Wlecome')
}
let id = setInterval(popup() {
}, 5*1000)
setTimeout(function() {
    clearInterval(id)
},10*1000 );

let button_id = document.getElementById('button_id')
do (setInterval(function() {
    
}, 5*1000);
setTimeout(function(){clearInterval(button_id), 10*1000})
) while (click)