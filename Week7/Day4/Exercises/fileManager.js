
// 🌟 Exercise 3: 

const fs = require('fs');

const writefile = (address, your_text, callback) => {
    fs.writeFile(address, your_text, function (err) {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log(`File ${address} has been written successfully with: ${your_text}`);
        }
        callback(err);
    });
}

const readfile = (address, callback) => {
    fs.readFile(address, 'utf-8', function (err, data) {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            console.log('File content:', data);
        }
        callback(err, data);
    });
}

module.exports = {
    writefile,
    readfile
};
