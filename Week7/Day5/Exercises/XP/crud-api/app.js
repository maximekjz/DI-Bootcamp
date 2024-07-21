const express = require("express");
const app = express();
app.use(express.json());


app.listen(3000, () => {
    console.log("run on 3000");
  });


const { fetchPosts } = require('./data/dataService.js')

app.get('/posts', (req, res) => {
    fetchPosts('https://jsonplaceholder.typicode.com/posts')
    .then((posts) =>{
        res.json(posts)
        console.log('success')
    })
    .catch((error)=>{
        res.status(404).json({error: 'Error fetching posts' });
    })

})