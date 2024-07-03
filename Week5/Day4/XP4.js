let form = document.querySelector('form')

let radius = document.getElementsByName('radius')[0]

form.addEventListener('submit', function(e){
    e.preventDefault();
    let radius = parseFloat(e.target.elements["radius"].value);
    if (isNaN(radius) || radius <= 0) {
        alert('Please populate the radius field with a positive number');
    return;
    }
    console.log('Radius:', e.target.elements["radius"].value);

volume(radius) 

});

function volume(radius){
    let vol = (4/3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('volume').value = vol.toFixed(2);
}

