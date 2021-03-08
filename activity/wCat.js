const {funEmpty} = require("./commands/blank.js")
const {funB} = require("./commands/b.js")
const {funn} = require("./commands/n.js");
const {funS} = require("./commands/s.js");
const {funSB} = require("./commands/sb.js")
const {funSN} = require("./commands/sn.js")

var myArgs = process.argv.slice(2);

if(myArgs[0]== '-s' && myArgs[1] == '-n' || (myArgs[0] == '-n' && myArgs[1] == '-s')){
    
    funSN(myArgs[2]);

}
else if(myArgs[0]== '-s' && myArgs[1] == '-b' || (myArgs[0] == '-b' && myArgs[1] == '-s')){
    
    funSB(myArgs[2]);

}
else if(myArgs[0] == '-s'){

    funS(myArgs[1]);

}
else if(myArgs[0] == '-n'){

    funn(myArgs[1]);

}
else if(myArgs[0] == '-b'){

    funB(myArgs[1]);

}
else{
    funEmpty(myArgs);
}