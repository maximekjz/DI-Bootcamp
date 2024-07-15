let wordsArray = ["apple", "pear", "banana", "melon", "kiwi"];

function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    let every = words.every((word) => typeof word === "string");
    if (every) {
      resolve(words.map((word) => word.toUpperCase()));
    } else {
      reject("Error: Not all items are strings");
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      resolve(words.sort());
    } else {
      reject("Error: Array is less or equal to 4");
    }
  });
}

makeAllCaps(wordsArray)
  .then((uppercaseWords) => {
    console.log(uppercaseWords);
    return sortWords(uppercaseWords);
  })
  .then((sort) => {
    console.log(sort);
  })
  .catch((err) => {
    console.log(err);
  });
