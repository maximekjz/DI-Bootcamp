const fs = require('fs');

fs.readFile('./file-explorer/source.txt' ,'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.log(data);
});

fs.copyFile('./file-explorer/source.txt', './file-explorer/destination.txt', (err) => {
    if (err) return console.error(err);
    console.log("File copied");
  });