const solar_system_planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
];

const planet_colors =  [
    "gray", "yellow", "blue", "red", "orange", "gold", "lightblue", "darkblue"
]

const container = document.querySelector('.listPlanets');
index = 0
solar_system_planets.forEach((planet_name, index) =>{ 
    let div =document.createElement('div');
    div.classList.add('planet');
    div.innerText = planet_name;
    div.style.backgroundColor=planet_colors[index];
    container.appendChild(div);
})
