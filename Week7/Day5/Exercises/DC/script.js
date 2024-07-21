const url = 'http://127.0.0.1:5501/emojis'

const random_emoji = document.getElementById('emoji')

const emojis = () => {
    fetch(url)
    .then(res => res.json())
    .then(emojis => {console.log(emojis.random_emoji);
        random_emoji.innerHTML = emojis.random_emoji.emoji
    })
    .catch((e) => {console.log(e)})
}

emojis()

