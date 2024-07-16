document.getElementById('button').addEventListener('click', async function(event) {
    event.preventDefault();

    document.getElementById('name').textContent = "";
    document.getElementById('height').textContent = "";
    document.getElementById('gender').textContent = "";
    document.getElementById('birth-year').textContent = "";
    document.getElementById('home-world').textContent = "";
    document.querySelector('.loader').style.display = 'block';

    let random_number = Math.floor(Math.random() * 83) + 1;

    try {
        const res = await fetch(`https://www.swapi.tech/api/people/${random_number}`);
        if (!res.ok) {
            throw new Error("Oh No! That person isn't available");
        }
        const data = await res.json();
        console.log(data)
        const get_name = data.result.properties.name;
        const get_height = data.result.properties.height;
        const get_gender = data.result.properties.gender;
        const get_birth = data.result.properties.birth_year;
        const get_home = data.result.properties.homeworld;

        const planet_res = await fetch(get_home);
        if (!planet_res.ok) {
            throw new Error("Oh No! That planet isn't available");
        }
        console.log(planet_res)
        const planetData = await planet_res.json();
        const planet_name = planetData.result.properties.name;

        document.getElementById('name').textContent = `Name: ${get_name}`;
        document.getElementById('height').textContent = `Height: ${get_height}`;
        document.getElementById('gender').textContent = `Gender: ${get_gender}`;
        document.getElementById('birth-year').textContent = `Birth Year: ${get_birth}`;
        document.getElementById('home-world').textContent = `Home World: ${planet_name}`;

    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        document.querySelector('.loader').style.display = 'none';
    }
});
