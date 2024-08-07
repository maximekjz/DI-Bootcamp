let grounds = [];    
let likedGrounds;
let currentIndex = 0;  
const itemsPerPage = 10;

function create_ground(grounds) {
    const container = document.getElementById('grounds-container');
    container.innerHTML = ''; 

    const groundsToDisplay = grounds.slice(currentIndex, currentIndex + itemsPerPage);

    groundsToDisplay.forEach((ground) => {
        const newDiv = document.createElement('div');
        newDiv.classList.add(`ground-id-${ground.id}`);
        newDiv.id = 'ground_card';

        const imageLink = document.createElement('a');
        imageLink.href = `/${ground.url}`; 
        imageLink.classList.add('ground-link');
        console.log({'URL':  ground.url});

        // need to add the default value here and not in the HTML 
        const newImage = document.createElement('img');
        newImage.src = ground.image; 
        newImage.alt = `Ground ${ground.id}`;
        newImage.classList.add('ground-image');
        imageLink.appendChild(newImage);
        newDiv.appendChild(imageLink);


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
        newAddress.textContent = ground.address || 'No address available';
        newAddress.classList.add('ground-address');
        newDiv.appendChild(newAddress);

        const add_like = document.createElement('p');
        add_like.textContent = 'Add to my playgrounds ';
        newDiv.appendChild(add_like);

        const likeButton = document.createElement('button');
        likeButton.classList.add('like-button');
        likeButton.innerHTML = '<i class="fas fa-heart"></i>';

        likeButton.addEventListener('click', function() {
            const userid = localStorage.getItem('userid');
            if (!userid) {
                console.error('User ID is not available');
                return;
            }
            const isLiked = likeButton.classList.toggle('liked');
            if (isLiked) {
                addLike(userid, ground.id);
            } else {
                removeLike(userid, ground.id);
            }
        });
        newDiv.appendChild(likeButton);

        container.appendChild(newDiv);
    });

    if (currentIndex + itemsPerPage < grounds.length) {
        let moreButton = document.getElementById('more-button');
        if (!moreButton) {
            moreButton = document.createElement('button');
            moreButton.id = 'more-button';
            moreButton.textContent = 'See more';
            moreButton.addEventListener('click', () => {
                currentIndex += itemsPerPage;
                create_ground(grounds);
            });
            container.appendChild(moreButton);
        }
    } else {
        const moreButton = document.getElementById('more-button');
        if (moreButton) {
            moreButton.remove(); 
        }
    }
}

async function displayAllGrounds() {
    try {
        const url = 'http://127.0.0.1:5001/api/grounds';
        console.log('Fetching URL:', url);
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Fetched Grounds:', data); 
        grounds = data;
        create_ground(grounds);
    } catch (error) {
        console.error('Error fetching grounds:', error);
    }
}

async function addLike(userid, groundid) {
    try {
        const response = await fetch('http://localhost:5001/api/like', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userid, groundid }),
        });
        const result = await response.json();
        console.log(result.message);
    } catch (error) {
        console.error('Error adding like:', error);
    }
}

async function removeLike(userid, groundid) {
    try {
        const response = await fetch('http://localhost:5001/api/like', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userid, groundid }),
        });
        const result = await response.json();
        console.log(result.message);
    } catch (error) {
        console.error('Error removing like:', error);
    }
}

async function getLikes(userid) {
    try {
        const response = await fetch(`http://localhost:5001/api/like/${userid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log('Response data:', data);

        const likedGroundIds = data.likes; 
        console.log('All grounds:', grounds);
        console.log('Liked Ground IDs:', likedGroundIds);

        likedGrounds = grounds.filter(ground => likedGroundIds.some(like => like.groundid === ground.id));
        console.log('Filtered liked grounds:', likedGrounds); 

        updateMyGroundsContainer(likedGrounds);
    } catch (error) {
        console.error('Error fetching likes:', error);
    }
}

function updateMyGroundsContainer(likedGrounds) {
    const container = document.getElementById('my-grounds-container');
    container.innerHTML = ''; 
    console.log('a' + likedGrounds);
    if (likedGrounds.length === 0) {
        console.log('No liked grounds found');
        container.innerHTML = '<p>No liked grounds found.</p>';
        return;
    }

    likedGrounds.forEach((ground) => {
        const newDiv = document.createElement('div');
        newDiv.classList.add(`ground-id-${ground.id}`);
        newDiv.id = 'my-ground_card';

        // need to add the default value here and not in the HTML
        const newImage = document.createElement('img');
        newImage.src = ground.image; 
        newImage.alt = `Ground ${ground.id}`;
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
        newAddress.textContent = ground.address || 'No address available';
        newAddress.classList.add('ground-address');
        newDiv.appendChild(newAddress);

        container.appendChild(newDiv);
    });
}

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
        console.log('Grounds:', grounds);

        let filteredGrounds;
        if (resLength > 0) {
            filteredGrounds = grounds.filter(ground => {
                const groundName = ground.groundname.toLowerCase();
                return groundName.substr(0, resLength) === research;
            });
        } else {
            filteredGrounds = grounds;
        }
        create_ground(filteredGrounds);
    });

    async function init() {
        await displayAllGrounds();
        const userid = localStorage.getItem('userid');
        if (userid) {
            await getLikes(userid);
        } else {
            console.error('User ID is not available');
        }
    }

    init();
});

document.getElementById('logoutLink').addEventListener('click', function(event) {
    event.preventDefault(); 

    fetch('/logout', { method: 'GET' })
      .then(() => {
        localStorage.removeItem('token'); 
        window.location.href = '/login';
      })
      .catch(error => console.error('Erreur lors de la déconnexion:', error));
});