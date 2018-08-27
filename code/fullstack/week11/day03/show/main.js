const input = require("./cli.js");
const fs = require("fs");

console.log("here");

console.log(input)



//========================================

function writeResults() {
    fs.appendFile("log.txt",
    "show: " + "name of show"
     + "\n\nGenre(s): " + "genres"
     + "\n\nRating: " + "rating"
     + "\n\nNetwork: " + "network" 
     + "\n\nSummary: " + "summary\n\n\n"
    , function(error) {
        if(error) {
            console.log(error);
            return;
        }
    })
}

//writeResults();


// request(queryUrl, function(error, response, body) {
//   });