const { readfile, writefile } = require("./fileManager");

readfile('./Hello World.txt', function (err, data) {
    if (err) {
        console.error('Error reading file:', err);
    }
});
        
writefile('./Bye World.txt', 'Writing to the file', function (err) {
    if (err) {
        console.error('Error writing file:', err);
    }
});

readfile('./Bye World.txt', function (err, data) {
    if (err) {
        console.error('Error reading file:', err);
    } 
});


