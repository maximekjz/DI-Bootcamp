const container_color = document.querySelectorAll('.container-colors > div:not(.button)');
const mouseover_color = document.querySelectorAll('.main > div')

container_color.forEach(div=>{
    let color = div.style.backgroundColor;
    div.addEventListener('click', function (){
        console.log('Selected color:', color);
        mouseover_color.forEach(div_over=>{
            div_over.addEventListener('click', function(){
                this.style.backgroundColor = color;
            })
        })
    });
});

function myMove(){
    mouseover_color.forEach(div_over=>{
    div_over.style.backgroundColor = 'white'
})
}
