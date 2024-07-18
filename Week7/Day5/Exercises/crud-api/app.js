const express = require("express");
const axios = require("axios");
const app = express()

app.listen(5000, () => {
    console.log('The server is running on port 5500');
})

const { fetchPosts } = require('./data/dataService.js')

app.get("/posts", (req, res)=>{
    fetchPosts("https://jsonplaceholder.typicode.com/posts")
    .then(posts=>{
        res.json(posts)
        console.log('success')
    })
    .catch(err=>{
        res.status(404).json({err: 'Error fetching posts' })
    })
})
