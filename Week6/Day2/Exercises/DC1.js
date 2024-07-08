const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// The new array should look like this :
// const usernames = ["john!", "becky!", "susy!", "tyson!"]
let names = []
let usernames = (array) => {
    array.forEach((user) => {
        names.push(user.username+'!')
    })
    return names;
}
console.log(usernames(gameInfo))

// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// The new array should look like this :
const winners = []
const username_moreFive = (array) => {
    array.forEach((user) => {
        if(user.score > 5){
            winners.push(`username : ${user.username}, score : ${user.score}`)
        }
    })
    return winners;
}
console.log(username_moreFive(gameInfo))
// const winners = ["becky", "susy"]


// 3. Find and display the total score of the users. (Hint: The total score is 71)
let total_score = gameInfo.reduce((total, item) => total + item.score, 0)
console.log(total_score)


const total_score_1 = (array) => {
    let score_total = 0
    array.forEach((user) => {
        score_total += Number(user.score)
    })
    return score_total
}
console.log(total_score_1(gameInfo))