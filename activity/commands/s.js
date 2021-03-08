var fs = require('fs'); 
const readline = require('readline'); 

//3- node wcat.js -s filepath => convert big line breaks into a singular line break

function displays(dirPath){
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

        let i = 1 ,lb = 0;
        file.on('line', (line) => { 
            if(line.length > 0) {
                if(lb>0) console.log();
                console.log(line);
                lb = 0;
            }else{
                lb++;
            }
        });
    }
}

module.exports = {
    funS : displays
}