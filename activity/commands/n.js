var fs = require('fs'); 
const readline = require('readline'); 

//4- node wcat -n filepath => give numbering to all the lines 

function displayn(dirPath){
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
            console.log(i++," ",line); 
        });
    }
}

module.exports = {
    funn : displayn
}