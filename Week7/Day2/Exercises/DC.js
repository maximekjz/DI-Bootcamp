// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. 
// This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending 
// on the search of the user (ie. If the search is “sun”, 
// append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. 
// Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.


document.getElementById('deleteButton').addEventListener('click', function() {
    let gif_cat1 = document.getElementById('category')
    gif_cat1.value = ""
    let show_gif = document.getElementById('root');
    if (show_gif) {
        show_gif.innerHTML = '';  
  };
})
  let categoryInput = document.getElementsByName('category');
    categoryInput.forEach(input => {
      input.addEventListener('input', function(event) {
          const gif_cat = event.target.value.trim().toLowerCase();
          console.log(gif_cat);
// Didn't manage to display random GIF
        fetch(`https://api.giphy.com/v1/gifs/search?q=${gif_cat}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
        })
        .then((res) => {
            return res.json();
        })
        .then((post) => {
            if(post.data.length>0){
                let url_get = post.data[0].images.original.url
                console.log("GIF URL:", url_get);
                let show_gif = document.getElementById('root')
                show_gif.innerHTML = '';
                let img = document.createElement('img');
                img.src = url_get;
                img.alt = 'GIF';
                show_gif.appendChild(img);
            }
        })
        .catch((e) => {
            console.log(e);
        })
    })
})


