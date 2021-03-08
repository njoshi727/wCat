var fs = require('fs'); 
const readline = require('readline'); 

//5- node wcat -b filepath => give numbering to non-empty lines

function displayb(dirPath){
    //Checking if dirPath is undefined
    if(dirPath == undefined){
        console.log("No Directory Path Error !");
        return;
    }
    else if(!fs.statSync(dirPath).isFile()){
        console.log("Given Path is not FILE Error !");
        return;
    }else{
        const file = readline.createInterface({ 
            input: fs.createReadStream(dirPath), 
            output: process.stdout, 
            terminal: false
        });

        let i = 1;
        file.on('line', (line) => { 
            if(line.length >0 ) console.log(i++," ",line); 
        });
    }
}

module.exports = {
    funB : displayb
}