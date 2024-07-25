console.log('DOMContentLoaded  fired');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');
    const userForm = document.getElementById('userForm');
    if (!userForm) {
        console.error('Element with ID "userForm" not found');
        return;
    }

    
    userForm.addEventListener('input', function(event) {
        event.preventDefault();
        const research = event.target.value.trim().toLowerCase();
        const resLength = research.length;
        console.log(research);
        console.log(resLength);
        let filteredGrounds;
        if (resLength > 0) {
            filteredGrounds = grounds.filter(ground => {
                const groundName = ground.groundname.toLowerCase();
                return groundName.substr(0, resLength) === research;
            });
        } else {
            filteredGrounds = grounds;
        }
        const container = document.getElementById('grounds-container');
        container.innerHTML = '';
        create_ground(filteredGrounds);
    });

    async function displayAllGrounds() {
        try {
            const url = '/api/grounds';
            console.log('Fetching URL:', url);
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const grounds = await response.json();
            console.log('Fetched Grounds:', grounds); 
            create_ground(grounds);
        } catch (error) {
            console.error('Error fetching grounds:', error);
        }
    }
    

    function create_ground(grounds) {
        const container = document.getElementById('grounds-container');
        container.innerHTML = ''; 

        grounds.forEach((ground) => {
            const newDiv = document.createElement('div');
            newDiv.classList.add(`ground-id-${ground.id}`);
            newDiv.id = `ground_card`;

            const newImage = document.createElement('img');
            newImage.src = ground.image || '/path/to/default/image.jpg';
            newImage.alt = `ground ${ground.id}`;
            newImage.classList.add('ground-image');
            newDiv.appendChild(newImage);

            const newName = document.createElement('p');
            newName.textContent = ground.groundname || 'No name available';
            newName.classList.add('ground-name');
            newDiv.appendChild(newName);

            const newSport = document.createElement('p');
            newSport.textContent = ground.sport || 'No sport available';
            newSport.classList.add('ground-sport');
            newDiv.appendChild(newSport);

            const newCity = document.createElement('p');
            newCity.textContent = ground.city || 'No city available';
            newCity.classList.add('ground-city');
            newDiv.appendChild(newCity);

            const newAddress = document.createElement('p');
            newAddress.textContent = ground.address || 'No address available'
            newAddress.classList.add('ground-address');
            newDiv.appendChild(newAddress);

            container.appendChild(newDiv);
        });
    }

    displayAllGrounds();
});


