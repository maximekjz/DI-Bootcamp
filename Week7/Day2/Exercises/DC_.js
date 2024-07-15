




document.getElementById('deleteButton').addEventListener('click', function() {
    let gif_cat = document.getElementById("category");
    if (gif_cat) { // Vérifie si l'élément existe
        gif_cat.value = "";
    } else {
        console.error('Element with id "category" not found');
    }
});

let categoryInputs = document.getElementsByName('category');
categoryInputs.forEach(input => {
    input.addEventListener('input', function(event) {
        const gif_cat = event.target.value.trim().toLowerCase();

        fetch(`https://api.giphy.com/v1/gifs/search?q=${gif_cat}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok ' + res.statusText);
                }
                return res.json();
            })
            .then((post) => {
                if (post.data.length > 0) {
                    const gif_url = post.data[0].images.original.url; // Accès à l'URL de l'image originale du GIF
                    const show_gif = document.getElementById('root');

                    // Vider le contenu précédent de la div
                    show_gif.innerHTML = '';

                    // Créer un élément img et définir sa source
                    const img = document.createElement('img');
                    img.src = gif_url;
                    img.alt = 'GIF';

                    // Ajouter l'image à la div
                    show_gif.appendChild(img);
                } else {
                    console.log('No GIF found');
                }
            })
            .catch((e) => {
                console.log(e);
            });
    });
});
