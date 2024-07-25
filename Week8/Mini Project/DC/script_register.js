document.addEventListener('DOMContentLoaded', () => {
    const addForm = document.getElementById('addForm');
    const errorMessage = document.getElementById('error-message');

    addForm.addEventListener('submit', async function(event) {
        event.preventDefault(); 

        const sport = document.getElementById('sport').value;
        const city = document.getElementById('city').value;
        const address = document.getElementById('address').value;
        const groundName = document.getElementById('groundName').value;
        const imageInput = document.getElementById('image');
        
        if (!sport || !city || !address || !groundName || !imageInput.files[0]) {
            alert('Please populate all the fields');
            return;
        }

        const imageFile = imageInput.files[0];
        const formData = new FormData();
        formData.append('sport', sport);
        formData.append('city', city);
        formData.append('address', address);
        formData.append('groundName', groundName);
        formData.append('image', imageFile);

        try {
            const response = await fetch('http://localhost:5001/api/grounds', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                console.log('Playground added successfully');
                alert(result.message);
                window.location.href = '/index.html';  
            } else {
                console.error('Error registering user:', result.message);
                errorMessage.textContent = result.message;
            }
        } catch (error) {
            console.error('Error:', error);
            errorMessage.textContent = error.message;
        }
    });
});
