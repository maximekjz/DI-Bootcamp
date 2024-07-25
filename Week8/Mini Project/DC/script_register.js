document.getElementById('button').addEventListener('click',async function(event){
    event.preventDefault(); 

    const formData= { 
        first_name : document.getElementById('f_name').value,
        last_name : document.getElementById('l_name').value,
        email : document.getElementById('email').value,
        username : document.getElementById('username').value,
        password : document.getElementById('password').value  
    }
    if(formData.first_name === '' || formData.last_name === '' || formData.email === '' || formData.username === '' || formData.password === '') {
        alert('Please populate all the fields');
    }
    else{
        try {
            const response = await fetch('http://localhost:5001/user/register', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const result = await response.json();

            if (response.ok) {
                console.log('User registered successfully');
                alert(result.message);
                window.location.href = '/index.html';  

            } else {
                console.error('Error registering user:', result.message);
                document.getElementById('error-message').textContent = result.message;
            }
        } catch (error) {
          console.error('Error:', error);
        }
    }
})

