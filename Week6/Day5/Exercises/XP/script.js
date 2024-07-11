const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

    document.addEventListener('DOMContentLoaded', function() {
        create_card(robots); 
    });

    document.getElementById('userForm').addEventListener('input', function(event) {
        event.preventDefault();
        const research = event.target.value.trim().toLowerCase()
        const resLength = research.length
        console.log(research)
        console.log(resLength)
        let filteredRobots;
        if(resLength>0){
            filteredRobots = robots.filter(robot =>{
            const robotName = robot.name.toLowerCase();
            return robotName.substr(0,resLength) === research
            })
        }
        else {filteredRobots = robots;
        }
        const container = document.getElementById('robots_section');
        container.innerHTML = '';
    
        create_card(filteredRobots);
    })

    function create_card(object){
        const container = document.getElementById('robots_section');
        object.forEach((robot) => {
            const newDiv = document.createElement('div');
            newDiv.classList.add(`robot-id-${robot.id}`);
            newDiv.id = `robot_card`;
            newDiv.setAttribute('data-username', robot.username);

            const newImage = document.createElement('img');
            newImage.src = `${robot.image}`;
            newImage.alt = `robot ${robot.id}`;
            newImage.classList.add('robot-image');
            newDiv.appendChild(newImage);

            const newName = document.createElement('p');
            newName.textContent = robot.name;
            newName.classList.add('robot-name');
            newDiv.appendChild(newName);
    
            const newMail = document.createElement('p');
            newMail.textContent = robot.email;
            newMail.classList.add('robot-mail');
            newDiv.appendChild(newMail);

            container.appendChild(newDiv);
            
        })
    }