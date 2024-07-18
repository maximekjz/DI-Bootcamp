const express = require("express");
const app = express()

let data = [
  {id:'bloger1', title: 'article1', content:'sports'},
  {id:'bloger2', title: 'article2', content:'politics'},
  {id:'bloger3', title: 'article3', content:'art'}
]

app.listen(5000, () => {
})


app.get("/data", (req, res) =>{
    res.json(data)
})

app.get("/data/:id", (req, res) =>{
  const {id} = req.params;
  const id_data = data.find((item)=> item.id == id);
  if (!id_data) return res.status(404).send('Route not found')
  res.json(id_data)
})
