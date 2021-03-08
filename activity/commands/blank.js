
// Importing the Required Modules 
const fs = require('fs'); 
const readline = require('readline');







function displayFiles(arrOfFilesPath){
    for(let i=0;i<arrOfFilesPath.length;i++){
        dirPath = arrOfFilesPath[i];
        const file = readline.createInterface({ 
            input: fs.createReadStream(dirPath), 
            output: process.stdout, 
            terminal: false
        });
        file.on('line', (line) => { 
            console.log(line); 
        });

    }
}

module.exports = {
    funEmpty : displayFiles
}
