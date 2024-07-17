const fs = require('fs');


fs.readdir('./file-explorer', (err, files) => {
    if (err) {
        console.error(err)
        return
    }

    console.log('files: ', files)
})