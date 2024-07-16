document.getElementById('button').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('name').textContent="";
    document.getElementById('height').textContent="";
    document.getElementById('gender').textContent="";
    document.getElementById('birth-year').textContent="";
    document.getElementById('home-world').textContent="";
    document.querySelector('.loader').style.display = 'block';
    let random_number = Math.floor(Math.random() * 83) + 1;

    fetch(`https://www.swapi.tech/api/people/${random_number}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Oh No! That person isn't available");
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            let get_name = data.result.properties.name;
            let get_height = data.result.properties.height;
            let get_gender = data.result.properties.gender;
            let get_birth = data.result.properties.birth_year;
            let get_home = data.result.properties.homeworld;

            return fetch(get_home)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Oh No! That planet isn't available");
                    }
                    return res.json();
                })
                .then((data_planet) => {
                    console.log(data_planet);
                    let planet_name = data_planet.result.properties.name;
                    let homeElement = document.getElementById('home-world');
                    homeElement.textContent = `Home World: ${planet_name}`;
                    return { get_name, get_height, get_gender, get_birth }
                })
                .catch((e) => {
                    console.log(e);
                });
            })
        .then(({ get_name, get_height, get_gender, get_birth }) => {
            let nameElement = document.getElementById('name');
            let heightElement = document.getElementById('height');                
            let genderElement = document.getElementById('gender');
            let birthElement = document.getElementById('birth-year');
    
            nameElement.textContent = `Name: ${get_name}`;
            heightElement.textContent = `Height: ${get_height}`;
            genderElement.textContent = `Gender: ${get_gender}`;
            birthElement.textContent = `Birth Year: ${get_birth}`;
        
            document.querySelector('.loader').style.display = 'none';
    })
        .catch((error) => {
            console.error("Error fetching data:", error);
            document.querySelector('.loader').style.display = 'none';
        });
});
