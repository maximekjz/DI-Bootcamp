document.getElementById('add-ground-form').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const formData = new FormData();
    formData.append('sport', document.getElementById('sport').value);
    formData.append('city', document.getElementById('city').value);
    formData.append('address', document.getElementById('address').value);
    formData.append('groundName', document.getElementById('groundName').value);
    formData.append('image', document.getElementById('image').files[0]);

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
            console.error('Error adding ground:', result.message);
            document.getElementById('error-message').textContent = result.message;
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
