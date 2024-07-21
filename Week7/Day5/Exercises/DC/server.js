const express = require("express")
const app = express();
const {emojis} = require('./emojis')

app.listen(5500, () => {
    console.log('The server is running on port 5500');
});


app.get('/emojis', (req, rest) => {
const random_index = Math.floor(Math.random()*emojis.length)
const random_emoji = emojis[random_index]
rest.json({random_emoji})
})


app.use("/", express.static(__dirname+"public"))


