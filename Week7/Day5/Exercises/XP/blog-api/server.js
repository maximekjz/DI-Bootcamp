let data = [
    {id:1, title:'article1', content:'sport'},
    {id:2, title:'article2', content:'art'},
    {id:3, title:'article3', content:'politics'}
]

const express = require("express");
const app = express();
app.use(express.json());


app.listen(5500, () => {
    // console.log("run on 5500");
  });

// GET /posts: Return a list of all blog posts.
app.get("/data", (req, res) => {
    if(!data) return res.sendStatus(404)
    res.json(data)
})

// GET /posts/:id: Return a specific blog post based on its id.
app.get("/data/:id", (req, res) => {
    const {id} = req.params
    const id_data = data.find((item) => item.id == id)
    if(!id_data) return res.status(404).json({ message: "ID not found" });
    res.json(id_data)
})

// POST /posts: Create a new blog post.
app.post("/data", (req, res) => {
    const {title, content} = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: "Title and content are required" });
    }
    const new_blog = {
        id: data.length +1,
        title : title,
        content : content
    }
    data.push(new_blog)
    res.json(data)
})

// PUT /posts/:id: Update an existing blog post.
app.put("/data/:id", (req, res) =>{
    const {id} = req.params
    const {title, content} = req.body
    const index = data.findIndex((item) => item.id == id);
    if (index === -1) {
        return res.status(404).json({ message: "not found" });
      }
    data[index] = {
        ...data[index],
        title : title,
        content: content
    }
    res.json({data, msg: "updated"})
})

// DELETE /posts/:id: Delete a blog post.
app.delete("/data/:id", (req, res) => {
    const {id} = req.params
    const index = data.findIndex((item) => item.id == id)
    if (index===-1){
        return res.status(404).json({message : "not found"})
    }

    data.splice(index, 1)
    res.json(data)

})

// Start the Express app and listen on a specified port (e.g., 3000).